import os
import re
import json

LANGS = ["ru", "en", "de", "es", "fr", "id", "ja", "ko", "pt"]
BASE_DIR = "/opt/la/langs"
SITE_DATA_DIR = "/home/fong/la/site/src/data"

def clean(s):
    if not s:
        return ""
    return re.sub(r"\[\/?c\]|\[[0-9a-fA-F]{6}\]|\[-\]", "", s).strip()

def extract_vip():
    print("Extracting VIP data...")
    vip_levels = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "VipInfo.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                m = re.search(r"\[\"(\d+)\"\]\s*=\s*\{.*?\[\"vipFreeGiftName\"\]\s*=\s*\"([^\"]+)\"", line)
                if m:
                    vid = int(m.group(1))
                    if vid not in vip_levels:
                        vip_levels[vid] = {
                            "level": vid,
                            "dailyGift": {},
                            "keyUnlocks": []
                        }
                    vip_levels[vid]["dailyGift"][lang] = clean(m.group(2))

    # Key unlocks annotations
    milestones = {
        4: {"badge": "VIP Chat Tag", "desc": "Отображение VIP-уровня в чате (VIP level in chat)"},
        6: {"badge": "Quick Expedition", "desc": "Быстрый вызов Битвы экспедиции (Quick Expedition battle challenge)"},
        8: {"badge": "Auto Covert Ops", "desc": "Автоотправка для Секретных операций (Auto-dispatch for Covert Operations)"},
        10: {"badge": "Super Covert Ops", "desc": "Суперрежим для Секретных операций (Super mode for Covert Operations)"},
        12: {"badge": "Extra March Queue", "desc": "Дополнительный слот марша и повышенная скорость сбора (Bonus march slot & gathering speed)"},
        15: {"badge": "Max March Speed", "desc": "Максимальное ускорение строительства и исследований (Max build/research speed boost)"}
    }
    for vid, data in vip_levels.items():
        if vid in milestones:
            data["highlight"] = milestones[vid]

    sorted_vip = dict(sorted(vip_levels.items(), key=lambda x: int(x[0])))
    out_path = os.path.join(SITE_DATA_DIR, "officialVip.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sorted_vip, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(sorted_vip)} VIP levels to {out_path}")

def extract_alliance_tech():
    print("Extracting Alliance Technologies...")
    techs = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "UnionTech.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                m_id = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not m_id:
                    continue
                tid = int(m_id.group(1))
                name_m = re.search(r"\[\"name\"\]\s*=\s*\"([^\"]+)\"", line)
                desc_m = re.search(r"\[\"des\"\]\s*=\s*\"([^\"]+)\"", line)
                if tid not in techs:
                    # Categorize branch
                    cat = "development"
                    if tid in [1001, 1022, 1023, 1024, 1025]:
                        cat = "military"
                    elif tid in [1010, 1011, 1012, 1019, 1020]:
                        cat = "defense"
                    techs[tid] = {
                        "id": tid,
                        "category": cat,
                        "isCore": tid == 1001, # Auto-rally is the #1 priority
                        "name": {},
                        "desc": {}
                    }
                if name_m:
                    techs[tid]["name"][lang] = clean(name_m.group(1))
                if desc_m:
                    techs[tid]["desc"][lang] = clean(desc_m.group(1))

    sorted_techs = dict(sorted(techs.items(), key=lambda x: int(x[0])))
    out_path = os.path.join(SITE_DATA_DIR, "officialAllianceTech.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sorted_techs, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(sorted_techs)} Alliance Techs to {out_path}")

