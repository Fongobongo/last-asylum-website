import os
import re
import json

LANGS = ["ru", "en", "de", "es", "fr", "id", "ja", "ko", "pt"]
BASE_DIR = "/opt/la/langs"
SITE_DATA_DIR = "/home/fong/la/site/src/data"

MILESTONE_METADATA = {
    1000: {"day": 1, "chapter": 1, "category": "heroes", "icon": "🗡️"}, # Crimson Blade / Cynthia
    2000: {"day": 1, "chapter": 1, "category": "heroes", "icon": "🛡️"}, # Unbreakable Shield / Arthur
    3000: {"day": 2, "chapter": 1, "category": "pve", "icon": "🗺️"}, # Covert Operation
    4000: {"day": 3, "chapter": 1, "category": "alliance", "icon": "⚔️"}, # Rally Battle
    5000: {"day": 4, "chapter": 1, "category": "pve", "icon": "🔥"}, # Survival Battle
    6000: {"day": 5, "chapter": 1, "category": "pve", "icon": "👹"}, # Demon King Blight
    7000: {"day": 6, "chapter": 1, "category": "pve", "icon": "🧀"}, # Cheese Trap
    8000: {"day": 7, "chapter": 1, "category": "alliance", "icon": "🐫"}, # Intercity Trade
    9000: {"day": 8, "chapter": 1, "category": "alliance", "icon": "🏰"}, # City Siege
    10000: {"day": 9, "chapter": 1, "category": "heroes", "icon": "💖"}, # Top Healer
    11000: {"day": 11, "chapter": 1, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    12000: {"day": 13, "chapter": 1, "category": "alliance", "icon": "🏰"}, # City Siege II
    13000: {"day": 15, "chapter": 2, "category": "pvp", "icon": "👤"}, # Shadow Plunderer
    14000: {"day": 16, "chapter": 2, "category": "heroes", "icon": "🌙"}, # Unyielding Moon
    15000: {"day": 18, "chapter": 2, "category": "alliance", "icon": "🏰"}, # City Siege III
    16000: {"day": 20, "chapter": 2, "category": "pve", "icon": "💎"}, # Crystal Cluster Valley
    17000: {"day": 22, "chapter": 2, "category": "pve", "icon": "🧪"}, # Elixir Scramble
    18000: {"day": 15, "chapter": 2, "category": "pvp", "icon": "⚔️"}, # Alliance Duel
    18001: {"day": 22, "chapter": 2, "category": "pvp", "icon": "🏜️"}, # Canyon Conquest
    19000: {"day": 24, "chapter": 2, "category": "alliance", "icon": "🏰"}, # City Siege IV
    20000: {"day": 26, "chapter": 2, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    20100: {"day": 14, "chapter": 1, "category": "pve", "icon": "🧟"}, # Undead Siege
    21000: {"day": 29, "chapter": 3, "category": "heroes", "icon": "👒"}, # Sweetheart Red Riding Hood
    22000: {"day": 32, "chapter": 3, "category": "heroes", "icon": "🎭"}, # Death Performer / Joker
    23000: {"day": 35, "chapter": 3, "category": "pve", "icon": "🏹"}, # Hunt Battle
    24000: {"day": 38, "chapter": 3, "category": "alliance", "icon": "🏰"}, # City Siege V
    25000: {"day": 41, "chapter": 3, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    26000: {"day": 44, "chapter": 3, "category": "alliance", "icon": "🏰"}, # City Siege VI
    27000: {"day": 48, "chapter": 3, "category": "heroes", "icon": "🎺"}, # Battle Bard / Harper
    28000: {"day": 52, "chapter": 3, "category": "alliance", "icon": "👑"}, # Royal City Scramble
    29000: {"day": 56, "chapter": 3, "category": "pvp", "icon": "🌐"}, # Kingdom War
    30000: {"day": 60, "chapter": 3, "category": "pvp", "icon": "🎯"}, # Battlefield Hunter
    31000: {"day": 62, "chapter": 3, "category": "alliance", "icon": "🐫"}, # Cross-Server Intercity Trade
    32000: {"day": 64, "chapter": 3, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    33000: {"day": 66, "chapter": 4, "category": "heroes", "icon": "🌹"}, # Crimson Rose / Marlena
    34000: {"day": 70, "chapter": 4, "category": "heroes", "icon": "🐺"}, # Fang of Fate
    35000: {"day": 74, "chapter": 4, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    36000: {"day": 78, "chapter": 4, "category": "pve", "icon": "⛰️"}, # Mountain Spirit
    37000: {"day": 82, "chapter": 4, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    38000: {"day": 86, "chapter": 4, "category": "heroes", "icon": "⚡"}, # Unleashed Power
    39000: {"day": 90, "chapter": 4, "category": "heroes", "icon": "🔔"}, # Healing Starbell
    40000: {"day": 96, "chapter": 4, "category": "alliance", "icon": "📜"}, # Raven Epigraph Unlocked
    41000: {"day": 102, "chapter": 4, "category": "heroes", "icon": "🎪"}, # Puppet / Billy
    42000: {"day": 108, "chapter": 4, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    43000: {"day": 112, "chapter": 4, "category": "heroes", "icon": "🔥"}, # Queen of Fire / Nicole
    44000: {"day": 116, "chapter": 4, "category": "pve", "icon": "🧀"}, # Cheese Trap Upgrade
    52001: {"day": 118, "chapter": 4, "category": "alliance", "icon": "🧙"}, # Recluse Merchant
    45000: {"day": 120, "chapter": 5, "category": "season", "icon": "☣️"}, # Era of Revival Arrives!
    46000: {"day": 125, "chapter": 5, "category": "season", "icon": "✨"}, # Marlena Awakens
    47000: {"day": 130, "chapter": 5, "category": "season", "icon": "👹"}, # Demon King Blight Achievement Increased
    48000: {"day": 135, "chapter": 5, "category": "season", "icon": "🗡️"}, # Daskal Exclusive Weapon
    49000: {"day": 140, "chapter": 5, "category": "season", "icon": "🌙"}, # Cynthia Awakens
    50000: {"day": 145, "chapter": 5, "category": "season", "icon": "⛓️"}, # Louis Exclusive Weapon
    51000: {"day": 150, "chapter": 5, "category": "season", "icon": "🍭"}, # Annie Awakens
    52000: {"day": 155, "chapter": 5, "category": "season", "icon": "🐾"}, # Ulfrid Exclusive Weapon
    53000: {"day": 160, "chapter": 5, "category": "season", "icon": "⚔️"}, # Supreme Duel
    9999999: {"day": 200, "chapter": 5, "category": "season", "icon": "⏳"}, # More content coming soon
}

def clean_bbcode(s):
    if not s:
        return ""
    # remove color codes like [c][42d642] or [-][/c] or [/c]
    cleaned = re.sub(r"\[\/?c\]|\[[0-9a-fA-F]{6}\]|\[-\]", "", s)
    return cleaned.strip()

def extract_milestones():
    print("Extracting milestones...")
    milestones = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "MileStone.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                id_m = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not id_m:
                    continue
                mid = id_m.group(1)
                name_m = re.search(r"\[\"name\"\]\s*=\s*\"([^\"]+)\"", line)
                desc_m = re.search(r"\[\"desc\"\]\s*=\s*\"([^\"]+)\"", line)
                int_mid = int(mid)
                meta = MILESTONE_METADATA.get(int_mid, {"day": 1, "chapter": 1, "category": "pve", "icon": "🏛️"})
                if mid not in milestones:
                    milestones[mid] = {
                        "id": int_mid,
                        "dayUnlock": meta["day"],
                        "chapter": meta["chapter"],
                        "category": meta["category"],
                        "icon": meta["icon"],
                        "name": {},
                        "desc": {}
                    }
                if name_m:
                    milestones[mid]["name"][lang] = clean_bbcode(name_m.group(1))
                if desc_m:
                    milestones[mid]["desc"][lang] = clean_bbcode(desc_m.group(1))

    # Sort milestones by integer ID
    sorted_milestones = dict(sorted(milestones.items(), key=lambda x: int(x[0])))
    out_path = os.path.join(SITE_DATA_DIR, "officialMilestones.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sorted_milestones, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(sorted_milestones)} milestones to {out_path}")
    return sorted_milestones

def extract_skills():
    print("Extracting skills...")
    skills = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "HeroSkillBase.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                id_m = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not id_m:
                    continue
                sid = id_m.group(1)
                name_m = re.search(r"\[\"skillName\"\]\s*=\s*\"([^\"]+)\"", line)
                type_m = re.search(r"\[\"typeDesc\"\]\s*=\s*\"([^\"]+)\"", line)
                dmg_m = re.search(r"\[\"dmgDesc\"\]\s*=\s*\"([^\"]+)\"", line)
                desc_m = re.search(r"\[\"skillDesc\"\]\s*=\s*\"([^\"]+)\"", line)
                effect_m = re.search(r"\[\"effectDesc\"\]\s*=\s*\"([^\"]+)\"", line)
                p1_unit = re.search(r"\[\"param1_unit\"\]\s*=\s*\"([^\"]+)\"", line)
                p2_unit = re.search(r"\[\"param2_unit\"\]\s*=\s*\"([^\"]+)\"", line)

                if sid not in skills:
                    skills[sid] = {
                        "id": int(sid),
                        "name": {},
                        "type": {},
                        "dmgType": {},
                        "desc": {},
                        "effect": {},
                        "paramUnits": []
                    }
                if name_m:
                    skills[sid]["name"][lang] = clean_bbcode(name_m.group(1))
                if type_m:
                    skills[sid]["type"][lang] = clean_bbcode(type_m.group(1))
                if dmg_m:
                    skills[sid]["dmgType"][lang] = clean_bbcode(dmg_m.group(1))
                if desc_m:
                    skills[sid]["desc"][lang] = clean_bbcode(desc_m.group(1))
                if effect_m:
                    skills[sid]["effect"][lang] = clean_bbcode(effect_m.group(1))
                if lang == "en":
                    units = []
                    if p1_unit: units.append(p1_unit.group(1))
                    if p2_unit: units.append(p2_unit.group(1))
                    skills[sid]["paramUnits"] = units

    sorted_skills = dict(sorted(skills.items(), key=lambda x: int(x[0])))
    out_path = os.path.join(SITE_DATA_DIR, "officialSkills.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sorted_skills, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(sorted_skills)} skills to {out_path}")
    return sorted_skills

def extract_and_enrich_heroes(skills_db):
    print("Enriching officialHeroes.json...")
    heroes_path = os.path.join(SITE_DATA_DIR, "officialHeroes.json")
    with open(heroes_path, "r", encoding="utf-8") as f:
        existing_heroes = json.load(f)

    # Extract hero metadata across languages
    hero_meta = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "HeroInfo.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                id_m = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not id_m:
                    continue
                hid = id_m.group(1)
                name_m = re.search(r"\[\"name\"\]\s*=\s*\"([^\"]+)\"", line)
                ue_m = re.search(r"\[\"ueName\"\]\s*=\s*\"([^\"]+)\"", line)
                story_m = re.search(r"\[\"heroStory\"\]\s*=\s*\"([^\"]+)\"", line)
                trait_m = re.search(r"\[\"characterDes\"\]\s*=\s*\"([^\"]+)\"", line)
                preview_m = re.search(r"\[\"descRecruitPreview\"\]\s*=\s*\"([^\"]+)\"", line)

                if hid not in hero_meta:
                    hero_meta[hid] = {
                        "name": {},
                        "ueName": {},
                        "story": {},
                        "trait": {},
                        "preview": {}
                    }
                if name_m: hero_meta[hid]["name"][lang] = clean_bbcode(name_m.group(1))
                if ue_m: hero_meta[hid]["ueName"][lang] = clean_bbcode(ue_m.group(1))
                if story_m: hero_meta[hid]["story"][lang] = clean_bbcode(story_m.group(1))
                if trait_m: hero_meta[hid]["trait"][lang] = clean_bbcode(trait_m.group(1))
                if preview_m: hero_meta[hid]["preview"][lang] = clean_bbcode(preview_m.group(1))

    # Merge into existing heroes
    for hid, meta in hero_meta.items():
        if hid not in existing_heroes:
            existing_heroes[hid] = {
                "names": meta["name"],
                "weapons": meta["ueName"]
            }
        else:
            if meta["name"]:
                existing_heroes[hid]["names"] = {**existing_heroes[hid].get("names", {}), **meta["name"]}
            if meta["ueName"]:
                existing_heroes[hid]["weapons"] = {**existing_heroes[hid].get("weapons", {}), **meta["ueName"]}

        # Add rich fields
        if meta["story"]:
            existing_heroes[hid]["story"] = meta["story"]
        if meta["trait"]:
            existing_heroes[hid]["trait"] = meta["trait"]
        if meta["preview"]:
            existing_heroes[hid]["previewQuote"] = meta["preview"]

        # Link skills
        int_hid = int(hid)
        hero_skills = []
        for slot in [1, 2, 3, 4, 5]:
            base_sid = str(int_hid * 100 + slot * 10)
            if base_sid in skills_db:
                s_info = skills_db[base_sid]
                # collect level upgrades
                upgrades = []
                for lv in range(1, 10):
                    upg_sid = str(int(base_sid) + lv)
                    if upg_sid in skills_db and skills_db[upg_sid]["effect"]:
                        upgrades.append({
                            "level": lv,
                            "effect": skills_db[upg_sid]["effect"]
                        })
                hero_skills.append({
                    "slot": slot,
                    "id": int(base_sid),
                    "name": s_info["name"],
                    "type": s_info["type"],
                    "dmgType": s_info["dmgType"],
                    "desc": s_info["desc"],
                    "paramUnits": s_info.get("paramUnits", []),
                    "upgrades": upgrades
                })
        if hero_skills:
            existing_heroes[hid]["officialSkills"] = hero_skills

    with open(heroes_path, "w", encoding="utf-8") as f:
        json.dump(existing_heroes, f, ensure_ascii=False, indent=2)
    print(f"Enriched {len(existing_heroes)} heroes in {heroes_path}")

def extract_duel_stages():
    print("Extracting alliance duel stages...")
    stages = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "AllianceCompetitionStage.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                m_id = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not m_id:
                    continue
                sid = m_id.group(1)
                name_m = re.search(r"\[\"rightEntryName\"\]\s*=\s*\"([^\"]+)\"", line)
                tip1_m = re.search(r"\[\"tipsNameOne\"\]\s*=\s*\"([^\"]+)\"", line)
                tip2_m = re.search(r"\[\"tipsNameTwo\"\]\s*=\s*\"([^\"]+)\"", line)
                tasks = re.findall(r"\[\"name\d+\"\]\s*=\s*\"([^\"]+)\"", line)
                if sid not in stages:
                    stages[sid] = {"id": int(sid), "name": {}, "tasks": {}, "tips": {}}
                if name_m: stages[sid]["name"][lang] = clean_bbcode(name_m.group(1))
                if tasks: stages[sid]["tasks"][lang] = [clean_bbcode(t) for t in tasks]
                tips = []
                if tip1_m: tips.append(clean_bbcode(tip1_m.group(1)))
                if tip2_m: tips.append(clean_bbcode(tip2_m.group(1)))
                if tips: stages[sid]["tips"][lang] = tips

    sorted_stages = dict(sorted(stages.items(), key=lambda x: int(x[0])))
    out_path = os.path.join(SITE_DATA_DIR, "officialDuelStages.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sorted_stages, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(sorted_stages)} duel stages to {out_path}")

def extract_tech():
    print("Extracting college research tech...")
    techs = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "CollegeTech.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                id_m = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not id_m:
                    continue
                tid = id_m.group(1)
                name_m = re.search(r"\[\"name\"\]\s*=\s*\"([^\"]+)\"", line)
                desc_m = re.search(r"\[\"des\"\]\s*=\s*\"([^\"]+)\"", line)
                if tid not in techs:
                    techs[tid] = {
                        "id": int(tid),
                        "name": {},
                        "desc": {}
                    }
                if name_m: techs[tid]["name"][lang] = clean_bbcode(name_m.group(1))
                if desc_m: techs[tid]["desc"][lang] = clean_bbcode(desc_m.group(1))

    sorted_techs = dict(sorted(techs.items(), key=lambda x: int(x[0])))
    out_path = os.path.join(SITE_DATA_DIR, "officialTech.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sorted_techs, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(sorted_techs)} technologies to {out_path}")

def main():
    milestones = extract_milestones()
    skills = extract_skills()
    extract_and_enrich_heroes(skills)
    extract_duel_stages()
    extract_tech()
    print("Done extracting all official game data!")

if __name__ == "__main__":
    main()
