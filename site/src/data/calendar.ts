export interface CalEvent {
  day: string; // Mon..Sat, daily, weekly, biweekly
  icon: string;
  event: string;
  what: string;
}

// Weekly rhythm + recurring schedules from the community guides.
// NOTE: exact rotation differs per server — always check your in-game calendar.
export const weeklySchedule: CalEvent[] = [
  { day: 'Mon', icon: '🟢', event: 'Falcon Tower claim day', what: 'Double-strength claim day: collect quests saved since Sunday. Also Alliance Duel Phase 1.' },
  { day: 'Tue', icon: '⏳', event: 'Save day', what: 'Complete Falcon quests but do not claim — tomorrow is double points. AD Phase 2.' },
  { day: 'Wed', icon: '🟢', event: 'Falcon Tower claim day', what: 'Collect quests saved since Tuesday. AD Phase 3: research/scroll day — consume study scrolls NOW, open epigraph chests.' },
  { day: 'Thu', icon: '⏳', event: 'Save day', what: 'AD Phase 4: hero day — spend UR/SSR/SR shards, recruit tickets, skill badges (UR shard = 20,000 pts).' },
  { day: 'Fri', icon: '🟢', event: 'Falcon Tower claim day', what: 'Collect quests saved since Thursday. AD Phase 5: training day — burn training speedups (all points +100%, speedups +30%).' },
  { day: 'Sat', icon: '⚔️', event: 'Alliance Duel finale', what: 'AD Phase 6 PvP showdown. Kingdom War main battles also land on Saturdays (biweekly).' },
  { day: 'Sun', icon: '🗓️', event: 'Planning + shop reset', what: 'Pre-plan Monday; Alliance/other shops restock. Complete Falcon quests for tomorrow.' },
];

export const recurring: CalEvent[] = [
  { day: 'Daily 02:00 UTC', icon: '🔄', event: 'Plunder limit reset', what: 'Daily plunder counter resets (100% → 15% → 5% bands start fresh).' },
  { day: 'Daily', icon: '🐑', event: 'Guild Wagon', what: 'One free wagon per alliance per day (resets ~11:00 KST).' },
  { day: 'Daily', icon: '🐟', event: 'Sea Fish cap (during Mythic Treasure)', what: '300 fish/day — stop farming at cap, submit to Grand Feast.' },
  { day: 'Weekly', icon: '🏆', event: 'Royal Castle Scramble', what: 'Same weekday/time each week; 4-hour castle battle, one march, reinforce ≤30.' },
  { day: 'Weekly', icon: '🎖️', event: 'Survival Battle missions', what: 'Up to 60K skill badges/week; mission list varies by server.' },
  { day: 'Biweekly', icon: '👑', event: 'Kingdom War', what: 'Prep/scoring through the week, main battle Saturday — 4-hour window.' },
  { day: 'Weekly', icon: '🧪', event: 'Elixir Scramble', thing: '', what: '30-min AvA point battle — remove squads from the wall before it starts!' } as CalEvent,
  { day: 'Server-age based', icon: '🧟', event: 'Undead Siege', what: 'After 300K clue points — 20 solo waves; hidden mechanic: 2–3 squads per wave, HP persists.' },
  { day: '~2 months', icon: '☣️', event: 'Era of Revival season', what: 'Season cycle (~2 months): Resistance daily, Lord Statues, specialty trees.' },
];