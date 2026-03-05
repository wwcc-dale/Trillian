/**
 * Buttons Widget
 *
 * Markup (markdown):
 *   - buttons
 *   - Start Module 1 · /courses/1/modules/1 · primary
 *   - Download Syllabus · /courses/1/files/syllabus.pdf · ghost
 *
 * Item format:  label · href · style
 *   separator:  · (U+00B7 middle dot) or  |  (space-pipe-space)
 *   style:      primary | secondary | ghost | danger   (default: primary)
 *
 * First <li> options:
 *   "buttons"          — left-aligned (default)
 *   "buttons: center"  — centred
 *   "buttons: right"   — right-aligned
 */
import { hexA, injectOnce, onVisible, watchForNew } from './utils.js';

const MARKER = 'buttons';

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('tb-styles', `
    .tb-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .tb-row.tb-in { opacity: 1; }
    .tb-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 9px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: filter 0.15s ease, box-shadow 0.15s ease;
      box-sizing: border-box;
      white-space: nowrap;
    }
    .tb-btn:hover  { filter: brightness(1.08); box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
    .tb-btn:active { filter: brightness(0.95); }
    .tb-primary {
      background: var(--tb-accent);
      color: #fff;
      border: 2px solid transparent;
    }
    .tb-secondary {
      background: transparent;
      color: var(--tb-accent);
      border: 2px solid var(--tb-accent);
    }
    .tb-ghost {
      background: transparent;
      color: var(--tb-accent);
      border: 2px solid transparent;
      padding-left: 8px;
      padding-right: 8px;
    }
    .tb-ghost:hover { background: var(--tb-accent-10); box-shadow: none; filter: none; }
    .tb-danger {
      background: #ef4444;
      color: #fff;
      border: 2px solid transparent;
    }
    @media (prefers-reduced-motion: reduce) {
      .tb-row { transition: none; opacity: 1; }
      .tb-btn { transition: none; }
    }
  `);
}

// ── Helpers ───────────────────────────────────────────────────────────────

function safeHref(href) {
  return /^javascript:/i.test(href.trim()) ? '#' : href.trim();
}

function parseItem(text) {
  const sep = text.includes('·') ? '·' : ' | ';
  const parts = text.split(sep).map(s => s.trim()).filter(Boolean);
  if (parts.length < 2) return null;
  const [label, href, style = 'primary'] = parts;
  if (!label || !href) return null;
  return { label, href: safeHref(href), style: style.toLowerCase() };
}

// ── Identify + parse ──────────────────────────────────────────────────────

function isButtons(ul) {
  const first = ul.querySelector('li:first-child');
  if (!first) return false;
  const t = first.textContent.trim().toLowerCase();
  return t === MARKER || t.startsWith(MARKER + ':');
}

function parseList(ul) {
  const firstText = ul.querySelector('li:first-child').textContent.trim();
  const colon = firstText.indexOf(':');
  const alignRaw = colon > -1 ? firstText.slice(colon + 1).trim().toLowerCase() : 'left';
  const align = ['center', 'right'].includes(alignRaw) ? alignRaw : 'left';
  const items = Array.from(ul.querySelectorAll(':scope > li')).slice(1)
    .map(li => parseItem(li.textContent.trim()))
    .filter(Boolean);
  return { align, items };
}

// ── Build + init ──────────────────────────────────────────────────────────

const JUSTIFY = { left: 'flex-start', center: 'center', right: 'flex-end' };
const ACCENT = '#4a90d9';

function initOne(ul) {
  injectStyles();
  const { align, items } = parseList(ul);
  if (!items.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'tb-row';
  wrap.style.justifyContent = JUSTIFY[align] || 'flex-start';
  wrap.style.setProperty('--tb-accent',    ACCENT);
  wrap.style.setProperty('--tb-accent-10', hexA(ACCENT, 0.10));

  items.forEach(({ label, href, style }) => {
    const a = document.createElement('a');
    a.className = `tb-btn tb-${['primary','secondary','ghost','danger'].includes(style) ? style : 'primary'}`;
    a.href = href;
    a.textContent = label;
    wrap.appendChild(a);
  });

  ul.replaceWith(wrap);
  onVisible(wrap, () => wrap.classList.add('tb-in'));
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isButtons(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isButtons, initOne);
