// Cloudflare Pages Function — shared vote totals for guides + gift codes.
//
//   Route:  functions/api/votes.js  ->  GET/POST /api/votes
//   Store:  D1 (SQLite), binding name LA_VOTES — set it in the Pages project:
//             Dashboard → Pages → project → Settings → Functions → D1 bindings,
//             variable LA_VOTES, database la-votes (create via
//             `wrangler d1 create la-votes`, then apply functions/schema.sql).
//
// Duplicate protection, three layers:
//   1. server: one vote per (IP hash + browser fingerprint) pair;
//   2. cookie: own pick persisted client-side (see public/js/votes.v2.js);
//   3. localStorage: offline totals cache.
// No raw IPs or fingerprints are stored — hashes only.
// Without the D1 binding the API answers 503 and the frontend silently
// stays in fully-local mode.
//
//   GET  /api/votes?key=guide:/tips/&fp=ab12cd34  -> {likes, dislikes, mine}
//   POST /api/votes  {key, vote, fp}              -> {likes, dislikes, mine}
//   vote: 'yes' | 'no' | null (null is a no-op keep-alive)

const KEY_RE = /^[a-z0-9:_\-/.]{1,120}$/i;
const FP_RE = /^[a-f0-9]{1,16}$/;

function json(status, obj) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

function clientIp(req) {
  return (
    req.headers.get('cf-connecting-ip') ||
    (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    'unknown'
  );
}

// Don't store raw IPs — a short hash is enough to key one vote per client.
function ipKey(ip) {
  let h = 5381;
  const s = `lavotes|${ip}`;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

// Pure transition, easy to unit-test: returns {totals, mine}.
export function applyVote(totals, prev, vote) {
  const t = { likes: Math.max(0, totals.likes | 0), dislikes: Math.max(0, totals.dislikes | 0) };
  if (prev === 'yes') t.likes = Math.max(0, t.likes - 1);
  else if (prev === 'no') t.dislikes = Math.max(0, t.dislikes - 1);
  const next = prev === vote ? null : vote;
  if (next === 'yes') t.likes++;
  else if (next === 'no') t.dislikes++;
  return { totals: t, mine: next };
}

async function readTotals(db, key) {
  const row = await db.prepare('SELECT likes, dislikes FROM totals WHERE key = ?').bind(key).first();
  return { likes: Math.max(0, (row?.likes ?? 0) | 0), dislikes: Math.max(0, (row?.dislikes ?? 0) | 0) };
}

async function readMine(db, key, ident) {
  const row = await db
    .prepare('SELECT vote FROM votes WHERE key = ? AND ident = ?')
    .bind(key, ident)
    .first();
  const v = row?.vote;
  return v === 'yes' || v === 'no' ? v : null;
}

export async function onRequest(context) {
  const { request: req, env } = context;

  // Validate before touching the store so bad requests get 400s
  // even when D1 isn't bound.
  let key = '';
  let vote = null;
  let fp = '';
  if (req.method === 'GET') {
    const q = new URL(req.url).searchParams;
    key = q.get('key') || '';
    fp = q.get('fp') || '';
    if (!KEY_RE.test(key)) return json(400, { error: 'bad key' });
    if (fp && !FP_RE.test(fp)) return json(400, { error: 'bad fp' });
  } else if (req.method === 'POST') {
    let body;
    try {
      body = await req.json();
    } catch {
      return json(400, { error: 'bad json' });
    }
    key = typeof body?.key === 'string' ? body.key : '';
    vote = body?.vote ?? null;
    fp = typeof body?.fp === 'string' ? body.fp : '';
    if (!KEY_RE.test(key) || (vote !== 'yes' && vote !== 'no' && vote !== null)) {
      return json(400, { error: 'bad payload' });
    }
    if (fp && !FP_RE.test(fp)) return json(400, { error: 'bad fp' });
  } else {
    return json(405, { error: 'method not allowed' });
  }

  const db = env?.LA_VOTES;
  if (!db) return json(503, { error: 'store unavailable' });

  try {
    const ident = `${ipKey(clientIp(req))}:${fp || 'nofp'}`;

    if (req.method === 'GET') {
      const totals = await readTotals(db, key);
      const mine = fp ? await readMine(db, key, ident) : null;
      return json(200, { likes: totals.likes, dislikes: totals.dislikes, mine });
    }

    // POST (validated above)
    const totals = await readTotals(db, key);
    const prev = await readMine(db, key, ident);
    const { totals: next, mine } = applyVote(totals, prev, vote);
    const now = Date.now();
    if (mine) {
      await db.batch([
        db
          .prepare(
            'INSERT INTO totals (key, likes, dislikes) VALUES (?, ?, ?) ' +
              'ON CONFLICT(key) DO UPDATE SET likes = excluded.likes, dislikes = excluded.dislikes'
          )
          .bind(key, next.likes, next.dislikes),
        db
          .prepare(
            'INSERT INTO votes (key, ident, vote, updated_at) VALUES (?, ?, ?, ?) ' +
              'ON CONFLICT(key, ident) DO UPDATE SET vote = excluded.vote, updated_at = excluded.updated_at'
          )
          .bind(key, ident, mine, now),
      ]);
    } else {
      await db.batch([
        db
          .prepare(
            'INSERT INTO totals (key, likes, dislikes) VALUES (?, ?, ?) ' +
              'ON CONFLICT(key) DO UPDATE SET likes = excluded.likes, dislikes = excluded.dislikes'
          )
          .bind(key, next.likes, next.dislikes),
        db.prepare('DELETE FROM votes WHERE key = ? AND ident = ?').bind(key, ident),
      ]);
    }
    return json(200, { likes: next.likes, dislikes: next.dislikes, mine });
  } catch (e) {
    return json(500, { error: 'internal' });
  }
}
