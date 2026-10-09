// GET/POST /api/votes — per-key totals with IP+fingerprint dedup.
// After every tally, pending suggestions that reach PROMOTE_LIKES
// are flipped to approved (see suggest.js / codes.js).
import {
  KEY_RE,
  FP_RE,
  PROMOTE_LIKES,
  json,
  identOf,
  applyVote,
  readTotals,
  readMine,
  writeVote,
} from './_store.js';

export async function onRequest(context) {
  const { request: req, env } = context;

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
    const ident = identOf(req, fp);

    if (req.method === 'GET') {
      const totals = await readTotals(db, key);
      const mine = fp ? await readMine(db, key, ident) : null;
      return json(200, { likes: totals.likes, dislikes: totals.dislikes, mine });
    }

    // POST (validated above)
    const totals = await readTotals(db, key);
    const prev = await readMine(db, key, ident);
    const { totals: next, mine } = applyVote(totals, prev, vote);
    await writeVote(db, key, ident, mine, next);

    // Promotion: a pending player suggestion with enough likes stays for good.
    let promoted = false;
    if (next.likes >= PROMOTE_LIKES && key.startsWith('code:')) {
      const code = key.slice(5);
      const row = await db
        .prepare('SELECT status FROM suggested_codes WHERE code = ?')
        .bind(code)
        .first();
      if (row?.status === 'pending') {
        await db.prepare("UPDATE suggested_codes SET status = 'approved' WHERE code = ?").bind(code).run();
        promoted = true;
      }
    }
    return json(200, { likes: next.likes, dislikes: next.dislikes, mine, promoted });
  } catch (e) {
    return json(500, { error: 'internal' });
  }
}
