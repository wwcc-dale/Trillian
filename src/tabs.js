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
import styles from './tabs.css';

const MARKER = 'tabs';

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('trl-tabs-styles', styles);
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
  wrap.className = 'trl-tabs-widget';
  wrap.style.setProperty('--trl-tabs-accent', '#4a90d9');

  const tablist = document.createElement('div');
  tablist.className = 'trl-tabs-tablist';
  tablist.setAttribute('role', 'tablist');

  const panelsEl = document.createElement('div');
  panelsEl.className = 'trl-tabs-panels';

  const tabEls   = [];
  const panelEls = [];

  tabData.forEach((tab, i) => {
    const tabId   = `trl-tabs-tab-${uid}-${i}`;
    const panelId = `trl-tabs-panel-${uid}-${i}`;

    const btn = document.createElement('button');
    btn.className = 'trl-tabs-tab';
    btn.id = tabId;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    btn.textContent = tab.label;

    const panel = document.createElement('div');
    panel.className = 'trl-tabs-panel' + (i === 0 ? ' trl-tabs-active' : '');
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
      panel.classList.toggle('trl-tabs-active', i === idx);
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
  onVisible(wrap, () => wrap.classList.add('trl-tabs-in'));
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
