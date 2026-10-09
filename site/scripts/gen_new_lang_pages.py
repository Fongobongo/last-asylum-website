#!/usr/bin/env python3
"""Generate static index/tool pages for new languages from EN templates.
MT payloads: /tmp/batch2_parts/{static_meta,home,events,misc}.json
New langs are content-driven for hubs/events (no static duplicates!).

Usage: python3 scripts/gen_new_lang_pages.py [lang ...]
"""
import re, json, pathlib, sys

SITE = pathlib.Path('/home/fong/la/site')
PART = pathlib.Path('/tmp/batch2_parts')
LANGS = sys.argv[1:] or ['ar', 'it', 'ms', 'nl', 'th', 'tr', 'vi', 'zh']

SM = json.load(open(PART / 'static_meta.json'))
HO = json.load(open(PART / 'home.json'))
EV = json.load(open(PART / 'events.json'))
MI = json.load(open(PART / 'misc.json'))
SRC = json.load(open('/tmp/batch2_src.json'))['static']


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding='utf-8')


def base_of(t, lang, depth):
    t = t.replace("const lang: Lang = 'en';", f"const lang: Lang = '{lang}';")
    imp = '../' * depth
    t = t.replace('../layouts/', imp + 'layouts/').replace('../components/', imp + 'components/')
    t = t.replace('../i18n/', imp + 'i18n/').replace('../data/', imp + 'data/')
    return t


def prefix(t, lang):
    t = re.sub(r'path="/', f'path="/{lang}/', t)
    t = re.sub(r'href=(["\'])/', rf'href=\1/{lang}/', t)
    t = re.sub(r'href=\{`/', 'href={`/' + lang + '/', t)
    return t


