#!/usr/bin/env python3
"""Translate content/guides/en/*.md into target languages via Gemini Flash.
Preserves markdown, frontmatter keys, code blocks, links, component comments.
"""
import os, re, json, time, sys, urllib.request, pathlib

KEY = os.environ['GEMINI_API_KEY']
MODELS = ["gemini-3.1-flash-lite"]*4 + ["gemini-2.5-flash-lite", "gemini-2.5-flash"]

LANGS = ['de','es','fr','id','ja','ko','pt']
BASER = pathlib.Path('site/content/guides')

GLOSSARY = {
 'de': {'':'',},
}

COMMON = """Rules:
- Output ONLY the translated markdown, no commentary, no code fences around the whole file.
- Keep frontmatter (lines between --- at the top): translate `title` and `description` values, keep all other keys (lang, updated, videoTopic, calculators, infographics...) untouched. Set lang: {lang}.
- Keep markdown structure identical: headers, tables, list markers, bold/italic, links, anchor ids {{#...}}, HTML comments (<!-- component:... -->), code blocks, internal links like /buildings/ or /ru/... (translate to /{lang}/... only when the page is language-prefixed — for internal guide links use /{lang}/slug/ form).
- Keep URLs, game item names in official {lang} localization when there is a common community term, otherwise keep English with translation in parentheses sparingly.
- Keep hero/place proper names as-is (May sometimes be transliterated in {lang} if the game officially does so — otherwise Latin).
- Do not add or remove content. Do not summarize.
"""

def call(prompt, text, lang):
    body = {"contents": [{"parts": [{"text": prompt + "\n\nTARGET LANGUAGE: " + lang + "\n\n" + COMMON.format(lang=lang) + "\n---SOURCE---\n" + text}]}],
            "generationConfig": {"temperature": 0.2, "maxOutputTokens": 32000}}
    for attempt in range(9):
        model = MODELS[attempt % len(MODELS)]
        url = "https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent" % model
        req = urllib.request.Request(url + "?key=" + KEY, data=json.dumps(body).encode(), headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                d = json.loads(r.read())
            parts = d['candidates'][0]['content']['parts']
            out = ''.join(p.get('text','') for p in parts)
            if out.strip():
                return out
            print("    empty, retry", attempt+1); time.sleep(20)
        except Exception as e:
            print("    retry", attempt+1, model, str(e)[:100]); time.sleep(20+attempt*15)
    return None

def translate(text, lang):
    return call("You are a professional game-guide translator (Last Asylum: Plague) into " + lang + ".", text, lang)

def main():
    from concurrent.futures import ThreadPoolExecutor
    import threading
    lock = threading.Lock()
    tasks = []
    for f in sorted((BASER/'en').rglob('*.md')):
        rel = f.relative_to(BASER/'en')
        for lang in LANGS:
            out = BASER/lang/rel
            if out.exists() and os.path.getsize(out) > 200:
                continue
            tasks.append((f, rel, lang, out))
    print(f"{len(tasks)} tasks queued")
    def work(f, rel, lang, out):
        raw = f.read_text()
        out.parent.mkdir(parents=True, exist_ok=True)
        print(f"{rel} -> {lang}", flush=True)
        t = translate(raw, lang)
        if not t:
            print("  FAILED", rel, lang, flush=True); return
        t = t.strip()
        if t.startswith('```'): t = re.sub(r'^```(markdown|md)?\n', '', t); t = re.sub(r'\n```$', '', t)
        t = re.sub(r'^lang:\s*\S+', 'lang: '+lang, t, count=1, flags=re.M)
        with lock:
            out.write_text(t)
    with ThreadPoolExecutor(max_workers=6) as ex:
        list(ex.map(lambda a: work(*a), tasks))

if __name__ == '__main__':
    main()
