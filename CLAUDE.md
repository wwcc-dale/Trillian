# Trillian — Claude Onboarding

Design system and Canvas LMS component library, used alongside
[Zaphod](https://github.com/wwcc-dale/zaphod-dev).

> *"She was the only other human to survive the destruction of Earth —
> and she did it with considerably more style."*

---

## The Canvas Constraint Problem

Canvas LMS runs all page HTML through a sanitizer before saving. The sanitizer:

- **Allows** standard HTML elements: `<ul>`, `<li>`, `<div>`, `<span>`, `<p>`,
  `<h1>`–`<h6>`, `<svg>`, `<path>`, `<circle>`, etc.
- **Allows** most CSS properties: `display`, `flex`, `background`, `border-radius`,
  `color`, `font-*`, `padding`, `margin`, `width`, `height`, `position`, etc.
- **Strips** CSS custom properties (`--anything: value`) from inline styles
- **Strips** `box-shadow`, `transform`, `opacity`, `pointer-events`, `letter-spacing`
- **Strips** custom HTML elements (`<my-widget>`, `<progress-dashboard>`, etc.)
- **Allows** `<style>` blocks and `<script>` tags injected via Custom JS, which run
  before Canvas sanitizes page content — so JS-injected DOM is safe

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
6. **Single shared `<style id="...">` injected once** — guard with `getElementById`
7. **IntersectionObserver for animations** — don't animate until in viewport
8. **`prefers-reduced-motion`** — always check before animating
9. **MutationObserver** — watch for dynamically inserted lists (Canvas SPAs re-render)
10. **`hexA(hex, alpha)`** helper for alpha colour variants — avoids `color-mix()`
    which has limited Canvas support

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
| `checklist` | `components/checklist.js` | first `<li>` === `"checklist"` or starts with `"checklist:"` |
| `buttons` | `components/buttons.js` | first `<li>` === `"buttons"` or starts with `"buttons:"` |
| `accordion` | `components/accordion.js` | first `<li>` === `"accordion"` or starts with `"accordion:"` |
| `tabs` | `components/tabs.js` | first `<li>` === `"tabs"` |
| `stat-row` | `components/stat-row.js` | first `<li>` === `"stats"` or starts with `"stats:"` |

## Element-type Strategy

Different HTML elements serve as natural carriers for different component types:

| Element | Used for |
|---------|----------|
| `<blockquote>` | Self-contained inline components (`alert`) |
| `<ul>` flat items | Config-heavy or single-level components (`buttons`, `checklist`, `stats`, `progress-dashboard`) |
| `<ul>` nested items | Two-level structured components (`accordion`, `tabs`) |
| `<ol>` | Ordered/sequential components (future: `timeline`) |

## Item Separator Convention

For components that pack multiple values into a single `<li>`, use `·` (U+00B7, middle dot) as the primary separator — it cannot appear in URLs and reads naturally. A fallback of ` | ` (space-pipe-space) is also supported. Format: `value · label · optional-modifier`.
