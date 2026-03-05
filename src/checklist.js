/**
 * Checklist Widget
 *
 * Markup (markdown):
 *   - checklist: Pre-Class Prep
 *   - Read Chapter 3 (pp. 45–67)
 *   - Watch the intro video (15 min)
 *   - Post to the discussion board
 *
 * Types: checklist | checklist: Title
 */
import { injectOnce, onVisible, watchForNew } from './utils.js';

const MARKER = 'checklist';

// ── Storage ───────────────────────────────────────────────────────────────

function makeKey(title, items) {
  const raw = title + '\x00' + items.join('\x01');
  let h = 0;
  for (let i = 0; i < raw.length; i++) h = (Math.imul(h, 31) + raw.charCodeAt(i)) | 0;
  const path = location.pathname.replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').slice(0, 40);
  return `trillian-cl-${path}-${(h >>> 0).toString(36)}`;
}

function loadState(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key)) || []); } catch (e) { return new Set(); }
}

function saveState(key, set) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch (e) {}
}

// ── Identify + parse ──────────────────────────────────────────────────────

function isChecklist(ul) {
  const first = ul.querySelector('li:first-child');
  if (!first) return false;
  const t = first.textContent.trim().toLowerCase();
  return t === MARKER || t.startsWith(MARKER + ':');
}

function parseList(ul) {
  const firstText = ul.querySelector('li:first-child').textContent.trim();
  const colon = firstText.indexOf(':');
  const title = colon > -1 ? firstText.slice(colon + 1).trim() : '';
  const items = Array.from(ul.querySelectorAll(':scope > li')).slice(1)
    .map(li => li.textContent.trim())
    .filter(Boolean);
  return { title, items };
}

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('tc-styles', `
    .tc-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      padding: 22px 24px 20px;
      max-width: 520px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .tc-widget.tc-in { opacity: 1; }
    .tc-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .tc-title {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      margin: 0;
    }
    .tc-count { font-size: 12px; color: #bbb; }
    .tc-bar {
      height: 4px;
      background: #eee;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .tc-bar-fill {
      height: 100%;
      background: var(--tc-accent);
      border-radius: 2px;
      width: 0%;
      transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tc-list { list-style: none; margin: 0; padding: 0; }
    .tc-item {
      display: flex;
      align-items: flex-start;
      gap: 11px;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .tc-item:hover { background: #f7f7f7; }
    .tc-cb {
      appearance: none;
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      min-width: 18px;
      border: 2px solid #d4d4d4;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      margin-top: 2px;
      background: #fff;
      transition: background 0.15s, border-color 0.15s;
    }
    .tc-cb:checked {
      background: var(--tc-accent);
      border-color: var(--tc-accent);
    }
    .tc-cb:checked::after {
      content: '';
      position: absolute;
      left: 3px;
      top: 0px;
      width: 6px;
      height: 10px;
      border: 2px solid #fff;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }
    .tc-cb:focus-visible { outline: 2px solid var(--tc-accent); outline-offset: 2px; }
    .tc-lbl {
      font-size: 14px;
      line-height: 1.55;
      color: #333;
      cursor: pointer;
      user-select: none;
      transition: color 0.2s;
    }
    .tc-item.tc-done .tc-lbl { color: #bbb; text-decoration: line-through; }
    @media (prefers-reduced-motion: reduce) {
      .tc-widget { transition: none; opacity: 1; }
      .tc-bar-fill, .tc-item { transition: none; }
    }
  `);
}

// ── Build ─────────────────────────────────────────────────────────────────

function updateProgress(wrap, total, done) {
  const pct  = total ? (done / total * 100).toFixed(1) : 0;
  const fill = wrap.querySelector('.tc-bar-fill');
  const bar  = wrap.querySelector('.tc-bar');
  const ct   = wrap.querySelector('.tc-count');
  if (fill) fill.style.width = `${pct}%`;
  if (bar)  bar.setAttribute('aria-valuenow', Math.round(pct));
  if (ct)   ct.textContent = `${done} / ${total}`;
}

function build(ul) {
  const { title, items } = parseList(ul);
  const key   = makeKey(title, items);
  const state = loadState(key);
  const uid   = key.slice(-8);

  const wrap = document.createElement('div');
  wrap.className = 'tc-widget';
  wrap.style.setProperty('--tc-accent', '#4a90d9');

  const doneCt = items.filter((_, i) => state.has(i)).length;
  const pct    = items.length ? (doneCt / items.length * 100).toFixed(1) : 0;

  wrap.innerHTML = `
    <div class="tc-header">
      <p class="tc-title">${title || 'Checklist'}</p>
      <span class="tc-count">${doneCt} / ${items.length}</span>
    </div>
    <div class="tc-bar"
         role="progressbar"
         aria-valuenow="${Math.round(pct)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="tc-bar-fill" style="width:${pct}%"></div>
    </div>
    <ul class="tc-list">
      ${items.map((item, i) => `
        <li class="tc-item${state.has(i) ? ' tc-done' : ''}" data-i="${i}">
          <input class="tc-cb" type="checkbox" id="tc-${uid}-${i}"${state.has(i) ? ' checked' : ''}>
          <label class="tc-lbl" for="tc-${uid}-${i}">${item}</label>
        </li>`).join('')}
    </ul>
  `;

  wrap.querySelectorAll('.tc-item').forEach(item => {
    const cb  = item.querySelector('.tc-cb');
    const lbl = item.querySelector('.tc-lbl');

    cb.addEventListener('change', () => {
      const idx = parseInt(item.dataset.i, 10);
      item.classList.toggle('tc-done', cb.checked);
      if (cb.checked) state.add(idx); else state.delete(idx);
      saveState(key, state);
      updateProgress(wrap, items.length, state.size);
    });

    item.addEventListener('click', e => {
      if (e.target === cb || lbl.contains(e.target)) return;
      cb.click();
    });
  });

  return wrap;
}

// ── Init ──────────────────────────────────────────────────────────────────

function initOne(ul) {
  injectStyles();
  const wrap = build(ul);
  ul.replaceWith(wrap);
  onVisible(wrap, () => wrap.classList.add('tc-in'));
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isChecklist(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isChecklist, initOne);
