/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function h(e,t){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(t*255).toString(16).padStart(2,"0"):e}function A(e){return 1-Math.pow(1-e,3)}function P(e,t){if(document.getElementById(e))return;let r=document.createElement("style");r.id=e,r.textContent=t,document.head.appendChild(r)}function L(e,t,r){new MutationObserver(s=>{for(let o of s)for(let n of o.addedNodes){if(n.nodeType!==1)continue;(n.matches(e)?[n]:Array.from(n.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var c=168,C=Math.round(c*.12),F=(c-C)/2,k=c/2,M=c/2,y=2*Math.PI*F,S=y*(300/360),z=y-S,I=120,D={session:0,module:0,"course-order":1,"course-name":"","course-code":"","total-sessions":25,"credits-per-course":5,"credits-per-session":.2,"milestone-mini":20,"milestone-cert":45,"milestone-degree":90,"program-short-name":"","program-short-title":"Short Certificate","program-cert-name":"","program-cert-title":"Certificate","program-degree-name":"","program-degree-title":"AAS Degree","accent-color":"#4a90d9","cert-color":"#7b68ee","degree-color":"#e8a838","bg-color":"#ffffff","track-color":"#e8e4df",layout:"row"};function q(){P("pd-styles",`
    .pd-widget {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
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
    .pd-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 36px;
    }
    .pd-body.pd-col { flex-direction: column; }
    .pd-gauge-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      flex-shrink: 0;
    }
    .pd-gauge-wrap {
      position: relative;
      width: ${c}px;
      height: ${c}px;
    }
    .pd-gauge-wrap svg { display: block; overflow: visible; }
    .pd-track {
      fill: none;
      stroke: var(--pd-track);
      stroke-width: ${C};
      stroke-linecap: round;
      stroke-dasharray: ${S.toFixed(2)} ${z.toFixed(2)};
    }
    .pd-arc {
      fill: none;
      stroke: var(--pd-accent);
      stroke-width: ${C};
      stroke-linecap: round;
      stroke-dasharray: ${y.toFixed(2)};
      stroke-dashoffset: ${y.toFixed(2)};
      transition: stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1);
      filter: drop-shadow(0 0 4px var(--pd-accent-55));
    }
    @keyframes pd-glow {
      0%   { filter: drop-shadow(0 0  4px var(--pd-accent-55)); }
      40%  { filter: drop-shadow(0 0 12px var(--pd-accent-85)); }
      100% { filter: drop-shadow(0 0  5px var(--pd-accent-55)); }
    }
    .pd-arc.pd-glow { animation: pd-glow 1.2s ease-out forwards; }
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
      font-size: ${Math.round(c*.46)}px;
      font-weight: 800;
      line-height: 1;
      color: var(--pd-accent);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }
    .pd-credit-lbl {
      font-size: ${Math.round(c*.072)}px;
      font-weight: 700;
      color: #bbb;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
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
  `)}var R="progress-dashboard";function O(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===R}function j(e){let t=Object.assign({},D);return Array.from(e.querySelectorAll("li")).slice(1).forEach(r=>{let s=r.textContent.trim(),o=s.indexOf(":");if(o>0){let n=s.slice(0,o).trim(),d=s.slice(o+1).trim();n&&d!==""&&(t[n]=d)}}),t}function H(e){let t=parseFloat(e.session)||0,r=parseFloat(e.module)||0,s=Math.max(1,parseFloat(e["course-order"])||1),o=parseFloat(e["total-sessions"])||25,n=parseFloat(e["credits-per-course"])||5,d=parseFloat(e["credits-per-session"])||.2,l=parseFloat(e["milestone-mini"])||0,i=parseFloat(e["milestone-cert"])||0,p=parseFloat(e["milestone-degree"])||0,m=(s-1)*n+t*d,u=S*Math.min(t/o,1),x=Math.floor(r),f=l?Math.min(100,m/l*100):0,b=i?Math.min(100,m/i*100):0,a=p?Math.min(100,m/p*100):0,g="";if(t>0){let $=Math.floor(t),v=Math.round(t%1*10),w=v>0?` <span class="pd-part">(Part ${v})</span>`:"";g=`Session ${$}${w}, of ${o}`}return{session:t,creditNum:x,progressLen:u,sessionLabel:g,miniPct:f,certPct:b,degreePct:a}}function B(e){let t=H(e),r=e["accent-color"],s=e["cert-color"],o=e["degree-color"],n=e.layout,d=e["course-name"],l=e["course-code"],i=e["program-short-name"],p=e["program-short-title"],m=e["program-cert-name"],u=e["program-cert-title"],x=e["program-degree-name"],f=e["program-degree-title"],b=(g,$,v,w)=>g?`
    <div class="pd-bar-group">
      <div class="pd-bar-header">
        <span class="pd-bar-name">${g}</span>
        <span class="pd-bar-title">${$}</span>
      </div>
      <div class="pd-bar-track"
           role="progressbar"
           aria-label="${g} progress"
           aria-valuenow="${Math.round(w)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="pd-bar-fill ${v}" data-pct="${w.toFixed(2)}"></div>
      </div>
    </div>`:"",a=document.createElement("div");return a.className="pd-widget",a.style.setProperty("--pd-accent",r),a.style.setProperty("--pd-accent-55",h(r,.55)),a.style.setProperty("--pd-accent-60",h(r,.6)),a.style.setProperty("--pd-accent-85",h(r,.85)),a.style.setProperty("--pd-cert",s),a.style.setProperty("--pd-cert-60",h(s,.6)),a.style.setProperty("--pd-degree",o),a.style.setProperty("--pd-degree-60",h(o,.6)),a.style.setProperty("--pd-bg",e["bg-color"]),a.style.setProperty("--pd-track",e["track-color"]),a.innerHTML=`
    <div class="pd-card" role="region" aria-label="Student Progress Dashboard">
      <div class="pd-header">
        <h1 class="pd-heading">
          ${d||""}${l?`<span class="pd-code">${l}</span>`:""}
        </h1>
        ${t.sessionLabel?`<h4 class="pd-session-heading">${t.sessionLabel}</h4>`:""}
      </div>
      <div class="pd-body${n==="column"?" pd-col":""}">
        <div class="pd-gauge-col">
          <div class="pd-gauge-wrap">
            <svg width="${c}" height="${c}" viewBox="0 0 ${c} ${c}" aria-hidden="true">
              <g transform="rotate(${I} ${k} ${M})">
                <circle class="pd-track" cx="${k}" cy="${M}" r="${F.toFixed(2)}"/>
                <circle class="pd-arc"   cx="${k}" cy="${M}" r="${F.toFixed(2)}"/>
              </g>
            </svg>
            <div class="pd-centre">
              <span class="pd-credit-num" data-target="${t.creditNum}">0</span>
              <span class="pd-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="pd-bars-col">
          ${b(i,p,"pd-mini",t.miniPct)}
          ${b(m,u,"pd-cert",t.certPct)}
          ${b(x,f,"pd-degree",t.degreePct)}
        </div>
      </div>
    </div>`,{wrap:a,data:t}}function T(e,t){let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=e.querySelector(".pd-card"),o=e.querySelector(".pd-arc"),n=e.querySelector(".pd-credit-num"),d=e.querySelectorAll(".pd-bar-fill"),l=(y-t.progressLen).toFixed(2);if(requestAnimationFrame(()=>s&&s.classList.add("pd-visible")),r){o&&(o.style.strokeDashoffset=l),n&&(n.textContent=t.creditNum),d.forEach(i=>{i.style.width=`${i.dataset.pct}%`});return}if(o&&setTimeout(()=>{o.style.strokeDashoffset=l,setTimeout(()=>o.classList.add("pd-glow"),1350)},250),n){let i=t.creditNum;if(i>0){let p=Math.max(500,Math.min(1200,i*150)),m=performance.now(),u=x=>{let f=Math.min((x-m)/p,1);n.textContent=Math.round(A(f)*i),f<1&&requestAnimationFrame(u)};setTimeout(()=>requestAnimationFrame(u),250)}else n.textContent=0}d.forEach((i,p)=>{setTimeout(()=>{i.style.width=`${i.dataset.pct}%`},400+p*180)})}function E(e){let t=j(e),{wrap:r,data:s}=B(t);if(e.replaceWith(r),"IntersectionObserver"in window){let o=new IntersectionObserver(n=>{n[0].isIntersecting&&(T(r,s),o.disconnect())},{threshold:.25});o.observe(r)}else T(r,s)}function N(){q(),document.querySelectorAll("ul").forEach(e=>{O(e)&&E(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N();L("ul",O,e=>{q(),E(e)});})();
