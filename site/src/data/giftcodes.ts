export interface GiftCode {
  code: string;
  date: string; // ISO
  note?: string;
  active?: boolean;
}

export const giftCodes: GiftCode[] = [
  { code: 'LA30W7F2M', date: '2026-09-14', active: true, note: 'Discord 300k Fans Milestone (Diamonds, Speedups, Resources)' },
  { code: 'LADCEX1223', date: '2026-09-08', active: true, note: '100 Diamonds, 12× Speedups, 15k Grain/Timber (Discord Exclusive)' },
  { code: 'LA25W8CM', date: '2026-08-15', active: true, note: 'Discord 250k Fans (500 Diamonds, 80× Speedups, 60k Resources)' },
  { code: 'LAKR15K9A', date: '2026-08-20', active: true, note: 'Server Milestone Gift' },
  { code: 'LAKR12K7O', date: '2026-08-10', active: true, note: 'Community Milestone Gift' },
  { code: 'twlap888', date: '2026-08-05', active: true, note: '500 Diamonds, 7 Recruit Tickets, 50k Resources' },
  { code: 'twlap666', date: '2026-08-05', active: true, note: '300 Diamonds, 5 Recruit Tickets, 30k Resources' },
  { code: 'LAKR10K6L', date: '2026-07-28', active: true, note: '300 Diamonds, 3 Recruit Tickets, 40× Speedups, 50k Resources' },
  { code: 'LA20WBZ9', date: '2026-07-20', active: true, note: 'Discord 200k Fans Milestone' },
  { code: '61HW4LA', date: '2026-07-15', active: true, note: 'Wasteland Exploration Bonus' },
  { code: 'LA15WPN4D', date: '2026-07-10', active: true, note: 'Veteran Doctor Supply Pack' },
  { code: 'LAPJAP777', date: '2026-07-01', active: true, note: 'Japan Server Celebration' },
  { code: 'LAPKOR777', date: '2026-07-01', active: true, note: 'Korea Server Celebration' },
  { code: 'LA1OW9F7X', date: '2026-06-25', active: true, note: 'Era of Revival Warmup' },
  { code: 'WLTLAP', date: '2026-06-20', active: true, note: 'Global Community Gift' },
  { code: 'LAAS777', date: '2026-06-15', active: true, note: 'Sanctuary Defender Supply' },

  // Expired codes (historical archive)
  { code: 'LADOG26', date: '2026-08-27', active: false, note: 'International Dog Day (Expired / Истёк)' },
  { code: 'LAWTD16F', date: '2026-08-25', active: false, note: 'Community Special Reward (Expired / Истёк)' },
  { code: 'LAU15CHG', date: '2026-08-22', active: false, note: 'Summer Festival Bonus (Expired / Истёк)' },
  { code: 'LAQIXI26', date: '2026-08-19', active: false, note: 'Qixi Festival Special (Expired / Истёк)' },
  { code: 'LA26ALLY', date: '2026-07-30', active: false, note: 'Friendship Day (Expired / Истёк)' },
  { code: '26CHOCO', date: '2026-07-07', active: false, note: 'World Chocolate Day (Expired / Истёк)' },
  { code: 'LADAD26', date: '2026-06-21', active: false, note: "Father's Day (Expired / Истёк)" },
  { code: 'LA26PLAY', date: '2026-06-01', active: false, note: "Children's Day (Expired / Истёк)" },
  { code: 'LABOR26', date: '2026-05-01', active: false, note: 'Labor Day (Expired / Истёк)' },
  { code: 'LA26FOOL', date: '2026-04-01', active: false, note: "April Fool's (Expired / Истёк)" },
  { code: 'LAPGPOFF', date: '2026-03-15', active: false, note: 'Google Play Launch (Expired / Истёк)' },
  { code: 'LAiOSLA', date: '2026-03-01', active: false, note: 'iOS Launch (Expired / Истёк)' },
  { code: 'LANY2026', date: '2026-01-01', active: false, note: 'New Year 2026 (Expired / Истёк)' },
  { code: 'LAXMAS25', date: '2025-12-25', active: false, note: 'Christmas 2025 (Expired / Истёк)' },
  { code: 'LA2026NEW', date: '2026-08-15', active: false, note: 'Expired / Истёк' },
  { code: 'SUMMER2026', date: '2026-08-01', active: false, note: 'Expired / Истёк' },
  { code: 'WELCOME2026', date: '2026-07-20', active: false, note: 'Expired / Истёк' },
  { code: 'DEVGIFT2026', date: '2026-07-10', active: false, note: 'Expired / Истёк' },
  { code: 'LAPLAUNCH', date: '2026-06-01', active: false, note: 'Expired / Истёк' },
  { code: 'FB10KFANS', date: '2026-05-15', active: false, note: 'Expired / Истёк' },
];

export const REDEEM_URL = 'https://gevents.globallap.com/gamecode/index.html?gameId=440';
