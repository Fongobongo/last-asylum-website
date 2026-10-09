// POST /api/suggest — propose a new gift code.
//   {code, note?, fp?} -> {ok, code, status} | {ok, duplicate:true, ...}
// Normalizes to uppercase, rate-limits to SUGGEST_PER_DAY per voter/day.
import { CODE_RE, FP_RE, NOTE_MAX, SUGGEST_PER_DAY, json, identOf } from './_store.js';

const DAY_MS = 86400000;

export async function onRequest(context) {
  const { request: req, env } = context;
  if (req.method !== 'POST') return json(405, { error: 'method not allowed' });

  let body;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'bad json' });
  }
  const code = typeof body?.code === 'string' ? body.code.trim().toUpperCase() : '';
  const note = typeof body?.note === 'string' ? body.note.trim().slice(0, NOTE_MAX) : '';
  const fp = typeof body?.fp === 'string' ? body.fp : '';
  if (!CODE_RE.test(code)) return json(400, { error: 'bad code' });
  if (fp && !FP_RE.test(fp)) return json(400, { error: 'bad fp' });

  const db = env?.LA_VOTES;
  if (!db) return json(503, { error: 'store unavailable' });

  try {
    const existing = await db
      .prepare('SELECT code, status FROM suggested_codes WHERE code = ?')
      .bind(code)
      .first();
    if (existing) {
      return json(200, { ok: true, duplicate: true, code, status: existing.status });
    }
    const submitter = identOf(req, fp);
    const since = Date.now() - DAY_MS;
    const quota = await db
      .prepare('SELECT COUNT(*) AS n FROM suggested_codes WHERE submitter = ? AND created_at > ?')
      .bind(submitter, since)
      .first();
    if ((quota?.n ?? 0) >= SUGGEST_PER_DAY) {
      return json(429, { error: 'too many suggestions, try tomorrow' });
    }
    await db
      .prepare(
        'INSERT INTO suggested_codes (code, note, status, submitter, created_at) VALUES (?, ?, ?, ?, ?)'
      )
      .bind(code, note, 'pending', submitter, Date.now())
      .run();
    return json(200, { ok: true, code, status: 'pending' });
  } catch (e) {
    return json(500, { error: 'internal' });
  }
}
