# Trillian

Design system and Canvas LMS component library for use alongside [Zaphod](https://github.com/wwcc-dale/zaphod-dev).

> *"She was the only other human to survive the destruction of Earth — and she did it with considerably more style."*

## Overview

Trillian provides Canvas-compatible UI components that work within Canvas's HTML sanitizer constraints — no custom elements, no inline CSS variables, no JavaScript in page content. Components are written as plain markdown lists and brought to life by a single JavaScript file loaded via Canvas's Custom JS field.

## The Pattern

Each component is a vanilla markdown unordered list. The first `<li>` identifies the component type; the rest are `key: value` data pairs:

```markdown
- progress-dashboard
- session: 3
- course-name: Javascript
- course-code: CS 140
```

The JS scans the page for matching lists, parses the key-value pairs, and replaces the list with a fully rendered widget. Canvas never sees anything it doesn't like.

**Why this works:**
- `<ul>` and `<li>` are on Canvas's HTML allowlist
- Key-value data lives in text content — nothing to sanitize
- CSS custom properties are set at runtime via JS, not in HTML attributes
- Animations trigger on scroll into view via IntersectionObserver
- `prefers-reduced-motion` respected throughout

## Setup

Load the component script(s) via **Canvas Admin → Account → Settings → Custom JS**:

```html
<script src="https://your-host/trillian/components/progress-dashboard.js"></script>
```

Or load all components from a single bundle (forthcoming).

## Components

### `progress-dashboard`

Displays a horseshoe session-progress gauge and program milestone bars.

**Keys:**

| Key | Default | Description |
|-----|---------|-------------|
| `session` | `0` | Current session (int or decimal e.g. `3.1` for Part 1 of session 3) |
| `module` | `0` | Module/credit number shown in gauge centre |
| `course-order` | `1` | Course position in program sequence |
| `course-name` | — | Course display name |
| `course-code` | — | Course code (e.g. `CS 140`) |
| `total-sessions` | `25` | Sessions per course |
| `credits-per-course` | `5` | Credits per completed course |
| `credits-per-session` | `0.2` | Credits per session |
| `milestone-mini` | `20` | Credit threshold — short certificate |
| `milestone-cert` | `45` | Credit threshold — certificate |
| `milestone-degree` | `90` | Credit threshold — degree |
| `program-short-name` | — | Short certificate program name (omit to hide bar) |
| `program-short-title` | `Short Certificate` | Short certificate type label |
| `program-cert-name` | — | Certificate program name (omit to hide bar) |
| `program-cert-title` | `Certificate` | Certificate type label |
| `program-degree-name` | — | Degree program name (omit to hide bar) |
| `program-degree-title` | `AAS Degree` | Degree type label |
| `accent-color` | `#4a90d9` | Gauge and mini bar colour |
| `cert-color` | `#7b68ee` | Certificate bar colour |
| `degree-color` | `#e8a838` | Degree bar colour |
| `bg-color` | `#ffffff` | Card background |
| `track-color` | `#e8e4df` | Arc and bar track colour |
| `layout` | `row` | `row` — gauge left, bars right · `column` — gauge top, bars below |

**Zaphod integration:**

When used with Zaphod, values are injected via `{{var:...}}` expressions in `dash.md` (in `_all_courses/shared/`). All computation happens in the browser — the page just carries raw frontmatter values.

---

### `alert`

Inline callout box with icon. Identified by a `<blockquote>` (markdown `>`).

**Markdown pattern:**

```markdown
> alert: warning
>
> Your assignment draft is due Friday. Late submissions lose 10% per day.
```

Use a blank line between the type declaration and the message body so Canvas produces separate `<p>` elements. Inline formatting (`**bold**`, `*italic*`, links) works in the body.

**Types:** `info` · `warning` · `success` · `error` · `tip`

---

### `checklist`

Interactive checkbox list with a progress bar. State persists to `localStorage`.

**Markdown pattern:**

```markdown
- checklist: Before You Arrive
- Read Chapter 3 (pp. 45–67)
- Watch the intro video (15 min)
- Post one question to the discussion board
```

The title after the colon is optional — omit it for an untitled checklist. Checked state is keyed by page URL path + list content hash, so two checklists on the same page stay independent.

---

### `buttons`

A flex row of styled link buttons.

**Markdown pattern:**

```markdown
- buttons
- Start Module 1 · /courses/1/modules/1 · primary
- Download Syllabus · /courses/1/files/1 · ghost
```

**Item format:** `label · href · style`
Separator: `·` (U+00B7 middle dot) or ` | ` (space-pipe-space).
**Styles:** `primary` · `secondary` · `ghost` · `danger`

**First `<li>` options:**
- `buttons` — left-aligned (default)
- `buttons: center` — centred
- `buttons: right` — right-aligned

---

### `accordion`

Expandable sections. Uses nested lists: outer `<li>` direct text is the heading; nested `<ul>` items are body paragraphs.

**Markdown pattern:**

```markdown
- accordion: FAQ
- What is the late policy?
  - Assignments lose 10% per day. After 5 days, no credit.
- How do I submit work?
  - Upload to the Canvas assignment page.
  - Submissions close at 11:59 PM on the due date.
```

The label after the colon is optional.

---

### `tabs`

Tabbed content panels. Same nested-list structure as accordion — outer `<li>` direct text is the tab label; nested `<ul>` items are panel paragraphs.

**Markdown pattern:**

```markdown
- tabs
- Overview
  - Welcome to this course. No prior experience required.
- Schedule
  - Week 1: Variables & Types
  - Week 2: Functions & Scope
- Resources
  - You Don't Know JS — free online textbook
```

Keyboard navigation: arrow keys move between tabs, Home/End jump to first/last.

---

### `stat-row`

A horizontal row of key-number callout cards. Numbers animate on scroll.

**Markdown pattern:**

```markdown
- stats
- 87% · Completion Rate · accent
- 12 · Weeks · degree
- 5 · Credits · cert
```

**Item format:** `value · label [· color]`
Separator: `·` or ` | `.
**Color keywords:** `accent` · `cert` · `degree` · `success` · `error` · `neutral` · or any hex colour (e.g. `#e8a838`).
Numeric values animate with a count-up on scroll into view. Non-numeric values (e.g. `A+`, `$0`) display immediately.

## Development

Open `demo/index.html` directly in a browser to preview components without Canvas.

## Repo Structure

```
trillian/
  components/          # One JS file per component
  tokens/              # Design tokens (colours, spacing, type scale)
  demo/                # Local preview pages
  README.md
```
