/**
 * Steps — fancy ordered list
 *
 * Numbers reversed out of accent-colored circles. Each item gets a stable
 * anchor ID; the :target pseudo-class adds a faint highlight when scrolled to.
 *
 * Markup:
 *   - steps                ← default indigo
 *   - steps: #7b68ee       ← custom hex
 *   - steps: purple        ← named color (blue|green|purple|amber|red|pink|teal|indigo|slate)
 *   - First, download the project files from Canvas Files
 *   - Open the file in Figma and follow the grid guidelines
 *   - Export as PDF and upload to the assignment page
 */
import { injectOnce, watchForNew } from './utils.js';

const MARKER = 'steps';

const NAMED = {
  blue: '#3b82f6', green: '#22c55e', purple: '#a855f7',
  amber: '#f59e0b', red: '#ef4444', pink: '#ec4899',
  teal: '#14b8a6', indigo: '#6366f1', slate: '#64748b',
};

function resolveColor(raw) {
  if (!raw) return '#6366f1';
  const lo = raw.trim().toLowerCase();
  return NAMED[lo] || (/^#[0-9a-f]{3,6}$/i.test(lo) ? lo : '#6366f1');
}

function injectStyles() {
  injectOnce('trl-steps-styles', `
    .trl-steps-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .trl-steps-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 12px 10px 8px;
      border-radius: 10px;
      transition: background 0.25s ease;
      scroll-margin-top: 80px;
    }
    .trl-steps-item:target {
      background: rgba(0, 0, 0, 0.04);
    }
    .trl-steps-num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      margin-top: 2px;
    }
    .trl-steps-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
      line-height: 1.6;
      color: #333;
      padding-top: 4px;
      flex: 1;
      min-width: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-steps-item { transition: none; }
    }
  `);
}

function isSteps(ul) {
  const first = ul.querySelector('li:first-child');
  return !!first && first.textContent.trim().toLowerCase().startsWith(MARKER);
}

function hash5(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return (h >>> 0).toString(36).slice(0, 5);
}

function initOne(ul) {
  injectStyles();

  const firstLi  = ul.querySelector('li:first-child');
  const raw      = firstLi.textContent.trim();
  const colorRaw = raw.indexOf(':') > -1 ? raw.slice(raw.indexOf(':') + 1).trim() : '';
  const color    = resolveColor(colorRaw);

  const items = Array.from(ul.querySelectorAll(':scope > li')).slice(1);
  if (!items.length) return;

  const prefix = hash5(items.map(li => li.textContent).join(''));
  const ol = document.createElement('ol');
  ol.className = 'trl-steps-list';

  items.forEach((li, i) => {
    const item = document.createElement('li');
    item.className = 'trl-steps-item';
    item.id = 'trl-step-' + prefix + '-' + (i + 1);

    const num = document.createElement('span');
    num.className = 'trl-steps-num';
    num.style.background = color;
    num.textContent = String(i + 1);

    const text = document.createElement('span');
    text.className = 'trl-steps-text';
    text.innerHTML = li.innerHTML;

    item.appendChild(num);
    item.appendChild(text);
    ol.appendChild(item);
  });

  ul.replaceWith(ol);
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isSteps(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isSteps, initOne);
