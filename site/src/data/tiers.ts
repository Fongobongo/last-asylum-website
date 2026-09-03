export type Tier = 'S' | 'A' | 'B' | 'C';
export type Faction = 'Warrior' | 'Ranger' | 'Warlock';

export interface HeroTierEntry {
  name: string;
  faction: Faction;
  class: 'Tank' | 'Carry' | 'Support';
  rarity: 'UR' | 'SSR';
  tier: Tier;
  note: string; // short why
}

// Compiled from the community consensus (merlyn squad guides, DrAction PvP advice,
// 5sunburn timelines, boss-blight comps and F2P threads). Tier context: overall
// account value for a typical F2P/mid-spender progression path.
export const heroTiers: HeroTierEntry[] = [
  // S — core long-term investments
  { name: 'Arthur', faction: 'Warrior', class: 'Tank', rarity: 'UR', tier: 'S', note: 'Free UR tank from day 1 — the backbone of every F2P squad' },
  { name: 'Marlena', faction: 'Warrior', class: 'Carry', rarity: 'UR', tier: 'S', note: '~85% of your damage until Zoya; $1 top-up = best value in game' },
  { name: 'Claire', faction: 'Warrior', class: 'Carry', rarity: 'SSR', tier: 'S', note: 'Free shards early, key boss passive, SSR→UR conversion later' },
  { name: 'Harper', faction: 'Warrior', class: 'Support', rarity: 'UR', tier: 'S', note: 'Ultimate buffs entire team ATK — 8★ is mandatory' },
  { name: 'Daskal', faction: 'Warrior', class: 'Tank', rarity: 'UR', tier: 'S', note: 'Best tank in the game (Era of Revival, day 120+)' },

  // A — strong carries / event heroes
  { name: 'Cynthia', faction: 'Ranger', class: 'Carry', rarity: 'UR', tier: 'A', note: 'F2P carry via Wishing Wheel day 8 (~11.5k diamonds); strong vs monsters' },
  { name: 'Zoya', faction: 'Warrior', class: 'Carry', rarity: 'UR', tier: 'A', note: 'Paid-only; splits damage 50/50 with maxed Marlena' },
  { name: 'Bell', faction: 'Ranger', class: 'Support', rarity: 'UR', tier: 'A', note: 'Buffs 2 strongest ATK allies + all rangers — boss comp core (needs 6★/ult 10)' },
  { name: 'Shadow', faction: 'Ranger', class: 'Tank', rarity: 'UR', tier: 'A', note: 'Hero Pass tank; hold the line while carries kill' },
  { name: 'Annie', faction: 'Warlock', class: 'Carry', rarity: 'UR', tier: 'A', note: 'Secretly strong for F2P; 8★ support skill = huge team value' },
  { name: 'Joker', faction: 'Warlock', class: 'Carry', rarity: 'UR', tier: 'A', note: 'PvP finisher (targets lowest HP); wheel target after day 15' },
  { name: 'Red Lady', faction: 'Ranger', class: 'Carry', rarity: 'UR', tier: 'A', note: 'Ranger carry with stuns for PvP' },

  // B — situational / budget
  { name: 'Lucius', faction: 'Warrior', class: 'Tank', rarity: 'SSR', tier: 'B', note: '"Absolute Shield" free tank while building URs' },
  { name: 'Bella', faction: 'Warrior', class: 'Tank', rarity: 'SSR', tier: 'B', note: 'Free early frontliner; thief-hunt survival pick' },
  { name: 'Celia', faction: 'Warrior', class: 'Support', rarity: 'SSR', tier: 'B', note: 'Team-wide elite-monster buff for boss fights' },
  { name: 'Kesso', faction: 'Warrior', class: 'Carry', rarity: 'SSR', tier: 'B', note: 'Budget backline DPS with resource boosts' },
  { name: 'Ash', faction: 'Ranger', class: 'Carry', rarity: 'SSR', tier: 'B', note: 'Monster-damage passive for 2 best rangers — ranger boss comps' },
  { name: 'Stellar', faction: 'Warlock', class: 'Support', rarity: 'SSR', tier: 'B', note: 'Warlock monster-damage support — warlock boss comps' },
  { name: 'Louis', faction: 'Ranger', class: 'Tank', rarity: 'UR', tier: 'B', note: 'Ranger tank for mono-ranger rosters' },
  { name: 'Nicole', faction: 'Warlock', class: 'Support', rarity: 'UR', tier: 'B', note: 'Healing support for warlock squads' },
  { name: 'Ulfrid', faction: 'Warlock', class: 'Tank', rarity: 'UR', tier: 'B', note: 'Warlock tank (renamed from Brian)' },
  { name: 'Sivir', faction: 'Warrior', class: 'Carry', rarity: 'SSR', tier: 'C', note: 'Very early budget carry — replaced quickly' },
];

export const tierColors: Record<Tier, string> = {
  S: 'border-red-500/50 bg-red-900/20 text-red-300',
  A: 'border-amber-500/50 bg-amber-900/20 text-amber-300',
  B: 'border-sky-500/50 bg-sky-900/20 text-sky-300',
  C: 'border-stone-500/50 bg-stone-800/40 text-stone-400',
};