// GET /api/codes — player suggestions with live totals for the
// "new from players" section. (Builtin codes ship in the page bundle;
// the frontend merges both and derives the probably-expired section.)
import { json, readTotals } from './_store.js';

export async function onRequest(context) {
  const { request: req, env } = context;
  if (req.method !== 'GET') return json(405, { error: 'method not allowed' });

  const db = env?.LA_VOTES;
  if (!db) return json(503, { error: 'store unavailable' });

  try {
    const rows = await db
      .prepare('SELECT code, note, status, created_at FROM suggested_codes ORDER BY created_at DESC LIMIT 200')
      .all();
    const suggestions = [];
    for (const r of rows.results ?? []) {
      const totals = await readTotals(db, `code:${r.code}`);
      suggestions.push({
        code: r.code,
        note: r.note || '',
        status: r.status,
        created_at: r.created_at,
        likes: totals.likes,
        dislikes: totals.dislikes,
      });
    }
    return json(200, { suggestions });
  } catch (e) {
    return json(500, { error: 'internal' });
  }
}
