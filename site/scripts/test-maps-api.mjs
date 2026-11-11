import { onRequest } from '../../functions/api/maps.js';
import { devStore } from './dev-maps-store.mjs';

const store = devStore({ fresh: true });
let pass = 0;
let fail = 0;

function check(name, cond, extra) {
  if (cond) { pass++; console.log('  ok   ' + name); }
  else { fail++; console.log('  FAIL ' + name + (extra ? ' :: ' + JSON.stringify(extra) : '')); }
}

async function call(method, body, headers = {}, query = '', customStore = store) {
  const url = new URL('https://x.test/api/maps' + query);
  const init = { method, headers: { 'content-type': 'application/json', ...headers } };
  if (body) init.body = JSON.stringify(body);
  const res = await onRequest({ request: new Request(url, init), env: { LA_MAPS_STORE: customStore } });
  return { status: res.status, data: await res.json() };
}

const doc = {
  v: 2,
  alliances: [{ id: 'a1', name: 'Wolves', color: '#e11d48', icon: '🐺' }],
  stages: Array.from({ length: 7 }, (_, i) => ({ o: i === 0 ? { C01: 'a1' } : {} })),
};

console.log('\n[1] create + read');
const created = await call('POST', { action: 'create', name: 'Alpha', server: 'S1', doc, readMode: 'public', writeMode: 'open' });
check('create 200', created.status === 200, created.data);
const id = created.data.id;
check('id shape', /^[a-z0-9]{10}$/.test(id), id);
check('owner token', /^[a-f0-9]{48}$/.test(created.data.ownerToken));
const got = await call('GET', null, {}, '?id=' + id);
check('get 200', got.status === 200, got.data);
check('doc roundtrip', got.data.map.doc.stages[0].o.C01 === 'a1');
check('canEdit open', got.data.canEdit === true);

console.log('\n[2] optimistic lock');
const saved = await call('POST', { action: 'save', id, rev: 1, doc: { ...doc, stages: [{ o: { C01: 'a1', C02: 'a1' } }, ...doc.stages.slice(1)] } });
check('save 200', saved.status === 200, saved.data);
check('rev bumped', saved.data.rev === 2, saved.data.rev);
const stale = await call('POST', { action: 'save', id, rev: 1, doc });
check('stale save 409', stale.status === 409, stale.data);
check('conflict returns map', stale.data.map && stale.data.map.rev === 2);

console.log('\n[3] read password');
const rp = await call('POST', { action: 'create', name: 'Locked view', doc, readMode: 'password', readPassword: 'secret1', writeMode: 'open' });
check('create locked 200', rp.status === 200, rp.data);
const rid = rp.data.id;
check('password uses PBKDF2', (await store.get(rid)).readHash.startsWith('pbkdf2$'));
const noPw = await call('GET', null, {}, '?id=' + rid);
check('get without pw 401', noPw.status === 401 && noPw.data.error === 'read-locked', noPw.data);
const withPw = await call('GET', null, { 'x-map-read': 'secret1' }, '?id=' + rid);
check('get with pw 200', withPw.status === 200, withPw.data);
const wrongPw = await call('GET', null, { 'x-map-read': 'nope' }, '?id=' + rid);
check('get wrong pw 401', wrongPw.status === 401);
const unlockBad = await call('POST', { action: 'unlock', id: rid, kind: 'read', readPassword: 'nope' });
check('unlock bad 401', unlockBad.status === 401);
const unlockOk = await call('POST', { action: 'unlock', id: rid, kind: 'read', readPassword: 'secret1' });
check('unlock ok 200', unlockOk.status === 200, unlockOk.data);

console.log('\n[4] write password');
const wp = await call('POST', { action: 'create', name: 'Locked edit', doc, readMode: 'public', writeMode: 'password', writePassword: 'edit123' });
const wid = wp.data.id;
const saveNoPw = await call('POST', { action: 'save', id: wid, rev: 1, doc });
check('save without pw 401', saveNoPw.status === 401 && saveNoPw.data.error === 'write-locked', saveNoPw.data);
const savePw = await call('POST', { action: 'save', id: wid, rev: 1, doc, writePassword: 'edit123' });
check('save with pw 200', savePw.status === 200, savePw.data);
const saveOwner = await call('POST', { action: 'save', id: wid, rev: 2, doc, ownerToken: wp.data.ownerToken });
check('owner bypasses write pw', saveOwner.status === 200, saveOwner.data);

console.log('\n[5] owner-only');
const oo = await call('POST', { action: 'create', name: 'Private', doc, readMode: 'owner', writeMode: 'owner' });
const oid = oo.data.id;
const ooNo = await call('GET', null, {}, '?id=' + oid);
check('owner-only get 401', ooNo.status === 401 && ooNo.data.error === 'owner-only', ooNo.data);
const ooYes = await call('GET', null, { 'x-map-owner': oo.data.ownerToken }, '?id=' + oid);
check('owner get 200', ooYes.status === 200 && ooYes.data.isOwner === true, ooYes.data);

console.log('\n[6] fork');
const forked = await call('POST', { action: 'fork', id, readPassword: '' });
check('fork 200', forked.status === 200, forked.data);
check('fork new id', forked.data.id !== id);
check('forkedFrom', forked.data.map.forkedFrom === id, forked.data.map.forkedFrom);
check('fork copied stages', forked.data.map.doc.stages[0].o.C02 === 'a1');

