#!/usr/bin/env node
/**
 * Compares guide freshness across languages.
 * For every slug present in EN, reports langs that are missing
 * or whose `updated` frontmatter lags behind the newest version.
 *
 * Usage: node scripts/audit-i18n.mjs [--stale-days N]
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '../content/guides');
const STALE_DAYS = Number(process.argv.find((a) => a.startsWith('--stale-days='))?.split('=')[1] ?? 30);

async function walk(dir, base = '') {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...(await walk(path.join(dir, e.name), rel)));
    else if (e.name.endsWith('.md')) out.push(rel);
  }
  return out;
}

const bySlug = new Map();
for (const lang of await fs.readdir(ROOT)) {
  const langDir = path.join(ROOT, lang);
  if (!(await fs.stat(langDir)).isDirectory()) continue;
  for (const rel of await walk(langDir)) {
    const slug = rel.replace(/\.md$/, '');
    const head = (await fs.readFile(path.join(langDir, rel), 'utf8')).slice(0, 1200);
    const m = head.match(/updated:\s*"([^"]+)"/);
    if (!bySlug.has(slug)) bySlug.set(slug, {});
    bySlug.get(slug)[lang] = m ? m[1] : null;
  }
}

const enSlugs = [...bySlug.keys()].filter((s) => bySlug.get(s).en).sort();
let missing = 0;
let stale = 0;
console.log(`🌐 audit-i18n: ${enSlugs.length} EN slugs, stale threshold ${STALE_DAYS}d\n`);
for (const slug of enSlugs) {
  const vers = bySlug.get(slug);
  const dates = Object.values(vers).filter(Boolean).sort();
  const max = dates[dates.length - 1];
  const missingLangs = [];
  const staleLangs = [];
  for (const [lang, d] of Object.entries(vers)) {
    if (lang === 'en') continue;
    if (!vers[lang]) missingLangs.push(`${lang}(?)`);
  }
  for (const lang of Object.keys(vers)) {
    if (lang === 'en' || !vers[lang]) continue;
    const diff = (new Date(max) - new Date(vers[lang])) / 86400000;
    if (diff > STALE_DAYS) staleLangs.push(`${lang}(${vers[lang]})`);
  }
  // langs entirely absent
  const present = new Set(Object.keys(vers));
  const absent = ['ru', 'de', 'es', 'fr', 'id', 'ja', 'ko', 'pt'].filter((l) => !present.has(l));
  if (absent.length || staleLangs.length) {
    if (absent.length) missing++;
    if (staleLangs.length) stale++;
    console.log(
      `${slug} [newest ${max}]` +
        (absent.length ? `  MISSING: ${absent.join(',')}` : '') +
        (staleLangs.length ? `  STALE: ${staleLangs.join(',')}` : '')
    );
  }
}
console.log(`\nSummary: ${missing} slugs with missing langs, ${stale} with stale translations.`);
