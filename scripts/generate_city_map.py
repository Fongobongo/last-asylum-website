"""
Generate site/src/data/cityMap.ts from the data extracted out of the game client.

Source of truth for the cities, levels, bonuses and coordinates:
  scripts/game_city_data.json
  (built from the client tables `MechCity` + `DefineBenefit`, plus the localized
  `MechCity` name tables. `x`/`y` are the in-game map coordinates, 0-1000.)

Territory outlines are not stored by the client, so they are derived here: each
city owns the Voronoi cell around its real map position, clipped to the map
frame. Cells share exact edges, so the map is a gap-free partition.

Source of truth for the bonus translations:
  game_terms.json  (strings extracted from the game client, 18 languages)
  + the hand-written UI dictionaries below (19 languages).

Run:  python scripts/generate_city_map.py
"""

import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAME_DATA = os.path.join(ROOT, "scripts", "game_city_data.json")
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
    "sourceNote": ["Levels, colours and bonuses follow the in-game city map (client v1.0.102). Ownership is a local planning tool, not live game data.", "Уровни, цвета и бонусы соответствуют игровой карте (клиент v1.0.102). Владения — локальный инструмент планирования, не данные из игры.", "Niveles, colores y bonificaciones según el mapa del juego (cliente v1.0.102). La posesión es una herramienta local, no datos en vivo.", "Níveis, cores e bônus conforme o mapa do jogo (cliente v1.0.102). A posse é uma ferramenta local, não dados ao vivo.", "Niveaux, couleurs et bonus d'après la carte du jeu (client v1.0.102). La possession est un outil local, pas des données en direct.", "Stufen, Farben und Boni nach der Spielkarte (Client v1.0.102). Besitz ist ein lokales Planungswerkzeug, keine Live-Daten.", "Level, warna dan bonus mengikut peta dalam game (klien v1.0.102). Kepemilikan adalah alat perencanaan lokal, bukan data langsung.", "레벨·색상·보너스는 게임 내 지도(클라이언트 v1.0.102) 기준입니다. 소유 표시는 로컬 계획 도구이며 실시간 데이터가 아닙니다.", "レベル・色・ボーナスはゲーム内マップ（クライアント v1.0.102）準拠。領地表示はローカルの計画ツールで、リアルタイムデータではありません。", "المستويات والألوان والمكافآت حسب خريطة اللعبة (العميل v1.0.102). الملكية أداة تخطيط محلية وليست بيانات مباشرة.", "Livelli, colori e bonus secondo la mappa di gioco (client v1.0.102). Il possesso è uno strumento locale, non dati live.", "Tahap, warna dan bonus mengikut peta dalam permainan (klien v1.0.102). Pemilikan ialah alat perancangan tempatan, bukan data langsung.", "Levels, kleuren en bonussen volgen de spelkaart (client v1.0.102). Bezit is een lokaal planningshulpmiddel, geen live data.", "เลเวล สี และโบนัสอิงแผนที่ในเกม (ไคลเอนต์ v1.0.102) การถือครองเป็นเครื่องมือวางแผนในเครื่อง ไม่ใช่ข้อมูลสด", "Seviyeler, renkler ve bonuslar oyun haritasına (istemci v1.0.102) göredir. Sahiplik yerel bir planlama aracıdır, canlı veri değildir.", "Cấp độ, màu và bonus theo bản đồ trong game (client v1.0.102). Quyền sở hữu là công cụ lập kế hoạch cục bộ, không phải dữ liệu trực tiếp.", "等级、颜色与加成依据游戏内地图（客户端 v1.0.102）。归属标记为本地规划工具，并非实时游戏数据。", "Poziomy, kolory i bonusy wg mapy gry (klient v1.0.102). Przynależność to lokalne narzędzie planowania, nie dane na żywo.", "等級、顏色與加成依據遊戲內地圖（客戶端 v1.0.102）。歸屬標記為本機規劃工具，並非即時遊戲資料。"],
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
    "stage": ["Stage", "Этап", "Fase", "Fase", "Phase", "Phase", "Tahap", "단계", "段階", "المرحلة", "Fase", "Peringkat", "Fase", "ด่าน", "Aşama", "Giai đoạn", "阶段", "Etap", "階段"],
    "unlocked": ["Unlocked", "Открыто", "Desbloqueado", "Desbloqueado", "Débloqué", "Freigeschaltet", "Terbuka", "해금", "解放済み", "مفتوح", "Sbloccato", "Dibuka", "Ontgrendeld", "ปลดล็อก", "Açıldı", "Mở khóa", "已解锁", "Odblokowane", "已解鎖"],
    "locked": ["Locked", "Закрыто", "Bloqueado", "Bloqueado", "Verrouillé", "Gesperrt", "Terkunci", "잠김", "未解放", "مغلق", "Bloccato", "Dikunci", "Vergrendeld", "ล็อก", "Kilitli", "Bị khóa", "未解锁", "Zablokowane", "未解鎖"],
    "myMaps": ["My maps", "Мои карты", "Mis mapas", "Meus mapas", "Mes cartes", "Meine Karten", "Peta saya", "내 지도", "マイマップ", "خرائطي", "Le mie mappe", "Peta saya", "Mijn kaarten", "แผนที่ของฉัน", "Haritalarım", "Bản đồ của tôi", "我的地图", "Moje mapy", "我的地圖"],
    "newMap": ["New map", "Новая карта", "Nuevo mapa", "Novo mapa", "Nouvelle carte", "Neue Karte", "Peta baru", "새 지도", "新しいマップ", "خريطة جديدة", "Nuova mappa", "Peta baharu", "Nieuwe kaart", "แผนที่ใหม่", "Yeni harita", "Bản đồ mới", "新建地图", "Nowa mapa", "新增地圖"],
    "saveOnline": ["Save online", "Сохранить на сайт", "Guardar en línea", "Salvar online", "Enregistrer en ligne", "Online speichern", "Simpan daring", "온라인 저장", "オンライン保存", "حفظ عبر الإنترنت", "Salva online", "Simpan atas talian", "Online opslaan", "บันทึกออนไลน์", "Çevrimiçi kaydet", "Lưu trực tuyến", "保存到网站", "Zapisz online", "儲存到網站"],
    "saveAs": ["Save as", "Сохранить как", "Guardar como", "Salvar como", "Enregistrer sous", "Speichern unter", "Simpan sebagai", "다른 이름으로 저장", "名前を付けて保存", "حفظ باسم", "Salva come", "Simpan sebagai", "Opslaan als", "บันทึกเป็น", "Farklı kaydet", "Lưu thành", "另存为", "Zapisz jako", "另存為"],
    "forkMap": ["Fork", "Форк", "Bifurcar", "Bifurcar", "Dupliquer", "Fork", "Bercabang", "포크", "フォーク", "نسخة", "Fork", "Cabang", "Fork", "แตกสาขา", "Çatalla", "Tách nhánh", "分叉", "Utwórz wariant", "分叉"],
    "copyLink": ["Copy link", "Скопировать ссылку", "Copiar enlace", "Copiar link", "Copier le lien", "Link kopieren", "Salin tautan", "링크 복사", "リンクをコピー", "نسخ الرابط", "Copia link", "Salin pautan", "Link kopiëren", "คัดลอกลิงก์", "Bağlantıyı kopyala", "Sao chép liên kết", "复制链接", "Kopiuj link", "複製連結"],
    "access": ["Access", "Доступ", "Acceso", "Acesso", "Accès", "Zugriff", "Akses", "접근 권한", "アクセス", "الصلاحيات", "Accesso", "Akses", "Toegang", "สิทธิ์", "Erişim", "Quyền truy cập", "访问权限", "Dostęp", "存取權限"],
    "readOnly": ["Read-only", "Только чтение", "Solo lectura", "Somente leitura", "Lecture seule", "Nur lesen", "Hanya baca", "읽기 전용", "読み取り専用", "للقراءة فقط", "Sola lettura", "Baca sahaja", "Alleen lezen", "อ่านอย่างเดียว", "Salt okunur", "Chỉ đọc", "只读", "Tylko do odczytu", "唯讀"],
    "canEdit": ["Editing", "Редактирование", "Edición", "Edição", "Édition", "Bearbeiten", "Pengeditan", "편집 가능", "編集可能", "التحرير", "Modifica", "Penyuntingan", "Bewerken", "แก้ไขได้", "Düzenleme", "Chỉnh sửa", "可编辑", "Edycja", "可編輯"],
    "unlock": ["Unlock", "Разблокировать", "Desbloquear", "Desbloquear", "Déverrouiller", "Entsperren", "Buka kunci", "잠금 해제", "ロック解除", "فتح القفل", "Sblocca", "Buka kunci", "Ontgrendelen", "ปลดล็อก", "Kilidi aç", "Mở khóa", "解锁", "Odblokuj", "解鎖"],
    "password": ["Password", "Пароль", "Contraseña", "Senha", "Mot de passe", "Passwort", "Kata sandi", "비밀번호", "パスワード", "كلمة المرور", "Password", "Kata laluan", "Wachtwoord", "รหัสผ่าน", "Şifre", "Mật khẩu", "密码", "Hasło", "密碼"],
    "readPassword": ["View password", "Пароль на просмотр", "Contraseña de lectura", "Senha de leitura", "Mot de passe de lecture", "Lese-Passwort", "Kata sandi baca", "열람 비밀번호", "閲覧パスワード", "كلمة مرور القراءة", "Password di lettura", "Kata laluan baca", "Leeswachtwoord", "รหัสผ่านอ่าน", "Okuma şifresi", "Mật khẩu xem", "查看密码", "Hasło do odczytu", "檢視密碼"],
    "writePassword": ["Edit password", "Пароль на запись", "Contraseña de edición", "Senha de edição", "Mot de passe d'édition", "Bearbeitungs-Passwort", "Kata sandi sunting", "편집 비밀번호", "編集パスワード", "كلمة مرور التحرير", "Password di modifica", "Kata laluan sunting", "Bewerkwachtwoord", "รหัสผ่านแก้ไข", "Düzenleme şifresi", "Mật khẩu sửa", "编辑密码", "Hasło do edycji", "編輯密碼"],
    "accessPublic": ["Anyone with the link", "Все по ссылке", "Cualquiera con el enlace", "Qualquer pessoa com o link", "Toute personne avec le lien", "Jeder mit dem Link", "Siapa pun dengan tautan", "링크를 가진 누구나", "リンクを持つ全員", "أي شخص لديه الرابط", "Chiunque con il link", "Sesiapa dengan pautan", "Iedereen met de link", "ใครก็ได้ที่มีลิงก์", "Bağlantıya sahip herkes", "Ai có liên kết", "任何有链接的人", "Każdy z linkiem", "任何有連結的人"],
    "accessNone": ["Owner only", "Только владелец", "Solo el propietario", "Apenas o dono", "Propriétaire seulement", "Nur Besitzer", "Hanya pemilik", "소유자만", "所有者のみ", "المالك فقط", "Solo proprietario", "Pemilik sahaja", "Alleen eigenaar", "เฉพาะเจ้าของ", "Yalnızca sahip", "Chỉ chủ sở hữu", "仅所有者", "Tylko właściciel", "僅擁有者"],
    "ownerKey": ["Owner key", "Ключ владельца", "Clave de propietario", "Chave do dono", "Clé du propriétaire", "Besitzerschlüssel", "Kunci pemilik", "소유자 키", "所有者キー", "مفتاح المالك", "Chiave proprietario", "Kunci pemilik", "Eigenaarssleutel", "คีย์เจ้าของ", "Sahip anahtarı", "Khóa chủ sở hữu", "所有者密钥", "Klucz właściciela", "擁有者金鑰"],
    "mapName": ["Map name", "Название карты", "Nombre del mapa", "Nome do mapa", "Nom de la carte", "Kartenname", "Nama peta", "지도 이름", "マップ名", "اسم الخريطة", "Nome mappa", "Nama peta", "Kaartnaam", "ชื่อแผนที่", "Harita adı", "Tên bản đồ", "地图名称", "Nazwa mapy", "地圖名稱"],
    "server": ["Server", "Сервер", "Servidor", "Servidor", "Serveur", "Server", "Server", "서버", "サーバー", "الخادم", "Server", "Pelayan", "Server", "เซิร์ฟเวอร์", "Sunucu", "Máy chủ", "服务器", "Serwer", "伺服器"],
    "localDraft": ["Local draft", "Локальный черновик", "Borrador local", "Rascunho local", "Brouillon local", "Lokaler Entwurf", "Draf lokal", "로컬 초안", "ローカル下書き", "مسودة محلية", "Bozza locale", "Draf tempatan", "Lokaal concept", "ร่างในเครื่อง", "Yerel taslak", "Bản nháp cục bộ", "本地草稿", "Lokalny szkic", "本機草稿"],
    "onlineSaved": ["Saved online", "Сохранено на сайте", "Guardado en línea", "Salvo online", "Enregistré en ligne", "Online gespeichert", "Tersimpan daring", "온라인 저장됨", "オンライン保存済み", "محفوظ عبر الإنترنت", "Salvato online", "Disimpan atas talian", "Online opgeslagen", "บันทึกออนไลน์แล้ว", "Çevrimiçi kaydedildi", "Đã lưu trực tuyến", "已保存到网站", "Zapisano online", "已儲存到網站"],
    "offlineSaved": ["Saved locally (offline)", "Сохранено локально (офлайн)", "Guardado localmente", "Salvo localmente", "Enregistré localement", "Lokal gespeichert", "Disimpan setempat", "로컬에 저장됨", "ローカル保存（オフライン）", "حفظ محلياً", "Salvato in locale", "Disimpan setempat", "Lokaal opgeslagen", "บันทึกในเครื่อง", "Yerel kaydedildi", "Đã lưu cục bộ", "已本地保存", "Zapisano lokalnie", "已本機儲存"],
    "deleteConfirm": ["Delete this map?", "Удалить эту карту?", "¿Eliminar este mapa?", "Excluir este mapa?", "Supprimer cette carte ?", "Diese Karte löschen?", "Hapus peta ini?", "이 지도를 삭제할까요?", "このマップを削除しますか？", "حذف هذه الخريطة؟", "Eliminare questa mappa?", "Padam peta ini?", "Deze kaart verwijderen?", "ลบแผนที่นี้ใช่ไหม?", "Bu haritayı sil?", "Xóa bản đồ này?", "删除这张地图？", "Usunąć tę mapę?", "刪除這張地圖？"],
    "copyPrev": ["Copy previous stage", "Скопировать предыдущий этап", "Copiar fase anterior", "Copiar fase anterior", "Copier la phase précédente", "Vorherige Phase kopieren", "Salin tahap sebelumnya", "이전 단계 복사", "前の段階をコピー", "نسخ المرحلة السابقة", "Copia fase precedente", "Salin peringkat sebelumnya", "Vorige fase kopiëren", "คัดลอกด่านก่อนหน้า", "Önceki aşamayı kopyala", "Sao chép giai đoạn trước", "复制上一阶段", "Kopiuj poprzedni etap", "複製上一階段"],
    "publicMaps": ["Public maps", "Публичные карты", "Mapas públicos", "Mapas públicos", "Cartes publiques", "Öffentliche Karten", "Peta publik", "공개 지도", "公開マップ", "الخرائط العامة", "Mappe pubbliche", "Peta awam", "Openbare kaarten", "แผนที่สาธารณะ", "Herkese açık haritalar", "Bản đồ công khai", "公开地图", "Mapy publiczne", "公開地圖"],
    "noMaps": ["No saved maps yet", "Сохранённых карт пока нет", "Aún no hay mapas", "Nenhum mapa salvo", "Aucune carte enregistrée", "Noch keine Karten", "Belum ada peta", "저장된 지도 없음", "保存済みマップなし", "لا توجد خرائط محفوظة", "Nessuna mappa salvata", "Tiada peta disimpan", "Nog geen kaarten", "ยังไม่มีแผนที่", "Kayıtlı harita yok", "Chưa có bản đồ nào", "还没有保存的地图", "Brak zapisanych map", "還沒有儲存的地圖"],
    "enterPassword": ["Enter password", "Введите пароль", "Introduce la contraseña", "Digite a senha", "Saisissez le mot de passe", "Passwort eingeben", "Masukkan kata sandi", "비밀번호 입력", "パスワードを入力", "أدخل كلمة المرور", "Inserisci la password", "Masukkan kata laluan", "Voer wachtwoord in", "ใส่รหัสผ่าน", "Şifre girin", "Nhập mật khẩu", "输入密码", "Wpisz hasło", "輸入密碼"],
    "badPassword": ["Wrong password", "Неверный пароль", "Contraseña incorrecta", "Senha incorreta", "Mot de passe incorrect", "Falsches Passwort", "Kata sandi salah", "비밀번호 오류", "パスワードが違います", "كلمة مرور خاطئة", "Password errata", "Kata laluan salah", "Onjuist wachtwoord", "รหัสผ่านผิด", "Yanlış şifre", "Sai mật khẩu", "密码错误", "Błędne hasło", "密碼錯誤"],
    "readLockedMsg": ["This map needs a view password", "Для просмотра карты нужен пароль", "Este mapa requiere contraseña de lectura", "Este mapa exige senha de leitura", "Cette carte nécessite un mot de passe de lecture", "Diese Karte benötigt ein Lese-Passwort", "Peta ini memerlukan kata sandi baca", "열람 비밀번호가 필요합니다", "閲覧パスワードが必要です", "تتطلب هذه الخريطة كلمة مرور للقراءة", "Questa mappa richiede la password di lettura", "Peta ini memerlukan kata laluan baca", "Deze kaart vereist een leeswachtwoord", "แผนที่นี้ต้องใช้รหัสผ่านอ่าน", "Bu harita için okuma şifresi gerekli", "Bản đồ này cần mật khẩu xem", "此地图需要查看密码", "Ta mapa wymaga hasła do odczytu", "此地圖需要檢視密碼"],
    "writeLockedMsg": ["Editing needs a password", "Для редактирования нужен пароль", "Editar requiere contraseña", "Editar exige senha", "La modification nécessite un mot de passe", "Bearbeiten benötigt ein Passwort", "Penyuntingan memerlukan kata sandi", "편집하려면 비밀번호가 필요합니다", "編集にはパスワードが必要です", "التحرير يتطلب كلمة مرور", "La modifica richiede la password", "Penyuntingan memerlukan kata laluan", "Bewerken vereist een wachtwoord", "การแก้ไขต้องใช้รหัสผ่าน", "Düzenleme için şifre gerekli", "Chỉnh sửa cần mật khẩu", "编辑需要密码", "Edycja wymaga hasła", "編輯需要密碼"],
    "conflictMsg": ["Map changed elsewhere — reloaded", "Карта изменена в другом месте — обновлено", "El mapa cambió en otro lugar — recargado", "O mapa mudou noutro lugar — recarregado", "Carte modifiée ailleurs — rechargée", "Karte woanders geändert — neu geladen", "Peta diubah di tempat lain — dimuat semula", "다른 곳에서 변경되어 다시 불러왔습니다", "別の場所で変更されたため再読み込み", "تم تعديل الخريطة في مكان آخر — أُعيد التحميل", "Mappa modificata altrove — ricaricata", "Peta diubah di tempat lain — dimuat semula", "Kaart elders gewijzigd — herladen", "แผนที่ถูกแก้ที่อื่น — โหลดใหม่", "Harita başka yerde değişti — yenilendi", "Bản đồ đã thay đổi ở nơi khác — đã tải lại", "地图在其他地方被修改，已重新加载", "Mapa zmieniona gdzie indziej — wczytano ponownie", "地圖在別處被修改，已重新載入"],
    "forkFrom": ["Fork of", "Форк карты", "Bifurcación de", "Bifurcação de", "Copie de", "Fork von", "Cabang dari", "포크 원본", "フォーク元", "نسخة من", "Fork di", "Cabang daripada", "Fork van", "แตกสาขาจาก", "Şundan çatallandı", "Tách nhánh từ", "分叉自", "Wariant mapy", "分叉自"],
    "mapSavedMsg": ["Map saved. Share the link so others can edit it too.", "Карта сохранена. Поделитесь ссылкой, чтобы другие тоже могли редактировать.", "Mapa guardado. Comparte el enlace para que otros puedan editarlo.", "Mapa salvo. Compartilhe o link para que outros também editem.", "Carte enregistrée. Partagez le lien pour que d'autres puissent la modifier.", "Karte gespeichert. Teile den Link, damit andere sie ebenfalls bearbeiten können.", "Peta tersimpan. Bagikan tautan agar orang lain bisa ikut mengedit.", "지도가 저장되었습니다. 링크를 공유하면 다른 사람도 편집할 수 있습니다.", "マップを保存しました。リンクを共有すれば他の人も編集できます。", "تم حفظ الخريطة. شارك الرابط ليتمكن الآخرون من التحرير.", "Mappa salvata. Condividi il link per consentire ad altri di modificarla.", "Peta disimpan. Kongsi pautan supaya orang lain boleh menyunting.", "Kaart opgeslagen. Deel de link zodat anderen ook kunnen bewerken.", "บันทึกแผนที่แล้ว แชร์ลิงก์ให้คนอื่นแก้ไขได้ด้วย", "Harita kaydedildi. Başkaları da düzenleyebilsin diye bağlantıyı paylaşın.", "Đã lưu bản đồ. Chia sẻ liên kết để người khác cùng chỉnh sửa.", "地图已保存。分享链接后其他人也可以编辑。", "Mapa zapisana. Udostępnij link, by inni też mogli edytować.", "地圖已儲存。分享連結讓其他人也能編輯。"],
    "openMap": ["Open", "Открыть", "Abrir", "Abrir", "Ouvrir", "Öffnen", "Buka", "열기", "開く", "فتح", "Apri", "Buka", "Openen", "เปิด", "Aç", "Mở", "打开", "Otwórz", "開啟"],
    "cancel": ["Cancel", "Отмена", "Cancelar", "Cancelar", "Annuler", "Abbrechen", "Batal", "취소", "キャンセル", "إلغاء", "Annulla", "Batal", "Annuleren", "ยกเลิก", "İptal", "Hủy", "取消", "Anuluj", "取消"],
    "ok": ["OK", "ОК", "Aceptar", "OK", "OK", "OK", "OK", "확인", "OK", "حسناً", "OK", "OK", "OK", "ตกลง", "Tamam", "OK", "确定", "OK", "確定"],
    "forkHint": ["Creates an independent copy of all 7 stages", "Создаёт независимую копию всех 7 состояний", "Crea una copia independiente de las 7 fases", "Cria uma cópia independente das 7 fases", "Crée une copie indépendante des 7 phases", "Erstellt eine unabhängige Kopie aller 7 Phasen", "Membuat salinan independen dari 7 tahap", "7개 단계의 독립 사본을 만듭니다", "7つの段階の独立したコピーを作成", "ينشئ نسخة مستقلة من المراحل السبع", "Crea una copia indipendente delle 7 fasi", "Mencipta salinan bebas bagi 7 peringkat", "Maakt een onafhankelijke kopie van alle 7 fasen", "สร้างสำเนาอิสระของทั้ง 7 ด่าน", "7 aşamanın bağımsız bir kopyasını oluşturur", "Tạo bản sao độc lập của cả 7 giai đoạn", "创建包含全部 7 个阶段的独立副本", "Tworzy niezależną kopię wszystkich 7 etapów", "建立包含全部 7 個階段的獨立副本"],
    "maps": ["Maps", "Карты", "Mapas", "Mapas", "Cartes", "Karten", "Peta", "지도", "マップ", "الخرائط", "Mappe", "Peta", "Kaarten", "แผนที่", "Haritalar", "Bản đồ", "地图", "Mapy", "地圖"],
    "settings": ["Settings", "Настройки", "Ajustes", "Configurações", "Paramètres", "Einstellungen", "Pengaturan", "설정", "設定", "الإعدادات", "Impostazioni", "Tetapan", "Instellingen", "การตั้งค่า", "Ayarlar", "Cài đặt", "设置", "Ustawienia", "設定"],
    "loading": ["Loading…", "Загрузка…", "Cargando…", "Carregando…", "Chargement…", "Lädt…", "Memuat…", "불러오는 중…", "読み込み中…", "جارٍ التحميل…", "Caricamento…", "Memuat…", "Laden…", "กำลังโหลด…", "Yükleniyor…", "Đang tải…", "加载中…", "Ładowanie…", "載入中…"],
    "apiOffline": ["Online storage is unavailable — changes stay in this browser.", "Онлайн-хранилище недоступно — изменения остаются в этом браузере.", "El almacenamiento en línea no está disponible — los cambios quedan en este navegador.", "O armazenamento online está indisponível — as alterações ficam neste navegador.", "Le stockage en ligne est indisponible — les modifications restent dans ce navigateur.", "Online-Speicher nicht verfügbar — Änderungen bleiben in diesem Browser.", "Penyimpanan daring tidak tersedia — perubahan tersimpan di browser ini.", "온라인 저장소를 사용할 수 없어 변경 내용이 이 브라우저에 남습니다.", "オンライン保存が利用できません — 変更はこのブラウザに残ります.", "التخزين عبر الإنترنت غير متاح — ستبقى التغييرات في هذا المتصفح.", "Archiviazione online non disponibile — le modifiche restano in questo browser.", "Storan atas talian tidak tersedia — perubahan kekal dalam pelayar ini.", "Online opslag niet beschikbaar — wijzigingen blijven in deze browser.", "พื้นที่จัดเก็บออนไลน์ไม่พร้อมใช้งาน — การเปลี่ยนแปลงอยู่ในเบราว์เซอร์นี้", "Çevrimiçi depolama kullanılamıyor — değişiklikler bu tarayıcıda kalır.", "Lưu trữ trực tuyến không khả dụng — thay đổi được giữ trong trình duyệt này.", "在线存储不可用，更改将保留在此浏览器中。", "Magazyn online niedostępny — zmiany zostają w tej przeglądarce.", "線上儲存無法使用，變更會保留在此瀏覽器中。"],
    "saveFailed": ["Could not save online", "Не удалось сохранить на сайт", "No se pudo guardar en línea", "Não foi possível salvar online", "Enregistrement en ligne impossible", "Online-Speichern fehlgeschlagen", "Gagal menyimpan daring", "온라인 저장 실패", "オンライン保存に失敗", "تعذر الحفظ عبر الإنترنت", "Salvataggio online non riuscito", "Gagal simpan atas talian", "Online opslaan mislukt", "บันทึกออนไลน์ไม่สำเร็จ", "Çevrimiçi kaydedilemedi", "Không thể lưu trực tuyến", "无法保存到网站", "Nie udało się zapisać online", "無法儲存到網站"],
    "unlockedLevels": ["Unlocked: Lv.1–{n}", "Открыто: уровни 1–{n}", "Desbloqueado: niveles 1–{n}", "Desbloqueado: níveis 1–{n}", "Débloqué : niveaux 1–{n}", "Freigeschaltet: Stufen 1–{n}", "Terbuka: Level 1–{n}", "해금: 레벨 1–{n}", "解放: レベル 1–{n}", "المفتوح: المستويات 1–{n}", "Sbloccato: livelli 1–{n}", "Dibuka: Tahap 1–{n}", "Ontgrendeld: levels 1–{n}", "ปลดล็อก: เลเวล 1–{n}", "Açık: Seviye 1–{n}", "Mở khóa: Cấp 1–{n}", "已解锁：1–{n} 级", "Odblokowane: poziomy 1–{n}", "已解鎖：1–{n} 級"],
    "protectRead": ["Protect viewing with a password", "Защитить просмотр паролем", "Proteger la vista con contraseña", "Proteger a visualização com senha", "Protéger la lecture par mot de passe", "Lesen mit Passwort schützen", "Lindungi tampilan dengan kata sandi", "비밀번호로 열람 보호", "閲覧をパスワードで保護", "حماية العرض بكلمة مرور", "Proteggi la lettura con password", "Lindungi paparan dengan kata laluan", "Lezen met wachtwoord beveiligen", "ป้องกันการดูด้วยรหัสผ่าน", "Görüntülemeyi şifreyle koru", "Bảo vệ xem bằng mật khẩu", "使用密码保护查看", "Chroń odczyt hasłem", "使用密碼保護檢視"],
    "protectWrite": ["Protect editing with a password", "Защитить редактирование паролем", "Proteger la edición con contraseña", "Proteger a edição com senha", "Protéger l'édition par mot de passe", "Bearbeiten mit Passwort schützen", "Lindungi penyuntingan dengan kata sandi", "비밀번호로 편집 보호", "編集をパスワードで保護", "حماية التحرير بكلمة مرور", "Proteggi la modifica con password", "Lindungi penyuntingan dengan kata laluan", "Bewerken met wachtwoord beveiligen", "ป้องกันการแก้ไขด้วยรหัสผ่าน", "Düzenlemeyi şifreyle koru", "Bảo vệ chỉnh sửa bằng mật khẩu", "使用密码保护编辑", "Chroń edycję hasłem", "使用密碼保護編輯"],
    "passwordOptional": ["Leave empty to keep the current password", "Оставьте пустым, чтобы сохранить текущий пароль", "Déjalo vacío para conservar la contraseña actual", "Deixe vazio para manter a senha atual", "Laissez vide pour conserver le mot de passe actuel", "Leer lassen, um das aktuelle Passwort zu behalten", "Biarkan kosong untuk menyimpan kata sandi saat ini", "현재 비밀번호를 유지하려면 비워 두세요", "現在のパスワードを保つには空のまま", "اتركه فارغاً للاحتفاظ بكلمة المرور الحالية", "Lascia vuoto per mantenere la password attuale", "Biarkan kosong untuk mengekalkan kata laluan semasa", "Leeg laten om het huidige wachtwoord te behouden", "เว้นว่างเพื่อเก็บรหัสผ่านเดิม", "Mevcut şifreyi korumak için boş bırakın", "Để trống để giữ mật khẩu hiện tại", "留空以保留当前密码", "Pozostaw puste, aby zachować obecne hasło", "留空以保留目前密碼"],
    "create": ["Create", "Создать", "Crear", "Criar", "Créer", "Erstellen", "Buat", "만들기", "作成", "إنشاء", "Crea", "Cipta", "Aanmaken", "สร้าง", "Oluştur", "Tạo", "创建", "Utwórz", "建立"],
    "close": ["Close", "Закрыть", "Cerrar", "Fechar", "Fermer", "Schließen", "Tutup", "닫기", "閉じる", "إغلاق", "Chiudi", "Tutup", "Sluiten", "ปิด", "Kapat", "Đóng", "关闭", "Zamknij", "關閉"],
    "deleteMap": ["Delete map", "Удалить карту", "Eliminar mapa", "Excluir mapa", "Supprimer la carte", "Karte löschen", "Hapus peta", "지도 삭제", "マップを削除", "حذف الخريطة", "Elimina mappa", "Padam peta", "Kaart verwijderen", "ลบแผนที่", "Haritayı sil", "Xóa bản đồ", "删除地图", "Usuń mapę", "刪除地圖"],
    "forkDone": ["Variant created", "Вариант создан", "Variante creada", "Variante criada", "Variante créée", "Variante erstellt", "Varian dibuat", "변형이 생성되었습니다", "別バリアントを作成しました", "تم إنشاء النسخة", "Variante creata", "Varian dicipta", "Variant aangemaakt", "สร้าง Variant แล้ว", "Varyant oluşturuldu", "Đã tạo biến thể", "已创建变体", "Utworzono wariant", "已建立變體"],
    "ownerOnlyMsg": ["Only the owner can edit this map", "Только владелец может редактировать эту карту", "Solo el propietario puede editar este mapa", "Apenas o dono pode editar este mapa", "Seul le propriétaire peut modifier cette carte", "Nur der Besitzer kann diese Karte bearbeiten", "Hanya pemilik yang dapat menyunting peta ini", "소유자만 이 지도를 편집할 수 있습니다", "所有者のみこのマップを編集できます", "المالك فقط يمكنه تحرير هذه الخريطة", "Solo il proprietario può modificare questa mappa", "Hanya pemilik boleh menyunting peta ini", "Alleen de eigenaar kan deze kaart bewerken", "เฉพาะเจ้าของที่แก้ไขแผนที่นี้ได้", "Yalnızca sahip bu haritayı düzenleyebilir", "Chỉ chủ sở hữu mới được chỉnh sửa bản đồ này", "仅所有者可编辑此地图", "Tylko właściciel może edytować tę mapę", "僅擁有者可編輯此地圖"],
    "readMode": ["Who can view", "Кто может смотреть", "Quién puede ver", "Quem pode ver", "Qui peut voir", "Wer darf ansehen", "Siapa yang boleh melihat", "볼 수 있는 사람", "閲覧できる人", "من يمكنه العرض", "Chi può vedere", "Siapa boleh melihat", "Wie mag bekijken", "ใครดูได้", "Kim görebilir", "Ai có thể xem", "谁可以查看", "Kto może oglądać", "誰可以檢視"],
    "writeMode": ["Who can edit", "Кто может редактировать", "Quién puede editar", "Quem pode editar", "Qui peut modifier", "Wer darf bearbeiten", "Siapa yang boleh menyunting", "편집할 수 있는 사람", "編集できる人", "من يمكنه التحرير", "Chi può modificare", "Siapa boleh menyunting", "Wie mag bewerken", "ใครแก้ได้", "Kim düzenleyebilir", "Ai có thể chỉnh sửa", "谁可以编辑", "Kto może edytować", "誰可以編輯"],
    "noPassword": ["No password", "Без пароля", "Sin contraseña", "Sem senha", "Sans mot de passe", "Ohne Passwort", "Tanpa kata sandi", "비밀번호 없음", "パスワードなし", "بدون كلمة مرور", "Senza password", "Tiada kata laluan", "Geen wachtwoord", "ไม่มีรหัสผ่าน", "Şifre yok", "Không có mật khẩu", "无密码", "Bez hasła", "無密碼"],
    "hasPassword": ["Password set", "Пароль установлен", "Contraseña establecida", "Senha definida", "Mot de passe défini", "Passwort gesetzt", "Kata sandi diatur", "비밀번호 설정됨", "パスワード設定済み", "تم تعيين كلمة المرور", "Password impostata", "Kata laluan ditetapkan", "Wachtwoord ingesteld", "ตั้งรหัสผ่านแล้ว", "Şifre ayarlandı", "Đã đặt mật khẩu", "已设置密码", "Hasło ustawione", "已設定密碼"],
    "noBonus": ["No bonus", "Без бонуса", "Sin bonificación", "Sem bônus", "Sans bonus", "Kein Bonus", "Tanpa bonus", "보너스 없음", "ボーナスなし", "بدون مكافأة", "Nessun bonus", "Tiada bonus", "Geen bonus", "ไม่มีโบนัส", "Bonus yok", "Không có thưởng", "无加成", "Bez bonusu", "無加成"],
    "cityName": ["City", "Город", "Ciudad", "Cidade", "Ville", "Stadt", "Kota", "도시", "都市", "مدينة", "Città", "Bandar", "Stad", "เมือง", "Şehir", "Thành phố", "城市", "Miasto", "城市"],
}

