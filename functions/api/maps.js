// /api/maps — shared, editable city maps (Cloudflare D1).
//
// One map document = alliance roster + 7 stage snapshots of territory owners.
// City levels unlock progressively, so stage N is the plan you use while only
// Lv.1..N cities exist on the server.
//
// Access model
//   readMode  'public'   anyone with the link
//             'password' needs the view password
//             'owner'    only the owner token
//   writeMode 'open'     anyone with the link
//             'password' needs the edit password
//             'owner'    only the owner token
// The owner token is returned exactly once, on create/fork, and is stored
// hashed. Passwords use PBKDF2-SHA256 (legacy salted SHA-256 remains readable);
// raw passwords never leave the request.
//
// Routes
//   GET  /api/maps?list=1        public index (q, server, offset, limit)
//   GET  /api/maps?id=<id>       one map (X-Map-Read / X-Map-Owner headers)
//   GET  /api/maps?id=<id>&history=1
//   GET  /api/maps?id=<id>&revision=<rev>
//   POST /api/maps               { action: create|save|fork|delete|unlock|restore }
import { d1Store } from './_maps-store.js';
import { json } from './_store.js';

const MAX_DOC = 200000;
const MAX_NAME = 80;
const MAX_SERVER = 40;
const ID_RE = /^[a-z0-9]{8,16}$/;
const TOKEN_RE = /^[a-f0-9]{32,64}$/;
const ID_ALPHABET = 'abcdefghijkmnpqrstuvwxyz23456789';
const STAGES = 7;
const WINDOW_MS = 10 * 60 * 1000;
const CREATE_WINDOW_MS = 60 * 60 * 1000;
const MAX_TRIES = 8;
const MAX_GLOBAL_TRIES = 30;
const MAX_CREATES = 10;
const MAX_OWNER_CREATES = 8;
const PBKDF2_ITERATIONS = 100000;
const READ_MODES = new Set(['public', 'password', 'owner']);
const WRITE_MODES = new Set(['open', 'password', 'owner']);
const BLOCKED_NAME = /(?<![\p{L}\p{N}])(?:еб\S*|хуй|блядь|сука|пизд|fuck(?:ing|ed|er|s)?|shit(?:ty|ing|s)?|bullshit|bitch(?:es)?|nigg(?:er|a)?s?|porn|nsfw|xxx|cunt)(?![\p{L}\p{N}])/iu;

const enc = new TextEncoder();

function hex(buf) {
  const b = new Uint8Array(buf);
  let out = '';
  for (let i = 0; i < b.length; i++) out += b[i].toString(16).padStart(2, '0');
  return out;
}

async function sha256(text) {
  return hex(await crypto.subtle.digest('SHA-256', enc.encode(text)));
}

async function pbkdf2(password, salt, iterations) {
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations, hash: 'SHA-256' },
    key,
    256,
  );
  return hex(bits);
}

function randomHex(bytes) {
  const b = new Uint8Array(bytes);
  crypto.getRandomValues(b);
  let out = '';
  for (let i = 0; i < b.length; i++) out += b[i].toString(16).padStart(2, '0');
  return out;
}

function newId() {
  const b = new Uint8Array(10);
  crypto.getRandomValues(b);
  let out = '';
  for (let i = 0; i < b.length; i++) out += ID_ALPHABET[b[i] % ID_ALPHABET.length];
  return out;
}

function ipOf(req) {
  return (
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    'local'
  );
}

function str(v, max) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function cleanDisplayText(v, max) {
  return str(v, max).normalize('NFKC').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
}

function blockedName(v) {
  return BLOCKED_NAME.test(cleanDisplayText(v, 200).toLowerCase());
}

/** Keep only what the planner can actually produce, so the DB cannot be used
 *  as arbitrary blob storage by a third party. */
