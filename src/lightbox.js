/**
 * Lightbox
 *
 * Automatically applied to every <img> not inside an <a> link.
 * Click any image to view it fullscreen. Click the backdrop or press
 * Escape to dismiss. Alt text is shown as a caption.
 *
 * No markup required — use standard markdown images:
 *   ![A descriptive caption](image-url.jpg)
 *
 * Images wrapped in a link are left alone (the link click takes priority):
 *   [![alt](thumb.jpg)](full.jpg)   ← not lightboxed
 */
import { watchForNew } from './utils.js';

const STYLE_ID = 'trl-lb-styles';

// ── Styles ─────────────────────────────────────────────────────────────────
// Injected globally (not scoped to .trillian) so the body-level overlay works.

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = `
    .trl-lb-trigger {
      cursor: zoom-in;
    }
    .trl-lb-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.88);
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.22s ease;
    }
    .trl-lb-overlay.trl-lb-open { opacity: 1; pointer-events: auto; }
    .trl-lb-img {
      max-width: 92vw;
      max-height: 82vh;
      object-fit: contain;
      border-radius: 4px;
      box-shadow: 0 8px 48px rgba(0, 0, 0, 0.6);
      transform: scale(0.94);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-lb-overlay.trl-lb-open .trl-lb-img { transform: scale(1); }
    .trl-lb-caption {
      color: rgba(255, 255, 255, 0.65);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      max-width: 640px;
      text-align: center;
      line-height: 1.5;
      padding: 0 24px;
    }
    .trl-lb-close {
      position: absolute;
      top: 14px;
      right: 18px;
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.55);
      font-size: 30px;
      line-height: 1;
      cursor: pointer;
      padding: 4px 8px;
    }
    .trl-lb-close:hover { color: #fff; }
    @media (prefers-reduced-motion: reduce) {
      .trl-lb-overlay { transition: none; }
      .trl-lb-img { transition: none; transform: none; }
    }
  `;
  document.head.appendChild(s);
}

// ── Overlay singleton ──────────────────────────────────────────────────────

let overlay = null;

function getOverlay() {
  if (overlay) return overlay;

  overlay = document.createElement('div');
  overlay.className = 'trl-lb-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image viewer');

  const closeBtn = document.createElement('button');
  closeBtn.className = 'trl-lb-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', e => { e.stopPropagation(); close(); });

  const img = document.createElement('img');
  img.className = 'trl-lb-img';
  img.alt = '';
  img.addEventListener('click', e => e.stopPropagation());

  const caption = document.createElement('p');
  caption.className = 'trl-lb-caption';

  overlay.appendChild(closeBtn);
  overlay.appendChild(img);
  overlay.appendChild(caption);
  overlay.addEventListener('click', close);

  document.body.appendChild(overlay);
  return overlay;
}

function open(src, alt) {
  const ov  = getOverlay();
  const img = ov.querySelector('.trl-lb-img');
  const cap = ov.querySelector('.trl-lb-caption');
  img.src        = src;
  img.alt        = alt;
  cap.textContent = alt;
  cap.hidden      = !alt;
  requestAnimationFrame(() => ov.classList.add('trl-lb-open'));
  document.addEventListener('keydown', onKey);
}

function close() {
  if (!overlay) return;
  overlay.classList.remove('trl-lb-open');
  document.removeEventListener('keydown', onKey);
}

function onKey(e) {
  if (e.key === 'Escape') close();
}

// ── Per-image init ─────────────────────────────────────────────────────────

function isLightboxable(img) {
  return !img.closest('a') && !img.dataset.trlLb;
}

function initOne(img) {
  injectStyles();
  img.dataset.trlLb = '1';
  img.classList.add('trl-lb-trigger');
  img.addEventListener('click', () => open(img.src, img.alt || ''));
}

function initAll() {
  document.querySelectorAll('img').forEach(img => {
    if (isLightboxable(img)) initOne(img);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('img', isLightboxable, initOne);
