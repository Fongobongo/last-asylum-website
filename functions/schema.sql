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
  write_mode TEXT NOT NULL DEFAULT 'owner',
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
-- The public gallery filters on read_mode and sorts by updated_at; without
-- this composite index D1 scans every map for each page of the list.
CREATE INDEX IF NOT EXISTS idx_city_maps_public_updated
  ON city_maps(read_mode, updated_at DESC);

-- One-time data migration: maps created before 2026-11-12 inherited 'open' as
-- their write_mode default, so anyone who saw their id in the public gallery
-- could overwrite the plan. 'open' is now an explicit opt-in; convert those
-- legacy rows to 'owner'. The marker makes this idempotent and guarantees a
-- map deliberately switched to 'open' AFTER this deploy is never reset later.
CREATE TABLE IF NOT EXISTS schema_migrations (
  name TEXT PRIMARY KEY,
  applied_at INTEGER NOT NULL
);
UPDATE city_maps SET write_mode = 'owner'
WHERE write_mode = 'open'
  AND NOT EXISTS (
    SELECT 1 FROM schema_migrations WHERE name = '20261112_write_mode_owner'
  );
INSERT OR IGNORE INTO schema_migrations(name, applied_at)
VALUES ('20261112_write_mode_owner', CAST(strftime('%s','now') AS INTEGER) * 1000);

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

-- Attempt rows are pruned by window_start (see bumpAttempt in _maps-store.js).
-- Must stay AFTER the table above, otherwise a fresh database fails to apply.
CREATE INDEX IF NOT EXISTS idx_map_attempts_window ON map_attempts(window_start);

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
