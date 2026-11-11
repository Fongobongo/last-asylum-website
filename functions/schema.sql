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

-- city_maps: shared city-map documents (see api/maps.js).
-- doc holds JSON {v:2, alliances:[...], stages:[{o:{cityId:allianceId}} x7]}.
-- Passwords (PBKDF2-SHA256) and the owner token are stored as hashes only.
CREATE TABLE IF NOT EXISTS city_maps (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  server TEXT NOT NULL DEFAULT '',
  owner_hash TEXT NOT NULL,
  read_mode TEXT NOT NULL DEFAULT 'public',
  write_mode TEXT NOT NULL DEFAULT 'open',
  read_salt TEXT NOT NULL DEFAULT '',
  read_hash TEXT NOT NULL DEFAULT '',
  write_salt TEXT NOT NULL DEFAULT '',
  write_hash TEXT NOT NULL DEFAULT '',
  doc TEXT NOT NULL,
  rev INTEGER NOT NULL DEFAULT 1,
  forked_from TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_city_maps_updated ON city_maps(updated_at DESC);

-- map_revisions: immutable snapshots for map history, comparison and restore.
CREATE TABLE IF NOT EXISTS map_revisions (
  map_id TEXT NOT NULL,
  rev INTEGER NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  server TEXT NOT NULL DEFAULT '',
  doc TEXT NOT NULL,
  actor TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL,
  PRIMARY KEY (map_id, rev)
);

CREATE INDEX IF NOT EXISTS idx_map_revisions_map ON map_revisions(map_id, rev DESC);

-- map_attempts: brute-force guard for map passwords (per IP + map + kind).
CREATE TABLE IF NOT EXISTS map_attempts (
  ident TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  window_start INTEGER NOT NULL
);

-- map_security_events: audit trail of failed password attempts (ident is hashed).
CREATE TABLE IF NOT EXISTS map_security_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  map_id TEXT NOT NULL,
  ident TEXT NOT NULL,
  kind TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_map_security_created ON map_security_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_map_security_map ON map_security_events(map_id, created_at DESC);
