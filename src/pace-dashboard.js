/**
 * Pace Dashboard
 *
 * Shows a student's reading rate relative to the expected course timeline,
 * projects a course completion date, and optionally shows on/off-track vs a
 * target date. Can also project program milestone dates (short cert, cert,
 * degree) based on the student's credit accumulation rate.
 *
 * The gauge measures RATE (actual pages/day ÷ required pages/day), not raw
 * progress. pace = 1.0 means the student is reading at exactly the required
 * rate to finish on time.
 *
 * Markup (markdown):
 *   Course pace (required):
 *   - pace-dashboard
 *   - total-pages:        48
 *   - start-date:         2026-01-05
 *   - end-date:           2026-05-01
 *   - target-date:        2026-04-15   ← optional: on/off-track pill vs this date
 *   - pace-metric:        counted      ← optional: visited | counted (default) | completed
 *   - course-id:          demo         ← optional: override ENV.COURSE_ID for storage key
 *   - user-id:            demo         ← optional: override ENV.current_user_id
 *
 *   Program outlook (all optional — section hidden if program-start-date absent):
 *   - program-start-date: 2025-09-01   ← when the student entered the program
 *   - credits-earned:     15           ← credits fully completed before this course
 *   - credits-per-course: 5            ← credit value of current course
 *   - milestone-mini:     20           ← credits required for short certificate
 *   - milestone-cert:     45           ← credits required for certificate
 *   - milestone-degree:   90           ← credits required for AAS degree
 *   - program-short-name: Graphic Design Essentials
 *   - program-cert-name:  Digital Design
 *   - program-degree-name: Graphic Design & Web Development
 *
 * Storage (written by page-tracker.js):
 *   trl-pace-data-{courseId}-{userId} → [{url, t, vs, ss, ts}]
 */
import { injectOnce, onVisible, watchForNew } from './utils.js';

const MARKER = 'pace-dashboard';

// ── Pace zones ──────────────────────────────────────────────────────────────
// paceRatio: actual_progress / expected_progress. 1.0 = exactly on schedule.

const ZONES = [
  { lo: 0,   color: '#ef4444', label: 'Way Behind' },
  { lo: 0.4, color: '#f59e0b', label: 'Behind'     },
  { lo: 0.8, color: '#22c55e', label: 'On Track'   },
  { lo: 1.2, color: '#3b82f6', label: 'Ahead'      },
  { lo: 1.6, color: '#a855f7', label: 'Way Ahead'  },
];

function zoneFor(pace) {
  let z = ZONES[0];
  for (const zone of ZONES) { if (pace >= zone.lo) z = zone; }
  return z;
}

// ── SVG gauge ────────────────────────────────────────────────────────────────
// Horseshoe-style arc-fill semicircle — same visual language as progress-dashboard.
//
// Background: dim gray semicircle track (left → top → right, 180°).
// Foreground: zone-colored arc that grows from left toward right as pace increases.
//   paceRatio 0   → arc empty  (Way Behind, gauge shows nothing)
//   paceRatio 1   → arc halfway through semicircle (On Track, at the top)
//   paceRatio 2   → arc fills the full semicircle (Way Ahead, at the right)
//
// Tick marks at the 4 zone boundaries (pace 0.4 / 0.8 / 1.2 / 1.6).
// Zone labels: "Behind" at left end, "Ahead" at right end.

const NS   = 'http://www.w3.org/2000/svg';
const R    = 90;
const SW   = 18;                    // stroke width
const CX   = 130, CY = 130;
const CIRC = 2 * Math.PI * R;
const SEMI = CIRC / 2;             // visible track = top semicircle

function el(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  return e;
}

function toXY(deg) {
  const r = deg * Math.PI / 180;
  return [CX + R * Math.cos(r), CY - R * Math.sin(r)];
}

