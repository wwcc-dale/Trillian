# ADR 001 — CSS Architecture: Co-located files + `@layer` + CSS custom properties

**Date:** 2026-03-06
**Status:** Accepted

---

## Context

Trillian started as a collection of standalone JavaScript IIFEs, each injecting its
styles as a runtime string via `injectOnce(id, css)`. This worked well for single-file
deployment but produced a few friction points as the library grew:

1. **Editability** — styles lived inside template literals inside JS files, losing
   editor syntax highlighting, linting, and formatting for CSS.
2. **Modularity** — there was no natural unit of CSS ownership; all component styles
   were imperatively assembled at runtime.
3. **Teachability** — students learning front-end development would benefit from
   seeing conventional file-per-component layout that mirrors real design systems
   (e.g. Radix UI, shadcn/ui, Headless UI).
4. **Dual-mode deployment** — Trillian components must work both as individual
   standalone IIFEs (Canvas Custom JS, no bundler) and as a unified bundle
   (`dist/trillian.js` + `dist/trillian.css`). CSS must not be double-injected.

---

## Decision

### A: Co-located CSS files

Each component gets a sibling CSS file (`src/alert.css`, `src/accordion.css`, etc.).
Component JS imports it as a string:

```js
import styles from './alert.css';   // esbuild loader: { '.css': 'text' }
injectOnce('trl-alert-styles', styles);
```

CSS files use **explicit `.trillian { }` scope** (not auto-prefixed by `scopeCSS()`):

```css
/* src/alert.css */
.trillian {
  .trl-alert-callout { … }
  .trl-alert-callout.trl-alert-in { opacity: 1; }
}
@keyframes trl-alert-fade { … }   /* @keyframes stay global */
```

### B: CSS custom properties, not Sass

Modern CSS custom properties supersede Sass variables for this use case:

- **Runtime-changeable** — theme switching without a rebuild
- **JS-accessible** — `element.style.setProperty('--token', value)` (already used everywhere)
- **No preprocessor** — one fewer build step, one fewer tool in the chain

CSS nesting (`selector { nested-selector { } }`) is native in all modern browsers
and in esbuild's CSS transformer. `color-mix()` replaces `darken()`/`lighten()`.
`@layer` replaces Sass partials as a cascade organization mechanism.

### C: `@layer` for cascade ordering

`src/index.css` declares the full layer stack and imports all component CSS:

```css
@layer trl.tokens, trl.base, trl.alert, trl.pill, trl.checklist, /* … */;

@import './tokens/_color.css'   layer(trl.tokens);
@import './tokens/_type.css'    layer(trl.tokens);
/* … */
@import './alert.css'           layer(trl.alert);
@import './accordion.css'       layer(trl.accordion);
/* … */
```

This gives page-level CSS a predictable override surface: a `.trillian .trl-alert-callout`
rule in the theme layer always wins over the component layer, regardless of source order.

### D: Dual-mode CSS loading sentinel

`src/tokens/_color.css` declares:

```css
:root { --trl-css-loaded: 1; }
```

`injectOnce` checks this property at call time. When the CSS bundle is loaded, the
property is `'1'` → `injectOnce` is a no-op. Standalone IIFEs inject their embedded
CSS string normally (the property is absent → `''`).

```js
export function injectOnce(id, css) {
  if (document.getElementById(id)) return;
  if (getComputedStyle(document.documentElement)
        .getPropertyValue('--trl-css-loaded').trim() === '1') return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}
```

---

## Alternatives considered

### Alt A: Sass (SCSS)

**Rejected.** Sass variables are compile-time only — they can't be read by JS or changed
at runtime. Sass `darken()`/`lighten()` functions are now available as `color-mix()`.
CSS nesting is now native. Adding Sass would introduce a preprocessor step, a separate
watcher, and `node-sass`/`dart-sass` version churn — none of which provide value that
modern CSS doesn't already offer.

### Alt B: CSS Modules

**Rejected.** CSS Modules require a bundler. Standalone IIFE components must remain
bundler-free. The `trl-` namespace convention already prevents class name collisions
without a scoping transformation.

### Alt C: Single `src/styles.css` (monolithic)

**Rejected.** Better than the original inline-string approach, but eliminates component
locality. A developer editing `accordion.js` would need to cross-reference a distant
shared file. Co-location keeps concerns together.

### Alt D: Web Components (Shadow DOM for style encapsulation)

**Deferred.** Canvas strips custom HTML elements. Web Components are a future
enhancement — the Trillian pattern could evolve there if Canvas ever allows custom
elements — but they can't be the primary approach today.

---

## Consequences

### Positive

- CSS files open in editors with full syntax support, linting, and auto-complete.
- `@layer` gives downstream theme authors a clean override surface.
- Standalone components still work without a build step (CSS string embedded in IIFE).
- Token values are readable in DevTools (`:root` computed styles).
- Architecture matches what students will encounter in modern design system tooling.

### Negative / Trade-offs

- esbuild `build.js` requires `loader: { '.css': 'text' }` for the JS build pass.
- CSS files with nested selectors require a modern browser (Baseline 2023 — fine for
  Canvas, which is always a current browser in institutional deployment).
- `--trl-css-loaded` sentinel is a somewhat unusual pattern. Document it clearly
  so future maintainers understand why `injectOnce` sometimes does nothing.
- Lightbox styles remain globally injected (no `.trillian` scope) because the overlay
  lives at `document.body` level. This is an intentional exception.

---

## File layout after migration

```
src/
  tokens/
    _color.css        ← :root { --trl-css-loaded: 1; … }
    _type.css
    _space.css
    _radius.css
    _shadow.css
    _motion.css
  alert.css           ← .trillian { .trl-alert-* { } }
  alert.js            ← import styles from './alert.css'; injectOnce(…, styles)
  pill.css
  pill.js
  checklist.css
  checklist.js
  buttons.css
  buttons.js
  accordion.css
  accordion.js
  tabs.css
  tabs.js
  stat-row.css
  stat-row.js
  lightbox.css        ← global (no .trillian wrapper)
  lightbox.js
  flow-panels.css
  flow-panels.js
  code-highlight.css
  code-highlight.js
  steps.css
  steps.js
  carousel.css
  carousel.js
  progress-dashboard.css
  progress-dashboard.js
  pace-dashboard.css
  pace-dashboard.js
  utils.js
  icons.js
  index.js
  index.css           ← @layer declarations + all @imports
```
