import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Set to your real domain before deploying; used by sitemap and canonical URLs
const SITE_URL = process.env.SITE_URL ?? 'https://last-asylum-hub.netlify.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});