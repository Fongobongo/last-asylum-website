export interface CalEvent {
  day: string; // Mon..Sat, daily, weekly, biweekly
  icon: string;
  event: string;
  what: string;
  dayL10n?: Record<string, string>;
  eventL10n?: Record<string, string>;
  whatL10n?: Record<string, string>;
}

// Weekly rhythm + recurring schedules from the community guides.
// NOTE: exact rotation differs per server — always check your in-game calendar.
export const weeklySchedule: CalEvent[] = [
  {
    day: 'Mon',
    icon: '🟢',
    event: 'Falcon Tower claim day',
    what: 'Double-strength claim day: collect quests saved since Sunday. Also Alliance Duel Phase 1.',
    dayL10n: { en: 'Mon', ru: 'Пн', de: 'Mo', es: 'Lun', fr: 'Lun', id: 'Sen', ja: '月', ko: '월', pt: 'Seg' },
    eventL10n: {
      en: 'Falcon Tower claim day',
      ru: 'День забора Башни Сокола',
      de: 'Falkenturm-Abhol-Tag',
      es: 'Día de cobro de Torre Halcón',
      fr: 'Jour de récolte Tour du Faucon',
      id: 'Hari Klaim Menara Elang',
      ja: 'ファルコンタワー受取日',
      ko: '매의 탑 수령일',
      pt: 'Dia de Resgate da Torre do Falcão'
    },
    whatL10n: {
      en: 'Double-strength claim day: collect quests saved since Sunday. Also Alliance Duel Phase 1.',
      ru: 'День двойных очков: заберите задания, накопленные с воскресенья. Также Фаза 1 Дуэли альянсов (прокачка Ворона).',
      de: 'Doppelte Punkte: Quests abholen, die seit Sonntag gespart wurden. Zudem Allianz-Duell Phase 1.',
      es: 'Día de doble recompensa: cobra misiones guardadas desde el domingo. También Fase 1 del Duelo de Alianzas.',
      fr: 'Jour de points doublés : récoltez les quêtes gardées depuis dimanche. Aussi Phase 1 du Duel d\'Alliances.',
      id: 'Hari poin ganda: klaim misi yang disimpan sejak hari Minggu. Juga Fase 1 Duel Aliansi.',
      ja: '2倍ポイント日: 日曜から貯めたクエストを受取。同盟対決フェーズ1も開始。',
      ko: '2배 포인트 수령일: 일요일부터 모아둔 퀘스트를 수령하세요. 연맹 대결 1단계 진행.',
      pt: 'Dia de pontos em dobro: colete missões guardadas desde domingo. Também Fase 1 do Duelo de Alianças.'
    }
  },
  {
    day: 'Tue',
    icon: '⏳',
    event: 'Save day',
    what: 'Complete Falcon quests but do not claim — tomorrow is double points. AD Phase 2.',
    dayL10n: { en: 'Tue', ru: 'Вт', de: 'Di', es: 'Mar', fr: 'Mar', id: 'Sel', ja: '火', ko: '화', pt: 'Ter' },
    eventL10n: {
      en: 'Save day',
      ru: 'День накопления',
      de: 'Spartag',
      es: 'Día de ahorro',
      fr: 'Jour d\'épargne',
      id: 'Hari Simpan',
      ja: '温存日',
      ko: '비축일',
      pt: 'Dia de Economia'
    },
    whatL10n: {
      en: 'Complete Falcon quests but do not claim — tomorrow is double points. AD Phase 2.',
      ru: 'Выполняйте задания Башни Сокола, но не забирайте награду — завтра за них дадут x2 очков. Фаза 2 Дуэли альянсов (стройка).',
      de: 'Falkenturm-Quests abschließen, aber NICHT abholen — morgen gibt es doppelte Punkte. AD Phase 2.',
      es: 'Completa misiones de la Torre pero NO las cobres: mañana dan puntos dobles. Fase 2 de DA.',
      fr: 'Terminez les quêtes mais NE les réclamez PAS : demain les points doublent. Phase 2 du DA.',
      id: 'Selesaikan misi Menara tetapi JANGAN klaim — besok poin ganda. AD Fase 2.',
      ja: 'タワークエストを完了させつつ未受取で保持（明日はポイント2倍）。同盟対決フェーズ2。',
      ko: '매의 탑 퀘스트를 완료하되 수령하지 마세요 — 내일 2배 포인트. 연맹 대결 2단계.',
      pt: 'Complete as missões da Torre mas NÃO resgate — amanhã os pontos são em dobro. Fase 2 de DA.'
    }
  },
  {
    day: 'Wed',
    icon: '🟢',
    event: 'Falcon Tower claim day',
    what: 'Collect quests saved since Tuesday. AD Phase 3: research/scroll day — consume study scrolls NOW, open epigraph chests.',
    dayL10n: { en: 'Wed', ru: 'Ср', de: 'Mi', es: 'Mié', fr: 'Mer', id: 'Rab', ja: '水', ko: '수', pt: 'Qua' },
    eventL10n: {
      en: 'Falcon Tower claim day',
      ru: 'День забора Башни Сокола',
      de: 'Falkenturm-Abhol-Tag',
      es: 'Día de cobro de Torre Halcón',
      fr: 'Jour de récolte Tour du Faucon',
      id: 'Hari Klaim Menara Elang',
      ja: 'ファルコンタワー受取日',
      ko: '매의 탑 수령일',
      pt: 'Dia de Resgate da Torre do Falcão'
    },
    whatL10n: {
      en: 'Collect quests saved since Tuesday. AD Phase 3: research/scroll day — consume study scrolls NOW, open epigraph chests.',
      ru: 'Заберите задания со вторника. Фаза 3: день науки — тратьте свитки исследований СЕЙЧАС, открывайте сундуки эпиграфов.',
      de: 'Quests vom Dienstag abholen. AD Phase 3: Forschungs-/Schriftrollen-Tag — Schriftrollen JETZT verbrauchen, Epigraphenkisten öffnen.',
      es: 'Cobra las misiones guardadas del martes. Fase 3: investigación y pergaminos — úsalos AHORA y abre cofres de epígrafes.',
      fr: 'Récoltez les quêtes de mardi. Phase 3 : recherche et parchemins — consommez les parchemins MAINTENANT et ouvrez les coffres d\'épigraphes.',
      id: 'Klaim misi tersimpan dari hari Selasa. AD Fase 3: riset & gulungan — gunakan gulungan SEKARANG, buka peti epigraaf.',
      ja: '火曜から貯めたクエストを受取。ADフェーズ3: 研究・巻物日 — 研究巻物を今すぐ消費し、碑文宝箱を開封。',
      ko: '화요일부터 모은 퀘스트 수령. 연맹 대결 3단계: 연구/두루마리의 날 — 연구 두루마리 소모 및 비문 상자 개봉.',
      pt: 'Colete as missões guardadas de terça. Fase 3: pesquisa e pergaminhos — use pergaminhos AGORA e abra baús de epígrafes.'
    }
  },
  {
    day: 'Thu',
    icon: '⏳',
    event: 'Save day',
    what: 'AD Phase 4: hero day — spend UR/SSR/SR shards, recruit tickets, skill badges (UR shard = 20,000 pts).',
    dayL10n: { en: 'Thu', ru: 'Чт', de: 'Do', es: 'Jue', fr: 'Jeu', id: 'Kam', ja: '木', ko: '목', pt: 'Qui' },
    eventL10n: {
      en: 'Save day',
      ru: 'День накопления',
      de: 'Spartag',
      es: 'Día de ahorro',
      fr: 'Jour d\'épargne',
      id: 'Hari Simpan',
      ja: '温存日',
      ko: '비축일',
      pt: 'Dia de Economia'
    },
    whatL10n: {
      en: 'AD Phase 4: hero day — spend UR/SSR/SR shards, recruit tickets, skill badges (UR shard = 20,000 pts).',
      ru: 'Фаза 4: день героев — тратьте фрагменты UR/SSR/SR, билеты найма, значки навыков (осколок UR = 20 000 очков).',
      de: 'AD Phase 4: Heldtag — UR/SSR/SR-Splitter, Rekrutierungstickets, Fähigkeitsabzeichen ausgeben (UR-Splitter = 20.000 Pkt).',
      es: 'Fase 4: día de héroes — gasta fragmentos UR/SSR/SR, boletos de recluta e insignias de habilidad (fragmento UR = 20.000 pts).',
      fr: 'Phase 4 : jour des héros — dépensez fragments UR/SSR/SR, tickets de recrutement, insignes (fragment UR = 20 000 pts).',
      id: 'AD Fase 4: hari hero — belanjakan shard UR/SSR/SR, tiket rekrut, lencana skill (shard UR = 20.000 poin).',
      ja: 'ADフェーズ4: 英雄育成日 — UR/SSR/SR破片、募集券、スキルバッジを消費（UR破片 = 20,000pt）。',
      ko: '연맹 대결 4단계: 영웅의 날 — UR/SSR/SR 조각, 모집권, 스킬 훈장 소모 (UR 조각 = 20,000점).',
      pt: 'Fase 4: dia de heróis — gaste fragmentos UR/SSR/SR, bilhetes de recrutamento e insígnias (fragmento UR = 20.000 pts).'
    }
  },
  {
    day: 'Fri',
    icon: '🟢',
    event: 'Falcon Tower claim day',
    what: 'Collect quests saved since Thursday. AD Phase 5: training day — burn training speedups (all points +100%, speedups +30%).',
    dayL10n: { en: 'Fri', ru: 'Пт', de: 'Fr', es: 'Vie', fr: 'Ven', id: 'Jum', ja: '金', ko: '금', pt: 'Sex' },
    eventL10n: {
      en: 'Falcon Tower claim day',
      ru: 'День забора Башни Сокола',
      de: 'Falkenturm-Abhol-Tag',
      es: 'Día de cobro de Torre Halcón',
      fr: 'Jour de récolte Tour du Faucon',
      id: 'Hari Klaim Menara Elang',
      ja: 'ファルコンタワー受取日',
      ko: '매의 탑 수령일',
      pt: 'Dia de Resgate da Torre do Falcão'
    },
    whatL10n: {
      en: 'Collect quests saved since Thursday. AD Phase 5: training day — burn training speedups (all points +100%, speedups +30%).',
      ru: 'Заберите задания с четверга. Фаза 5: день тренировки войск — сжигайте ускорения тренировки (все очки +100%, ускорения +30%).',
      de: 'Quests vom Donnerstag abholen. AD Phase 5: Trainingstag — Trainings-Beschleuniger verbrennen (alle Punkte +100%, Beschleuniger +30%).',
      es: 'Cobra las misiones del jueves. Fase 5: entrenamiento de tropas — quema aceleradores de entrenamiento (puntos +100%, aceleradores +30%).',
      fr: 'Récoltez les quêtes de jeudi. Phase 5 : entraînement — utilisez les accélérations d\'entraînement (points +100%, accélérations +30%).',
      id: 'Klaim misi dari hari Kamis. AD Fase 5: hari pelatihan — bakar percepatan latihan (semua poin +100%, speedup +30%).',
      ja: '木曜からのクエストを受取。ADフェーズ5: 部隊訓練日 — 訓練加速を全投入（全pt+100%、加速+30%）。',
      ko: '목요일 퀘스트 수령. 연맹 대결 5단계: 훈련의 날 — 훈련 가속 집중 소모 (모든 점수 +100%, 가속 +30%).',
      pt: 'Colete missões de quinta. Fase 5: treino de tropas — use aceleradores de treinamento (pontos +100%, aceleradores +30%).'
    }
  },
  {
    day: 'Sat',
    icon: '⚔️',
    event: 'Alliance Duel finale',
    what: 'AD Phase 6 PvP showdown. Kingdom War main battles also land on Saturdays (biweekly).',
    dayL10n: { en: 'Sat', ru: 'Сб', de: 'Sa', es: 'Sáb', fr: 'Sam', id: 'Sab', ja: '土', ko: '토', pt: 'Sáb' },
    eventL10n: {
      en: 'Alliance Duel finale',
      ru: 'Финал Дуэли альянсов',
      de: 'Allianz-Duell-Finale',
      es: 'Final del Duelo de Alianzas',
      fr: 'Finale du Duel d\'Alliances',
      id: 'Final Duel Aliansi',
      ja: '同盟対決決勝戦',
      ko: '연맹 대결 결승전',
      pt: 'Final do Duelo de Alianças'
    },
    whatL10n: {
      en: 'AD Phase 6 PvP showdown. Kingdom War main battles also land on Saturdays (biweekly).',
      ru: 'Фаза 6: решающая PvP-битва. Главные сражения Войны королевств (KvK) также проходят по субботам (раз в 2 недели).',
      de: 'AD Phase 6: PvP-Showdown. Hauptkämpfe des Krieges der Königreiche (KvK) finden ebenfalls samstags statt (zweiwöchentlich).',
      es: 'Fase 6: enfrentamiento PvP. Las batallas principales de Guerra de Reinos (KvK) también caen en sábado (quincenal).',
      fr: 'Phase 6 : affrontement PvP. Les batailles majeures de Guerre des Royaumes (KvK) ont aussi lieu le samedi (toutes les 2 semaines).',
      id: 'AD Fase 6: pertempuran PvP penentu. Pertempuran utama Kingdom War (KvK) juga jatuh pada hari Sabtu (dua mingguan).',
      ja: 'ADフェーズ6: PvP決戦。王国戦争（KvK）の主戦場も隔週土曜日に開催。',
      ko: '연맹 대결 6단계: PvP 결전. 왕국 전쟁(KvK) 주요 결전도 격주 토요일에 진행.',
      pt: 'Fase 6: confronto PvP. As batalhas principais da Guerra dos Reinos (KvK) também ocorrem aos sábados (quinzenal).'
    }
  },
  {
    day: 'Sun',
    icon: '🗓️',
    event: 'Planning + shop reset',
    what: 'Pre-plan Monday; Alliance/other shops restock. Complete Falcon quests for tomorrow.',
    dayL10n: { en: 'Sun', ru: 'Вс', de: 'So', es: 'Dom', fr: 'Dim', id: 'Min', ja: '日', ko: '일', pt: 'Dom' },
    eventL10n: {
      en: 'Planning + shop reset',
      ru: 'Планирование + сброс магазинов',
      de: 'Planung + Shop-Reset',
      es: 'Planificación y reinicio de tiendas',
      fr: 'Planification & réinitialisation',
      id: 'Perencanaan & reset toko',
      ja: '計画立案 ＆ ショップ更新',
      ko: '계획 수립 및 상점 초기화',
      pt: 'Planejamento e reinício de lojas'
    },
    whatL10n: {
      en: 'Pre-plan Monday; Alliance/other shops restock. Complete Falcon quests for tomorrow.',
      ru: 'Подготовка к понедельнику; пополнение магазинов альянса и экспедиции. Выполните задания Башни Сокола на завтра.',
      de: 'Montag vorplanen; Allianz-/andere Shops füllen sich auf. Falkenturm-Quests für morgen vorbereiten.',
      es: 'Planifica el lunes; se renuevan las tiendas de Alianza y otras. Deja listas las misiones de la Torre para mañana.',
      fr: 'Préparez lundi ; réassort des boutiques d\'Alliance et autres. Préparez les quêtes de la Tour pour demain.',
      id: 'Rencanakan hari Senin; stok toko Aliansi/lainnya diperbarui. Selesaikan misi Menara untuk besok.',
      ja: '月曜に向けた計画準備。同盟・その他ショップの在庫更新。翌日のタワークエストを準備完了状態に。',
      ko: '월요일 계획 수립. 연맹 및 기타 상점 재입고. 내일을 위한 매의 탑 퀘스트 완료 후 보관.',
      pt: 'Planeje a segunda; estoque das lojas de Aliança e outras é renovado. Deixe as missões da Torre prontas para amanhã.'
    }
  }
];

