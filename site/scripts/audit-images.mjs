#!/usr/bin/env node
/**
 * Reports the heaviest images under site/public to guide optimization.
 * Usage: node scripts/audit-images.mjs [--top N] [--min-kb N]
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '../public');
const TOP = Number(process.argv.find((a) => a.startsWith('--top='))?.split('=')[1] ?? 20);
const MIN_KB = Number(process.argv.find((a) => a.startsWith('--min-kb='))?.split('=')[1] ?? 200);

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (/\.(png|jpe?g|webp|avif|gif)$/i.test(e.name)) {
      const st = await fs.stat(p);
      out.push({ file: path.relative(ROOT, p), kb: Math.round(st.size / 1024) });
    }
  }
  return out;
}

const all = await walk(ROOT);
const totalKb = all.reduce((s, i) => s + i.kb, 0);
console.log(`🖼️  audit-images: ${all.length} images, ${(totalKb / 1024).toFixed(1)} MB total in public/\n`);
console.log(`Top ${TOP} over ${MIN_KB} KB:`);
for (const i of all.filter((x) => x.kb >= MIN_KB).sort((a, b) => b.kb - a.kb).slice(0, TOP)) {
  console.log(`  ${String(i.kb).padStart(6)} KB  ${i.file}`);
}
const byExt = {};
for (const i of all) {
  const ext = i.file.split('.').pop().toLowerCase();
  byExt[ext] = byExt[ext] || { n: 0, kb: 0 };
  byExt[ext].n++;
  byExt[ext].kb += i.kb;
}
console.log('\nBy format:');
for (const [ext, v] of Object.entries(byExt).sort((a, b) => b[1].kb - a[1].kb)) {
  console.log(`  .${ext}: ${v.n} files, ${(v.kb / 1024).toFixed(1)} MB`);
}
