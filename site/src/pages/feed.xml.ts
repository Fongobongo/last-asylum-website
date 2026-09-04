import type { APIRoute } from 'astro';
import { giftCodes } from '../data/giftcodes';
import { patchNotes } from '../data/patchnotes';

const SITE = (import.meta.env.SITE?.toString().trim() || 'https://lastasylum.netlify.app');

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const GET: APIRoute = () => {
  const items = [
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
    <description>Gift codes &amp; game updates</description>
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