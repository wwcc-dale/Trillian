/**
 * Accordion Widget
 *
 * Markup (markdown):
 *   - accordion
 *   - What is the late policy?
 *     - Assignments lose 10% per day. After 5 days, no credit is awarded.
 *   - How do I submit work?
 *     - Upload your file to the Canvas assignment page.
 *     - Submissions close at 11:59 PM on the due date.
 *
 * First <li> options:
 *   "accordion"        — no label
 *   "accordion: FAQ"   — label above the accordion
 */
import { directText, nestedContent, injectOnce, onVisible, watchForNew } from './utils.js';

const MARKER = 'accordion';

const CHEVRON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('tac-styles', `
    .tac-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      overflow: hidden;
      max-width: 640px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .tac-widget.tac-in { opacity: 1; }
    .tac-label {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      padding: 18px 20px 0;
      margin: 0;
    }
    .tac-item { border-bottom: 1px solid #f0f0f0; }
    .tac-item:last-child { border-bottom: none; }
    .tac-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      padding: 16px 20px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      color: #222;
      text-align: left;
      transition: background 0.15s;
    }
    .tac-trigger:hover { background: #fafafa; }
    .tac-trigger:focus-visible { outline: 2px solid var(--tac-accent); outline-offset: -2px; }
    .tac-chevron {
      flex-shrink: 0;
      color: #aaa;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tac-trigger[aria-expanded="true"] .tac-chevron { transform: rotate(180deg); }
    .tac-panel {
      overflow: hidden;
      height: 0;
      transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tac-panel-inner {
      padding: 4px 20px 18px;
      font-size: 14px;
      line-height: 1.65;
      color: #555;
    }
    .tac-panel-inner p { margin: 0; }
    .tac-panel-inner p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .tac-widget { transition: none; opacity: 1; }
      .tac-panel, .tac-chevron { transition: none; }
    }
  `);
}

// ── Panel animation ───────────────────────────────────────────────────────

function openPanel(panel, reduced) {
  if (reduced) { panel.style.height = 'auto'; return; }
  panel.style.height = panel.scrollHeight + 'px';
  panel.addEventListener('transitionend', () => {
    if (panel.style.height !== '0px') panel.style.height = 'auto';
  }, { once: true });
}

function closePanel(panel, reduced) {
  if (reduced) { panel.style.height = '0'; return; }
  panel.style.height = panel.scrollHeight + 'px';
  requestAnimationFrame(() => requestAnimationFrame(() => { panel.style.height = '0'; }));
}

// ── Identify + parse ──────────────────────────────────────────────────────

function isAccordion(ul) {
  const first = ul.querySelector('li:first-child');
  if (!first) return false;
  const t = first.textContent.trim().toLowerCase();
  return t === MARKER || t.startsWith(MARKER + ':');
}

function parseList(ul) {
  const firstText = ul.querySelector('li:first-child').textContent.trim();
  const colon = firstText.indexOf(':');
  const label = colon > -1 ? firstText.slice(colon + 1).trim() : '';
  const items = Array.from(ul.querySelectorAll(':scope > li')).slice(1).map(li => ({
    heading: directText(li),
    paras:   nestedContent(li),
  })).filter(item => item.heading);
  return { label, items };
}

// ── Build + init ──────────────────────────────────────────────────────────

function initOne(ul) {
  injectStyles();
  const { label, items } = parseList(ul);
  if (!items.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const wrap = document.createElement('div');
  wrap.className = 'tac-widget';
  wrap.style.setProperty('--tac-accent', '#4a90d9');

  if (label) {
    const lbl = document.createElement('p');
    lbl.className = 'tac-label';
    lbl.textContent = label;
    wrap.appendChild(lbl);
  }

  items.forEach((item, i) => {
    const panelId   = `tac-panel-${i}-${Math.random().toString(36).slice(2, 7)}`;
    const triggerId = `tac-btn-${i}-${Math.random().toString(36).slice(2, 7)}`;

    const div = document.createElement('div');
    div.className = 'tac-item';

    const btn = document.createElement('button');
    btn.className = 'tac-trigger';
    btn.id = triggerId;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.innerHTML = `<span>${item.heading}</span><span class="tac-chevron">${CHEVRON}</span>`;

    const panel = document.createElement('div');
    panel.className = 'tac-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', triggerId);
    panel.style.height = '0';

    const inner = document.createElement('div');
    inner.className = 'tac-panel-inner';
    inner.innerHTML = item.paras.length ? item.paras.map(p => `<p>${p}</p>`).join('') : '<p></p>';
    panel.appendChild(inner);

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) closePanel(panel, reduced);
      else        openPanel(panel, reduced);
    });

    div.appendChild(btn);
    div.appendChild(panel);
    wrap.appendChild(div);
  });

  ul.replaceWith(wrap);
  onVisible(wrap, () => wrap.classList.add('tac-in'));
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isAccordion(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isAccordion, initOne);