function buildGauge(pace) {
  const zone    = zoneFor(pace);
  const fillLen = Math.min(SEMI, Math.max(0, (pace / 2) * SEMI));
  const offset  = CIRC - fillLen;

  // viewBox height 145 gives room for the hub circle (r=9) below CY=130
  const svg = el('svg', { viewBox: '0 0 260 145', 'aria-hidden': 'true', style: 'width:100%' });

  // rotate(180) makes the stroke start at 9-o'clock, sweeping clockwise through the top.
  const g = el('g', { transform: 'rotate(180 ' + CX + ' ' + CY + ')' });

  // Gray background track (full semicircle) — round caps give horseshoe pill ends
  g.appendChild(el('circle', {
    cx: CX, cy: CY, r: R,
    fill: 'none', stroke: '#e8e4df',
    'stroke-width': SW,
    'stroke-dasharray': SEMI.toFixed(2) + ' ' + SEMI.toFixed(2),
    'stroke-linecap': 'round',
  }));

  // Colored fill arc — round cap on leading edge
  const arc = el('circle', {
    cx: CX, cy: CY, r: R,
    fill: 'none', stroke: zone.color,
    'stroke-width': SW,
    'stroke-dasharray': CIRC.toFixed(2),
    'stroke-dashoffset': CIRC.toFixed(2), // always start at 0 for animation
    'stroke-linecap': 'round',
  });
  arc.style.transition = 'stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.3s ease';
  g.appendChild(arc);

  svg.appendChild(g);

  // Zone boundary tick marks (pace 0.4, 0.8, 1.2, 1.6 → angles 144°, 108°, 72°, 36°)
  [0.4, 0.8, 1.2, 1.6].forEach(p => {
    const angle = 180 - p * 90;
    const [x1, y1] = [CX + (R - SW / 2 - 1) * Math.cos(angle * Math.PI / 180),
                      CY - (R - SW / 2 - 1) * Math.sin(angle * Math.PI / 180)];
    const [x2, y2] = [CX + (R + SW / 2 + 1) * Math.cos(angle * Math.PI / 180),
                      CY - (R + SW / 2 + 1) * Math.sin(angle * Math.PI / 180)];
    svg.appendChild(el('line', {
      x1: x1.toFixed(1), y1: y1.toFixed(1), x2: x2.toFixed(1), y2: y2.toFixed(1),
      stroke: '#fff', 'stroke-width': '2.5',
    }));
  });

  // Needle — drawn pointing LEFT (pace=0), rotated clockwise by pace×90° via CSS
  // Triangle tip reaches just inside the arc; base is at center (covered by hub).
  const NR  = R - SW / 2 - 4;  // tip radius
  const W   = 10;                // half-width of needle base
  const needleG = el('g', {});
  needleG.appendChild(el('polygon', {
    points: (CX - NR).toFixed(1) + ',' + CY
          + ' ' + CX + ',' + (CY - W)
          + ' ' + CX + ',' + (CY + W),
    fill: zone.color,
  }));
  svg.appendChild(needleG);
  needleG.style.transformOrigin = CX + 'px ' + CY + 'px';
  needleG.style.transform = 'rotate(0deg)';
  needleG.style.transition = 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)';

  // End labels
  function txt(x, y, anchor, content) {
    const t = el('text', { x, y, 'text-anchor': anchor,
      'font-size': '10', fill: '#bbb', 'font-family': 'system-ui,sans-serif' });
    t.textContent = content;
    return t;
  }
  svg.appendChild(txt('18',  '132', 'start', 'Behind'));
  svg.appendChild(txt('242', '132', 'end',   'Ahead'));

  return { svg, arc, needleG };
}

