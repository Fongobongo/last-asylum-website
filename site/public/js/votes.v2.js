/* LA Plague Hub — hybrid votes (v2).
 * Server (/api/votes, Netlify Function + Blobs) is the source of truth for
 * totals; the client keeps the UX instant and works fully offline.
 *
 * Anti-double-vote layers:
 *   1. server: one vote per (IP hash + browser fingerprint) pair;
 *   2. cookie  lav_<hash> = yes|no  (own pick, 1 year, SameSite=Lax);
 *   3. localStorage totals cache (offline fallback).
 *
 *   LAVotes.read(key)      -> {likes, dislikes, mine} (instant, local)
 *   LAVotes.vote(key, val) -> optimistic state; POSTs in background
 *   LAVotes.refresh(key)   -> pull server totals now
 *   LAVotes.subscribe(key, fn) -> fn(state) on every confirmed change
 */
(function () {
  var PREFIX = 'lav:votes:v2:';
  var API = '/api/votes';
  var subs = {};
  var fpCache = null;

  function notify(key, st) {
    var list = subs[key] || [];
    for (var i = 0; i < list.length; i++) {
      try { list[i](st); } catch (e) {}
    }
  }

  // Short hash for cookie names (keys contain slashes/colons).
  function shortHash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }

  function cookieName(key) {
    return 'lav_' + shortHash(key);
  }

  function getCookieMine(key) {
    try {
      var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + cookieName(key) + '=(yes|no)'));
      return m ? m[1] : null;
    } catch (e) {
      return null;
    }
  }

  function setCookieMine(key, mine) {
    try {
      var base = cookieName(key) + '=; Path=/; SameSite=Lax; Max-Age=31536000';
      document.cookie = mine ? cookieName(key) + '=' + mine + '; Path=/; SameSite=Lax; Max-Age=31536000' : base + '; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } catch (e) {}
  }

  // Lightweight, dependency-free browser fingerprint (dedup helper, not an ID).
  function fingerprint() {
    if (fpCache) return fpCache;
    var parts = [];
    try {
      var n = navigator;
      parts.push(n.userAgent || '', n.language || '', (n.hardwareConcurrency || 0), (n.deviceMemory || 0));
      parts.push((screen.width || 0) + 'x' + (screen.height || 0) + 'x' + (screen.colorDepth || 0));
      parts.push(new Date().getTimezoneOffset());
      var c = document.createElement('canvas');
      c.width = 200;
      c.height = 30;
      var x = c.getContext('2d');
      if (x) {
        x.textBaseline = 'top';
        x.font = '14px Arial';
        x.fillText('lavfp|' + parts.join('|'), 2, 2);
        var url = c.toDataURL();
        parts.push(url.length, url.slice(-48));
      }
    } catch (e) {}
    var s = parts.join('~');
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 0x01000193) | 0;
    }
    fpCache = ('0000000' + (h >>> 0).toString(16)).slice(-8);
    try {
      document.cookie = 'lav_fp=' + fpCache + '; Path=/; SameSite=Lax; Max-Age=31536000';
    } catch (e) {}
    return fpCache;
  }

  function readLocal(key) {
    var st = { likes: 0, dislikes: 0, mine: null };
    try {
      var raw = localStorage.getItem(PREFIX + key);
      if (raw) {
        var o = JSON.parse(raw);
        st.likes = Math.max(0, o.likes | 0);
        st.dislikes = Math.max(0, o.dislikes | 0);
        if (o.mine === 'yes' || o.mine === 'no') st.mine = o.mine;
      }
    } catch (e) {}
    // Cookie wins for the own-pick: survives localStorage wipes.
    var cm = getCookieMine(key);
    if (cm) st.mine = cm;
    return st;
  }

  function writeLocal(key, st) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(st));
    } catch (e) {}
    setCookieMine(key, st.mine);
  }

  function toggle(st, val) {
    if (st.mine === 'yes') st.likes = Math.max(0, st.likes - 1);
    else if (st.mine === 'no') st.dislikes = Math.max(0, st.dislikes - 1);
    st.mine = st.mine === val ? null : val;
    if (st.mine === 'yes') st.likes++;
    else if (st.mine === 'no') st.dislikes++;
    return st;
  }

  function read(key) {
    return readLocal(key);
  }

  function subscribe(key, fn) {
    subs[key] = subs[key] || [];
    subs[key].push(fn);
  }

  function adopt(key, srv) {
    var st = readLocal(key);
    st.likes = Math.max(0, srv.likes | 0);
    st.dislikes = Math.max(0, srv.dislikes | 0);
    if (srv.mine === 'yes' || srv.mine === 'no' || srv.mine === null) st.mine = srv.mine;
    writeLocal(key, st);
    notify(key, st);
    return st;
  }

  function refresh(key) {
    var url = API + '?key=' + encodeURIComponent(key) + '&fp=' + fingerprint();
    fetch(url, { cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('bad status');
        return r.json();
      })
      .then(function (srv) { adopt(key, srv); })
      .catch(function () {});
  }

  function vote(key, val) {
    var st = toggle(readLocal(key), val);
    writeLocal(key, st);
    notify(key, st);
    fetch(API, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ key: key, vote: st.mine, fp: fingerprint() }),
    })
      .then(function (r) {
        if (!r.ok) throw new Error('bad status');
        return r.json();
      })
      .then(function (srv) { adopt(key, srv); })
      .catch(function () {});
    return st;
  }

  window.LAVotes = { read: read, vote: vote, refresh: refresh, subscribe: subscribe };
})();
