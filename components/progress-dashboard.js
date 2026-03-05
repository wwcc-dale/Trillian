/**
 * Progress Dashboard Widget
 *
 * Finds every <ul class="progress-dashboard"> on the page, reads its <li>
 * key: value pairs, and replaces it with a rendered progress dashboard.
 *
 * Supported keys (all optional — safe defaults apply):
 *   session, module, course-order, course-name
 *   total-sessions, credits-per-course, credits-per-session
 *   milestone-mini, milestone-cert, milestone-degree
 *   program-short-name, program-short-title
 *   program-cert-name,  program-cert-title
 *   program-degree-name, program-degree-title
 *   accent-color, cert-color, degree-color, bg-color, track-color
 *   layout   (row | column)
 */
(function () {
  'use strict';

  // ── SVG arc geometry ─────────────────────────────────────────────────────
  // Horseshoe spans 300° with a 60° gap at the bottom.

  const RING  = 168;
  const SW    = Math.round(RING * 0.12);     // stroke-width  ≈ 20px
  const R     = (RING - SW) / 2;             // arc radius    ≈ 74px
  const CX    = RING / 2;                    // centre        = 84
  const CY    = RING / 2;
  const CIRC  = 2 * Math.PI * R;             // circumference ≈ 464.9px
  const TRACK = CIRC * (300 / 360);          // 300° track    ≈ 387.4px
  const GAP   = CIRC - TRACK;               // 60° gap       ≈  77.5px
  const ROT   = 120;                         // rotate so gap sits at bottom

  // ── Defaults ─────────────────────────────────────────────────────────────

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

  // ── Global stylesheet (injected once) ────────────────────────────────────
  // All colours are CSS custom properties set per-instance via JS,
  // so a single shared stylesheet handles every widget on the page.

  function injectStyles() {
    if (document.getElementById('pd-styles')) return;
    const s = document.createElement('style');
    s.id = 'pd-styles';
    s.textContent = `
      .pd-widget {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /* Card — always column: header on top, body below */
      .pd-card {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 36px;
        background: var(--pd-bg);
        border-radius: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08);
        max-width: 640px;
        width: 100%;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .pd-card.pd-visible { opacity: 1; transform: translateY(0); }

      /* Header */
      .pd-header { display: flex; flex-direction: column; gap: 4px; }

      .pd-heading {
        margin: 0;
        font-size: 22px;
        font-weight: 800;
        color: #333;
        line-height: 1.2;
        letter-spacing: -0.02em;
      }
      .pd-heading .pd-code {
        font-size: 0.55em;
        font-weight: 500;
        color: #aaa;
        letter-spacing: 0.04em;
        margin-left: 0.5em;
        vertical-align: middle;
      }
      .pd-session-heading {
        margin: 0;
        font-size: 13px;
        font-weight: 500;
        color: #aaa;
        letter-spacing: 0.01em;
      }
      .pd-session-heading .pd-part { font-size: 0.9em; }

      /* Body — gauge + bars, direction controlled by layout attr */
      .pd-body {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 36px;
      }
      .pd-body.pd-col { flex-direction: column; }

      /* Gauge */
      .pd-gauge-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        flex-shrink: 0;
      }
      .pd-gauge-wrap {
        position: relative;
        width: ${RING}px;
        height: ${RING}px;
      }
      .pd-gauge-wrap svg { display: block; overflow: visible; }

      .pd-track {
        fill: none;
        stroke: var(--pd-track);
        stroke-width: ${SW};
        stroke-linecap: round;
        stroke-dasharray: ${TRACK.toFixed(2)} ${GAP.toFixed(2)};
      }
      .pd-arc {
        fill: none;
        stroke: var(--pd-accent);
        stroke-width: ${SW};
        stroke-linecap: round;
        stroke-dasharray: ${CIRC.toFixed(2)};
        stroke-dashoffset: ${CIRC.toFixed(2)};
        transition: stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1);
        filter: drop-shadow(0 0 4px var(--pd-accent-55));
      }
      @keyframes pd-glow {
        0%   { filter: drop-shadow(0 0  4px var(--pd-accent-55)); }
        40%  { filter: drop-shadow(0 0 12px var(--pd-accent-85)); }
        100% { filter: drop-shadow(0 0  5px var(--pd-accent-55)); }
      }
      .pd-arc.pd-glow { animation: pd-glow 1.2s ease-out forwards; }

      /* Gauge centre */
      .pd-centre {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        pointer-events: none;
      }
      .pd-credit-num {
        font-size: ${Math.round(RING * 0.46)}px;
        font-weight: 800;
        line-height: 1;
        color: var(--pd-accent);
        letter-spacing: -0.02em;
        font-variant-numeric: tabular-nums;
      }
      .pd-credit-lbl {
        font-size: ${Math.round(RING * 0.072)}px;
        font-weight: 700;
        color: #bbb;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }


      /* Progress bars */
      .pd-bars-col {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }
      .pd-bar-group { display: flex; flex-direction: column; gap: 7px; }
      .pd-bar-header { display: flex; align-items: baseline; gap: 8px; }
      .pd-bar-name  { font-size: 13px; font-weight: 600; color: #333; }
      .pd-bar-title { font-size: 11px; font-weight: 400; color: #aaa; }
      .pd-bar-track {
        height: 10px;
        background: var(--pd-track);
        border-radius: 5px;
        overflow: hidden;
        position: relative;
      }
      .pd-bar-fill {
        position: absolute;
        inset: 0 auto 0 0;
        border-radius: 5px;
        width: 0%;
        transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .pd-bar-fill.pd-mini   { background: linear-gradient(90deg, var(--pd-accent-60), var(--pd-accent)); }
      .pd-bar-fill.pd-cert   { background: linear-gradient(90deg, var(--pd-cert-60),   var(--pd-cert));   }
      .pd-bar-fill.pd-degree { background: linear-gradient(90deg, var(--pd-degree-60), var(--pd-degree)); }

      @media (prefers-reduced-motion: reduce) {
        .pd-card, .pd-arc, .pd-bar-fill { transition: none; }
        .pd-card { opacity: 1; transform: none; }
      }
    `;
    document.head.appendChild(s);
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  // Append a 2-digit hex alpha to a 6-digit hex colour string.
  // Falls back gracefully if the colour isn't plain hex.
  function hexA(hex, alpha) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
      return hex + Math.round(alpha * 255).toString(16).padStart(2, '0');
    }
    return hex; // non-hex: return as-is (opacity fallback in CSS)
  }

  function ease(t) { return 1 - Math.pow(1 - t, 3); } // ease-out cubic

  // ── Identify dashboard lists ──────────────────────────────────────────────
  // A plain markdown list is a dashboard if its first <li> is exactly
  // "progress-dashboard" — no class or HTML attribute required.

  const MARKER = 'progress-dashboard';

  function isDashboard(ul) {
    const first = ul.querySelector('li:first-child');
    return first && first.textContent.trim().toLowerCase() === MARKER;
  }

  // ── Parse <ul> → attrs dict ───────────────────────────────────────────────

  function parseList(ul) {
    const attrs = Object.assign({}, DEFAULTS);
    // Skip the first <li> — it's the identifier, not a key:value pair
    Array.from(ul.querySelectorAll('li')).slice(1).forEach(li => {
      // textContent strips HTML comments, so round-trip markers are invisible here
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

    // Decimal sessions: 3.1 → "Session 3 (Part 1)"
    let sessionLabel = '';
    if (session > 0) {
      const base    = Math.floor(session);
      const part    = Math.round((session % 1) * 10);
      const partHtml = part > 0
        ? ` <span class="pd-part">(Part ${part})</span>`
        : '';
      sessionLabel = `Session ${base}${partHtml}, of ${totalSess}`;
    }

    return { session, creditNum, progressLen, sessionLabel,
             miniPct, certPct, degreePct };
  }

  // ── Build widget DOM ──────────────────────────────────────────────────────

  function build(attrs) {
    const d = compute(attrs);

    const accent  = attrs['accent-color'];
    const certCol = attrs['cert-color'];
    const degCol  = attrs['degree-color'];
    const layout  = attrs['layout'];

    const courseName  = attrs['course-name'];
    const courseCode  = attrs['course-code'];
    const shortName   = attrs['program-short-name'];
    const shortTitle  = attrs['program-short-title'];
    const certName    = attrs['program-cert-name'];
    const certTitle   = attrs['program-cert-title'];
    const degName     = attrs['program-degree-name'];
    const degTitle    = attrs['program-degree-title'];

    const barHtml = (name, title, cls, pct) => !name ? '' : `
      <div class="pd-bar-group">
        <div class="pd-bar-header">
          <span class="pd-bar-name">${name}</span>
          <span class="pd-bar-title">${title}</span>
        </div>
        <div class="pd-bar-track"
             role="progressbar"
             aria-label="${name} progress"
             aria-valuenow="${Math.round(pct)}"
             aria-valuemin="0" aria-valuemax="100">
          <div class="pd-bar-fill ${cls}" data-pct="${pct.toFixed(2)}"></div>
        </div>
      </div>`;

    const wrap = document.createElement('div');
    wrap.className = 'pd-widget';

    // Per-instance colours — set as CSS custom properties so the shared
    // stylesheet can reference them without knowing the values at inject time.
    wrap.style.setProperty('--pd-accent',    accent);
    wrap.style.setProperty('--pd-accent-55', hexA(accent, 0.55));
    wrap.style.setProperty('--pd-accent-60', hexA(accent, 0.60));
    wrap.style.setProperty('--pd-accent-85', hexA(accent, 0.85));
    wrap.style.setProperty('--pd-cert',      certCol);
    wrap.style.setProperty('--pd-cert-60',   hexA(certCol, 0.60));
    wrap.style.setProperty('--pd-degree',    degCol);
    wrap.style.setProperty('--pd-degree-60', hexA(degCol,  0.60));
    wrap.style.setProperty('--pd-bg',        attrs['bg-color']);
    wrap.style.setProperty('--pd-track',     attrs['track-color']);

    wrap.innerHTML = `
      <div class="pd-card" role="region" aria-label="Student Progress Dashboard">

        <div class="pd-header">
          <h1 class="pd-heading">
            ${courseName || ''}${courseCode ? `<span class="pd-code">${courseCode}</span>` : ''}
          </h1>
          ${d.sessionLabel ? `<h4 class="pd-session-heading">${d.sessionLabel}</h4>` : ''}
        </div>

        <div class="pd-body${layout === 'column' ? ' pd-col' : ''}">

          <div class="pd-gauge-col">
            <div class="pd-gauge-wrap">
              <svg width="${RING}" height="${RING}"
                   viewBox="0 0 ${RING} ${RING}" aria-hidden="true">
                <g transform="rotate(${ROT} ${CX} ${CY})">
                  <circle class="pd-track" cx="${CX}" cy="${CY}" r="${R.toFixed(2)}"/>
                  <circle class="pd-arc"   cx="${CX}" cy="${CY}" r="${R.toFixed(2)}"/>
                </g>
              </svg>
              <div class="pd-centre">
                <span class="pd-credit-num" data-target="${d.creditNum}">0</span>
                <span class="pd-credit-lbl">Credit</span>
              </div>
            </div>
          </div>

          <div class="pd-bars-col">
            ${barHtml(shortName, shortTitle, 'pd-mini',   d.miniPct)}
            ${barHtml(certName,  certTitle,  'pd-cert',   d.certPct)}
            ${barHtml(degName,   degTitle,   'pd-degree', d.degreePct)}
          </div>

        </div>

      </div>`;

    return { wrap, data: d };
  }

  // ── Animate ───────────────────────────────────────────────────────────────

  function animate(wrap, d) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const card = wrap.querySelector('.pd-card');
    const arc  = wrap.querySelector('.pd-arc');
    const num  = wrap.querySelector('.pd-credit-num');
    const bars = wrap.querySelectorAll('.pd-bar-fill');
    const arcTarget = (CIRC - d.progressLen).toFixed(2);

    requestAnimationFrame(() => card && card.classList.add('pd-visible'));

    if (reduced) {
      if (arc) arc.style.strokeDashoffset = arcTarget;
      if (num) num.textContent = d.creditNum;
      bars.forEach(b => { b.style.width = `${b.dataset.pct}%`; });
      return;
    }

    // Arc — slight delay so the card fade-in is perceptible first
    if (arc) {
      setTimeout(() => {
        arc.style.strokeDashoffset = arcTarget;
        setTimeout(() => arc.classList.add('pd-glow'), 1350);
      }, 250);
    }

    // Credit counter
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

    // Bars — staggered
    bars.forEach((bar, i) => {
      setTimeout(() => { bar.style.width = `${bar.dataset.pct}%`; }, 400 + i * 180);
    });
  }

  // ── Init one <ul> ─────────────────────────────────────────────────────────

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

  // ── Init all + watch for dynamic content ──────────────────────────────────

  function initAll() {
    injectStyles();
    document.querySelectorAll('ul').forEach(ul => { if (isDashboard(ul)) initOne(ul); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // MutationObserver handles Canvas's dynamic page insertions
  new MutationObserver(mutations => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        const candidates = node.matches('ul')
          ? [node]
          : Array.from(node.querySelectorAll('ul'));
        const lists = candidates.filter(isDashboard);
        if (lists.length) { injectStyles(); lists.forEach(initOne); }
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });

})();