function sanitizeDoc(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const alliances = [];
  const seen = new Set();
  const arr = Array.isArray(raw.alliances) ? raw.alliances : [];
  for (let i = 0; i < arr.length && alliances.length < 40; i++) {
    const a = arr[i];
    if (!a || typeof a !== 'object') continue;
    const id = str(a.id, 40);
    if (!/^[A-Za-z0-9_-]{1,40}$/.test(id) || seen.has(id)) continue;
    seen.add(id);
    alliances.push({
      id,
      name: str(a.name, 40),
      color: /^#[0-9a-f]{6}$/i.test(a.color) ? a.color : '#e11d48',
      icon: str(a.icon, 8),
    });
  }

  const stages = [];
  for (let i = 0; i < STAGES; i++) {
    const src = Array.isArray(raw.stages) ? raw.stages[i] : null;
    const owners = src && src.o && typeof src.o === 'object' ? src.o : {};
    const clean = {};
    let n = 0;
    for (const city of Object.keys(owners)) {
      if (n >= 200) break;
      if (!/^C\d{2}$/.test(city)) continue;
      const owner = owners[city];
      if (typeof owner !== 'string' || !seen.has(owner)) continue;
      clean[city] = owner;
      n++;
    }
    stages.push({ o: clean });
  }
  return { v: 2, actor: cleanDisplayText(raw.actor, 40), alliances, stages };
}

function parseDoc(row) {
  try {
    return JSON.parse(row.doc);
  } catch {
    return { v: 2, actor: '', alliances: [], stages: [] };
  }
}

function mapSummary(row) {
  let preview = row.preview;
  if (typeof preview === 'string') {
    try { preview = JSON.parse(preview); } catch { preview = []; }
  }
  if (!Array.isArray(preview)) preview = [];

  if (row.cityCount === undefined || row.allianceCount === undefined) {
    const doc = parseDoc(row);
    const owners = doc.stages && doc.stages[6] && doc.stages[6].o ? doc.stages[6].o : {};
    const counts = new Map();
    for (const owner of Object.values(owners)) counts.set(owner, (counts.get(owner) || 0) + 1);
    const alliances = Array.isArray(doc.alliances) ? doc.alliances : [];
    preview = alliances
      .map((a) => ({ id: a.id, color: a.color, icon: a.icon, count: counts.get(a.id) || 0 }))
      .filter((a) => a.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 12);
    return {
      id: row.id,
      name: row.name,
      server: row.server,
      rev: row.rev,
      forkedFrom: row.forkedFrom,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
      actor: doc.actor || '',
      cityCount: Object.keys(owners).length,
      allianceCount: alliances.length,
      preview,
    };
  }

  return {
    id: row.id,
    name: row.name,
    server: row.server,
    rev: row.rev,
    forkedFrom: row.forkedFrom,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    actor: row.actor || '',
    cityCount: Number(row.cityCount) || 0,
    allianceCount: Number(row.allianceCount) || 0,
    preview,
  };
}

function revisionSummary(row) {
  return {
    rev: row.rev,
    name: row.name,
    server: row.server,
    actor: row.actor,
    createdAt: row.createdAt,
  };
}

function toClient(row) {
  let doc;
  try {
    doc = JSON.parse(row.doc);
  } catch {
    doc = { v: 2, alliances: [], stages: [] };
  }
  return {
    id: row.id,
    name: row.name,
    server: row.server,
    rev: row.rev,
    forkedFrom: row.forkedFrom,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    readMode: row.readMode,
    writeMode: row.writeMode,
    hasReadPassword: !!row.readHash,
    hasWritePassword: !!row.writeHash,
    actor: doc.actor || '',
    doc,
  };
}

async function isOwner(row, token) {
  if (!token || !TOKEN_RE.test(token) || !row.ownerHash) return false;
  return (await sha256(token)) === row.ownerHash;
}

async function verifyPassword(password, salt, stored) {
  if (!password || !stored) return false;
  const parts = stored.split('$');
  if (parts[0] === 'pbkdf2') {
    const iterations = Number(parts[1]);
    if (!Number.isInteger(iterations) || iterations < 10000 || iterations > 1000000) return false;
    return (await pbkdf2(password, parts[2] || salt, iterations)) === parts[3];
  }
  // Legacy salted SHA-256 hashes remain valid; the next password change
  // upgrades them to PBKDF2 automatically.
  return (await sha256(salt + ':' + password)) === stored;
}

async function readAllowed(row, req, readPassword) {
  if (row.readMode === 'public') return true;
  if (row.readMode === 'owner') {
    return isOwner(row, req.headers.get('x-map-owner') || '');
  }
  const pw = readPassword || req.headers.get('x-map-read') || '';
  if (!pw || !row.readHash) return false;
  return verifyPassword(pw, row.readSalt, row.readHash);
}

