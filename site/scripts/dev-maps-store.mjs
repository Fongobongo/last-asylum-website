// File-backed implementation of the map store interface, used only by the
// local preview server (site/serve.cjs) so /api/maps behaves exactly like the
// Cloudflare D1 version during development.
//
// Data lives in site/.maps-dev.json (git-ignored).
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(HERE, '..', '.maps-dev.json');

let cache = null;
let writing = Promise.resolve();

function emptyState() {
  return { maps: {}, attempts: {}, revisions: {}, securityEvents: [] };
}

async function load() {
  if (cache) return cache;
  try {
    const raw = await readFile(FILE, 'utf8');
    const parsed = JSON.parse(raw);
    cache = {
      maps: parsed.maps && typeof parsed.maps === 'object' ? parsed.maps : {},
      attempts: parsed.attempts && typeof parsed.attempts === 'object' ? parsed.attempts : {},
      revisions: parsed.revisions && typeof parsed.revisions === 'object' ? parsed.revisions : {},
      securityEvents: parsed.securityEvents && Array.isArray(parsed.securityEvents) ? parsed.securityEvents : [],
    };
  } catch {
    cache = emptyState();
  }
  return cache;
}

function persist() {
  const snapshot = JSON.stringify(cache, null, 2);
  writing = writing.then(() => writeFile(FILE, snapshot, 'utf8')).catch(() => {});
  return writing;
}

export function devStore(options = {}) {
  // A fresh store is isolated from the preview file, so API tests cannot
  // replace the developer's local maps.
  const isolated = options.fresh ? emptyState() : null;
  const state = async () => isolated || load();
  const save = async () => {
    if (!isolated) return persist();
    writing = writing.then(() => Promise.resolve()).catch(() => {});
    return writing;
  };
  return {
    async get(id) {
      const db = await state();
      const row = db.maps[id];
      return row ? { ...row } : null;
    },

    async insert(map) {
      const db = await state();
      db.maps[map.id] = { ...map };
      await save();
    },

    async update(id, expectedRev, patch) {
      const db = await state();
      const row = db.maps[id];
      if (!row || row.rev !== expectedRev) return null;
      db.maps[id] = { ...row, ...patch };
      await save();
      return { ...db.maps[id] };
    },

    async listPublic(limit, offset = 0, q = '', server = '') {
      const db = await state();
      return Object.values(db.maps)
        .filter((m) => m.readMode === 'public')
        .filter((m) => !q || `${m.name} ${m.server}`.toLowerCase().includes(q.toLowerCase()))
        .filter((m) => !server || (m.server || '').toLowerCase() === server.toLowerCase())
        .sort((a, b) => b.updatedAt - a.updatedAt)
        .slice(offset, offset + limit)
        .map((m) => ({ ...m }));
    },

    async countPublic(q = '', server = '') {
      const db = await state();
      return Object.values(db.maps)
        .filter((m) => m.readMode === 'public')
        .filter((m) => !q || `${m.name} ${m.server}`.toLowerCase().includes(q.toLowerCase()))
        .filter((m) => !server || (m.server || '').toLowerCase() === server.toLowerCase())
        .length;
    },

    async remove(id) {
      const db = await state();
      delete db.maps[id];
      for (const key of Object.keys(db.revisions)) {
        if (db.revisions[key].mapId === id) delete db.revisions[key];
      }
      await save();
    },

    async bumpAttempt(ident, now, windowMs) {
      const db = await state();
      const row = db.attempts[ident];
      let count = 1;
      let start = now;
      if (row && now - row.windowStart < windowMs) {
        count = row.count + 1;
        start = row.windowStart;
      }
      db.attempts[ident] = { count, windowStart: start };
      await save();
      return count;
    },

    async clearAttempts(ident) {
      const db = await state();
      if (db.attempts[ident]) {
        delete db.attempts[ident];
        await save();
      }
    },

    async insertRevision(revision) {
      const db = await state();
      db.revisions[`${revision.mapId}:${revision.rev}`] = { ...revision };
      await save();
    },

    async listRevisions(mapId, limit = 20) {
      const db = await state();
      return Object.values(db.revisions)
        .filter((revision) => revision.mapId === mapId)
        .sort((a, b) => b.rev - a.rev)
        .slice(0, limit)
        .map((revision) => ({ ...revision }));
    },

    async getRevision(mapId, rev) {
      const db = await state();
      const revision = db.revisions[`${mapId}:${rev}`];
      return revision ? { ...revision } : null;
    },

    async logSecurityEvent(event) {
      const db = await state();
      db.securityEvents.push({ ...event });
      if (db.securityEvents.length > 500) db.securityEvents = db.securityEvents.slice(-500);
      await save();
    },
  };
}
