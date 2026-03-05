/**
 * Trillian Icon Library
 *
 * Curated set of ~33 Lucide-style SVG icons (Lucide ISC License).
 * Each icon is a self-contained <svg> string: 1em × 1em, currentColor stroke,
 * so it inherits the surrounding text color and scales with font-size.
 *
 * Usage in any component:
 *   import { icon } from './icons.js';
 *   el.innerHTML = icon('download');   // returns SVG string or ''
 *
 * Available names:
 *   Navigation:  arrow-right  arrow-left  arrow-up  arrow-down
 *                chevron-right  chevron-left  chevron-up  chevron-down
 *                external-link
 *   Actions:     download  upload  check  x  plus  minus
 *                search  edit  copy  trash
 *   Content:     file-text  book-open  bookmark  link
 *   Course/LMS:  clock  calendar  user  users  star  play  video
 *                mail  graduation-cap
 *   Status:      info  alert-triangle
 */

const S = c =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${c}</svg>`;

const ICONS = {
  // ── Navigation ────────────────────────────────────────────────────────────
  'arrow-right':    S(`<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`),
  'arrow-left':     S(`<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>`),
  'arrow-up':       S(`<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>`),
  'arrow-down':     S(`<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>`),
  'chevron-right':  S(`<path d="m9 18 6-6-6-6"/>`),
  'chevron-left':   S(`<path d="m15 18-6-6 6-6"/>`),
  'chevron-up':     S(`<path d="m18 15-6-6-6 6"/>`),
  'chevron-down':   S(`<path d="m6 9 6 6 6-6"/>`),
  'external-link':  S(`<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>`),
  // ── Actions ───────────────────────────────────────────────────────────────
  'download':       S(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>`),
  'upload':         S(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>`),
  'check':          S(`<path d="M20 6 9 17l-5-5"/>`),
  'x':              S(`<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`),
  'plus':           S(`<path d="M5 12h14"/><path d="M12 5v14"/>`),
  'minus':          S(`<path d="M5 12h14"/>`),
  'search':         S(`<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`),
  'edit':           S(`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`),
  'copy':           S(`<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`),
  'trash':          S(`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`),
  // ── Content ───────────────────────────────────────────────────────────────
  'file-text':      S(`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>`),
  'book-open':      S(`<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`),
  'bookmark':       S(`<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>`),
  'link':           S(`<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`),
  // ── Course / LMS ──────────────────────────────────────────────────────────
  'clock':          S(`<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`),
  'calendar':       S(`<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>`),
  'user':           S(`<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`),
  'users':          S(`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`),
  'star':           S(`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`),
  'play':           S(`<polygon points="5 3 19 12 5 21 5 3"/>`),
  'video':          S(`<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>`),
  'mail':           S(`<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`),
  'graduation-cap': S(`<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`),
  // ── Status ────────────────────────────────────────────────────────────────
  'info':           S(`<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>`),
  'alert-triangle': S(`<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>`),
};

/**
 * Return an SVG string for the named icon, or '' if not found.
 * The SVG is sized 1em × 1em and uses currentColor, so it inherits
 * the surrounding text color and scales with font-size.
 */
export function icon(name) {
  return ICONS[name] || '';
}

export { ICONS };