async function writeAllowed(row, req, body) {
  if (await isOwner(row, body.ownerToken || req.headers.get('x-map-owner') || '')) return true;
  if (row.writeMode === 'open') return true;
  if (row.writeMode === 'password') {
    const pw = body.writePassword || req.headers.get('x-map-write') || '';
    if (!pw || !row.writeHash) return false;
    return verifyPassword(pw, row.writeSalt, row.writeHash);
  }
  return false;
}

function throttleIdent(req, id) {
  return sha256(ipOf(req) + '|' + id).then((h) => h.slice(0, 32));
}

async function tooMany(store, ident, limit = MAX_TRIES, windowMs = WINDOW_MS) {
  const n = await store.bumpAttempt(ident, Date.now(), windowMs);
  return n > limit;
}

async function enforceCreateQuota(req, store, ownerIdentity) {
  const createIdent = await throttleIdent(req, 'create');
  const createCount = await store.bumpAttempt(createIdent, Date.now(), CREATE_WINDOW_MS);
  if (createCount > MAX_CREATES) return 'too many maps created';

  if (typeof ownerIdentity === 'string' && /^[a-f0-9]{32,64}$/.test(ownerIdentity)) {
    const ownerIdent = await sha256('owner:' + ownerIdentity);
    const ownerCount = await store.bumpAttempt(ownerIdent, Date.now(), CREATE_WINDOW_MS);
    if (ownerCount > MAX_OWNER_CREATES) return 'map quota reached';
  }
  return '';
}

async function auditPasswordFailure(req, store, id, kind) {
  const ident = await throttleIdent(req, id + ':' + kind);
  const localTooMany = await tooMany(store, ident);
  const globalIdent = await throttleIdent(req, 'password-global');
  const globalTooMany = await tooMany(store, globalIdent, MAX_GLOBAL_TRIES, WINDOW_MS);
  await store.logSecurityEvent({ mapId: id, ident, kind, createdAt: Date.now() });
  return localTooMany || globalTooMany;
}

async function buildHashes(mode, password) {
  if (mode !== 'password' || !password) return { salt: '', hash: '' };
  const salt = randomHex(8);
  const hash = await pbkdf2(password, salt, PBKDF2_ITERATIONS);
  return { salt, hash: `pbkdf2$${PBKDF2_ITERATIONS}$${salt}$${hash}` };
}

function badPassword(pw) {
  return typeof pw !== 'string' || pw.length < 3 || pw.length > 64;
}

export async function onRequest(context) {
  const { request: req, env } = context;
  const store = env?.LA_MAPS_STORE || (env?.LA_VOTES ? d1Store(env.LA_VOTES) : null);
  if (!store) return json(503, { error: 'store unavailable' });

  try {
    if (req.method === 'GET') return await handleGet(req, store);
    if (req.method === 'POST') return await handlePost(req, store);
    return json(405, { error: 'method not allowed' });
  } catch (e) {
    console.error(e);
    return json(500, { error: 'internal' });
  }
}

