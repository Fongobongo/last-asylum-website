"""
Generate site/src/data/cityMap.ts from the extracted map geometry.

Source of truth for the vector shapes and bonuses:
  scripts/city_map_geometry.json  (87 territories traced from the in-game city
  map infographic; `text` is the OCR'd bonus label of each territory).

Source of truth for the translations:
  game_terms.json  (strings extracted from the game client, 18 languages)
  + the hand-written UI dictionaries below (19 languages).

Run:  python scripts/generate_city_map.py
"""

import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GEOMETRY = os.path.join(ROOT, "scripts", "city_map_geometry.json")
TERMS = os.path.join(ROOT, "game_terms.json")
OUT = os.path.join(ROOT, "site", "src", "data", "cityMap.ts")

LANGS = [
    "en", "ru", "es", "pt", "fr", "de", "id", "ko", "ja", "ar",
    "it", "ms", "nl", "th", "tr", "vi", "zh", "pl", "zh-tw",
]

BONUS_KEYS = [
    "grain_output", "timber_output", "herb_output", "grain_gather",
    "training", "research", "building",
]

# English map labels -> game_terms.json key holding the localized phrase.
TERM_KEYS = {
    "grain_output": "Grain Output III",
    "timber_output": "Timber Output↑",
    "herb_output": "Herb Output↑",
    "grain_gather": "Grain Gathering Speed↑",
    "training": "Training Speed↑",
    "research": "Research Speed↑",
    "building": "Building Construction Speed↑",
}

FULL_EN = {
    "grain_output": "Grain Output", "timber_output": "Timber Output",
    "herb_output": "Herb Output", "grain_gather": "Grain Gathering Speed",
    "training": "Training Speed", "research": "Research Speed",
    "building": "Building Construction Speed",
}

# Manual overrides where the game client has no localized string.
FULL_OVERRIDES = {
    "grain_output": {
        "ms": "Pengeluaran Makanan", "pl": "Produkcja zboża", "ar": "إنتاج الحبوب",
        "vi": "Sản lượng Thức Ăn", "id": "Produksi Makanan",
    },
    "timber_output": {
        "ms": "Pengeluaran Kayu", "pl": "Produkcja drewna", "ar": "إنتاج الخشب",
        "vi": "Sản lượng Gỗ", "id": "Produksi Kayu",
    },
    "herb_output": {
        "ms": "Pengeluaran Herba", "pl": "Produkcja ziół", "ar": "إنتاج الأعشاب",
        "vi": "Sản lượng Thuốc", "id": "Produksi Obat",
    },
    "grain_gather": {
        "ms": "Kelajuan Kutipan Makanan", "pl": "Prędkość zbioru zboża", "ar": "سرعة جمع الحبوب",
        "vi": "Tốc độ thu thập Thức Ăn", "id": "Kecepatan Pengumpulan Makanan",
        "fr": "Vitesse de collecte des Céréales",
    },
    "training": {
        "ms": "Kelajuan Latihan", "pl": "Prędkość treningu", "ar": "سرعة التدريب",
        "vi": "Tốc độ huấn luyện", "id": "Kecepatan Pelatihan",
    },
    "research": {
        "ms": "Kelajuan Penyelidikan", "pl": "Prędkość badań", "ar": "سرعة البحث",
        "vi": "Tốc độ nghiên cứu", "id": "Kecepatan Riset",
    },
    "building": {
        "ms": "Kelajuan Pembinaan", "pl": "Prędkość budowy", "ar": "سرعة البناء",
        "vi": "Tốc độ xây dựng", "id": "Kecepatan Membangun",
    },
}

# Short labels are drawn inside the SVG territories, so they must be tiny.
SHORT = {
    "grain_output": ["Grain", "Зерно", "Grano", "Comida", "Céréales", "Getreide", "Makanan", "식량", "食料", "حبوب", "Grano", "Makanan", "Graan", "เสบียง", "Tahıl", "Thức ăn", "粮食", "Zboże", "糧食"],
    "timber_output": ["Timber", "Древо", "Madera", "Madeira", "Bois", "Holz", "Kayu", "목재", "木材", "خشب", "Legname", "Kayu", "Hout", "ไม้", "Kereste", "Gỗ", "木材", "Drewno", "木材"],
    "herb_output": ["Herb", "Травы", "Hierbas", "Ervas", "Herbes", "Kräuter", "Obat", "약재", "薬材", "أعشاب", "Erbe", "Herba", "Kruiden", "สมุนไพร", "Bitki", "Thuốc", "药材", "Zioła", "藥材"],
    "grain_gather": ["Gather", "Сбор", "Recogida", "Coleta", "Collecte", "Sammeln", "Kumpul", "수집", "採集", "جمع", "Raccolta", "Kutip", "Verzamelen", "รวบรวม", "Toplama", "Thu thập", "采集", "Zbiór", "採集"],
    "training": ["Training", "Обуч.", "Entreno", "Treino", "Entraîn.", "Training", "Latih", "훈련", "訓練", "تدريب", "Addestr.", "Latih", "Training", "ฝึกฝน", "Eğitim", "Huấn luyện", "训练", "Trening", "訓練"],
    "research": ["Research", "Иссл.", "Investig.", "Pesquisa", "Recherche", "Forschung", "Riset", "연구", "研究", "بحث", "Ricerca", "Kajian", "Onderzoek", "วิจัย", "Araştırma", "Nghiên cứu", "研究", "Badania", "研究"],
    "building": ["Building", "Стройка", "Constr.", "Constr.", "Constr.", "Bauen", "Bangun", "건설", "建設", "بناء", "Costr.", "Bina", "Bouwen", "ก่อสร้าง", "İnşa", "Xây dựng", "建造", "Budowa", "建造"],
}

