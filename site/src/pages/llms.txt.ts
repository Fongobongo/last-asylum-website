import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') || 'https://lastasylum.pages.dev';
  const guides = (await getCollection('guides'))
    .filter((e) => e.id.split('/')[0] === 'en' && !(e.data as any).noindex)
    .map((e) => {
      const slug = e.id.split('/').slice(1).join('/').replace(/\.md$/, '');
      return { slug, title: (e.data as any).title as string, desc: (e.data as any).description as string | undefined };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const lines = [
    '# Last Asylum: Plague — Fan Hub',
    '',
    '> Unofficial community strategy guides, event breakdowns and reference tables for the game Last Asylum: Plague.',
    `> Canonical site: ${base}/ — every guide below also exists in 8 more languages under /ru/, /de/, /es/, /fr/, /id/, /ja/, /ko/, /pt/.`,
    '',
    '## Guides',
    '',
    ...guides.map((g) => `- [${g.title}](${base}/${g.slug}/)${g.desc ? `: ${g.desc}` : ''}`),
    '',
    '## Data & tools',
    '',
    `- [Gift codes](${base}/codes/): currently active redeem codes`,
    `- [Patch notes](${base}/patch-notes/): client update history`,
    `- [Hero codex](${base}/codex/): all heroes, skills and builds`,
    `- [Events hub](${base}/events/): recurring and seasonal events`,
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