async function handleGet(req, store) {
  const url = new URL(req.url);

  if (url.searchParams.has('list')) {
    const limitValue = url.searchParams.get('limit');
    const offsetValue = url.searchParams.get('offset');
    const rawLimit = limitValue === null || limitValue === '' ? 20 : Number(limitValue);
    const rawOffset = offsetValue === null || offsetValue === '' ? 0 : Number(offsetValue);
    const limit = Number.isFinite(rawLimit) ? Math.max(1, Math.min(100, Math.trunc(rawLimit))) : 20;
    const offset = Number.isFinite(rawOffset) ? Math.max(0, Math.min(10000, Math.trunc(rawOffset))) : 0;
    const q = cleanDisplayText(url.searchParams.get('q'), 80).toLowerCase();
    const server = cleanDisplayText(url.searchParams.get('server'), 40);
    const [rows, total] = await Promise.all([
      store.listPublic(limit, offset, q, server),
      store.countPublic(q, server),
    ]);
    return json(200, {
      maps: rows.map(mapSummary),
      total,
      offset,
      limit,
    });
  }

  const id = url.searchParams.get('id') || '';
  if (!ID_RE.test(id)) return json(400, { error: 'bad id' });

  const row = await store.get(id);
  if (!row) return json(404, { error: 'not found' });

  const pw = url.searchParams.get('rp') || '';
  const allowed = await readAllowed(row, req, pw);
  if (!allowed) {
    const locked = row.readMode === 'owner' ? 'owner-only' : 'read-locked';
    if (row.readMode === 'password' && await auditPasswordFailure(req, store, id, 'read')) {
      return json(429, { error: 'too many attempts' });
    }
    return json(401, { error: locked, readMode: row.readMode });
  }

  if (url.searchParams.has('history') || url.searchParams.has('revision')) {
    const revision = Number(url.searchParams.get('revision'));
    if (Number.isInteger(revision) && revision > 0) {
      const rowRevision = await store.getRevision(id, revision);
      if (!rowRevision) return json(404, { error: 'revision not found' });
      return json(200, { revision: { ...revisionSummary(rowRevision), doc: parseDoc(rowRevision) } });
    }
    const revisions = await store.listRevisions(id, 20);
    return json(200, { revisions: revisions.map(revisionSummary) });
  }

  const owner = await isOwner(row, req.headers.get('x-map-owner') || url.searchParams.get('ok') || '');
  return json(200, {
    map: toClient(row),
    isOwner: owner,
    canEdit: owner || row.writeMode === 'open',
  });
}

async function handlePost(req, store) {
  let body;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'bad json' });
  }
  if (!body || typeof body !== 'object') return json(400, { error: 'bad payload' });

  const action = body.action;
  if (action === 'create') return createMap(req, store, body);
  if (action === 'save') return saveMap(req, store, body);
  if (action === 'fork') return forkMap(req, store, body);
  if (action === 'delete') return deleteMap(req, store, body);
  if (action === 'unlock') return unlock(req, store, body);
  if (action === 'restore') return restoreMap(req, store, body);
  return json(400, { error: 'bad action' });
}

async function createMap(req, store, body) {
  const doc = sanitizeDoc(body.doc);
  if (!doc) return json(400, { error: 'bad doc' });

  const name = cleanDisplayText(body.name, MAX_NAME) || 'City map';
  const server = cleanDisplayText(body.server, MAX_SERVER);
  if (blockedName(name) || blockedName(server)) return json(400, { error: 'name blocked' });
  const readMode = READ_MODES.has(body.readMode) ? body.readMode : 'public';
  const writeMode = WRITE_MODES.has(body.writeMode) ? body.writeMode : 'open';

  if (readMode === 'password' && badPassword(body.readPassword)) {
    return json(400, { error: 'bad read password' });
  }
  if (writeMode === 'password' && badPassword(body.writePassword)) {
    return json(400, { error: 'bad write password' });
  }

  const quotaError = await enforceCreateQuota(req, store, body.ownerIdentity);
  if (quotaError) return json(429, { error: quotaError });

  const id = newId();
  const ownerToken = randomHex(24);
  const now = Date.now();
  const ownerHash = await sha256(ownerToken);
  const read = await buildHashes(readMode, body.readPassword);
  const write = await buildHashes(writeMode, body.writePassword);
  const serialized = JSON.stringify(doc);
  if (serialized.length > MAX_DOC) return json(413, { error: 'doc too large' });

  const row = {
    id,
    name,
    server,
    ownerHash,
    readMode,
    writeMode,
    readSalt: read.salt,
    readHash: read.hash,
    writeSalt: write.salt,
    writeHash: write.hash,
    doc: serialized,
    rev: 1,
    forkedFrom: str(body.forkedFrom, 16),
    createdAt: now,
    updatedAt: now,
  };

  await store.insert(row, doc.actor);
  return json(200, {
    ok: true,
    id,
    ownerToken,
    rev: 1,
    updatedAt: now,
    map: toClient(row),
  });
}