# Generic city names (game_terms.json has garbage values for Arabic here).
GENERIC_EN = {1: "Lv.1 City", 2: "Lv.2 City", 3: "Lv.3 City", 4: "Lv.4 City", 5: "Lv.5 City", 6: "Lv.6 City"}
GENERIC_AR = {
    1: "مدينة المستوى 1", 2: "مدينة المستوى 2", 3: "مدينة المستوى 3",
    4: "مدينة المستوى 4", 5: "مدينة المستوى 5", 6: "مدينة المستوى 6",
}

NAMED_KEYS = [
    "Lionheart Fortress Lv.6", "Nightfall Fortress Lv.6", "Sky Fortress Lv.6",
    "Temple of Chaos Lv.5", "Temple of Nature Lv.5", "Temple of Order Lv.5", "Temple of War Lv.5",
    "Emerald City Lv.4", "Phantom City Lv.4", "Sunspire City Lv.4",
    "Holyspring City Lv.3", "Ironwall City Lv.3",
]

# Which named city sits on which territory: derived from the holding bonus in
# content/guides/en/cities.md (the top-cities table).
NAME_BY_BONUS = {
    "training": "Lionheart Fortress Lv.6",
    "research": "Nightfall Fortress Lv.6",
    "building": "Sky Fortress Lv.6",
    "timber_output@5": "Temple of Chaos Lv.5",
    "grain_gather@5": "Temple of Nature Lv.5",
    "herb_output@5": "Temple of Order Lv.5",
    "grain_output@5": "Temple of War Lv.5",
}

ROYAL = {
    "en": "Royal City", "ru": "Королевский город", "es": "Ciudad Real", "pt": "Cidade Real",
    "fr": "Cité Royale", "de": "Königsstadt", "id": "Kota Kerajaan", "ko": "왕성", "ja": "王城",
    "ar": "المدينة الملكية", "it": "Città Reale", "ms": "Kota Diraja", "nl": "Koningsstad",
    "th": "นครหลวง", "tr": "Kraliyet Şehri", "vi": "Thành Hoàng Gia", "zh": "王城",
    "pl": "Miasto Królewskie", "zh-tw": "王城",
}

