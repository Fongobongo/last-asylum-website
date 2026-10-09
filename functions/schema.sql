-- D1 schema for shared vote totals (SQLite).
-- Apply once: wrangler d1 execute last_asylum_db --remote --file=functions/schema.sql
-- (or paste into the Cloudflare dashboard → D1 → Console).
--
-- totals: per-key counters shown to every visitor.
-- votes:  one row per (key, voter); voter = hash(IP) + browser fingerprint.
--         No raw IPs or fingerprints are stored — hashes only.

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
