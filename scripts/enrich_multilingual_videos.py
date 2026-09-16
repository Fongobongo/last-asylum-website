#!/usr/bin/env python3
"""
enrich_multilingual_videos.py
1. Updates videosFor logic to always append English videos additionally to any non-English language page.
2. Adds newly found native language videos for ES, PT, FR, DE, KO, JA, ID, RU.
3. Adds secret_operations, might, tips topics with 9-language metadata.
4. Updates frontmatter and astro templates to use the new dedicated topics.
"""

import os
import re
import json

VIDEOS_TS = "/home/fong/la/site/src/data/videos.ts"

NEW_TITLES = {
  "p9efTs-O7Cg": {
    "es": "🐦‍⬛ Guía Básica de Last Asylum: Todo lo que DEBES saber",
    "en": "Basic Beginner Guide — Everything You Must Know",
    "ru": "Базовый гайд для новичков: всё, что нужно знать",
    "pt": "Guia Básico para Iniciantes — Tudo o que você precisa saber",
    "fr": "Guide Débutant de Base : Tout ce qu'il faut savoir",
    "de": "Basis-Guide für Einsteiger: Alles Wichtige zum Start",
    "id": "Panduan Dasar Pemula: Semua yang Wajib Diketahui",
    "ja": "初心者向け基本攻略ガイド：序盤の必修知識",
    "ko": "초보자 기초 공략 가이드: 필수 시작 팁"
  },
  "70olVM1uTdU": {
    "es": "Cómo conseguir Sobrevivientes Naranjas",
    "en": "How to Get Orange Survivors — Complete Guide",
    "ru": "Как получить оранжевых выживших",
    "pt": "Como Conseguir Sobreviventes Laranjas",
    "fr": "Comment Obtenir des Survivants Oranges",
    "de": "Wie man orange Überlebende bekommt",
    "id": "Cara Mendapatkan Penyintas Oranye",
    "ja": "オレンジ生存者の獲得方法",
    "ko": "오렌지 등급 생존자 수급 방법"
  },
  "Zf-HgLB8ezY": {
    "es": "Crecimiento imparable: ¡Domina el Laboratorio!",
    "en": "Unstoppable Growth Guide: Master the Lab!",
    "ru": "Гайд по взрывному росту базы: исследуй Лабораторию",
    "pt": "Guia de Crescimento: Domine o Laboratório!",
    "fr": "Croissance Inarrêtable : Maîtrisez le Laboratoire !",
    "de": "Unaufhaltsames Wachstum: Meistere das Labor!",
    "id": "Panduan Pertumbuhan Cepat: Kuasai Laboratorium!",
    "ja": "爆速成長ガイド：研究所を極めろ！",
    "ko": "폭풍 성장 가이드: 연구소를 마스터하라!"
  },
  "ayfwaYlF8Pk": {
    "pt": "Guia Completo para Iniciantes — Evolua Certo Desde o Começo",
    "en": "Complete Beginner Guide — Progress Right from Day 1",
    "ru": "Полный гайд для новичков: правильный старт",
    "es": "Guía completa para principiantes — Evoluciona bien",
    "fr": "Guide Débutant Complet : Bien progresser dès le départ",
    "de": "Kompletter Einsteiger-Guide: Von Anfang an richtig bauen",
    "id": "Panduan Lengkap Pemula — Berkembang Benar Sejak Awal",
    "ja": "初心者完全攻略ガイド：初日から正しい育成法",
    "ko": "초보자 완벽 가이드 — 첫날부터 올바른 성장법"
  },
  "H4gcFMcTdvk": {
    "pt": "COMO GANHAR MUITO PODER no LAST ASYLUM PLAGUE 🚀",
    "en": "How to Gain Massive Might & Power 🚀",
    "ru": "Как быстро поднять много Мощи (Might) 🚀",
    "es": "Cómo ganar mucho poder en Last Asylum 🚀",
    "fr": "Comment gagner énormément de puissance 🚀",
    "de": "So erreichst du maximale Kampfkraft 🚀",
    "id": "Cara Cepat Menaikkan Might & Kekuatan Tempur 🚀",
    "ja": "戦力を爆発的に上げる最速育成法 🚀",
    "ko": "전투력(Might)을 폭발적으로 올리는 방법 🚀"
  },
  "N5h5_Pb8PlA": {
    "pt": "Como montar um esquadrão forte e vantagens de facção",
    "en": "How to Build a Strong Squad & Faction Advantages",
    "ru": "Как собрать сильный отряд и бонусы фракций",
    "es": "Cómo armar un escuadrón fuerte y sinergias",
    "fr": "Comment composer une escouade puissante",
    "de": "Wie man einen starken Trupp mit Fraktionsboni baut",
    "id": "Cara Membangun Skuad Kuat & Sinergi Faksi",
    "ja": "最強編成の組み方と陣営シナジー解説",
    "ko": "강력한 부대 편성법 및 진영 시너지"
  },
  "K-R2-2pePHE": {
    "pt": "Como Começar Bem no Last Asylum 🧟‍♂️ Guia Iniciante",
    "en": "How to Start Strong — Beginner Essentials",
    "ru": "Идеальный старт — основы для новичков",
    "es": "Cómo empezar bien — Guía para principiantes",
    "fr": "Bien débuter — Les indispensables pour débutants",
    "de": "Starker Start — Wichtiges Wissen für Anfänger",
    "id": "Cara Memulai dengan Kuat — Panduan Pemula",
    "ja": "スタートダッシュ攻略 — 初心者の必須知識",
    "ko": "성공적인 첫걸음 — 초보자 필수 기초 가이드"
  },
  "3kXszLv1pRI": {
    "pt": "Como Encontrar Inimigos com Muitos Recursos! 🎯",
    "en": "How to Find Enemies with Huge Resources to Plunder! 🎯",
    "ru": "Как находить богатые базы врагов для грабежа 🎯",
    "es": "Cómo encontrar enemigos con muchos recursos 🎯",
    "fr": "Comment trouver des cibles riches en ressources 🎯",
    "de": "Wie man ressourcenreiche Feinde aufspürt 🎯",
    "id": "Cara Menemukan Target Musuh Kaya Sumber Daya 🎯",
    "ja": "大量資源を持つ略奪ターゲットの探し方 🎯",
    "ko": "자원이 넘치는 약탈 대상 찾는 법 🎯"
  },
  "UpbeVvPF4rw": {
    "fr": "Guide F2P Complet : Progresser Vite Sans Payer !",
    "en": "Ultimate F2P Guide: Fast Progress Without Paying!",
    "ru": "Полный F2P гайд: быстрый прогресс без доната",
    "es": "Guía F2P definitiva: Progreso rápido sin pagar",
    "pt": "Guia F2P Completo: Evolua Rápido Sem Pagar",
    "de": "Ultimativer F2P-Guide: Schneller Fortschritt ohne Geld",
    "id": "Panduan F2P Terbaik: Progres Cepat Tanpa Top-Up",
    "ja": "無課金完全攻略ガイド：課金なしで最速成長",
    "ko": "무과금 완전 공략: 현질 없이 빠른 성장 가이드"
  },
  "PlZLjKggXFo": {
    "fr": "Les Meilleures Compositions de Héros + Deck !",
    "en": "Best Hero Compositions & Deck Lineups!",
    "ru": "Лучшие составы героев и связки навыков",
    "es": "Mejores composiciones de héroes y mazos",
    "pt": "Melhores Composições de Heróis e Decks",
    "de": "Beste Helden-Kombinationen & Deck-Setups",
    "id": "Formasi Pahlawan & Deck Terbaik",
    "ja": "最強英雄編成＆デッキ構築ガイド",
    "ko": "최고의 영웅 덱 조합 및 편성 공략"
  },
  "YNADxPZw7UY": {
    "de": "Tipps und Tricks für Einsteiger — Part 1",
    "en": "Essential Tips and Tricks — Part 1",
    "ru": "Советы и секреты для новичков — часть 1",
    "es": "Consejos y trucos para principiantes — Parte 1",
    "fr": "Astuces et conseils pour débutants — Partie 1",
    "pt": "Dicas e Truques para Iniciantes — Parte 1",
    "id": "Tips dan Trik Penting Pemula — Bagian 1",
    "ja": "知っておくべき初心者の裏技＆ヒント Part 1",
    "ko": "초보자 필수 팁과 노하우 1부"
  },
  "oGBzp363t6A": {
    "ko": "라스트 어사일럼 설치했나요? 시작 전 필독 영상",
    "en": "Just Installed Last Asylum? Watch Before You Start!",
    "ru": "Только установили Last Asylum? Посмотрите перед стартом",
    "es": "¿Recién instalado? Mira esto antes de empezar",
    "fr": "Vous venez d'installer le jeu ? Regardez ceci avant de commencer",
    "de": "Gerade installiert? Schau das vor dem Start!",
    "id": "Baru Pasang Game Ini? Tonton Sebelum Mulai!",
    "ja": "インストール直後の初心者必見！開始前チェック動画",
    "pt": "Acabou de instalar? Assista antes de começar"
  },
  "t90-KLe1zSw": {
    "ko": "라스트 어사일럼 추천 스타트 영웅 덱 조합",
    "en": "Recommended Hero Lineup for New Players",
    "ru": "Рекомендуемый состав отряда героев для новичков",
    "es": "Alineación de héroes recomendada para principiantes",
    "fr": "Composition de héros recommandée pour débuter",
    "de": "Empfohlene Heldenaufstellung für den Einstieg",
    "id": "Formasi Pahlawan Rekomendasi Pemula",
    "ja": "序盤おすすめ英雄編成ガイド",
    "pt": "Formação de heróis recomendada para começar"
  },
  "c8ceCFYiKI4": {
    "ja": "【ラストアサイラム】シリア救出まで遊んだ正直レビュー＆序盤解説",
    "en": "Honest Review & Early Game Walkthrough",
    "ru": "Честный обзор и прохождение стартовых глав",
    "es": "Reseña honesta y recorrido del juego temprano",
    "fr": "Avis honnête et guide du début de partie",
    "de": "Ehrliche Review & Early-Game-Walkthrough",
    "id": "Ulasan Jujur & Panduan Awal Permainan",
    "ko": "솔직 리뷰 및 초반 진행 완벽 가이드",
    "pt": "Análise sincera e passo a passo do início do jogo"
  },
  "1mMJMChtOpA": {
    "ja": "🔥Last Asylum 日本語攻略本・序盤チュートリアル",
    "en": "Japanese Strategy Guide & Tutorial",
    "ru": "Японский гайд по механике и старт игры",
    "es": "Guía de estrategia y tutorial japonés",
    "fr": "Guide stratégique et tutoriel en japonais",
    "de": "Japanischer Strategie-Guide & Tutorial",
    "id": "Panduan Strategi & Tutorial",
    "ko": "일본 서버 공략 가이드 및 튜토리얼",
    "pt": "Guia de estratégia e tutorial"
  },
  "OWB-rfa-8Ec": {
    "id": "Tips dan Tutorial Pemula Last Asylum Lengkap",
    "en": "Complete Beginner Tips & Tutorial Walkthrough",
    "ru": "Полное руководство и советы для новичков",
    "es": "Tutorial y consejos completos para principiantes",
    "fr": "Tutoriel et astuces complètes pour débutants",
    "de": "Komplettes Tutorial & Einsteiger-Tipps",
    "ja": "完全初心者向けチュートリアル＆攻略ヒント",
    "ko": "완벽 초보자 튜토리얼 및 공략 팁",
    "pt": "Tutorial e dicas completas para iniciantes"
  },
  "glZ3YSnqMps": {
    "id": "Panduan Gameplay Part 1 — Misi & Pembangunan",
    "en": "Walkthrough Gameplay Part 1 — Missions & Base Building",
    "ru": "Прохождение игры: миссии и развитие базы",
    "es": "Gameplay paso a paso Parte 1: Misiones y base",
    "fr": "Gameplay Découverte Partie 1 : Missions et base",
    "de": "Gameplay-Walkthrough Part 1: Missionen & Basis",
    "ja": "ゲームプレイ攻略 Part 1：任務と施設建設",
    "ko": "게임플레이 공략 1편: 퀘스트와 기지 확장",
    "pt": "Passo a passo do jogo Parte 1: Missões e base"
  },
  "1GZY95A62_o": {
    "ru": "17 Полезных Советов - Last Asylum: Plague",
    "en": "17 Useful Tips & Tricks — Last Asylum: Plague",
    "de": "17 Nützliche Tipps & Tricks",
    "es": "17 Consejos útiles para sobrevivir",
    "fr": "17 Astuces utiles pour survivre",
    "id": "17 Tips Berguna untuk Bertahan Hidup",
    "ja": "生存に役立つ17の重要ヒント",
    "ko": "생존을 위한 17가지 유용한 꿀팁",
    "pt": "17 Dicas Úteis de Sobrevivência"
  },
  "SiNKWfyrFLE": {
    "ru": "Гайд по снаряжению: порядок крафта, прокачка и звёзды",
    "en": "Equipment Guide: Crafting Order, Leveling & Star Upgrades",
    "de": "Ausrüstungs-Guide: Herstellungsreihenfolge & Sterne",
    "es": "Guía de equipo: Orden de forja, niveles y estrellas",
    "fr": "Guide d'équipement : Ordre de craft et étoiles",
    "id": "Panduan Gear: Urutan Crafting, Level & Bintang",
    "ja": "装備攻略：製作順・強化・星上げガイド",
    "ko": "장비 완벽 공략: 제작 우선순위 및 별 승급",
    "pt": "Guia de equipamento: Ordem de criação e estrelas"
  },
  "qTXiHt3-RA8": {
    "ru": "Сырная ловушка в Last Asylum: подробный гайд",
    "en": "Cheese Trap Event: In-Depth Strategy Guide",
    "de": "Käsefalle-Event: Ausführlicher Guide",
    "es": "Evento Trampa de Queso: Guía detallada",
    "fr": "Événement Piège à fromage : Guide détaillé",
    "id": "Event Perangkap Keju: Panduan Mendalam",
    "ja": "チーズトラップイベント詳細攻略",
    "ko": "치즈 트랩 이벤트 심층 공략 가이드",
    "pt": "Evento Armadilha de Queijo: Guia detalhado"
  },
  "CodEG5vRweU": {
    "ru": "Топ гайд по зданиям базы для новичков",
    "en": "Top Building Upgrade Guide for Beginners",
    "de": "Top Gebäude-Guide für Einsteiger",
    "es": "Guía de mejora de edificios para principiantes",
    "fr": "Guide d'amélioration des bâtiments pour débutants",
    "id": "Panduan Pembangunan Gedung untuk Pemula",
    "ja": "初心者向け最優先施設建築ガイド",
    "ko": "초보자를 위한 최적 기지 건물 건설 순서",
    "pt": "Guia de melhoria de edifícios para iniciantes"
  },
  "V1MYT4nll4E": {
    "ru": "Как получить 93 осколка героя и 61 билет призыва за 1 день",
    "en": "How to Get 93 Hero Fragments & 61 Summons in 1 Day",
    "de": "Wie man 93 Heldenfragmente und 61 Tickets an 1 Tag bekommt",
    "es": "Cómo conseguir 93 fragmentos y 61 boletos en 1 día",
    "fr": "Comment obtenir 93 fragments et 61 invocations en 1 jour",
    "id": "Cara Dapat 93 Fragmen Pahlawan & 61 Tiket dalam 1 Hari",
    "ja": "1日で英雄の欠片93個＆召喚券61枚を入手する方法",
    "ko": "하루 만에 영웅 조각 93개와 소환권 61장 얻는 법",
    "pt": "Como conseguir 93 fragmentos de herói e 61 bilhetes em 1 dia"
  },
  "1vQ4eVBOJPI": {
    "ru": "Ошибки новичков, обзор и на что тратить деньги",
    "en": "Beginner Mistakes Guide & Smart Spending Review",
    "de": "Anfängerfehler-Guide & Richtiges Ausgeben",
    "es": "Errores de novatos y guía de gastos inteligentes",
    "fr": "Erreurs de débutants et guide de dépenses avisées",
    "id": "Panduan Kesalahan Pemula & Belanja Cerdas",
    "ja": "初心者が犯しがちなミスと賢い課金ガイド",
    "ko": "초보자 실수 방지 및 현명한 재화 소비 가이드",
    "pt": "Guia de erros de iniciantes e gastos inteligentes"
  },
  "Uz0aOHGtZ20": {
    "en": "The Ultimate Ops Mission Guide! Maximize Your Chests",
    "ru": "Главный гайд по тайным операциям: максимум сундуков",
    "de": "Ultimativer Geheimoperations-Guide: Maximal viele Kisten",
    "es": "Guía definitiva de Operaciones Secretas: Maximiza cofres",
    "fr": "Guide Ultime des Opérations Secrètes : Maximisez les coffres",
    "id": "Panduan Operasi Rahasia: Maksimalkan Peti Hadiah",
    "ja": "秘密作戦完全攻略：最大報酬チェスト獲得術",
    "ko": "비밀 작전 완벽 공략: 상자 보상 극대화",
    "pt": "Guia definitivo de Operações Secretas: Maximize baús"
  },
  "_DLu-XLpVH0": {
    "en": "STOP WASTING BLUEPRINTS! Last Asylum Ultimate Gear Guide",
    "ru": "Хватит сливать чертежи! Полный гайд по экипировке",
    "de": "Verschwende keine Baupläne! Ultimativer Ausrüstungs-Guide",
    "es": "¡Deja de malgastar planos! Guía definitiva de equipo",
    "fr": "Arrêtez de gaspiller les plans ! Guide d'équipement ultime",
    "id": "Jangan Buang Blueprint! Panduan Gear Terbaik",
    "ja": "設計図を無駄にするな！究極の英雄装備ガイド",
    "ko": "도면 낭비 금지! 궁극의 영웅 장비 완벽 공략",
    "pt": "Pare de desperdiçar projetos! Guia definitivo de equipamentos"
  },
  "tVOvDj3Qe90": {
    "en": "My TOP 5 Last Asylum Regrets… I Wish I Knew This Earlier!",
    "ru": "ТОП-5 главных ошибок в игре: жаль, что не знал раньше!",
    "de": "Meine TOP 5 Fehler in Last Asylum… Hätte ich das früher gewusst!",
    "es": "Mis 5 mayores errores en Last Asylum… ¡Ojalá lo hubiera sabido antes!",
    "fr": "Mes 5 plus grands regrets dans Last Asylum… Si j'avais su plus tôt !",
    "id": "5 Penyesalan Terbesar Saya di Last Asylum… Wajib Tahu Sejak Awal!",
    "ja": "後悔した初心者の失敗TOP5… 早く知っておくべきだった！",
    "ko": "초보 시절 가장 후회한 실수 TOP 5… 미리 알았더라면!",
    "pt": "Meus 5 maiores arrependimentos no jogo… Queria ter sabido antes!"
  },
  "48NJVB7looA": {
    "en": "How to MAX OUT Your World Boss Damage in Last Asylum! 🔥",
    "ru": "Как выдать МАКСИМУМ урона по Королю демонов (World Boss)! 🔥",
    "de": "So maximierst du deinen Schaden am Weltboss! 🔥",
    "es": "¡Cómo maximizar tu daño al Jefe Mundial! 🔥",
    "fr": "Comment maximiser vos dégâts sur le Boss Mondial ! 🔥",
    "id": "Cara Memaksimalkan Damage ke Bos Dunia! 🔥",
    "ja": "ワールドボスのダメージを極限まで伸ばす方法！ 🔥",
    "ko": "월드 보스(마왕) 딜량 극대화하는 세팅법! 🔥",
    "pt": "Como maximizar seu dano no Chefe Mundial! 🔥"
  },
  "Ha_n370IiWQ": {
    "en": "The ULTIMATE F2P Guide! Best Heroes, Shops & Progression",
    "ru": "Главный F2P гайд: лучшие герои, магазины и развитие",
    "de": "Der ultimative F2P-Guide: Beste Helden, Shops & Fortschritt",
    "es": "La guía definitiva F2P: Mejores héroes, tiendas y progreso",
    "fr": "Le Guide F2P Ultime : Meilleurs héros, boutiques et progression",
    "id": "Panduan F2P Terbaik: Pahlawan, Toko & Progres",
    "ja": "無課金究極ガイド：おすすめ英雄・ショップ・成長ロードマップ",
    "ko": "궁극의 무과금 공략: 추천 영웅, 상점 구매 및 성장법",
    "pt": "O guia definitivo F2P: Melhores heróis, lojas e evolução"
  },
  "gU4oLNW1hq0": {
    "en": "Buy THESE Items Every Week (Or Fall Behind Fast!) 🛑🛒",
    "ru": "Покупайте ЭТИ предметы каждую неделю (или отстанете от топов!) 🛑🛒",
    "de": "Kaufe DIESE Items jede Woche (oder falle zurück!) 🛑🛒",
    "es": "Compra ESTOS objetos cada semana (¡o te quedarás atrás!) 🛑🛒",
    "fr": "Achetez CES objets chaque semaine (ou prenez du retard !) 🛑🛒",
    "id": "Beli Barang-Barang Ini Setiap Minggu 🛑🛒",
    "ja": "毎週必ず買うべき最重要アイテム（差がつく必須購入） 🛑🛒",
    "ko": "매주 반드시 사야 하는 필수 상점 아이템 🛑🛒",
    "pt": "Compre ESSES itens toda semana (ou fique para trás!) 🛑🛒"
  },
  "75Qz_hXPG0k": {
    "en": "Top 3 F2P Tips You Need in Last Asylum! 🚀",
    "ru": "Топ-3 совета для F2P игроков в Last Asylum! 🚀",
    "de": "Top 3 F2P-Tipps für Last Asylum! 🚀",
    "es": "Top 3 consejos F2P que necesitas en Last Asylum 🚀",
    "fr": "Top 3 des astuces F2P indispensables 🚀",
    "id": "3 Tips F2P Teratas yang Wajib Diketahui 🚀",
    "ja": "無課金プレイヤー必見の最重要ヒントTOP3 🚀",
    "ko": "무과금 유저를 위한 핵심 꿀팁 3가지 🚀",
    "pt": "Top 3 dicas F2P essenciais no Last Asylum 🚀"
  }
}

