# BUS 261 — Claude Onboarding
## Graphic Design: Interface Design

**Repository:** `wwcc-dale/10-ui-design-trillian`

This file brings you up to speed on a course-construction project for
**BUS 261** at Walla Walla Community College. Read it fully before
generating any content. The **universal authoring context** document
will also be provided — that file contains the Zaphod file formats,
frontmatter schemas, question bank syntax, rubric YAML, and hard rules
that govern all course construction. This file records the
course-specific decisions made before you arrived.

---

## 1. What this project is

A complete 25-session, 5-credit self-paced Canvas course built with the
**Zaphod** offline authoring system. The course teaches UI/UX design
using Penpot (a LAN-hosted open-source design tool) as the hands-on
software platform.

**Instructor:** Dale Chapman — dale.chapman@wwcc.edu (also the help
email for `variables.yaml`).

**Repository:** This is a standalone repo, separate from Trillian.
It has a direct relationship to Trillian described in §3 below.

---

## 2. Master Course Outline (MCO) — official, fixed

```
Course code:    BUS 261
Course title:   Graphic Design: Interface Design
Credits:        1–5 (variable — students may stop at any credit boundary)
Description:    Introduction to Web and app design using a software
                platform. Focuses on the point of contact between the
                user and a system. Addresses aesthetics, user experience,
                user behavior, navigation, function, and accessibility.
                Students develop and revise various user interfaces as
                feedback informs design decisions.
LEC hours/wk:   5
OEE permitted:  Yes (open entry/exit — rolling enrollment)
Grading:        Graded
CIP:            52.0201
```

### Official Course Outcomes (CLOs) — verbatim, inflexible

```yaml
CLO1: Direct user behavior through interface design
CLO2: Analyze and improve design via the User Experience (UX) process
CLO3: Apply the principles of design to create digital layouts
CLO4: Employ the design process, developing a strategy with goals
      and tactics to support it
CLO5: Utilize a web design software platform
```

Every CLO must appear in at least one rubric criterion and at least one
quiz question per the universal authoring rules.

### Official Course Topics (from MCO)

- Typography
- Layout and composition
- Principles of design
- Using imagery
- Thematic approaches to design
- Usability

---

## 3. Relationship to Trillian

**Trillian** is a Canvas LMS component library Dale built. Components
are authored as plain markdown lists in Canvas pages and transformed
into rendered widgets by JavaScript loaded via Canvas Custom JS. The
relevant components already built:

| Component | Markdown trigger | What it renders |
|-----------|-----------------|-----------------|
| `progress-dashboard` | `- progress-dashboard` | Horseshoe gauge + milestone bars |
| `alert` | `> alert: warning` | Callout box with icon |
| `checklist` | `- checklist: Title` | Interactive checkbox list |
| `buttons` | `- buttons` | Flex row of styled links |
| `accordion` | `- accordion: Title` | Expandable sections |
| `tabs` | `- tabs` | Tabbed panels |
| `stat-row` | `- stats` | Row of animated number cards |

**Why this matters for BUS 261:** The course site students work in
*is itself* a design system built with exactly the methodology they are
learning. This is named explicitly in the course content — students
are using Trillian components as learners before they understand what
they are, and later realize they've been living inside the subject
matter of the course.

### The design → implementation → reflection pipeline

This is the signature pedagogical feature of this course. It has three
phases:

**Phase 1 — Design (sessions 6–20):** Students build a complete design
system in Penpot. Every component they design has a direct Trillian
counterpart:

| Session | Penpot deliverable | Trillian counterpart |
|---------|--------------------|---------------------|
| 6–8 | Color, type, spacing tokens | CSS custom properties across all components |
| 9 | Button — all states | `buttons.js` |
| 11 | Form elements | future component |
| 12 | Card | future component |
| 13 | Alert / callout | `alert.js` |
| 14 | Progress / stat block | `stat-row.js`, `progress-dashboard.js` |
| 16 | Navigation / tabs | `tabs.js` |

