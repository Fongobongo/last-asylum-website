#!/usr/bin/env python3
"""Apply inline MT results to components. Run AFTER /tmp/inline_parts/*.json exist.
Usage: python3 scripts/apply_inline_i18n.py [Component ...]  (default: all Type-A)
"""
import re, json, pathlib, sys

BASE = pathlib.Path('/home/fong/la/site/src/components')
PART = pathlib.Path('/tmp/inline_parts')
LANGS17 = ['de', 'es', 'pt', 'fr', 'id', 'ko', 'ja', 'ar', 'it', 'ms', 'nl', 'th', 'tr', 'vi', 'zh', 'pl', 'zh-tw']


def sq(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")


def load_mt(comp):
    return json.load(open(PART / f'{comp}.json'))


def scope_noscript(t):
    return re.sub(r'<script.*?</script>', '', t, flags=re.S)


def apply_type_a(comp, var='isRu', const_decl=None):
    """STR dict + T() picker; replace single-line pairs in doc order (excl. scripts)."""
    p = BASE / f'{comp}.astro'
    t = p.read_text(encoding='utf-8')
    mtdata = load_mt(comp)
    clean = scope_noscript(t)
    pat = re.compile(re.escape(var) + r" \? '((?:[^'\\]|\\.)*)' : '((?:[^'\\]|\\.)*)'")
    pairs = pat.findall(clean)
    order = [(f's{i}', en) for i, (_, en) in enumerate(pairs)]
    ru_vals = [ru for ru, _ in pairs]
    lines = ['const STR: Record<string, Record<string, string>> = {']
    lines.append('  ru: {')
    for i, ru in enumerate(ru_vals):
        lines.append(f"    s{i}: '{sq(ru)}',")
    lines.append('  },')
    lines.append('  en: {')
    for i, (_, en) in enumerate(pairs):
        lines.append(f"    s{i}: '{sq(en)}',")
    lines.append('  },')
    for lg in LANGS17:
        if lg not in mtdata:
            print(f'  SKIP lang {lg} (no MT)')
            continue
        lines.append(f'  {lg}: {{')
        for i, (key, en) in enumerate(order):
            v = mtdata[lg].get(key, en)
            lines.append(f"    {key}: '{sq(v)}',")
        lines.append('  },')
    lines.append('};')
    lines.append('const T = (k: string): string => {')
    lines.append('  const table: Record<string, string> | undefined = (STR as any)[lang] ?? STR.en;')
    lines.append('  return table?.[k] ?? (STR.en as any)[k] ?? k;')
    lines.append('};')
    anchor = f"const {var} = lang === 'ru';"
    m = re.search(r'^' + re.escape(anchor) + r'$', t, re.M)
    assert m, f'{comp}: anchor missing'
    t = t.replace(m.group(0), m.group(0) + '\n' + '\n'.join(lines), 1)
    # replace in doc order skipping script blocks
    segs = re.split(r'(<script.*?</script>)', t, flags=re.S)
    idx = [0]
    pat2 = re.compile(re.escape(var) + r" \? '(?:[^'\\]|\\.)*' : '(?:[^'\\]|\\.)*'")
    out = []
    for i, seg in enumerate(segs):
        if i % 2 == 1:
            out.append(seg)
        else:
            def sub(mo):
                key = f's{idx[0]}'
                idx[0] += 1
                return f"T('{key}')"
            out.append(pat2.sub(sub, seg))
    t = ''.join(out)
    assert idx[0] == len(order), f'{comp}: replaced {idx[0]} != {len(order)}'
    p.write_text(t, encoding='utf-8')
    print(comp, 'keys:', len(order))


if __name__ == '__main__':
    comps = sys.argv[1:] or ['GearCalc', 'TroopCalc', 'CodexGrid', 'SquadBuilder',
                             'AllianceDuelCalc', 'PwaBanner', 'VideoSection']
    from pathlib import Path as _P
    for c in comps:
        if c == 'TierListGrid':
            continue  # handled below with var='ru'
        if not (_P('/tmp/inline_parts') / f'{c}.json').exists():
            print(c, 'SKIP (no MT yet)')
            continue
        apply_type_a(c)
    # TierListGrid uses `ru` var
    if (_P('/tmp/inline_parts') / 'TierListGrid.json').exists():
        apply_type_a('TierListGrid', var='ru')
    else:
        print('TierListGrid SKIP (no MT yet)')
