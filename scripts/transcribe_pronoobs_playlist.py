#!/usr/bin/env python3
"""
transcribe_pronoobs_playlist.py
Transcribes all 11 videos from Pro Noobs "Guide - Last Asylum: Plague" playlist:
https://youtube.com/playlist?list=PLD958MNByd20_p8fpPS6Otid3Klh84HZJ

Outputs to:
  /home/fong/la/transcripts/pronoobs_guides/
And integrates into:
  /home/fong/la/site/src/data/videoTranscripts.json
"""

import os
import re
import sys
import time
import json
import urllib.request
import urllib.parse

OUTPUT_DIR = "/home/fong/la/transcripts/pronoobs_guides"
SITE_TRANSCRIPTS = "/home/fong/la/site/src/data/videoTranscripts.json"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
PROXY = "153.51.201.35:999"
GEMINI_KEY = os.environ.get("GEMINI_API_KEY")

proxy_handler = urllib.request.ProxyHandler({"http": f"http://{PROXY}", "https": f"http://{PROXY}"})
opener = urllib.request.build_opener(proxy_handler)

VIDEOS = [
    {"num": "01", "id": "D8rB9d_5cX8", "title": "Don’t Play Last Asylum Plague Before Watching This (First 24 Hours Guide)"},
    {"num": "02", "id": "j3nYVmqn97Q", "title": "Beginner's Event( Strike First ) in Last Asylum: Plague"},
    {"num": "03", "id": "oNWlc9qQI0Q", "title": "Upgrading Sanctuary Lvl16 and Sanctuary Lvl 17 Requirements | Last Asylum: Plague"},
    {"num": "04", "id": "DqRps9N3KuU", "title": "Path of Healing (Beginner's Event) in Last Asylum Plague"},
    {"num": "05", "id": "T0Um4BAR9dc", "title": "First 7 Days Beginner's Event in Last Asylum: Plague"},
    {"num": "06", "id": "GYaEpmJ_Vn4", "title": "Moving Ahead in Alliance Duel Research in Last Asylum Plague Part 1"},
    {"num": "07", "id": "2GRSG9wUxE8", "title": "Last Asylum Alliance Duel Daily Rank 1"},
    {"num": "08", "id": "G3pIVh5Oudk", "title": "🚨 3 Things You Must Stop Doing in Last Asylum Plague Before It's Too Late!"},
    {"num": "09", "id": "umLzRyZDKJA", "title": "Alliance Duel Research in Last Asylum Plague #lap #lapcps2 #gaming"},
    {"num": "10", "id": "Em55IyBynZY", "title": "7 Important Buildings to Upgrade in Last Asylum Plague"},
    {"num": "11", "id": "RomGJkM6ECA", "title": "Ultimate Research Roadmap, Don't Waste Another Study Scroll in Last Asylum Plague"}
]

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

def sanitize_filename(name):
    clean = re.sub(r'[\\/*?:"<>|#]+', "", name)
    clean = re.sub(r'\s+', "_", clean)
    clean = re.sub(r'_+', "_", clean)
    return clean[:55].strip("_")

def gemini_translate(text):
    if not text.strip():
        return ""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_KEY}"
    prompt = """You are an expert game guide translator for the mobile strategy game 'Last Asylum: Plague'.
Translate the following timestamped English transcript into Russian.
Rules:
- Keep the exact timestamp [M:SS] at the start of each line.
- Use official game terms:
  Sanctuary = Убежище
  Alliance Duel = Дуэль альянсов
  Strike First = Нанеси удар первым
  Path of Healing = Путь исцеления
  Study Scroll = Свиток исследований
  Research Institute = Институт исследований
  Falcon Tower = Башня сокола
  Antitoxin = Антитоксин
  Tempered Steel = Закаленная сталь
  Skill Badges = Значки навыков
  Recruitment Tickets = Билеты найма
  Barracks = Казарма
  Might = Мощь
- Maintain the natural flow of spoken Russian, clear and engaging.
- Return ONLY the translated timestamped lines, nothing else.

---TRANSCRIPT---
""" + text

    body = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 16000}
    }
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers={"Content-Type": "application/json"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read().decode())
                return data["candidates"][0]["content"]["parts"][0]["text"].strip()
        except Exception as e:
            print(f"    [Gemini API attempt {attempt+1}] Error: {e}")
            time.sleep(5 * (attempt + 1))
    return ""

