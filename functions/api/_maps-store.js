// Storage adapter for the city-map API.
//
// The API never talks to D1 directly: it calls this small interface so the
// exact same handler can run in production (D1) and in local preview
// (site/scripts/dev-maps-store.mjs, JSON file on disk).
//
//   get(id)                        -> map | null
//   insert(map)                    -> void
//   update(id, expectedRev, patch) -> map | null   (null = revision conflict)
//   listPublic(limit)              -> summary rows
//   remove(id)                     -> void
//   bumpAttempt(ident, now, winMs) -> failure count in the current window
//   clearAttempts(ident)           -> void

const COLS = {
  name: 'name',
  server: 'server',
  ownerHash: 'owner_hash',
  readMode: 'read_mode',
  writeMode: 'write_mode',
  readSalt: 'read_salt',
  readHash: 'read_hash',
  writeSalt: 'write_salt',
  writeHash: 'write_hash',
  doc: 'doc',
  rev: 'rev',
  forkedFrom: 'forked_from',
  updatedAt: 'updated_at',
};

const SELECT =
  'SELECT id, name, server, owner_hash, read_mode, write_mode, read_salt, read_hash, ' +
  'write_salt, write_hash, doc, rev, forked_from, created_at, updated_at FROM city_maps';

function toMap(r) {
  return {
    id: r.id,
    name: r.name,
    server: r.server,
    ownerHash: r.owner_hash,
    readMode: r.read_mode,
    writeMode: r.write_mode,
    readSalt: r.read_salt,
    readHash: r.read_hash,
    writeSalt: r.write_salt,
    writeHash: r.write_hash,
    doc: r.doc,
    rev: r.rev,
    forkedFrom: r.forked_from,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  };
}

export function d1Store(db) {
  return {
    async get(id) {
      const r = await db.prepare(SELECT + ' WHERE id = ?').bind(id).first();
      return r ? toMap(r) : null;
    },

    async insert(m) {
      await db
        .prepare(
          'INSERT INTO city_maps (id, name, server, owner_hash, read_mode, write_mode, ' +
            'read_salt, read_hash, write_salt, write_hash, doc, rev, forked_from, ' +
            'created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        )
        .bind(
          m.id, m.name, m.server, m.ownerHash, m.readMode, m.writeMode,
          m.readSalt, m.readHash, m.writeSalt, m.writeHash, m.doc, m.rev,
          m.forkedFrom, m.createdAt, m.updatedAt
        )
        .run();
    },

    async update(id, expectedRev, patch) {
      const sets = [];
      const vals = [];
      for (const key of Object.keys(patch)) {
        if (!COLS[key]) continue;
        sets.push(COLS[key] + ' = ?');
        vals.push(patch[key]);
      }
      if (!sets.length) return this.get(id);
      vals.push(id, expectedRev);
      const res = await db
        .prepare('UPDATE city_maps SET ' + sets.join(', ') + ' WHERE id = ? AND rev = ?')
        .bind(...vals)
        .run();
      const changes = res && res.meta ? res.meta.changes : 0;
      if (!changes) return null;
      return this.get(id);
    },

    async listPublic(limit) {
      const res = await db
        .prepare(
          'SELECT id, name, server, rev, forked_from, created_at, updated_at FROM city_maps ' +
            "WHERE read_mode = 'public' ORDER BY updated_at DESC LIMIT ?"
        )
        .bind(limit)
        .all();
      const rows = (res && res.results) || [];
      return rows.map((r) => ({
        id: r.id,
        name: r.name,
        server: r.server,
        rev: r.rev,
        forkedFrom: r.forked_from,
        createdAt: r.created_at,
        updatedAt: r.updated_at,
      }));
    },

    async remove(id) {
      await db.prepare('DELETE FROM city_maps WHERE id = ?').bind(id).run();
    },

    async bumpAttempt(ident, now, windowMs) {
      const r = await db
        .prepare('SELECT count, window_start FROM map_attempts WHERE ident = ?')
        .bind(ident)
        .first();
      let count = 1;
      let start = now;
      if (r && now - r.window_start < windowMs) {
        count = r.count + 1;
        start = r.window_start;
      }
      await db
        .prepare(
          'INSERT INTO map_attempts (ident, count, window_start) VALUES (?,?,?) ' +
            'ON CONFLICT(ident) DO UPDATE SET count = excluded.count, window_start = excluded.window_start'
        )
        .bind(ident, count, start)
        .run();
      return count;
    },

    async clearAttempts(ident) {
      await db.prepare('DELETE FROM map_attempts WHERE ident = ?').bind(ident).run();
    },
  };
}
