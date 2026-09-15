export interface MonumentMilestone {
  id: string;
  dayStart: number;
  dayEnd: number;
  chapter: number;
  category: 'heroes' | 'alliance' | 'pvp' | 'pve' | 'season';
  icon: string;
  officialMilestoneIds?: number[];
  title: Record<string, string>;
  badge: Record<string, string>;
  shortDesc: Record<string, string>;
  unlockCondition: Record<string, string>;
  whatToHoard: Record<string, string>;
  keyTips: Record<string, string[]>;
  commonMistakes: Record<string, string>;
  guideUrl?: string;
  guideLabel?: Record<string, string>;
}

export interface MonumentChapter {
  chapter: number;
  dayRange: string;
  name: Record<string, string>;
  icon: string;
  desc: Record<string, string>;
}

export const monumentChapters: MonumentChapter[] = [
  {
    chapter: 1,
    dayRange: '1–14',
    icon: '🏰',
    name: {
      ru: 'Глава 1: Выживание и Зарождение',
      en: 'Chapter 1: Survival & First Steps',
      de: 'Kapitel 1: Überleben & Erste Schritte',
      es: 'Capítulo 1: Supervivencia y Primeros Pasos',
      fr: 'Chapitre 1 : Survie et premiers pas',
      id: 'Bab 1: Bertahan Hidup & Langkah Awal',
      ja: '第1章: 生存と黎明',
      ko: '1장: 생존과 시작',
      pt: 'Capítulo 1: Sobrevivência e Primeiros Passos'
    },
    desc: {
      ru: 'Обустройство базы, призыв Артура, открытие Альянсов, колесо Цинтии и первая Осада Нежити.',
      en: 'Base setup, summoning Arthur, Alliance system unlock, Cynthia roulette, and the first Undead Siege.',
      de: 'Basisaufbau, Arthur rekrutieren, Allianzsystem freischalten, Cynthia-Glücksrad und die erste Belagerung.',
      es: 'Construcción de base, reclutar a Arturo, desbloquear Alianzas, ruleta de Cynthia y primer Asedio de No Muertos.',
      fr: 'Développement de la base, Arthur, ouverture des Alliances, roulette de Cynthia et premier Siège des morts-vivants.',
      id: 'Membangun markas, rekrut Arthur, buka fitur Aliansi, roulette Cynthia, dan Undead Siege pertama.',
      ja: '拠点構築、アーサー獲得、同盟機能解放、シンシアのルーレット、初回のアンデッド包囲戦。',
      ko: '기지 건설, 아서 획득, 연맹 시스템 개방, 신시아 룰렛, 첫 번째 언데드 공성전.',
      pt: 'Construção da base, recrutamento de Arthur, desbloqueio de Alianças, roleta de Cynthia e primeiro Cerco dos Mortos-vivos.'
    }
  },
  {
    chapter: 2,
    dayRange: '15–28',
    icon: '⚔️',
    name: {
      ru: 'Глава 2: Эпоха Дуэлей Альянсов',
      en: 'Chapter 2: The Alliance Duel Era',
      de: 'Kapitel 2: Die Allianz-Duell-Ära',
      es: 'Capítulo 2: La Era del Duelo de Alianzas',
      fr: 'Chapitre 2 : L\'Ère du Duel d\'Alliances',
      id: 'Bab 2: Era Duel Aliansi',
      ja: '第2章: 同盟対決の時代',
      ko: '2장: 연맹 대결의 시대',
      pt: 'Capítulo 2: A Era do Duelo de Alianças'
    },
    desc: {
      ru: 'Первая квалификация Дуэли альянсов (Top-32), Торговый Караван, Битва за Каньон и подготовка к межсерверу.',
      en: 'First Alliance Duel qualification (Top-32), Alliance Caravan, Canyon Clash, and pre-KvK preparations.',
      de: 'Erste Allianz-Duell-Qualifikation (Top-32), Handelskarawane, Canyon-Schlacht und Vorbereitung auf KvK.',
      es: 'Primera clasificación de Duelo de Alianzas (Top-32), Caravana, Batalla del Cañón y preparación de KvK.',
      fr: 'Première qualification du Duel d\'Alliances (Top-32), Caravane, Choc du Canyon et préparation au KvK.',
      id: 'Kualifikasi pertama Duel Aliansi (Top-32), Karavan, Canyon Clash, dan persiapan menuju KvK.',
      ja: '初回同盟対決予選（Top-32）、隊商輸送、キャニオン戦、KvKに向けた準備期間。',
      ko: '첫 번째 연맹 대결 예선(Top-32), 무역 상단 마차, 캐니언 전투 및 KvK 대비 훈련.',
      pt: 'Primeira qualificação do Duelo de Alianças (Top-32), Caravana da Aliança, Batalha do Desfiladeiro e preparação para KvK.'
    }
  },
  {
    chapter: 3,
    dayRange: '29–65',
    icon: '👑',
    name: {
      ru: 'Глава 3: Война Королевств (KvK)',
      en: 'Chapter 3: Kingdom War (KvK)',
      de: 'Kapitel 3: Krieg der Königreiche (KvK)',
      es: 'Capítulo 3: Guerra de Reinos (KvK)',
      fr: 'Chapitre 3 : Guerre des Royaumes (KvK)',
      id: 'Bab 3: Kingdom War (KvK)',
      ja: '第3章: 王国戦争（KvK）',
      ko: '3장: 왕국 전쟁(KvK)',
      pt: 'Capítulo 3: Guerra dos Reinos (KvK)'
    },
    desc: {
      ru: 'Падение серверных границ! Межсерверные дуэли, субботний штурм Королевского замка, Шэдоу и Гонка за эликсиром.',
      en: 'Borders fall! Cross-server duels, Saturday Royal Castle assault, Shadow banner, and Elixir Scramble.',
      de: 'Servergrenzen fallen! Serverübergreifende Duelle, samstags Sturm auf das Schloss, Shadow-Banner und Elixier-Jagd.',
      es: '¡Caen las fronteras! Duelos entre servidores, asalto al Castillo Real en sábado, Shadow y Carrera del Elixir.',
      fr: 'Les frontières tombent ! Duels inter-serveurs, assaut du Château Royal le samedi, Shadow et Ruée vers l\'élixir.',
      id: 'Batas server terbuka! Duel antar-server, perebutan Istana Kerajaan di hari Sabtu, banner Shadow, dan Elixir Scramble.',
      ja: 'サーバーの境界線崩壊！星間対決、土曜の王城決戦、シャドウの登場、エリクサー争奪戦。',
      ko: '서버 국경 개방! 서버 간 대결, 토요일 왕성 결전, 섀도우 배너, 엘릭서 쟁탈전.',
      pt: 'As fronteiras caem! Duelos inter-servidores, invasão do Castelo Real aos sábados, Shadow e Corrida pelo Elixir.'
    }
  },
  {
    chapter: 4,
    dayRange: '66–119',
    icon: '🗡️',
    name: {
      ru: 'Глава 4: Золотой Век и Марлена',
      en: 'Chapter 4: The Golden Age & Marlena',
      de: 'Kapitel 4: Das Goldene Zeitalter & Marlena',
      es: 'Capítulo 4: La Edad de Oro y Marlena',
      fr: 'Chapitre 4 : L\'Âge d\'or et Marlena',
      id: 'Bab 4: Era Keemasan & Marlena',
      ja: '第4章: 黄金時代とマレーナ',
      ko: '4장: 황금 시대와 말레나',
      pt: 'Capítulo 4: A Era de Ouro e Marlena'
    },
    desc: {
      ru: 'Открытие Марлены (главный F2P керри игры), морская рыбалка на 300 рыб, Зал Реликвий и накопление антитоксина.',
      en: 'Marlena unlock (the game\'s core carry), 300-fish ocean bounty, Curio Hall relics, and antitoxin stockpiling.',
      de: 'Marlena-Freischaltung (der Kern-Carry), 300-Fische-Meeresausbeute, Kuriositätenhalle und Antitoxin-Sparphase.',
      es: 'Desbloqueo de Marlena (carry principal), pesca marina de 300 peces, Sala de curiosidades y reserva de antitoxina.',
      fr: 'Déblocage de Marlena (carry principal), 300 poissons marins, Salle de curiosités et accumulation d\'antitoxine.',
      id: 'Marlena terbuka (carry utama permainan), tangkapan 300 ikan laut harian, Galeri Koleksi, dan menimbun antitoksin.',
      ja: 'マレーナの一般解放（最強キャリー）、海洋釣り300匹、収蔵品館の解放と抗毒素の備蓄期間。',
      ko: '말레나 해금(최강의 캐리 영웅), 300마리 바다 낚시, 수집관 유물, 항독소 비축 기간.',
      pt: 'Desbloqueio de Marlena (carry principal do jogo), pesca de 300 peixes, Salão de Artefatos e acúmulo de antitoxina.'
    }
  },
  {
    chapter: 5,
    dayRange: '120+',
    icon: '☣️',
    name: {
      ru: 'Глава 5: Сезон «Эра Возрождения»',
      en: 'Chapter 5: Era of Revival Season',
      de: 'Kapitel 5: Ära der Wiedergeburt',
      es: 'Capítulo 5: Temporada Era del Renacimiento',
      fr: 'Chapitre 5 : Saison Ère du Renouveau',
      id: 'Bab 5: Musim Era Kebangkitan',
      ja: '第5章: 再生のエラ（シーズン1）',
      ko: '5장: 부활의 시대(시즌 1)',
      pt: 'Capítulo 5: Temporada Era do Renascimento'
    },
    desc: {
      ru: 'Масштабный 55-дневный сезон: механика заражения, Статуи Лорда, дерево специализаций, Зоя и сезонные цитадели.',
      en: 'Massive 55-day season: viral infection mechanics, Lord Statues, specialization trees, Zoya, and seasonal citadels.',
      de: 'Riesige 55-Tage-Saison: Infektionsmechanik, Lord-Statuen, Spezialisierungsbäume, Zoya und Festungen.',
      es: 'Temporada de 55 días: mecánica de infección, Estatuas de Lord, árboles de especialización, Zoya y ciudadelas.',
      fr: 'Saison de 55 jours : mécanique d\'infection, Statues de Lord, arbres de spécialisation, Zoya et citadelles.',
      id: 'Musim masif 55 hari: sistem infeksi, Patung Lord, pohon spesialisasi, Zoya, dan benteng musiman.',
      ja: '55日間の大型シーズン：感染メカニクス、ロードの石像、専門職ツリー、ゾーヤ、シーズン要塞戦。',
      ko: '55일간의 대형 시즌: 감염 메커니즘, 군주 석상, 전문화 특성 트리, 조야, 시즌 요새 점령전.',
      pt: 'Temporada épica de 55 dias: sistema de infecção, Estátuas de Lorde, árvores de especialização, Zoya e fortalezas.'
    }
  }
];

