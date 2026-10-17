// GET /api/codes — player suggestions with live totals for the
// "new from players" section. (Builtin codes ship in the page bundle;
// the frontend merges both and derives the probably-expired section.)
import { json } from './_store.js';

export async function onRequest(context) {
  const { request: req, env } = context;
  if (req.method !== 'GET') return json(405, { error: 'method not allowed' });

  const db = env?.LA_VOTES;
  if (!db) return json(503, { error: 'store unavailable' });

  try {
    // Single JOIN instead of 1 + N queries: this endpoint is hit from
    // the /codes/ page on every language on every visit.
    const { results } = await db
      .prepare(
        'SELECT s.code, s.note, s.status, s.created_at, ' +
          "COALESCE(t.likes, 0) AS likes, COALESCE(t.dislikes, 0) AS dislikes " +
          'FROM suggested_codes s ' +
          "LEFT JOIN totals t ON t.key = 'code:' || s.code " +
          'ORDER BY s.created_at DESC LIMIT 200'
      )
      .all();
    return json(200, {
      suggestions: (results ?? []).map((r) => ({
        code: r.code,
        note: r.note || '',
        status: r.status,
        created_at: r.created_at,
        likes: Math.max(0, r.likes | 0),
        dislikes: Math.max(0, r.dislikes | 0),
      })),
    });
  } catch (e) {
    return json(500, { error: 'internal' });
  }
}