# Bonus pictograms and their base hues. The client derives saturation from the
# bonus value: +5% is a muted shade, +20% is a vivid, fully saturated one.
BONUS_ICONS = {
    "grain_output": "🌾", "timber_output": "🪵", "herb_output": "🌿",
    "grain_gather": "🧺", "training": "⚔️", "research": "🔬", "building": "🏗️",
}
BONUS_HUES = {
    "grain_output": 42, "timber_output": 24, "herb_output": 140,
    "grain_gather": 186, "training": 356, "research": 212, "building": 272,
}

ALLIANCE_COLORS = ["#e11d48", "#f59e0b", "#84cc16", "#22d3ee", "#a78bfa", "#f472b6", "#38bdf8", "#fb923c", "#4ade80", "#c084fc", "#2dd4bf", "#facc15"]
ALLIANCE_ICONS = ["🛡️", "⚔️", "🐺", "🔥", "👑", "🦅", "🐉", "⚡", "🌑", "🦊", "🏹", "💀"]
LEVEL_COLORS = {1: "#1f844a", 2: "#e5d11a", 3: "#d25302", 4: "#7d3c98", 5: "#2e87c1", 6: "#c23a2c", 7: "#667c58"}
LEVEL_HP = {1: 50000, 2: 60000, 3: 80000, 4: 110000, 5: 150000, 6: 200000, 7: None}
LEVEL_GARRISON = {1: None, 2: None, 3: None, 4: None, 5: 80, 6: 100, 7: None}


