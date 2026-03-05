/**
 * Alert / Callout Widget
 *
 * Markup (markdown):
 *   > alert: warning
 *   >
 *   > Your assignment draft is due Friday. Late submissions lose 10%.
 *
 * Types: info | warning | success | error | tip
 */
import { injectOnce, onVisible, watchForNew } from './utils.js';

const THEMES = {
  info:    { bg: '#eff6ff', border: '#3b82f6', text: '#1e3a5f', icon: '#3b82f6', label: 'Info' },
  warning: { bg: '#fffbeb', border: '#f59e0b', text: '#78350f', icon: '#f59e0b', label: 'Warning' },
  success: { bg: '#f0fdf4', border: '#22c55e', text: '#14532d', icon: '#22c55e', label: 'Success' },
  error:   { bg: '#fef2f2', border: '#ef4444', text: '#7f1d1d', icon: '#ef4444', label: 'Error' },
  tip:     { bg: '#faf5ff', border: '#a855f7', text: '#4a1772', icon: '#a855f7', label: 'Tip' },
};

const ICONS = {
  info:    '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="6.5" r="1.1" fill="currentColor"/></svg>',
  warning: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5L17.5 16.5H2.5L10 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="10" y1="8.5" x2="10" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.1" fill="currentColor"/></svg>',
  success: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  error:   '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  tip:     '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a5.5 5.5 0 0 1 2.75 10.25V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.75A5.5 5.5 0 0 1 10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 17.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
};

function injectStyles() {
  injectOnce('trl-alert-styles', `
    .trl-alert-callout {
      display: flex;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 10px;
      border-left: 4px solid var(--trl-alert-border);
      background: var(--trl-alert-bg);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.65;
      color: var(--trl-alert-text);
      box-sizing: border-box;
      margin: 8px 0;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .trl-alert-callout.trl-alert-in { opacity: 1; }
    .trl-alert-icon-wrap { flex-shrink: 0; color: var(--trl-alert-icon); padding-top: 1px; }
    .trl-alert-body { flex: 1; min-width: 0; }
    .trl-alert-body p { margin: 0; }
    .trl-alert-body p + p { margin-top: 5px; }
    .trl-alert-body a { color: var(--trl-alert-icon); }
    @media (prefers-reduced-motion: reduce) {
      .trl-alert-callout { transition: none; opacity: 1; }
    }
  `);
}

function isAlert(bq) {
  const first = bq.querySelector('p');
  return first && /^alert\s*:/i.test(first.textContent.trim());
}

function parseAlert(bq) {
  const paras = Array.from(bq.querySelectorAll('p'));
  if (!paras.length) return null;
  const m = /^alert\s*:\s*(\w+)/i.exec(paras[0].textContent.trim());
  if (!m) return null;
  const typeKey = m[1].toLowerCase();
  const type = THEMES[typeKey] ? typeKey : 'info';
  let bodyHtml;
  if (paras.length > 1) {
    bodyHtml = paras.slice(1).map(p => `<p>${p.innerHTML}</p>`).join('');
  } else {
    const inner = paras[0].innerHTML;
    const brIdx = inner.search(/<br\s*\/?>/i);
    const after = brIdx > -1 ? inner.slice(brIdx).replace(/^<br\s*\/?>/i, '').trim() : '';
    bodyHtml = after ? `<p>${after}</p>` : '';
  }
  return { type, bodyHtml };
}

function initOne(bq) {
  injectStyles();
  const parsed = parseAlert(bq);
  if (!parsed) return;
  const { type, bodyHtml } = parsed;
  const theme = THEMES[type];
  const wrap = document.createElement('div');
  wrap.className = 'trl-alert-callout';
  wrap.setAttribute('role', 'note');
  wrap.setAttribute('aria-label', theme.label);
  wrap.style.setProperty('--trl-alert-bg',     theme.bg);
  wrap.style.setProperty('--trl-alert-border', theme.border);
  wrap.style.setProperty('--trl-alert-text',   theme.text);
  wrap.style.setProperty('--trl-alert-icon',   theme.icon);
  wrap.innerHTML = `
    <span class="trl-alert-icon-wrap">${ICONS[type]}</span>
    <div class="trl-alert-body">${bodyHtml}</div>
  `;
  bq.replaceWith(wrap);
  onVisible(wrap, () => wrap.classList.add('trl-alert-in'));
}

function initAll() {
  document.querySelectorAll('blockquote').forEach(bq => { if (isAlert(bq)) initOne(bq); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('blockquote', isAlert, initOne);
