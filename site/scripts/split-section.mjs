// Splits an oversized guide hub (`content/guides/{lang}/{section}.md`) into
// per-section articles under `content/guides/{lang}/{section}/{group}.md`.
// Grouping is keyed on the language-independent `{#anchor}` ids on each `##`
// heading, so the same config works for every translation; titles are taken
// from each language's own headings (no retranslation needed).
//
// Usage:
//   node scripts/split-section.mjs economy --langs en,ru --dry
//   node scripts/split-section.mjs economy --langs en,ru
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const GUIDES = path.join(ROOT, 'content/guides');

// Anchor ids are language-independent; a heading with no id inherits the
// previous matched group, so translated batches with slightly different
// heading sets still split cleanly.
const SECTIONS = {
  economy: [
    { slug: 'shops', anchors: ['vip-shop', 'restock-schedule', 'sanctuary-shop', 'expedition-shop', 'honor-shop', 'alliance-shop', 'epigraph-chests', 'diamond-rules', 'smart-spending'] },
    { slug: 'plunder', anchors: ['plunder-mechanics', 'nine-hit-rule', 'stamina-math', 'caravans-covert-ops'] },
    { slug: 'weekly-free-shards', anchors: ['shop-sweep', 'weekly-ur-shards'] },
    { slug: 'reference', anchors: ['wiki-where-to-get', 'wiki-level-supplies', 'wiki-spending', 'wiki-vip'] },
  ],
  buildings: [
    { slug: 'build-priority', anchors: ['priority-order'] },
    { slug: 'building-functions', anchors: ['building-functions', 'barracks-vs-training', 'building-tactics'] },
    { slug: 'sanctuary-roadmap', anchors: ['sanctuary-roadmap', 'milestones'] },
    { slug: 'speed-and-resources', anchors: ['construction-speed', 'resource-scaling', 'research-micro'] },
    { slug: 'research-lab-roadmap', anchors: ['tech-roadmap'] },
    { slug: 'reference', anchors: ['wiki-building-limits', 'wiki-research-priority'] },
    { slug: 'building-index', anchors: ['building-index'] },
    { slug: 'community-tactics', anchors: ['dtf-beginner-tactics', 'dtf-sanctuary-first', 'dtf-two-builders', 'dtf-dtf-two-builders', 'dtf-due-costruttori', 'dtf-resource-lag', 'dtf-tavern-temple-lab', 'dtf-army-buildings', 'dtf-support-defense', 'dtf-activity-buildings', 'dtf-gear-defer', 'dtf-lab-army-gear', 'dtf-lab', 'dtf-army-sizing', 'dtf-gear-district', 'dtf-beginner-order'] },
  ],
  gear: [
    { slug: 'rules-and-slots', anchors: ['cardinal-rules', 'slot-priorities', 'slot-prioriteiten', 'smelters'] },
    { slug: 'crafting', anchors: ['crafting-math', 'level-40-jump', 'promotion', 'exclusive-smelt'] },
    { slug: 'energy-vs-physical', anchors: ['energy-vs-physical'] },
    { slug: 'blueprint-plan', anchors: ['three-stage-gear-plan', 'video-breakdown-gear'] },
    { slug: 'situational', anchors: ['boss-gear', 'raven-gear', 'materials'] },
    { slug: 'reference', anchors: ['wiki-hero-gear', 'wiki-hero-unique-equipment'] },
    { slug: 'community-craft-order', anchors: ['dtf-craft-order', 'dtf-purple-base', 'dtf-squad-roles', 'dtf-swords-first', 'dtf-gloves-next', 'dtf-armor-dd-first', 'dtf-boots-energy', 'dtf-tank-gloves-swords', 'dtf-support-last', 'dtf-level-thresholds', 'dtf-star-order', 'dtf-blueprint-sources', 'dtf-one-squad'] },
  ],
  era: [
    { slug: 'overview', anchors: ['season-overview', 'resistance-first'] },
    { slug: 'specialty-trees', anchors: ['specialty-trees', 'war-supply', 'specialty-builds', 'video-breakdown-era'] },
    { slug: 'lord-and-heroes', anchors: ['lord-statues', 'lord-evolution-stats', 'hero-progression-order'] },
    { slug: 'preparation', anchors: ['hoarding-list', 'week-1-purchases', 'claire-conversion', 'conversion-costs', 'conversion-gains', 'the-passive-dip', 'skip-the-dip'] },
    { slug: 'patch-and-systems', anchors: ['era-patch-overview', 'era-season-systems'] },
    { slug: 'development-tips', anchors: ['era-dev-tips'] },
  ],
  tips: [
    { slug: 'building-and-combat', anchors: ['snapshotting', 'ghost-rally', 'falcon-tower', 'excavations'] },
    { slug: 'protection', anchors: ['warehouse-secrets', 'row-shift'] },
    { slug: 'progression', anchors: ['claire-conversion', 'pre-farming', 'troop-promotion', 'duel-research-lock', 'gear-priorities-tips', 'boss-specialists', 'diamond-discipline', 'caravans'] },
    { slug: 'checklist', anchors: ['ten-commandments'] },
    { slug: 'community', anchors: ['korpez-regrets', 'dtf-fast-start'] },
  ],
  'tier-list': [
    { slug: 'tiers', anchors: ['s-tier', 'a-tier', 'b-tier', 'c-tier', 'how-to-read'] },
    { slug: 'pvp-pve', anchors: ['pvp-tier', 'pve-tier', 'f2p-priority'] },
    // dtf-* ids live on H3s under dtf-squad-guide, so they travel with it.
    { slug: 'reading-tiers', anchors: ['tier-context', 'dtf-squad-guide'] },
    { slug: 'reference', anchors: ['wiki-hero-tier-list'] },
  ],
};

