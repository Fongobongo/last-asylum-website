"""Convert infographics to WebP + resize; rewrite Infographic component srcs."""

import os
from PIL import Image

DIR = "D:/PythonProjects/LA_site/site/public/infographics"
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