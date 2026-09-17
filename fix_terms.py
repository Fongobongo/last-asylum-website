import json, re, sys, pathlib
C = json.load(open('game_terms.json'))
BASE = pathlib.Path('site/content/guides')
total=0
for lg in ['de','es','fr','id','ja','ko','pt']:
    m = C[lg]
    # strip junk entries and potential format codes
    pairs = [(k,v) for k,v in m.items()
             if 3 <= len(k) <= 60 and '{' not in v and '\\' not in v and v != k
             and not re.fullmatch(r'[\d\sK.]*', k)
             and len(k.split())<=8]
    pairs.sort(key=lambda p:-len(p[0]))
    regex = [(re.compile(r'(?<![\w])'+re.escape(k)+r'(?![\w])'), v) for k,v in pairs]
    n_files = 0
    for f in BASE.glob(f'{lg}/**/*.md'):
        s = f.read_text()
        o = 0
        for r, v in regex:
            s, k = r.subn(v, s)
            o += k
        if o:
            f.write_text(s); n_files += 1; total += o
    print(lg, f'{n_files} files patched')
print('replacements total:', total)
