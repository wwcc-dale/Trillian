/**
 * Tabs Widget
 *
 * Markup (markdown):
 *   - tabs
 *   - Overview
 *     - Welcome to this course. We cover JavaScript fundamentals.
 *     - No prior experience required.
 *   - Schedule
 *     - Week 1: Variables & Types
 *     - Week 2: Functions & Scope
 *
 * Keyboard navigation: Arrow Left/Right, Home/End, Enter/Space.
 */
import { directText, nestedContent, injectOnce, onVisible, watchForNew } from './utils.js';

const MARKER = 'tabs';

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('tt-styles', `
    .tt-widget {
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
    .tt-widget.tt-in { opacity: 1; }
    .tt-tablist {
      display: flex;
      gap: 0;
      border-bottom: 1px solid #f0f0f0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tt-tablist::-webkit-scrollbar { display: none; }
    .tt-tab {
      flex-shrink: 0;
      padding: 14px 20px;
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      margin-bottom: -1px;
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      color: #999;
      transition: color 0.2s, border-color 0.2s;
      white-space: nowrap;
    }
    .tt-tab:hover { color: #555; }
    .tt-tab:focus-visible { outline: 2px solid var(--tt-accent); outline-offset: -2px; }
    .tt-tab[aria-selected="true"] {
      color: var(--tt-accent);
      border-bottom-color: var(--tt-accent);
    }
    .tt-panels { padding: 20px; }
    .tt-panel {
      display: none;
      font-size: 14px;
      line-height: 1.65;
      color: #444;
      animation: tt-fade 0.2s ease;
    }
    .tt-panel.tt-active { display: block; }
    @keyframes tt-fade { from { opacity: 0; } to { opacity: 1; } }
    .tt-panel p { margin: 0; }
    .tt-panel p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .tt-widget { transition: none; opacity: 1; }
      .tt-tab { transition: none; }
      @keyframes tt-fade { from { opacity: 1; } }
    }
  `);
}

// ── Identify + parse ──────────────────────────────────────────────────────

function isTabs(ul) {
  const first = ul.querySelector('li:first-child');
  return first && first.textContent.trim().toLowerCase() === MARKER;
}

function parseList(ul) {
  return Array.from(ul.querySelectorAll(':scope > li')).slice(1).map(li => ({
    label: directText(li),
    paras: nestedContent(li),
  })).filter(t => t.label);
}

// ── Build + init ──────────────────────────────────────────────────────────

function initOne(ul) {
  injectStyles();
  const tabData = parseList(ul);
  if (!tabData.length) return;

  const uid = Math.random().toString(36).slice(2, 7);

  const wrap = document.createElement('div');
  wrap.className = 'tt-widget';
  wrap.style.setProperty('--tt-accent', '#4a90d9');

  const tablist = document.createElement('div');
  tablist.className = 'tt-tablist';
  tablist.setAttribute('role', 'tablist');

  const panelsEl = document.createElement('div');
  panelsEl.className = 'tt-panels';

  const tabEls   = [];
  const panelEls = [];

  tabData.forEach((tab, i) => {
    const tabId   = `tt-tab-${uid}-${i}`;
    const panelId = `tt-panel-${uid}-${i}`;

    const btn = document.createElement('button');
    btn.className = 'tt-tab';
    btn.id = tabId;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    btn.textContent = tab.label;

    const panel = document.createElement('div');
    panel.className = 'tt-panel' + (i === 0 ? ' tt-active' : '');
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    if (tab.paras.length) {
      panel.innerHTML = tab.paras.map(p => `<p>${p}</p>`).join('');
    }

    tablist.appendChild(btn);
    panelsEl.appendChild(panel);
    tabEls.push(btn);
    panelEls.push(panel);
  });

  function activate(idx) {
    tabEls.forEach((tab, i) => {
      const active = i === idx;
      tab.setAttribute('aria-selected', String(active));
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });
    panelEls.forEach((panel, i) => {
      panel.classList.toggle('tt-active', i === idx);
    });
  }

  tabEls.forEach((btn, i) => {
    btn.addEventListener('click', () => activate(i));
    btn.addEventListener('keydown', e => {
      let next = i;
      if      (e.key === 'ArrowRight') next = (i + 1) % tabEls.length;
      else if (e.key === 'ArrowLeft')  next = (i - 1 + tabEls.length) % tabEls.length;
      else if (e.key === 'Home')       next = 0;
      else if (e.key === 'End')        next = tabEls.length - 1;
      else return;
      e.preventDefault();
      activate(next);
      tabEls[next].focus();
    });
  });

  wrap.appendChild(tablist);
  wrap.appendChild(panelsEl);
  ul.replaceWith(wrap);
  onVisible(wrap, () => wrap.classList.add('tt-in'));
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isTabs(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isTabs, initOne);