for lang in LANGS:
    root = SITE / f'src/pages/{lang}'
    sm, ho, ev, mi = SM[lang], HO[lang], EV[lang], MI[lang]

    # ---------- index ----------
    t = (SITE / 'src/pages/index.astro').read_text(encoding='utf-8')
    for s_en, s_lo in zip(SRC['home_sections'], ho['sections']):
        t = t.replace(f"title: '{s_en['title']}'", f"title: '{s_lo['title']}'", 1)
    for p_en, p_lo in zip(SRC['home_popular'], ho['popular']):
        t = t.replace(f"title: '{p_en['title']}', desc: '{p_en['desc']}'",
                      f"title: '{p_lo['title']}', desc: '{p_lo['desc']}'", 1)
    t = base_of(t, lang, 2)
    t = re.sub(r"href: '/", f"href: '/{lang}/", t)
    t = t.replace('path="/"', f'path="/{lang}/"')
    write(root / 'index.astro', t)

    # ---------- codes ----------
    t = (SITE / 'src/pages/codes.astro').read_text(encoding='utf-8')
    t = base_of(t, lang, 2)
    t = prefix(t, lang)
    t = re.sub(r'title="[^"]*" description="[^"]*"',
               f'title="{sm["codes"]["title"]}" description="{sm["codes"]["desc"]}"', t, count=1)
    t = t.replace('Full redemption guide — <a href="#how-to-redeem" class="text-toxic-400 underline">below on this page ↓</a>',
                  mi["codes_intro"])
    t = t.replace('<p>Codes are region-free but usually one-per-account.</p>',
                  f'<p>{mi["codes_region"]}</p>')
    write(root / 'codes.astro', t)

    # ---------- credits ----------
    t = (SITE / 'src/pages/credits.astro').read_text(encoding='utf-8')
    t = base_of(t, lang, 2)
    t = prefix(t, lang)
    t = re.sub(r'title="[^"]*" description="[^"]*"',
               f'title="{sm["credits"]["title"]}" description="{sm["credits"]["desc"]}"', t, count=1)
    t = t.replace('<h2 id="authors">Guide authors</h2>',
                  f'<h2 id="authors">{mi["credits_authors"]}</h2>')
    t = t.replace('<h2 id="sources">Sources</h2>',
                  f'<h2 id="sources">{mi["credits_sources"]}</h2>')
    t = t.replace('If you are an author and want your name adjusted or removed, contact us — we will fix it promptly.',
                  mi["credits_contact"])
    write(root / 'credits.astro', t)

    # ---------- shop / support / patch-notes ----------
    for name in ['shop', 'support', 'patch-notes']:
        t = (SITE / f'src/pages/{name}.astro').read_text(encoding='utf-8')
        t = base_of(t, lang, 2)
        t = prefix(t, lang)
        t = re.sub(r'title="[^"]*" description="[^"]*"',
                   f'title="{sm[name]["title"]}" description="{sm[name]["desc"]}"', t, count=1)
        write(root / f'{name}.astro', t)

    # ---------- infographics ----------
    t = (SITE / 'src/pages/infographics.astro').read_text(encoding='utf-8')
    t = base_of(t, lang, 2)
    t = prefix(t, lang)
    t = re.sub(r'title="[^"]*" description="[^"]*"',
               f'title="{sm["infographics"]["title"]}" description="{sm["infographics"]["desc"]}"', t, count=1)
    t = t.replace('title="📊 Infographics & Tactical Posters"',
                  f'title="{mi["info_title"]}"')
    t = t.replace('High-resolution visual cheat sheets, battle diagrams, and upgrade math compiled from top community strategists.',
                  mi["info_desc"])
    t = t.replace('Browse, filter, and enlarge every tactical diagram for Last Asylum: Plague. Click any image to open the full-resolution view with zoom and download options.',
                  mi["info_p"])
    t = t.replace("{ label: 'Infographics' }", f"{{ label: '{mi['info_crumb']}' }}")
    write(root / 'infographics.astro', t)

    # ---------- events/index ----------
    t = (SITE / 'src/pages/events/index.astro').read_text(encoding='utf-8')
    t = base_of(t, lang, 3)
    t = prefix(t, lang)
    pg = sm['events_page'] if isinstance(sm.get('events_page'), dict) else sm['events_page']
    t = re.sub(r'title="[^"]*" description="[^"]*"',
               f'title="{pg["title"]}" description="{pg["desc"]}"', t, count=1)
    t = t.replace('<h1 class="mb-3 text-4xl font-bold text-plague-100">Event Guides</h1>',
                  f'<h1 class="mb-3 text-4xl font-bold text-plague-100">{pg["title"]}</h1>')
    t = t.replace('Complete breakdowns of every event: schedules, scoring, strategy and mistakes to avoid.',
                  pg["desc"])
    # events array: match EN entries positionally
    for e_en, e_lo in zip(SRC['events'], ev['events']):
        t = t.replace(f"name: '{e_en['name']}', icon:", f"name: '{e_lo['name']}', icon:", 1)
        t = t.replace(f"desc: '{e_en['desc']}'", f"desc: '{e_lo['desc']}'", 1)
    write(root / 'events' / 'index.astro', t)

    # ---------- heroes/index ----------
    t = (SITE / 'src/pages/heroes/index.astro').read_text(encoding='utf-8')
    t = base_of(t, lang, 3)
    t = prefix(t, lang)
    t = re.sub(r'title="[^"]*" description="[^"]*"',
               f'title="{mi["heroes_title"]}" description="{mi["heroes_desc"]}"', t, count=1)
    write(root / 'heroes' / 'index.astro', t)

    # ---------- codex/index + codex/[slug]/index (copy DE pattern files) ----------
    t = (SITE / 'src/pages/de/codex/index.astro').read_text(encoding='utf-8')
    t = t.replace("const lang: Lang = 'de';", f"const lang: Lang = '{lang}';")
    t = t.replace('/de/', f'/{lang}/')
    write(root / 'codex' / 'index.astro', t)
    t = (SITE / 'src/pages/de/codex/[slug]/index.astro').read_text(encoding='utf-8')
    t = t.replace("const lang: Lang = 'de';", f"const lang: Lang = '{lang}';")
    t = t.replace('/de/', f'/{lang}/')
    write(root / 'codex' / '[slug]' / 'index.astro', t)

    # ---------- atlas redirect ----------
    write(root / 'atlas.astro',
          '---\n// Legacy route: the Guide Atlas lives at /guides/ now.\n'
          f"return Astro.redirect('/{lang}/guides/', 301);\n---\n")

    print(lang, 'static done')
print('ALL DONE')