# UI strings. Each list is in LANGS order.
UI_ROWS = {
    "metaTitle": ["City Map & Alliance Territory Planner", "Карта городов и раздел территорий", "Mapa de ciudades y territorios", "Mapa de cidades e territórios", "Carte des villes et territoires", "Städtekarte & Territorien", "Peta Kota & Wilayah", "도시 지도 & 영토 분배", "都市マップと縄張り", "خريطة المدن وتقسيم الأراضي", "Mappa delle città e territori", "Peta Bandar & Wilayah", "Stedenkaart & gebieden", "แผนที่เมืองและอาณาเขต", "Şehir Haritası & Bölgeler", "Bản đồ thành phố & lãnh thổ", "城市地图与领地分配", "Mapa miast i terytoriów", "城市地圖與領地分配"],
    "metaDesc": ["Interactive city map with levels, bonuses and alliance ownership planning for 19 languages.", "Интерактивная карта городов: уровни, бонусы и распределение территорий между альянсами.", "Mapa interactivo con niveles, bonificaciones y reparto de territorios entre alianzas.", "Mapa interativo com níveis, bônus e divisão de territórios entre alianças.", "Carte interactive : niveaux, bonus et répartition des territoires entre alliances.", "Interaktive Karte mit Stufen, Boni und Allianz-Aufteilung.", "Peta kota interaktif: level, bonus dan pembagian wilayah aliansi.", "레벨·보너스·동맹 영토 배분이 있는 대화형 도시 지도", "レベル・ボーナス・同盟領地割り振りができる都市マップ", "خريطة تفاعلية للمستويات والمكافآت وتوزيع الأراضي بين التحالفات", "Mappa interattiva con livelli, bonus e ripartizione dei territori", "Peta interaktif: tahap, bonus dan pembahagian wilayah pakatan", "Interactieve kaart met levels, bonussen en alliantie-indeling", "แผนที่แบบโต้ตอบ: เลเวล โบนัส และแบ่งอาณาเขตพันธมิตร", "Seviyeler, bonuslar ve ittifak bölgeleriyle etkileşimli harita", "Bản đồ tương tác: cấp độ, bonus và chia lãnh thổ liên minh", "交互式城市地图：等级、加成与联盟领地划分", "Interaktywna mapa: poziomy, bonusy i podział terytoriów", "互動式城市地圖：等級、加成與聯盟領地劃分"],
    "title": ["City Map", "Карта городов", "Mapa de ciudades", "Mapa de cidades", "Carte des villes", "Städtekarte", "Peta Kota", "도시 지도", "都市マップ", "خريطة المدن", "Mappa delle città", "Peta Bandar", "Stedenkaart", "แผนที่เมือง", "Şehir Haritası", "Bản đồ thành phố", "城市地图", "Mapa miast", "城市地圖"],
    "subtitle": ["86 capturable cities, 6 levels and 7 bonus types. Mark alliance holdings and total the bonuses automatically.", "86 городов, 6 уровней и 7 типов бонусов. Отмечайте владения альянсов — бонусы суммируются автоматически.", "86 ciudades, 6 niveles y 7 tipos de bonificación. Marca las posesiones y suma los bonos.", "86 cidades, 6 níveis e 7 tipos de bônus. Marque os domínios e some os bônus.", "86 villes, 6 niveaux et 7 types de bonus. Marquez les territoires et totalisez les bonus.", "86 Städte, 6 Stufen, 7 Bonusarten. Markiere Allianzgebiete und summiere die Boni.", "86 kota, 6 level, 7 jenis bonus. Tandai wilayah aliansi dan jumlahkan bonusnya.", "86개 도시, 6레벨, 7종 보너스. 동맹 영토를 표시하고 보너스를 자동 합산하세요.", "86都市・6段階・7種のボーナス。同盟領をマークしてボーナスを自動集計。", "86 مدينة، 6 مستويات و7 أنواع مكافآت. حدد أراضي التحالف وسيتم جمع المكافآت تلقائياً.", "86 città, 6 livelli e 7 tipi di bonus. Segna i territori e somma i bonus.", "86 bandar, 6 tahap, 7 jenis bonus. Tanda wilayah pakatan dan jumlahkan bonus.", "86 steden, 6 levels en 7 bonustypes. Markeer gebieden en tel de bonussen op.", "86 เมือง 6 เลเวล 7 ประเภทโบนัส ทำเครื่องหมายอาณาเขตและรวมโบนัสอัตโนมัติ", "86 şehir, 6 seviye, 7 bonus türü. İttifak bölgelerini işaretleyin, bonuslar toplansın.", "86 thành phố, 6 cấp độ, 7 loại bonus. Đánh dấu lãnh thổ và tự động cộng bonus.", "86座城市、6个等级、7种加成。标记联盟领地，自动汇总加成。", "86 miast, 6 poziomów, 7 typów bonusów. Oznacz terytoria i zsumuj bonusy.", "86座城市、6個等級、7種加成。標記聯盟領地，自動彙總加成。"],
    "legend": ["Legend", "Легенда", "Leyenda", "Legenda", "Légende", "Legende", "Legenda", "범례", "凡例", "دليل", "Legenda", "Petunjuk", "Legenda", "คำอธิบาย", "Lejant", "Chú giải", "图例", "Legenda", "圖例"],
    "colorLabel": ["Colour", "Цвет", "Color", "Cor", "Couleur", "Farbe", "Warna", "색상", "色", "اللون", "Colore", "Warna", "Kleur", "สี", "Renk", "Màu", "颜色", "Kolor", "顏色"],
    "iconLabel": ["Pictogram", "Пиктограмма", "Icono", "Ícone", "Icône", "Symbol", "Ikon", "아이콘", "アイコン", "أيقونة", "Icona", "Ikon", "Pictogram", "ไอคอน", "Simge", "Biểu tượng", "图标", "Ikona", "圖示"],
    "level": ["Level", "Уровень", "Nivel", "Nível", "Niveau", "Stufe", "Level", "레벨", "レベル", "المستوى", "Livello", "Tahap", "Level", "เลเวล", "Seviye", "Cấp độ", "等级", "Poziom", "等級"],
    "bonus": ["Bonus", "Бонус", "Bonificación", "Bônus", "Bonus", "Bonus", "Bonus", "보너스", "ボーナス", "مكافأة", "Bonus", "Bonus", "Bonus", "โบนัส", "Bonus", "Bonus", "加成", "Bonus", "加成"],
    "owner": ["Owner", "Владелец", "Dueño", "Dono", "Propriétaire", "Besitzer", "Pemilik", "소유자", "所有者", "المالك", "Proprietario", "Pemilik", "Eigenaar", "เจ้าของ", "Sahip", "Chủ sở hữu", "归属", "Właściciel", "歸屬"],
    "free": ["Unclaimed", "Свободен", "Libre", "Livre", "Libre", "Frei", "Bebas", "미점령", "未占領", "غير محتل", "Libero", "Bebas", "Vrij", "ยังไม่มีเจ้าของ", "Boş", "Chưa chiếm", "未占领", "Wolne", "未佔領"],
    "royal": ["Royal City", "Королевский город", "Ciudad Real", "Cidade Real", "Cité Royale", "Königsstadt", "Kota Kerajaan", "왕성", "王城", "المدينة الملكية", "Città Reale", "Kota Diraja", "Koningsstad", "นครหลวง", "Kraliyet Şehri", "Thành Hoàng Gia", "王城", "Miasto Królewskie", "王城"],
    "viewLevels": ["By level", "По уровням", "Por nivel", "Por nível", "Par niveau", "Nach Stufe", "Per level", "레벨별", "レベル別", "حسب المستوى", "Per livello", "Mengikut tahap", "Op level", "ตามเลเวล", "Seviyeye göre", "Theo cấp độ", "按等级", "Wg poziomu", "依等級"],
    "viewOwners": ["By alliance", "По альянсам", "Por alianza", "Por aliança", "Par alliance", "Nach Allianz", "Per aliansi", "동맹별", "同盟別", "حسب التحالف", "Per alleanza", "Mengikut pakatan", "Per alliantie", "ตามพันธมิตร", "İttifaka göre", "Theo liên minh", "按联盟", "Wg sojuszu", "依聯盟"],
    "labels": ["Labels", "Подписи", "Etiquetas", "Rótulos", "Étiquettes", "Beschriftung", "Label", "라벨", "ラベル", "التسميات", "Etichette", "Label", "Labels", "ป้ายข้อความ", "Etiketler", "Nhãn", "标签", "Etykiety", "標籤"],
    "full": ["Full", "Полные", "Completas", "Completas", "Complètes", "Voll", "Lengkap", "전체", "全体", "كاملة", "Complete", "Penuh", "Volledig", "ทั้งหมด", "Tam", "Đầy đủ", "完整", "Pełne", "完整"],
    "compact": ["Compact", "Краткие", "Compactas", "Compactas", "Compactes", "Kompakt", "Ringkas", "간단히", "簡易", "مختصرة", "Compatte", "Ringkas", "Compact", "ย่อ", "Kısa", "Ngắn gọn", "简洁", "Krótkie", "簡潔"],
    "off": ["Off", "Выкл.", "Off", "Off", "Off", "Aus", "Mati", "끄기", "オフ", "إيقاف", "Off", "Tutup", "Uit", "ปิด", "Kapalı", "Tắt", "关闭", "Wył.", "關閉"],
    "filters": ["Filters", "Фильтры", "Filtros", "Filtros", "Filtres", "Filter", "Filter", "필터", "フィルター", "الفلاتر", "Filtri", "Penapis", "Filters", "ตัวกรอง", "Filtreler", "Bộ lọc", "筛选", "Filtry", "篩選"],
    "all": ["All", "Все", "Todos", "Todos", "Tous", "Alle", "Semua", "전체", "すべて", "الكل", "Tutti", "Semua", "Alle", "ทั้งหมด", "Tümü", "Tất cả", "全部", "Wszystkie", "全部"],
    "search": ["Find city…", "Найти город…", "Buscar ciudad…", "Buscar cidade…", "Chercher une ville…", "Stadt suchen…", "Cari kota…", "도시 검색…", "都市を検索…", "ابحث عن مدينة…", "Cerca città…", "Cari bandar…", "Zoek stad…", "ค้นหาเมือง…", "Şehir ara…", "Tìm thành phố…", "搜索城市…", "Szukaj miasta…", "搜尋城市…"],
    "noMatch": ["No cities match the filters.", "Нет городов по этим фильтрам.", "Ninguna ciudad coincide.", "Nenhuma cidade corresponde.", "Aucune ville ne correspond.", "Keine Stadt entspricht den Filtern.", "Tiada kota sepadan.", "조건에 맞는 도시가 없습니다.", "条件に合う都市がありません。", "لا توجد مدن مطابقة.", "Nessuna città corrisponde.", "Tiada bandar sepadan.", "Geen stad voldoet aan de filters.", "ไม่มีเมืองตรงตามตัวกรอง", "Filtrelere uyan şehir yok.", "Không có thành phố phù hợp.", "没有匹配的城市。", "Brak miast spełniających filtry.", "沒有符合的城市。"],
    "alliances": ["Alliances", "Альянсы", "Alianzas", "Alianças", "Alliances", "Allianzen", "Aliansi", "동맹", "同盟", "التحالفات", "Alleanze", "Pakatan", "Allianties", "พันธมิตร", "İttifaklar", "Liên minh", "联盟", "Sojusze", "聯盟"],
    "add": ["Add alliance", "Добавить альянс", "Añadir alianza", "Adicionar aliança", "Ajouter une alliance", "Allianz hinzufügen", "Tambah aliansi", "동맹 추가", "同盟を追加", "إضافة تحالف", "Aggiungi alleanza", "Tambah pakatan", "Alliantie toevoegen", "เพิ่มพันธมิตร", "İttifak ekle", "Thêm liên minh", "添加联盟", "Dodaj sojusz", "新增聯盟"],
    "namePlaceholder": ["Alliance tag / name", "Тег или название альянса", "Tag / nombre", "Tag / nome", "Tag / nom", "Tag / Name", "Tag / nama", "태그 / 이름", "タグ / 名前", "الوسم / الاسم", "Tag / nome", "Tag / nama", "Tag / naam", "แท็ก / ชื่อ", "Etiket / ad", "Tag / tên", "标签 / 名称", "Tag / nazwa", "標籤 / 名稱"],
    "paintHint": ["Pick an alliance, then click cities to assign. Click again to release.", "Выберите альянс и кликайте по городам. Повторный клик снимает метку.", "Elige una alianza y haz clic en las ciudades. Otro clic libera.", "Escolha uma aliança e clique nas cidades. Clique de novo para libertar.", "Choisissez une alliance puis cliquez sur les villes. Recliquez pour libérer.", "Allianz wählen, dann Städte anklicken. Nochmals klicken zum Lösen.", "Pilih aliansi lalu klik kota. Klik lagi untuk melepas.", "동맹을 고르고 도시를 클릭하세요. 다시 클릭하면 해제됩니다.", "同盟を選んで都市をクリック。もう一度クリックで解除。", "اختر تحالفاً ثم انقر على المدن، وانقر مرة أخرى للإلغاء.", "Scegli un'alleanza e clicca sulle città. Riclicca per liberare.", "Pilih pakatan kemudian klik bandar. Klik lagi untuk lepas.", "Kies een alliantie en klik op steden. Nogmaals klikken maakt vrij.", "เลือกพันธมิตรแล้วคลิกเมือง คลิกอีกครั้งเพื่อยกเลิก", "Bir ittifak seçin ve şehirlere tıklayın. Tekrar tıklayınca serbest kalır.", "Chọn liên minh rồi nhấp vào thành phố. Nhấp lần nữa để bỏ.", "选择联盟后点击城市分配，再次点击取消。", "Wybierz sojusz i klikaj miasta. Ponowny klik zwalnia.", "選擇聯盟後點擊城市分配，再點一次取消。"],
    "clearAll": ["Clear marks", "Снять все метки", "Borrar marcas", "Limpar marcas", "Effacer les marques", "Markierungen löschen", "Hapus tanda", "표시 지우기", "マークを消去", "مسح العلامات", "Cancella segni", "Padam tanda", "Markeringen wissen", "ล้างเครื่องหมาย", "İşaretleri temizle", "Xóa đánh dấu", "清除标记", "Wyczyść znaczniki", "清除標記"],
    "share": ["Share plan", "Поделиться планом", "Compartir plan", "Compartilhar plano", "Partager le plan", "Plan teilen", "Kongsi pelan", "계획 공유", "プランを共有", "مشاركة الخطة", "Condividi piano", "Kongsi pelan", "Plan delen", "แชร์แผน", "Planı paylaş", "Chia sẻ kế hoạch", "分享方案", "Udostępnij plan", "分享方案"],
    "export": ["Export JSON", "Экспорт JSON", "Exportar JSON", "Exportar JSON", "Exporter JSON", "JSON exportieren", "Ekspor JSON", "JSON 내보내기", "JSONを書き出す", "تصدير JSON", "Esporta JSON", "Eksport JSON", "JSON exporteren", "ส่งออก JSON", "JSON dışa aktar", "Xuất JSON", "导出 JSON", "Eksport JSON", "匯出 JSON"],
    "import": ["Import JSON", "Импорт JSON", "Importar JSON", "Importar JSON", "Importer JSON", "JSON importieren", "Impor JSON", "JSON 가져오기", "JSONを読み込む", "استيراد JSON", "Importa JSON", "Import JSON", "JSON importeren", "นำเข้า JSON", "JSON içe aktar", "Nhập JSON", "导入 JSON", "Import JSON", "匯入 JSON"],
    "saved": ["Saved in this browser", "Сохранено в этом браузере", "Guardado en este navegador", "Salvo neste navegador", "Enregistré dans ce navigateur", "In diesem Browser gespeichert", "Tersimpan di browser ini", "이 브라우저에 저장됨", "このブラウザに保存", "محفوظ في هذا المتصفح", "Salvato in questo browser", "Disimpan dalam pelayar ini", "Opgeslagen in deze browser", "บันทึกในเบราว์เซอร์นี้", "Bu tarayıcıda kaydedildi", "Lưu trong trình duyệt này", "已保存在此浏览器", "Zapisano w tej przeglądarce", "已儲存在此瀏覽器"],
    "shareHint": ["A link containing the current plan is copied. Anyone opening it sees the same ownership.", "Скопирована ссылка с текущим планом. Открывший её увидит те же владения.", "Se copia un enlace con el plan actual; quien lo abra verá la misma distribución.", "Um link com o plano atual é copiado; quem abrir verá a mesma divisão.", "Un lien contenant le plan est copié ; chacun verra la même répartition.", "Ein Link mit dem aktuellen Plan wird kopiert — alle sehen dieselbe Aufteilung.", "Tautan berisi rencana disalin; siapa pun yang membukanya melihat pembagian yang sama.", "현재 계획이 담긴 링크가 복사됩니다. 열어본 사람은 같은 배분을 봅니다.", "現在のプランを含むリンクをコピーしました。開いた人は同じ領地配置を見られます。", "تم نسخ رابط يحتوي على الخطة الحالية، وسيرى من يفتحه نفس التوزيع.", "Viene copiato un link con il piano attuale: chi lo apre vede la stessa ripartizione.", "Pautan dengan pelan semasa disalin; sesiapa yang membukanya melihat pembahagian sama.", "Een link met het huidige plan wordt gekopieerd; iedereen ziet dezelfde verdeling.", "คัดลอกลิงก์ที่มีแผนปัจจุบัน ใครเปิดจะเห็นการแบ่งแบบเดียวกัน", "Mevcut planı içeren bağlantı kopyalandı; açan herkes aynı dağılımı görür.", "Đã sao chép liên kết chứa kế hoạch hiện tại; ai mở cũng thấy cùng phân chia.", "已复制包含当前方案的链接，打开者会看到相同的归属。", "Skopiowano link z aktualnym planem; każdy zobaczy ten sam podział.", "已複製包含目前方案的連結，開啟者會看到相同的歸屬。"],
    "bonusTotals": ["Bonus totals by alliance", "Сумма бонусов по альянсам", "Total de bonificaciones por alianza", "Total de bônus por aliança", "Total des bonus par alliance", "Bonussummen nach Allianz", "Total bonus per aliansi", "동맹별 보너스 합계", "同盟別ボーナス合計", "إجمالي المكافآت لكل تحالف", "Totale bonus per alleanza", "Jumlah bonus mengikut pakatan", "Bonustotalen per alliantie", "รวมโบนัสตามพันธมิตร", "İttifaka göre bonus toplamı", "Tổng bonus theo liên minh", "各联盟加成汇总", "Suma bonusów według sojuszu", "各聯盟加成彙總"],
    "held": ["Cities held", "Городов", "Ciudades", "Cidades", "Villes", "Städte", "Kota", "보유 도시", "保有都市", "المدن المحتلة", "Città", "Bandar", "Steden", "เมืองที่ถือครอง", "Şehir", "Thành phố", "持有城市", "Miasta", "持有城市"],
    "byLevel": ["By level", "По уровням", "Por nivel", "Por nível", "Par niveau", "Nach Stufe", "Per level", "레벨별", "レベル別", "حسب المستوى", "Per livello", "Mengikut tahap", "Op level", "ตามเลเวล", "Seviyeye göre", "Theo cấp độ", "按等级", "Wg poziomu", "依等級"],
    "cityList": ["City directory", "Список городов", "Listado de ciudades", "Lista de cidades", "Liste des villes", "Städteliste", "Daftar kota", "도시 목록", "都市一覧", "قائمة المدن", "Elenco città", "Senarai bandar", "Stedenlijst", "รายชื่อเมือง", "Şehir listesi", "Danh sách thành phố", "城市列表", "Lista miast", "城市列表"],
    "colCity": ["City", "Город", "Ciudad", "Cidade", "Ville", "Stadt", "Kota", "도시", "都市", "المدينة", "Città", "Bandar", "Stad", "เมือง", "Şehir", "Thành phố", "城市", "Miasto", "城市"],
    "colBonus": ["Bonus", "Бонус", "Bonificación", "Bônus", "Bonus", "Bonus", "Bonus", "보너스", "ボーナス", "المكافأة", "Bonus", "Bonus", "Bonus", "โบนัส", "Bonus", "Bonus", "加成", "Bonus", "加成"],
    "colOwner": ["Owner", "Владелец", "Dueño", "Dono", "Propriétaire", "Besitzer", "Pemilik", "소유자", "所有者", "المالك", "Proprietario", "Pemilik", "Eigenaar", "เจ้าของ", "Sahip", "Chủ", "归属", "Właściciel", "歸屬"],
    "sourceNote": ["Levels, colours and bonuses follow the in-game city map (client v1.0.87). Ownership is a local planning tool, not live game data.", "Уровни, цвета и бонусы соответствуют игровой карте (клиент v1.0.87). Владения — локальный инструмент планирования, не данные из игры.", "Niveles, colores y bonificaciones según el mapa del juego (cliente v1.0.87). La posesión es una herramienta local, no datos en vivo.", "Níveis, cores e bônus conforme o mapa do jogo (cliente v1.0.87). A posse é uma ferramenta local, não dados ao vivo.", "Niveaux, couleurs et bonus d'après la carte du jeu (client v1.0.87). La possession est un outil local, pas des données en direct.", "Stufen, Farben und Boni nach der Spielkarte (Client v1.0.87). Besitz ist ein lokales Planungswerkzeug, keine Live-Daten.", "Level, warna dan bonus mengikut peta dalam game (klien v1.0.87). Kepemilikan adalah alat perencanaan lokal, bukan data langsung.", "레벨·색상·보너스는 게임 내 지도(클라이언트 v1.0.87) 기준입니다. 소유 표시는 로컬 계획 도구이며 실시간 데이터가 아닙니다.", "レベル・色・ボーナスはゲーム内マップ（クライアント v1.0.87）準拠。領地表示はローカルの計画ツールで、リアルタイムデータではありません。", "المستويات والألوان والمكافآت حسب خريطة اللعبة (العميل v1.0.87). الملكية أداة تخطيط محلية وليست بيانات مباشرة.", "Livelli, colori e bonus secondo la mappa di gioco (client v1.0.87). Il possesso è uno strumento locale, non dati live.", "Tahap, warna dan bonus mengikut peta dalam permainan (klien v1.0.87). Pemilikan ialah alat perancangan tempatan, bukan data langsung.", "Levels, kleuren en bonussen volgen de spelkaart (client v1.0.87). Bezit is een lokaal planningshulpmiddel, geen live data.", "เลเวล สี และโบนัสอิงแผนที่ในเกม (ไคลเอนต์ v1.0.87) การถือครองเป็นเครื่องมือวางแผนในเครื่อง ไม่ใช่ข้อมูลสด", "Seviyeler, renkler ve bonuslar oyun haritasına (istemci v1.0.87) göredir. Sahiplik yerel bir planlama aracıdır, canlı veri değildir.", "Cấp độ, màu và bonus theo bản đồ trong game (client v1.0.87). Quyền sở hữu là công cụ lập kế hoạch cục bộ, không phải dữ liệu trực tiếp.", "等级、颜色与加成依据游戏内地图（客户端 v1.0.87）。归属标记为本地规划工具，并非实时游戏数据。", "Poziomy, kolory i bonusy wg mapy gry (klient v1.0.87). Przynależność to lokalne narzędzie planowania, nie dane na żywo.", "等級、顏色與加成依據遊戲內地圖（客戶端 v1.0.87）。歸屬標記為本機規劃工具，並非即時遊戲資料。"],
    "original": ["Original map", "Оригинал карты", "Mapa original", "Mapa original", "Carte originale", "Originalkarte", "Peta asli", "원본 지도", "元のマップ", "الخريطة الأصلية", "Mappa originale", "Peta asal", "Originele kaart", "แผนที่ต้นฉบับ", "Orijinal harita", "Bản đồ gốc", "原版地图", "Oryginalna mapa", "原版地圖"],
    "assignTo": ["Assign to", "Назначить", "Asignar a", "Atribuir a", "Attribuer à", "Zuweisen an", "Tetapkan ke", "배정", "割り当て", "تعيين إلى", "Assegna a", "Tetapkan kepada", "Toewijzen aan", "กำหนดให้", "Ata", "Gán cho", "分配给", "Przypisz do", "分配給"],
    "details": ["Click a city to see its details", "Кликните по городу, чтобы увидеть детали", "Haz clic en una ciudad para ver los detalles", "Clique numa cidade para ver detalhes", "Cliquez sur une ville pour les détails", "Stadt anklicken für Details", "Klik kota untuk butiran", "도시를 클릭하면 상세 정보가 표시됩니다", "都市をクリックすると詳細が表示されます", "انقر على مدينة لعرض التفاصيل", "Clicca una città per i dettagli", "Klik bandar untuk butiran", "Klik een stad voor details", "คลิกเมืองเพื่อดูรายละเอียด", "Ayrıntılar için bir şehre tıklayın", "Nhấp vào thành phố để xem chi tiết", "点击城市查看详情", "Kliknij miasto, aby zobaczyć szczegóły", "點擊城市查看詳情"],
    "noAlliances": ["No alliances yet — add one to start dividing the map.", "Альянсов пока нет — добавьте первый, чтобы делить карту.", "Aún no hay alianzas — añade una para empezar.", "Ainda não há alianças — adicione uma para começar.", "Aucune alliance — ajoutez-en une pour commencer.", "Noch keine Allianzen — füge eine hinzu.", "Belum ada aliansi — tambahkan satu untuk memulai.", "동맹이 없습니다 — 추가해서 배분을 시작하세요.", "同盟がありません — 追加して割り振りを始めましょう。", "لا توجد تحالفات بعد — أضف واحداً للبدء.", "Nessuna alleanza — aggiungine una per iniziare.", "Belum ada pakatan — tambah satu untuk mula.", "Nog geen allianties — voeg er één toe.", "ยังไม่มีพันธมิตร — เพิ่มเพื่อเริ่มแบ่งแผนที่", "Henüz ittifak yok — başlamak için ekleyin.", "Chưa có liên minh — hãy thêm một liên minh để bắt đầu.", "还没有联盟——添加一个开始划分地图。", "Brak sojuszy — dodaj jeden, aby zacząć.", "還沒有聯盟——新增一個開始劃分地圖。"],
    "save": ["Save", "Сохранить", "Guardar", "Salvar", "Enregistrer", "Speichern", "Simpan", "저장", "保存", "حفظ", "Salva", "Simpan", "Opslaan", "บันทึก", "Kaydet", "Lưu", "保存", "Zapisz", "儲存"],
    "delete": ["Delete", "Удалить", "Eliminar", "Excluir", "Supprimer", "Löschen", "Hapus", "삭제", "削除", "حذف", "Elimina", "Padam", "Verwijderen", "ลบ", "Sil", "Xóa", "删除", "Usuń", "刪除"],
    "zoomIn": ["Zoom in", "Приблизить", "Acercar", "Aproximar", "Zoom avant", "Vergrößern", "Perbesar", "확대", "拡大", "تكبير", "Ingrandisci", "Zum masuk", "Inzoomen", "ซูมเข้า", "Yakınlaştır", "Phóng to", "放大", "Powiększ", "放大"],
    "zoomOut": ["Zoom out", "Отдалить", "Alejar", "Afastar", "Zoom arrière", "Verkleinern", "Perkecil", "축소", "縮小", "تصغير", "Riduci", "Zum keluar", "Uitzoomen", "ซูมออก", "Uzaklaştır", "Thu nhỏ", "缩小", "Pomniejsz", "縮小"],
    "fit": ["Fit map", "Вписать карту", "Ajustar mapa", "Ajustar mapa", "Ajuster la carte", "Karte einpassen", "Pas peta", "지도 맞춤", "地図を合わせる", "ملاءمة الخريطة", "Adatta mappa", "Suaikan peta", "Kaart passend maken", "พอดีแผนที่", "Haritaya sığdır", "Vừa bản đồ", "适配地图", "Dopasuj mapę", "貼合地圖"],
    "total": ["Total", "Итого", "Total", "Total", "Total", "Gesamt", "Total", "합계", "合計", "الإجمالي", "Totale", "Jumlah", "Totaal", "รวม", "Toplam", "Tổng", "合计", "Razem", "合計"],
    "freeCities": ["Unclaimed", "Свободных", "Libres", "Livres", "Libres", "Frei", "Bebas", "미점령", "未占領", "غير محتل", "Libere", "Bebas", "Vrij", "ยังไม่มีเจ้าของ", "Boş", "Chưa chiếm", "未占领", "Wolne", "未佔領"],
    "heldCities": ["Claimed", "Занятых", "Ocupadas", "Ocupadas", "Occupées", "Besetzt", "Dikuasai", "점령", "占領済み", "محتلة", "Occupate", "Dikuasai", "Bezet", "ถูกยึด", "Alınmış", "Đã chiếm", "已占领", "Zajęte", "已佔領"],
    "hp": ["HP", "HP", "PV", "HP", "PV", "HP", "HP", "HP", "HP", "HP", "HP", "HP", "HP", "HP", "HP", "HP", "HP", "HP", "HP"],
    "garrison": ["Garrison", "Гарнизон", "Guarnición", "Guarnição", "Garnison", "Garnison", "Garnisun", "수비대", "守備隊", "الحامية", "Guarnigione", "Garnison", "Garnizoen", "กองทหาร", "Garnizon", "Đồn trú", "驻军", "Garnizon", "駐軍"],
    "copyOk": ["Copied!", "Скопировано!", "¡Copiado!", "Copiado!", "Copié !", "Kopiert!", "Tersalin!", "복사됨!", "コピーしました!", "تم النسخ!", "Copiato!", "Disalin!", "Gekopieerd!", "คัดลอกแล้ว!", "Kopyalandı!", "Đã sao chép!", "已复制！", "Skopiowano!", "已複製！"],
    "importOk": ["Plan imported", "План загружен", "Plan importado", "Plano importado", "Plan importé", "Plan importiert", "Pelan diimport", "계획 가져옴", "プランを読み込みました", "تم استيراد الخطة", "Piano importato", "Pelan diimport", "Plan geïmporteerd", "นำเข้าแผนแล้ว", "Plan içe aktarıldı", "Đã nhập kế hoạch", "方案已导入", "Plan zaimportowany", "方案已匯入"],
}

