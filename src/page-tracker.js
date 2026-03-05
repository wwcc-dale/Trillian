/**
 * Page Tracker
 *
 * Runs silently on every Canvas page. Logs each unique course content page
 * visit to localStorage — first visit only, timestamped at page entry.
 *
 * Only logs after THRESHOLD_MS of *visible* time (time while the page tab
 * is in the foreground). This filters out:
 *   - Students skimming ahead or briefly glancing at a future page
 *   - Accidental clicks / quick navigation errors
 *   - Pages left open in background tabs
 *
 * The timestamp stored is when the student ARRIVED at the page (not when
 * the threshold was crossed), giving accurate pace data.
 *
 * No markup required. Include in Canvas Admin → Account → Settings → Custom JS.
 *
 * Storage key : trl-pace-log-{courseId}-{userId}
 * Storage value: [{url: "/courses/1/pages/intro", t: 1709654321000}, ...]
 *
 * Tracked page types: pages, assignments, quizzes, discussion_topics,
 *                     module items (which redirect to the above).
 */

const ENV      = window.ENV;
const courseId = ENV && ENV.COURSE_ID;
const userId   = ENV && ENV.current_user_id;

if (courseId && userId) {
  const CONTENT = /^\/courses\/\d+\/(pages|assignments|quizzes|discussion_topics|modules\/items)\//;
  const url = window.location.pathname;

  if (CONTENT.test(url)) {
    const key       = 'trl-pace-log-' + courseId + '-' + userId;
    const THRESHOLD = 45000; // 45 s of visible time = genuine engagement
    const arrivedAt = Date.now();

    let visibleMs   = 0;
    let lastVisible = arrivedAt;
    let logged      = false;

    // Check if already logged from a previous visit
    try {
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(existing) && existing.some(function(e) { return e.url === url; })) {
        logged = true; // already counted — nothing to do
      }
    } catch (_) {}

    if (!logged) {
      function tryLog() {
        if (logged) return;
        if (visibleMs >= THRESHOLD) {
          logged = true;
          try {
            let log = JSON.parse(localStorage.getItem(key) || '[]');
            if (!Array.isArray(log)) log = [];
            if (!log.some(function(e) { return e.url === url; })) {
              log.push({ url: url, t: arrivedAt });
              localStorage.setItem(key, JSON.stringify(log));
            }
          } catch (_) {}
        }
      }

      // Track visible time: pause when tab hides, resume when tab shows.
      document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
          visibleMs += Date.now() - lastVisible;
          tryLog();
        } else {
          lastVisible = Date.now();
        }
      });

      // Catch navigation away (back button, link click, browser close).
      window.addEventListener('pagehide', function() {
        // If page was visible up to this moment, count the remaining time.
        if (document.visibilityState !== 'hidden') {
          visibleMs += Date.now() - lastVisible;
        }
        tryLog();
      });
    }
  }
}
