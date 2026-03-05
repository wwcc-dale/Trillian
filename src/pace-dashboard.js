/**
 * Pace Dashboard
 *
 * Shows a student's learning pace relative to the expected course timeline,
 * a projected completion date, and optional on/off-track vs a target date.
 *
 * Page visits are tracked by page-tracker.js (must be loaded on all pages).
 * This component reads that log and renders the derived metrics.
 *
 * Markup (markdown):
 *   - pace-dashboard
 *   - total-pages: 48
 *   - start-date:  2025-01-13
 *   - end-date:    2025-05-02
 *   - target-date: 2025-04-01    ← optional: shows days before/after target
 *
 * Storage key (shared with page-tracker):
 *   trl-pace-log-{courseId}-{userId}   (per Canvas origin, per course, per user)
 */
import { injectOnce, onVisible, watchForNew } from './utils.js';

const MARKER = 'pace-dashboard';

// ── Pace zones ──────────────────────────────────────────────────────────────
// paceRatio: actual_progress_fraction / expected_progress_fraction
// 1.0 = exactly on schedule; <1 = behind; >1 = ahead

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

// ── SVG gauge ───────────────────────────────────────────────────────────────
// Semicircle speedometer. Uses stroke-dasharray + rotate (same technique as
// progress-dashboard) — avoids SVG arc path direction complexity.
//
// Zones: 5 equal segments covering left→top→right (180° of arc).
// Needle: line from centre, angle mapped from paceRatio [0–2] → [180°–0°].

const NS  = 'http://www.w3.org/2000/svg';
const R   = 88;           // arc radius
const SW  = 20;           // zone stroke-width
const CX  = 130, CY = 130;
const CIRC = 2 * Math.PI * R;
const SEMI = CIRC / 2;    // full semicircle arc length
const ZONE_LEN = SEMI / 5;

function el(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  return e;
}

// Needle tip position for a given paceRatio (clamped [0,2] → angle [180°,0°])
function needlePt(pace) {
  const angle = (180 - Math.min(2, Math.max(0, pace)) * 90) * Math.PI / 180;
  const nr = R - SW / 2 - 4; // just inside the arc
  return [CX + nr * Math.cos(angle), CY - nr * Math.sin(angle)];
}