// ── Styles ───────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('trl-pace-styles', `
    .trl-pace-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      padding: 20px 20px 18px;
      max-width: 320px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-pace-widget.trl-pace-in { opacity: 1; }
    .trl-pace-label {
      font-size: 22px;
      font-weight: 800;
      text-align: center;
      margin: 4px 0 2px;
      letter-spacing: -0.02em;
    }
    .trl-pace-sub {
      font-size: 12px;
      color: #aaa;
      text-align: center;
      margin: 0 0 14px;
    }
    .trl-pace-stats {
      border-top: 1px solid #f0f0f0;
      padding-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .trl-pace-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 13px;
    }
    .trl-pace-row-label { color: #aaa; }
    .trl-pace-row-value { font-weight: 600; color: #222; }
    .trl-pace-row-value.trl-pace-dim { color: #bbb; font-weight: 400; }
    .trl-pace-track-pill {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 10px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      margin-top: 4px;
    }
    .trl-pace-track-yes { background: #f0fdf4; color: #15803d; }
    .trl-pace-track-no  { background: #fef2f2; color: #b91c1c; }
    .trl-pace-program {
      border-top: 1px solid #f0f0f0;
      padding-top: 12px;
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .trl-pace-section-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #ccc;
      margin: 0 0 2px;
    }
    .trl-pace-milestone {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 13px;
      gap: 8px;
    }
    .trl-pace-milestone-name {
      color: #aaa;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .trl-pace-milestone-name strong {
      display: block;
      font-weight: 600;
      color: #555;
      font-size: 11px;
    }
    .trl-pace-milestone-date {
      font-weight: 600;
      color: #222;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .trl-pace-milestone-done {
      font-weight: 600;
      color: #22c55e;
      white-space: nowrap;
      flex-shrink: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-pace-widget { transition: none; opacity: 1; }
    }
  `);
}

// ── Data helpers ─────────────────────────────────────────────────────────────
// Storage: trl-pace-data-{cid}-{uid} → [{url, t, vs, ss, ts}]
//   vs  visible score   0–1  (1 = 45 s+ visible)
//   ss  scroll score    0–1  (1 = scrolled to bottom)
//   ts  tabs score      0–1  (1 = all tabs viewed, or no tabs present)
// Composite: (vs + ss * ts) / 2  → 0–1

function dataKey(cfg) {
  const E = window.ENV;
  const cid = cfg['course-id'] || (E && E.COURSE_ID)       || 'demo';
  const uid = cfg['user-id']   || (E && E.current_user_id) || 'demo';
  return 'trl-pace-data-' + cid + '-' + uid;
}

function loadData(cfg) {
  try { return JSON.parse(localStorage.getItem(dataKey(cfg)) || '[]') || []; }
  catch (_) { return []; }
}

function composite(e) { return (e.vs + e.ss * e.ts) / 2; }

function parseDate(s) {
  if (!s) return null;
  const d = new Date(s);
  return isNaN(d) ? null : d;
}

function fmt(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Component init ───────────────────────────────────────────────────────────

function initOne(ul) {
  injectStyles();

  const cfg = {};
  Array.from(ul.querySelectorAll(':scope > li')).slice(1).forEach(li => {
    const t = li.textContent.trim();
    const i = t.indexOf(':');
    if (i > -1) cfg[t.slice(0, i).trim().toLowerCase()] = t.slice(i + 1).trim();
  });

  const totalPages = parseInt(cfg['total-pages'] || '0', 10);
  const startDate  = parseDate(cfg['start-date']);
  const endDate    = parseDate(cfg['end-date']);
  const targetDate = parseDate(cfg['target-date'] || '');
  const metric     = (cfg['pace-metric'] || 'counted').toLowerCase(); // visited|completed|counted
  if (!totalPages || !startDate || !endDate) return;

  const data      = loadData(cfg);
  // visited:   vs ≥ 0.5  (22.5 s+ in foreground)
  // completed: vs = 1 AND ss × ts = 1  (fully read + scrolled + all tabs)
  // counted:   composite ≥ 0.5  (default — balanced metric)
  const visited   = data.filter(e => e.vs   >= 0.5).length;
  const completed = data.filter(e => e.vs   >= 1 && e.ss * e.ts >= 1).length;
  const counted   = data.filter(e => composite(e) >= 0.5).length;

  const pagesUsed = metric === 'completed' ? completed
                  : metric === 'visited'   ? visited
                  : counted;

  const now         = Date.now();
  const msElapsed   = Math.max(43200000, now - startDate.getTime()); // min 12 h
  const msTotal     = endDate.getTime() - startDate.getTime();
  const daysElapsed = msElapsed / 86400000;

  const expectedFrac  = Math.min(1, msElapsed / msTotal);
  const pace          = expectedFrac > 0 ? (pagesUsed / totalPages) / expectedFrac : 0;
  const zone          = zoneFor(pace);

  const pagesPerDay   = pagesUsed / daysElapsed;
  const remaining     = totalPages - pagesUsed;
  const projectedDate = (pagesPerDay > 0 && remaining > 0)
    ? new Date(now + (remaining / pagesPerDay) * 86400000)
    : (pagesUsed >= totalPages ? new Date(now) : null);

  // ── Build widget ───────────────────────────────────────────────────────────

  const wrap = document.createElement('div');
  wrap.className = 'trl-pace-widget';

  // Gauge — start at 0 (needle points left), animate to pace on visible
  const { svg, arc, needleG } = buildGauge(0);
  wrap.appendChild(svg);

  // Zone label
  const lbl = document.createElement('p');
  lbl.className = 'trl-pace-label';
  lbl.textContent = zone.label;
  lbl.style.color = zone.color;
  wrap.appendChild(lbl);

  // Sub
  const sub = document.createElement('p');
  sub.className = 'trl-pace-sub';
  const pct = Math.round((pagesUsed / totalPages) * 100);
  sub.textContent = pagesUsed === 0
    ? 'Visit course pages to begin tracking'
    : pct + '% complete' + (metric === 'completed' ? ' (deep reads)' : '');
  wrap.appendChild(sub);

  // Stats
  const stats = document.createElement('div');
  stats.className = 'trl-pace-stats';

  function row(label, value, dim) {
    const r = document.createElement('div'); r.className = 'trl-pace-row';
    const l = document.createElement('span'); l.className = 'trl-pace-row-label'; l.textContent = label;
    const v = document.createElement('span'); v.className = 'trl-pace-row-value' + (dim ? ' trl-pace-dim' : ''); v.textContent = value;
    r.appendChild(l); r.appendChild(v); stats.appendChild(r);
  }

  row('Pages visited',   visited   + ' of ' + totalPages, metric !== 'visited');
  row('Pages counted',   counted   + ' of ' + totalPages, metric !== 'counted');
  row('Pages completed', completed + ' of ' + totalPages, metric !== 'completed');

  if (projectedDate) row('Projected finish', fmt(projectedDate));
  row('Course ends', fmt(endDate));

  if (targetDate && projectedDate) {
    const diff = Math.round((targetDate - projectedDate) / 86400000);
    const yes  = diff >= 0;
    const pill = document.createElement('div');
    pill.className = 'trl-pace-track-pill ' + (yes ? 'trl-pace-track-yes' : 'trl-pace-track-no');
    const days = Math.abs(diff);
    pill.textContent = (yes ? '✓ ' : '✗ ') + days + ' day' + (days !== 1 ? 's' : '')
      + (yes ? ' before' : ' after') + ' your target';
    stats.appendChild(pill);
  }

  wrap.appendChild(stats);

  // ── Program outlook ─────────────────────────────────────────────────────────
  // Requires: program-start-date + credits-earned. All milestone keys optional.
  // Credit accumulation rate uses completed credits + fractional current course.
  // totalCredits = creditsEarned + (pagesUsed / totalPages) × creditsPerCourse

  const programStartDate  = parseDate(cfg['program-start-date'] || '');
  const creditsEarned     = parseFloat(cfg['credits-earned']     || 'NaN');
  const creditsPerCourse  = parseFloat(cfg['credits-per-course'] || '0');

  if (programStartDate && !isNaN(creditsEarned)) {
    const partialCredit   = totalPages > 0 ? (pagesUsed / totalPages) * creditsPerCourse : 0;
    const totalCredits    = creditsEarned + partialCredit;
    const progDaysElapsed = Math.max(1, (now - programStartDate.getTime()) / 86400000);
    const creditRate      = totalCredits / progDaysElapsed; // credits per day

    const MILESTONES = [
      { key: 'milestone-mini',   nameKey: 'program-short-name',   label: 'Short Certificate' },
      { key: 'milestone-cert',   nameKey: 'program-cert-name',    label: 'Certificate'       },
      { key: 'milestone-degree', nameKey: 'program-degree-name',  label: 'AAS Degree'        },
    ];

    const programRows = MILESTONES
      .map(m => ({ ...m, threshold: parseFloat(cfg[m.key] || 'NaN'), name: cfg[m.nameKey] || '' }))
      .filter(m => !isNaN(m.threshold) && m.name);

    if (programRows.length) {
      const prog = document.createElement('div');
      prog.className = 'trl-pace-program';

      const sectionLbl = document.createElement('p');
      sectionLbl.className = 'trl-pace-section-label';
      sectionLbl.textContent = 'Program Outlook';
      prog.appendChild(sectionLbl);

      programRows.forEach(m => {
        const r = document.createElement('div');
        r.className = 'trl-pace-milestone';

        const nameEl = document.createElement('span');
        nameEl.className = 'trl-pace-milestone-name';
        const strong = document.createElement('strong');
        strong.textContent = m.name;
        nameEl.appendChild(strong);
        nameEl.appendChild(document.createTextNode(m.label));

        const dateEl = document.createElement('span');
        if (totalCredits >= m.threshold) {
          dateEl.className = 'trl-pace-milestone-done';
          dateEl.textContent = '✓ Reached';
        } else {
          dateEl.className = 'trl-pace-milestone-date';
          if (creditRate > 0) {
            const daysToGo = (m.threshold - totalCredits) / creditRate;
            dateEl.textContent = fmt(new Date(now + daysToGo * 86400000));
          } else {
            dateEl.textContent = '—';
          }
        }

        r.appendChild(nameEl);
        r.appendChild(dateEl);
        prog.appendChild(r);
      });

      wrap.appendChild(prog);
    }
  }

  ul.replaceWith(wrap);

  // Animate arc + needle in when visible
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  onVisible(wrap, () => {
    wrap.classList.add('trl-pace-in');
    if (!reduced) {
      const targetOffset = CIRC - Math.min(SEMI, Math.max(0, (pace / 2) * SEMI));
      arc.style.strokeDashoffset = targetOffset.toFixed(2);
      arc.style.stroke = zone.color;
      // Needle rotates clockwise from 0° (left=pace 0) by pace×90°
      needleG.style.transform = 'rotate(' + Math.min(180, pace * 90).toFixed(1) + 'deg)';
    } else {
      arc.style.strokeDashoffset = (CIRC - Math.min(SEMI, Math.max(0, (pace / 2) * SEMI))).toFixed(2);
      arc.style.stroke = zone.color;
      needleG.style.transform = 'rotate(' + Math.min(180, pace * 90).toFixed(1) + 'deg)';
    }
  });
}

// ── Identify ─────────────────────────────────────────────────────────────────

function isPace(ul) {
  const first = ul.querySelector('li:first-child');
  return !!first && first.textContent.trim().toLowerCase() === MARKER;
}

function initAll() {
  document.querySelectorAll('ul').forEach(ul => { if (isPace(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isPace, initOne);