ALLIANCE_COLORS = ["#e11d48", "#f59e0b", "#84cc16", "#22d3ee", "#a78bfa", "#f472b6", "#38bdf8", "#fb923c", "#4ade80", "#c084fc", "#2dd4bf", "#facc15"]
ALLIANCE_ICONS = ["🛡️", "⚔️", "🐺", "🔥", "👑", "🦅", "🐉", "⚡", "🌑", "🦊", "🏹", "💀"]
LEVEL_COLORS = {1: "#1f844a", 2: "#e5d11a", 3: "#d25302", 4: "#7d3c98", 5: "#2e87c1", 6: "#c23a2c", 7: "#667c58"}
LEVEL_HP = {1: 50000, 2: 60000, 3: 80000, 4: 110000, 5: 150000, 6: 200000, 7: None}
LEVEL_GARRISON = {1: None, 2: None, 3: None, 4: None, 5: 80, 6: 100, 7: None}


def ts(value):
    return json.dumps(value, ensure_ascii=False)


def classify(text, lv):
    s = text.lower()
    if "gather" in s:
        k = "grain_gather"
    elif "train" in s:
        k = "training"
    elif "research" in s:
        k = "research"
    elif "bu" in s and "spd" in s and ("build" in s or "buit" in s):
        k = "building"
    elif "timber" in s:
        k = "timber_output"
    elif "herb" in s:
        k = "herb_output"
    elif "grain" in s or "gtain" in s or "graim" in s:
        k = "grain_output"
    else:
        raise ValueError("Unknown bonus: " + repr(text))
    m = re.search(r"(\d+)\s*%", text)
    v = int(m.group(1)) if m else {1: 5, 2: 5, 3: 10, 4: 15, 5: 20, 6: 20}[lv]
    return k, v