NEW_TOPIC_NAMES = {
  "secret_operations": {
    "en": "Secret Operations",
    "ru": "Тайные операции",
    "de": "Geheimoperationen",
    "es": "Operaciones Secretas",
    "fr": "Opérations Secrètes",
    "id": "Operasi Rahasia",
    "ja": "秘密作戦",
    "ko": "비밀 작전",
    "pt": "Operações Secretas"
  },
  "might": {
    "en": "Might & Power",
    "ru": "Мощь и боевая сила",
    "de": "Macht & Kampfkraft",
    "es": "Poder y Fuerza",
    "fr": "Puissance et Force",
    "id": "Kekuatan & Daya Tempur",
    "ja": "戦力＆強化",
    "ko": "전투력 및 강화",
    "pt": "Poder e Força"
  },
  "tips": {
    "en": "Tips & Tricks",
    "ru": "Советы и секреты",
    "de": "Tipps & Tricks",
    "es": "Consejos y Trucos",
    "fr": "Conseils et Astuces",
    "id": "Tips & Trik",
    "ja": "ヒント＆裏技",
    "ko": "팁 & 노하우",
    "pt": "Dicas e Truques"
  }
}

NEW_SEARCH_TERMS = {
  "secret_operations": {
    "en": "Last Asylum Plague secret operations ops mission guide",
    "ru": "Last Asylum тайные операции сундуки карты сокровищ",
    "de": "Last Asylum Geheimoperationen Kisten",
    "es": "Last Asylum Operaciones Secretas guia cofres",
    "fr": "Last Asylum Operations Secretes guide",
    "id": "Last Asylum Operasi Rahasia misi",
    "ja": "Last Asylum 秘密作戦 宝箱",
    "ko": "Last Asylum 비밀작전 상자 공략",
    "pt": "Last Asylum Operacoes Secretas baus guia"
  },
  "might": {
    "en": "Last Asylum increase might fast power progression",
    "ru": "Last Asylum как поднять мощь быстро прокачка силы",
    "de": "Last Asylum Macht steigern Kampfkraft",
    "es": "Last Asylum aumentar poder rapido guia",
    "fr": "Last Asylum augmenter puissance rapidement",
    "id": "Last Asylum meningkatkan might kekuatan",
    "ja": "Last Asylum 戦力 上げ方 高速育成",
    "ko": "Last Asylum 전투력 올리는 법 공략",
    "pt": "Last Asylum como ganhar muito poder rápido"
  },
  "tips": {
    "en": "Last Asylum tips and tricks beginner secrets mistakes",
    "ru": "Last Asylum советы секреты ошибки новичков",
    "de": "Last Asylum tipps tricks fehler anfänger",
    "es": "Last Asylum consejos trucos errores",
    "fr": "Last Asylum astuces conseils erreurs",
    "id": "Last Asylum tips trik pemula",
    "ja": "Last Asylum ヒント 裏技 序盤",
    "ko": "Last Asylum 꿀팁 노하우 실수 방지",
    "pt": "Last Asylum dicas truques iniciantes"
  }
}