**Phase 2 — Implementation (sessions 21–22):** Dale takes student-
designed token sets (color + typography), selects or composites the
best, and applies them to the live course pages. This is achievable
without new JS — Trillian components already use CSS custom properties,
so a theme swap requires only changing token values. Students open
Canvas and see *their* design decisions running on the interface they've
used all term.

**Phase 3 — Reflection (session 24, part of Project 5):** The final
written reflection asks:
- What did I design and why did I make those choices?
- What got built from my design?
- What works well from a user perspective?
- What would I change, and what does that tell me about
  the gap between design intent and user experience?

This teaches the design–implementation gap experientially. Write every
session 6–14 with a brief forward reference: "The component you design
today is the same type you've been using in this course."

---

## 4. COURSE-CONFIG — current state

```
COURSE-CONFIG
────────────────────────────────────────────────────────────────────────
COURSE_CODE:         BUS 261
COURSE_TITLE:        Graphic Design: Interface Design
CREDIT_TITLES:
  Credit 1:  UX Foundations                      (sessions 1–5)
  Credit 2:  Design Tokens and Atoms             (sessions 6–10)
  Credit 3:  Molecules and Visual Systems        (sessions 11–15)
  Credit 4:  Organisms and Interaction Patterns  (sessions 16–20)
  Credit 5:  Templates, Testing, and Handoff     (sessions 21–25)
PRIMARY_TEXTBOOK:
  Marsh, Joel. UX for Beginners: 100 Short Lessons to Get You Started.
  O'Reilly Media, 2016. ISBN 978-1-491-91268-7.
  Structure: 100 short lessons across 15 chapters.
  Page ranges: [VERIFY — Dale must supply TOC before session content
  is generated. Use [VERIFY: chapter/lesson title] as placeholder.]
SECONDARY_TEXTBOOK:
  Frost, Brad. Atomic Design. Brad Frost, 2016.
  Stored as LAN PDF — reference by chapter/section, no URLs.
COURSE_SOFTWARE:     Penpot — LAN instance, sandboxed (shared class
                     library available). URL: {{var:penpot_url}}
INSTRUCTOR:          Dale Chapman — dale.chapman@wwcc.edu
HELP_EMAIL:          dale.chapman@wwcc.edu
CLOS:
  CLO1: Direct user behavior through interface design
  CLO2: Analyze and improve design via the User Experience (UX) process
  CLO3: Apply the principles of design to create digital layouts
  CLO4: Employ the design process, developing a strategy with goals
        and tactics to support it
  CLO5: Utilize a web design software platform
VERIFIED_PAGES:      [PENDING — do not generate reading assignments
                     without this; flag all readings [VERIFY]]
GRADING_VARIATIONS:
  Per-session formative assignments added: 25 × 10 pts = 250 pts
  Course total: 1,330 pts (standard schema: 1,080 + 250 formative)
────────────────────────────────────────────────────────────────────────
```

### Full grade breakdown

| Assessment | Qty | Pts each | Total |
|-----------|-----|---------|-------|
| Per-session formative assignments | 25 | 10 | 250 |
| Major project checkpoints | 5 | 100 | 500 |
| Credit quizzes (credits 1, 2, 4) | 3 | 60 | 180 |
| Midterm exam (s15) | 1 | 150 | 150 |
| Final exam (s25) | 1 | 150 | 150 |
| **Total** | | | **1,330** |

---

## 5. Session arc — all 25 sessions