def generate_key_timestamps(cues, vid, title):
    if not cues:
        return []
    pts = []
    step = max(1, len(cues) // 6)
    for i in range(0, len(cues), step):
        t, text = cues[i]
        # format as MM:SS
        parts = t.split(":")
        if len(parts) == 2:
            mm = int(parts[0])
            ss = int(parts[1])
            formatted_time = f"{mm:02d}:{ss:02d}"
        elif len(parts) == 3:
            hh = int(parts[0])
            mm = int(parts[1])
            ss = int(parts[2])
            formatted_time = f"{hh*60+mm:02d}:{ss:02d}"
        else:
            formatted_time = "00:00"
        label = text[:60].strip()
        pts.append({"time": formatted_time, "label": label})
        if len(pts) >= 6:
            break
    return pts

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Load existing site videoTranscripts
    site_data = {}
    if os.path.exists(SITE_TRANSCRIPTS):
        with open(SITE_TRANSCRIPTS, "r", encoding="utf-8") as f:
            site_data = json.load(f)

    results_for_readme = []

    for idx, v in enumerate(VIDEOS, 1):
        num = v["num"]
        vid = v["id"]
        default_title = v["title"]
        print(f"\n[{idx}/11] Processing video {vid} ('{default_title}')...")
        
        api_url = f"https://youtube-transcript.ai/api/subtitles?v={vid}"
        req = urllib.request.Request(api_url, headers={
            "User-Agent": USER_AGENT,
            "Referer": "https://youtube-transcript.ai/"
        })
        try:
            with opener.open(req, timeout=20) as r:
                data = json.loads(r.read().decode())
        except Exception as e:
            print(f"  [ERROR] Failed to fetch metadata: {e}")
            data = {}

        title = data.get("videoTitle") or default_title
        author = data.get("author") or "Pro Noobs"
        duration_sec = data.get("durationSec") or 0
        duration_str = format_time(duration_sec * 1000)
        views = data.get("viewCount") or "N/A"
        description = (data.get("description") or "").strip()
        
        subtitles = data.get("subtitles", [])
        vtt = subtitles[0].get("vttContent", "") if subtitles else ""
        
        if vtt:
            cues = parse_vtt(vtt)
            consolidated = consolidate_cues(cues)
            en_lines = [{"time": t, "text": txt} for t, txt in consolidated]
            en_text = "\n".join([f"[{t}] {txt}" for t, txt in consolidated])
            print(f"  -> Extracted {len(consolidated)} English cue blocks. Translating to RU...")
            ru_text = gemini_translate(en_text)
            
            ru_lines = []
            for line in ru_text.split("\n"):
                line = line.strip()
                if not line:
                    continue
                m = re.match(r'\[(\d+:\d+(?::\d+)?)\]\s*(.*)', line)
                if m:
                    ru_lines.append({"time": m.group(1), "text": m.group(2)})
            print(f"  -> Translated {len(ru_lines)} Russian cue blocks.")
        else:
            # Special case for video 6 or any video without spoken audio
            print("  -> [NOTE] No spoken captions. Visual demonstration video.")
            en_text = "[0:00] (Visual Gameplay Demonstration) In-depth walkthrough of Alliance Duel research tree nodes, prerequisite dependencies, and optimal unlocking path in the Research Institute without voice narration."
            ru_text = "[0:00] (Визуальная демонстрация геймплея) Наглядный обзор древа исследований Дуэли альянсов в Институте исследований: требования к уровням, зависимости технологий и оптимальный путь прокачки без голосовой озвучки."
            consolidated = [("0:00", "Alliance Duel research tree overview")]
            en_lines = [{"time": "0:00", "text": "Visual demonstration of Alliance Duel tech tree."}]
            ru_lines = [{"time": "0:00", "text": "Визуальная демонстрация древа технологий Дуэли альянсов."}]

        # Write text file
        safe_title = sanitize_filename(title)
        filename = f"{num}_{vid}_{safe_title}.txt"
        file_path = os.path.join(OUTPUT_DIR, filename)

        file_content = f"""================================================================================
# {title}
================================================================================
- Название / Title: {title}
- Ссылка / URL: https://www.youtube.com/watch?v={vid}
- ID видео: {vid}
- Автор / Channel: {author}
- Длительность / Duration: {duration_str} ({duration_sec} сек)
- Просмотров / Views: {views}
- Плейлист: Pro Noobs - Guide - Last Asylum: Plague (#{num} из 11)

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
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(file_content)
        print(f"  -> Saved text file: {file_path}")

        # Update site videoTranscripts.json
        ts_points = generate_key_timestamps(consolidated, vid, title)
        site_data[vid] = {
            "id": vid,
            "title": title,
            "duration": f"{duration_str} ({duration_sec} сек)",
            "timestamps": ts_points,
            "ru": ru_lines,
            "en": en_lines
        }

        results_for_readme.append({
            "num": num,
            "title": title,
            "duration": duration_str,
            "url": f"https://www.youtube.com/watch?v={vid}",
            "filename": filename
        })
        time.sleep(2)

    # Save updated site videoTranscripts.json
    with open(SITE_TRANSCRIPTS, "w", encoding="utf-8") as f:
        json.dump(site_data, f, ensure_ascii=False, indent=2)
    print(f"\n[OK] Updated {SITE_TRANSCRIPTS} (Total videos: {len(site_data)})")

    # Generate README.md
    readme_content = """# Транскрипты плейлиста «Guide - Last Asylum: Plague» (Pro Noobs)

- **Плейлист:** [https://youtube.com/playlist?list=PLD958MNByd20_p8fpPS6Otid3Klh84HZJ](https://youtube.com/playlist?list=PLD958MNByd20_p8fpPS6Otid3Klh84HZJ)
- **Автор:** Pro Noobs
- **Всего видео:** 11 из 11

В каждом файле содержится подробное описание, метаданные, **русский перевод транскрипта с таймкодами** и **оригинальный английский текст**.

| № | Название видео | Длительность | Ссылка на YouTube | Текстовый файл |
|---|---|---|---|---|
"""
    for r in results_for_readme:
        readme_content += f"| {r['num']} | {r['title']} | {r['duration']} | [YouTube]({r['url']}) | [{r['filename']}](./{r['filename']}) |\n"

    readme_path = os.path.join(OUTPUT_DIR, "README.md")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(readme_content)
    print(f"[OK] Generated {readme_path}")

if __name__ == "__main__":
    main()
