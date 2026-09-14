#!/usr/bin/env node
/**
 * Seeds all local markdown guides and events into Supabase articles table.
 *
 * Usage:
 *   SUPABASE_URL="https://xxx.supabase.co" SUPABASE_SERVICE_ROLE_KEY="ey..." npm run db:seed
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'), '../..');
const GUIDES_DIR = path.join(ROOT, 'site', 'content', 'guides');

const supabaseUrl = (process.env.SUPABASE_URL || '').trim().replace(/\/$/, '');
const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '').trim();

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY) must be provided.');
  console.log('Usage: SUPABASE_URL="https://xxx.supabase.co" SUPABASE_SERVICE_ROLE_KEY="..." node scripts/seed-supabase.mjs');
  process.exit(1);
}

async function walkDir(dir) {
  let files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await walkDir(res));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(res);
    }
  }
  return files;
}

function parseMarkdownFile(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, content: raw };
  }

  const fmRaw = match[1];
  const content = match[2].trim();
  const frontmatter = {};

  for (const line of fmRaw.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    frontmatter[key] = val;
  }

  return { frontmatter, content };
}

async function seed() {
  console.log('🔍 Scanning local markdown guides...');
  const files = await walkDir(GUIDES_DIR);
  console.log(`Found ${files.length} markdown file(s). Preparing records...`);

  const records = [];

  for (const file of files) {
    const rel = path.relative(GUIDES_DIR, file).replace(/\\/g, '/');
    const parts = rel.split('/');
    const lang = parts[0];
    const isEvent = parts[1] === 'events';
    const filename = parts[parts.length - 1];
    const slug = filename.replace(/\.md$/, '');

    const raw = await fs.readFile(file, 'utf8');
    const { frontmatter, content } = parseMarkdownFile(raw);

    records.push({
      slug,
      lang: frontmatter.lang || lang,
      title: frontmatter.title || slug,
      description: frontmatter.description || '',
      content,
      type: isEvent ? 'event' : (frontmatter.type || 'guide'),
      video_topic: frontmatter.videoTopic || null,
      updated_at: frontmatter.updated || new Date().toISOString().slice(0, 10),
      published: true,
    });
  }

  console.log(`🚀 Uploading ${records.length} article(s) to Supabase...`);

  const endpoint = `${supabaseUrl}/rest/v1/articles?on_conflict=lang,slug`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates',
    },
    body: JSON.stringify(records),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`❌ Upload failed (${response.status}):`, errorText);
    process.exit(1);
  }

  console.log(`🎉 Successfully seeded ${records.length} article(s) into Supabase!`);
}

seed().catch((err) => {
  console.error('Fatal error during seed:', err);
  process.exit(1);
});
