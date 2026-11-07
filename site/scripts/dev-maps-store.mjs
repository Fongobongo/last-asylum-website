// File-backed implementation of the map store interface, used only by the
// local preview server (site/serve.cjs) so /api/maps behaves exactly like the
// Cloudflare D1 version during development.
//
// Data lives in site/.maps-dev.json (git-ignored).
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(HERE, '..', '.maps-dev.json');

let cache = null;
let writing = Promise.resolve();

async function load() {
  if (cache) return cache;
  try {
    const raw = await readFile(FILE, 'utf8');
    const parsed = JSON.parse(raw);
    cache = {
      maps: parsed.maps && typeof parsed.maps === 'object' ? parsed.maps : {},
      attempts: parsed.attempts && typeof parsed.attempts === 'object' ? parsed.attempts : {},
    };
  } catch {
    cache = { maps: {}, attempts: {} };
  }
  return cache;
}

function persist() {
  const snapshot = JSON.stringify(cache, null, 2);
  writing = writing.then(() => writeFile(FILE, snapshot, 'utf8')).catch(() => {});
  return writing;
}

export function devStore() {
  return {
    async get(id) {
      const db = await load();
      const row = db.maps[id];
      return row ? { ...row } : null;
    },

    async insert(map) {
      const db = await load();
      db.maps[map.id] = { ...map };
      await persist();
    },

    async update(id, expectedRev, patch) {
      const db = await load();
      const row = db.maps[id];
      if (!row || row.rev !== expectedRev) return null;
      db.maps[id] = { ...row, ...patch };
      await persist();
      return { ...db.maps[id] };
    },

    async listPublic(limit) {
      const db = await load();
      return Object.values(db.maps)
        .filter((m) => m.readMode === 'public')
        .sort((a, b) => b.updatedAt - a.updatedAt)
        .slice(0, limit)
        .map((m) => ({
          id: m.id,
          name: m.name,
          server: m.server,
          rev: m.rev,
          forkedFrom: m.forkedFrom,
          createdAt: m.createdAt,
          updatedAt: m.updatedAt,
        }));
    },

    async remove(id) {
      const db = await load();
      delete db.maps[id];
      await persist();
    },

    async bumpAttempt(ident, now, windowMs) {
      const db = await load();
      const row = db.attempts[ident];
      let count = 1;
      let start = now;
      if (row && now - row.windowStart < windowMs) {
        count = row.count + 1;
        start = row.windowStart;
      }
      db.attempts[ident] = { count, windowStart: start };
      await persist();
      return count;
    },

    async clearAttempts(ident) {
      const db = await load();
      if (db.attempts[ident]) {
        delete db.attempts[ident];
        await persist();
      }
    },
  };
}