# New rawVideos topics and enhancements
NEW_RAW_VIDEOS = {
  "might": [
    {"id": "uwPM5lpK6K0", "title": "How to Increase Might (Beginner-Friendly Guide)", "lang": "en"},
    {"id": "tVOvDj3Qe90", "title": "My TOP 5 Last Asylum Regrets… I Wish I Knew This Earlier!", "lang": "en"},
    {"id": "H4gcFMcTdvk", "title": "COMO GANHAR MUITO PODER no LAST ASYLUM PLAGUE 🚀", "lang": "pt"}
  ],
  "might_pt": [
    {"id": "H4gcFMcTdvk", "title": "COMO GANHAR MUITO PODER no LAST ASYLUM PLAGUE 🚀", "lang": "pt"}
  ],
  "might_ru": [
    {"id": "uwPM5lpK6K0", "title": "Как быстро поднять Мощь (Might): формулы и стратегия", "lang": "en"},
    {"id": "tVOvDj3Qe90", "title": "ТОП-5 главных ошибок в игре: жаль, что не знал раньше!", "lang": "en"}
  ],
  "tips": [
    {"id": "tVOvDj3Qe90", "title": "My TOP 5 Last Asylum Regrets… I Wish I Knew This Earlier!", "lang": "en"},
    {"id": "gU4oLNW1hq0", "title": "Buy THESE Items Every Week (Or Fall Behind Fast!) 🛑🛒", "lang": "en"},
    {"id": "75Qz_hXPG0k", "title": "Top 3 F2P Tips You Need in Last Asylum! 🚀", "lang": "en"}
  ],
  "tips_ru": [
    {"id": "1GZY95A62_o", "title": "17 Полезных Советов - Last Asylum: Plague", "lang": "ru"},
    {"id": "tVOvDj3Qe90", "title": "ТОП-5 главных ошибок в игре: жаль, что не знал раньше!", "lang": "en"},
    {"id": "gU4oLNW1hq0", "title": "Покупайте ЭТИ предметы каждую неделю (или отстанете от топов!) 🛑🛒", "lang": "en"}
  ],
  "tips_de": [
    {"id": "YNADxPZw7UY", "title": "Last Asylum: Plague - Tipps und Tricks Part 1", "lang": "de"}
  ],
  "tips_es": [
    {"id": "p9efTs-O7Cg", "title": "🐦‍⬛ Guía Básica de Last Asylum: Todo lo que DEBES saber", "lang": "es"}
  ],
  "tips_id": [
    {"id": "OWB-rfa-8Ec", "title": "Tips dan Tutorial Pemula Last Asylum Lengkap", "lang": "id"}
  ],
  "secret_operations": [
    {"id": "Uz0aOHGtZ20", "title": "The Ultimate Ops Mission Guide! Maximize Your Chests", "lang": "en"},
    {"id": "sZoTJf55rSU", "title": "CLAIM YOUR FREE RESOURCES !! Last Asylum Thief Hunt Guide", "lang": "en"}
  ],
  "secret_operations_ru": [
    {"id": "Uz0aOHGtZ20", "title": "Главный гайд по тайным операциям: максимум сундуков", "lang": "en"},
    {"id": "sZoTJf55rSU", "title": "Охота на воров и тайные операции: бесплатные награды", "lang": "en"}
  ],
  "demon_king": [
    {"id": "NdIF2Cefm6k", "title": "STOP Using The Wrong Lineup! Ultimate World Boss Guide", "lang": "en"},
    {"id": "C7wH29bw0ik", "title": "How to Level Up Heroes the RIGHT Way in Last Asylum: Plague", "lang": "en"},
    {"id": "48NJVB7looA", "title": "How to MAX OUT Your World Boss Damage in Last Asylum! 🔥", "lang": "en"}
  ],
  "demon_king_ru": [
    {"id": "NdIF2Cefm6k", "title": "Король демонов: правильный состав и максимальный урон", "lang": "en"},
    {"id": "48NJVB7looA", "title": "Как выдать МАКСИМУМ урона по Королю демонов (World Boss)! 🔥", "lang": "en"},
    {"id": "C7wH29bw0ik", "title": "Прокачка героев и подготовка к битве с боссами", "lang": "en"}
  ],
  "dwarven": [
    {"id": "WCIfyqH0vz0", "title": "DON'T Waste Your Pickaxes! Dwarven Mine Guide", "lang": "en"},
    {"id": "_DLu-XLpVH0", "title": "STOP WASTING BLUEPRINTS! Last Asylum Ultimate Gear Guide", "lang": "en"}
  ],
  "dwarven_ru": [
    {"id": "WCIfyqH0vz0", "title": "Гномья шахта: копим кирки и тактика этажей", "lang": "en"},
    {"id": "_DLu-XLpVH0", "title": "Хватит сливать чертежи! Полный гайд по экипировке", "lang": "en"}
  ],
  "beginner_es": [
    {"id": "p9efTs-O7Cg", "title": "🐦‍⬛ Guía Básica de Last Asylum: Todo lo que DEBES saber para empezar", "lang": "es"}
  ],
  "economy_es": [
    {"id": "70olVM1uTdU", "title": "Cómo conseguir Sobrevivientes Naranjas en Last Asylum", "lang": "es"}
  ],
  "buildings_es": [
    {"id": "Zf-HgLB8ezY", "title": "Crecimiento imparable: ¡Domina el Laboratorio!", "lang": "es"}
  ],
  "beginner_pt": [
    {"id": "ayfwaYlF8Pk", "title": "Guia Completo para Iniciantes — Evolua Certo Desde o Começo", "lang": "pt"},
    {"id": "K-R2-2pePHE", "title": "Como Começar Bem no Last Asylum 🧟‍♂️ Guia Iniciante", "lang": "pt"}
  ],
  "heroes_pt": [
    {"id": "N5h5_Pb8PlA", "title": "Como montar um esquadrão forte e vantagens de facção", "lang": "pt"}
  ],
  "economy_pt": [
    {"id": "3kXszLv1pRI", "title": "Como Encontrar Inimigos com Muitos Recursos! 🎯", "lang": "pt"}
  ],
  "beginner_fr": [
    {"id": "UpbeVvPF4rw", "title": "Guide F2P Complet : Progresser Vite Sans Payer !", "lang": "fr"}
  ],
  "heroes_fr": [
    {"id": "PlZLjKggXFo", "title": "Les Meilleures Compositions de Héros + Deck !", "lang": "fr"}
  ],
  "beginner_de": [
    {"id": "YNADxPZw7UY", "title": "Last Asylum: Plague - Tipps und Tricks Part 1", "lang": "de"}
  ],
  "beginner_ko": [
    {"id": "oGBzp363t6A", "title": "라스트 어사일럼 설치했나요? 시작 전 필독 영상", "lang": "ko"}
  ],
  "heroes_ko": [
    {"id": "t90-KLe1zSw", "title": "라스트 어사일럼 추천 스타트 영웅 덱 조합", "lang": "ko"}
  ],
  "beginner_ja": [
    {"id": "c8ceCFYiKI4", "title": "【ラストアサイラム】シリア救出まで遊んだ正直レビュー＆序盤解説", "lang": "ja"},
    {"id": "1mMJMChtOpA", "title": "🔥Last Asylum 日本語攻略本・序盤チュートリアル", "lang": "ja"}
  ],
  "beginner_id": [
    {"id": "OWB-rfa-8Ec", "title": "Tips dan Tutorial Pemula Last Asylum Lengkap", "lang": "id"},
    {"id": "glZ3YSnqMps", "title": "Panduan Gameplay Part 1 — Misi & Pembangunan", "lang": "id"}
  ],
  "gear_ru": [
    {"id": "SiNKWfyrFLE", "title": "Гайд по снаряжению: порядок крафта, прокачка и звёзды", "lang": "ru"},
    {"id": "_DLu-XLpVH0", "title": "Хватит сливать чертежи! Полный гайд по экипировке", "lang": "en"}
  ],
  "cheese_ru": [
    {"id": "qTXiHt3-RA8", "title": "Сырная ловушка в Last Asylum: подробный гайд", "lang": "ru"}
  ],
  "buildings_ru": [
    {"id": "CodEG5vRweU", "title": "Топ гайд по зданиям базы для новичков", "lang": "ru"},
    {"id": "TIXXXP0BLec", "title": "Дорожная карта застройки Святилища до 27 уровня", "lang": "en"}
  ],
  "heroes_ru": [
    {"id": "V1MYT4nll4E", "title": "Как получить 93 осколка героя и 61 билет призыва за 1 день", "lang": "ru"},
    {"id": "Ha_n370IiWQ", "title": "Главный F2P гайд: лучшие герои, магазины и развитие", "lang": "en"}
  ],
  "beginner_ru": [
    {"id": "1vQ4eVBOJPI", "title": "Ошибки новичков, обзор и на что тратить деньги", "lang": "ru"}
  ]
}

