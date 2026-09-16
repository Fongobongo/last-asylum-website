#!/usr/bin/env python3
"""
transcribe_playlist.py
Transcribes all videos from YouTube playlist into clean text files.
Includes Russian translation and original English transcript with timestamps.
"""

import os
import re
import sys
import time
import json
import urllib.request
import urllib.parse
import subprocess

PLAYLIST_URL = "https://youtube.com/playlist?list=PLbRVd1OtNdNI8QX0_ggHyxwK5GwFNOGvB"
OUTPUT_DIR = "/home/fong/la/transcripts"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"

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
    text = re.sub(r"&quot;", '"', text)
    text = re.sub(r"&#39;|&apos;", "'", text)
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
            # Deduplicate immediate rolling repeats
            prev_text = clean
            cues.append((format_time(start_ms), clean))
    return cues

def consolidate_cues(cues, min_gap_sec=2):
    """
    Consolidate short choppy cues into readable sentences/paragraphs
    while keeping the starting timestamp.
    """
    if not cues:
        return []
    
    consolidated = []
    current_time, current_parts = cues[0][0], [cues[0][1]]
    
    for tm, text in cues[1:]:
        # If current text ends with punctuation or is getting reasonably long, break
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

def fetch_json(url):
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Referer": "https://youtube-transcript.ai/"
    })
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))

def fetch_text(url):
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Referer": "https://youtube-transcript.ai/"
    })
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                return resp.read().decode("utf-8")
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))

def sanitize_filename(name):
    clean = re.sub(r'[\\/*?:"<>|#]+', "", name)
    clean = re.sub(r'\s+', "_", clean)
    clean = re.sub(r'_+', "_", clean)
    return clean[:60].strip("_")

def get_playlist_entries():
    print(f"Fetching playlist entries from: {PLAYLIST_URL}...")
    cmd = ["yt-dlp", "--flat-playlist", "-J", PLAYLIST_URL]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        raise RuntimeError(f"Failed to fetch playlist: {res.stderr}")
    data = json.loads(res.stdout)
    entries = data.get("entries", [])
    print(f"Found {len(entries)} videos in playlist.")
    return entries

