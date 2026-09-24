export interface GiftCode {
  code: string;
  date: string; // ISO (last source check)
  note?: string;
  active?: boolean;
}

// Cross-checked against wiki-last-asylum.com gift-code table (verified 2026-09-08).
// active = at least two independent sources call it working. Unconfirmed single-source
// codes are listed last with gi note.
export const giftCodes: GiftCode[] = [
  { code: 'LACAFE26', date: '2026-10-02', active: true, note: 'October 2026 promo (Discord/community)' },
  { code: 'LAOKT26', date: '2026-10-01', active: true, note: 'October 2026 community gift' },
  { code: 'LADCEX1223', date: '2026-09-08', active: true, note: '100 diamonds, 12× 5-min speedups, 15k grain + 15k timber' },
  { code: 'LA1OW9F7X', date: '2026-09-08', active: true, note: 'discord/milestone reward' },
  { code: 'LAVD26', date: '2026-09-08', active: true, note: '100 diamonds, 12× 5-min speedups, 15k grain + 15k timber' },
  { code: 'LAiOSLA', date: '2026-09-08', active: true, note: 'iOS players exclusive: 100 diamonds, 10× 5-min speedups' },
  { code: 'LA15WPN4D', date: '2026-09-02', active: true, note: 'lastasylumplague+lootbar (gamsgo: unconfirmed)' },
  { code: 'LA20WBZ9', date: '2026-09-02', active: true, note: 'lastasylumplague+lootbar (gamsgo: unconfirmed)' },
  { code: 'LA25W8CM', date: '2026-09-02', active: true, note: 'lastasylumplague+gamsgo' },
  { code: 'LADOG26', date: '2026-09-02', active: true, note: 'lastasylumplague+gamsgo' },
  { code: 'LAQIXI26', date: '2026-09-02', active: true, note: 'lastasylumplague (single source)' },
  { code: 'LAU15CHG', date: '2026-09-08', active: true, note: 'gamsgo (single source)' },
  { code: 'LAKR15K9A', date: '2026-09-08', active: true, note: 'gamsgo (single source)' },
  { code: 'LAKR10K6L', date: '2026-09-08', active: true, note: 'gamsgo (single source)' },
  { code: 'twlap888', date: '2026-09-08', active: true, note: 'gamsgo (single source) — timezone-limited rewards' },
  { code: 'twlap666', date: '2026-09-08', active: true, note: 'gamsgo (single source) — timezone-limited rewards' },
  { code: 'LA26FOOL', date: '2026-09-08', active: true, note: 'pocketgamer (single source)' },
  { code: 'LABOR26', date: '2026-09-08', active: true, note: 'pocketgamer (single source)' },
  { code: 'LAEGG26', date: '2026-09-08', active: true, note: 'pocketgamer (single source)' },
  { code: 'LAPGPOFF', date: '2026-09-08', active: true, note: 'pocketgamer (single source)' },
];

export const REDEEM_URL = 'https://www.lastasylumplague.com/redeem';
