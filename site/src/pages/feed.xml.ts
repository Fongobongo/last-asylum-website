import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { giftCodes } from '../data/giftcodes';
import { patchNotes } from '../data/patchnotes';

const SITE = (import.meta.env.SITE?.toString().trim() || 'https://lastasylum.pages.dev');

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const GET: APIRoute = async () => {
  const guides = (await getCollection('guides'))
    .filter((e) => e.id.split('/')[0] === 'en' && !(e.data as any).noindex && (e.data as any).updated)
    .map((e) => {
      const slug = e.id.split('/').slice(1).join('/');
      return {
        title: `Guide: ${(e.data as any).title as string}`,
        link: `${SITE}/${slug}/`,
        date: new Date((e.data as any).updated as string),
        desc: ((e.data as any).description as string | undefined) ?? '',
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 15);

  const items = [
    ...guides,
    ...giftCodes
      .filter((c) => c.active)
      .slice(0, 10)
      .map((c) => ({
        title: `Gift code: ${c.code}`,
        link: `${SITE}/codes/`,
        date: new Date(c.date),
        desc: `New gift code ${c.code}${c.note ? ` (${c.note})` : ''} — valid as of ${c.date}.`,
      })),
    ...patchNotes.slice(0, 5).map((p) => ({
      title: `Update: ${p.title}`,
      link: `${SITE}/patch-notes/`,
      date: new Date(p.date),
      desc: p.highlights.map((h) => `• ${h}`).join(' '),
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Last Asylum: Plague — Fan Hub</title>
    <link>${SITE}</link>
    <description>Fresh guides, gift codes &amp; game updates</description>
    <language>en</language>
${items
  .map(
    (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${i.link}</link>
      <guid>${i.link}#${i.date.toISOString()}</guid>
      <pubDate>${i.date.toUTCString()}</pubDate>
      <description>${esc(i.desc)}</description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml' } });
};