| # | Topic | Marsh focus | Frost focus | Penpot task | CLO |
|---|-------|------------|------------|------------|-----|
| 1 | What is UX? What is UI? | Early chapters — UX overview | Ch. 1: Atomic design intro | Orientation — no Penpot | CLO2, CLO4 |
| 2 | Mental models and user thinking | Mental models, user goals | — | Annotate a UI screenshot | CLO1, CLO2 |
| 3 | Information architecture | IA, navigation basics | — | Sketch a sitemap | CLO4 |
| 4 | Visual hierarchy and design principles | Visual design chapters | — | Annotated hierarchy analysis | CLO1, CLO3 |
| 5 | What is a design system? | — | Ch. 1–2: What atomic design is | **Project 1: Written UI audit** | CLO2, CLO4 |
| 6 | Color theory and semantic color | Color chapters | Atoms — color | Color token set in Penpot | CLO3, CLO5 |
| 7 | Typography systems | Typography chapters | Atoms — type | Type token set | CLO3, CLO5 |
| 8 | Spacing, sizing, and layout grids | — | Atoms — spacing | Spacing + grid tokens | CLO3, CLO5 |
| 9 | Atoms: the button | Affordance, feedback | Atoms | Button — all states | CLO1, CLO5 |
| 10 | Atoms: imagery and icons | — | Atoms — imagery | Icon set + image usage guide | CLO3, CLO5 |
| **s10** | | | | **Project 2: Token set + atoms** | |
| 11 | Molecules: form elements | Forms, input feedback | Molecules | Input, checkbox, select | CLO1, CLO5 |
| 12 | Molecules: cards and containers | Content hierarchy | Molecules | Card component | CLO3, CLO5 |
| 13 | Molecules: alerts and callouts | Feedback, error states | Molecules | Alert component | CLO1, CLO5 |
| 14 | Molecules: progress and status | Progress communication | Molecules | Progress bar + stat block | CLO1, CLO5 |
| 15 | Midterm + Project 3 | Review | Review | **Project 3: Molecules complete** | all |
| 16 | Organisms: navigation patterns | Navigation, wayfinding | Organisms | Navbar / tab strip | CLO1, CLO5 |
| 17 | Organisms: forms | Form UX, error recovery | Organisms | Full form organism | CLO1, CLO5 |
| 18 | Organisms: data display | Data readability | Organisms | Table or dashboard | CLO3, CLO5 |
| 19 | Edge cases: empty, error, loading states | Failure states, trust | Organisms | Edge case screen set | CLO1, CLO2 |
| 20 | User testing basics | Testing, feedback loops | — | **Project 4: Organisms + test plan** | CLO2, CLO4 |
| 21 | Templates: assembling organisms | — | Templates | Template page | CLO3, CLO4, CLO5 |
| 22 | Responsive thinking and layout adaptation | — | Templates | Mobile variant | CLO3, CLO5 |
| 23 | Documentation and design handoff | — | Ch.: Documentation | Annotated component specs | CLO4, CLO5 |
| 24 | Iteration: applying test feedback | Iteration, revision | — | Revised component(s) | CLO2, CLO4 |
| 25 | Final exam + Project 5 | — | — | **Project 5: Complete system + rationale** | all |

### Accessibility thread
Accessibility is not a single session — it runs through the course.
Every relevant session's Key Concepts section includes an
"Accessibility note" callout (using the Trillian `alert` component,
type `info`):

- S6: color contrast ratios (WCAG AA minimum)
- S7: type size and line length
- S9: hit targets (48px min), focus states
- S11: form labels, error messages, required indicators
- S13: not relying on color alone for meaning
- S16: keyboard navigation
- S22: touch targets and breakpoints

Credit 4 graded quiz and the final exam both include accessibility
questions.

---

## 6. Per-session structure

Every session page contains all six sections in this order (from the
universal authoring context §4). Do not omit or reorder.

The **formative assignment** (10 pts) is the artifact produced in
section 4 (Practice Exercise) submitted formally. It is not a separate
task — no additional time is required. The Zaphod file sequence per
session is:

```
01-sN-topic.page          ← all 6 sections; exercise produces artifact
02-sN-topic.assignment    ← submission wrapper + rubric for that artifact
03-sN-topic.quiz          ← ungraded practice quiz
```

At credit-boundary sessions (5, 10, 15, 20, 25):

```
01-sN-topic.page
02-sN-topic.assignment       ← formative
03-sN-major-project.assignment ← project checkpoint (100 pts)
04-sN-topic.quiz             ← ungraded practice
05-sN-credit-0N.quiz         ← graded summative / midterm / final
```

### 3-hour session budget

| Section | Target time |
|---------|------------|
| Reading | 20–25 min |
| Video | 20–25 min (hard cap — longer videos compress exercise time) |
| Key concepts review | 15–20 min |
| Practice exercise → artifact | 60–75 min |
| Submit assignment + practice quiz | 15–20 min |
| Wrap-up | 5 min |
| **Total** | **~2h 45m–2h 55m** |

