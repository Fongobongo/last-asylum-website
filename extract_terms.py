import re, pathlib, json
BASE=pathlib.Path('/opt/la/langs')
pat=re.compile(r'\["?([\w\.]+)"?\]\s*=\s*\{[^}]*?\["name"\]\s*=\s*"([^"]*)"')
def load(lg):
    out={}
    for f in (BASE/lg).glob('*.lua'):
        for mid,name in pat.findall(f.read_text(errors='ignore')):
            if name and len(name)<80: out.setdefault(mid,name)
    return out
en=load('en')
res={}
for lg in ['de','es','fr','id','ja','ko','pt','ru']:
    loc=load(lg)
    m={}
    for k,v in loc.items():
        if k in en and en[k]!=v and len(en[k])>2 and not re.fullmatch(r'[0-9\s]+',en[k]):
            m[en[k]]=v
    res[lg]=m
    print(lg, len(m))
json.dump(res, open('game_terms.json','w'), ensure_ascii=False, indent=1)
