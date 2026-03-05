/**
 * Buttons Widget
 *
 * Markup (markdown):
 *   - buttons
 *   - Start Module 1 · /courses/1/modules/1 · primary
 *   - Download Syllabus · /courses/1/files/syllabus.pdf · ghost · download
 *   - Next · /courses/1/modules/2 · primary · arrow-right · right
 *
 * Item format:  label · href · style [· icon [· left|right]]
 *   separator:  · (U+00B7 middle dot) or  |  (space-pipe-space)
 *   style:      primary | secondary | ghost | danger   (default: primary)
 *   icon:       any name from src/icons.js             (default: none)
 *   position:   left | right                           (default: left)
 *
 * First <li> options:
 *   "buttons"          — left-aligned (default)
 *   "buttons: center"  — centred
 *   "buttons: right"   — right-aligned
 */
import { hexA, injectOnce, onVisible, watchForNew } from './utils.js';
import { icon } from './icons.js';

const MARKER = 'buttons';
const VALID_STYLES = ['primary', 'secondary', 'ghost', 'danger'];

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('trl-btn-styles', `
    .trl-btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .trl-btn-row.trl-btn-in { opacity: 1; }
    .trl-btn-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
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
    .trl-btn-btn:hover  { filter: brightness(1.08); box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
    .trl-btn-btn:active { filter: brightness(0.95); }
    .trl-btn-primary {
      background: var(--trl-btn-accent);
      color: #fff;
      border: 2px solid transparent;
    }
    .trl-btn-secondary {
      background: transparent;
      color: var(--trl-btn-accent);
      border: 2px solid var(--trl-btn-accent);
    }
    .trl-btn-ghost {
      background: transparent;
      color: var(--trl-btn-accent);
      border: 2px solid transparent;
      padding-left: 8px;
      padding-right: 8px;
    }
    .trl-btn-ghost:hover { background: var(--trl-btn-accent-10); box-shadow: none; filter: none; }
    .trl-btn-danger {
      background: #ef4444;
      color: #fff;
      border: 2px solid transparent;
    }
    .trl-btn-icon {
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-btn-row { transition: none; opacity: 1; }
      .trl-btn-btn { transition: none; }
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
  const [label, href, style = 'primary', iconName = '', iconPos = 'left'] = parts;
  if (!label || !href) return null;
  return {
    label,
    href: safeHref(href),
    style: style.toLowerCase(),
    iconName: iconName.toLowerCase(),
    iconPos: iconPos.toLowerCase() === 'right' ? 'right' : 'left',
  };
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
  wrap.className = 'trl-btn-row';
  wrap.style.justifyContent = JUSTIFY[align] || 'flex-start';
  wrap.style.setProperty('--trl-btn-accent',    ACCENT);
  wrap.style.setProperty('--trl-btn-accent-10', hexA(ACCENT, 0.10));

  items.forEach(({ label, href, style, iconName, iconPos }) => {
    const a = document.createElement('a');
    a.className = `trl-btn-btn trl-btn-${VALID_STYLES.includes(style) ? style : 'primary'}`;
    a.href = href;

    const iconSvg = icon(iconName);

    if (iconSvg) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'trl-btn-icon';
      iconSpan.innerHTML = iconSvg;

      if (iconPos === 'right') {
        a.appendChild(document.createTextNode(label));
        a.appendChild(iconSpan);
      } else {
        a.appendChild(iconSpan);
        a.appendChild(document.createTextNode(label));
      }
    } else {
      a.textContent = label;
    }

    wrap.appendChild(a);
  });

  ul.replaceWith(wrap);
  onVisible(wrap, () => wrap.classList.add('trl-btn-in'));
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
