/**
 * Progress Dashboard Widget
 *
 * Markup (markdown):
 *   - progress-dashboard
 *   - session: 5
 *   - module: 1
 *   - course-name: Web Design Fundamentals
 *   - course-code: WEB 101
 *   - program-short-name: Short Cert
 *   - program-cert-name: Certificate
 *   - program-degree-name: AAS
 *
 * Supported keys: see DEFAULTS below.
 */
import { hexA, ease, injectOnce, watchForNew } from './utils.js';

// ── SVG arc geometry ──────────────────────────────────────────────────────

const RING  = 168;
const SW    = Math.round(RING * 0.12);
const R     = (RING - SW) / 2;
const CX    = RING / 2;
const CY    = RING / 2;
const CIRC  = 2 * Math.PI * R;
const TRACK = CIRC * (300 / 360);
const GAP   = CIRC - TRACK;
const ROT   = 120;

// ── Defaults ──────────────────────────────────────────────────────────────

const DEFAULTS = {
  'session':               0,
  'module':                0,
  'course-order':          1,
  'course-name':           '',
  'course-code':           '',
  'total-sessions':        25,
  'credits-per-course':    5,
  'credits-per-session':   0.2,
  'milestone-mini':        20,
  'milestone-cert':        45,
  'milestone-degree':      90,
  'program-short-name':    '',
  'program-short-title':   'Short Certificate',
  'program-cert-name':     '',
  'program-cert-title':    'Certificate',
  'program-degree-name':   '',
  'program-degree-title':  'AAS Degree',
  'accent-color':          '#4a90d9',
  'cert-color':            '#7b68ee',
  'degree-color':          '#e8a838',
  'bg-color':              '#ffffff',
  'track-color':           '#e8e4df',
  'layout':                'row',
};

// ── Styles ────────────────────────────────────────────────────────────────

function injectStyles() {
  injectOnce('trl-dash-styles', `
    .trl-dash-widget {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .trl-dash-card {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 36px;
      background: var(--trl-dash-bg);
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08);
      max-width: 640px;
      width: 100%;
      box-sizing: border-box;
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .trl-dash-card.trl-dash-visible { opacity: 1; transform: translateY(0); }
    .trl-dash-header { display: flex; flex-direction: column; gap: 4px; }
    .trl-dash-heading {
      margin: 0;
      font-size: 22px;
      font-weight: 800;
      color: #333;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    .trl-dash-heading .trl-dash-code {
      font-size: 0.55em;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.04em;
      margin-left: 0.5em;
      vertical-align: middle;
    }
    .trl-dash-session-heading {
      margin: 0;
      font-size: 13px;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.01em;
    }
    .trl-dash-session-heading .trl-dash-part { font-size: 0.9em; }
    .trl-dash-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 36px;
    }
    .trl-dash-body.trl-dash-col { flex-direction: column; }
    .trl-dash-gauge-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      flex-shrink: 0;
    }
    .trl-dash-gauge-wrap {
      position: relative;
      width: ${RING}px;
      height: ${RING}px;
    }
    .trl-dash-gauge-wrap svg { display: block; overflow: visible; }
    .trl-dash-track {
      fill: none;
      stroke: var(--trl-dash-track);
      stroke-width: ${SW};
      stroke-linecap: round;
      stroke-dasharray: ${TRACK.toFixed(2)} ${GAP.toFixed(2)};
    }
    .trl-dash-arc {
      fill: none;
      stroke: var(--trl-dash-accent);
      stroke-width: ${SW};
      stroke-linecap: round;
      stroke-dasharray: ${CIRC.toFixed(2)};
      stroke-dashoffset: ${CIRC.toFixed(2)};
      transition: stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1);
      filter: drop-shadow(0 0 4px var(--trl-dash-accent-55));
    }
    @keyframes trl-dash-glow {
      0%   { filter: drop-shadow(0 0  4px var(--trl-dash-accent-55)); }
      40%  { filter: drop-shadow(0 0 12px var(--trl-dash-accent-85)); }
      100% { filter: drop-shadow(0 0  5px var(--trl-dash-accent-55)); }
    }
    .trl-dash-arc.trl-dash-glow { animation: trl-dash-glow 1.2s ease-out forwards; }
    .trl-dash-centre {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      pointer-events: none;
    }
    .trl-dash-credit-num {
      font-size: ${Math.round(RING * 0.46)}px;
      font-weight: 800;
      line-height: 1;
      color: var(--trl-dash-accent);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }
    .trl-dash-credit-lbl {
      font-size: ${Math.round(RING * 0.072)}px;
      font-weight: 700;
      color: #bbb;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .trl-dash-bars-col {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    .trl-dash-bar-group { display: flex; flex-direction: column; gap: 7px; }
    .trl-dash-bar-header { display: flex; align-items: baseline; gap: 8px; }
    .trl-dash-bar-name  { font-size: 13px; font-weight: 600; color: #333; }
    .trl-dash-bar-title { font-size: 11px; font-weight: 400; color: #aaa; }
    .trl-dash-bar-track {
      height: 10px;
      background: var(--trl-dash-track);
      border-radius: 5px;
      overflow: hidden;
      position: relative;
    }
    .trl-dash-bar-fill {
      position: absolute;
      inset: 0 auto 0 0;
      border-radius: 5px;
      width: 0%;
      transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-dash-bar-fill.trl-dash-mini   { background: linear-gradient(90deg, var(--trl-dash-accent-60), var(--trl-dash-accent)); }
    .trl-dash-bar-fill.trl-dash-cert   { background: linear-gradient(90deg, var(--trl-dash-cert-60),   var(--trl-dash-cert));   }
    .trl-dash-bar-fill.trl-dash-degree { background: linear-gradient(90deg, var(--trl-dash-degree-60), var(--trl-dash-degree)); }
    @media (prefers-reduced-motion: reduce) {
      .trl-dash-card, .trl-dash-arc, .trl-dash-bar-fill { transition: none; }
      .trl-dash-card { opacity: 1; transform: none; }
    }
  `);
}

