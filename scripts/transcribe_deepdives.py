#!/usr/bin/env python3
"""
transcribe_deepdives.py
Transcribes all videos from the 20sec Deepdives playlist into clean text files.
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

PLAYLIST_URL = "https://youtube.com/playlist?list=PLENOi-mY4_wg&si=63VxCpx1qUddqUNg"
OUTPUT_DIR = "/home/fong/la/transcripts/20sec_deepdives"
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
        if end_ms - start_ms < 250:
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
        if len(joined) > 100 or joined.endswith((".", "!", "?", "...", ":")):
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
            with urllib.request.urlopen(req, timeout=15) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(1.5 * (attempt + 1))
        except Exception:
            time.sleep(1.5 * (attempt + 1))
    return None

def fetch_text(url):
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Referer": "https://youtube-transcript.ai/"
    })
    for attempt in range(2):
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                return resp.read().decode("utf-8")
        except Exception:
            time.sleep(1.5 * (attempt + 1))
    return None

def translate_single(text, target_lang="ru"):
    if not text.strip():
        return ""
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + target_lang + "&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return "".join(part[0] for part in data[0] if part[0]).strip()
    except Exception:
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
                with urllib.request.urlopen(req, timeout=12) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    full = "".join(part[0] for part in data[0] if part[0])
                    parts = [p.strip() for p in full.split("<<SPLIT>>")]
                    if len(parts) == len(chunk):
                        results.extend(parts)
                        success = True
                        break
            except Exception:
                time.sleep(0.5)
        if not success:
            for t in chunk:
                results.append(translate_single(t, target_lang))
                time.sleep(0.1)
        time.sleep(0.2)
    return results

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
    valid_entries = [e for e in entries if e.get("id") and e.get("title") and e.get("title") != "None"]
    print(f"Found {len(valid_entries)} valid videos in playlist (out of {len(entries)} entries).")
    return valid_entries, data.get("title") or "20sec Deepdives | Last Asylum"

def process_video(index, total, video_id, playlist_title, playlist_name):
    print(f"\n[{index}/{total}] Processing {video_id} ('{playlist_title}')...")
    
    sub_api_url = f"https://youtube-transcript.ai/api/subtitles?v={video_id}"
    data = fetch_json(sub_api_url)
    if not data:
        print(f"  [WARNING] Video metadata or subtitles not available (404/deleted): {video_id}")
        return None
        
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
        return None
        
    # 1. English
    en_sub = next((s for s in subtitles if s.get("langCode") in ("a-en", "en") or s.get("langName") == "en"), subtitles[0])
    en_vtt = en_sub.get("vttContent", "")
    en_cues = parse_vtt(en_vtt) if en_vtt else []
    en_consolidated = consolidate_cues(en_cues)
    
    # 2. Russian
    ru_sub = next((s for s in subtitles if s.get("langCode") == "ru" or s.get("langName") == "ru"), None)
    ru_consolidated = []
    
    if ru_sub and ru_sub.get("vttContent"):
        ru_cues = parse_vtt(ru_sub["vttContent"])
        ru_consolidated = consolidate_cues(ru_cues)
    elif en_sub.get("vttUrl"):
        # Try timedtext proxy translation
        try:
            trans_vtt_url = en_sub["vttUrl"] + "&tlang=ru"
            proxy_url = "https://youtube-transcript.ai/api/vtt?url=" + urllib.parse.quote(trans_vtt_url)
            ru_vtt = fetch_text(proxy_url)
            if ru_vtt:
                ru_cues = parse_vtt(ru_vtt)
                ru_consolidated = consolidate_cues(ru_cues)
        except Exception:
            pass
            
    # Fallback to Google Translate if ru_consolidated is empty
    if not ru_consolidated and en_consolidated:
        print(f"  Translating {len(en_consolidated)} lines to Russian via Google Translate...")
        en_texts = [text for _, text in en_consolidated]
        ru_texts = translate_batch(en_texts, "ru")
        ru_consolidated = [(tm, r_text) for (tm, _), r_text in zip(en_consolidated, ru_texts)]
        
    print(f"  => Title: {title}")
    print(f"  => Duration: {duration_str} ({duration_sec}s)")
    print(f"  => Transcripts: RU: {len(ru_consolidated)} blocks, EN: {len(en_consolidated)} blocks")
    
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
    lines.append(f"- Плейлист: {playlist_name} (#{index} из {total})")
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
    entries, playlist_name = get_playlist_entries()
    total = len(entries)
    
    results = []
    for i, entry in enumerate(entries, start=1):
        vid = entry.get("id")
        title = entry.get("title") or vid
        
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
            
        res = process_video(i, total, vid, title, playlist_name)
        if res:
            results.append(res)
        time.sleep(1.0)
        
    index_path = os.path.join(OUTPUT_DIR, "README.md")
    index_lines = [
        f"# Транскрипты серии видео: {playlist_name}",
        "",
        f"- **Плейлист:** [{PLAYLIST_URL}]({PLAYLIST_URL})",
        f"- **Всего доступных видео:** {len(results)} из {total}",
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
