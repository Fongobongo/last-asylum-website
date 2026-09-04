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
  // Expired codes (historical archive)
  { code: 'LA2026NEW', date: '2026-08-15', active: false, note: 'Expired / Истёк' },
  { code: 'SUMMER2026', date: '2026-08-01', active: false, note: 'Expired / Истёк' },
  { code: 'WELCOME2026', date: '2026-07-20', active: false, note: 'Expired / Истёк' },
  { code: 'DEVGIFT2026', date: '2026-07-10', active: false, note: 'Expired / Истёк' },
  { code: 'LAPLAUNCH', date: '2026-06-01', active: false, note: 'Expired / Истёк' },
  { code: 'FB10KFANS', date: '2026-05-15', active: false, note: 'Expired / Истёк' },
];

export const REDEEM_URL = 'https://gevents.globallap.com/gamecode/index.html?gameId=440';
