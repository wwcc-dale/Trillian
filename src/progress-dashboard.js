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
import styles from './progress-dashboard.css';

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
  injectOnce('trl-dash-styles', styles);
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