def ts(value):
    return json.dumps(value, ensure_ascii=False)


# ── map geometry ────────────────────────────────────────────────────────────
# The client stores one map position per city (0-1000 on both axes) but no
# polygons, so the territory outlines are derived from those positions: every
# city owns the Voronoi cell around its real coordinates. Cells share exact
# edges, which makes the result a gap-free, overlap-free partition.
FRAME_PAD = 34.0
MARGIN = 12.0


def _clip(poly, nx, ny, d):
    out = []
    n = len(poly)
    for i in range(n):
        ax, ay = poly[i]
        bx, by = poly[(i + 1) % n]
        da = nx * ax + ny * ay - d
        db = nx * bx + ny * by - d
        if da <= 0:
            out.append((ax, ay))
        if (da < 0 < db) or (db < 0 < da):
            t = da / (da - db)
            out.append((ax + t * (bx - ax), ay + t * (by - ay)))
    return out


def build_cells(cities):
    xs = [c["x"] for c in cities]
    ys = [c["y"] for c in cities]
    x0, y0 = min(xs) - FRAME_PAD, min(ys) - FRAME_PAD
    x1, y1 = max(xs) + FRAME_PAD, max(ys) + FRAME_PAD
    frame = [(x0, y0), (x1, y0), (x1, y1), (x0, y1)]
    cells = []
    for i, c in enumerate(cities):
        poly = list(frame)
        for j, o in enumerate(cities):
            if i == j:
                continue
            nx, ny = o["x"] - c["x"], o["y"] - c["y"]
            d = (o["x"] ** 2 + o["y"] ** 2 - c["x"] ** 2 - c["y"] ** 2) / 2.0
            poly = _clip(poly, nx, ny, d)
            if len(poly) < 3:
                break
        clean = []
        for px, py in poly:
            if not clean or abs(px - clean[-1][0]) > 0.5 or abs(py - clean[-1][1]) > 0.5:
                clean.append((px, py))
        if len(clean) > 2 and clean[0] == clean[-1]:
            clean.pop()
        cells.append(clean)
    w = round(x1 - x0 + 2 * MARGIN)
    h = round(y1 - y0 + 2 * MARGIN)
    return cells, x0 - MARGIN, y0 - MARGIN, w, h