def process_video(index, total, video_id, playlist_title):
    print(f"\n[{index}/{total}] Fetching metadata & subtitles for {video_id} ('{playlist_title}')...")
    
    sub_api_url = f"https://youtube-transcript.ai/api/subtitles?v={video_id}"
    try:
        data = fetch_json(sub_api_url)
    except Exception as e:
        print(f"  [ERROR] Failed to fetch subtitles metadata: {e}")
        return False
        
    title = data.get("videoTitle") or playlist_title
    author = data.get("author") or "Korpez Gaming"
    duration_sec = data.get("durationSec") or 0
    duration_str = format_time(duration_sec * 1000)
    publish_date = data.get("publishDate") or "N/A"
    view_count = data.get("viewCount") or "N/A"
    description = (data.get("description") or "").strip()
    
    subtitles = data.get("subtitles", [])
    if not subtitles:
        print(f"  [WARNING] No subtitles found for {video_id}")
        return False
        
    # 1. English subtitles
    en_sub = next((s for s in subtitles if s.get("langCode") in ("a-en", "en") or s.get("langName") == "en"), subtitles[0])
    en_vtt = en_sub.get("vttContent", "")
    en_cues = parse_vtt(en_vtt) if en_vtt else []
    
    # 2. Russian subtitles (native or translated)
    ru_sub = next((s for s in subtitles if s.get("langCode") == "ru" or s.get("langName") == "ru"), None)
    ru_cues = []
    if ru_sub and ru_sub.get("vttContent"):
        ru_cues = parse_vtt(ru_sub["vttContent"])
    elif en_sub.get("vttUrl"):
        # Fetch Russian translated via timedtext proxy
        try:
            trans_vtt_url = en_sub["vttUrl"] + "&tlang=ru"
            proxy_url = "https://youtube-transcript.ai/api/vtt?url=" + urllib.parse.quote(trans_vtt_url)
            ru_vtt = fetch_text(proxy_url)
            ru_cues = parse_vtt(ru_vtt)
        except Exception as e:
            print(f"  [WARNING] Failed to fetch Russian translation: {e}")
            
    # Format cues nicely
    ru_consolidated = consolidate_cues(ru_cues)
    en_consolidated = consolidate_cues(en_cues)
    
    print(f"  => Title: {title}")
    print(f"  => Duration: {duration_str} ({duration_sec}s)")
    print(f"  => Transcripts: RU: {len(ru_consolidated)} blocks, EN: {len(en_consolidated)} blocks")
    
    # Build text file content
    safe_title = sanitize_filename(title)
    filename = f"{index:02d}_{video_id}_{safe_title}.txt"
    filepath = os.path.join(OUTPUT_DIR, filename)
    
    lines = []
    lines.append("=" * 80)
    lines.append(f"# {title}")
    lines.append("=" * 80)
    lines.append(f"- Название / Title: {title}")
    lines.append(f"- Ссылка / URL: https://www.youtube.com/watch?v={video_id}")
    lines.append(f"- ID видео: {video_id}")
    lines.append(f"- Автор / Channel: {author}")
    lines.append(f"- Длительность / Duration: {duration_str} ({duration_sec} сек)")
    lines.append(f"- Дата публикации / Published: {publish_date}")
    lines.append(f"- Просмотров / Views: {view_count}")
    lines.append(f"- Плейлист: Korpez Gaming - Last Asylum Guide Series (#{index} из {total})")
    lines.append("")
    lines.append("-" * 80)
    lines.append("ОПИСАНИЕ ВИДЕО / DESCRIPTION:")
    lines.append("-" * 80)
    lines.append(description if description else "(Нет описания)")
    lines.append("")
    lines.append("=" * 80)
    lines.append("РУССКИЙ ТРАНСКРИПТ / RUSSIAN TRANSCRIPT:")
    lines.append("=" * 80)
    if ru_consolidated:
        for tm, text in ru_consolidated:
            lines.append(f"[{tm}] {text}")
    else:
        lines.append("(Русский транскрипт недоступен)")
    lines.append("")
    lines.append("=" * 80)
    lines.append("ОРИГИНАЛЬНЫЙ АНГЛИЙСКИЙ ТРАНСКРИПТ / ORIGINAL ENGLISH TRANSCRIPT:")
    lines.append("=" * 80)
    if en_consolidated:
        for tm, text in en_consolidated:
            lines.append(f"[{tm}] {text}")
    else:
        lines.append("(English transcript not available)")
    lines.append("")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
        
    print(f"  [SAVED] {filepath}")
    return {
        "index": index,
        "id": video_id,
        "title": title,
        "duration": duration_str,
        "duration_sec": duration_sec,
        "filename": filename,
        "url": f"https://www.youtube.com/watch?v={video_id}",
        "ru_lines": len(ru_consolidated),
        "en_lines": len(en_consolidated)
    }

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    entries = get_playlist_entries()
    total = len(entries)
    
    results = []
    for i, entry in enumerate(entries, start=1):
        vid = entry.get("id")
        title = entry.get("title") or vid
        
        # Check if file already exists
        safe_title = sanitize_filename(title)
        expected_filename = f"{i:02d}_{vid}_{safe_title}.txt"
        expected_path = os.path.join(OUTPUT_DIR, expected_filename)
        
        # If we have any existing file starting with f"{i:02d}_{vid}_", check size
        existing = [f for f in os.listdir(OUTPUT_DIR) if f.startswith(f"{i:02d}_{vid}_")]
        if existing and os.path.getsize(os.path.join(OUTPUT_DIR, existing[0])) > 500:
            print(f"\n[{i}/{total}] Skipping already completed {vid}: {existing[0]}")
            results.append({
                "index": i,
                "id": vid,
                "title": title,
                "duration": "N/A",
                "filename": existing[0],
                "url": f"https://www.youtube.com/watch?v={vid}",
            })
            continue
            
        res = process_video(i, total, vid, title)
        if res:
            results.append(res)
        time.sleep(1.2) # Polite delay
        
    # Generate INDEX.md
    index_path = os.path.join(OUTPUT_DIR, "README.md")
    index_lines = [
        "# Транскрипты всех видео по игре Last Asylum (Korpez Gaming)",
        "",
        f"- **Плейлист:** [{PLAYLIST_URL}]({PLAYLIST_URL})",
        f"- **Всего видео обработано:** {len(results)} из {total}",
        "",
        "В каждом файле содержится подробное описание, таймкоды, **русский перевод транскрипта** и **оригинальный английский текст**.",
        "",
        "| № | Название видео | Длительность | Ссылка на YouTube | Текстовый файл |",
        "|---|---|---|---|---|",
    ]
    for r in results:
        index_lines.append(f"| {r['index']:02d} | {r['title']} | {r.get('duration', 'N/A')} | [YouTube]({r['url']}) | [{r['filename']}](./{r['filename']}) |")
        
    with open(index_path, "w", encoding="utf-8") as f:
        f.write("\n".join(index_lines))
        
    print(f"\n" + "=" * 80)
    print(f"ВСЕ ГОТОВО! Обработано {len(results)} из {total} видео.")
    print(f"Файлы сохранены в: {OUTPUT_DIR}")
    print(f"Индексный файл: {index_path}")
    print("=" * 80)

if __name__ == "__main__":
    main()
