"""
Merge the per-language city names from the game client into game_city_data.json.

The client ships one `MechCity.lua` name table per installed language pack
(`langs/<code>/MechCity.lua`). Each entry looks like

    ["1001"] = { ["id"] = 1001, ["name"] = "Old Oak Lv.1" },

where the level is glued onto the name in a per-language form ("Lv.1",
", ур. 1", "Niv. 1", "Lv1", "老橡树 lv.1", ...). This script strips that suffix
and merges the result into scripts/game_city_data.json, which is what
generate_city_map.py reads.

Usage:
    python scripts/extract_city_names.py --langs-dir "D:/.../la/langs"

Only packs that actually contain translations are used: some packs ship the
placeholder "暂不翻译" ("not translated yet") for every city, and those are
skipped so the site falls back to English instead of showing Chinese noise.
"""

import argparse
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "scripts", "game_city_data.json")

# site language code -> game language pack
SITE_TO_PACK = {
    "en": "en", "ru": "ru", "es": "es", "pt": "pt", "fr": "fr", "de": "de",
    "id": "id", "ko": "ko", "ja": "ja", "ar": "ar", "it": "it", "ms": "ms",
    "nl": "nl", "th": "th", "tr": "tr", "vi": "vi", "zh": "zh-cn", "pl": "pl",
    # the client has no traditional-Chinese pack; simplified is the closest
    "zh-tw": "zh-cn",
}

PLACEHOLDER = "暂不翻译"

# "Lv.1", ", ур. 1", "Niv. 1", "Nv. 1", "Liv.1", "Poz. 1", "Sv.1", "Lv1", "lv.1"
LEVEL_SUFFIX = re.compile(
    r"\s*,?\s*(?:lv|niv|nv|liv|lvl|poz|sv|ур)\.{0,2}\s*\d+\s*[;,]?\s*$", re.IGNORECASE
)


def load_pack(path):
    """Parse a MechCity.lua name table; returns {id: raw name}."""
    import lupa

    with open(path, encoding="utf-8") as fh:
        src = fh.read()
    table = lupa.LuaRuntime(unpack_returned_tuples=True).execute(src)
    out = {}
    for key in table:
        entry = table[key]
        if entry is None:
            continue
        name = entry["name"]
        if name is None:
            continue
        out[int(entry["id"])] = str(name)
    return out


def strip_level(name):
    return LEVEL_SUFFIX.sub("", name).strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--langs-dir", required=True, help="directory with <lang>/MechCity.lua")
    ap.add_argument("--data", default=DATA)
    args = ap.parse_args()

    data = json.load(open(args.data, encoding="utf-8"))
    cities = {str(c["id"]): c for c in data["cities"]}

    used, skipped = {}, []
    for site_lang, pack in SITE_TO_PACK.items():
        path = os.path.join(args.langs_dir, pack, "MechCity.lua")
        if not os.path.exists(path):
            skipped.append((site_lang, "pack missing"))
            continue
        raw = load_pack(path)
        names, placeholders, leftover = {}, 0, 0
        for cid, value in raw.items():
            if not value or PLACEHOLDER in value:
                placeholders += 1
                continue
            clean = strip_level(value)
            if not clean:
                placeholders += 1
                continue
            if re.search(r"\d\s*$", clean):
                leftover += 1
            names[cid] = clean
        if len(names) < 0.8 * len(cities):
            skipped.append((site_lang, "%d placeholders" % placeholders))
            continue
        used[site_lang] = names
        print(
            "%-6s <- %-6s %3d names  (placeholder %d, level suffix left %d)"
            % (site_lang, pack, len(names), placeholders, leftover)
        )

    for site_lang, names in used.items():
        for cid, city in cities.items():
            value = names.get(int(cid))
            if value:
                city.setdefault("names", {})[site_lang] = value

    data.setdefault("meta", {})["namesFrom"] = (
        "client language packs (%s)" % ", ".join(sorted(used))
    )
    if skipped:
        data["meta"]["namesMissing"] = dict(skipped)

    json.dump(data, open(args.data, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nwrote %s: %d languages" % (args.data, len(used)))
    if skipped:
        print("fell back to English:", ", ".join("%s (%s)" % s for s in skipped))


if __name__ == "__main__":
    main()
