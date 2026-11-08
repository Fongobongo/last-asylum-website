"""
Export the small resource / activity icons drawn inside each city territory.

The sprites come from the game client itself (com.phs.global 1.0.102), already
extracted from the Unity asset bundles. Keeping them as real game art means a
grain city shows the same wheat the player sees in-game instead of an OS-
dependent emoji.

  grain    icon_food_1.png             wheat
  timber   icon_wood_1.png             log
  herb     icon_yaobao.png             herb pouch
  training Icon_Science_soldier_1.png  helmet + book + up arrow
  research City_Btn_Research_menu.png  laboratory flask
  building Icon_Science_develop_1.png  construction axe

Each sprite is cropped to its alpha bounds, padded to a square, downscaled to
64 px and written to site/public/city-map/<key>.png. The site references them
by absolute URL, so they work from every /{lang}/city-map/ page.

Usage:
  python scripts/build_city_map_icons.py
  python scripts/build_city_map_icons.py --sprites D:/path/to/extracted/images/Sprite
"""

import argparse
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_SPRITES = r"D:\PythonProjects\LastAsylum\la\extracted\images\Sprite"
OUT_DIR = os.path.join(ROOT, "site", "public", "city-map")

SPRITES = {
    "grain": "icon_food_1.png",
    "timber": "icon_wood_1.png",
    "herb": "icon_yaobao.png",
    "training": "Icon_Science_soldier_1.png",
    "research": "City_Btn_Research_menu.png",
    "building": "Icon_Science_develop_1.png",
}

SIZE = 64
PAD = 2


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sprites", default=DEFAULT_SPRITES)
    args = ap.parse_args()

    missing = [v for v in SPRITES.values() if not os.path.isfile(os.path.join(args.sprites, v))]
    if missing:
        raise SystemExit(
            "missing sprites in %s: %s\nPass --sprites <extracted/images/Sprite>"
            % (args.sprites, ", ".join(missing))
        )

    os.makedirs(OUT_DIR, exist_ok=True)
    for key, name in SPRITES.items():
        im = Image.open(os.path.join(args.sprites, name)).convert("RGBA")
        box = im.getchannel("A").getbbox()
        if not box:
            raise SystemExit("sprite %s is fully transparent" % name)
        im = im.crop(box)
        side = max(im.size)
        canvas = Image.new("RGBA", (side + PAD * 2, side + PAD * 2), (0, 0, 0, 0))
        canvas.alpha_composite(im, ((canvas.width - im.width) // 2, (canvas.height - im.height) // 2))
        canvas = canvas.resize((SIZE, SIZE), Image.LANCZOS)
        path = os.path.join(OUT_DIR, key + ".png")
        canvas.save(path, optimize=True)
        print("%-9s %-32s -> %s (%d bytes)" % (key, name, os.path.relpath(path, ROOT), os.path.getsize(path)))


if __name__ == "__main__":
    main()
