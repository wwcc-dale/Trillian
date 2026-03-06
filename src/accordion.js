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
import styles from './accordion.css';

const MARKER = 'accordion';

const CHEVRON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('trl-acc-styles', styles);
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
  wrap.className = 'trl-acc-widget';
  wrap.style.setProperty('--trl-acc-accent', '#4a90d9');

  if (label) {
    const lbl = document.createElement('p');
    lbl.className = 'trl-acc-label';
    lbl.textContent = label;
    wrap.appendChild(lbl);
  }

  items.forEach((item, i) => {
    const panelId   = `trl-acc-panel-${i}-${Math.random().toString(36).slice(2, 7)}`;
    const triggerId = `trl-acc-btn-${i}-${Math.random().toString(36).slice(2, 7)}`;

    const div = document.createElement('div');
    div.className = 'trl-acc-item';

    const btn = document.createElement('button');
    btn.className = 'trl-acc-trigger';
    btn.id = triggerId;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.innerHTML = `<span>${item.heading}</span><span class="trl-acc-chevron">${CHEVRON}</span>`;

    const panel = document.createElement('div');
    panel.className = 'trl-acc-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', triggerId);
    panel.style.height = '0';

    const inner = document.createElement('div');
    inner.className = 'trl-acc-panel-inner';
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
  onVisible(wrap, () => wrap.classList.add('trl-acc-in'));
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
