import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { languages } from '../i18n/utils';

// Hub / static pages (served by .astro files, EN at /{slug}/, others at /{lang}/{slug}/).
const pages = [
  '',
  'beginners/',
  'tips/',
  'buildings/',
  'heroes/',
  'economy/',
  'raven/',
  'era/',
  'support/',
  'codes/',
  'patch-notes/',
  'credits/',
  'calendar/',
  'tier-list/',
  'codex/',
  'gear/',
  'status/',
  'compare/',
  'events/',
  'events/alliance-duel/',
  'events/arena/',
  'events/canyon/',
  'events/cheese/',
  'events/elixir/',
  'events/kvk/',
  'events/mythic/',
  'events/royal/',
  'events/supreme-healer/',
  'events/survival/',
  'events/thief/',
  'events/undead/',
  'events/wagon/',
  'events/strike-first/',
  'events/final-dawn/',
  'events/path-to-healing/',
  'events/supreme-duel/',
  'events/quiz-of-wisdom/',
  'alliance/',
  'might/',
  'guides/',
];

// hero codex dynamic routes
import { heroCodex } from '../data/heroCodex';
import { giftCodes } from '../data/giftcodes';
import { patchNotes } from '../data/patchnotes';
for (const h of heroCodex) {
  pages.push(`codex/${h.slug}/`);
}

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') || 'https://example.com';
  const urls: { loc: string; lastmod?: string; alternates: { lang: string; href: string }[] }[] = [];
  const seen = new Set<string>();

  const push = (loc: string, lastmod?: string, alternates: { lang: string; href: string }[] = []) => {
    if (seen.has(loc)) return;
    seen.add(loc);
    urls.push({ loc, lastmod, alternates });
  };

  for (const p of pages) {
    const alternates = languages
      .map((l) => ({
        lang: l,
        href: l === 'en' ? `${base}/${p}` : `${base}/${l}/${p}`,
      }));
    push(`${base}/${p}`, undefined, alternates);
    for (const l of languages.filter((x) => x !== 'en')) {
      push(`${base}/${l}/${p}`);
    }
  }

  // Every content-collection article not covered above (sub-articles like
  // buildings/sanctuary, top-level guides missing from `pages`, and events
  // such as demon-king / crystal-cluster). Alternates only across languages
  // where the slug actually exists — never point hreflang at a 404.
  const guides = await getCollection('guides');
  const bySlug = new Map<string, { lang: string; updated?: string }[]>();
  for (const e of guides) {
    if ((e.data as any).noindex) continue;
    const [lang, ...rest] = e.id.split('/');
    const slug = rest.join('/').replace(/\.md$/, '');
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug)!.push({ lang, updated: (e.data as any).updated });
  }

  for (const [slug, variants] of [...bySlug.entries()].sort()) {
    if (pages.includes(`${slug}/`)) continue; // hub already listed with full alternates
    const langs = variants.map((v) => v.lang);
    const lastmod = variants.map((v) => v.updated).filter(Boolean).sort().pop();
    const alternates = variants.map((v) => ({
      lang: v.lang,
      href: v.lang === 'en' ? `${base}/${slug}/` : `${base}/${v.lang}/${slug}/`,
    }));
    // Canonical entry: EN url when available, else first variant.
    const hasEn = langs.includes('en');
    push(hasEn ? `${base}/${slug}/` : `${base}/${langs[0]}/${slug}/`, lastmod, alternates);
    for (const v of variants) {
      if (v.lang === 'en') continue;
      if (!hasEn && v.lang === langs[0]) continue; // already pushed as canonical
      push(`${base}/${v.lang}/${slug}/`, v.updated ?? lastmod);
    }
  }

  const lastmodBy: Record<string, string> = {};
  const codeDates = giftCodes.map((c) => c.date).sort();
  if (codeDates.length) lastmodBy[`${base}/codes/`] = codeDates[codeDates.length - 1];
  const patchDates = patchNotes.map((p) => p.date).sort();
  if (patchDates.length) lastmodBy[`${base}/patch-notes/`] = patchDates[patchDates.length - 1];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((u) => {
    const lm = lastmodBy[u.loc] ?? u.lastmod;
    return `  <url>\n    <loc>${u.loc}</loc>${lm ? `\n    <lastmod>${lm}</lastmod>` : ''}\n${u.alternates
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`)
      .join('\n')}\n  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
