/**
 * Carousel
 *
 * Left/right arrow carousel supporting image slides (auto-lightboxed by
 * lightbox.js) and arbitrary card content. Keyboard and touch-swipe nav.
 *
 * Markup:
 *   - carousel
 *   - ![Mountain landscape with snow](mountain.jpg)       ← image slide
 *   - Plain text slide content goes here                  ← plain slide
 *   - Titled Card                                         ← content slide
 *     - First bullet point
 *     - Second bullet point
 *
 * Images inside slides are automatically picked up by lightbox.js.
 * Keyboard: focus the carousel, then use left/right arrow keys.
 * Touch: swipe left/right.
 */
import { injectOnce, watchForNew } from './utils.js';

const MARKER = 'carousel';

const SVG_PREV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>';
const SVG_NEXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';

function injectStyles() {
  injectOnce('trl-carousel-styles', `
    .trl-carousel {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 560px;
      box-sizing: border-box;
    }
    .trl-carousel-stage {
      position: relative;
    }
    .trl-carousel-viewport {
      overflow: hidden;
      border-radius: 12px;
      background: #f4f4f4;
    }
    .trl-carousel-track {
      display: flex;
      transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .trl-carousel-slide {
      flex: 0 0 100%;
      width: 100%;
      box-sizing: border-box;
      min-height: 160px;
    }
    .trl-carousel-slide--image img {
      width: 100%;
      display: block;
      max-height: 360px;
      object-fit: cover;
      border-radius: 12px;
    }
    .trl-carousel-caption {
      font-size: 12px;
      color: #aaa;
      text-align: center;
      padding: 8px 16px 12px;
      margin: 0;
    }
    .trl-carousel-slide--content {
      padding: 28px 24px;
      background: #fff;
    }
    .trl-carousel-slide-title {
      font-size: 16px;
      font-weight: 700;
      color: #222;
      margin: 0 0 10px;
      letter-spacing: -0.01em;
    }
    .trl-carousel-body {
      font-size: 14px;
      color: #555;
      line-height: 1.6;
    }
    .trl-carousel-body ul { margin: 0; padding-left: 18px; }
    .trl-carousel-body li { margin: 4px 0; }
    .trl-carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.92);
      border: 1px solid rgba(0,0,0,0.08);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      box-shadow: 0 1px 4px rgba(0,0,0,0.12);
      padding: 0;
      z-index: 2;
      transition: box-shadow 0.15s ease;
    }
    .trl-carousel-btn:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.18); }
    .trl-carousel-btn svg { width: 16px; height: 16px; }
    .trl-carousel-prev { left: 8px; }
    .trl-carousel-next { right: 8px; }
    .trl-carousel-btn[disabled] { opacity: 0.25; pointer-events: none; }
    .trl-carousel-dots {
      display: flex;
      justify-content: center;
      gap: 6px;
      padding: 10px 0 0;
    }
    .trl-carousel-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #ddd;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }
    .trl-carousel-dot--active { background: #333; transform: scale(1.25); }
    @media (prefers-reduced-motion: reduce) {
      .trl-carousel-track { transition: none; }
      .trl-carousel-dot   { transition: none; }
    }
  `);
}

function isCarousel(ul) {
  const first = ul.querySelector('li:first-child');
  return !!first && first.textContent.trim().toLowerCase().startsWith(MARKER);
}

function isImageLi(li) {
  const clone = li.cloneNode(true);
  clone.querySelectorAll('ul').forEach(u => u.remove());
  return clone.querySelectorAll('img').length >= 1 && clone.textContent.trim() === '';
}

function directText(li) {
  return Array.from(li.childNodes)
    .filter(n => n.nodeType === 3 || (n.nodeType === 1 && n.tagName !== 'UL'))
    .map(n => n.textContent)
    .join('').trim();
}

function buildSlide(li) {
  const slide = document.createElement('div');

  if (isImageLi(li)) {
    slide.className = 'trl-carousel-slide trl-carousel-slide--image';
    const src = li.querySelector('img');
    // Create fresh <img> so lightbox.js MutationObserver picks it up
    const img = document.createElement('img');
    img.src = src.src;
    img.alt = src.alt;
    slide.appendChild(img);
    if (src.alt) {
      const cap = document.createElement('p');
      cap.className = 'trl-carousel-caption';
      cap.textContent = src.alt;
      slide.appendChild(cap);
    }
  } else {
    slide.className = 'trl-carousel-slide trl-carousel-slide--content';
    const nested = li.querySelector(':scope > ul');
    const title  = directText(li);
    if (title) {
      const t = document.createElement('p');
      t.className = 'trl-carousel-slide-title';
      t.textContent = title;
      slide.appendChild(t);
    }
    const body = document.createElement('div');
    body.className = 'trl-carousel-body';
    if (nested) {
      const ul = document.createElement('ul');
      Array.from(nested.querySelectorAll(':scope > li')).forEach(bli => {
        const item = document.createElement('li');
        item.innerHTML = bli.innerHTML;
        ul.appendChild(item);
      });
      body.appendChild(ul);
    } else {
      body.innerHTML = li.innerHTML;
    }
    slide.appendChild(body);
  }

  return slide;
}

function initOne(ul) {
  injectStyles();

  const items = Array.from(ul.querySelectorAll(':scope > li')).slice(1);
  if (!items.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'trl-carousel';
  wrap.setAttribute('tabindex', '0');

  const stage = document.createElement('div');
  stage.className = 'trl-carousel-stage';

  const viewport = document.createElement('div');
  viewport.className = 'trl-carousel-viewport';

  const track = document.createElement('div');
  track.className = 'trl-carousel-track';

  const slideEls = items.map(li => {
    const s = buildSlide(li);
    track.appendChild(s);
    return s;
  });

  viewport.appendChild(track);
  stage.appendChild(viewport);

  // Arrow buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'trl-carousel-btn trl-carousel-prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = SVG_PREV;

  const nextBtn = document.createElement('button');
  nextBtn.className = 'trl-carousel-btn trl-carousel-next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = SVG_NEXT;

  stage.appendChild(prevBtn);
  stage.appendChild(nextBtn);
  wrap.appendChild(stage);

  // Dots
  const dotsEl = document.createElement('div');
  dotsEl.className = 'trl-carousel-dots';
  const total = slideEls.length;
  let current = 0;

  const dots = Array.from({ length: total }, (_, i) => {
    const d = document.createElement('button');
    d.className = 'trl-carousel-dot' + (i === 0 ? ' trl-carousel-dot--active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
    return d;
  });
  wrap.appendChild(dotsEl);

  function goTo(idx) {
    current = Math.max(0, Math.min(total - 1, idx));
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach((d, i) => d.classList.toggle('trl-carousel-dot--active', i === current));
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  wrap.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); e.preventDefault(); }
  });

  // Touch swipe
  let touchX = 0;
  viewport.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  if (total <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    dotsEl.style.display  = 'none';
  }

  goTo(0);
  ul.replaceWith(wrap);
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isCarousel(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isCarousel, initOne);