async function saveMap(req, store, body) {
  const id = typeof body.id === 'string' ? body.id : '';
  if (!ID_RE.test(id)) return json(400, { error: 'bad id' });

  const row = await store.get(id);
  if (!row) return json(404, { error: 'not found' });

  const allowed = await writeAllowed(row, req, body);
  if (!allowed) {
    if (row.writeMode === 'password' && await auditPasswordFailure(req, store, id, 'write')) {
      return json(429, { error: 'too many attempts' });
    }
    return json(401, { error: row.writeMode === 'owner' ? 'owner-only' : 'write-locked' });
  }

  const expectedRev = Number(body.rev);
  if (!Number.isInteger(expectedRev) || expectedRev < 1) return json(400, { error: 'bad rev' });

  const patch = { rev: expectedRev + 1, updatedAt: Date.now() };
  if (typeof body.name === 'string') {
    patch.name = cleanDisplayText(body.name, MAX_NAME) || row.name;
    if (blockedName(patch.name)) return json(400, { error: 'name blocked' });
  }
  if (typeof body.server === 'string') {
    patch.server = cleanDisplayText(body.server, MAX_SERVER);
    if (blockedName(patch.server)) return json(400, { error: 'name blocked' });
  }

  if (body.doc !== undefined) {
    const doc = sanitizeDoc(body.doc);
    if (!doc) return json(400, { error: 'bad doc' });
    const serialized = JSON.stringify(doc);
    if (serialized.length > MAX_DOC) return json(413, { error: 'doc too large' });
    patch.doc = serialized;
  }

  // Access settings are owner-only: a shared editor link must not be able to
  // lift the password that protects it.
  const owner = await isOwner(row, body.ownerToken || req.headers.get('x-map-owner') || '');
  if (owner && body.access && typeof body.access === 'object') {
    const access = body.access;
    if (READ_MODES.has(access.readMode)) patch.readMode = access.readMode;
    if (WRITE_MODES.has(access.writeMode)) patch.writeMode = access.writeMode;

    if (typeof access.readPassword === 'string' && access.readPassword !== '') {
      if (badPassword(access.readPassword)) return json(400, { error: 'bad read password' });
      const h = await buildHashes('password', access.readPassword);
      patch.readSalt = h.salt;
      patch.readHash = h.hash;
    } else if (access.clearReadPassword) {
      patch.readSalt = '';
      patch.readHash = '';
    }

    if (typeof access.writePassword === 'string' && access.writePassword !== '') {
      if (badPassword(access.writePassword)) return json(400, { error: 'bad write password' });
      const h = await buildHashes('password', access.writePassword);
      patch.writeSalt = h.salt;
      patch.writeHash = h.hash;
    } else if (access.clearWritePassword) {
      patch.writeSalt = '';
      patch.writeHash = '';
    }
  }

  // Never let a map end up password-protected without a stored hash: that
  // would lock everybody (including the owner) out of reading or editing it.
  const nextReadMode = patch.readMode || row.readMode;
  const nextReadHash = patch.readHash !== undefined ? patch.readHash : row.readHash;
  if (nextReadMode === 'password' && !nextReadHash) {
    return json(400, { error: 'read password required' });
  }
  const nextWriteMode = patch.writeMode || row.writeMode;
  const nextWriteHash = patch.writeHash !== undefined ? patch.writeHash : row.writeHash;
  if (nextWriteMode === 'password' && !nextWriteHash) {
    return json(400, { error: 'write password required' });
  }

  const actor = cleanDisplayText(body.actor, 40) || (patch.doc ? parseDoc({ doc: patch.doc }).actor : '');
  const updated = await store.update(id, expectedRev, patch, actor);
  if (!updated) {
    const current = await store.get(id);
    return json(409, { error: 'conflict', map: current ? toClient(current) : null });
  }

  await store.clearAttempts(await throttleIdent(req, id + ':write'));
  return json(200, { ok: true, rev: updated.rev, updatedAt: updated.updatedAt, map: toClient(updated) });
}

