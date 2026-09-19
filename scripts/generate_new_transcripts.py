#!/usr/bin/env python3
"""
generate_new_transcripts.py
Fetches and generates transcripts for:
1. 5sn95_i8fUo (JokerKipish Survival - Событие Лучший Целитель Стань топом 💪 вместе со мной и ПОДПИШИСЬ 🔥)
2. 2u8ok-VKz_c (Pro Noobs - Top Healer - 7 Day Event in Last Asylum Plague)

Creates formatted transcript files with metadata, description, Russian & English text with timestamps.
"""

import os
import re
import json
import time
import urllib.request

PROXY = "153.51.201.35:999"
GEMINI_KEY = os.environ.get("GEMINI_API_KEY")
OUTPUT_DIR = "/home/fong/la/transcripts"

proxy_handler = urllib.request.ProxyHandler({"http": f"http://{PROXY}", "https": f"http://{PROXY}"})
opener = urllib.request.build_opener(proxy_handler)

def parse_time_ms(time_str):
    parts = time_str.strip().split(" ")[0].split(":")
    if len(parts) == 3:
        h = int(parts[0])
        m = int(parts[1])
        s = float(parts[2])
    else:
        h = 0
        m = int(parts[0])
        s = float(parts[1])
    return int((h * 3600 + m * 60 + s) * 1000)

def format_time(ms):
    total_sec = int(ms // 1000)
    h = total_sec // 3600
    m = (total_sec % 3600) // 60
    s = total_sec % 60
    if h > 0:
        return f"{h}:{m:02d}:{s:02d}"
    return f"{m}:{s:02d}"

def clean_cue_text(raw_text):
    text = re.sub(r"<[^>]+>", "", raw_text)
    text = re.sub(r"(?:&gt;\s*){2,}|>{2,}\s*", "", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"&quot;", "\"", text)
    text = re.sub(r"&#39;|&apos;", "\x27", text)
    text = re.sub(r"&lt;", "<", text)
    text = re.sub(r"&gt;", ">", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

def parse_vtt(vtt_text):
    cues = []
    blocks = re.split(r"\n\n+", vtt_text.strip())
    prev_text = ""
    for block in blocks:
        lines = block.strip().split("\n")
        arrow_line = next((l for l in lines if "-->" in l), None)
        if not arrow_line:
            continue
        start_str, end_str = arrow_line.split("-->")
        start_ms = parse_time_ms(start_str)
        end_ms = parse_time_ms(end_str)
        if end_ms - start_ms < 300:
            continue
        content_lines = lines[lines.index(arrow_line) + 1:]
        line_with_tag = next((l for l in content_lines if "<" in l), None)
        raw_text = line_with_tag if line_with_tag else " ".join(content_lines)
        clean = clean_cue_text(raw_text)
        if clean and clean != prev_text:
            prev_text = clean
            cues.append((format_time(start_ms), clean))
    return cues

def consolidate_cues(cues):
    if not cues:
        return []
    consolidated = []
    current_time, current_parts = cues[0][0], [cues[0][1]]
    for tm, text in cues[1:]:
        joined = " ".join(current_parts)
        if len(joined) > 120 or joined.endswith((".", "!", "?", "...", ":")):
            consolidated.append((current_time, joined))
            current_time = tm
            current_parts = [text]
        else:
            current_parts.append(text)
    if current_parts:
        consolidated.append((current_time, " ".join(current_parts)))
    return consolidated

def gemini_translate(text, target_lang, source_lang):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_KEY}"
    prompt = f"""You are an expert gaming translator for the mobile strategy game 'Last Asylum: Plague'.
Translate the following timestamped transcript from {source_lang} to {target_lang}.
Keep exact [M:SS] timestamps at the start of each line.
Preserve game terms accurately (e.g. Supreme Healer / Top Healer / Лучший Целитель, Falcon Tower / Башня Сокола, Sanctuary / Убежище, Antitoxin / Антитоксин, Skill Badges / Значки навыков, Recruitment Tickets / Билеты найма, Caravan / Торговый караван, Covert Operation / Тайная операция).
Do not summarize. Return ONLY the translated timestamped lines.

---TRANSCRIPT---
{text}
"""
    body = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 16000}
    }
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers={"Content-Type": "application/json"})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read().decode())
                return data["candidates"][0]["content"]["parts"][0]["text"].strip()
        except Exception as e:
            print(f"Gemini API attempt {attempt+1} failed: {e}")
            time.sleep(5)
    raise RuntimeError("Failed to translate with Gemini API")

def fetch_video_data(video_id):
    url = f"https://youtube-transcript.ai/api/subtitles?v={video_id}"
    req = urllib.request.Request(url, headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": "https://youtube-transcript.ai/"
    })
    with opener.open(req, timeout=20) as r:
        return json.loads(r.read().decode())

def main():
    videos = [
        {
            "id": "5sn95_i8fUo",
            "num": "42",
            "filename": "42_5sn95_i8fUo_Событие_Лучший_Целитель_Стань_топом_💪_вместе_со_мной_ПОДПИШИСЬ_🔥.txt",
            "orig_lang": "ru"
        },
        {
            "id": "2u8ok-VKz_c",
            "num": "43",
            "filename": "43_2u8ok-VKz_c_Top_Healer_-_7_Day_Event_in_Last_Asylum_Plague.txt",
            "orig_lang": "en"
        }
    ]

    for item in videos:
        vid = item["id"]
        print(f"\nProcessing {vid}...")
        data = fetch_video_data(vid)
        title = data.get("videoTitle", "")
        author = data.get("author", "")
        duration_sec = data.get("durationSec", 0)
        duration_str = format_time(duration_sec * 1000)
        views = data.get("viewCount", "N/A")
        description = data.get("description", "").strip()
        vtt = data["subtitles"][0]["vttContent"]
        
        cues = parse_vtt(vtt)
        consolidated = consolidate_cues(cues)
        orig_text = "\n".join([f"[{t}] {txt}" for t, txt in consolidated])
        
        print(f"Title: {title}")
        print(f"Author: {author}")
        print(f"Duration: {duration_str}")
        print(f"Lines: {len(consolidated)}")
        
        if item["orig_lang"] == "ru":
            ru_text = orig_text
            print("Translating RU -> EN...")
            en_text = gemini_translate(ru_text, "English", "Russian")
        else:
            en_text = orig_text
            print("Translating EN -> RU...")
            ru_text = gemini_translate(en_text, "Russian", "English")
            
        file_content = f"""================================================================================
# {title}
================================================================================
- Название / Title: {title}
- Ссылка / URL: https://www.youtube.com/watch?v={vid}
- ID видео: {vid}
- Автор / Channel: {author}
- Длительность / Duration: {duration_str} ({duration_sec} сек)
- Дата публикации / Published: N/A
- Просмотров / Views: {views}

--------------------------------------------------------------------------------
ОПИСАНИЕ ВИДЕО / DESCRIPTION:
--------------------------------------------------------------------------------
{description if description else 'N/A'}

================================================================================
РУССКИЙ ТРАНСКРИПТ / RUSSIAN TRANSCRIPT:
================================================================================
{ru_text}

================================================================================
ОРИГИНАЛЬНЫЙ АНГЛИЙСКИЙ ТРАНСКРИПТ / ORIGINAL ENGLISH TRANSCRIPT:
================================================================================
{en_text}
"""
        out_path = os.path.join(OUTPUT_DIR, item["filename"])
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(file_content)
        print(f"Saved: {out_path}")

if __name__ == "__main__":
    main()
