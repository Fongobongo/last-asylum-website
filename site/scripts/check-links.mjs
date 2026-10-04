#!/usr/bin/env node
/**
 * Verifies internal links across the built site (site/dist).
 * - Resolves root-absolute (/x/) and relative hrefs against dist/
 * - Respects trailingSlash:'always' (/foo/ -> foo/index.html)
 * - Validates #fragment anchors against id="..." in the target file
 * - Skips external URLs, mailto:, tel:, javascript:
 *
 * Usage: node scripts/check-links.mjs [distDir]
 * Exit code 1 when broken links are found.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.argv[2] ?? 'dist');
const SKIP_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:', 'javascript:', 'data:'];

async function collectHtml(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await collectHtml(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function resolveTarget(fromFile, href) {
  const [urlPart, hash] = href.split('#', 2);
  const anchor = hash !== undefined ? decodeURIComponent(hash.split('?')[0]) : null;
  let pathname = urlPart.split('?')[0];
  if (!pathname) return { file: fromFile, anchor }; // same-page anchor
  let abs;
  if (pathname.startsWith('/')) abs = path.join(DIST, pathname);
  else abs = path.resolve(path.dirname(fromFile), pathname);
  return { file: abs, anchor, dir: pathname.endsWith('/') };
}

async function fileExists(p) {
  try {
    const st = await fs.stat(p);
    if (st.isFile()) return p;
    if (st.isDirectory()) {
      const idx = path.join(p, 'index.html');
      try {
        await fs.stat(idx);
        return idx;
      } catch { return null; }
    }
    return null;
  } catch {
    // extensionless: try .html and /index.html
    for (const cand of [`${p}.html`, path.join(p, 'index.html')]) {
      try {
        const st = await fs.stat(cand);
        if (st.isFile()) return cand;
      } catch { /* next */ }
    }
    return null;
  }
}

const anchorCache = new Map();
async function hasAnchor(file, anchor) {
  if (!anchor) return true;
  if (!anchorCache.has(file)) {
    const html = await fs.readFile(file, 'utf8');
    const ids = new Set();
    const re = /(?:id|name)="([^"]+)"/g;
    let m;
    while ((m = re.exec(html)) !== null) ids.add(decodeURIComponent(m[1]));
    anchorCache.set(file, ids);
  }
  return anchorCache.get(file).has(anchor);
}

const files = await collectHtml(DIST);
console.log(`🔗 check-links: scanning ${files.length} HTML files in ${DIST}`);
const errors = [];
const hrefRe = /<a\b[^>]*\bhref="([^"]+)"/gi;

for (const f of files) {
  const raw = await fs.readFile(f, 'utf8');
  // Runtime-generated links inside <script> can't be validated statically
  // (e.g. client-side template literals like `${baseLink}`) — strip scripts.
  const html = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const seen = new Set();
  let m;
  hrefRe.lastIndex = 0;
  while ((m = hrefRe.exec(html)) !== null) {
    const href = m[1].trim();
    if (!href || seen.has(href)) continue;
    seen.add(href);
    if (SKIP_PREFIXES.some((p) => href.toLowerCase().startsWith(p))) continue;
    if (href.startsWith('#')) {
      if (!(await hasAnchor(f, decodeURIComponent(href.slice(1))))) {
        errors.push(`${path.relative(DIST, f)} → missing anchor ${href}`);
      }
      continue;
    }
    const { file, anchor } = resolveTarget(f, href);
    const real = await fileExists(file);
    if (!real) {
      errors.push(`${path.relative(DIST, f)} → 404 ${href}`);
    } else if (anchor && !(await hasAnchor(real, anchor))) {
      errors.push(`${path.relative(DIST, f)} → ${href} (anchor #${anchor} missing)`);
    }
    if (errors.length > 200) break;
  }
  if (errors.length > 200) break;
}

if (errors.length) {
  console.error(`❌ check-links: ${errors.length} broken internal link(s):`);
  for (const e of errors.slice(0, 50)) console.error(`   ${e}`);
  process.exit(1);
}
console.log('✅ check-links: all internal links resolve.');
