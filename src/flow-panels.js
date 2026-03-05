/**
 * Flow Accordion / Flow Tabs
 *
 * Content-spanning panels where headings divide sections.
 * Unlike accordion.js / tabs.js (which use list items as content),
 * these collect arbitrary sibling DOM nodes between trigger headings —
 * paragraphs, images, code blocks, nested lists, other Trillian widgets, anything.
 *
 * Markup (markdown):
 *   - flow-accordion
 *
 *   ###### Week 1: Intro
 *   Any content here — multiple paragraphs, images, a stat-row, code blocks…
 *
 *   ###### Week 2: Deep Dive
 *   More arbitrary content.
 *
 * Trigger heading defaults to h6. Override with a colon suffix:
 *   - flow-accordion:h3   ← use h3 as section dividers
 *
 * For tabs:
 *   - flow-tabs           (or: - flow-tabs:h3)
 *
 * Stopping conditions (which sibling ends the collected region):
 *   - Another flow-accordion or flow-tabs sentinel list
 *   - A heading at a higher level than the trigger (h2 stops an h3 region)
 *   - End of parent container
 */
import { injectOnce, onVisible, watchForNew } from './utils.js';

const ACCORD_MARKER = 'flow-accordion';
const TABS_MARKER   = 'flow-tabs';

const CHEVRON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// ── Styles ─────────────────────────────────────────────────────────────────

function injectAccordionStyles() {
  injectOnce('trl-fac-styles', `
    .trl-fac-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      border: 1px solid #ebebeb;
      border-radius: 12px;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-fac-widget.trl-fac-in { opacity: 1; }
    .trl-fac-item { border-bottom: 1px solid #f0f0f0; }
    .trl-fac-item:last-child { border-bottom: none; }
    .trl-fac-trigger {
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
      font-size: 15px;
      font-weight: 600;
      color: #222;
      text-align: left;
      transition: background 0.15s;
    }
    .trl-fac-trigger:hover { background: #fafafa; }
    .trl-fac-trigger:focus-visible { outline: 2px solid var(--trl-fac-accent); outline-offset: -2px; }
    .trl-fac-chevron {
      flex-shrink: 0;
      color: #bbb;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-fac-trigger[aria-expanded="true"] .trl-fac-chevron { transform: rotate(180deg); }
    .trl-fac-panel {
      overflow: hidden;
      height: 0;
      transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-fac-panel-inner {
      padding: 4px 20px 20px;
      font-size: 14px;
      line-height: 1.7;
      color: #444;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-fac-widget { transition: none; opacity: 1; }
      .trl-fac-panel, .trl-fac-chevron { transition: none; }
    }
  `);
}

function injectTabsStyles() {
  injectOnce('trl-fta-styles', `
    .trl-fta-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border: 1px solid #ebebeb;
      border-radius: 12px;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-fta-widget.trl-fta-in { opacity: 1; }
    .trl-fta-tablist {
      display: flex;
      border-bottom: 1px solid #f0f0f0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .trl-fta-tablist::-webkit-scrollbar { display: none; }
    .trl-fta-tab {
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
    .trl-fta-tab:hover { color: #555; }
    .trl-fta-tab:focus-visible { outline: 2px solid var(--trl-fta-accent); outline-offset: -2px; }
    .trl-fta-tab[aria-selected="true"] {
      color: var(--trl-fta-accent);
      border-bottom-color: var(--trl-fta-accent);
    }
    .trl-fta-panels { padding: 20px; }
    .trl-fta-panel {
      display: none;
      font-size: 14px;
      line-height: 1.7;
      color: #444;
      animation: trl-fta-fade 0.18s ease;
    }
    .trl-fta-panel.trl-fta-active { display: block; }
    @keyframes trl-fta-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      .trl-fta-widget { transition: none; opacity: 1; }
      .trl-fta-tab { transition: none; }
      @keyframes trl-fta-fade { from { opacity: 1; } }
    }
  `);
}

// ── DOM collection ──────────────────────────────────────────────────────────

function isFlowSentinel(ul) {
  const first = ul.querySelector('li:first-child');
  if (!first) return false;
  const t = first.textContent.trim().toLowerCase();
  return t === ACCORD_MARKER || t.startsWith(ACCORD_MARKER + ':') ||
         t === TABS_MARKER   || t.startsWith(TABS_MARKER + ':');
}

function parseMarker(ul) {
  const text    = ul.querySelector('li:first-child').textContent.trim().toLowerCase();
  const isAcc   = text === ACCORD_MARKER || text.startsWith(ACCORD_MARKER + ':');
  const colon   = text.indexOf(':');
  const suffix  = colon > -1 ? text.slice(colon + 1).trim() : 'h6';
  const trigger = /^h[1-6]$/.test(suffix) ? suffix : 'h6';
  return { mode: isAcc ? 'accordion' : 'tabs', trigger };
}

