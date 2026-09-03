export interface FaqItem {
  q: string;
  a: string;
}

// Top questions from the Discord FAQ/help channels, phrased for search.
export const faqEn: FaqItem[] = [
  {
    q: 'What is the best F2P team in Last Asylum: Plague?',
    a: 'The canonical F2P squad is Arthur, Daskal, Marlena, Harper, Claire (all Warriors — mono-faction gives +20% HP/ATK/DEF). Arthur is free from day 1; the $1 Marlena top-up is considered the best value in the game. Daskal arrives in the first Era of Revival season (day 120+).',
  },
  {
    q: 'What should I upgrade first?',
    a: 'Sanctuary first, always — it gates every other building and your hero level cap. Then Training Grounds, Barracks, Research Lab, Infirmary, Wall. Keep the Builder\u2019s Hut at Sanctuary level until Sanctuary 15 for free construction speedups.',
  },
  {
    q: 'When does Marlena unlock?',
    a: 'Day 66 for free — or immediately via the $1 starter top-up. Save UR shards so she lands at 8\u2605 right away, then push 10\u2605.',
  },
  {
    q: 'How do I get Cynthia as F2P?',
    a: 'Cynthia arrives via the Wishing Wheel on day 8. Save diamonds from day 1 (skip everything else) — ~11,500 diamonds total, and always spin \u00d710 (single spins waste tokens).',
  },
  {
    q: 'How do I get antitoxin?',
    a: 'Antitoxin Workshop + Stable production, every building upgrade completion, Falcon Quests (nearly all of them), Covert Ops and Caravan Trade (including plundering others\u2019 ops — up to 5/day), and Blight/Elite Blight hunts (10/20 stamina). Events pay large amounts.',
  },
  {
    q: 'Why did my plunder income drop to almost nothing?',
    a: 'You hit the daily plunder limit: below the limit 100%, from 1\u00d7 the limit you keep only 15%, from 1.3\u00d7 only 5%. It resets at 02:00 UTC. The limit scales with Sanctuary level (2.5M at Lv.10\u201312 up to 30M at Lv.30) and rises immediately when you upgrade Sanctuary. A yellow triangle under your Might shows the status.',
  },
  {
    q: 'What should I buy in the shops?',
    a: 'Sanctuary/Expedition/Alliance shops: Crow Essence and UR Hero Omnifragments first. Honor shop is for gear blueprints only (never epigraph chests there). All shops restock Monday.',
  },
  {
    q: 'Are diamonds worth spending on speedups?',
    a: 'Only the VIP-shop 8h speedups are considered acceptable purchases — and only after hero resources. Community rule: never dump diamonds into speedups over hero wheel events (Cynthia day 8, Joker after day 15).',
  },
  {
    q: 'What faction should I build?',
    a: 'Warriors are the best early game (free Arthur/Harper shards, $1 Marlena). Rangers peak mid game (counter Warriors). Warlocks are the best late game but need heavy long-term investment. Mono-faction (5 heroes of one type) is the current meta because UR epigraphs buff a single faction.',
  },
  {
    q: 'How does Claire SSR\u2192UR conversion work?',
    a: 'Opens on Era Day 8. She lands at 6\u2605 and the run to 10\u2605 costs 1,600 SSR shards (each substage costs 2\u00d7 the SSR price). There\u2019s a team-buff dip between 6\u2605\u20139\u2605 — skip it by banking Hall of Honor levels before converting (Lv.60\u21928\u2605, Lv.100\u21929\u2605, Lv.160\u2192instant 10\u2605).',
  },
  {
    q: 'How do I redeem gift codes?',
    a: 'In-game: Avatar (top-left) \u2192 Settings \u2192 Gift Code. iOS or web: log in at the official redemption page with your linked Facebook/Google account, pick server and character, enter the code.',
  },
  {
    q: 'What are the biggest beginner mistakes?',
    a: 'Upgrading everything equally instead of one main squad; judging heroes before high stars (Marlena is the classic late bloomer); splitting Awakening materials across heroes; wasting gems on VIP levels over hero wheels; skipping daily plunder (~27M resources/day); letting stamina cap.',
  },
];