import type { APIRoute } from 'astro';
import { languages } from '../i18n/utils';

const pages = [
  '',
  'beginners/',
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
  'faq/',
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
  'events/survival/',
  'events/thief/',
  'events/undead/',
  'events/wagon/',
];

// hero codex dynamic routes
import { heroCodex } from '../data/heroCodex';
import { giftCodes } from '../data/giftcodes';
import { patchNotes } from '../data/patchnotes';
for (const h of heroCodex) {
  pages.push(`codex/${h.slug}/`);
}

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') || 'https://example.com';
  const urls: { loc: string; alternates: { lang: string; href: string }[] }[] = [];

  for (const p of pages) {
    const alternates = languages
      .filter((l) => l !== 'en' || true)
      .map((l) => ({
        lang: l,
        href: l === 'en' ? `${base}/${p}` : `${base}/${l}/${p}`,
      }));
    urls.push({ loc: `${base}/${p}`, alternates });
    if (p) {
      for (const l of languages.filter((x) => x !== 'en')) {
        urls.push({ loc: `${base}/${l}/${p}`, alternates: [] });
      }
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
    const lm = lastmodBy[u.loc];
    return `  <url>\n    <loc>${u.loc}</loc>${lm ? `\n    <lastmod>${lm}</lastmod>` : ''}\n${u.alternates
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`)
      .join('\n')}\n  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};