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
import styles from './lightbox.css';

const STYLE_ID = 'trl-lb-styles';

// ── Styles ─────────────────────────────────────────────────────────────────
// Injected globally (not scoped to .trillian) so the body-level overlay works.

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = styles;
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
