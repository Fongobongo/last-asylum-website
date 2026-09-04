export interface GiftCode {
  code: string;
  date: string; // ISO
  note?: string;
  active?: boolean;
}

export const giftCodes: GiftCode[] = [
  { code: 'LAKR12K7O', date: '2026-09-04', active: true },
  { code: 'twlap888', date: '2026-09-04', active: true },
  { code: 'twlap666', date: '2026-09-04', active: true },
  { code: 'LAKR10K6L', date: '2026-09-04', active: true },
  { code: 'LA20WBZ9', date: '2026-09-04', active: true },
  { code: '61HW4LA', date: '2026-09-04', active: true },
  { code: 'LA15WPN4D', date: '2026-09-04', active: true },
  { code: 'LAPJAP777', date: '2026-09-04', active: true },
  { code: 'LAPKOR777', date: '2026-09-04', active: true },
  { code: 'LA1OW9F7X', date: '2026-09-04', active: true },
  { code: 'WLTLAP', date: '2026-09-04', active: true },
  { code: 'LAAS777', date: '2026-09-04', active: true },
  { code: 'LA25W8CM', date: '2026-09-04', active: true },
  { code: 'LAQIXI26', date: '2026-09-04', active: true },
  { code: 'LAKR15K9A', date: '2026-09-04', active: true },
  { code: 'LAU15CHG', date: '2026-09-04', active: true },
  { code: 'LADOG26', date: '2026-09-04', active: true },
  { code: 'LAWTD16F', date: '2026-09-04', active: true },
  // Historical / expired archive
  { code: 'LA26ALLY', date: '2026-07-31', active: false },
  { code: '26CHOCO', date: '2026-07-07', active: false },
  { code: 'LADAD26', date: '2026-06-22', active: false },
  { code: 'LA26PLAY', date: '2026-06-01', active: false },
  { code: 'LA26LOVE', date: '2026-05-11', active: false },
  { code: 'LABOR26', date: '2026-05-01', active: false },
  { code: 'LAEGG26', date: '2026-04-05', active: false },
  { code: 'LA26FOOL', date: '2026-04-01', active: false },
  { code: 'LAPGPOFF', date: '2026-03-03', active: false },
  { code: 'LAVD26', date: '2026-02-14', active: false },
  { code: 'LANY2026', date: '2026-01-01', active: false },
  { code: 'LAXMAS25', date: '2025-12-25', note: 'Merry Christmas', active: false },
  { code: 'LADCEX1223', date: '2025-12-23', note: 'Exclusive Rewards', active: false },
];

export const REDEEM_URL = 'https://gevents.globallap.com/gamecode/index.html?gameId=440';
