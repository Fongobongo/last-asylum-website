export interface StatusItem {
  date: string;
  title: string;
  status: 'fixed' | 'investigating' | 'info';
  detail: string;
}

// Summarized from the official #status-update channel (44 messages, 2026-03 → 2026-08).
// Kept short; link to official Discord for live updates.
export const statusUpdates: StatusItem[] = [
  { date: '2026-08-18', title: 'Survey reward issue — apology & fix', status: 'fixed', detail: 'The survey reward exception was resolved; compensation sent via in-game mail.' },
  { date: '2026-08-10', title: 'Game exception — apology', status: 'fixed', detail: 'A game-wide exception was addressed; see the official post for compensation details.' },
  { date: '2026-08-06', title: 'Android display issues', status: 'fixed', detail: 'Display issues on Android devices resolved after investigation.' },
  { date: '2026-08-05', title: 'Pack purchase issues', status: 'investigating', detail: 'Some players reported pack purchase problems — report to support if affected.' },
  { date: '2026-07-15', title: 'SCAM ALERT: fake officials', status: 'info', detail: 'Scammers impersonate officials to steal accounts. Real staff never ask for passwords or payment outside official channels.' },
  { date: '2026-07-02', title: 'Server migration / merging FAQ', status: 'info', detail: 'Reposted guidance on server migration and merges for newer players.' },
  { date: '2026-06-26', title: 'Moderation system feedback call', status: 'info', detail: 'Mods asked players to help improve the auto-moderation system.' },
  { date: '2026-06-12', title: 'Google Play Games login issue', status: 'fixed', detail: 'Temporary workaround published, then a permanent fix.' },
  { date: '2026-06-12', title: 'Alliance Duel daily victory reward bug', status: 'fixed', detail: 'Daily victory rewards were not granted correctly; fixed and compensated.' },
  { date: '2026-06-08', title: 'Arena display bug & lag', status: 'fixed', detail: 'Arena display bug and game lag resolved.' },
  { date: '2026-06-04', title: 'Urgent security notice', status: 'info', detail: 'Security advisory issued — enable account linking and avoid third-party stores.' },
  { date: '2026-06-01', title: 'Top-up Center avatar frame bug', status: 'fixed', detail: 'Avatar frame from the Top-up Center was not delivered; fixed retroactively.' },
  { date: '2026-05-11', title: 'KvK rewards delay notice', status: 'fixed', detail: 'KvK (10/05) rewards were delayed; distributed after verification.' },
  { date: '2026-05-09', title: 'Server lag issue', status: 'fixed', detail: 'Significant server lag reported and fixed the same day.' },
  { date: '2026-04-21', title: 'Elixir Scramble round 2 anomaly', status: 'fixed', detail: 'April 18 Elixir Scramble issues; compensation distributed in stages.' },
  { date: '2026-04-07', title: 'Chat restrictions wave', status: 'info', detail: 'Risk-control system tightened → more 24h chat mutes. Appeal via Support button on the login page. Banned-word list includes innocent words (Grapes, Raccoon, Analysis…).' },
  { date: '2026-04-04', title: 'Cross-server teleport bug (Alliance Duel Raid)', status: 'fixed', detail: 'Cross-server teleportation issue during the raid resolved.' },
  { date: '2026-04-03', title: 'Chat mute fix (partial)', status: 'fixed', detail: 'Some false-positive muted words removed; fraud-related words (GM, Admin) stay banned.' },
  { date: '2026-04-01', title: 'Thief Hunt Leader spawn error', status: 'fixed', detail: 'Thief Leader spawned unexpectedly due to a data issue; extra resources reclaimed.' },
  { date: '2026-03-18', title: 'Falcon Tower Excavation exploit', status: 'fixed', detail: 'Players exploited an excavation bug for resources/Might — items reclaimed.' },
  { date: '2026-03-15', title: 'City buffs stopped working', status: 'fixed', detail: 'City buffs reported broken on some servers; reset after re-taking the role fixed it.' },
  { date: '2026-03-13', title: '"Network Connection" login error', status: 'fixed', detail: 'Fixes: restart the game, clear cache, disable VPN, or use the repair button (top-right on loading).' },
  { date: '2026-03-12', title: 'Error 1013 ban wave', status: 'fixed', detail: 'Accounts (temp/perma) banned by the mod bot including innocent words; Russian players hit hardest. Retry in 2-hour slots.' },
  { date: '2026-03-12', title: 'Pirate Legacy quest exploit', status: 'fixed', detail: 'Quest was repeatedly completable; progress deducted from exploiters for fairness.' },
];