def main():
    data = json.load(open(GAME_DATA, encoding="utf-8"))
    src_cities = sorted(data["cities"], key=lambda c: c["id"])
    terms = json.load(open(TERMS, encoding="utf-8"))

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

    # ---- city names --------------------------------------------------------
    # The client ships one name table per language; only the packs the player
    # downloaded are on disk, so the remaining languages fall back to English.
    named = {}
    for c in src_cities:
        en = c["names"].get("en") or str(c["id"])
        row = {}
        for lang in LANGS:
            row[lang] = c["names"].get(lang) or en
        named[str(c["id"])] = row
    named["Royal City"] = ROYAL
    named["7001"] = ROYAL
    generic = {lang: {lv: GENERIC_EN[lv] for lv in range(1, 7)} for lang in LANGS}

    # ---- geometry ----------------------------------------------------------
    # a handful of cities have no stored coordinate; place them between their
    # neighbours on the same ring so the partition stays regular
    for c in src_cities:
        if c["x"] is None:
            near = sorted(
                [o for o in src_cities if o["lv"] == c["lv"] and o["x"] is not None],
                key=lambda o: abs(o["id"] - c["id"]),
            )[:2]
            c["x"] = sum(o["x"] for o in near) / len(near)
        if c["y"] is None:
            near = sorted(
                [o for o in src_cities if o["lv"] == c["lv"] and o["y"] is not None],
                key=lambda o: abs(o["id"] - c["id"]),
            )[:2]
            c["y"] = sum(o["y"] for o in near) / len(near)
    polys, ox, oy, map_w, map_h = build_cells(src_cities)

    cities = []
    for c, poly in zip(src_cities, polys):
        if len(poly) < 3:
            raise SystemExit("empty cell for city %s" % c["id"])
        pts = [(round(px - ox, 1), round(py - oy, 1)) for px, py in poly]
        cx = sum(p[0] for p in pts) / len(pts)
        cy = sum(p[1] for p in pts) / len(pts)
        xs = [p[0] for p in pts]
        ys = [p[1] for p in pts]
        cw = max(xs) - min(xs)
        ch = max(ys) - min(ys)
        cities.append(
            {
                "id": str(c["id"]),
                "lv": c["lv"],
                "bonus": c["bonus"] or "",
                "value": c["value"] or 0,
                "poly": " ".join("%s,%s" % (x, y) for x, y in pts),
                "lx": round(cx, 1),
                "ly": round(cy, 1),
                "bx": round(max(xs) - 15, 1),
                "by": round(min(ys) + 17, 1),
                "cw": round(cw),
                "tiny": 1 if (cw < 104 or ch < 86) else 0,
                "name": str(c["id"]),
            }
        )
    # ---- emit --------------------------------------------------------------
    ui = {lang: {key: vals[LANGS.index(lang)] for key, vals in UI_ROWS.items()} for lang in LANGS}
    lines = []
    add = lines.append
    add("// AUTO-GENERATED by scripts/generate_city_map.py — do not edit by hand.")
    add("// Source: scripts/game_city_data.json, extracted from the game client")
    add("// (MechCity / DefineBenefit tables). Territory outlines are Voronoi cells")
    add("// built from the real in-game map coordinates of every city.")
    add("")
    add("export type Lang = " + " | ".join(ts(l) for l in LANGS) + ";")
    add("export type BonusKey = " + " | ".join(ts(k) for k in BONUS_KEYS) + ";")
    add("export interface City {")
    add("  id: string; lv: number; bonus: BonusKey | ''; value: number;")
    add("  poly: string; lx: number; ly: number; bx: number; by: number;")
    add("  cw: number; tiny: 0 | 1; name: string;")
    add("}")
    add("export const MAP_W = %d;" % map_w)
    add("export const MAP_H = %d;" % map_h)
    add("export const LEVEL_COLORS: Record<number, string> = " + ts(LEVEL_COLORS) + ";")
    add("export const LEVEL_HP: Record<number, number | null> = " + ts(LEVEL_HP) + ";")
    add("export const LEVEL_GARRISON: Record<number, number | null> = " + ts(LEVEL_GARRISON) + ";")
    add("export const BONUS_KEYS: BonusKey[] = " + ts(BONUS_KEYS) + ";")
    add("export const ALLIANCE_COLORS: string[] = " + ts(ALLIANCE_COLORS) + ";")
    add("export const ALLIANCE_ICONS: string[] = " + ts(ALLIANCE_ICONS) + ";")
    add("export const BONUS_ICONS: Record<BonusKey, string> = " + ts(BONUS_ICONS) + ";")
    add("export const BONUS_HUES: Record<BonusKey, number> = " + ts(BONUS_HUES) + ";")
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