// ── Identify + parse ──────────────────────────────────────────────────────

const MARKER = 'progress-dashboard';

function isDashboard(ul) {
  const first = ul.querySelector('li:first-child');
  return first && first.textContent.trim().toLowerCase() === MARKER;
}

function parseList(ul) {
  const attrs = Object.assign({}, DEFAULTS);
  Array.from(ul.querySelectorAll('li')).slice(1).forEach(li => {
    const text  = li.textContent.trim();
    const colon = text.indexOf(':');
    if (colon > 0) {
      const key = text.slice(0, colon).trim();
      const val = text.slice(colon + 1).trim();
      if (key && val !== '') attrs[key] = val;
    }
  });
  return attrs;
}

// ── Compute derived values ────────────────────────────────────────────────

function compute(a) {
  const session     = parseFloat(a['session'])             || 0;
  const mod         = parseFloat(a['module'])              || 0;
  const courseOrder = Math.max(1, parseFloat(a['course-order']) || 1);
  const totalSess   = parseFloat(a['total-sessions'])      || 25;
  const cpc         = parseFloat(a['credits-per-course'])  || 5;
  const cps         = parseFloat(a['credits-per-session']) || 0.2;
  const mMini       = parseFloat(a['milestone-mini'])      || 0;
  const mCert       = parseFloat(a['milestone-cert'])      || 0;
  const mDeg        = parseFloat(a['milestone-degree'])    || 0;

  const totalCredits = (courseOrder - 1) * cpc + session * cps;
  const progressLen  = TRACK * Math.min(session / totalSess, 1);
  const creditNum    = Math.floor(mod);

  const miniPct   = mMini ? Math.min(100, totalCredits / mMini * 100) : 0;
  const certPct   = mCert ? Math.min(100, totalCredits / mCert * 100) : 0;
  const degreePct = mDeg  ? Math.min(100, totalCredits / mDeg  * 100) : 0;

  let sessionLabel = '';
  if (session > 0) {
    const base     = Math.floor(session);
    const part     = Math.round((session % 1) * 10);
    const partHtml = part > 0 ? ` <span class="trl-dash-part">(Part ${part})</span>` : '';
    sessionLabel = `Session ${base}${partHtml}, of ${totalSess}`;
  }

  return { session, creditNum, progressLen, sessionLabel, miniPct, certPct, degreePct };
}

// ── Build ─────────────────────────────────────────────────────────────────

