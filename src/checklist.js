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
import styles from './checklist.css';

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
  injectOnce('trl-check-styles', styles);
}

// ── Build ─────────────────────────────────────────────────────────────────

function updateProgress(wrap, total, done) {
  const pct  = total ? (done / total * 100).toFixed(1) : 0;
  const fill = wrap.querySelector('.trl-check-bar-fill');
  const bar  = wrap.querySelector('.trl-check-bar');
  const ct   = wrap.querySelector('.trl-check-count');
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
  wrap.className = 'trl-check-widget';
  wrap.style.setProperty('--trl-check-accent', '#4a90d9');

  const doneCt = items.filter((_, i) => state.has(i)).length;
  const pct    = items.length ? (doneCt / items.length * 100).toFixed(1) : 0;

  wrap.innerHTML = `
    <div class="trl-check-header">
      <p class="trl-check-title">${title || 'Checklist'}</p>
      <span class="trl-check-count">${doneCt} / ${items.length}</span>
    </div>
    <div class="trl-check-bar"
         role="progressbar"
         aria-valuenow="${Math.round(pct)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="trl-check-bar-fill" style="width:${pct}%"></div>
    </div>
    <ul class="trl-check-list">
      ${items.map((item, i) => `
        <li class="trl-check-item${state.has(i) ? ' trl-check-done' : ''}" data-i="${i}">
          <input class="trl-check-cb" type="checkbox" id="trl-check-${uid}-${i}"${state.has(i) ? ' checked' : ''}>
          <label class="trl-check-lbl" for="trl-check-${uid}-${i}">${item}</label>
        </li>`).join('')}
    </ul>
  `;

  wrap.querySelectorAll('.trl-check-item').forEach(item => {
    const cb  = item.querySelector('.trl-check-cb');
    const lbl = item.querySelector('.trl-check-lbl');

    cb.addEventListener('change', () => {
      const idx = parseInt(item.dataset.i, 10);
      item.classList.toggle('trl-check-done', cb.checked);
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
  onVisible(wrap, () => wrap.classList.add('trl-check-in'));
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
