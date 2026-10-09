// Shared helpers for the votes API (Cloudflare Pages Functions + D1).
// Imported by votes.js, suggest.js, codes.js — files starting with _
// are not routed.

export const KEY_RE = /^[a-z0-9:_\-/.]{1,120}$/i;
export const FP_RE = /^[a-f0-9]{1,16}$/;
export const CODE_RE = /^[A-Z0-9]{3,24}$/;
export const NOTE_MAX = 140;
export const PROMOTE_LIKES = 5; // pending suggestion -> approved
export const SUGGEST_PER_DAY = 5;

export function json(status, obj) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

export function clientIp(req) {
  return (
    req.headers.get('cf-connecting-ip') ||
    (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    'unknown'
  );
}

// Don't store raw IPs — a short hash is enough to key one vote per client.
export function ipKey(ip) {
  let h = 5381;
  const s = `lavotes|${ip}`;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

export function identOf(req, fp) {
  return `${ipKey(clientIp(req))}:${fp || 'nofp'}`;
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

export async function readTotals(db, key) {
  const row = await db.prepare('SELECT likes, dislikes FROM totals WHERE key = ?').bind(key).first();
  return { likes: Math.max(0, (row?.likes ?? 0) | 0), dislikes: Math.max(0, (row?.dislikes ?? 0) | 0) };
}

export async function readMine(db, key, ident) {
  const row = await db
    .prepare('SELECT vote FROM votes WHERE key = ? AND ident = ?')
    .bind(key, ident)
    .first();
  const v = row?.vote;
  return v === 'yes' || v === 'no' ? v : null;
}

export async function writeVote(db, key, ident, next, totals) {
  const now = Date.now();
  if (next) {
    await db.batch([
      db
        .prepare(
          'INSERT INTO totals (key, likes, dislikes) VALUES (?, ?, ?) ' +
            'ON CONFLICT(key) DO UPDATE SET likes = excluded.likes, dislikes = excluded.dislikes'
        )
        .bind(key, totals.likes, totals.dislikes),
      db
        .prepare(
          'INSERT INTO votes (key, ident, vote, updated_at) VALUES (?, ?, ?, ?) ' +
            'ON CONFLICT(key, ident) DO UPDATE SET vote = excluded.vote, updated_at = excluded.updated_at'
        )
        .bind(key, ident, next, now),
    ]);
  } else {
    await db.batch([
      db
        .prepare(
          'INSERT INTO totals (key, likes, dislikes) VALUES (?, ?, ?) ' +
            'ON CONFLICT(key) DO UPDATE SET likes = excluded.likes, dislikes = excluded.dislikes'
        )
        .bind(key, totals.likes, totals.dislikes),
      db.prepare('DELETE FROM votes WHERE key = ? AND ident = ?').bind(key, ident),
    ]);
  }
}
