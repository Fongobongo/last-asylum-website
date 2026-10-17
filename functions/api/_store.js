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

// For gift-code keys the client-provided fingerprint is NOT trusted: a script
// can rotate it to cast unlimited votes and auto-promote a fake code to
// "approved". One vote per IP per code is the honest dedup there.
export function identOf(req, fp, key = '') {
  if (key.startsWith('code:')) return ipKey(clientIp(req));
  return `${ipKey(clientIp(req))}:${fp || 'nofp'}`;
}

// Pure transition, easy to unit-test: returns {dLikes, dDislikes, mine}.
// Deltas keep concurrent votes composable — the server applies them with SQL
// increments, so two votes landing at the same time both count.
export function voteDelta(prev, vote) {
  const d = { dLikes: 0, dDislikes: 0 };
  if (prev === 'yes') d.dLikes--;
  else if (prev === 'no') d.dDislikes--;
  const next = prev === vote ? null : vote;
  if (next === 'yes') d.dLikes++;
  else if (next === 'no') d.dDislikes++;
  return { ...d, mine: next };
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

export async function writeVote(db, key, ident, next, dLikes, dDislikes) {
  // SQL-side increments: safe under concurrency. The INSERT arm carries the
  // delta as the initial absolute value; the ON CONFLICT arm adds deltas.
  const totalsSql =
    'INSERT INTO totals (key, likes, dislikes) VALUES (?, ?, ?) ' +
    'ON CONFLICT(key) DO UPDATE SET likes = totals.likes + excluded.likes, dislikes = totals.dislikes + excluded.dislikes';
  const now = Date.now();
  if (next) {
    await db.batch([
      db.prepare(totalsSql).bind(key, dLikes, dDislikes),
      db
        .prepare(
          'INSERT INTO votes (key, ident, vote, updated_at) VALUES (?, ?, ?, ?) ' +
            'ON CONFLICT(key, ident) DO UPDATE SET vote = excluded.vote, updated_at = excluded.updated_at'
        )
        .bind(key, ident, next, now),
    ]);
  } else {
    await db.batch([
      db.prepare(totalsSql).bind(key, dLikes, dDislikes),
      db.prepare('DELETE FROM votes WHERE key = ? AND ident = ?').bind(key, ident),
    ]);
  }
}
