import type { APIRoute } from 'astro';

// Generated at build time so the Sitemap URL (and disallows) always follow
// the deploy domain instead of a hardcoded host. Replaces public/robots.txt.
export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') || 'https://lastasylum.netlify.app';
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin/',
    '',
    `Sitemap: ${base}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
