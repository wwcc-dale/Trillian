# Trillian — Claude Onboarding

Design system and Canvas LMS component library, used alongside
[Zaphod](https://github.com/wwcc-dale/zaphod-dev).

> *"She was the only other human to survive the destruction of Earth —
> and she did it with considerably more style."*

---

## The Canvas Constraint Problem

Canvas LMS runs all page HTML through a sanitizer before saving. The following is
confirmed from real sanitizer testing (not guesses):

**Allows (confirmed ✓):**
- Block elements: `<div>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`,
  `<nav>`, `<details>`, `<summary>`, `<blockquote>`, `<pre>`, `<hr>`
- Inline elements: `<span>`, `<strong>`, `<em>`, `<code>`, `<abbr title>`, `<del>`, `<ins>`,
  `<sub>`, `<sup>`, `<mark>`
- Headings: `<h1>`–`<h6>`
- Lists: `<ul>`, `<ol>`, `<li>`
- Tables: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `colspan`, `rowspan`
- Links: `<a href>` including fragment-only hrefs like `href="#pill:warning"` ✓
- `<p>`, `<br>`
- Attributes: `class`, `id`, `role`, ARIA attributes (`aria-*`), `data-*` attributes,
  `style` (property-by-property, some stripped — see below)
- CSS inline properties: `display`, `flex-*`, `background`, `background-color`,
  `border`, `border-radius`, `border-top`, `color`, `font-size`, `font-family`,
  `font-style`, `padding`, `margin`, `width`, `height`, `max-width`, `position`,
  `top`/`right`/`bottom`/`left`, `gap`, `align-items`, `justify-content`,
  `white-space`, `cursor`, `vertical-align`, `line-height`, `text-align`,
  `text-decoration`, `overflow`, `z-index`, `min-width`, `flex`

**Strips (confirmed ✗):**
- All SVG elements: `<svg>`, `<path>`, `<circle>`, `<line>`, etc. — entire element removed
- `<script>` tags in stored page HTML (Canvas's own sanitizer pass, not Custom JS)
- `<button>`, `<input>`, `<meter>`, `<progress>`, `<select>`, `<textarea>` — form elements stripped
- `<s>` (strikethrough — use `<del>` instead)
- `<main>`, `<dialog>`, `<figure>`, `<figcaption>`
- Custom HTML elements: `<my-widget>`, `<progress-dashboard>`, etc.
- CSS custom properties from inline styles: `style="--anything: value"` → stripped
- CSS inline properties stripped: `box-shadow`, `transform`, `opacity`,
  `pointer-events`, `letter-spacing`, `font-weight`, `text-transform`,
  `user-select`, `transition`, `animation`
- `tabindex` attribute
- `datetime` attribute on `<time>`
- `name` attribute on `<a>`

**Key implications:**
- All SVGs must be JS-injected (via `innerHTML`) — they cannot be in stored page HTML
- All animations/transitions must be in `<style>` blocks or Custom JS stylesheets
- `font-weight: 700` in inline styles is stripped — use CSS classes instead
- Fragment hrefs like `href="#pill:warning"` survive ✓ (critical for pill component)
- `data-*` attributes survive ✓ (useful for state storage in stored HTML)

Canvas Admin → Account → Settings → **Custom JS** loads scripts for every page
in the account. This is where Trillian component scripts are loaded.

Canvas Admin → Account → Settings → **Custom JS** loads scripts for every page
in the account. This is where Trillian component scripts are loaded.

---

## The Pattern

Because Canvas strips custom elements and CSS custom properties from stored HTML,
Trillian uses a **plain markdown list** as the data carrier:

```markdown
- progress-dashboard
- session: 3
- course-name: Javascript
- course-code: CS 140
```

The first `<li>` identifies the component type. The rest are `key: value` pairs.
The JavaScript (loaded via Custom JS) scans all `<ul>` elements, finds matching
lists by their first `<li>` text content, parses the key-value pairs, and
**replaces** the list with a fully rendered widget.

**Why this works:**
- `<ul>` / `<li>` are on Canvas's allowlist — nothing to sanitize
- Data lives in text content — no attributes to strip
- CSS custom properties are set at runtime via `element.style.setProperty()` —
  Canvas never sees them in stored HTML
- The widget DOM is built entirely by JavaScript — Canvas sanitizes only the
  source HTML, not JS-constructed DOM

**Why `li.textContent` not `li.innerHTML`:**
Canvas round-trip markers (HTML comments) are embedded by Zaphod around
interpolated values. `textContent` ignores comments, so the parser always sees
clean `key: value` text even on imported/published pages.

---

## Repo Structure

```
trillian/
  components/          # One self-contained IIFE JS file per component
  tokens/              # Design tokens (colours, spacing, type scale) — future
  demo/                # Local preview pages (open directly in browser, no server needed)
  CLAUDE.md
  README.md
```

Each component in `components/` is a standalone IIFE — no build step, no bundler,
no dependencies. Drop the script tag in Canvas Custom JS and it works.

---

## Component Authoring Rules

1. **Self-contained IIFE** — no imports, no globals leaked
2. **Identify by first `<li>` text** — case-insensitive match against `MARKER`
3. **Parse with `li.textContent`** — not `innerHTML`, to strip HTML comment markers
4. **Skip first `<li>`** when collecting key-value pairs
5. **All CSS custom properties via JS** — `el.style.setProperty('--token', value)`;
   never in a `style=""` attribute (Canvas strips them)
6. **Single shared `<style id="...">` injected once** — use `injectOnce(id, css)` from utils
7. **IntersectionObserver for animations** — don't animate until in viewport
8. **`prefers-reduced-motion`** — always check before animating
9. **MutationObserver** — watch for dynamically inserted lists (Canvas SPAs re-render)
10. **`hexA(hex, alpha)`** helper for alpha colour variants — avoids `color-mix()`
    which has limited Canvas support
11. **No inline SVG in stored HTML** — all SVG must be JS-injected (`el.innerHTML = svgString`)
12. **No `font-weight`, `transition`, `opacity` in inline styles** — Canvas strips them;
    put these in `<style>` blocks via `injectOnce` instead

---

## Zaphod Integration

Zaphod is the static-site/Canvas-sync tool that generates the pages containing
Trillian components. The integration is minimal — Trillian only needs to know the
**data contract**:

- Zaphod publishes pages to Canvas. Pages can contain markdown lists via
  `{{include:dash}}` (or similar include directives).
- The include file (e.g. `_all_courses/shared/dash.md`) is a plain markdown list
  with `{{var:...}}` expressions that Zaphod resolves from course frontmatter.
- After Zaphod publishes, Canvas stores the resolved HTML. Trillian JS reads it.

**Trillian does not need to know:**
- How `{{var:...}}` works internally
- Zaphod's export/import pipeline
- Frontmatter conventions, asset registry, module structure

The only shared surface is: *"here is the list of keys a component accepts."*
That list lives in the component's JSDoc header and in `README.md`.

---

## Local Development

Open `demo/index.html` directly in a browser — no server required.

The demo loads `../components/progress-dashboard.js` relatively.
Add new demo instances to `demo/index.html` to test component variations.

---

## Current Components

| Component | File | Identifies by |
|-----------|------|---------------|
| `progress-dashboard` | `components/progress-dashboard.js` | first `<li>` === `"progress-dashboard"` |
| `alert` | `components/alert.js` | `<blockquote>` first `<p>` starts with `"alert:"` |
| `pill` | `components/pill.js` | `<a href="#pill">` or `<a href="#pill:colorname">` anywhere inline |
| `checklist` | `components/checklist.js` | first `<li>` === `"checklist"` or starts with `"checklist:"` |
| `buttons` | `components/buttons.js` | first `<li>` === `"buttons"` or starts with `"buttons:"` |
| `accordion` | `components/accordion.js` | first `<li>` === `"accordion"` or starts with `"accordion:"` |
| `tabs` | `components/tabs.js` | first `<li>` === `"tabs"` |
| `stat-row` | `components/stat-row.js` | first `<li>` === `"stats"` or starts with `"stats:"` |
| `lightbox` | `components/lightbox.js` | all `<img>` not inside `<a>` — no markup required |
| `flow-accordion` | `components/flow-panels.js` | first `<li>` === `"flow-accordion"` or `"flow-accordion:h3"` etc. |
| `flow-tabs` | `components/flow-panels.js` | first `<li>` === `"flow-tabs"` or `"flow-tabs:h3"` etc. |
| `code-highlight` | `components/code-highlight.js` | `<pre><code class="language-*">` — no markup required |

## Element-type Strategy

Different HTML elements serve as natural carriers for different component types:

| Element | Used for |
|---------|----------|
| `<a href="#pill:...">` | Inline non-clickable badges (`pill`) — pure markdown, fragment href survives Canvas |
| `<blockquote>` | Self-contained inline components (`alert`) |
| `<ul>` flat items | Config-heavy or single-level components (`buttons`, `checklist`, `stats`, `progress-dashboard`) |
| `<ul>` nested items | Two-level structured components (`accordion`, `tabs`) |
| `<ul>` + sibling headings | Content-spanning panels (`flow-accordion`, `flow-tabs`) — sentinel list + h6 triggers |
| `<pre><code class="language-*">` | Syntax-highlighted code blocks (`code-highlight`) |
| `<img>` | Lightbox viewer (`lightbox`) — automatic on all non-linked images |
| `<ol>` | Ordered/sequential components (future: `timeline`) |

## CSS Scoping

All Trillian styles are scoped to `.trillian` via the `scopeCSS()` utility in `src/utils.js`.
`injectOnce(id, css)` automatically applies this scoping — no component needs to call `scopeCSS` directly.

In production, every page Canvas serves wraps content in:
```html
<div class="zaphod trillian">…page content…</div>
```
- `zaphod` = the publishing mechanism
- `trillian` = the style system (allows runtime theme switching)

**How `scopeCSS` works:**
- Regular selectors: `.trl-pill` → `.trillian .trl-pill`
- `@keyframes` blocks: left global (CSS can't scope keyframe names)
- `@media` / other at-rules: pass through as-is; inner rules get scoped
- Nested `@keyframes` inside `@media`: also left unscoped

## Namespace Convention

All Trillian CSS class names, style element IDs, and CSS custom properties use the `trl-` prefix:

| Component | CSS prefix | Style ID |
|-----------|-----------|---------|
| progress-dashboard | `trl-dash-` | `trl-dash-styles` |
| alert | `trl-alert-` | `trl-alert-styles` |
| pill | `trl-pill-` | `trl-pill-styles` |
| checklist | `trl-check-` | `trl-check-styles` |
| buttons | `trl-btn-` | `trl-btn-styles` |
| accordion | `trl-acc-` | `trl-acc-styles` |
| tabs | `trl-tabs-` | `trl-tabs-styles` |
| stat-row | `trl-stat-` | `trl-stat-styles` |
| lightbox | `trl-lb-` | `trl-lb-styles` (global, not scoped) |
| flow-accordion | `trl-fac-` | `trl-fac-styles` |
| flow-tabs | `trl-fta-` | `trl-fta-styles` |
| code-highlight | `trl-code-` | `trl-code-styles` |

CSS custom properties follow the same pattern: `--trl-dash-accent`, `--trl-alert-bg`, `--trl-pill-text`, etc.
New components must use `trl-{slug}-` prefix for all class names and CSS vars.

## Item Separator Convention

For components that pack multiple values into a single `<li>`, use `·` (U+00B7, middle dot) as the primary separator — it cannot appear in URLs and reads naturally. A fallback of ` | ` (space-pipe-space) is also supported. Format: `value · label · optional-modifier`.