function build(attrs) {
  const d = compute(attrs);

  const accent  = attrs['accent-color'];
  const certCol = attrs['cert-color'];
  const degCol  = attrs['degree-color'];
  const layout  = attrs['layout'];

  const courseName = attrs['course-name'];
  const courseCode = attrs['course-code'];
  const shortName  = attrs['program-short-name'];
  const shortTitle = attrs['program-short-title'];
  const certName   = attrs['program-cert-name'];
  const certTitle  = attrs['program-cert-title'];
  const degName    = attrs['program-degree-name'];
  const degTitle   = attrs['program-degree-title'];

  const barHtml = (name, title, cls, pct) => !name ? '' : `
    <div class="trl-dash-bar-group">
      <div class="trl-dash-bar-header">
        <span class="trl-dash-bar-name">${name}</span>
        <span class="trl-dash-bar-title">${title}</span>
      </div>
      <div class="trl-dash-bar-track"
           role="progressbar"
           aria-label="${name} progress"
           aria-valuenow="${Math.round(pct)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="trl-dash-bar-fill ${cls}" data-pct="${pct.toFixed(2)}"></div>
      </div>
    </div>`;

  const wrap = document.createElement('div');
  wrap.className = 'trl-dash-widget';

  wrap.style.setProperty('--trl-dash-accent',    accent);
  wrap.style.setProperty('--trl-dash-accent-55', hexA(accent, 0.55));
  wrap.style.setProperty('--trl-dash-accent-60', hexA(accent, 0.60));
  wrap.style.setProperty('--trl-dash-accent-85', hexA(accent, 0.85));
  wrap.style.setProperty('--trl-dash-cert',      certCol);
  wrap.style.setProperty('--trl-dash-cert-60',   hexA(certCol, 0.60));
  wrap.style.setProperty('--trl-dash-degree',    degCol);
  wrap.style.setProperty('--trl-dash-degree-60', hexA(degCol,  0.60));
  wrap.style.setProperty('--trl-dash-bg',        attrs['bg-color']);
  wrap.style.setProperty('--trl-dash-track',     attrs['track-color']);

  wrap.innerHTML = `
    <div class="trl-dash-card" role="region" aria-label="Student Progress Dashboard">
      <div class="trl-dash-header">
        <h1 class="trl-dash-heading">
          ${courseName || ''}${courseCode ? `<span class="trl-dash-code">${courseCode}</span>` : ''}
        </h1>
        ${d.sessionLabel ? `<h4 class="trl-dash-session-heading">${d.sessionLabel}</h4>` : ''}
      </div>
      <div class="trl-dash-body${layout === 'column' ? ' trl-dash-col' : ''}">
        <div class="trl-dash-gauge-col">
          <div class="trl-dash-gauge-wrap">
            <svg width="${RING}" height="${RING}" viewBox="0 0 ${RING} ${RING}" aria-hidden="true">
              <g transform="rotate(${ROT} ${CX} ${CY})">
                <circle class="trl-dash-track" cx="${CX}" cy="${CY}" r="${R.toFixed(2)}"/>
                <circle class="trl-dash-arc"   cx="${CX}" cy="${CY}" r="${R.toFixed(2)}"/>
              </g>
            </svg>
            <div class="trl-dash-centre">
              <span class="trl-dash-credit-num" data-target="${d.creditNum}">0</span>
              <span class="trl-dash-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="trl-dash-bars-col">
          ${barHtml(shortName, shortTitle, 'trl-dash-mini',   d.miniPct)}
          ${barHtml(certName,  certTitle,  'trl-dash-cert',   d.certPct)}
          ${barHtml(degName,   degTitle,   'trl-dash-degree', d.degreePct)}
        </div>
      </div>
    </div>`;

  return { wrap, data: d };
}

// ── Animate ───────────────────────────────────────────────────────────────

function animate(wrap, d) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const card = wrap.querySelector('.trl-dash-card');
  const arc  = wrap.querySelector('.trl-dash-arc');
  const num  = wrap.querySelector('.trl-dash-credit-num');
  const bars = wrap.querySelectorAll('.trl-dash-bar-fill');
  const arcTarget = (CIRC - d.progressLen).toFixed(2);

  requestAnimationFrame(() => card && card.classList.add('trl-dash-visible'));

  if (reduced) {
    if (arc) arc.style.strokeDashoffset = arcTarget;
    if (num) num.textContent = d.creditNum;
    bars.forEach(b => { b.style.width = `${b.dataset.pct}%`; });
    return;
  }

  if (arc) {
    setTimeout(() => {
      arc.style.strokeDashoffset = arcTarget;
      setTimeout(() => arc.classList.add('trl-dash-glow'), 1350);
    }, 250);
  }

  if (num) {
    const target = d.creditNum;
    if (target > 0) {
      const dur = Math.max(500, Math.min(1200, target * 150));
      const t0  = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        num.textContent = Math.round(ease(p) * target);
        if (p < 1) requestAnimationFrame(tick);
      };
      setTimeout(() => requestAnimationFrame(tick), 250);
    } else {
      num.textContent = 0;
    }
  }

  bars.forEach((bar, i) => {
    setTimeout(() => { bar.style.width = `${bar.dataset.pct}%`; }, 400 + i * 180);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────

function initOne(ul) {
  const attrs = parseList(ul);
  const { wrap, data } = build(attrs);
  ul.replaceWith(wrap);

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animate(wrap, data); obs.disconnect(); }
    }, { threshold: 0.25 });
    obs.observe(wrap);
  } else {
    animate(wrap, data);
  }
}

function initAll() {
  injectStyles();
  document.querySelectorAll('ul').forEach(ul => { if (isDashboard(ul)) initOne(ul); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('ul', isDashboard, ul => { injectStyles(); initOne(ul); });
