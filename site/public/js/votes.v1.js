/* LA Plague Hub — local votes (no backend).
 * Stores per-key {likes, dislikes, mine} in localStorage.
 * Counts are per-browser: your own votes, visible to you.
 * Global: window.LAVotes = { read(key), vote(key, 'yes'|'no') }
 */
(function () {
  var PREFIX = 'lav:votes:v1:';

  function read(key) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      if (!raw) return { likes: 0, dislikes: 0, mine: null };
      var o = JSON.parse(raw);
      return {
        likes: Math.max(0, o.likes | 0),
        dislikes: Math.max(0, o.dislikes | 0),
        mine: o.mine === 'yes' || o.mine === 'no' ? o.mine : null,
      };
    } catch (e) {
      return { likes: 0, dislikes: 0, mine: null };
    }
  }

  function write(key, st) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(st));
    } catch (e) {}
  }

  // Toggle behavior: clicking your own vote removes it, clicking the other switches.
  function vote(key, val) {
    var st = read(key);
    if (st.mine === 'yes') st.likes = Math.max(0, st.likes - 1);
    else if (st.mine === 'no') st.dislikes = Math.max(0, st.dislikes - 1);
    st.mine = st.mine === val ? null : val;
    if (st.mine === 'yes') st.likes++;
    else if (st.mine === 'no') st.dislikes++;
    write(key, st);
    return st;
  }

  window.LAVotes = { read: read, vote: vote };
})();
