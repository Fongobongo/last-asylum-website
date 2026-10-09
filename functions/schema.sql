-- D1 schema for shared vote totals (SQLite).
-- Apply: wrangler d1 execute last_asylum_db --remote --file=functions/schema.sql
--
-- totals: per-key counters shown to every visitor (key = 'guide:<path>' | 'code:<CODE>').
-- votes:  one row per (key, voter); voter = hash(IP) + browser fingerprint.
--         No raw IPs or fingerprints are stored — hashes only.
-- suggested_codes: player-proposed gift codes. status 'pending' flips to
--         'approved' automatically once the code reaches 5 likes (see api/votes.js).

CREATE TABLE IF NOT EXISTS totals (
  key TEXT PRIMARY KEY,
  likes INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS votes (
  key TEXT NOT NULL,
  ident TEXT NOT NULL,
  vote TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (key, ident)
);

CREATE TABLE IF NOT EXISTS suggested_codes (
  code TEXT PRIMARY KEY,
  note TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending',
  submitter TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL
);