def main():
    with open(VIDEOS_TS, "r", encoding="utf-8") as f:
        code = f.read()

    # 1. Update videoTitles
    vt_idx = code.find("export const videoTitles: Record<string, Partial<Record<Lang, string>>> = {")
    if vt_idx != -1:
        insert_pt = vt_idx + len("export const videoTitles: Record<string, Partial<Record<Lang, string>>> = {\n")
        new_vt_lines = []
        for vid, langs in NEW_TITLES.items():
            if f'"{vid}": {{' not in code:
                new_vt_lines.append(f'  "{vid}": {json.dumps(langs, ensure_ascii=False, indent=4)},\n')
        if new_vt_lines:
            code = code[:insert_pt] + "".join(new_vt_lines) + code[insert_pt:]
            print(f"Added {len(new_vt_lines)} new video titles to videoTitles.")

    # 2. Update rawVideos entries
    rv_idx = code.find("export const rawVideos: Record<string, Video[]> = {")
    if rv_idx != -1:
        insert_pt = rv_idx + len("export const rawVideos: Record<string, Video[]> = {\n")
        new_rv_lines = []
        for key, vlist in NEW_RAW_VIDEOS.items():
            if f'"{key}": [' in code:
                # Replace existing key or let's inspect
                # Replace the block for this key
                pattern = rf'"{key}":\s*\[(.*?)\]'
                replacement = f'"{key}": ' + json.dumps(vlist, ensure_ascii=False, indent=4)
                code = re.sub(pattern, replacement, code, flags=re.DOTALL)
            else:
                new_rv_lines.append(f'  "{key}": {json.dumps(vlist, ensure_ascii=False, indent=4)},\n')
        if new_rv_lines:
            code = code[:insert_pt] + "".join(new_rv_lines) + code[insert_pt:]
            print(f"Added {len(new_rv_lines)} new topics to rawVideos.")

    # 3. Update topicNames
    tn_idx = code.find("export const topicNames: Record<string, Partial<Record<Lang, string>>> = {")
    if tn_idx != -1:
        insert_pt = tn_idx + len("export const topicNames: Record<string, Partial<Record<Lang, string>>> = {\n")
        new_tn_lines = []
        for top, langs in NEW_TOPIC_NAMES.items():
            if f'"{top}": {{' not in code:
                new_tn_lines.append(f'  "{top}": {json.dumps(langs, ensure_ascii=False, indent=4)},\n')
        if new_tn_lines:
            code = code[:insert_pt] + "".join(new_tn_lines) + code[insert_pt:]
            print(f"Added {len(new_tn_lines)} topics to topicNames.")

    # 4. Update topicSearchTerms
    ts_idx = code.find("export const topicSearchTerms: Record<string, Partial<Record<Lang, string>>> = {")
    if ts_idx != -1:
        insert_pt = ts_idx + len("export const topicSearchTerms: Record<string, Partial<Record<Lang, string>>> = {\n")
        new_ts_lines = []
        for top, langs in NEW_SEARCH_TERMS.items():
            if f'"{top}": {{' not in code:
                new_ts_lines.append(f'  "{top}": {json.dumps(langs, ensure_ascii=False, indent=4)},\n')
        if new_ts_lines:
            code = code[:insert_pt] + "".join(new_ts_lines) + code[insert_pt:]
            print(f"Added {len(new_ts_lines)} topics to topicSearchTerms.")

    # 5. Update videosFor function logic
    old_videos_for = """export function videosFor(topic: string, lang: Lang = 'en'): Video[] {
  const langKey = `${topic}_${lang}`;
  let list: Video[] = [];

  if (langKey in rawVideos) {
    list = [...rawVideos[langKey]];
  } else if (topic in rawVideos) {
    list = [...rawVideos[topic]];
  } else {
    return [];
  }

  return list.map((v) => {
    const localizedTitle = videoTitles[v.id]?.[lang];
    return {
      ...v,
      title: localizedTitle ?? v.title,
    };
  });
}"""

    new_videos_for = """export function videosFor(topic: string, lang: Lang = 'en'): Video[] {
  const langKey = `${topic}_${lang}`;
  const enList = rawVideos[topic] ?? [];
  let localizedList: Video[] = [];

  if (langKey in rawVideos) {
    localizedList = [...rawVideos[langKey]];
  }

  // If language is English, simply return the English list
  if (lang === 'en') {
    return enList.map((v) => {
      const localizedTitle = videoTitles[v.id]?.en;
      return {
        ...v,
        title: localizedTitle ?? v.title,
      };
    });
  }

  // For other languages: include native language videos FIRST,
  // then append English videos as additional/supplementary (avoiding duplicates)
  const seenIds = new Set(localizedList.map((v) => v.id));
  const combined: Video[] = [...localizedList];

  for (const ev of enList) {
    if (!seenIds.has(ev.id)) {
      seenIds.add(ev.id);
      combined.push({
        ...ev,
        lang: ev.lang ?? 'en',
      });
    }
  }

  return combined.map((v) => {
    const localizedTitle = videoTitles[v.id]?.[lang];
    return {
      ...v,
      title: localizedTitle ?? v.title,
    };
  });
}"""

    if old_videos_for in code:
        code = code.replace(old_videos_for, new_videos_for)
        print("Successfully updated videosFor to append English videos additionally across all languages!")
    else:
        print("Warning: old videosFor signature not matched exactly.")

    with open(VIDEOS_TS, "w", encoding="utf-8") as f:
        f.write(code)
    print("Saved updated videos.ts!")

    # 6. Update frontmatter in markdown guides
    frontmatter_updates = [
        ("site/content/guides/ru/events/demon-king.md", "videoTopic: beginner", "videoTopic: demon_king"),
        ("site/content/guides/en/events/demon-king.md", "videoTopic: beginner", "videoTopic: demon_king"),
        ("site/content/guides/ru/events/secret-operations.md", "videoTopic: beginner", "videoTopic: secret_operations"),
        ("site/content/guides/en/events/secret-operations.md", "videoTopic: beginner", "videoTopic: secret_operations"),
        ("site/content/guides/ru/might.md", "videoTopic: beginner", "videoTopic: might"),
        ("site/content/guides/en/might.md", "videoTopic: beginner", "videoTopic: might"),
        ("site/content/guides/ru/tips.md", "videoTopic: beginner", "videoTopic: tips"),
        ("site/content/guides/en/tips.md", "videoTopic: beginner", "videoTopic: tips"),
    ]
    for path, old_v, new_v in frontmatter_updates:
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as gf:
                gc = gf.read()
            if old_v in gc:
                gc = gc.replace(old_v, new_v, 1)
                with open(path, "w", encoding="utf-8") as gf:
                    gf.write(gc)
                print(f"Updated frontmatter in {path} -> {new_v}")

    # 7. Update astro templates for other languages for might & tips
    for lang in ['es', 'de', 'fr', 'ja', 'ko', 'pt', 'id']:
        might_file = f"site/src/pages/{lang}/might.astro"
        if os.path.exists(might_file):
            with open(might_file, "r", encoding="utf-8") as mf:
                mc = mf.read()
            mc = mc.replace('<VideoSection topic="beginner" lang={lang} />', '<VideoSection topic="might" lang={lang} />')
            with open(might_file, "w", encoding="utf-8") as mf:
                mf.write(mc)
                
        tips_file = f"site/src/pages/{lang}/tips.astro"
        if os.path.exists(tips_file):
            with open(tips_file, "r", encoding="utf-8") as tf:
                tc = tf.read()
            tc = tc.replace('<VideoSection topic="beginner" lang={lang} />', '<VideoSection topic="tips" lang={lang} />')
            with open(tips_file, "w", encoding="utf-8") as tf:
                tf.write(tc)

    print("All template and frontmatter updates complete!")

if __name__ == "__main__":
    main()
