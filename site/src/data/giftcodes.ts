export interface GiftCode {
  code: string;
  date: string; // ISO
  note?: string;
  active?: boolean;
}

// Актуальный список от топ-игроков (перепроверен вручную).
export const giftCodes: GiftCode[] = [
  { code: 'LACAFE26', date: '2026-10-02', active: true, note: 'October 2026 promo (Discord/community)' },
  { code: 'LAOKT26', date: '2026-10-01', active: true, note: 'October 2026 community gift' },
  { code: 'LA30W7F2M', date: '2026-09-14', active: true, note: 'Discord milestone' },
  { code: 'LADCEX1223', date: '2026-09-08', active: true, note: '100 diamonds, 12× 5-min speedups, 15k grain + 15k timber' },
  { code: 'LA25W8CM', date: '2026-08-15', active: true, note: '–' },
  { code: 'LAKR15K9A', date: '2026-08-15', active: true, note: '–' },
  { code: 'LAKR12K7O', date: '2026-08-10', active: true, note: '–' },
  { code: 'LAKR10K6L', date: '2026-07-28', active: true, note: '–' },
  { code: 'twlap888', date: '2026-08-05', active: true, note: '–' },
  { code: 'twlap666', date: '2026-08-05', active: true, note: '–' },
  { code: 'LA20WBZ9', date: '2026-07-20', active: true, note: 'Discord milestone' },
  { code: 'LA15WPN4D', date: '2026-07-10', active: true, note: '–' },
  { code: 'LA1OW9F7X', date: '2026-06-25', active: true, note: '–' },
  { code: '61HW4LA', date: '2026-07-15', active: true, note: 'Wasteland bonus' },
  { code: 'LAPJAP777', date: '2026-07-01', active: true, note: 'Japan server gift' },
  { code: 'LAPKOR777', date: '2026-07-01', active: true, note: 'Korea server gift' },
  { code: 'WLTLAP', date: '2026-06-20', active: true, note: '–' },
  { code: 'LAAS777', date: '2026-06-15', active: true, note: 'Sanctuary defender pack' },
];

export const REDEEM_URL = 'https://gevents.globallap.com/gamecode/index.html?gameId=440';
