// Storage adapter for the city-map API.
//
// The API never talks to D1 directly: it calls this small interface so the
// exact same handler can run in production (D1) and in local preview
// (site/scripts/dev-maps-store.mjs, JSON file on disk).
//
//   get(id)                        -> map | null
//   insert(map)                    -> void
//   update(id, expectedRev, patch) -> map | null   (null = revision conflict)
//   listPublic(limit, offset, q, server) -> summary rows
//   remove(id)                     -> void
//   bumpAttempt(ident, now, winMs) -> failure count in the current window
//   clearAttempts(ident)           -> void
//   countPublic(q, server)         -> number
//   insertRevision(revision)       -> void
//   listRevisions(mapId, limit)     -> revision rows
//   getRevision(mapId, rev)         -> revision row
//   logSecurityEvent(event)        -> void

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

    async listPublic(limit, offset = 0, q = '', server = '') {
      const where = ["read_mode = 'public'"];
      const values = [];
      if (q) {
        where.push('(LOWER(name) LIKE ? OR LOWER(server) LIKE ?)');
        values.push(`%${q}%`, `%${q}%`);
      }
      if (server) {
        where.push('LOWER(server) = ?');
        values.push(server.toLowerCase());
      }
      const res = await db
        .prepare(
          'SELECT id, name, server, rev, forked_from AS forkedFrom, ' +
            'created_at AS createdAt, updated_at AS updatedAt, doc ' +
            'FROM city_maps WHERE ' + where.join(' AND ') +
            ' ORDER BY updated_at DESC LIMIT ? OFFSET ?'
        )
        .bind(...values, limit, offset)
        .all();
      return (res && res.results) || [];
    },

    async countPublic(q = '', server = '') {
      const where = ["read_mode = 'public'"];
      const values = [];
      if (q) {
        where.push('(LOWER(name) LIKE ? OR LOWER(server) LIKE ?)');
        values.push(`%${q}%`, `%${q}%`);
      }
      if (server) {
        where.push('LOWER(server) = ?');
        values.push(server.toLowerCase());
      }
      const row = await db
        .prepare('SELECT COUNT(*) AS n FROM city_maps WHERE ' + where.join(' AND '))
        .bind(...values)
        .first();
      return Number((row && row.n) || 0);
    },

    async remove(id) {
      await db.prepare('DELETE FROM city_maps WHERE id = ?').bind(id).run();
      await db.prepare('DELETE FROM map_revisions WHERE map_id = ?').bind(id).run();
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

    async insertRevision(revision) {
      await db
        .prepare(
          'INSERT OR IGNORE INTO map_revisions (map_id, rev, name, server, doc, actor, created_at) ' +
            'VALUES (?,?,?,?,?,?,?)'
        )
        .bind(
          revision.mapId, revision.rev, revision.name, revision.server,
          revision.doc, revision.actor, revision.createdAt,
        )
        .run();
    },

    async listRevisions(mapId, limit = 20) {
      const res = await db
        .prepare(
          'SELECT map_id AS mapId, rev, name, server, doc, actor, created_at AS createdAt ' +
            'FROM map_revisions WHERE map_id = ? ORDER BY rev DESC LIMIT ?'
        )
        .bind(mapId, limit)
        .all();
      return (res && res.results) || [];
    },

    async getRevision(mapId, rev) {
      const row = await db
        .prepare(
          'SELECT map_id AS mapId, rev, name, server, doc, actor, created_at AS createdAt ' +
            'FROM map_revisions WHERE map_id = ? AND rev = ?'
        )
        .bind(mapId, rev)
        .first();
      return row || null;
    },

    async logSecurityEvent(event) {
      await db
        .prepare(
          'INSERT INTO map_security_events (map_id, ident, kind, created_at) VALUES (?,?,?,?)'
        )
        .bind(event.mapId, event.ident, event.kind, event.createdAt)
        .run();
      await db
        .prepare(
          'DELETE FROM map_security_events WHERE created_at < ?'
        )
        .bind(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .run();
    },
  };
}