function buildGauge(pace) {
  const zone = zoneFor(pace);
  const svg  = el('svg', { viewBox: '0 0 260 138', 'aria-hidden': 'true', style: 'width:100%' });

  // One group, rotated so the semicircle sits at the TOP (left→top→right).
  // rotate(180) makes the stroke start at 9-o'clock and sweep clockwise through the top.
  // Each zone circle uses a 3-value stroke-dasharray: [skip] [show] [gap]
  // where skip = i*ZONE_LEN positions the visible arc at the correct zone.
  const g = el('g', { transform: 'rotate(180 ' + CX + ' ' + CY + ')' });

  ZONES.forEach((z, i) => {
    const skip = (i * ZONE_LEN).toFixed(2);
    const rest = (CIRC - (i + 1) * ZONE_LEN).toFixed(2);
    g.appendChild(el('circle', {
      cx: CX, cy: CY, r: R,
      fill: 'none', stroke: z.color,
      'stroke-width': SW,
      'stroke-dasharray': skip + ' ' + ZONE_LEN.toFixed(2) + ' ' + rest,
      opacity: zone === z ? '1' : '0.18',
      'stroke-linecap': 'butt',
    }));
  });

  svg.appendChild(g);

  // Zone separator tick marks (4 marks between 5 zones).
  // Each at paceRatio 0.4, 0.8, 1.2, 1.6 → SVG angle = 180 - ratio*90
  [0.4, 0.8, 1.2, 1.6].forEach(p => {
    const ang = (180 - p * 90) * Math.PI / 180;
    const ri = R - SW / 2 - 5;
    const ro = R + SW / 2 + 5;
    const xi = CX + ri * Math.cos(ang), yi = CY - ri * Math.sin(ang);
    const xo = CX + ro * Math.cos(ang), yo = CY - ro * Math.sin(ang);
    svg.appendChild(el('line', {
      x1: xi.toFixed(1), y1: yi.toFixed(1),
      x2: xo.toFixed(1), y2: yo.toFixed(1),
      stroke: '#fff', 'stroke-width': '2.5',
    }));
  });

  // Needle
  const [nx, ny] = needlePt(pace);
  svg.appendChild(el('line', {
    x1: CX, y1: CY, x2: nx.toFixed(2), y2: ny.toFixed(2),
    stroke: zone.color, 'stroke-width': '3.5', 'stroke-linecap': 'round',
  }));

  // Pivot dot
  svg.appendChild(el('circle', { cx: CX, cy: CY, r: '7', fill: zone.color }));

  // End labels: "Behind" at left, "Ahead" at right
  function svgText(x, y, anchor, txt) {
    const t = el('text', { x, y, 'text-anchor': anchor, 'font-size': '10', fill: '#bbb', 'font-family': 'system-ui,sans-serif' });
    t.textContent = txt;
    return t;
  }
  svg.appendChild(svgText('14',  '132', 'start', 'Behind'));
  svg.appendChild(svgText('246', '132', 'end',   'Ahead'));

  return svg;
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
      margin: 6px 0 2px;
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
    @media (prefers-reduced-motion: reduce) {
      .trl-pace-widget { transition: none; opacity: 1; }
    }
  `);
}

// ── Data helpers ─────────────────────────────────────────────────────────────

function logKey() {
  const E = window.ENV;
  return 'trl-pace-log-' + (E && E.COURSE_ID || 'demo') + '-' + (E && E.current_user_id || 'demo');
}

function getLog() {
  try {
    const v = localStorage.getItem(logKey());
    const a = v ? JSON.parse(v) : [];
    return Array.isArray(a) ? a : [];
  } catch (_) { return []; }
}

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

  // Parse key-value pairs from list items
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
  if (!totalPages || !startDate || !endDate) return;

  const log          = getLog();
  const pagesVisited = log.length;
  const now          = Date.now();
  const msElapsed    = Math.max(43200000, now - startDate.getTime()); // min 12h
  const msTotal      = endDate.getTime() - startDate.getTime();
  const daysElapsed  = msElapsed / 86400000;

  const expectedFrac = Math.min(1, msElapsed / msTotal);
  const actualFrac   = pagesVisited / totalPages;
  const pace         = expectedFrac > 0 ? actualFrac / expectedFrac : 0;

  const pagesPerDay    = pagesVisited / daysElapsed;
  const remaining      = totalPages - pagesVisited;
  const projectedDate  = (pagesPerDay > 0 && remaining > 0)
    ? new Date(now + (remaining / pagesPerDay) * 86400000)
    : (pagesVisited >= totalPages ? new Date(now) : null);

  const zone = zoneFor(pace);

  // ── Build widget ───────────────────────────────────────────────────────────

  const wrap = document.createElement('div');
  wrap.className = 'trl-pace-widget';

  // Gauge
  wrap.appendChild(buildGauge(pace));

  // Zone label
  const lbl = document.createElement('p');
  lbl.className = 'trl-pace-label';
  lbl.textContent = zone.label;
  lbl.style.color = zone.color;
  wrap.appendChild(lbl);

  // Sub-label
  const sub = document.createElement('p');
  sub.className = 'trl-pace-sub';
  const pct = Math.round(actualFrac * 100);
  sub.textContent = pagesVisited === 0
    ? 'Visit course pages to begin tracking'
    : pct + '% complete';
  wrap.appendChild(sub);

  // Stats rows
  const stats = document.createElement('div');
  stats.className = 'trl-pace-stats';

  function row(label, value) {
    const r = document.createElement('div');
    r.className = 'trl-pace-row';
    const l = document.createElement('span'); l.className = 'trl-pace-row-label'; l.textContent = label;
    const v = document.createElement('span'); v.className = 'trl-pace-row-value'; v.textContent = value;
    r.appendChild(l); r.appendChild(v);
    stats.appendChild(r);
  }

  row('Pages visited', pagesVisited + ' of ' + totalPages);
  row('Projected finish', projectedDate ? fmt(projectedDate) : '—');
  row('Course ends', fmt(endDate));

  // On/off track pill
  if (targetDate && projectedDate) {
    const diff = Math.round((targetDate - projectedDate) / 86400000);
    const yes  = diff >= 0;
    const pill = document.createElement('div');
    pill.className = 'trl-pace-track-pill ' + (yes ? 'trl-pace-track-yes' : 'trl-pace-track-no');
    const icon = yes ? '✓' : '✗';
    const days = Math.abs(diff);
    pill.textContent = yes
      ? icon + ' ' + days + ' day' + (days !== 1 ? 's' : '') + ' before your target'
      : icon + ' ' + days + ' day' + (days !== 1 ? 's' : '') + ' after your target';
    stats.appendChild(pill);
  }

  wrap.appendChild(stats);
  ul.replaceWith(wrap);
  onVisible(wrap, () => wrap.classList.add('trl-pace-in'));
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