// "Articles in this section" in all 19 site languages.
const ARTICLES = {
  en: 'Articles in this section', ru: 'Статьи в этом разделе', de: 'Artikel in diesem Abschnitt',
  es: 'Artículos de esta sección', pt: 'Artigos desta seção', fr: 'Articles de cette section',
  id: 'Artikel di bagian ini', ko: '이 섹션의 글', ja: 'このセクションの記事', ar: 'المقالات في هذا القسم',
  it: 'Articoli di questa sezione', ms: 'Artikel dalam bahagian ini', nl: 'Artikelen in deze sectie',
  th: 'บทความในส่วนนี้', tr: 'Bu bölümdeki makaleler', vi: 'Bài viết trong mục này',
  zh: '本节文章', pl: 'Artykuły w tej sekcji', 'zh-tw': '本節文章',
};

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { frontmatter: '', body: text };
  return { frontmatter: match[1], body: text.slice(match[0].length) };
}

function fmGet(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!m) return undefined;
  return m[1].replace(/^["']|["']$/g, '').trim();
}

function headingText(line) {
  return line.replace(/^##\s+/, '').replace(/\s*\{#[a-z0-9-]+\}\s*$/i, '').trim();
}

function anchorOf(line) {
  const m = line.match(/\{#([a-z0-9-]+)\}\s*$/i);
  return m ? m[1] : null;
}

function cleanText(s) {
  return s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`>#|]/g, ' ').replace(/^[-•]\s*/, '').replace(/\s+/g, ' ').trim();
}

function firstParagraph(block) {
  const lines = block.split('\n').slice(1); // drop the H2 line
  const para = [];
  for (const line of lines) {
    if (/^#{1,6}\s/.test(line) || /^\s*$/.test(line) || /^[-*|>#]/.test(line)) {
      if (para.length) break;
      continue;
    }
    para.push(line.trim());
  }
  // Fall back to the first content line when a section opens with a list/table.
  const text = cleanText(para.length ? para.join(' ') : (lines.find((l) => l.trim() && !/^\s*(---|\|)/.test(l)) || ''));
  return text.length > 165 ? text.slice(0, 162).trimEnd() + '…' : text;
}

function splitBody(body, groups) {
  const anchorToGroup = new Map();
  for (const g of groups) for (const a of g.anchors) anchorToGroup.set(a, g.slug);

  const lines = body.split('\n');
  const intro = [];
  const blocks = []; // { anchor, group, text }
  let current = null;
  for (const line of lines) {
    if (/^##\s/.test(line)) {
      const anchor = anchorOf(line);
      const group = anchor && anchorToGroup.has(anchor) ? anchorToGroup.get(anchor) : (current ? current.group : null);
      current = { startLine: line, lines: [line], anchor, group };
      blocks.push(current);
    } else if (current) {
      current.lines.push(line);
    } else {
      intro.push(line);
    }
  }
  for (const b of blocks) b.text = b.lines.join('\n').replace(/\n+---\s*$/, '').trimEnd() + '\n';
  return { intro: intro.join('\n').trim(), blocks };
}

function buildGroupFiles(fm, blocks, groups) {
  const out = new Map();
  const lang = fmGet(fm, 'lang');
  const updated = fmGet(fm, 'updated');
  for (const g of groups) {
    const own = blocks.filter((b) => b.group === g.slug);
    if (!own.length) continue;
    const title = headingText(own[0].startLine);
    const desc = firstParagraph(own[0].text);
    const front = [
      '---',
      `title: ${JSON.stringify(title)}`,
      `description: ${JSON.stringify(desc)}`,
      `lang: ${lang}`,
      updated ? `updated: ${JSON.stringify(updated)}` : null,
      'type: guide',
      '---',
      '',
    ].filter((l) => l !== null).join('\n');
    out.set(g.slug, { title, desc, content: front + own.map((b) => b.text).join('\n') });
  }
  return out;
}

const section = process.argv[2];
const langsArg = (process.argv.find((a) => a.startsWith('--langs=')) || '').split('=')[1];
const langs = langsArg ? langsArg.split(',') : fs.readdirSync(GUIDES).filter((d) => fs.statSync(path.join(GUIDES, d)).isDirectory());
const dry = process.argv.includes('--dry');

const groups = SECTIONS[section];
if (!groups) { console.error(`Unknown section "${section}". Known: ${Object.keys(SECTIONS).join(', ')}`); process.exit(1); }

for (const lang of langs) {
  const src = path.join(GUIDES, lang, `${section}.md`);
  if (!fs.existsSync(src)) { console.warn(`skip ${lang}: no ${section}.md`); continue; }
  const dir = path.join(GUIDES, lang, section);
  // Idempotent: skip if any of this config's group files already exist.
  if (groups.some((g) => fs.existsSync(path.join(dir, `${g.slug}.md`)))) {
    console.warn(`skip ${lang}/${section}: already split`);
    continue;
  }
  const { frontmatter, body } = parseFrontmatter(fs.readFileSync(src, 'utf8'));
  const { intro, blocks } = splitBody(body, groups);
  const files = buildGroupFiles(frontmatter, blocks, groups);

  const assigned = new Set(blocks.filter((b) => b.group).map((b) => b.anchor));
  const orphans = blocks.filter((b) => !b.group).map((b) => b.anchor || headingText(b.startLine));
  if (orphans.length) console.warn(`  ${lang}: ${orphans.length} H2 block(s) stay on hub (no group): ${orphans.join(' | ')}`);

  const links = [...files.entries()].map(([slug, f]) => `- **[${f.title}](/${lang === 'en' ? '' : lang + '/'}${section}/${slug}/)** — ${f.desc}`).join('\n');
  const head = ARTICLES[lang] || ARTICLES.en;
  const hubBody = `${intro}\n\n## 📖 ${head}\n\n${links}\n`;
  const hub = `---\n${frontmatter}\n---\n\n${hubBody}`;
  if (files.size === 0) { console.warn(`skip ${lang}/${section}: no group matched any heading`); continue; }

  console.log(`\n${lang}: ${blocks.length} H2 -> ${files.size} files + hub`);
  for (const [slug] of files) console.log(`  ${section}/${slug}.md`);
  if (dry) continue;

  fs.mkdirSync(dir, { recursive: true });
  for (const [slug, f] of files) fs.writeFileSync(path.join(dir, `${slug}.md`), f.content);
  fs.writeFileSync(src, hub);
}
console.log(dry ? '\n(dry run — nothing written)' : '\ndone');