console.log('\n[7] list');
const list = await call('GET', null, {}, '?list=1');
check('list 200', list.status === 200);
check('list total', Number.isInteger(list.data.total), list.data);
const listWithoutValue = await call('GET', null, {}, '?list');
check('list without value 200', listWithoutValue.status === 200);
check('list has public maps', list.data.maps.some((m) => m.id === id), list.data.maps.length);
check('list hides owner-only', !list.data.maps.some((m) => m.id === oid));
const filtered = await call('GET', null, {}, '?list=1&q=Alpha&server=S1&limit=1&offset=0');
check('list filters + paginates', filtered.status === 200 && filtered.data.maps.length === 1 && filtered.data.total === 2, filtered.data);
const filteredPage2 = await call('GET', null, {}, '?list=1&q=Alpha&server=S1&limit=1&offset=1');
check('list second page', filteredPage2.status === 200 && filteredPage2.data.maps[0].id === id, filteredPage2.data);

console.log('\n[8] sanitize');
const bad = await call('POST', {
  action: 'create', name: 'Bad', doc: {
    v: 2,
    alliances: [{ id: 'a1', name: 'A', color: 'javascript:x', icon: 'x' }],
    stages: [{ o: { C01: 'ghost', ZZ9: 'a1', C02: 'a1' } }],
  },
});
check('create bad 200', bad.status === 200, bad.data);
check('drops unknown owner', !bad.data.map.doc.stages[0].o.C01, bad.data.map.doc.stages[0].o);
check('drops bad city id', !bad.data.map.doc.stages[0].o.ZZ9);
check('keeps valid owner', bad.data.map.doc.stages[0].o.C02 === 'a1');
check('bad colour replaced', /^#[0-9a-f]{6}$/i.test(bad.data.map.doc.alliances[0].color), bad.data.map.doc.alliances[0].color);

console.log('\n[9] history + restore');
const history = await call('GET', null, { 'x-map-owner': created.data.ownerToken }, '?id=' + id + '&history=1');
check('history 200', history.status === 200, history.data);
check('history has revisions', history.data.revisions.length >= 2, history.data);
const oldRevision = await call('GET', null, { 'x-map-owner': created.data.ownerToken }, '?id=' + id + '&revision=1');
check('revision 200', oldRevision.status === 200 && oldRevision.data.revision.rev === 1, oldRevision.data);
const restored = await call('POST', {
  action: 'restore', id, revision: 1, rev: saved.data.rev,
  ownerToken: created.data.ownerToken, actor: 'tester',
});
check('restore 200', restored.status === 200, restored.data);
check('restore bumps rev', restored.data.map.rev === 3, restored.data.map);
const historyAfter = await call('GET', null, { 'x-map-owner': created.data.ownerToken }, '?id=' + id + '&history=1');
check('restore recorded', historyAfter.data.revisions.some((r) => r.rev === 3 && r.actor === 'tester'), historyAfter.data);
check('restore keeps actor in doc', restored.data.map.doc.actor === 'tester', restored.data.map.doc);

console.log('\n[10] delete');
const delNo = await call('POST', { action: 'delete', id });
check('delete without token 403', delNo.status === 403, delNo.data);
const delOk = await call('POST', { action: 'delete', id, ownerToken: created.data.ownerToken });
check('delete owner 200', delOk.status === 200, delOk.data);
const gone = await call('GET', null, {}, '?id=' + id);
check('deleted map 404', gone.status === 404);

console.log('\n[11] brute force guard');
let last = null;
for (let i = 0; i < 12; i++) {
  last = await call('POST', { action: 'unlock', id: rid, kind: 'read', readPassword: 'wrong' + i });
}
check('throttled after repeated failures', last.status === 429, last.data);

console.log('\n[12] password mode needs a password');
const guard = await call('POST', { action: 'create', name: 'Guard', doc, readMode: 'public', writeMode: 'open' });
const noPwSave = await call('POST', {
  action: 'save', id: guard.data.id, rev: 1, doc, ownerToken: guard.data.ownerToken,
  access: { readMode: 'password' },
});
check('rejects password mode without password', noPwSave.status === 400, noPwSave.data);
const withPwSave = await call('POST', {
  action: 'save', id: guard.data.id, rev: 1, doc, ownerToken: guard.data.ownerToken,
  access: { readMode: 'password', readPassword: 'view999' },
});
check('accepts password mode with password', withPwSave.status === 200, withPwSave.data);
const guarded = await call('GET', null, {}, '?id=' + guard.data.id);
check('map is now read-locked', guarded.status === 401 && guarded.data.error === 'read-locked', guarded.data);

console.log('\n[13] moderation + create limits');
const blocked = await call('POST', { action: 'create', name: 'fuck map', doc });
check('blocked name rejected', blocked.status === 400 && blocked.data.error === 'name blocked', blocked.data);
const limitedStore = devStore({ fresh: true });
let limited = null;
for (let i = 0; i < 11; i++) {
  limited = await call('POST', { action: 'create', name: 'Limit ' + i, doc }, {}, '', limitedStore);
}
check('create rate limit', limited.status === 429, limited.data);
const ownerStore = devStore({ fresh: true });
const ownerIdentity = 'a'.repeat(48);
let ownerLimited = null;
for (let i = 0; i < 9; i++) {
  ownerLimited = await call('POST', { action: 'create', name: 'Owner ' + i, doc, ownerIdentity }, {}, '', ownerStore);
}
check('owner create quota', ownerLimited.status === 429 && ownerLimited.data.error === 'map quota reached', ownerLimited.data);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
