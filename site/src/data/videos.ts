export interface Video {
  id: string;
  title?: string;
  lang?: 'en' | 'ru';
}

export const videos = {
  beginner: [
    { id: 'D8rB9d_5cX8', title: 'Best Start Guide — Your First 24 Hours', lang: 'en' },
    { id: 'aD7q59suZyA', title: 'Complete Infrastructure Guide', lang: 'en' },
    { id: '98MOWm31PqE', title: 'The Ultimate Hero Guide for Beginners', lang: 'en' },
  ] as Video[],
  beginner_ru: [
    { id: 'ljXO4lFCL2E', title: 'Гайд по застройке', lang: 'ru' },
    { id: 'D8rB9d_5cX8', title: 'Best Start — First 24 Hours (EN)', lang: 'en' },
    { id: 'aD7q59suZyA', title: 'Infrastructure Guide (EN)', lang: 'en' },
  ] as Video[],
  buildings: [
    { id: 'DkH1xNq_JV0', title: 'Rapid Construction — Upgrade Speed Tips', lang: 'en' },
    { id: 'TIXXXP0BLec', title: 'Building Roadmap to Level 27', lang: 'en' },
    { id: '0VT5EEE-Swo', title: 'Top 10 Buildings — Complete Guide', lang: 'en' },
  ] as Video[],
  buildings_ru: [
    { id: 'ljXO4lFCL2E', title: 'Гайд по застройке', lang: 'ru' },
    { id: 'DkH1xNq_JV0', title: 'Rapid Construction (EN)', lang: 'en' },
    { id: 'TIXXXP0BLec', title: 'Building Roadmap (EN)', lang: 'en' },
  ] as Video[],
  heroes: [
    { id: 'YeplIJlVDs0', title: 'Top 5 F2P Heroes That Will Carry Your Team', lang: 'en' },
    { id: 'PNaQ5Q8sGAY', title: 'Hero Academy — Why Your Heroes Feel Weak', lang: 'en' },
    { id: '98MOWm31PqE', title: 'The Ultimate Hero Guide for Beginners', lang: 'en' },
  ] as Video[],
  heroes_ru: [
    { id: 'm-C9_1aNjro', title: 'Герои | Механика PVP', lang: 'ru' },
    { id: 'YeplIJlVDs0', title: 'Top 5 F2P Heroes (EN)', lang: 'en' },
    { id: 'PNaQ5Q8sGAY', title: 'Hero Academy (EN)', lang: 'en' },
  ] as Video[],
  economy: [
    { id: 'xfSwuQ21uAs', title: 'Diamond Spending — What Is Worth It', lang: 'en' },
    { id: 'gU4oLNW1hq0', title: 'Shop Priorities — In-Game Currency', lang: 'en' },
    { id: 'SkCEUgERNyo', title: 'My Priority List for Every Shop', lang: 'en' },
  ] as Video[],
  economy_ru: [
    { id: 'xfSwuQ21uAs', title: 'Diamond Spending (EN)', lang: 'en' },
    { id: 'gU4oLNW1hq0', title: 'Shop Priorities (EN)', lang: 'en' },
    { id: 'SkCEUgERNyo', title: 'Shop Priority List (EN)', lang: 'en' },
  ] as Video[],
  raven: [
    { id: 'Sl90M9eAiNg', title: 'Ravens & Epigraph System Breakdown', lang: 'en' },
    { id: 'MaTgA50P81s', title: 'Raven & Epigraphs — Ultimate Breakdown', lang: 'en' },
  ] as Video[],
  raven_ru: [
    { id: 'Sl90M9eAiNg', title: 'Ravens & Epigraphs (EN)', lang: 'en' },
    { id: 'MaTgA50P81s', title: 'Raven Breakdown (EN)', lang: 'en' },
  ] as Video[],
  era: [
    { id: 'FrZc05xee0s', title: 'Era of Revival — Starter Guide', lang: 'en' },
    { id: 'tAgVqvstPBY', title: 'Complete Era of Revival Breakdown', lang: 'en' },
    { id: 'RFc7SqnbKbg', title: 'Resistance System Explained', lang: 'en' },
  ] as Video[],
  era_ru: [
    { id: 'FrZc05xee0s', title: 'Era of Revival — Starter Guide (EN)', lang: 'en' },
    { id: 'tAgVqvstPBY', title: 'Complete Era Breakdown (EN)', lang: 'en' },
    { id: 'RFc7SqnbKbg', title: 'Resistance System (EN)', lang: 'en' },
  ] as Video[],
  alliance_duel: [
    { id: '2LJ11oTk20M', title: 'How to Dominate Alliance Duels', lang: 'en' },
    { id: '0k621wMXs4Y', title: 'Survival Battle & Alliance Duel — Training Points', lang: 'en' },
  ] as Video[],
  alliance_duel_ru: [
    { id: 'cN832LwDzlg', title: 'Дуэль альянсов', lang: 'ru' },
    { id: '2LJ11oTk20M', title: 'How to Dominate Duels (EN)', lang: 'en' },
  ] as Video[],
  elixir: [
    { id: 'dO0tbJMcCVs', title: 'Master the Elixir Scramble', lang: 'en' },
    { id: 'CapxXQKwxaM', title: 'Live Elixir Event with Commentary', lang: 'en' },
    { id: 'hHPpnUqTlNc', title: 'Elixir Scramble Map', lang: 'en' },
  ] as Video[],
  elixir_ru: [
    { id: 'dO0tbJMcCVs', title: 'Master the Elixir Scramble (EN)', lang: 'en' },
    { id: 'hHPpnUqTlNc', title: 'Elixir Map (EN)', lang: 'en' },
  ] as Video[],
  kvk: [
    { id: 'q0g5pRPXna0', title: 'KvK Guide — 5 Essential Strategies', lang: 'en' },
    { id: 'QjtaglYMb8c', title: 'UR Blueprint for KvK Victory', lang: 'en' },
  ] as Video[],
  kvk_ru: [
    { id: 'q0g5pRPXna0', title: 'KvK — 5 стратегий (EN)', lang: 'en' },
    { id: 'QjtaglYMb8c', title: 'KvK Blueprint (EN)', lang: 'en' },
  ] as Video[],
  undead: [
    { id: 'sYEB0UBAs3o', title: 'Undead Siege Complete Guide', lang: 'en' },
    { id: '8r37RULe41s', title: 'Top 7 Undead Siege Mistakes', lang: 'en' },
  ] as Video[],
  undead_ru: [
    { id: 'sYEB0UBAs3o', title: 'Undead Siege — полный гайд (EN)', lang: 'en' },
    { id: '8r37RULe41s', title: 'Top 7 Mistakes (EN)', lang: 'en' },
  ] as Video[],
  cheese: [
    { id: 'fXyHYFg1nbE', title: 'Cheese Trap Guide', lang: 'en' },
    { id: 'o9pBWAAH5kM', title: 'Cheese Trap — Deep Dive', lang: 'en' },
  ] as Video[],
  cheese_ru: [
    { id: 'fXyHYFg1nbE', title: 'Cheese Trap Guide (EN)', lang: 'en' },
    { id: 'o9pBWAAH5kM', title: 'Cheese Trap (EN)', lang: 'en' },
  ] as Video[],
  crystal: [
    { id: '4xO4UF7KwAU', title: 'The Only Crystal Cluster Guide You Need', lang: 'en' },
    { id: 'p_KKq7Gu490', title: 'F2P Crystal Cluster Valley Guide', lang: 'en' },
  ] as Video[],
  crystal_ru: [
    { id: '4xO4UF7KwAU', title: 'Crystal Cluster Guide (EN)', lang: 'en' },
    { id: 'p_KKq7Gu490', title: 'F2P Crystal Guide (EN)', lang: 'en' },
  ] as Video[],
  thief: [
    { id: 'sZoTJf55rSU', title: 'Thief Hunt Guide', lang: 'en' },
  ] as Video[],
  thief_ru: [
    { id: 'sZoTJf55rSU', title: 'Thief Hunt (EN)', lang: 'en' },
  ] as Video[],
  survival: [
    { id: 'akt3OGeHXgY', title: 'Ultimate Survival Battle Guide — 60K Badges', lang: 'en' },
  ] as Video[],
  survival_ru: [
    { id: 'akt3OGeHXgY', title: 'Survival Battle — 60K Badges (EN)', lang: 'en' },
  ] as Video[],
  canyon: [
    { id: '1Q0scD3MELo', title: 'Canyon Conquest — Troop Deployment', lang: 'en' },
    { id: 'Bkh7H8nzVw4', title: 'Dominate Canyon Conquest', lang: 'en' },
  ] as Video[],
  canyon_ru: [
    { id: '1Q0scD3MELo', title: 'Canyon Conquest (EN)', lang: 'en' },
    { id: 'Bkh7H8nzVw4', title: 'Dominate Canyon (EN)', lang: 'en' },
  ] as Video[],
  mythic: [
    { id: 'boI5El6zCEs', title: 'Mythic Treasure F2P Guide', lang: 'en' },
    { id: '9RMjsXxa_zk', title: 'Buried Treasure Mini-Game', lang: 'en' },
  ] as Video[],
  mythic_ru: [
    { id: 'boI5El6zCEs', title: 'Mythic Treasure F2P (EN)', lang: 'en' },
    { id: '9RMjsXxa_zk', title: 'Buried Treasure (EN)', lang: 'en' },
  ] as Video[],
  royal: [
    { id: 'rMrq2N9PT7E', title: 'Royal City Scramble — Throne Fight', lang: 'en' },
  ] as Video[],
  royal_ru: [
    { id: 'rMrq2N9PT7E', title: 'Royal City Scramble (EN)', lang: 'en' },
  ] as Video[],
  arena: [
    { id: 'OGyohKhAHFE', title: 'Arena — How to Climb', lang: 'en' },
  ] as Video[],
  arena_ru: [
    { id: 'OGyohKhAHFE', title: 'Arena (EN)', lang: 'en' },
  ] as Video[],
  wagon: [
    { id: 'yyp0GtLmqME', title: "Beginner's Guild Wagon Guide", lang: 'en' },
    { id: 'crDuOmGa-yY', title: 'Caravan Raids — Better Rewards', lang: 'en' },
  ] as Video[],
  wagon_ru: [
    { id: 'yyp0GtLmqME', title: 'Guild Wagon (EN)', lang: 'en' },
    { id: 'crDuOmGa-yY', title: 'Caravan Raids (EN)', lang: 'en' },
  ] as Video[],
  demon_king: [
    { id: 'C7wH29bw0ik', title: 'Hero Upgrade Order', lang: 'en' },
  ] as Video[],
  demon_king_ru: [
    { id: 'C7wH29bw0ik', title: 'Hero Upgrade Order (EN)', lang: 'en' },
  ] as Video[],
  gear: [
    { id: 'osHV-JlD0IU', title: 'The Only Gear Upgrade Guide You Need', lang: 'en' },
    { id: 'SPj-rBfLYRs', title: 'Gear System — The Rules Changed', lang: 'en' },
  ] as Video[],
  gear_ru: [
    { id: 'osHV-JlD0IU', title: 'Gear Upgrade Guide (EN)', lang: 'en' },
    { id: 'SPj-rBfLYRs', title: 'Gear System (EN)', lang: 'en' },
  ] as Video[],
} as const;

export function videosFor(topic: string, lang: 'en' | 'ru'): Video[] {
  const ruKey = `${topic}_ru`;
  if (lang === 'ru' && ruKey in videos) return [...(videos as any)[ruKey]];
  if (topic in videos) return [...(videos as any)[topic]];
  return [];
}