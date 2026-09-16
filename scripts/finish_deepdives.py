#!/usr/bin/env python3
"""
finish_deepdives.py
Completes videos 19, 20, 21 for 20sec Deepdives playlist and updates README.md.
"""

import os
import re
import time
import json
import urllib.request
import urllib.parse

OUTPUT_DIR = "/home/fong/la/transcripts/20sec_deepdives"
PROXY = "153.51.201.35:999"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"

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
        try:
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                full = "".join(part[0] for part in data[0] if part[0])
                parts = [p.strip() for p in full.split("<<SPLIT>>")]
                if len(parts) == len(chunk):
                    results.extend(parts)
                    continue
        except Exception:
            pass
        for t in chunk:
            results.append(translate_single(t, target_lang))
            time.sleep(0.1)
    return results

def sanitize_filename(name):
    clean = re.sub(r'[\\/*?:"<>|#]+', "", name)
    clean = re.sub(r'\s+', "_", clean)
    clean = re.sub(r'_+', "_", clean)
    return clean[:60].strip("_")

def process_vid(index, total, video_id, fallback_title):
    print(f"\nProcessing [{index}/{total}] {video_id}...")
    url = f"https://youtube-transcript.ai/api/subtitles?v={video_id}"
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Referer": "https://youtube-transcript.ai/"
    })
    
    data = None
    for p in [PROXY, None]:
        try:
            if p:
                ph = urllib.request.ProxyHandler({"http": f"http://{p}", "https": f"http://{p}"})
                op = urllib.request.build_opener(ph)
                with op.open(req, timeout=8) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
            else:
                with urllib.request.urlopen(req, timeout=8) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
            if data and "videoTitle" in data:
                break
        except Exception:
            continue
            
    if not data:
        print(f"Failed to fetch metadata for {video_id}")
        return None
        
    title = data.get("videoTitle") or fallback_title
    author = data.get("author") or "Korpez Gaming"
    duration_sec = data.get("durationSec") or 0
    duration_str = format_time(duration_sec * 1000)
    publish_date = data.get("publishDate") or "N/A"
    view_count = data.get("viewCount") or "N/A"
    description = (data.get("description") or "").strip()
    
    subtitles = data.get("subtitles", [])
    if not subtitles:
        print(f"No subtitles for {video_id}")
        return None
        
    en_sub = subtitles[0]
    en_vtt = en_sub.get("vttContent", "")
    en_cues = parse_vtt(en_vtt) if en_vtt else []
    en_consolidated = consolidate_cues(en_cues)
    
    ru_sub = next((s for s in subtitles if s.get("langCode") == "ru"), None)
    ru_consolidated = []
    if ru_sub and ru_sub.get("vttContent"):
        ru_cues = parse_vtt(ru_sub["vttContent"])
        ru_consolidated = consolidate_cues(ru_cues)
    else:
        en_texts = [text for _, text in en_consolidated]
        ru_texts = translate_batch(en_texts, "ru")
        ru_consolidated = [(tm, r_text) for (tm, _), r_text in zip(en_consolidated, ru_texts)]
        
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
    lines.append(f"- Плейлист: 20sec Deepdives | Last Asylum (#{index} из {total})")
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
        
    print(f"Saved: {filename}")
    return {
        "index": index,
        "id": video_id,
        "title": title,
        "duration": duration_str,
        "filename": filename,
        "url": f"https://www.youtube.com/watch?v={video_id}"
    }

# Process 19 and 20
process_vid(19, 21, "z4T0onI9t84", "NICOLE 20-SECOND DEEP DIVE! 🔥 | Last Asylum")
process_vid(20, 21, "F4COEVQ8z7w", "How to Delete Backlines with Joker! 🔪")

# For 21: copy existing transcript from previous playlist
src_21 = "/home/fong/la/transcripts/29_E0xH-Hswad8_Shadow_is_READY_for_Summer_Vacation!_🦩👙_lapcps2_lastasylum_l.txt"
dst_21 = os.path.join(OUTPUT_DIR, "21_E0xH-Hswad8_Shadow_is_READY_for_Summer_Vacation!_🦩👙_lapcps2_lastasylum_l.txt")
if os.path.exists(src_21):
    with open(src_21, "r", encoding="utf-8") as sf:
        c = sf.read()
    c = re.sub(r"Плейлист:.*", "Плейлист: 20sec Deepdives | Last Asylum (#21 из 21)", c)
    with open(dst_21, "w", encoding="utf-8") as df:
        df.write(c)
    print("Saved 21 from existing file.")

# Now rebuild README.md in 20sec_deepdives
all_files = sorted([f for f in os.listdir(OUTPUT_DIR) if f.endswith(".txt")])
entries = []
for f in all_files:
    m = re.match(r"^(\d+)_([a-zA-Z0-9_-]+)_(.*)\.txt$", f)
    if m:
        idx = int(m.group(1))
        vid = m.group(2)
        # read title and duration from file
        with open(os.path.join(OUTPUT_DIR, f), "r", encoding="utf-8") as fl:
            first_lines = [fl.readline() for _ in range(12)]
        t_line = next((l for l in first_lines if l.startswith("- Название / Title: ")), None)
        d_line = next((l for l in first_lines if l.startswith("- Длительность / Duration: ")), None)
        title = t_line.replace("- Название / Title: ", "").strip() if t_line else m.group(3)
        dur = d_line.replace("- Длительность / Duration: ", "").split("(")[0].strip() if d_line else "N/A"
        entries.append({
            "index": idx,
            "id": vid,
            "title": title,
            "duration": dur,
            "url": f"https://www.youtube.com/watch?v={vid}",
            "filename": f
        })

entries.sort(key=lambda x: x["index"])

readme_lines = [
    "# Транскрипты серии видео: 20sec Deepdives | Last Asylum (Korpez Gaming)",
    "",
    "- **Плейлист:** [https://youtube.com/playlist?list=PLENOi-mY4_wg&si=63VxCpx1qUddqUNg](https://youtube.com/playlist?list=PLENOi-mY4_wg&si=63VxCpx1qUddqUNg)",
    f"- **Всего видео обработано:** {len(entries)} из 21",
    "",
    "В каждом файле содержится подробное описание, таймкоды, **русский перевод транскрипта** и **оригинальный английский текст**.",
    "",
    "| № | Название видео | Длительность | Ссылка на YouTube | Текстовый файл |",
    "|---|---|---|---|---|",
]
for r in entries:
    readme_lines.append(f"| {r['index']:02d} | {r['title']} | {r['duration']} | [YouTube]({r['url']}) | [{r['filename']}](./{r['filename']}) |")

with open(os.path.join(OUTPUT_DIR, "README.md"), "w", encoding="utf-8") as rf:
    rf.write("\n".join(readme_lines))

print(f"All done! Total files in 20sec_deepdives: {len(entries)}")