def main():
    geometry = json.load(open(GEOMETRY, encoding="utf-8"))
    terms = json.load(open(TERMS, encoding="utf-8"))
    local = {l: 0 for l in LANGS}

    def term(lang, key):
        if lang == "en":
            return None
        v = terms.get(lang, {}).get(key)
        if not v or not v.strip():
            return None
        return v

    # ---- localized bonus labels -------------------------------------------
    bonus_labels = {}
    for lang in LANGS:
        row = {}
        for k in BONUS_KEYS:
            full = FULL_EN[k]
            if lang != "en":
                raw = term(lang, TERM_KEYS[k])
                if raw:
                    full = raw.replace("↑", "").strip()
                    full = re.sub(r"\s*(III|3)$", "", full).strip()
                full = FULL_OVERRIDES.get(k, {}).get(lang, full)
            row[k] = {"full": full, "short": SHORT[k][LANGS.index(lang)]}
        bonus_labels[lang] = row

    # ---- generic city names ------------------------------------------------
    generic = {}
    for lang in LANGS:
        row = {}
        for lv in range(1, 7):
            key = GENERIC_EN[lv]
            value = terms.get(lang, {}).get(key) if lang != "en" else None
            if lang == "ar" or not value or value.strip().isupper():
                value = GENERIC_AR[lv] if lang == "ar" else None
            if not value:
                value = key
            row[lv] = value
        generic[lang] = row

    # ---- named cities ------------------------------------------------------
    named = {}
    for key in NAMED_KEYS:
        row = {}
        for lang in LANGS:
            row[lang] = term(lang, key) or key
        named[key] = row
    named["Royal City"] = ROYAL

    # ---- cities ------------------------------------------------------------
    cities = []
    for r in geometry:
        lv = r["lv"]
        rec = {
            "id": r["id"],
            "lv": lv,
            "poly": " ".join(f"{x},{y}" for x, y in r["poly"]),
            "lx": r["lx"], "ly": r["ly"],
            "bx": r["x"] + r["w"] - 15, "by": r["y"] + 15,
            "tiny": 1 if (r["w"] < 95 or r["h"] < 72) else 0,
        }
        if lv == 7:
            rec["bonus"] = ""
            rec["value"] = 0
            rec["name"] = "Royal City"
        else:
            k, v = classify(r["text"], lv)
            rec["bonus"] = k
            rec["value"] = v
            rec["name"] = NAME_BY_BONUS.get(k if lv == 6 else f"{k}@{lv}", "")
            local[lv] = local.get(lv, 0)
        cities.append(rec)

    # ---- emit --------------------------------------------------------------
    ui = {lang: {key: vals[LANGS.index(lang)] for key, vals in UI_ROWS.items()} for lang in LANGS}
    lines = []
    add = lines.append
    add("// AUTO-GENERATED by scripts/generate_city_map.py — do not edit by hand.")
    add("// Vector territories traced from the in-game city map infographic;")
    add("// bonus labels OCR'd from the same image; names/terms from game_terms.json.")
    add("")
    add("export type Lang = " + " | ".join(ts(l) for l in LANGS) + ";")
    add("export type BonusKey = " + " | ".join(ts(k) for k in BONUS_KEYS) + ";")
    add("export interface City {")
    add("  id: string; lv: number; bonus: BonusKey | ''; value: number;")
    add("  poly: string; lx: number; ly: number; bx: number; by: number;")
    add("  tiny: 0 | 1; name: string;")
    add("}")
    add("export const MAP_W = 1120;")
    add("export const MAP_H = 927;")
    add("export const LEVEL_COLORS: Record<number, string> = " + ts(LEVEL_COLORS) + ";")
    add("export const LEVEL_HP: Record<number, number | null> = " + ts(LEVEL_HP) + ";")
    add("export const LEVEL_GARRISON: Record<number, number | null> = " + ts(LEVEL_GARRISON) + ";")
    add("export const BONUS_KEYS: BonusKey[] = " + ts(BONUS_KEYS) + ";")
    add("export const ALLIANCE_COLORS: string[] = " + ts(ALLIANCE_COLORS) + ";")
    add("export const ALLIANCE_ICONS: string[] = " + ts(ALLIANCE_ICONS) + ";")
    add("export const BONUS_LABELS: Record<Lang, Record<BonusKey, { full: string; short: string }>> = " + ts(bonus_labels) + ";")
    add("export const GENERIC_NAMES: Record<Lang, Record<number, string>> = " + ts(generic) + ";")
    add("export const NAMED_CITIES: Record<string, Record<Lang, string>> = " + ts(named) + ";")
    add("export const UI: Record<Lang, Record<string, string>> = " + ts(ui) + ";")
    add("export const CITIES: City[] = [")
    for c in cities:
        add("  " + ts(c) + ",")
    add("];")
    add("")
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    open(OUT, "w", encoding="utf-8").write("\n".join(lines))
    print("wrote", OUT, "with", len(cities), "territories", os.path.getsize(OUT), "bytes")


if __name__ == "__main__":
    main()
