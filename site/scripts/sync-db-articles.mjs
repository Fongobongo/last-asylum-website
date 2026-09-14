#!/usr/bin/env node
/**
 * Syncs published articles from Supabase into site/content/guides/ before build.
 *
 * Requirements:
 *   SUPABASE_URL and SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY) environment variables.
 *
 * If variables are not set, it exits cleanly and lets Astro build from existing local markdown files.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'), '../..');
const GUIDES_DIR = path.join(ROOT, 'site', 'content', 'guides');

const supabaseUrl = (process.env.SUPABASE_URL || '').trim().replace(/\/$/, '');
const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '').trim();

if (!supabaseUrl || !supabaseKey) {
  console.log('ℹ️  sync-db-articles: SUPABASE_URL or SUPABASE_KEY not set. Using local markdown files.');
  process.exit(0);
}

async function fetchSupabaseArticles() {
  const endpoint = `${supabaseUrl}/rest/v1/articles?published=eq.true&select=*`;
  const response = await fetch(endpoint, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch articles from Supabase: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function sanitizeYaml(text) {
  if (!text) return '';
  return text.replace(/"/g, '\\"').replace(/\n/g, ' ');
}

async function sync() {
  console.log('🔄 sync-db-articles: Connecting to Supabase...');
  try {
    const articles = await fetchSupabaseArticles();
    if (!Array.isArray(articles) || articles.length === 0) {
      console.log('ℹ️  sync-db-articles: No published articles found in database.');
      return;
    }

    console.log(`📦 sync-db-articles: Found ${articles.length} published article(s) in Supabase.`);
    let written = 0;

    for (const art of articles) {
      const lang = (art.lang || 'ru').trim().toLowerCase();
      const slug = (art.slug || '').trim().toLowerCase().replace(/^\/+|\/+$/g, '');
      const type = (art.type || art.category || 'guide').trim().toLowerCase();

      if (!slug) {
        console.warn('⚠️  sync-db-articles: Skipping article without slug:', art.title);
        continue;
      }

      // Determine target folder: events go to content/guides/{lang}/events/{slug}.md
      const targetDir = type === 'event'
        ? path.join(GUIDES_DIR, lang, 'events')
        : path.join(GUIDES_DIR, lang);

      await fs.mkdir(targetDir, { recursive: true });
      const targetFile = path.join(targetDir, `${slug}.md`);

      const updatedDate = art.updated_at
        ? String(art.updated_at).slice(0, 10)
        : new Date().toISOString().slice(0, 10);

      const frontmatterLines = [
        '---',
        `title: "${sanitizeYaml(art.title || slug)}"`,
        `description: "${sanitizeYaml(art.description || '')}"`,
        `lang: ${lang}`,
        `type: ${type}`,
      ];

      if (art.video_topic) {
        frontmatterLines.push(`videoTopic: ${art.video_topic}`);
      }

      frontmatterLines.push(`updated: "${updatedDate}"`);
      frontmatterLines.push('---');
      frontmatterLines.push('');

      const fileContent = `${frontmatterLines.join('\n')}\n${(art.content || '').trim()}\n`;

      await fs.writeFile(targetFile, fileContent, 'utf8');
      written++;
    }

    console.log(`✅ sync-db-articles: Successfully synchronized ${written} article(s) from Supabase.`);
  } catch (err) {
    console.error('⚠️  sync-db-articles error:', err.message);
    // Don't fail the entire build if network/database is temporarily down; fall back to local files
    console.log('ℹ️  Proceeding with local files.');
  }
}

sync();
