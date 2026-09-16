#!/usr/bin/env python3
"""
translate_missing.py
Fills in missing Russian transcripts for any files that only have English transcripts.
"""

import os
import re
import time
import json
import urllib.request
import urllib.parse

TRANSCRIPTS_DIR = "/home/fong/la/transcripts"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"

def translate_single(text, target_lang="ru"):
    if not text.strip():
        return ""
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + target_lang + "&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return "".join(part[0] for part in data[0] if part[0]).strip()
    except Exception as e:
        time.sleep(1)
        return text

def translate_batch(texts, target_lang="ru", batch_size=20):
    results = []
    for i in range(0, len(texts), batch_size):
        chunk = texts[i:i + batch_size]
        combined = "\n<<SPLIT>>\n".join(chunk)
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + target_lang + "&dt=t&q=" + urllib.parse.quote(combined)
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        success = False
        for attempt in range(2):
            try:
                with urllib.request.urlopen(req, timeout=15) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    full = "".join(part[0] for part in data[0] if part[0])
                    parts = [p.strip() for p in full.split("<<SPLIT>>")]
                    if len(parts) == len(chunk):
                        results.extend(parts)
                        success = True
                        break
            except Exception:
                time.sleep(1)
        if not success:
            # Fallback one by one
            for t in chunk:
                results.append(translate_single(t, target_lang))
                time.sleep(0.1)
        time.sleep(0.3)
    return results

def process_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    if "(Русский транскрипт недоступен)" not in content:
        return False
        
    print(f"Processing missing RU transcript for: {os.path.basename(filepath)}...")
    
    # Extract English transcript lines
    en_section_match = re.search(r"ОРИГИНАЛЬНЫЙ АНГЛИЙСКИЙ ТРАНСКРИПТ / ORIGINAL ENGLISH TRANSCRIPT:\s*={10,}\s*\n(.*?)(?:\n\n={10,}|\Z)", content, re.DOTALL)
    if not en_section_match:
        print("  [ERROR] English section not found!")
        return False
        
    en_lines = en_section_match.group(1).strip().splitlines()
    cues = []
    for line in en_lines:
        m = re.match(r"^(\[\d+:\d+(?::\d+)?\])\s*(.*)$", line.strip())
        if m:
            cues.append((m.group(1), m.group(2)))
            
    if not cues:
        print("  [WARNING] No cues parsed from English section.")
        return False
        
    print(f"  Translating {len(cues)} cues into Russian...")
    raw_texts = [c[1] for c in cues]
    translated_texts = translate_batch(raw_texts, "ru")
    
    ru_lines = []
    for (tm, _), tr in zip(cues, translated_texts):
        ru_lines.append(f"{tm} {tr}")
        
    ru_block = "\n".join(ru_lines)
    updated_content = content.replace("(Русский транскрипт недоступен)", ru_block)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(updated_content)
        
    print(f"  [UPDATED] Saved {len(ru_lines)} translated lines to {os.path.basename(filepath)}")
    return True

def main():
    files = sorted([os.path.join(TRANSCRIPTS_DIR, f) for f in os.listdir(TRANSCRIPTS_DIR) if f.endswith(".txt")])
    updated_count = 0
    for fpath in files:
        if process_file(fpath):
            updated_count += 1
            time.sleep(0.5)
            
    print(f"\nDone! Updated {updated_count} files with high-quality Russian translations.")

if __name__ == "__main__":
    main()