/**
 * Walk forward siblings of `sentinel`, grouping them into sections.
 * Each occurrence of `triggerTag` starts a new section; content between
 * them is live-moved (not copied) into section.nodes.
 */
function collectSections(sentinel, triggerTag) {
  const triggerLevel = parseInt(triggerTag[1]);
  const sections = [];
  let current = null;
  let node = sentinel.nextSibling;

  while (node) {
    const next      = node.nextSibling;
    const isEl      = node.nodeType === 1;
    const tag       = isEl ? node.tagName.toLowerCase() : '';

    // Stop: another flow sentinel
    if (tag === 'ul' && isFlowSentinel(node)) break;

    // Stop: heading at higher level (lower number) than our trigger
    if (/^h[1-6]$/.test(tag) && parseInt(tag[1]) < triggerLevel) break;

    // New section: trigger heading
    if (tag === triggerTag) {
      current = { heading: node.textContent.trim(), nodes: [] };
      sections.push(current);
      node.remove();
      node = next;
      continue;
    }

    // Collect into current section (live-move the node)
    if (current) {
      current.nodes.push(node);
      node.remove();
    }

    node = next;
  }

  return sections;
}

// ── Accordion build ─────────────────────────────────────────────────────────

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

function buildAccordion(sections, reduced, uid) {
  const wrap = document.createElement('div');
  wrap.className = 'trl-fac-widget';
  wrap.style.setProperty('--trl-fac-accent', '#4a90d9');

  sections.forEach((sec, i) => {
    const panelId   = `trl-fac-panel-${uid}-${i}`;
    const triggerId = `trl-fac-btn-${uid}-${i}`;

    const item = document.createElement('div');
    item.className = 'trl-fac-item';

    const btn = document.createElement('button');
    btn.className = 'trl-fac-trigger';
    btn.id = triggerId;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.innerHTML = `<span>${sec.heading}</span><span class="trl-fac-chevron">${CHEVRON}</span>`;

    const panel = document.createElement('div');
    panel.className = 'trl-fac-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', triggerId);
    panel.style.height = '0';

    const inner = document.createElement('div');
    inner.className = 'trl-fac-panel-inner';
    sec.nodes.forEach(n => inner.appendChild(n));
    panel.appendChild(inner);

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) closePanel(panel, reduced);
      else        openPanel(panel, reduced);
    });

    item.appendChild(btn);
    item.appendChild(panel);
    wrap.appendChild(item);
  });

  return wrap;
}

// ── Tabs build ──────────────────────────────────────────────────────────────

function buildTabs(sections, uid) {
  const wrap = document.createElement('div');
  wrap.className = 'trl-fta-widget';
  wrap.style.setProperty('--trl-fta-accent', '#4a90d9');

  const tablist = document.createElement('div');
  tablist.className = 'trl-fta-tablist';
  tablist.setAttribute('role', 'tablist');

  const panelsEl = document.createElement('div');
  panelsEl.className = 'trl-fta-panels';

  const tabEls   = [];
  const panelEls = [];

  sections.forEach((sec, i) => {
    const tabId   = `trl-fta-tab-${uid}-${i}`;
    const panelId = `trl-fta-panel-${uid}-${i}`;

    const btn = document.createElement('button');
    btn.className = 'trl-fta-tab';
    btn.id = tabId;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    btn.textContent = sec.heading;

    const panel = document.createElement('div');
    panel.className = 'trl-fta-panel' + (i === 0 ? ' trl-fta-active' : '');
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    sec.nodes.forEach(n => panel.appendChild(n));

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
      panel.classList.toggle('trl-fta-active', i === idx);
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
  return wrap;
}

// ── Init ────────────────────────────────────────────────────────────────────

function initOne(ul) {
  const { mode, trigger } = parseMarker(ul);
  const sections = collectSections(ul, trigger);
  if (!sections.length) return;

  const uid     = Math.random().toString(36).slice(2, 7);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let widget;

  if (mode === 'accordion') {
    injectAccordionStyles();
    widget = buildAccordion(sections, reduced, uid);
    ul.replaceWith(widget);
    onVisible(widget, () => widget.classList.add('trl-fac-in'));
  } else {
    injectTabsStyles();
    widget = buildTabs(sections, uid);
    ul.replaceWith(widget);
    onVisible(widget, () => widget.classList.add('trl-fta-in'));
  }
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isFlowSentinel(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isFlowSentinel, initOne);