async function forkMap(req, store, body) {
  const id = typeof body.id === 'string' ? body.id : '';
  if (!ID_RE.test(id)) return json(400, { error: 'bad id' });

  const src = await store.get(id);
  if (!src) return json(404, { error: 'not found' });

  const allowed = await readAllowed(src, req, body.readPassword || '');
  if (!allowed) {
    if (src.readMode === 'password' && await auditPasswordFailure(req, store, id, 'read')) {
      return json(429, { error: 'too many attempts' });
    }
    return json(401, { error: src.readMode === 'owner' ? 'owner-only' : 'read-locked' });
  }

  const doc = sanitizeDoc(JSON.parse(src.doc));
  if (!doc) return json(400, { error: 'bad doc' });

  const quotaError = await enforceCreateQuota(req, store, body.ownerIdentity);
  if (quotaError) return json(429, { error: quotaError });

  const newMapId = newId();
  const ownerToken = randomHex(24);
  const now = Date.now();
  const baseName = cleanDisplayText(body.name, MAX_NAME) || src.name;
  if (blockedName(baseName)) return json(400, { error: 'name blocked' });
  const name = (baseName + ' · fork').slice(0, MAX_NAME);

  const row = {
    id: newMapId,
    name,
    server: src.server,
    ownerHash: await sha256(ownerToken),
    readMode: 'public',
    writeMode: 'open',
    readSalt: '',
    readHash: '',
    writeSalt: '',
    writeHash: '',
    doc: JSON.stringify(doc),
    rev: 1,
    forkedFrom: src.id,
    createdAt: now,
    updatedAt: now,
  };

  await store.insert(row, 'fork');
  return json(200, {
    ok: true,
    id: newMapId,
    ownerToken,
    rev: 1,
    updatedAt: now,
    map: toClient(row),
  });
}

async function deleteMap(req, store, body) {
  const id = typeof body.id === 'string' ? body.id : '';
  if (!ID_RE.test(id)) return json(400, { error: 'bad id' });

  const row = await store.get(id);
  if (!row) return json(404, { error: 'not found' });
  if (!(await isOwner(row, body.ownerToken || req.headers.get('x-map-owner') || ''))) {
    return json(403, { error: 'owner-only' });
  }
  await store.remove(id);
  return json(200, { ok: true });
}

async function unlock(req, store, body) {
  const id = typeof body.id === 'string' ? body.id : '';
  if (!ID_RE.test(id)) return json(400, { error: 'bad id' });

  const row = await store.get(id);
  if (!row) return json(404, { error: 'not found' });

  const kind = body.kind === 'write' ? 'write' : 'read';
  const ident = await throttleIdent(req, id + ':' + kind);
  const password = kind === 'write' ? body.writePassword : body.readPassword;

  let ok = false;
  if (kind === 'write' && (await isOwner(row, body.ownerToken || ''))) ok = true;
  else if (kind === 'write') {
    ok = await verifyPassword(password, row.writeSalt, row.writeHash);
  } else {
    if (row.readMode === 'public') ok = true;
    else if (row.readMode === 'owner') ok = await isOwner(row, body.ownerToken || '');
    else ok = await verifyPassword(password, row.readSalt, row.readHash);
  }

  if (!ok) {
    if (await auditPasswordFailure(req, store, id, kind)) {
      return json(429, { error: 'too many attempts' });
    }
    return json(401, { error: kind === 'write' ? 'bad-write-password' : 'bad-read-password' });
  }

  await store.clearAttempts(ident);
  return json(200, { ok: true, canEdit: kind === 'write' || row.writeMode === 'open' });
}

async function restoreMap(req, store, body) {
  const id = typeof body.id === 'string' ? body.id : '';
  if (!ID_RE.test(id)) return json(400, { error: 'bad id' });
  const revision = Number(body.revision);
  if (!Number.isInteger(revision) || revision < 1) return json(400, { error: 'bad revision' });
  const expectedRev = Number(body.rev);
  if (!Number.isInteger(expectedRev) || expectedRev < 1) return json(400, { error: 'bad rev' });

  const row = await store.get(id);
  if (!row) return json(404, { error: 'not found' });
  const owner = await isOwner(row, body.ownerToken || req.headers.get('x-map-owner') || '');
  if (!owner) return json(403, { error: 'owner-only' });

  const old = await store.getRevision(id, revision);
  if (!old) return json(404, { error: 'revision not found' });
  const doc = sanitizeDoc(parseDoc(old));
  if (!doc) return json(400, { error: 'bad revision' });
  const actor = cleanDisplayText(body.actor, 40);
  if (actor) doc.actor = actor;

  const updated = await store.update(id, expectedRev, {
    name: old.name,
    server: old.server,
    doc: JSON.stringify(doc),
    rev: expectedRev + 1,
    updatedAt: Date.now(),
  }, actor || doc.actor || 'restore');
  if (!updated) {
    const current = await store.get(id);
    return json(409, { error: 'conflict', map: current ? toClient(current) : null });
  }
  return json(200, { ok: true, map: toClient(updated) });
}
