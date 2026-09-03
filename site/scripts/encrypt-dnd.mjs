#!/usr/bin/env node
/**
 * Encrypts content/dnd/*.md into a single public/dnd/payload.enc at build time.
 * Format: base64( PBKDF2-salt[16] | AES-GCM-iv[12] | ciphertext )
 * Key: PBKDF2-SHA256(passphrase = DND_SECRET env, 150k iterations, 256-bit)
 * The same scheme is decrypted client-side in src/pages/dnd.astro (WebCrypto).
 *
 * Usage:
 *   DND_SECRET="passphrase" node scripts/encrypt-dnd.mjs
 * Without DND_SECRET the script writes nothing (the /dnd/ page then shows
 * "payload missing" — safe default for public forks).
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'), '../..');
const SRC = path.join(ROOT, 'site', 'content', 'dnd');
const OUT_DIR = path.join(ROOT, 'site', 'public', 'dnd');
const OUT_FILE = path.join(OUT_DIR, 'payload.enc');

const secret = process.env.DND_SECRET;
if (!secret) {
  console.log('encrypt-dnd: DND_SECRET not set — skipping (dnd page will show "missing")');
  process.exit(0);
}

let files = [];
try {
  files = (await fs.readdir(SRC)).filter((f) => f.endsWith('.md'));
} catch {
  console.log('encrypt-dnd: no content/dnd directory — skipping');
  process.exit(0);
}

if (!files.length) {
  console.log('encrypt-dnd: no DND entries found');
  process.exit(0);
}

// Concatenate all entries into one markdown document
const parts = [];
for (const f of files.sort()) {
  const raw = await fs.readFile(path.join(SRC, f), 'utf8');
  // strip frontmatter
  const body = raw.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const title = (raw.match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1] || f.replace(/\.md$/, '');
  const updated = (raw.match(/^updated:\s*"?([\d-]+)"?\s*$/m) || [])[1] || '';
  parts.push(`## ${title}\n\n${updated ? `_${updated}_\n\n` : ''}${body.trim()}`);
}
const plaintext = parts.join('\n\n---\n\n');

// Encrypt
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(secret, salt, 150000, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const ciphertext = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final(), cipher.getAuthTag()]);

await fs.mkdir(OUT_DIR, { recursive: true });
await fs.writeFile(OUT_FILE, Buffer.concat([salt, iv, ciphertext]).toString('base64'));

console.log(`encrypt-dnd: ${files.length} entr${files.length === 1 ? 'y' : 'ies'} -> public/dnd/payload.enc (${ciphertext.length}b ciphertext)`);