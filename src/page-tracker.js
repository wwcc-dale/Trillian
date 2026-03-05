/**
 * Page Tracker
 *
 * Runs silently on every Canvas page. Logs each unique course content page
 * visit to localStorage — first visit only, with timestamp.
 *
 * No markup required. Include this script (or the full trillian bundle) in
 * Canvas Admin → Account → Settings → Custom JS.
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
    const key = 'trl-pace-log-' + courseId + '-' + userId;
    try {
      let log = JSON.parse(localStorage.getItem(key) || '[]');
      if (!Array.isArray(log)) log = [];
      if (!log.some(function(e) { return e.url === url; })) {
        log.push({ url: url, t: Date.now() });
        localStorage.setItem(key, JSON.stringify(log));
      }
    } catch (_) {}
  }
}