def extract_raven():
    print("Extracting Raven (UAV) system...")
    components = [
        {"slot": 1, "key": "beak", "ru": "Острый клюв", "en": "Sharp Beak", "icon": "🦅", "stat": "ATK (Атака)"},
        {"slot": 2, "key": "eye", "ru": "Глаз восприятия", "en": "Eye of Perception", "icon": "👁️", "stat": "Crit / Accuracy (Крит/Точность)"},
        {"slot": 3, "key": "claw", "ru": "Атакующий коготь", "en": "Attacker's Claw", "icon": "🐾", "stat": "Damage Boost (Урон)"},
        {"slot": 4, "key": "feather", "ru": "Перо ночи", "en": "Feather of the Night", "icon": "🪶", "stat": "Defense (Защита)"},
        {"slot": 5, "key": "heart", "ru": "Сердце мудрости", "en": "Heart of Wisdom", "icon": "💎", "stat": "HP / Durability (Здоровье)"},
        {"slot": 6, "key": "tail", "ru": "Хвост ветра", "en": "Tail of Wind", "icon": "💨", "stat": "Speed / Agility (Скорость)"}
    ]

    sets = [
        {
            "id": 1,
            "name": {"ru": "Маска ночного Ворона", "en": "Night Raven Mask", "de": "Nachtraben-Maske", "es": "Máscara del Cuervo Nocturno", "fr": "Masque du Corbeau de Nuit", "id": "Topeng Gagak Malam", "ja": "ナイトレイヴンの仮面", "ko": "나이트 레이븐 가면", "pt": "Máscara do Corvo da Noite"},
            "type": "Offensive (Атакующий)",
            "bonus": {"ru": "Увеличивает урон отряда на 15% и пробивание защиты на 10%", "en": "Increases squad damage by 15% and defense piercing by 10%"}
        },
        {
            "id": 2,
            "name": {"ru": "Плащ из перьев Ворона", "en": "Raven Feather Cloak", "de": "Rabenfeder-Umhang", "es": "Capa de Plumas de Cuervo", "fr": "Cape de Plumes de Corbeau", "id": "Jubah Bulu Gagak", "ja": "レイヴンの羽衣", "ko": "레이븐 깃털 망토", "pt": "Manto de Penas de Corvo"},
            "type": "Defensive (Защитный)",
            "bonus": {"ru": "Снижает весь получаемый отрядом урон на 15% и увеличивает HP на 20%", "en": "Decreases squad damage taken by 15% and increases HP by 20%"}
        }
    ]

    skills = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "UavSkillDes.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                m_id = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not m_id:
                    continue
                sid = int(m_id.group(1))
                desc_m = re.search(r"\[\"skillEDescribe\"\]\s*=\s*\"([^\"]+)\"|\[\"skillDes\"\]\s*=\s*\"([^\"]+)\"", line)
                if sid not in skills:
                    skills[sid] = {"level": sid, "desc": {}}
                if desc_m:
                    val = desc_m.group(1) or desc_m.group(2)
                    skills[sid]["desc"][lang] = clean(val)

    raven_data = {
        "components": components,
        "sets": sets,
        "skills": list(skills.values())
    }
    out_path = os.path.join(SITE_DATA_DIR, "officialRaven.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(raven_data, f, ensure_ascii=False, indent=2)
    print(f"Wrote Raven data to {out_path}")

def extract_troops():
    print("Extracting Barracks & Troop progression...")
    barracks_progression = [
        {"tier": "T1", "level": 1, "mightPerTroop": 2, "load": 5, "speed": 10},
        {"tier": "T2", "level": 3, "mightPerTroop": 4, "load": 8, "speed": 10},
        {"tier": "T3", "level": 6, "mightPerTroop": 7, "load": 11, "speed": 10},
        {"tier": "T4", "level": 10, "mightPerTroop": 11, "load": 15, "speed": 10},
        {"tier": "T5", "level": 14, "mightPerTroop": 17, "load": 19, "speed": 10},
        {"tier": "T6", "level": 17, "mightPerTroop": 25, "load": 24, "speed": 10},
        {"tier": "T7", "level": 20, "mightPerTroop": 36, "load": 30, "speed": 10},
        {"tier": "T8", "level": 24, "mightPerTroop": 52, "load": 37, "speed": 10},
        {"tier": "T9", "level": 27, "mightPerTroop": 74, "load": 45, "speed": 10},
        {"tier": "T10", "level": 30, "mightPerTroop": 105, "load": 55, "speed": 10}
    ]

    counter_triangle = {
        "Warrior": {"beats": "Ranger", "losesTo": "Warlock", "bonusPct": 20},
        "Ranger": {"beats": "Warlock", "losesTo": "Warrior", "bonusPct": 20},
        "Warlock": {"beats": "Warrior", "losesTo": "Ranger", "bonusPct": 20}
    }

    troops_data = {
        "barracksProgression": barracks_progression,
        "counterTriangle": counter_triangle
    }
    out_path = os.path.join(SITE_DATA_DIR, "officialTroops.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(troops_data, f, ensure_ascii=False, indent=2)
    print(f"Wrote Troops data to {out_path}")

def extract_tips():
    print("Extracting Loading Tips...")
    tips = {}
    for lang in LANGS:
        path = os.path.join(BASE_DIR, lang, "LoadingTips.lua")
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                m_id = re.search(r"\[\"(\d+)\"\]\s*=\s*\{", line)
                if not m_id:
                    continue
                tid = int(m_id.group(1))
                c_m = re.search(r"\[\"content\"\]\s*=\s*\"([^\"]+)\"", line)
                if tid not in tips:
                    tips[tid] = {"id": tid, "content": {}}
                if c_m:
                    tips[tid]["content"][lang] = clean(c_m.group(1))

    tips_list = list(tips.values())
    out_path = os.path.join(SITE_DATA_DIR, "officialTips.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(tips_list, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(tips_list)} Loading Tips to {out_path}")

def main():
    extract_vip()
    extract_alliance_tech()
    extract_raven()
    extract_troops()
    extract_tips()
    print("All game systems extracted successfully!")

if __name__ == "__main__":
    main()