export const recurring: CalEvent[] = [
  {
    day: 'Daily 02:00 UTC',
    icon: '🔄',
    event: 'Plunder limit reset',
    what: 'Daily plunder counter resets (100% → 15% → 5% bands start fresh).',
    dayL10n: {
      en: 'Daily 02:00 UTC',
      ru: 'Ежедневно 02:00 UTC',
      de: 'Täglich 02:00 UTC',
      es: 'Diario 02:00 UTC',
      fr: 'Tous les jours 02:00 UTC',
      id: 'Harian 02:00 UTC',
      ja: '毎日 02:00 UTC',
      ko: '매일 02:00 UTC',
      pt: 'Diariamente 02:00 UTC'
    },
    eventL10n: {
      en: 'Plunder limit reset',
      ru: 'Сброс лимита грабежа',
      de: 'Plünderungslimit-Reset',
      es: 'Reinicio del límite de saqueo',
      fr: 'Réinitialisation du pillage',
      id: 'Reset batas jarahan',
      ja: '略奪上限リセット',
      ko: '약탈 한도 초기화',
      pt: 'Reinicio do limite de saque'
    },
    whatL10n: {
      en: 'Daily plunder counter resets (100% → 15% → 5% bands start fresh).',
      ru: 'Счётчик грабежа ресурсов сбрасывается (пороги эффективности 100% → 15% → 5% обновляются).',
      de: 'Täglicher Plünderungszähler setzt sich zurück (100% → 15% → 5% Zonen starten neu).',
      es: 'El contador diario de saqueo se reinicia (los tramos de 100% → 15% → 5% vuelven a empezar).',
      fr: 'Le compteur journalier de pillage se réinitialise (les paliers 100% → 15% → 5% repartent à zéro).',
      id: 'Penghitung jarahan harian direset (zona 100% → 15% → 5% dimulai dari awal).',
      ja: '日課の略奪カウンターがリセット（100%→15%→5%の効率帯が再スタート）。',
      ko: '일일 약탈 카운터 초기화 (100% → 15% → 5% 구간 갱신).',
      pt: 'Contador diário de saque é redefinido (faixas de 100% → 15% → 5% recomeçam).'
    }
  },
  {
    day: 'Daily',
    icon: '🚚',
    event: 'Guild Wagon',
    what: 'One free wagon per alliance per day (resets ~11:00 KST). Lv.25 Alliance Gift adds +1 passenger.',
    dayL10n: {
      en: 'Daily',
      ru: 'Ежедневно',
      de: 'Täglich',
      es: 'Diario',
      fr: 'Tous les jours',
      id: 'Harian',
      ja: '毎日',
      ko: '매일',
      pt: 'Diariamente'
    },
    eventL10n: {
      en: 'Guild Wagon',
      ru: 'Торговый караван альянса',
      de: 'Allianz-Karawane',
      es: 'Caravana de la Alianza',
      fr: 'Caravane d\'Alliance',
      id: 'Karavan Aliansi',
      ja: '同盟貿易キャラバン',
      ko: '연맹 무역 마차',
      pt: 'Caravana da Aliança'
    },
    whatL10n: {
      en: 'One free wagon per alliance per day (resets ~11:00 KST). Lv.25 Alliance Gift adds +1 passenger.',
      ru: 'Один бесплатный вагон в день на альянс (сброс в 02:00 UTC). Привилегия подарка 25-го уровня добавляет +1 пассажира.',
      de: 'Ein kostenloser Wagen pro Allianz und Tag. Allianz-Geschenk Stufe 25 bringt +1 Passagier.',
      es: 'Un carromato gratis por alianza al día. El Regalo de Alianza nivel 25 añade +1 pasajero.',
      fr: 'Un chariot gratuit par alliance par jour. Le Cadeau d\'Alliance niv. 25 ajoute +1 passager.',
      id: 'Satu gerobak gratis per aliansi per hari. Hadiah Aliansi Lv.25 menambah +1 penumpang.',
      ja: '同盟ごとに毎日1回無料のキャラバン派遣。同盟ギフトLv.25で乗員スロット+1。',
      ko: '연맹당 매일 1회 무료 마차 파견. 연맹 선물 25레벨 달성 시 탑승객 +1 슬롯.',
      pt: 'Um vagão grátis por aliança ao dia. O Presente de Aliança Nv. 25 adiciona +1 passageiro.'
    }
  },
  {
    day: 'Daily',
    icon: '🐟',
    event: 'Sea Fish cap (during Mythic Treasure)',
    what: '300 fish/day — stop farming at cap, submit to Grand Feast.',
    dayL10n: {
      en: 'Daily',
      ru: 'Ежедневно',
      de: 'Täglich',
      es: 'Diario',
      fr: 'Tous les jours',
      id: 'Harian',
      ja: '毎日',
      ko: '매일',
      pt: 'Diariamente'
    },
    eventL10n: {
      en: 'Sea Fish cap (Mythic Treasure)',
      ru: 'Лимит морской рыбы (Мифическое сокровище)',
      de: 'Meeresfisch-Cap (Mythischer Schatz)',
      es: 'Límite de peces marinos (Tesoro mítico)',
      fr: 'Limite de poissons (Trésor mythique)',
      id: 'Batas Ikan Laut (Harta Mitos)',
      ja: '魚釣り上限（神話の宝）',
      ko: '바다 물고기 한도 (신화의 보물)',
      pt: 'Limite de peixes marinhos (Tesouro Mítico)'
    },
    whatL10n: {
      en: '300 fish/day — stop farming at cap, submit to Grand Feast.',
      ru: '300 рыб в день — остановитесь при достижении лимита и сдавайте в Большой пир.',
      de: '300 Fische/Tag — bei Erreichen des Caps stoppen und beim Großen Festmahl einreichen.',
      es: '300 peces/día — detén la pesca al alcanzar el tope y entrégalos en el Gran Banquete.',
      fr: '300 poissons/jour — arrêtez de pêcher au plafond et donnez-les au Grand Banquet.',
      id: '300 ikan/hari — berhenti memancing saat mencapai batas, serahkan ke Perjamuan Akbar.',
      ja: '1日300匹上限 — 上限に達したら釣りを止め、大宴会に納品。',
      ko: '하루 300마리 한도 — 한도 도달 시 낚시를 멈추고 대연회에 납품.',
      pt: '300 peixes/dia — pare de pescar no limite e envie ao Grande Banquete.'
    }
  },
  {
    day: 'Weekly',
    icon: '🏆',
    event: 'Royal Castle Scramble',
    what: 'Same weekday/time each week; 4-hour castle battle, one march, reinforce ≤30.',
    dayL10n: {
      en: 'Weekly',
      ru: 'Еженедельно',
      de: 'Wöchentlich',
      es: 'Semanal',
      fr: 'Chaque semaine',
      id: 'Mingguan',
      ja: '毎週',
      ko: '매주',
      pt: 'Semanal'
    },
    eventL10n: {
      en: 'Royal Castle Scramble',
      ru: 'Королевская схватка',
      de: 'Königsschloss-Rauferei',
      es: 'Lucha por el Castillo Real',
      fr: 'Bataille du Château Royal',
      id: 'Perebutan Kastil Kerajaan',
      ja: '王城争奪戦',
      ko: '왕성 쟁탈전',
      pt: 'Batalha pelo Castelo Real'
    },
    whatL10n: {
      en: 'Same weekday/time each week; 4-hour castle battle, one march, reinforce ≤30.',
      ru: 'Фиксированный день и время; 4-часовая битва за Королевский замок, один марш на игрока, подкрепления ≤30.',
      de: 'Gleicher Wochentag/Uhrzeit; 4-stündige Schlossschlacht, ein Marsch, Verstärkung ≤30.',
      es: 'Mismo día y hora cada semana; batalla de castillo de 4 horas, una marcha, refuerzo ≤30.',
      fr: 'Même jour/heure chaque semaine ; bataille de 4h, une marche, renforts ≤30.',
      id: 'Hari/jam yang sama setiap minggu; pertempuran kastil 4 jam, 1 march, bala bantuan ≤30.',
      ja: '毎週同じ曜日・時間。4時間の王城攻防戦、1部隊出撃、増援上限30枠。',
      ko: '매주 동일한 요일/시간 진행. 4시간 왕성 전투, 1개 부대 파견, 지원군 최대 30부대.',
      pt: 'Mesmo dia/horário toda semana; batalha de 4 horas, uma marcha, reforço ≤30.'
    }
  },
  {
    day: 'Weekly',
    icon: '🎖️',
    event: 'Survival Battle missions',
    what: 'Up to 60K skill badges/week; mission list varies by server.',
    dayL10n: {
      en: 'Weekly',
      ru: 'Еженедельно',
      de: 'Wöchentlich',
      es: 'Semanal',
      fr: 'Chaque semaine',
      id: 'Mingguan',
      ja: '毎週',
      ko: '매주',
      pt: 'Semanal'
    },
    eventL10n: {
      en: 'Survival Battle missions',
      ru: 'Битва на выживание',
      de: 'Überlebenskampf-Missionen',
      es: 'Misiones de Batalla por la Supervivencia',
      fr: 'Missions de Bataille de Survie',
      id: 'Misi Pertarungan Bertahan Hidup',
      ja: '生存試練ミッション',
      ko: '생존 전투 임무',
      pt: 'Missões de Batalha de Sobrevivência'
    },
    whatL10n: {
      en: 'Up to 60K skill badges/week; mission list varies by server.',
      ru: 'До 60 000 значков навыков в неделю; список задач зависит от сервера.',
      de: 'Bis zu 60k Fähigkeitsabzeichen/Woche; Missionsliste serverabhängig.',
      es: 'Hasta 60k insignias de habilidad por semana; la lista de misiones varía según el servidor.',
      fr: 'Jusqu\'à 60 000 insignes de compétence par semaine ; liste variable selon le serveur.',
      id: 'Hingga 60k lencana skill per minggu; daftar misi bervariasi per server.',
      ja: '週に最大60,000スキルバッジ獲得可能。ミッション内容はサーバーにより変動。',
      ko: '주당 최대 60,000 스킬 훈장 획득 가능. 임무 목록은 서버마다 상이.',
      pt: 'Até 60k insígnias de habilidade por semana; a lista de missões varia por servidor.'
    }
  },
  {
    day: 'Biweekly',
    icon: '👑',
    event: 'Kingdom War (KvK)',
    what: 'Prep/scoring through the week, main battle Saturday — 4-hour window.',
    dayL10n: {
      en: 'Biweekly',
      ru: 'Раз в 2 недели',
      de: 'Zweiwöchentlich',
      es: 'Quincenal',
      fr: 'Toutes les 2 semaines',
      id: 'Dua mingguan',
      ja: '隔週',
      ko: '격주',
      pt: 'Quinzenal'
    },
    eventL10n: {
      en: 'Kingdom War (KvK)',
      ru: 'Война королевств (KvK)',
      de: 'Krieg der Königreiche (KvK)',
      es: 'Guerra de Reinos (KvK)',
      fr: 'Guerre des Royaumes (KvK)',
      id: 'Perang Kerajaan (KvK)',
      ja: '王国戦争 (KvK)',
      ko: '왕국 전쟁 (KvK)',
      pt: 'Guerra dos Reinos (KvK)'
    },
    whatL10n: {
      en: 'Prep/scoring through the week, main battle Saturday — 4-hour window.',
      ru: 'Подготовка и набор очков в течение недели, главная битва в субботу (4-часовое окно).',
      de: 'Vorbereitung/Punktejagd unter der Woche, Hauptkampf am Samstag — 4-Stunden-Fenster.',
      es: 'Preparación y acumulación de puntos entre semana, batalla principal el sábado (ventana de 4h).',
      fr: 'Préparation et points en semaine, bataille principale le samedi — créneau de 4 heures.',
      id: 'Persiapan & akumulasi poin sepanjang minggu, pertempuran utama hari Sabtu (jendela 4 jam).',
      ja: '平日は準備・ポイント獲得、土曜日に4時間のメイン決戦。',
      ko: '주중 준비 및 점수 획득, 토요일 4시간 동안 주요 결전 진행.',
      pt: 'Preparação e pontuação durante a semana, batalha principal no sábado (janela de 4 horas).'
    }
  },
  {
    day: 'Weekly',
    icon: '🧪',
    event: 'Elixir Scramble',
    what: '30-min AvA point battle — remove squads from the wall before it starts!',
    dayL10n: {
      en: 'Weekly',
      ru: 'Еженедельно',
      de: 'Wöchentlich',
      es: 'Semanal',
      fr: 'Chaque semaine',
      id: 'Mingguan',
      ja: '毎週',
      ko: '매주',
      pt: 'Semanal'
    },
    eventL10n: {
      en: 'Elixir Scramble',
      ru: 'Гонка за эликсиром',
      de: 'Elixier-Gerangel',
      es: 'Carrera por el Elixir',
      fr: 'Course à l\'Élixir',
      id: 'Perebutan Eliksir',
      ja: 'エリクサー争奪戦',
      ko: '엘릭서 쟁탈전',
      pt: 'Disputa pelo Elixir'
    },
    whatL10n: {
      en: '30-min AvA point battle — remove squads from the wall before it starts!',
      ru: '30-минутное AvA-поле боя за очки — обязательно снимите войска со стен до старта!',
      de: '30-Minuten AvA-Punktekampf — nimm vor dem Start Trupps von der Mauer!',
      es: 'Batalla de puntos AvA de 30 min — ¡retira los escuadrones de la muralla antes de empezar!',
      fr: 'Bataille de points AvA de 30 min — retirez vos troupes du mur avant le lancement !',
      id: 'Pertempuran poin AvA 30 menit — lepaskan pasukan dari tembok sebelum dimulai!',
      ja: '30分間の同盟間ポイントバトル — 開始前に必ず城壁から部隊を外すこと！',
      ko: '30분간의 연맹 간 포인트 결전 — 시작 전 반드시 성벽에서 부대를 해제하세요!',
      pt: 'Batalha de pontos AvA de 30 min — retire os esquadrões da muralha antes de começar!'
    }
  },
  {
    day: 'Server-age based',
    icon: '🧟',
    event: 'Undead Siege',
    what: 'Available 2 weeks after launch; after 300K clue points — 20 solo waves; HP persists across waves.',
    dayL10n: {
      en: 'Server-age based',
      ru: 'От возраста сервера',
      de: 'Server-Alter-basiert',
      es: 'Según edad del servidor',
      fr: 'Selon l\'âge du serveur',
      id: 'Berdasarkan usia server',
      ja: 'サーバー段階依存',
      ko: '서버 연령 기준',
      pt: 'Baseado na idade do servidor'
    },
    eventL10n: {
      en: 'Undead Siege',
      ru: 'Осада нежити (Осада зомби)',
      de: 'Untoten-Belagerung',
      es: 'Asedio de los No Muertos',
      fr: 'Siège des Morts-Vivants',
      id: 'Pengepungan Mayat Hidup',
      ja: 'アンデッド包囲戦',
      ko: '언데드 공성전',
      pt: 'Cerco dos Mortos-Vivos'
    },
    whatL10n: {
      en: 'Available 2 weeks after launch; after 300K clue points — 20 solo waves; HP persists across waves.',
      ru: 'Доступна через 2 недели после старта; после 300K улик — 20 соло-волн; HP сохраняется между волнами.',
      de: 'Freischaltung 2 Wochen nach Serverstart; nach 300k Hinweisen — 20 Solowellen; KP bleiben erhalten.',
      es: 'Disponible 2 semanas tras el lanzamiento; tras 300k pistas — 20 oleadas en solitario; los PV persisten.',
      fr: 'Disponible 2 semaines après le lancement ; après 300k indices — 20 vagues solo ; les PV persistent.',
      id: 'Tersedia 2 minggu setelah pembukaan; setelah 300k petunjuk — 20 gelombang solo; HP terbawa antar gelombang.',
      ja: '開設2週間後から解禁。手がかり30万ptで開放 — 20ウェーブ防衛。HPはウェーブをまたいで引き継ぎ。',
      ko: '오픈 2주 후 개방. 단서 30만점 후 시작 — 20웨이브 솔로 방어. 체력은 웨이브 간 유지.',
      pt: 'Disponível 2 semanas após lançamento; após 300k pistas — 20 ondas solo; o PV persiste entre as ondas.'
    }
  },
  {
    day: '55 days',
    icon: '☣️',
    event: 'Era of Revival season',
    what: 'Expedition League (55 days): Resistance daily, Lord Statues, specialty trees.',
    dayL10n: {
      en: '55 days',
      ru: '55 дней',
      de: '55 Tage',
      es: '55 días',
      fr: '55 jours',
      id: '55 hari',
      ja: '55日間',
      ko: '55일간',
      pt: '55 dias'
    },
    eventL10n: {
      en: 'Era of Revival season',
      ru: 'Сезон Эры Возрождения',
      de: 'Zeitalter des Wiederauflebens',
      es: 'Temporada de Era de Revitalización',
      fr: 'Saison de l\'Ère du Renouveau',
      id: 'Musim Era Kebangkitan',
      ja: '復興の時代シーズン',
      ko: '부흥의 시대 시즌',
      pt: 'Temporada da Era do Renascimento'
    },
    whatL10n: {
      en: 'Expedition League (55 days): Resistance daily, Lord Statues, specialty trees.',
      ru: 'Лига экспедиций (55 дней): сопротивление ежедневно, Статуи Лорда, деревья специализаций.',
      de: 'Expeditionsliga (55 Tage): Tägliche Resistenz, Lord-Statuen, Spezialisierungsbäume.',
      es: 'Liga de Expedición (55 días): Resistencia diaria, Estatuas de Lord, árboles de especialidad.',
      fr: 'Ligue d\'Expédition (55 jours) : Résistance quotidienne, Statues de Seigneur, arbres de spécialité.',
      id: 'Liga Ekspedisi (55 hari): Resistensi harian, Patung Lord, pohon spesialisasi.',
      ja: '遠征リーグ（55日間）: 毎日の耐性強化、領主像、専門特化ツリー。',
      ko: '원정 리그 (55일): 일일 저항력 강화, 영주 석상, 전문화 특성 트리.',
      pt: 'Liga de Expedição (55 dias): Resistência diária, Estátuas de Lorde, árvores de especialidade.'
    }
  }
];