/**
 * Pill / Badge Widget — inline non-clickable colored tag
 *
 * Triggered by an anchor whose href is exactly "#pill" or "#pill:colorname".
 * This is pure markdown — no custom HTML required:
 *
 *   Markup (markdown):
 *     Status: [Passing](#pill:success) worth [5 Credits](#pill:cert)
 *     Due [Friday](#pill:warning) — submit before midnight.
 *     [Draft](#pill) uses the default accent color.
 *
 *   Colors: accent | info | warning | success | error | tip | cert | degree | neutral
 *           (default: accent)
 *
 * Why <a href="#pill:..."> survives Canvas:
 *   Fragment-only hrefs (#...) are local anchors — Canvas's sanitizer passes
 *   them through unchanged. The JS replaces the <a> with a <span> at runtime,
 *   so it's never actually a link on the rendered page.
 */
import { injectOnce, watchForNew } from './utils.js';
import styles from './pill.css';

// ── Palette ───────────────────────────────────────────────────────────────

const PALETTE = {
  accent:  '#4a90d9',
  info:    '#3b82f6',
  warning: '#f59e0b',
  success: '#22c55e',
  error:   '#ef4444',
  tip:     '#a855f7',
  cert:    '#7b68ee',
  degree:  '#e8a838',
  neutral: '#888888',
};

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('trl-pill-styles', styles);
}

// ── Identify + init ───────────────────────────────────────────────────────

function isPill(a) {
  return /^#pill(:|$)/i.test(a.getAttribute('href') || '');
}

function initOne(a) {
  injectStyles();
  const href = a.getAttribute('href') || '';
  const m = /^#pill(?::(.+))?$/i.exec(href);
  if (!m) return;

  const colorKey = (m[1] || 'accent').toLowerCase();
  const color = PALETTE[colorKey] || PALETTE.accent;

  const span = document.createElement('span');
  span.className = 'trl-pill';
  span.textContent = a.textContent;
  span.style.setProperty('--trl-pill-bg', color);

  a.replaceWith(span);
}

// ── Init ──────────────────────────────────────────────────────────────────

function initAll() {
  document.querySelectorAll('a').forEach(a => { if (isPill(a)) initOne(a); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('a', isPill, initOne);