---

## 7. Rubric conventions

Dale's preferred rubric scale: **5 / 4 / 3 / 2 / 0**

Rubric criteria can be linked to CLOs via an outcome ID field.

**IMPORTANT — rubric format is pending.** Dale offered to provide
example rubrics (one simple formative, one multi-criteria project
rubric) before content generation begins. You must ask for and receive
these examples before writing any rubrics. Specifically confirm:

1. Whether 5/4/3/2/0 are literal point values per criterion
   (so a criterion is always worth max 5 pts) or scale proportionally
   (a 20-pt criterion rates at 20/16/12/8/0)
2. The exact YAML field name for outcome association
3. Dale's preferred language for rating level labels
4. For formative assignments (10 pts each): likely 2 criteria
   at 5 pts each — confirm this structure

---

## 8. Video approach

No external URLs in student-facing content. Videos are YouTube
downloads stored on the LAN server. Each session requires one video
(target 20–25 min).

When writing session content, provide a detailed video suggestion block:

```
[VIDEO SUGGESTION]
Topic: {what the video should cover}
Search terms: {YouTube search terms}
Target duration: {15–25 min}
Key timestamps to look for: {what to confirm is in the video}
Filename once downloaded: {suggested LAN filename}
```

Dale downloads and renames them. You never write a URL.

---

## 9. Major project arc (100 pts × 5 = 500 pts)

| Project | Session | Deliverable |
|---------|---------|------------|
| P1: UI Audit | s5 | Written analysis of an existing product: 3 UX problems identified, evidence cited from Marsh. No Penpot required. |
| P2: Tokens + Atoms | s10 | Penpot export — color tokens, type tokens, spacing tokens, button (all states) |
| P3: Molecules | s15 | Penpot export adds: form element, card, alert, progress component |
| P4: Organisms + Test Plan | s20 | Penpot export adds: navigation, form organism, data display. Plus 1-page user test plan. |
| P5: Complete System + Rationale | s25 | Final Penpot export + 1–2 page written rationale connecting design decisions to UX principles. Includes reflection on the live implementation (see §3 pipeline). |

---

## 10. Variable credit structure

Credits are 1–5 (variable). Students may stop at any credit boundary
and receive a partial credential. Each module must be genuinely complete
in itself. The Getting Started module must explain this clearly —
students should know they are building toward a credential at every
credit boundary.

| Stop at | Credential | What student has |
|---------|-----------|-----------------|
| Credit 1 | 1 credit | UX vocabulary, analysis skills, written UI audit |
| Credit 2 | 2 credits | + token system and atoms in Penpot |
| Credit 3 | 3 credits | + molecule library + midterm |
| Credit 4 | 4 credits | + organisms + tested design system |
| Credit 5 | 5 credits | + documented complete system + final |

---

## 11. Open items — resolve before generating content

| Item | Status | Action |
|------|--------|--------|
| Rubric examples | **Pending** | Ask Dale before writing any rubric |
| Marsh page ranges | **Pending** | Flag all readings `[VERIFY: lesson/chapter title]` |
| Penpot LAN URL | Pending | Use `{{var:penpot_url}}` in all references |
| Video filenames | Pending | Write `[VIDEO SUGGESTION]` blocks; Dale downloads |
| Session 21–22 implementation details | Pending | Dale selects/composites student token set; no action needed until s21 |

---

## 12. Where to start

Suggested generation order once rubric examples are received:

1. `shared/variables.yaml`
2. `shared/session-footer.md`
3. `shared/completion-checklist.md`
4. `00-Getting Started.module/01-s0-welcome.page`
5. Credit 1, session by session (s1 → s5)

Do not generate reading assignment content without verified page ranges.
Write `[VERIFY: lesson title, approx. chapter N]` every time a page
range is needed. Dale will supply the Marsh TOC and you will do a
find-and-replace pass to fill them in.

The universal authoring context document contains all file format
specifications, frontmatter schemas, question bank syntax, and hard
rules. If you have not received it, ask for it before generating
any files.
