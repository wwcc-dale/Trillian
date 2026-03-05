/**
 * Trillian — shared utilities
 * Tree-shaken into each component at build time; never loaded directly.
 */

// ── Colour ────────────────────────────────────────────────────────────────

/** Append 2-digit hex alpha to a 6-digit hex colour. Falls back if non-hex. */
export function hexA(hex, alpha) {
  if (/^#[0-9a-f]{6}$/i.test(hex)) {
    return hex + Math.round(alpha * 255).toString(16).padStart(2, '0');
  }
  return hex;
}

// ── Animation ─────────────────────────────────────────────────────────────

/** Ease-out cubic. */
export function ease(t) { return 1 - Math.pow(1 - t, 3); }

// ── DOM helpers ───────────────────────────────────────────────────────────

/**
 * Direct text content of a <li>, excluding any nested <ul> text.
 * Used by accordion and tabs to separate the heading from panel content.
 */
export function directText(li) {
  return Array.from(li.childNodes)
    .filter(n => !(n.nodeType === 1 && n.tagName === 'UL'))
    .map(n => n.textContent)
    .join('')
    .trim();
}

/**
 * innerHTML of each direct <li> inside the first nested <ul> of a <li>.
 * Preserves inline Canvas-sanitized markup (<strong>, <em>, <a>).
 */
export function nestedContent(li) {
  const nested = li.querySelector(':scope > ul');
  if (!nested) return [];
  return Array.from(nested.querySelectorAll(':scope > li')).map(item => item.innerHTML);
}

// ── Style injection ───────────────────────────────────────────────────────

/** Inject a shared <style> block exactly once, guarded by id. */
export function injectOnce(id, css) {
  if (document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

// ── Lifecycle helpers ─────────────────────────────────────────────────────

/**
 * Call `callback(reduced)` when `el` scrolls into view.
 * Respects prefers-reduced-motion — calls immediately with reduced=true if set.
 * Falls back to immediate call if IntersectionObserver is unavailable.
 */
export function onVisible(el, callback, threshold = 0.1) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { callback(true); return; }
  if (!('IntersectionObserver' in window)) { callback(false); return; }
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { callback(false); obs.disconnect(); }
  }, { threshold });
  obs.observe(el);
}

/**
 * Watch for dynamically inserted elements matching `selector` that pass `test`,
 * and call `initFn` on each. Handles Canvas SPA re-renders.
 */
export function watchForNew(selector, test, initFn) {
  new MutationObserver(mutations => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        const cands = node.matches(selector)
          ? [node]
          : Array.from(node.querySelectorAll(selector));
        cands.filter(test).forEach(initFn);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
}
