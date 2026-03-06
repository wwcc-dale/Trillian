/**
 * Stat Row Widget
 *
 * Markup (markdown):
 *   - stats
 *   - 87% · Completion Rate
 *   - 12 · Weeks · degree
 *   - 5 · Credits · #7b68ee
 *
 * Item format:  value · label [· color]
 *   separator:  · (U+00B7 middle dot) or  |  (space-pipe-space)
 *   color:      accent | cert | degree | success | error | neutral | #rrggbb
 */
import { ease, injectOnce, onVisible, watchForNew } from './utils.js';
import styles from './stat-row.css';

const MARKER = 'stats';

const COLOR_MAP = {
  accent:  '#4a90d9',
  cert:    '#7b68ee',
  degree:  '#e8a838',
  success: '#22c55e',
  error:   '#ef4444',
  neutral: '#888888',
};

function resolveColor(raw) {
  if (!raw) return COLOR_MAP.accent;
  const key = raw.trim().toLowerCase();
  if (COLOR_MAP[key]) return COLOR_MAP[key];
  if (/^#[0-9a-f]{3}$/i.test(raw) || /^#[0-9a-f]{6}$/i.test(raw)) return raw.trim();
  return COLOR_MAP.accent;
}

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('trl-stat-styles', styles);
}

// ── Helpers ───────────────────────────────────────────────────────────────

function parseValue(raw) {
  const m = raw.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);
  if (!m) return null;
  const num = parseFloat(m[2].replace(/,/g, ''));
  if (isNaN(num)) return null;
  return { prefix: m[1], num, suffix: m[3] };
}

function animateCount(el, parsed, delay) {
  const dur = Math.max(600, Math.min(1400, parsed.num * 20));
  setTimeout(() => {
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = parsed.prefix + Math.round(ease(p) * parsed.num) + parsed.suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, delay);
}

// ── Identify + parse ──────────────────────────────────────────────────────

function isStats(ul) {
  const first = ul.querySelector('li:first-child');
  if (!first) return false;
  const t = first.textContent.trim().toLowerCase();
  return t === MARKER || t.startsWith(MARKER + ':');
}

function parseItem(text) {
  const sep = text.includes('·') ? '·' : ' | ';
  const parts = text.split(sep).map(s => s.trim()).filter(Boolean);
  if (parts.length < 2) return null;
  const [value, label, color] = parts;
  return { value, label, color: resolveColor(color) };
}

function parseList(ul) {
  return Array.from(ul.querySelectorAll(':scope > li')).slice(1)
    .map(li => parseItem(li.textContent.trim()))
    .filter(Boolean);
}

// ── Build + init ──────────────────────────────────────────────────────────

function initOne(ul) {
  injectStyles();
  const items = parseList(ul);
  if (!items.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const row = document.createElement('div');
  row.className = 'trl-stat-row';

  const animTargets = [];

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'trl-stat-card';
    card.style.setProperty('--trl-stat-color', item.color);

    const valEl = document.createElement('div');
    valEl.className = 'trl-stat-value';
    const lblEl = document.createElement('div');
    lblEl.className = 'trl-stat-label';
    lblEl.textContent = item.label;

    const parsed = parseValue(item.value);
    if (parsed && !reduced) {
      valEl.textContent = parsed.prefix + '0' + parsed.suffix;
      animTargets.push({ el: valEl, parsed, delay: i * 120 });
    } else {
      valEl.textContent = item.value;
    }

    card.appendChild(valEl);
    card.appendChild(lblEl);
    row.appendChild(card);
  });

  ul.replaceWith(row);

  onVisible(row, reduced => {
    if (!reduced) animTargets.forEach(({ el, parsed, delay }) => animateCount(el, parsed, delay));
    row.classList.add('trl-stat-in');
  }, 0.25);
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isStats(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isStats, initOne);