export const monumentMilestones: MonumentMilestone[] = [
  {
    id: 'server-dawn',
    dayStart: 1,
    dayEnd: 4,
    chapter: 1,
    category: 'heroes',
    icon: '🏰',
    officialMilestoneIds: [1000, 2000, 3000, 4000, 5000, 7000],
    title: {
      ru: 'Основание Святилища и Призыв Артура',
      en: 'Sanctuary Founding & Arthur Recruit',
      de: 'Zufluchtsgründung & Arthur-Rekrutierung',
      es: 'Fundación del Refugio y Recluta de Arturo',
      fr: 'Fondation du Sanctuaire et Recrutement d\'Arthur',
      id: 'Pendirian Tempat Perlindungan & Rekrut Arthur',
      ja: '拠点の創設とアーサーの獲得',
      ko: '안식처 건립 및 아서 영입',
      pt: 'Fundação do Refúgio e Recrutamento de Arthur'
    },
    badge: {
      ru: 'День 1–4',
      en: 'Day 1–4',
      de: 'Tag 1–4',
      es: 'Día 1–4',
      fr: 'Jour 1–4',
      id: 'Hari 1–4',
      ja: '1〜4日目',
      ko: '1~4일차',
      pt: 'Dia 1–4'
    },
    shortDesc: {
      ru: 'Старт сервера. Первые шаги в Святилище, получение бесплатного ключевого танка Артура (UR) из Таверны.',
      en: 'Server launch. First steps in the Sanctuary, acquiring core free UR tank Arthur from the Tavern.',
      de: 'Serverstart. Erste Schritte, Erhalt des unverzichtbaren kostenlosen UR-Tanks Arthur aus der Taverne.',
      es: 'Lanzamiento del servidor. Primeros pasos y obtención del tanque clave gratuito Arthur (UR) en la Taberna.',
      fr: 'Lancement du serveur. Premiers pas et obtention du tank UR gratuit essentiel Arthur à la Taverne.',
      id: 'Peluncuran server. Langkah awal dan memperoleh tank UR gratis Arthur dari Kedai.',
      ja: 'サーバー開始。拠点の基礎固めと酒場からの主力無料URタンク「アーサー」獲得。',
      ko: '서버 오픈. 첫 안식처 구축 및 주점에서 무료 핵심 UR 탱커 아서 영입.',
      pt: 'Início do servidor. Primeiros passos e obtenção do tanque UR essencial Arthur na Taverna.'
    },
    unlockCondition: {
      ru: 'Святилище 1–4 уровня, первые часы сервера',
      en: 'Sanctuary Lv. 1–4, first hours of server',
      de: 'Zuflucht Stufe 1–4, erste Serverstunden',
      es: 'Refugio nivel 1–4, primeras horas',
      fr: 'Sanctuaire Niv. 1–4, premières heures',
      id: 'Sanctuary Lv. 1–4, jam-jam pertama server',
      ja: '拠点Lv.1〜4、サーバー開始直後',
      ko: '안식처 1~4레벨, 서버 오픈 초기',
      pt: 'Refúgio Nível 1–4, primeiras horas de jogo'
    },
    whatToHoard: {
      ru: 'Не тратить самоцветы на ускорение первых построек; копить билеты найма на четверг (День Героев).',
      en: 'Do not burn gems rushing 5-minute builds; save recruit tickets for Thursday (Hero Day).',
      de: 'Keine Edelsteine für Mini-Bauten verschwenden; Rekrutierungstickets für Donnerstag sparen.',
      es: 'No gastes gemas en construcciones cortas; guarda boletos de recluta para el jueves (Día de Héroes).',
      fr: 'Ne gaspillez pas vos gemmes pour les petites constructions ; gardez les tickets pour jeudi.',
      id: 'Jangan habiskan permata untuk percepatan awal; simpan tiket rekrut untuk hari Kamis.',
      ja: '序盤の短縮にジェムを浪費せず温存。英雄募集券は木曜（英雄育成日）に向けて保管。',
      ko: '초반 짧은 건설에 보석 낭비 금지. 영웅 모집권은 목요일(영웅의 날)을 위해 비축.',
      pt: 'Não gaste gemas em construções iniciais; guarde bilhetes de recrutamento para quinta-feira.'
    },
    keyTips: {
      ru: [
        'Артур — краеугольный камень любого F2P отряда. Качайте его до 8★ (открывает пассивку Стойкости).',
        'Стену и Главное Здание держите в безостановочном строительстве 24/7.',
        'Используйте бесплатный найм в Таверне сразу по кулдауну, чтобы таймер не простаивал.',
        'Перед выходом из игры отправляйте сборщиков на ресурсные плиты (приоритет: Травы > Дерево > Еда).'
      ],
      en: [
        'Arthur is the foundation of every F2P squad. Target 8★ early for his Tenacity passive unlock.',
        'Keep the Wall and Sanctuary headquarters upgrading non-stop 24/7.',
        'Claim free Tavern recruits the moment they cooldown so the timer continues.',
        'Send gatherers to resource tiles before logging off (Priority: Herbs > Wood > Food).'
      ]
    },
    commonMistakes: {
      ru: 'Слив самоцветов на завершение начальных строек и прокачка синих/фиолетовых героев вместо инвестиций в Артура.',
      en: 'Blowing gems to insta-finish 2-hour upgrades and investing heavy resources into low-tier SR heroes.',
      de: 'Edelsteine für Sofortfertigstellung verschwenden und Ressourcen in schwache SR-Helden stecken.',
      es: 'Gastar gemas en acelerar edificios pequeños e invertir recursos valiosos en héroes SR débiles.',
      fr: 'Dépenser des gemmes pour finir les petits bâtiments et monter des héros SR secondaires.',
      id: 'Menghabiskan permata untuk bangunan singkat dan berinvestasi pada hero SR yang cepat usang.',
      ja: 'ジェムを使った即時建設や、不要な低レア英雄への育成素材の注ぎ込み。',
      ko: '초반 건물에 보석을 소모하거나 하위 등급 영웅에 핵심 재화를 낭비하는 실수.',
      pt: 'Gastar gemas para concluir obras rápidas e desperdiçar recursos em heróis SR fracos.'
    },
    guideUrl: 'codex/arthur',
    guideLabel: {
      ru: 'Гайд по Артуру и прокачке танка →',
      en: 'Arthur Hero Codex & Tank Guide →',
      de: 'Arthur-Heldenguide ansehen →',
      es: 'Guía de héroe Arturo →',
      fr: 'Guide du héros Arthur →',
      id: 'Panduan Hero Arthur →',
      ja: 'アーサーの育成ガイドを見る →',
      ko: '아서 영웅 가이드 보기 →',
      pt: 'Guia do Herói Arthur →'
    }
  },
  {
    id: 'alliance-unlock',
    dayStart: 5,
    dayEnd: 7,
    chapter: 1,
    category: 'alliance',
    icon: '🛡️',
    officialMilestoneIds: [8000, 9000],
    title: {
      ru: 'Открытие Альянсов и Территории',
      en: 'Alliance System & Territory Unlock',
      de: 'Allianzsystem & Territorium-Freischaltung',
      es: 'Desbloqueo de Alianzas y Territorio',
      fr: 'Déblocage des Alliances et du Territoire',
      id: 'Fitur Aliansi & Wilayah Terbuka',
      ja: '同盟機能と領地システムの解放',
      ko: '연맹 시스템 및 영토 개방',
      pt: 'Desbloqueio de Alianças e Território'
    },
    badge: {
      ru: 'День 5–7',
      en: 'Day 5–7',
      de: 'Tag 5–7',
      es: 'Día 5–7',
      fr: 'Jour 5–7',
      id: 'Hari 5–7',
      ja: '5〜7日目',
      ko: '5~7일차',
      pt: 'Dia 5–7'
    },
    shortDesc: {
      ru: 'Открытие Зала Альянса, взаимная помощь по стройке, донат-сундуки и магазин технологий альянса.',
      en: 'Sanctuary Lv. 5 opens Alliances: mutual help speedups, gift chests, and Alliance shop.',
      de: 'Zuflucht Stufe 5 öffnet Allianzen: Hilfe-Beschleuniger, Geschenkkisten und Allianz-Shop.',
      es: 'Refugio nivel 5 desbloquea Alianzas: ayuda de construcción, cofres de regalo y tienda.',
      fr: 'Sanctuaire Niv. 5 débloque les Alliances : entraide accélérée, coffres et boutique d\'alliance.',
      id: 'Sanctuary Lv. 5 membuka Aliansi: bantuan percepatan, peti hadiah, dan toko aliansi.',
      ja: '拠点Lv.5で同盟解放：建築支援、課金ギフト宝箱、同盟ショップ機能が使用可能に。',
      ko: '안식처 5레벨 도달 시 연맹 개방: 상호 지원 가속, 선물 상자, 연맹 상점 이용 가능.',
      pt: 'Refúgio Nível 5 abre Alianças: ajuda mútua para obras, baús de presente e loja da aliança.'
    },
    unlockCondition: {
      ru: 'Святилище 5 уровня, 5-й день сервера',
      en: 'Sanctuary Lv. 5, Server Day 5',
      de: 'Zuflucht Stufe 5, Server-Tag 5',
      es: 'Refugio nivel 5, Día 5 de servidor',
      fr: 'Sanctuaire Niv. 5, Jour 5 du serveur',
      id: 'Sanctuary Lv. 5, Hari ke-5 server',
      ja: '拠点Lv.5到達、サーバー5日目',
      ko: '안식처 5레벨, 서버 5일차',
      pt: 'Refúgio Nível 5, Dia 5 do servidor'
    },
    whatToHoard: {
      ru: 'Очки чести альянса (Alliance Honor Coins): беречь на свитки телепорта и щиты мира (Peace Shield).',
      en: 'Alliance Honor Coins: strictly save for Advanced Teleports and Peace Shields.',
      de: 'Allianz-Ehrenmünzen: nur für Fortgeschrittene Teleporte und Friedensschilde aufsparen.',
      es: 'Monedas de honor de alianza: guárdalas para teletransportes avanzados y escudos de paz.',
      fr: 'Pièces d\'honneur d\'alliance : conservez pour les téléportations avancées et boucliers de paix.',
      id: 'Koin Kehormatan Aliansi: simpan untuk Teleport Lanjutan dan Perisai Perdamaian.',
      ja: '同盟名誉コイン：高級テレポートと平和の盾（シールド）購入用に温存。',
      ko: '연맹 명예 코인: 고급 텔레포트 및 평화의 방패 구매를 위해 반드시 비축.',
      pt: 'Moedas de Honra da Aliança: guarde rigorosamente para Teleportes Avançados e Escudos de Paz.'
    },
    keyTips: {
      ru: [
        'Вступайте в топ-1–3 альянс сервера в первые часы — это дает доступ к сотням бесплатных сундуков за донат союзников.',
        'Всегда жмите кнопку «Помощь альянса» (Alliance Help) — каждый клик сокращает стройку на 1 минуту или 1%.',
        'Ежедневно делайте максимальные взносы в технологии альянса ради монет чести.',
        'Телепортируйтесь на территорию альянса к Улью (Hive), чтобы получать бонусы защиты и скорости сбора.'
      ],
      en: [
        'Join the top 1–3 alliance on the server immediately — whale gift chests accelerate your account 3x faster.',
        'Hit "Alliance Help" non-stop — each click cuts construction/research by 1 min or 1%.',
        'Donate max daily entries to Alliance Tech to hoard Honor coins.',
        'Teleport to the Alliance Hive on alliance territory to gain gathering speed and defense buffs.'
      ]
    },
    commonMistakes: {
      ru: 'Оставаться в слабом или мертвом альянсе ради звания R4/R5 вместо перехода в топ-альянс за тоннами наград.',
      en: 'Staying in a dead casual alliance just for an R4 title instead of moving to a top alliance with active chests.',
      de: 'In einer inaktiven Allianz bleiben, nur um R4 zu sein, statt in die Top-Allianz mit Geschenken zu wechseln.',
      es: 'Quedarse en una alianza inactiva por un cargo en vez de unirse a una del top con cofres constantes.',
      fr: 'Rester dans une alliance morte pour être officier au lieu de rejoindre le top pour les récompenses.',
      id: 'Bertahan di aliansi sepi hanya demi jabatan, mengabaikan lautan peti gratis di aliansi top.',
      ja: '過疎同盟に留まって役職を守るより、課金ギフトが飛び交う上位同盟に移籍すべき。',
      ko: '간부 자리를 지키겠다고 비활성 연맹에 남아 거대한 보상 상자를 놓치는 실수.',
      pt: 'Permanecer em uma aliança fraca por cargo em vez de migrar para a aliança líder com baús diários.'
    },
    guideUrl: 'alliance',
    guideLabel: {
      ru: 'Гайд по Альянсу и подаркам →',
      en: 'Alliance Hub & Strategy Guide →',
      de: 'Allianz-Leitfaden öffnen →',
      es: 'Guía del Centro de Alianzas →',
      fr: 'Guide complet de l\'Alliance →',
      id: 'Panduan Hub Aliansi →',
      ja: '同盟ハブ＆戦略ガイド →',
      ko: '연맹 허브 및 전략 가이드 →',
      pt: 'Guia do Centro de Aliança →'
    }
  },
  {
    id: 'cynthia-wheel',
    dayStart: 8,
    dayEnd: 13,
    chapter: 1,
    category: 'heroes',
    icon: '🎯',
    officialMilestoneIds: [1000, 10000],
    title: {
      ru: 'Первая Рулетка Героя: Цинтия (Cynthia)',
      en: 'First Hero Roulette: Cynthia',
      de: 'Erstes Helden-Glücksrad: Cynthia',
      es: 'Primera Ruleta de Héroe: Cynthia',
      fr: 'Première Roulette de Héros : Cynthia',
      id: 'Roulette Hero Pertama: Cynthia',
      ja: '初の英雄ルーレット：シンシア',
      ko: '첫 번째 영웅 룰렛: 신시아',
      pt: 'Primeira Roleta de Herói: Cynthia'
    },
    badge: {
      ru: 'День 8–13',
      en: 'Day 8–13',
      de: 'Day 8–13',
      es: 'Día 8–13',
      fr: 'Jour 8–13',
      id: 'Hari 8–13',
      ja: '8〜13日目',
      ko: '8~13일차',
      pt: 'Dia 8–13'
    },
    shortDesc: {
      ru: 'Первое колесо фортуны UR героя. Цинтия — лучший стрелок ранней игры для доминирования на Арене.',
      en: 'First UR Hero Wheel. Cynthia is the premier early-game Ranger carry for dominating the Hero Arena.',
      de: 'Erstes UR-Heldenrad. Cynthia ist der stärkste frühe Waldläufer-Carry für die Helden-Arena.',
      es: 'Primera ruleta de héroe UR. Cynthia es la tiradora principal para dominar la Arena temprana.',
      fr: 'Première roulette UR. Cynthia est le carry Ranger idéal pour écraser l\'Arène de début de jeu.',
      id: 'Roulette UR pertama. Cynthia adalah ranger carry terkuat di awal game untuk menguasai Arena.',
      ja: '初のUR英雄ルーレット。シンシアは序盤のアリーナで圧倒的火力を誇る射手キャリー。',
      ko: '첫 번째 UR 영웅 룰렛. 신시아는 초반 투기장 정복을 위한 핵심 원거리 딜러.',
      pt: 'Primeira roleta de herói UR. Cynthia é a atiradora ideal para dominar a Arena inicial.'
    },
    unlockCondition: {
      ru: '8-й день сервера (второй понедельник)',
      en: 'Server Day 8 (second Monday)',
      de: 'Server-Tag 8 (zweiter Montag)',
      es: 'Día 8 del servidor (segundo lunes)',
      fr: 'Jour 8 du serveur (deuxième lundi)',
      id: 'Hari ke-8 server (Senin kedua)',
      ja: 'サーバー8日目（第2月曜日）',
      ko: '서버 8일차(두 번째 월요일)',
      pt: 'Dia 8 do servidor (segunda segunda-feira)'
    },
    whatToHoard: {
      ru: 'Самоцветы (Gems) и билеты рулетки. F2P игрокам крутить до гарантированного порога (10-30 круток).',
      en: 'Gems and Roulette tickets. F2P players should spin to milestone chest thresholds (10-30 spins).',
      de: 'Edelsteine und Glücksrad-Tickets. F2P-Spieler sollten Meilenstein-Kisten (10-30 Spins) anpeilen.',
      es: 'Gemas y boletos de ruleta. F2P debe tirar hasta los cofres de objetivo (10 a 30 giros).',
      fr: 'Gemmes et tickets de roulette. Les F2P doivent viser les coffres de paliers (10 à 30 tirages).',
      id: 'Permata dan tiket roulette. Pemain F2P sebaiknya putar hingga batas peti milestone (10-30 putaran).',
      ja: 'ジェムとルーレット券。無課金はマイルストーン宝箱（10〜30回転）を目標に回す。',
      ko: '보석 및 룰렛 티켓. 무과금 유저는 마일스톤 상자 구간(10~30회)까지만 확정 회전.',
      pt: 'Gemas e bilhetes de roleta. F2P deve girar até os baús de marco (10 a 30 giros).'
    },
    keyTips: {
      ru: [
        'Цинтия наносит сокрушительный урон по задней линии противника на ранней Арене.',
        'Если вы F2P и планируете мейнить Воинов (Артур + Марлена), не сливайте все самоцветы — оставьте на Марлену.',
        'Донатерам: прокачка Цинтии до 4★–8★ дает абсолютное доминирование в первых межсерверных дуэлях.',
        'Крутите колесо партиями по 10 для получения бонусных очков прогресса.'
      ],
      en: [
        'Cynthia snipes backline carries in early Arena battles with devastating precision.',
        'If going F2P Warrior path (Arthur + Marlena), do not blow all gems — save for Marlena Day 66.',
        'For spenders: pushing Cynthia to 4★–8★ guarantees Top-10 Arena rankings and easy Duel points.',
        'Always spin in 10x batches for milestone progression bonus chests.'
      ]
    },
    commonMistakes: {
      ru: 'Крутить колесо без накопленных самоцветов на 1-2 крутки наугад, не дотягивая до сундуков гарантированных осколков.',
      en: 'Doing random single spins without saving enough to hit the guaranteed shard milestone chests.',
      de: 'Einzelne Spins ohne Plan machen und die garantierten Splitter-Kisten verpassen.',
      es: 'Hacer giros individuales al azar sin llegar a los cofres de fragmentos garantizados.',
      fr: 'Faire des tirages uniques au hasard sans atteindre les coffres de fragments garantis.',
      id: 'Melakukan putaran acak tanpa modal permata yang cukup untuk meraih peti shard terjamin.',
      ja: '単発で適当に回し、確定破片がもらえるマイルストーン宝箱に届かないこと。',
      ko: '무작정 단발로 돌려 확정 조각 상자 보상을 챙기지 못하고 낭비하는 것.',
      pt: 'Fazer giros avulsos sem guardar saldo suficiente para alcançar os baús com fragmentos garantidos.'
    },
    guideUrl: 'codex/cynthia',
    guideLabel: {
      ru: 'Карточка Цинтии в Кодексе →',
      en: 'Cynthia Hero Codex Profile →',
      de: 'Cynthia-Heldendetails →',
      es: 'Ficha de Cynthia en el Códice →',
      fr: 'Fiche de Cynthia dans le Codex →',
      id: 'Profil Cynthia di Kodeks →',
      ja: 'シンシアの英雄図鑑を見る →',
      ko: '신시아 영웅 도감 보기 →',
      pt: 'Ficha de Cynthia no Códice →'
    }
  },
  {
    id: 'undead-siege',
    dayStart: 14,
    dayEnd: 14,
    chapter: 1,
    category: 'pve',
    icon: '🧟',
    officialMilestoneIds: [20100, 11000, 12000],
    title: {
      ru: 'Первая Осада Нежити (Undead Siege)',
      en: 'First Undead Siege (Zombie Waves)',
      de: 'Erste Untoten-Belagerung (20 Wellen)',
      es: 'Primer Asedio de No Muertos (20 oleadas)',
      fr: 'Premier Siège des Morts-Vivants',
      id: 'Undead Siege Pertama (20 Gelombang)',
      ja: '初回のアンデッド包囲戦（20波）',
      ko: '첫 번째 언데드 공성전(20웨이브)',
      pt: 'Primeiro Cerco dos Mortos-vivos (20 ondas)'
    },
    badge: {
      ru: 'День 14',
      en: 'Day 14',
      de: 'Tag 14',
      es: 'Día 14',
      fr: 'Jour 14',
      id: 'Hari 14',
      ja: '14日目',
      ko: '14일차',
      pt: 'Dia 14'
    },
    shortDesc: {
      ru: '20 волн нежити на базы каждого игрока. Запускается альянсом после набора 300 000 улик.',
      en: '20 zombie waves targeting each player base. Triggered by alliance upon reaching 300K clues.',
      de: '20 Zombie-Wellen auf jede Spielerbasis. Startet nach Sammlung von 300K Hinweisen.',
      es: '20 oleadas de zombis contra la base. Se activa tras reunir 300.000 pistas de alianza.',
      fr: '20 vagues de zombies sur votre base. Déclenché par l\'alliance dès 300 000 indices récoltés.',
      id: '20 gelombang zombie menyerang markas. Dipicu oleh aliansi setelah mengumpulkan 300K petunjuk.',
      ja: '各プレイヤーの拠点を襲うゾンビ20波。同盟で手掛かり30万到達時にR4/R5が発動。',
      ko: '각 기지를 침공하는 20웨이브 언데드. 연맹 단서 30만 개 수집 후 발동.',
      pt: '20 ondas de zumbis atacando as bases. Ativado pela aliança ao atingir 300 mil pistas.'
    },
    unlockCondition: {
      ru: 'Ровно 2 недели серверу (14-й день), сбор 300K улик альянса',
      en: 'Exactly 2 weeks from server launch (Day 14), 300K alliance clues',
      de: 'Genau 2 Wochen nach Serverstart (Tag 14), 300K Allianz-Hinweise',
      es: 'Exactamente 2 semanas del servidor (Día 14), 300K pistas',
      fr: 'Exactement 2 semaines de serveur (Jour 14), 300K indices',
      id: 'Tepat 2 minggu umur server (Hari ke-14), 300K petunjuk aliansi',
      ja: 'サーバー開始からちょうど2週間（14日目）、手掛かり30万個',
      ko: '서버 오픈 2주차(14일차), 연맹 단서 30만 개 달성',
      pt: 'Exatamente 2 semanas do servidor (Dia 14), 300 mil pistas da aliança'
    },
    whatToHoard: {
      ru: 'Все боевые отряды держать дома; запастись зельями лечения и не отправлять сборщиков на плиты.',
      en: 'Keep all squads inside Sanctuary walls; stock healing potions and recall gatherers before launch.',
      de: 'Alle Truppen in der Basis halten; Heilmittel bereithalten und Sammler zurückrufen.',
      es: 'Mantén las tropas en la base; prepara pociones y retira recolectores antes de iniciar.',
      fr: 'Rappelez toutes vos troupes à la base ; préparez les soins et arrêtez la récolte.',
      id: 'Tarik semua pasukan ke markas; siapkan ramuan penyembuh dan batalkan gathering.',
      ja: '全軍を城壁内に待機。採集部隊は事前に帰還させ、治療薬品を準備。',
      ko: '모든 부대를 기지 내로 복귀. 채집 부대 철수 및 치료 물약 사전 확보.',
      pt: 'Mantenha todos os esquadrões na base; prepare poções de cura e recolha tropas coletoras.'
    },
    keyTips: {
      ru: [
        'СЕКРЕТНАЯ МЕХАНИКА: Отправляйте 2–3 отряда подкрепления союзникам, которые офлайн. Очки за убийства начисляются и вам, и защитнику!',
        'HP защитников сохраняется между волнами: если соклан просел по здоровью, отправьте свежее подкрепление.',
        'Волны 7, 14 и 20 — боссы повышенной сложности: обязательно требуются полные гарнизоны.',
        'Успешная защита всех 20 волн дает тонны очков технологий, алмазов и значков навыков.'
      ],
      en: [
        'SECRET MECHANIC: Send 2–3 reinforcement squads to offline alliance members. You AND they both get kill points!',
        'Defender HP carries over between waves: if a teammate takes heavy hits, reinforce them with fresh troops.',
        'Waves 7, 14, and 20 are elite boss waves requiring fully manned garrison walls.',
        'Completing all 20 waves yields massive Alliance Honor, Tech points, and Skill badges.'
      ]
    },
    commonMistakes: {
      ru: 'Оставлять марши на сбор ресурсов во время осады — база окажется беззащитной и сгорит на 5–10 волне.',
      en: 'Leaving gatherers on map tiles during the event — undefended bases burn by wave 7.',
      de: 'Truppen beim Sammeln lassen — ungeschützte Basen brennen ab Welle 7 ab.',
      es: 'Dejar tropas recolectando fuera — las bases indefensas arden hacia la oleada 7.',
      fr: 'Laisser ses troupes récolter — les bases vides brûlent dès la vague 7.',
      id: 'Membiarkan pasukan farming di luar saat event — markas kosong akan terbakar di gelombang 7.',
      ja: '包囲戦中に部隊を外で採集させたままにして城壁が燃え落ちること。',
      ko: '공성전 시작 후 채집을 나갔다가 수비 병력 부재로 7웨이브 만에 불타는 실수.',
      pt: 'Deixar esquadrões coletando recursos fora da base — a cidade indefesa queima na onda 7.'
    },
    guideUrl: 'events/undead',
    guideLabel: {
      ru: 'Полный гайд по Осаде Нежити →',
      en: 'Undead Siege Complete Guide →',
      de: 'Untoten-Belagerungsguide ansehen →',
      es: 'Guía del Asedio de No Muertos →',
      fr: 'Guide complet du Siège des morts-vivants →',
      id: 'Panduan Lengkap Undead Siege →',
      ja: 'アンデッド包囲戦攻略ガイド →',
      ko: '언데드 공성전 완벽 공략 →',
      pt: 'Guia Completo do Cerco dos Mortos-vivos →'
    }
  },
  {
    id: 'alliance-duel-qual',
    dayStart: 15,
    dayEnd: 20,
    chapter: 2,
    category: 'alliance',
    icon: '⚔️',
    officialMilestoneIds: [18000, 13000, 14000, 15000],
    title: {
      ru: 'Первая Дуэль Альянсов (Квалификация Top-32)',
      en: 'First Alliance Duel (Top-32 Qualification)',
      de: 'Erstes Allianz-Duell (Top-32 Qualifikation)',
      es: 'Primer Duelo de Alianzas (Clasificación Top-32)',
      fr: 'Premier Duel d\'Alliances (Qualification Top-32)',
      id: 'Duel Aliansi Pertama (Kualifikasi Top-32)',
      ja: '初回同盟対決（Top-32予選）',
      ko: '첫 번째 연맹 대결(Top-32 예선전)',
      pt: 'Primeiro Duelo de Alianças (Qualificação Top-32)'
    },
    badge: {
      ru: 'День 15–20',
      en: 'Day 15–20',
      de: 'Tag 15–20',
      es: 'Día 15–20',
      fr: 'Jour 15–20',
      id: 'Hari 15–20',
      ja: '15〜20日目',
      ko: '15~20일차',
      pt: 'Dia 15–20'
    },
    shortDesc: {
      ru: 'Старт недельного марафона очков: Пн (Ворон), Вт (Стройка), Ср (Наука), Чт (Герои), Пт (Войска), Сб (PvP).',
      en: '6-day point race begins: Mon (Raven), Tue (Build), Wed (Tech), Thu (Heroes), Fri (Troops), Sat (PvP).',
      de: '6-Tage-Punkterennen: Mo (Rabe), Di (Bau), Mi (Forschung), Do (Helden), Fr (Truppen), Sa (PvP).',
      es: 'Inicia la carrera de 6 días: Lun (Cuervo), Mar (Construcción), Mié (Ciencia), Jue (Héroes), Vie (Tropas), Sáb (PvP).',
      fr: 'Course aux points de 6 jours : Lun (Corbeau), Mar (Bâtiment), Mer (Recherche), Jeu (Héros), Ven (Troupes), Sam (PvP).',
      id: 'Kompetisi poin 6 hari: Sen (Raven), Sel (Bangun), Rab (Riset), Kam (Hero), Jum (Pasukan), Sab (PvP).',
      ja: '6日間のスコア競争：月（カラス）、火（建築）、水（研究）、木（英雄）、金（訓練）、土（PvP）。',
      ko: '6일간의 포인트 대결 시작: 월(까마귀), 화(건설), 수(연구), 목(영웅), 금(훈련), 토(PvP).',
      pt: 'Início da disputa de 6 dias: Seg (Corvo), Ter (Obras), Qua (Pesquisa), Qui (Heróis), Sex (Tropas), Sáb (PvP).'
    },
    unlockCondition: {
      ru: 'Третий понедельник сервера (15-й день), топ-32 альянса сервера',
      en: 'Third Monday of server (Day 15), top 32 alliances on server',
      de: 'Dritter Montag des Servers (Tag 15), Top-32 Allianzen',
      es: 'Tercer lunes del servidor (Día 15), top 32 alianzas',
      fr: 'Troisième lundi du serveur (Jour 15), top 32 des alliances',
      id: 'Senin ketiga server (Hari ke-15), top 32 aliansi',
      ja: 'サーバー第3月曜日（15日目）、サーバー上位32同盟',
      ko: '서버 3주차 월요일(15일차), 서버 내 상위 32개 연맹',
      pt: 'Terceira segunda-feira do servidor (Dia 15), top 32 alianças'
    },
    whatToHoard: {
      ru: 'Трюк Falcon Tower: задания воскресенья сдавать в понедельник; осколки копить на четверг; тренировку на пятницу.',
      en: 'Falcon trick: hold Sunday quests for Monday; hoard hero shards for Thursday; training speedups for Friday.',
      de: 'Falkenturm-Trick: Sonntagsquests am Montag einlösen; Heldensplitter für Donnerstag; Beschleuniger für Freitag.',
      es: 'Truco del Halcón: guarda misiones del domingo para el lunes; fragmentos para el jueves; aceleradores para el viernes.',
      fr: 'Astuce Faucon : validez dimanche le lundi ; gardez les fragments pour jeudi et les accélérations pour vendredi.',
      id: 'Trik Menara Elang: klaim misi Minggu di hari Senin; shard hero di hari Kamis; speedup latihan di hari Jumat.',
      ja: 'ファルコン温存術：日曜達成分を月曜受取、破片は木曜、訓練加速は金曜に全投入。',
      ko: '매의 탑 요령: 일요일 퀘스트는 월요일에 수령, 영웅 조각은 목요일, 훈련 가속은 금요일 집중 소모.',
      pt: 'Truque da Torre: resgate missões de domingo na segunda; fragmentos na quinta; aceleradores na sexta.'
    },
    keyTips: {
      ru: [
        'Понедельник (День 1): Сжигайте Сущность Ворона и Плоды Ворона. Заберите задания соколиной башни с воскресенья.',
        'Среда (День 3): Сжигайте свитки исследований и открывайте сундуки эпиграфов Ворона.',
        'Четверг (День 4): Сливайте ВСЕ осколки героев (SSR/UR), книги навыков и антитоксин — колоссальный буст очков!',
        'Пятница (День 5): Сжигайте ускорения тренировки войск — апайте солдат на +1 тир (T8 → T9 выгоднее, чем T1 → T9).'
      ],
      en: [
        'Monday (Phase 1): Dump all Raven Essence and Fruit. Claim saved Sunday Falcon quests.',
        'Wednesday (Phase 3): Burn study scrolls and crack open Raven Epigraph chests.',
        'Thursday (Phase 4): Dump ALL hero shards (UR/SSR), skill badges, and antitoxin for massive points.',
        'Friday (Phase 5): Burn troop speedups — upgrade existing soldiers by +1 tier (cheaper points per minute).'
      ]
    },
    commonMistakes: {
      ru: 'Слив осколков героев во вторник или трата ускорений тренировки войск в среду вместо профильных дней.',
      en: 'Spending hero shards on Tuesday or burning troop training speedups on Wednesday.',
      de: 'Heldensplitter am Dienstag verbrauchen oder Truppenbeschleuniger am Mittwoch verbrennen.',
      es: 'Gastar fragmentos de héroe el martes o quemar aceleradores de tropas el miércoles.',
      fr: 'Dépenser ses fragments le mardi ou brûler ses accélérations d\'entraînement le mercredi.',
      id: 'Membuang shard hero di hari Selasa atau memakai speedup latihan pasukan di hari Rabu.',
      ja: '火曜日に英雄破片を使ったり、水曜日に部隊訓練加速を燃やしてしまうこと。',
      ko: '화요일에 영웅 조각을 소모하거나 수요일에 훈련 가속을 태우는 타이밍 미스.',
      pt: 'Gastar fragmentos na terça ou queimar aceleradores de treinamento na quarta fora da fase certa.'
    },
    guideUrl: 'events/alliance-duel',
    guideLabel: {
      ru: 'Калькулятор и стратегия Дуэли Альянсов →',
      en: 'Alliance Duel Calculator & Guide →',
      de: 'Allianz-Duell-Rechner & Guide →',
      es: 'Calculadora y guía del Duelo de Alianzas →',
      fr: 'Calculateur et guide du Duel d\'Alliances →',
      id: 'Kalkulator & Panduan Duel Aliansi →',
      ja: '同盟対決計算機＆完全攻略 →',
      ko: '연맹 대결 계산기 및 공략 보기 →',
      pt: 'Calculadora e Guia do Duelo de Alianças →'
    }
  },
  {
    id: 'caravan-canyon',
    dayStart: 21,
    dayEnd: 27,
    chapter: 2,
    category: 'alliance',
    icon: '🚚',
    officialMilestoneIds: [18001, 16000, 19000, 20000],
    title: {
      ru: 'Торговый Караван и Битва за Каньон',
      en: 'Alliance Caravan & Canyon Clash',
      de: 'Allianz-Handelskarawane & Canyon-Schlacht',
      es: 'Caravana de Alianza y Batalla del Cañón',
      fr: 'Caravane d\'Alliance et Choc du Canyon',
      id: 'Karavan Aliansi & Canyon Clash',
      ja: '隊商輸送とキャニオン戦',
      ko: '연맹 무역 상단 및 캐니언 전투',
      pt: 'Caravana da Aliança e Batalha do Desfiladeiro'
    },
    badge: {
      ru: 'День 21–27',
      en: 'Day 21–27',
      de: 'Tag 21–27',
      es: 'Día 21–27',
      fr: 'Jour 21–27',
      id: 'Hari 21–27',
      ja: '21〜27日目',
      ko: '21~27일차',
      pt: 'Dia 21–27'
    },
    shortDesc: {
      ru: 'Бесплатный ежедневный вагон альянса (02:00 UTC), грабежи караванов и командные бои в Каньоне за шахты.',
      en: 'Daily free Alliance Wagon (02:00 UTC), cross-border caravan raids, and Canyon team battlegrounds.',
      de: 'Täglicher kostenloser Wagen (02:00 UTC), Karawanen-Überfälle und Canyon-Schlachten.',
      es: 'Vagón diario gratis (02:00 UTC), asaltos a caravanas y batallas del Cañón.',
      fr: 'Chariot gratuit quotidien (02:00 UTC), pillages de caravanes et champs de bataille du Canyon.',
      id: 'Gerobak gratis harian (02:00 UTC), pembajakan karavan, dan perebutan tambang Canyon.',
      ja: '毎日無料の同盟輸送車（02:00 UTC）、他サーバー隊商の略奪、キャニオン戦。',
      ko: '매일 무료 연맹 마차(02:00 UTC), 국경 상단 약탈, 캐니언 팀 대항전.',
      pt: 'Carroça gratuita diária (02:00 UTC), saques a caravanas e batalhas em equipe no Desfiladeiro.'
    },
    unlockCondition: {
      ru: '21-й день сервера (3 недели)',
      en: 'Server Day 21 (3 weeks from launch)',
      de: 'Server-Tag 21 (3 Wochen)',
      es: 'Día 21 del servidor (3 semanas)',
      fr: 'Jour 21 du serveur (3 semaines)',
      id: 'Hari ke-21 server (3 minggu)',
      ja: 'サーバー21日目（開始から3週間）',
      ko: '서버 21일차(3주차)',
      pt: 'Dia 21 do servidor (3 semanas)'
    },
    whatToHoard: {
      ru: 'Привилегия подарков 25 уровня альянса дает +1 пассажира на вагон. Копите попытки рейда на «Foreign Caravan».',
      en: 'Level 25 Alliance Gift privilege unlocks +1 passenger. Save raid attempts for the Foreign Caravan tab.',
      de: 'Stufe 25 Geschenke-Privileg bringt +1 Passagier. Raids für den Foreign-Caravan-Tab aufsparen.',
      es: 'Privilegio de nivel 25 de regalos otorga +1 pasajero. Guarda intentos de asalto para caravanas foráneas.',
      fr: 'Le palier 25 des cadeaux donne +1 passager. Gardez vos attaques pour les caravanes étrangères.',
      id: 'Privilesi hadiah Lv 25 membuka +1 penumpang. Simpan percobaan raid untuk karavan luar server.',
      ja: '同盟ギフトLv.25で搭乗者+1枠解放。略奪回数は「他サーバー隊商」タブで使用。',
      ko: '연맹 선물 25레벨 특권 달성 시 마차 탑승자 +1명 추가. 약탈 기회는 외부 서버 상단에 사용.',
      pt: 'Privilégio de presentes nível 25 garante +1 passageiro. Guarde tentativas para caravanas estrangeiras.'
    },
    keyTips: {
      ru: [
        'Каждый день ровно в 02:00 UTC альянс получает 1 бесплатный вагон. Пассажиры получают тысячи золотых слитков.',
        'Во вкладке «Foreign Caravan» нападайте на чужие повозки — это дает ценные осколки UR и ресурсы.',
        'В Битве за Каньон занимайте центральную башню и сопровождайте вагонетки ради победных очков.',
        'Не садитесь в вагон в одиночку без эскорта сильнейших бойцов альянса.'
      ],
      en: [
        'Every day at 02:00 UTC the alliance receives 1 free Wagon. Passengers haul thousands of Gold bars.',
        'Use the "Foreign Caravan" tab to loot rival wagons for UR shards and raw resources.',
        'In Canyon Clash, secure the center tower and escort resource carts for victory points.',
        'Never board a wagon without escort from your alliance\'s highest combat power players.'
      ]
    },
    commonMistakes: {
      ru: 'Грабить слабые местные повозки вместо перехода во вкладку внешних серверов (где в 3 раза ценнее добыча).',
      en: 'Raiding weak local trucks instead of hitting foreign server caravans with triple rewards.',
      de: 'Lokale Mini-Trucks plündern statt lohnende Außen-Karawanen anzugreifen.',
      es: 'Asaltar camiones locales pobres en lugar de buscar caravanas de servidores externos.',
      fr: 'Piller de petits camions locaux au lieu de viser les caravanas étrangères aux récompenses triplées.',
      id: 'Membajak truk lokal berhadiah kecil dibanding merampok karavan server asing berhadiah triple.',
      ja: '報酬の少ない自サーバーの荷馬車を襲い、3倍美味い他サーバー隊商を見落とすこと。',
      ko: '보상이 적은 내부 서버 마차를 약탈하느라 3배 가치의 외부 서버 상단을 놓치는 실수.',
      pt: 'Saquear caminhões locais fracos em vez de buscar caravanas de outros servidores com recompensas triplas.'
    },
    guideUrl: 'events/wagon',
    guideLabel: {
      ru: 'Гайд по Торговому Каравану →',
      en: 'Alliance Caravan & Wagon Guide →',
      de: 'Karawanen-Leitfaden öffnen →',
      es: 'Guía de Caravana y Vagón →',
      fr: 'Guide de la Caravane d\'Alliance →',
      id: 'Panduan Karavan & Wagon →',
      ja: '隊商輸送・荷馬車完全攻略 →',
      ko: '연맹 무역 상단 공략 보기 →',
      pt: 'Guia da Caravana da Aliança →'
    }
  },
  {
    id: 'kvk-start',
    dayStart: 28,
    dayEnd: 34,
    chapter: 3,
    category: 'pvp',
    icon: '👑',
    officialMilestoneIds: [28000, 29000, 31000, 24000, 26000],
    title: {
      ru: 'Война Королевств (KvK) и Межсерверный Прорыв',
      en: 'Kingdom War (KvK) & Cross-Server Warfare',
      de: 'Krieg der Königreiche (KvK) & Server-Grenzöffnung',
      es: 'Guerra de Reinos (KvK) y Guerra entre Servidores',
      fr: 'Guerre des Royaumes (KvK) et Guerre Inter-Serveurs',
      id: 'Kingdom War (KvK) & Perang Antar Server',
      ja: '王国戦争（KvK）と星間戦争の幕開け',
      ko: '왕국 전쟁(KvK) 및 서버 간 대전 발발',
      pt: 'Guerra dos Reinos (KvK) e Guerra Inter-Servidores'
    },
    badge: {
      ru: 'День 28–34',
      en: 'Day 28–34',
      de: 'Tag 28–34',
      es: 'Día 28–34',
      fr: 'Jour 28–34',
      id: 'Hari 28–34',
      ja: '28〜34日目',
      ko: '28~34일차',
      pt: 'Dia 28–34'
    },
    shortDesc: {
      ru: 'Границы сервера рушатся! Дуэль альянсов теперь против вражеского сервера. В субботу — 4-часовой штурм замка.',
      en: 'Server borders shatter! Alliance Duel pits you against enemy servers. Saturday features 4-hour castle warfare.',
      de: 'Servergrenzen brechen! Allianz-Duell gegen gegnerische Server. Samstag: 4-Stunden-Schlosskampf.',
      es: '¡Se rompen las fronteras! Duelo de Alianzas contra servidores rivales. Asalto de 4 horas el sábado.',
      fr: 'Les frontières cèdent ! Duel d\'alliances inter-serveurs. Le samedi : 4 heures de combat pour le château.',
      id: 'Batas server hancur! Duel aliansi melawan server musuh. Sabtu: perang kastil 4 jam penuh.',
      ja: 'サーバーの境界線崩壊！同盟対決は敵対サーバーとの直接対決へ。土曜日は4時間の王城争奪戦。',
      ko: '서버 장벽 붕괴! 상대 서버와의 연맹 대결 매칭. 토요일 4시간 동안의 국왕 성채 총력전.',
      pt: 'Fronteiras rompidas! Duelo de Alianças contra servidores inimigos. Sábado com 4h de guerra pelo castelo.'
    },
    unlockCondition: {
      ru: 'Конец 4-й недели сервера (28–29 день)',
      en: 'End of 4th week from server launch (Day 28–29)',
      de: 'Ende der 4. Woche (Tag 28–29)',
      es: 'Final de la 4.ª semana (Día 28–29)',
      fr: 'Fin de la 4e semaine (Jour 28–29)',
      id: 'Akhir minggu ke-4 (Hari 28–29)',
      ja: '第4週の終わり（28〜29日目）',
      ko: '4주차 마감 시점(28~29일차)',
      pt: 'Final da 4ª semana (Dia 28–29)'
    },
    whatToHoard: {
      ru: 'Щиты мира (Peace Shield 8ч/24ч), точные телепорты, ресурсы на госпиталь (Herbs), ускорения лечения.',
      en: 'Peace Shields (8h/24h), Advanced Teleports, healing herbs, and rapid treatment speedups.',
      de: 'Friedensschilde (8h/24h), Fortgeschrittene Teleporte, Heilkräuter und Lazarett-Beschleuniger.',
      es: 'Escudos de paz (8h/24h), teletransportes avanzados, hierbas curativas y aceleradores de hospital.',
      fr: 'Boucliers de paix (8h/24h), téléportations avancées, herbes et accélérations de soins.',
      id: 'Perisai Perdamaian (8j/24j), Teleport Lanjutan, herba medis, dan percepatan penyembuhan.',
      ja: '平和の盾（8時間/24時間）、高級テレポート、病院治療薬草、治療加速。',
      ko: '평화의 방패(8시간/24시간), 지정 텔레포트, 병원 치료 약초 및 치료 가속.',
      pt: 'Escudos de Paz (8h/24h), Teleportes Avançados, ervas medicinais e aceleradores de hospital.'
    },
    keyTips: {
      ru: [
        'СНИМАЙТЕ ВОЙСКА СО СТЕН, когда уходите в оффлайн в субботу во время KvK, если нет активного щита!',
        'Вражеские рейдеры могут телепортироваться прямо в ваш Улей и сжечь базу за 20 секунд.',
        'Во время штурма Королевского замка (Royal Showdown) держите связь в Discord альянса для ротации подкреплений (макс. 30 слотов).',
        'Убивайте врагов только на равных или превосходящих позициях; не сливайте войска в укрепленные гарнизоны.'
      ],
      en: [
        'STRIP GARRISONS OFF WALLS when going offline on Saturday KvK unless shielded!',
        'Rival whale raiders can drop right next to your sanctuary and zero your troops in 20 seconds.',
        'During the Royal Castle clash, coordinate on alliance voice chat for garrison rotations (max 30 slots).',
        'Fight only on favorable terms; never blindly solo-hit reinforced enemy defense hubs.'
      ]
    },
    commonMistakes: {
      ru: 'Заснуть в субботу без щита мира с полным гарнизоном на стенах: просыпаетесь с нулевой армией и переполненным моргом.',
      en: 'Falling asleep on Saturday without a peace shield while leaving troops on walls: full wipeout and overflow hospital.',
      de: 'Samstags ohne Schild einschlafen und Truppen auf den Mauern lassen: Totalverlust und überfülltes Lazarett.',
      es: 'Quedarse dormido el sábado sin escudo con tropas en muros: aniquilación total y morgue llena.',
      fr: 'S\'endormir le samedi sans bouclier avec troupes sur les remparts : zéro armée et hôpital saturé.',
      id: 'Tertidur di hari Sabtu tanpa perisai dengan pasukan di dinding: markas rata dan rumah sakit penuh.',
      ja: '土曜日にシールドなしで就寝し、城壁に兵士を置いたまま全滅＆病院満杯の悲劇。',
      ko: '토요일에 쉴드 없이 성벽에 병력을 둔 채 잠들어 전 병력이 사망하고 영안실로 직행하는 참사.',
      pt: 'Dormir no sábado sem escudo deixando tropas nas muralhas: aniquilação completa e hospital lotado.'
    },
    guideUrl: 'events/kvk',
    guideLabel: {
      ru: 'Тактический гайд по Войне Королевств (KvK) →',
      en: 'Kingdom War (KvK) Tactical Guide →',
      de: 'KvK-Taktik-Guide öffnen →',
      es: 'Guía táctica de Guerra de Reinos (KvK) →',
      fr: 'Guide tactique de Guerre des Royaumes (KvK) →',
      id: 'Panduan Taktis Kingdom War (KvK) →',
      ja: '王国戦争（KvK）戦術ガイド →',
      ko: '왕국 전쟁(KvK) 전술 공략 보기 →',
      pt: 'Guia Tático da Guerra dos Reinos (KvK) →'
    }
  },
  {
    id: 'hero-pool-expand',
    dayStart: 35,
    dayEnd: 44,
    chapter: 3,
    category: 'heroes',
    icon: '🔮',
    officialMilestoneIds: [21000, 22000, 23000, 27000],
    title: {
      ru: 'Расширение Пула: Шэдоу (Shadow), Джокер, Белла',
      en: 'Hero Pool Expansion: Shadow, Joker, Bella',
      de: 'Heldenpool-Erweiterung: Shadow, Joker, Bella',
      es: 'Expansión de Héroes: Shadow, Joker y Bella',
      fr: 'Expansion des Héros : Shadow, Joker et Bella',
      id: 'Ekspansi Hero: Shadow, Joker, Bella',
      ja: '英雄プール拡張：シャドウ、ジョーカー、ベラ',
      ko: '영웅 풀 확장: 섀도우, 조커, 벨라',
      pt: 'Expansão de Heróis: Shadow, Joker e Bella'
    },
    badge: {
      ru: 'День 35–44',
      en: 'Day 35–44',
      de: 'Tag 35–44',
      es: 'Día 35–44',
      fr: 'Jour 35–44',
      id: 'Hari 35–44',
      ja: '35〜44日目',
      ko: '35~44일차',
      pt: 'Dia 35–44'
    },
    shortDesc: {
      ru: 'Появление Шэдоу (UR Чернокнижник с взрывным уроном), Джокера (контроль) и переход к моно-фракциям.',
      en: 'Arrival of Shadow (burst UR Warlock carry), Joker (crowd control), and transitioning into mono-factions.',
      de: 'Ankunft von Shadow (UR Hexenmeister-Carry), Joker (Debuff) und Übergang zu Mono-Fraktionen.',
      es: 'Llegada de Shadow (Warlock UR de alto daño), Joker y especialización en mono-facciones.',
      fr: 'Arrivée de Shadow (Warlock UR à burst), Joker et spécialisation en mono-factions.',
      id: 'Kehadiran Shadow (carry Warlock UR burst), Joker, dan pembentukan skuad mono-fraksi.',
      ja: 'シャドウ（爆発的AoE火力のUR黒魔術師）、ジョーカー登場。単一兵科編成への移行期。',
      ko: '섀도우(폭발적인 광역 딜러 UR 흑마법사), 조커 등장 및 단일 병과 특화 시기.',
      pt: 'Chegada de Shadow (carry Bruxo UR explosivo), Joker e transição para esquadrões mono-facção.'
    },
    unlockCondition: {
      ru: '35-й день сервера (5-я неделя)',
      en: 'Server Day 35 (5th week)',
      de: 'Server-Tag 35 (5. Woche)',
      es: 'Día 35 del servidor (5.ª semana)',
      fr: 'Jour 35 du serveur (5e semaine)',
      id: 'Hari ke-35 server (minggu ke-5)',
      ja: 'サーバー35日目（第5週）',
      ko: '서버 35일차(5주차)',
      pt: 'Dia 35 do servidor (5ª semana)'
    },
    whatToHoard: {
      ru: 'Осколки UR героев. Не распыляйте осколки: выберите 1 ведущую фракцию (Воины, Стрелки или Чернокнижники).',
      en: 'Universal UR shards. Pick ONE main faction focus (Warriors, Rangers, or Warlocks); never split 3 ways.',
      de: 'Universelle UR-Splitter. Wähle EINE Hauptfraktion (Krieger, Schützen oder Hexenmeister); nicht verzetteln.',
      es: 'Fragmentos UR universales. Elige UNA facción principal (Guerreros, Tiradores o Brujos).',
      fr: 'Fragments UR universels. Choisissez UNE faction principale (Guerriers, Rangers ou Démonistes).',
      id: 'Shard UR universal. Fokus pada SATU faksi utama (Warrior, Ranger, atau Warlock).',
      ja: '万能UR破片。戦士、射手、黒魔術師のいずれか1兵科に特化し、素材を分散させない。',
      ko: '만능 UR 조각. 전사, 원거리, 흑마법사 중 단 하나의 메인 병과를 결정해 집중 투자.',
      pt: 'Fragmentos UR universais. Foque em APENAS UMA facção principal (Guerreiros, Atiradores ou Bruxos).'
    },
    keyTips: {
      ru: [
        'Шэдоу — топовый AoE дамагер для любителей фракции Чернокнижников.',
        'Моно-составы (5 героев одной фракции) получают до +25% к атаке и здоровью за счет синергии.',
        'Если вы идете по стандартному F2P пути Воинов, держите Артура и копите ресурсы на скорый выход Марлены.',
        'Белла и Люциус служат отличными альтернативными танками передней линии.'
      ],
      en: [
        'Shadow provides monstrous AoE damage if building a Warlock-focused lineup.',
        'Mono-faction squads (5 heroes of same type) unlock up to +25% ATK/HP synergy bonuses.',
        'If staying the classic F2P Warrior route, hold Arthur and save universal UR shards for Marlena.',
        'Bella and Lucius provide excellent front-row durability for secondary squads.'
      ]
    },
    commonMistakes: {
      ru: 'Прокачка 2 воинов, 2 стрелков и 1 мага одновременно: смешанные отряды проигрывают моно-синергиям с разгромным счетом.',
      en: 'Building a random mixed 2-warrior, 2-ranger, 1-mage squad: gets wiped by mono-synergy buffs.',
      de: 'Einen gemischten 2-Krieger/2-Schützen/1-Magier-Kader bauen: verliert gegen reine Mono-Synergien.',
      es: 'Construir un escuadrón mixto sin sinergia: pierde ante rivales con bono de mono-facción.',
      fr: 'Monter un groupe hétéroclite sans synergie : battu par les compos mono-faction à stats égales.',
      id: 'Membangun komposisi campur aduk yang kalah telak dari buff sinergi mono-fraksi.',
      ja: '各兵科を中途半端に混ぜた編成を作り、同戦力の単一兵科シナジー特化編成に惨敗すること。',
      ko: '여러 병과를 어중간하게 섞어 육성하다가 단일 병과 시너지 보너스에 압도당하는 실수.',
      pt: 'Misturar classes aleatórias sem sinergia: perde feio para esquadrões com bônus de mono-facção.'
    },
    guideUrl: 'codex/shadow',
    guideLabel: {
      ru: 'Гайд по герою Шэдоу в Кодексе →',
      en: 'Shadow Hero Profile & Build →',
      de: 'Shadow-Heldenguide →',
      es: 'Ficha de Shadow en el Códice →',
      fr: 'Fiche de Shadow dans le Codex →',
      id: 'Profil Hero Shadow di Kodeks →',
      ja: 'シャドウの英雄解説を見る →',
      ko: '섀도우 영웅 상세 공략 →',
      pt: 'Ficha de Shadow no Códice →'
    }
  },
  {
    id: 'elixir-scramble',
    dayStart: 45,
    dayEnd: 59,
    chapter: 3,
    category: 'pvp',
    icon: '🧪',
    officialMilestoneIds: [17000, 30000, 53000, 32000],
    title: {
      ru: 'Гонка за Эликсиром и Высшая Дуэль',
      en: 'Elixir Scramble & Supreme Duel',
      de: 'Elixier-Jagd & Höchstes Duell',
      es: 'Carrera del Elixir y Duelo Supremo',
      fr: 'Ruée vers l\'Élixir et Duel Suprême',
      id: 'Elixir Scramble & Duel Tertinggi',
      ja: 'エリクサー争奪戦と頂上対決',
      ko: '엘릭서 쟁탈전 및 최고 결전',
      pt: 'Corrida pelo Elixir e Duelo Supremo'
    },
    badge: {
      ru: 'День 45–59',
      en: 'Day 45–59',
      de: 'Tag 45–59',
      es: 'Día 45–59',
      fr: 'Jour 45–59',
      id: 'Hari 45–59',
      ja: '45〜59日目',
      ko: '45~59일차',
      pt: 'Dia 45–59'
    },
    shortDesc: {
      ru: 'Еженедельная 30-минутная командная AvA битва за шахты эликсира на изолированной арене.',
      en: 'Weekly 30-minute high-octane Alliance-vs-Alliance battleground for elixir mines.',
      de: 'Wöchentliches 30-Minuten-AvA-Schlachtfeld um Elixierminen auf isolierter Karte.',
      es: 'Campo de batalla semanal de 30 minutos de Alianza contra Alianza por minas de elixir.',
      fr: 'Champ de bataille hebdomadaire de 30 minutes AvA pour les mines d\'élixir.',
      id: 'Medan pertempuran AvA mingguan 30 menit memperebutkan tambang elixir.',
      ja: '隔離マップで行われる同盟vs同盟の30分間エリクサー鉱山争奪戦。',
      ko: '격리된 전장에서 펼쳐지는 주간 30분 연맹 대항 엘릭서 광산 쟁탈전.',
      pt: 'Campo de batalha semanal de 30 minutos de Aliança contra Aliança pelas minas de elixir.'
    },
    unlockCondition: {
      ru: '45-й день сервера (середина 2-го месяца)',
      en: 'Server Day 45 (mid 2nd month)',
      de: 'Server-Tag 45 (Mitte 2. Monat)',
      es: 'Día 45 del servidor (mediados del 2.º mes)',
      fr: 'Jour 45 du serveur (mi-2e mois)',
      id: 'Hari ke-45 server (pertengahan bulan ke-2)',
      ja: 'サーバー45日目（2ヶ月目前半）',
      ko: '서버 45일차(2개월차 중반)',
      pt: 'Dia 45 do servidor (meados do 2º mês)'
    },
    whatToHoard: {
      ru: 'Активируйте щит на основной базе ДО входа в локацию эликсира! Приготовьте ускорения лечения.',
      en: 'POP A PEACE SHIELD ON YOUR MAIN BASE BEFORE ENTERING! Prepare treatment speedups.',
      de: 'FRIEDENSSCHILD AUF DER HAUPTBASIS VOR DEM BETRETEN AKTIVIEREN! Heil-Speedups bereitlegen.',
      es: '¡ACTIVA UN ESCUDO DE PAZ EN TU BASE ANTES DE ENTRAR! Prepara aceleradores de cura.',
      fr: 'ACTIVEZ UN BOUCLIER SUR VOTRE BASE PRINCIPALE AVANT D\'ENTRER ! Préparez les soins.',
      id: 'AKTIFKAN PERISAI DI MARKAS UTAMA SEBELUM MASUK! Siapkan percepatan penyembuhan.',
      ja: '入場前に必ず本拠地に平和の盾（シールド）を発動すること！治療加速を準備。',
      ko: '입장 전 본진 기지에 반드시 평화의 방패를 켤 것! 치료 가속 사전 구비.',
      pt: 'ATIVE UM ESCUDO DE PAZ NA BASE PRINCIPAL ANTES DE ENTRAR! Prepare aceleradores.'
    },
    keyTips: {
      ru: [
        'КРИТИЧЕСКОЕ ПРАВИЛО: Пока вы деретесь в локации Эликсира, ваша база на обычной карте уязвима! Без щита ее сожгут.',
        'Захват шахт эликсира приносит непрерывные командные очки каждую секунду.',
        'Двигайтесь группами по 3–5 игроков: одиночные марши легко перехватываются.',
        'Эликсир обменивается в эксклюзивном магазине на золотые сундуки снаряжения и редкие чертежи.'
      ],
      en: [
        'CRITICAL RULE: While fighting inside Elixir Scramble, your regular Sanctuary map base is vulnerable to zeroing!',
        'Holding elixir nodes generates continuous tick points for your alliance score.',
        'Move in 3–5 player wolfpacks: isolated marchers get picked off instantly.',
        'Exchange earned elixir in the event shop for golden gear chests and exclusive blueprints.'
      ]
    },
    commonMistakes: {
      ru: 'Зайти в эликсир без щита на основной карте и выйти с сожженной дотла базой и нулем ресурсов.',
      en: 'Entering the match unshielded on the world map and returning to a completely zeroed base.',
      de: 'Ohne Schild auf der Weltkarte beitreten und zu einer völlig zerstörten Basis zurückkehren.',
      es: 'Entrar sin escudo en el mapa principal y regresar a una base quemada sin recursos.',
      fr: 'Entrer sans bouclier sur la carte principale et retrouver sa base détruite et pillée.',
      id: 'Masuk tanpa perisai di peta utama dan kembali ke markas yang sudah ludes terbakar.',
      ja: '通常マップでシールドを貼らずに入場し、試合後に本拠地が燃え尽きて資源ゼロになること。',
      ko: '월드맵 본진에 방패를 켜지 않고 입장했다가 본진이 털려 잿더미가 되는 대참사.',
      pt: 'Entrar sem escudo no mapa mundial e voltar com a base completamente destruída e saqueada.'
    },
    guideUrl: 'events/elixir',
    guideLabel: {
      ru: 'Гайд по Гонке за Эликсиром →',
      en: 'Elixir Scramble Strategy Guide →',
      de: 'Elixier-Jagd Leitfaden →',
      es: 'Guía de Carrera del Elixir →',
      fr: 'Guide de la Ruée vers l\'Élixir →',
      id: 'Panduan Elixir Scramble →',
      ja: 'エリクサー争奪戦の立ち回り攻略 →',
      ko: '엘릭서 쟁탈전 필승 전략 →',
      pt: 'Guia da Corrida pelo Elixir →'
    }
  },
  {
    id: 'marlena-release',
    dayStart: 60,
    dayEnd: 74,
    chapter: 4,
    category: 'heroes',
    icon: '🗡️',
    officialMilestoneIds: [33000, 34000, 35000],
    title: {
      ru: 'Золотой Век: Марлена (Marlena) — Главный Кэрри',
      en: 'Golden Age: Marlena — Core F2P Carry',
      de: 'Goldenes Zeitalter: Marlena — Der Kern-Carry',
      es: 'Edad de Oro: Marlena — Carry Principal',
      fr: 'Âge d\'or : Marlena — Le Carry Ultime',
      id: 'Era Keemasan: Marlena — Carry Utama',
      ja: '黄金時代：マレーナ — 最強キャリーの到来',
      ko: '황금 시대: 말레나 — 최강의 F2P 핵심 캐리',
      pt: 'Era de Ouro: Marlena — Carry Absoluto'
    },
    badge: {
      ru: 'День 60–74',
      en: 'Day 60–74',
      de: 'Tag 60–74',
      es: 'Día 60–74',
      fr: 'Jour 60–74',
      id: 'Hari 60–74',
      ja: '60〜74日目',
      ko: '60~74일차',
      pt: 'Dia 60–74'
    },
    shortDesc: {
      ru: 'Открытие Марлены ($1 пак или день 66). Наносит до 85% суммарного урона отряда. Приоритет №1 для осколков UR.',
      en: 'Marlena unlocked ($1 pack or Day 66). Delivers ~85% of total squad damage. Absolute #1 priority for UR shards.',
      de: 'Marlena freigeschaltet (1$-Paket oder Tag 66). Verursacht ~85% des Gesamtschadens. Priorität 1 für UR-Splitter.',
      es: 'Desbloqueo de Marlena (paquete de $1 o día 66). Realiza el 85% del daño del escuadrón. Prioridad #1 para fragmentos UR.',
      fr: 'Déblocage de Marlena (pack à 1$ ou jour 66). Inflige ~85% des dégâts du groupe. Priorité absolue pour les fragments UR.',
      id: 'Marlena terbuka (paket $1 atau hari ke-66). Menghasilkan 85% total damage. Prioritas nomor 1 untuk shard UR.',
      ja: 'マレーナの解放（1ドル課金または66日目）。部隊総ダメージの85%を叩き出す最優先UR英雄。',
      ko: '말레나 해금(1달러 패키지 또는 66일차). 부대 전체 딜량의 85%를 차지하는 UR 최우선 투자 대상.',
      pt: 'Desbloqueio de Marlena (pacote de $1 ou dia 66). Causa 85% do dano total. Prioridade número 1 para fragmentos UR.'
    },
    unlockCondition: {
      ru: 'День 60–66 сервера (или $1 стартовый донат)',
      en: 'Server Day 60–66 (or $1 starter recharge)',
      de: 'Server-Tag 60–66 (oder 1$-Starterkauf)',
      es: 'Día 60–66 del servidor (o recarga de $1)',
      fr: 'Jour 60–66 du serveur (ou premier achat 1$)',
      id: 'Hari ke 60–66 server (atau top-up pemula $1)',
      ja: 'サーバー60〜66日目（または1ドル初回課金）',
      ko: '서버 60~66일차(또는 1달러 첫 충전)',
      pt: 'Dia 60–66 do servidor (ou recarga inicial de US$ 1)'
    },
    whatToHoard: {
      ru: 'ВСЕ универсальные осколки UR с самого старта сервера должны быть отложены на прокачку Марлены до 8★ (а затем 10★).',
      en: 'ALL universal UR shards saved from Day 1 should be dumped into Marlena to hit 8★ instantly, then 10★.',
      de: 'ALLE universellen UR-Splitter seit Tag 1 sollten sofort in Marlena für 8★ (und dann 10★) fließen.',
      es: 'TODOS los fragmentos UR universales deben usarse en Marlena para llevarla a 8★ de inmediato.',
      fr: 'TOUS vos fragments UR doivent être injectés dans Marlena pour débloquer le 8★ instantanément.',
      id: 'SEMUA shard UR universal dari hari pertama harus dialokasikan ke Marlena hingga 8★ langsung.',
      ja: '1日目から貯めた全ての万能UR破片をマレーナに注ぎ込み、即座に星8（そして星10）を目指す。',
      ko: '오픈 첫날부터 모아둔 모든 만능 UR 조각을 말레나에게 쏟아부어 즉시 8성(이후 10성) 달성.',
      pt: 'TODOS os fragmentos UR universais guardados desde o início devem ser colocados em Marlena até 8★.'
    },
    keyTips: {
      ru: [
        'Канонический F2P состав: Артур (танк), Даскал, Марлена (кэрри), Харпер, Клэр.',
        'Приоритет навыков: сначала качайте Ультимейт (максимальный урон за значок), затем Активный навык.',
        'НЕ качайте базовую автоатаку выше 15–20 уровня на старте — это крайне неэффективный расход значков.',
        'Эксклюзивное оружие «Багровый меч» дает колоссальный прирост пробития брони.'
      ],
      en: [
        'Canonical F2P squad: Arthur (tank), Daskal, Marlena (carry), Harper, Claire.',
        'Skill priority: Upgrade Ultimate FIRST (highest damage-per-badge), followed by Active skill.',
        'DO NOT max auto-attack to level 30 early — it is heavily inefficient per skill badge spent.',
        'Her exclusive weapon "Crimson Sword" grants massive armor penetration scaling.'
      ]
    },
    commonMistakes: {
      ru: 'Распылять универсальные осколки UR на других второстепенных героев за неделю до выхода Марлены.',
      en: 'Wasting universal UR shards on secondary heroes right before Marlena unlocks.',
      de: 'Universelle UR-Splitter kurz vor Marlenas Freischaltung an zweitrangige Helden verschwenden.',
      es: 'Malgastar fragmentos UR en otros héroes días antes de desbloquear a Marlena.',
      fr: 'Gaspiller des fragments UR sur d\'autres héros juste avant le déblocage de Marlena.',
      id: 'Menghabiskan shard UR universal pada hero pendukung tepat sebelum Marlena hadir.',
      ja: 'マレーナ登場直前に、他のサブ英雄に万能UR破片を使って枯渇させること。',
      ko: '말레나 해금을 코앞에 두고 엉뚱한 서브 영웅에게 만능 UR 조각을 낭비하는 실수.',
      pt: 'Desperdiçar fragmentos UR em heróis secundários pouco antes da chegada de Marlena.'
    },
    guideUrl: 'codex/marlena',
    guideLabel: {
      ru: 'Полный разбор Марлены в Кодексе →',
      en: 'Marlena Hero Codex Deep Dive →',
      de: 'Marlena-Tiefenanalyse öffnen →',
      es: 'Análisis detallado de Marlena →',
      fr: 'Guide approfondi de Marlena →',
      id: 'Ulasan Mendalam Hero Marlena →',
      ja: 'マレーナの徹底解説・育成論 →',
      ko: '말레나 심층 육성 공략 보기 →',
      pt: 'Guia Completo da Marlena no Códice →'
    }
  },
  {
    id: 'curio-fishing',
    dayStart: 75,
    dayEnd: 89,
    chapter: 4,
    category: 'pve',
    icon: '🐟',
    officialMilestoneIds: [36000, 38000, 39000, 52001, 37000],
    title: {
      ru: 'Мифическое Сокровище, Рыбалка и Зал Реликвий',
      en: 'Mythic Treasure, Fishing & Curio Hall',
      de: 'Mythischer Schatz, Fischfang & Kuriositätenhalle',
      es: 'Tesoro Mítico, Pesca Marina y Sala de Curiosidades',
      fr: 'Trésor Mythique, Pêche et Salle de Curiosités',
      id: 'Harta Mitos, Memancing & Galeri Koleksi',
      ja: '神話の秘宝、海洋釣り、収蔵品館',
      ko: '신화의 보물, 바다 낚시 및 수집관 개방',
      pt: 'Tesouro Mítico, Pesca Oceânica e Salão de Artefatos'
    },
    badge: {
      ru: 'День 75–89',
      en: 'Day 75–89',
      de: 'Tag 75–89',
      es: 'Día 75–89',
      fr: 'Jour 75–89',
      id: 'Hari 75–89',
      ja: '75〜89日目',
      ko: '75~89일차',
      pt: 'Dia 75–89'
    },
    shortDesc: {
      ru: 'Лимит 300 рыб в день, приготовление блюд на Большом Пиру альянса, прокачка реликвий Зала Реликвий (5039).',
      en: '300 fish daily cap, cooking feast banquets with alliance, and activating Curio Hall (5039) relic stats.',
      de: 'Täglich 300 Fische fangen, Festmahle kochen und Relikt-Werte in der Kuriositätenhalle freischalten.',
      es: 'Límite de 300 peces diarios, cocina en el Banquete de Alianza y mejoras en la Sala de Curiosidades.',
      fr: 'Limite de 300 poissons par jour, banquet d\'alliance et statistiques de reliques de la Salle de Curiosités.',
      id: 'Batas 300 ikan per hari, memasak jamuan aliansi, dan bonus stat dari Galeri Koleksi.',
      ja: '毎日300匹の魚釣り上限、同盟の宴会料理、収蔵品館（5039）のレリックステータス強化。',
      ko: '매일 300마리 낚시 상한, 연맹 연회 요리 제작, 수집관(5039) 영구 스탯 강화.',
      pt: 'Limite diário de 300 peixes, culinária no Banquete da Aliança e atributos do Salão de Artefatos.'
    },
    unlockCondition: {
      ru: '75-й день сервера (2.5 месяца), Зал Реликвий',
      en: 'Server Day 75 (2.5 months), Curio Hall building',
      de: 'Server-Tag 75 (2,5 Monate), Kuriositätenhalle',
      es: 'Día 75 del servidor (2,5 meses), Sala de Curiosidades',
      fr: 'Jour 75 du serveur (2,5 mois), Salle de Curiosités',
      id: 'Hari ke-75 server (2,5 bulan), Galeri Koleksi',
      ja: 'サーバー75日目（約2.5ヶ月）、収蔵品館建築',
      ko: '서버 75일차(2.5개월차), 수집관 건물',
      pt: 'Dia 75 do servidor (2,5 meses), Salão de Artefatos'
    },
    whatToHoard: {
      ru: 'Наживки для рыбы, поварские ингредиенты и специи. Не пропускайте дневной лимит в 300 рыб.',
      en: 'Fishing lures, cooking spices, and chef ingredients. Never skip the 300 daily fish cap.',
      de: 'Angelköder, Gewürze und Zutaten. Niemals das 300-Fische-Tageslimit verpassen.',
      es: 'Cebos de pesca, especias e ingredientes. Nunca dejes de pescar los 300 peces diarios.',
      fr: 'Appâts de pêche, épices et ingrédients. Ne manquez jamais la limite quotidienne de 300 poissons.',
      id: 'Umpan pancing, bumbu masak, dan bahan makanan. Jangan lewatkan batas 300 ikan per hari.',
      ja: '釣り餌、調味料、料理素材。毎日300匹の釣り上限は欠かさず消化すること。',
      ko: '낚시 미끼, 요리 조미료 및 식재료. 매일 300마리 낚시 한도는 반드시 전량 달성.',
      pt: 'Iscas de pesca, temperos e ingredientes culinários. Nunca perca a cota de 300 peixes por dia.'
    },
    keyTips: {
      ru: [
        'Рыбалка дает пассивные бонусы к здоровью и атаке армии навсегда через коллекции блюд.',
        'Сдавайте улов на Большом Пиру альянса: это генерирует ценные коробки подарков для всех сокланов.',
        'Реликвии в Зале Реликвий (5039) повышают вместимость госпиталя и скорость сбора ресурсов.',
        'Выполняйте еженедельные цепочки заданий «Мифическое Сокровище» ради золотых наживок.'
      ],
      en: [
        'Fishing yields permanent Army ATK and HP multipliers via completed culinary collections.',
        'Turn in daily catches at the Alliance Feast to spawn gift boxes for the entire clan.',
        'Curio Hall relics scale hospital capacity and map march speeds permanently.',
        'Finish weekly Mythic Treasure questlines to stockpile high-tier golden lures.'
      ]
    },
    commonMistakes: {
      ru: 'Игнорировать рыбалку, считая ее второстепенной мини-игрой: потеря сотен постоянных процентных статов.',
      en: 'Ignoring fishing as a "casual mini-game": missing out on massive permanent percentage combat buffs.',
      de: 'Angeln als nutzlos abstempeln: Verlust riesiger permanenter prozentualer Kampfboni.',
      es: 'Ignorar la pesca considerándola secundaria: perder enormes bonificaciones porcentuales permanentes.',
      fr: 'Ignorer la pêche en la prenant pour un simple mini-jeu : perte d\'énormes bonus de combat permanents.',
      id: 'Mengabaikan memancing karena dianggap mini-game: kehilangan bonus stat tempur permanen yang besar.',
      ja: '釣りを単なるミニゲームと軽視してサボり、膨大な永続戦闘バフを取り逃すこと。',
      ko: '낚시를 단순 미니게임으로 여겨 방치하다가 막대한 영구 전투 퍼센트 버프를 놓치는 실수.',
      pt: 'Ignorar a pesca achando que é só um minijogo: perda de enormes bônus permanentes de combate.'
    },
    guideUrl: 'events/mythic',
    guideLabel: {
      ru: 'Гайд по Рыбалке и Мифическим Сокровищам →',
      en: 'Mythic Treasure & Fishing Guide →',
      de: 'Angel- & Schatz-Guide öffnen →',
      es: 'Guía de Pesca y Tesoros Míticos →',
      fr: 'Guide de la Pêche et Trésors Mythiques →',
      id: 'Panduan Memancing & Harta Mitos →',
      ja: '海洋釣りと神話の秘宝ガイド →',
      ko: '낚시 및 신화의 보물 가이드 →',
      pt: 'Guia de Pesca e Tesouros Míticos →'
    }
  },
  {
    id: 'raven-crystal',
    dayStart: 90,
    dayEnd: 119,
    chapter: 4,
    category: 'season',
    icon: '📜',
    officialMilestoneIds: [40000, 41000, 43000, 42000, 44000],
    title: {
      ru: 'Предвестники Бури: Эпиграфы Т4/Т5 и Антитоксин',
      en: 'Storm Harbingers: T4/T5 Epigraphs & Antitoxin',
      de: 'Sturmbringer: T4/T5 Epigraphen & Antitoxin',
      es: 'Heraldos de la Tormenta: Epígrafes T4/T5 y Antitoxina',
      fr: 'Messagers de la Tempête : Épigraphes T4/T5 et Antitoxine',
      id: 'Pertanda Badai: Epigraf T4/T5 & Antitoksin',
      ja: '嵐の前兆：T4/T5碑文と抗毒素の蓄積',
      ko: '폭풍의 전조: T4/T5 비문 및 항독소 비축',
      pt: 'Mensageiros da Tempestade: Epígrafes T4/T5 e Antitoxina'
    },
    badge: {
      ru: 'День 90–119',
      en: 'Day 90–119',
      de: 'Tag 90–119',
      es: 'Día 90–119',
      fr: 'Jour 90–119',
      id: 'Hari 90–119',
      ja: '90〜119日目',
      ko: '90~119일차',
      pt: 'Dia 90–119'
    },
    shortDesc: {
      ru: 'Финальная подготовка перед Эрой Возрождения. Открытие эпиграфов высоких тиров и жесткая экономия антитоксина.',
      en: 'Final countdown to Era of Revival. High-tier Raven Epigraphs open; strict stockpiling of Antitoxin begins.',
      de: 'Endspurt vor der Ära der Wiedergeburt. Höchste Epigraphen öffnen sich; striktes Sparen von Antitoxin.',
      es: 'Cuenta regresiva para la Era del Renacimiento. Se abren epígrafes superiores; ahorro riguroso de antitoxina.',
      fr: 'Dernière ligne droite avant l\'Ère du Renouveau. Épigraphes de haut rang et réserve stricte d\'antitoxine.',
      id: 'Hitung mundur menuju Era Kebangkitan. Epigraf tingkat tinggi terbuka; mulai menimbun antitoksin secara ketat.',
      ja: '再生のエラ開幕直前の最終準備期間。上位碑文の解放と抗毒素の厳格な温存を開始。',
      ko: '부활의 시대 직전 최종 카운트다운. 고티어 비문 해금 및 항독소 집중 비축 돌입.',
      pt: 'Reta final para a Era do Renascimento. Epígrafes avançadas liberadas e acúmulo rigoroso de antitoxina.'
    },
    unlockCondition: {
      ru: '90-й день сервера (3 месяца)',
      en: 'Server Day 90 (3 months from launch)',
      de: 'Server-Tag 90 (3 Monate)',
      es: 'Día 90 del servidor (3 meses)',
      fr: 'Jour 90 du serveur (3 mois)',
      id: 'Hari ke-90 server (3 bulan)',
      ja: 'サーバー90日目（開始から3ヶ月）',
      ko: '서버 90일차(3개월차)',
      pt: 'Dia 90 do servidor (3 meses)'
    },
    whatToHoard: {
      ru: 'АНТИТОКСИН! Берегите каждую единицу антитоксина: в Сезоне 1 он станет ключевым ресурсом для Лаборатории Заражения.',
      en: 'ANTITOXIN! Hoard every single bottle: in Season 1 it becomes the core resource for the Infection Lab.',
      de: 'ANTITOXIN! Jede Flasche sparen: in Saison 1 ist es die Kernressource für das Infektionslabor.',
      es: '¡ANTITOXINA! Guarda cada unidad: en la Temporada 1 será esencial para el Laboratorio de Infección.',
      fr: 'ANTITOXINE ! Gardez précieusement chaque unité : elle sera le cœur de votre Laboratoire en Saison 1.',
      id: 'ANTITOKSIN! Simpan setiap botolnya: di Musim 1 ini akan menjadi sumber daya utama Laboratorium Infeksi.',
      ja: '抗毒素を最優先で温存！シーズン1の「感染研究所」を強化するための最重要資材。',
      ko: '항독소 절대 비축! 시즌 1 개막 시 감염 연구소를 가동할 핵심 생존 자원.',
      pt: 'ANTITOXINA! Guarde cada frasco: na Temporada 1 será o recurso essencial para o Laboratório.'
    },
    keyTips: {
      ru: [
        'Не сливайте антитоксин в случайные ивенты — в первый же день Сезона 1 без него вы не сможете ходить в походы.',
        'Докачивайте Башню Ворона и вставляйте Т4 эпиграфы с профильными статами вашей фракции.',
        'Завершайте подготовку моно-состава: к 120 дню ваш главный кэрри должен быть 8★–10★.',
        'Координируйте с альянсом планы по переходу в сезонную Лигу Экспедиций.'
      ],
      en: [
        'Do not waste Antitoxin on random events — without it, day 1 of Season 1 wipes your marching troops.',
        'Level up your Raven Tower to slot T4/T5 epigraphs matched to your faction damage type.',
        'Finalize your mono-squad: by Day 120 your main carry MUST be 8★ to 10★.',
        'Align with alliance officers on zone drop coordinates for the Expedition League.'
      ]
    },
    commonMistakes: {
      ru: 'Тратить антитоксин на получение мелких наград за пару недель до Сезона 1 и оказаться парализованным на старте сезона.',
      en: 'Blowing antitoxin reserves on minor milestones right before Season 1, crippling your season day-one start.',
      de: 'Antitoxin für Belanglosigkeiten vor Saison 1 verbraten und am ersten Saisontag handlungsunfähig sein.',
      es: 'Gastar reservas de antitoxina en premios menores antes de la Temporada 1 y quedar indefenso.',
      fr: 'Dépenser ses réserves d\'antitoxine pour de petits gains avant la Saison 1 et être paralysé au lancement.',
      id: 'Menghabiskan antitoksin untuk hadiah kecil sebelum Musim 1, melumpuhkan progres di hari pertama musim.',
      ja: 'シーズン1直前に些細な報酬目的で抗毒素を使い果たし、開幕初日に身動きが取れなくなること。',
      ko: '시즌 1 직전에 소소한 보상을 얻겠다고 항독소를 다 써버려 시즌 오픈 첫날 발이 묶이는 대실수.',
      pt: 'Gastar as reservas de antitoxina em prêmios menores antes da Temporada 1 e travar a estreia da temporada.'
    },
    guideUrl: 'events/path-to-healing',
    guideLabel: {
      ru: 'Гайд по Пути к Исцелению и Ворону →',
      en: 'Path to Healing & Raven Guide →',
      de: 'Weg der Heilung Leitfaden →',
      es: 'Guía del Camino a la Curación →',
      fr: 'Guide de la Voie de la Guérison →',
      id: 'Panduan Jalan Kesembuhan & Raven →',
      ja: '治癒への道とカラス育成ガイド →',
      ko: '치유의 길 및 까마귀 공략 보기 →',
      pt: 'Guia do Caminho da Cura e Corvo →'
    }
  },
  {
    id: 'revival-era',
    dayStart: 120,
    dayEnd: 175,
    chapter: 5,
    category: 'season',
    icon: '☣️',
    officialMilestoneIds: [45000, 46000, 47000, 48000, 49000, 50000, 51000, 52000],
    title: {
      ru: 'Эра Возрождения — Сезон 1 (League of Expeditions)',
      en: 'Era of Revival — Season 1 (League of Expeditions)',
      de: 'Ära der Wiedergeburt — Saison 1',
      es: 'Era del Renacimiento — Temporada 1',
      fr: 'Ère du Renouveau — Saison 1',
      id: 'Era Kebangkitan — Musim 1',
      ja: '再生のエラ — シーズン1（遠征リーグ）',
      ko: '부활의 시대 — 시즌 1(원정 리그)',
      pt: 'Era do Renascimento — Temporada 1'
    },
    badge: {
      ru: 'День 120+',
      en: 'Day 120+',
      de: 'Tag 120+',
      es: 'Día 120+',
      fr: 'Jour 120+',
      id: 'Hari 120+',
      ja: '120日目以降',
      ko: '120일차 이상',
      pt: 'Dia 120+'
    },
    shortDesc: {
      ru: 'Глобальный 55-дневный сезон! Сопротивление заражению, Статуи Лорда, дерево специализаций и Зоя (Zoya).',
      en: 'Epic 55-day season! Viral infection resistance, Lord Statues, specialization talent trees, and Zoya.',
      de: 'Epische 55-Tage-Saison! Infektionsresistenz, Lord-Statuen, Spezialisierungs-Talentbäume und Zoya.',
      es: '¡Temporada épica de 55 días! Resistencia a infección, Estatuas de Lord, árboles de talento y Zoya.',
      fr: 'Saison épique de 55 jours ! Résistance à l\'infection, Statues de Lord, talents spécialisés et Zoya.',
      id: 'Musim epik 55 hari! Ketahanan infeksi, Patung Lord, pohon talenta spesialisasi, dan Zoya.',
      ja: '55日間の壮大なシーズン開幕！ウイルス感染抵抗、ロード石像、専門職タレントツリー、ゾーヤ参戦。',
      ko: '55일간의 대서사시 시즌 개막! 바이러스 감염 저항력, 군주 석상, 전문화 특성 트리, 조야 합류.',
      pt: 'Temporada épica de 55 dias! Resistência à infecção, Estátuas de Lorde, árvores de especialização e Zoya.'
    },
    unlockCondition: {
      ru: '120-й день сервера (ровно 4 месяца с момента открытия)',
      en: 'Server Day 120 (4 months from server launch)',
      de: 'Server-Tag 120 (4 Monate nach Start)',
      es: 'Día 120 del servidor (4 meses desde lanzamiento)',
      fr: 'Jour 120 du serveur (4 mois après lancement)',
      id: 'Hari ke-120 server (4 bulan setelah peluncuran)',
      ja: 'サーバー120日目（開始から丸4ヶ月）',
      ko: '서버 120일차(오픈 4개월 경과 시점)',
      pt: 'Dia 120 do servidor (4 meses de existência)'
    },
    whatToHoard: {
      ru: 'Сезонные кристаллы и жетоны Экспедиции. Прокачивайте Сопротивление Заражению в Лаборатории каждый день.',
      en: 'Seasonal crystals and Expedition tokens. Level up Infection Resistance in the Lab every single day.',
      de: 'Saisonale Kristalle und Expeditionsmarken. Infektionsresistenz im Labor täglich steigern.',
      es: 'Cristales de temporada y fichas de expedición. Sube la resistencia a la infección a diario.',
      fr: 'Cristaux saisonniers et jetons d\'expédition. Augmentez votre résistance à l\'infection au laboratoire.',
      id: 'Kristal musiman dan token ekspedisi. Tingkatkan Ketahanan Infeksi di Lab setiap hari.',
      ja: 'シーズン結晶と遠征トークン。研究所でウイルス感染抵抗を毎日最優先で強化。',
      ko: '시즌 크리스털 및 원정 토큰. 연구소에서 바이러스 감염 저항력을 매일 최우선 상승.',
      pt: 'Cristais de temporada e fichas de expedição. Evolua a Resistência à Infecção no Laboratório diariamente.'
    },
    keyTips: {
      ru: [
        'СОПРОТИВЛЕНИЕ ЗАРАЖЕНИЮ: Если уровень защиты ниже уровня зоны, ваша армия получит летальный дебафф (-50% до -90% атаки/защиты).',
        'Статуи Лорда: открывают выбор специализации (Архитектор стройки, Полководец PvP или Снабженец ресурсов). Выбирайте под роль в альянсе!',
        'Зоя (Zoya) — новый сильнейший UR маг/кэрри в сезонном магазине, заменяет или дополняет Марлену.',
        'Захватывайте зараженные крепости строго по расписанию офицеров R4/R5.'
      ],
      en: [
        'INFECTION RESISTANCE: If your immunity is below the zone level, troops suffer fatal debuffs (-50% to -90% combat stats).',
        'Lord Statues: unlock specialization paths (Architect builder, Warmaster PvP, or Supplier gatherer). Pick to fit your alliance role!',
        'Zoya arrives as the new apex UR carry in the season store, partnering with or elevating Marlena squads.',
        'Capture infected citadels strictly on coordinated officer rally schedules.'
      ]
    },
    commonMistakes: {
      ru: 'Отправлять армию в зоны с высоким уровнем вируса без прокачанного сопротивления — войска погибают моментально.',
      en: 'Marching into high-infection contaminated zones without adequate resistance: instant troop wipeout.',
      de: 'Truppen in hochinfizierte Zonen ohne entsprechende Resistenz schicken: sofortige Vernichtung.',
      es: 'Mandar tropas a zonas de alta infección sin suficiente resistencia: aniquilación inmediata.',
      fr: 'Envoyer ses troupes en zone hautement contaminée sans résistance adéquate : anéantissement immédiat.',
      id: 'Mengirim pasukan ke zona berinfeksi tinggi tanpa resistensi yang cukup: pasukan mati seketika.',
      ja: '感染抵抗が足りない状態で高危険度の汚染ゾーンに進軍し、部隊が一瞬で壊滅すること。',
      ko: '감염 저항력이 부족한 상태에서 고위험 감염 지역에 진입했다가 부대가 몰살당하는 실수.',
      pt: 'Enviar tropas para zonas altamente contaminadas sem resistência suficiente: aniquilação instantânea.'
    },
    guideUrl: 'events/alliance-duel',
    guideLabel: {
      ru: 'Гайд по механике Дуэли и Сезона →',
      en: 'Season & Alliance Duel Mechanics →',
      de: 'Saison- und Duell-Mechaniken ansehen →',
      es: 'Guía de Temporada y Mecánicas de Duelo →',
      fr: 'Guide des mécaniques de Saison et Duel →',
      id: 'Panduan Mekanik Musim & Duel →',
      ja: 'シーズン＆対決メカニクス完全攻略 →',
      ko: '시즌 및 연맹 대결 메커니즘 공략 →',
      pt: 'Guia de Mecânicas de Temporada e Duelo →'
    }
  }
];
