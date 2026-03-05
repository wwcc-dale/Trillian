/**
 * Page Tracker — continuous engagement scoring
 *
 * Tracks three raw signals per page visit, stored as 0–1 floats:
 *
 *   vs  visible score   visibleMs / 45 000 ms, clamped to 1
 *   ss  scroll score    max scroll depth reached (0 = top, 1 = bottom)
 *   ts  tabs score      tabsSeen / tabsTotal (1 if no tabs on page)
 *
 * Composite score: (vs + ss × ts) / 2
 *   ≥ 0.5  → page "counts" toward pace (default threshold for dashboard)
 *   = 1.0  → fully completed (read through, scrolled all the way, saw all tabs)
 *
 * All three signals are tracked in memory and persisted on visibilitychange
 * (tab switch) and pagehide (navigation away / close). No excessive writes.
 *
 * No markup required. Include in Canvas Admin → Account → Settings → Custom JS.
 *
 * Storage key : trl-pace-data-{courseId}-{userId}
 * Storage item: {url, t, vs, ss, ts}
 *   url  path visited
 *   t    arrival timestamp
 *   vs   visible score  (0–1)
 *   ss   scroll score   (0–1)
 *   ts   tabs score     (0–1)
 *
 * Tracked page types: pages, assignments, quizzes, discussion_topics, module items.
 */

const ENV      = window.ENV;
const courseId = ENV && ENV.COURSE_ID;
const userId   = ENV && ENV.current_user_id;

if (courseId && userId) {
  const CONTENT    = /^\/courses\/\d+\/(pages|assignments|quizzes|discussion_topics|modules\/items)\//;
  const url        = window.location.pathname;
  const VISIT_MS   = 45000; // 45 s = vs reaches 1.0

  if (CONTENT.test(url)) {
    const dataKey   = 'trl-pace-data-' + courseId + '-' + userId;
    const arrivedAt = Date.now();

    // ── Load / init entry ──────────────────────────────────────────────────

    function loadAll() {
      try { return JSON.parse(localStorage.getItem(dataKey) || '[]') || []; } catch (_) { return []; }
    }
    function saveAll(arr) {
      try { localStorage.setItem(dataKey, JSON.stringify(arr)); } catch (_) {}
    }

    let data = loadAll();
    let entry = data.find(function(e) { return e.url === url; });
    if (!entry) {
      entry = { url: url, t: arrivedAt, vs: 0, ss: 0, ts: 1 };
      data.push(entry);
    }

    // ── Persist current entry ──────────────────────────────────────────────

    function persist() {
      const all = loadAll();
      const idx = all.findIndex(function(e) { return e.url === url; });
      if (idx > -1) all[idx] = entry; else all.push(entry);
      saveAll(all);
    }

    // ── Visible time (vs) ──────────────────────────────────────────────────

    let visibleMs   = entry.vs * VISIT_MS; // resume from previous visit
    let lastVisible = Date.now();

    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        visibleMs += Date.now() - lastVisible;
        entry.vs = Math.min(1, visibleMs / VISIT_MS);
        persist();
      } else {
        lastVisible = Date.now();
      }
    });

    window.addEventListener('pagehide', function() {
      if (document.visibilityState !== 'hidden') {
        visibleMs += Date.now() - lastVisible;
      }
      entry.vs = Math.min(1, visibleMs / VISIT_MS);
      persist();
    });

    // ── Scroll depth (ss) ──────────────────────────────────────────────────

    function checkScroll() {
      const pct = (window.scrollY + window.innerHeight) / Math.max(1, document.body.scrollHeight);
      if (pct > entry.ss) {
        entry.ss = Math.min(1, pct);
        // Persist on scroll milestones (every 25%) to avoid excessive writes
        if (entry.ss >= Math.ceil(entry.ss / 0.25) * 0.25) persist();
      }
    }
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll(); // handle pages already fully in view

    // ── Tabs score (ts) ───────────────────────────────────────────────────
    // Wait one tick so Trillian tab components (tabs.js, flow-panels.js) have
    // had time to run their synchronous DOMContentLoaded initialisers.

    function initTabTracking() {
      const tabs  = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
      const total = tabs.length;

      if (total === 0) {
        entry.ts = 1; // no tabs → criterion auto-met
        return;
      }

      const seen = {};
      tabs.forEach(function(tab) {
        // First tab in each widget is auto-selected on init
        if (tab.getAttribute('aria-selected') === 'true') {
          seen[tab.id || tab.textContent.trim()] = true;
        }
      });

      function update() {
        entry.ts = Math.min(1, Object.keys(seen).length / total);
      }
      update();

      // Watch aria-selected changes (covers mouse click AND keyboard arrow nav)
      const obs = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
          if (m.attributeName === 'aria-selected' &&
              m.target.getAttribute('aria-selected') === 'true') {
            seen[m.target.id || m.target.textContent.trim()] = true;
            update();
            if (entry.ts >= 1) obs.disconnect();
          }
        });
      });

      tabs.forEach(function(tab) {
        obs.observe(tab, { attributes: true, attributeFilter: ['aria-selected'] });
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { setTimeout(initTabTracking, 0); });
    } else {
      setTimeout(initTabTracking, 0);
    }
  }
}
