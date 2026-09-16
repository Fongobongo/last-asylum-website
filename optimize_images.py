"""Convert infographics to WebP + resize; rewrite Infographic component srcs."""

import os
import glob
from PIL import Image

DIR = "/home/fong/la/site/public/infographics"
MAX_W = 1400  # infographics are read zoomed; keep readable

total_before = 0
total_after = 0
converted = []

for fname in sorted(os.listdir(DIR)):
    if not fname.lower().endswith((".png", ".jpg", ".jpeg")):
        continue
    path = os.path.join(DIR, fname)
    before = os.path.getsize(path)

    img = Image.open(path)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    if img.width > MAX_W:
        ratio = MAX_W / img.width
        img = img.resize((MAX_W, round(img.height * ratio)), Image.LANCZOS)

    out_base = os.path.splitext(fname)[0]
    out_path = os.path.join(DIR, out_base + ".webp")
    img.save(out_path, "WEBP", quality=82, method=6)

    after = os.path.getsize(out_path)
    if after < before:
        os.remove(path)
        converted.append((fname, out_base + ".webp", before, after))
        total_before += before
        total_after += after
    else:
        # keep original if webp is bigger (rare)
        os.remove(out_path)
        total_before += before
        total_after += before

for orig, webp, b, a in converted:
    print(f"{orig} -> {webp}: {b//1024}KB -> {a//1024}KB (-{100 - a*100//b}%)")
print(f"\nTOTAL: {total_before//1024}KB -> {total_after//1024}KB (-{100 - total_after*100//total_before}%)")

# Update markdown references in site/content/guides/ru/
md_files = glob.glob("/home/fong/la/site/content/guides/ru/**/*.md", recursive=True)
for md_file in md_files:
    with open(md_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    changed = False
    for orig, webp, _, _ in converted:
        if orig in content:
            content = content.replace(orig, webp)
            changed = True
            print(f"Updated reference {orig} -> {webp} in {md_file}")
            
    if changed:
        with open(md_file, "w", encoding="utf-8") as f:
            f.write(content)