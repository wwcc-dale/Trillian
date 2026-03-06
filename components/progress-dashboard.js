/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function g(e,t){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(t*255).toString(16).padStart(2,"0"):e}function M(e){return 1-Math.pow(1-e,3)}function A(e,t){if(document.getElementById(e)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let r=document.createElement("style");r.id=e,r.textContent=t,document.head.appendChild(r)}function P(e,t,r){new MutationObserver(o=>{for(let s of o)for(let a of s.addedNodes){if(a.nodeType!==1)continue;(a.matches(e)?[a]:Array.from(a.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var F=`/* \u2500\u2500 Progress Dashboard \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* NOTE: Some values (RING, SW, TRACK, etc.) are numeric constants from progress-dashboard.js.
   The computed pixel values below match those constants. If JS geometry constants change,
   update the matching values here too. RING=168, SW=20, R=74, CIRC\u2248464.85, TRACK\u2248387.37 */

.trillian {
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
    width: 168px;
    height: 168px;
  }
  .trl-dash-gauge-wrap svg { display: block; overflow: visible; }
  .trl-dash-track {
    fill: none;
    stroke: var(--trl-dash-track);
    stroke-width: 20;
    stroke-linecap: round;
    stroke-dasharray: 387.37 77.48;
  }
  .trl-dash-arc {
    fill: none;
    stroke: var(--trl-dash-accent);
    stroke-width: 20;
    stroke-linecap: round;
    stroke-dasharray: 464.85;
    stroke-dashoffset: 464.85;
    transition: stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1);
    filter: drop-shadow(0 0 4px var(--trl-dash-accent-55));
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
    font-size: 77px;
    font-weight: 800;
    line-height: 1;
    color: var(--trl-dash-accent);
    letter-spacing: -0.02em;
    font-variant-numeric: tabular-nums;
  }
  .trl-dash-credit-lbl {
    font-size: 12px;
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
}

@keyframes trl-dash-glow {
  0%   { filter: drop-shadow(0 0  4px var(--trl-dash-accent-55)); }
  40%  { filter: drop-shadow(0 0 12px var(--trl-dash-accent-85)); }
  100% { filter: drop-shadow(0 0  5px var(--trl-dash-accent-55)); }
}
`;var h=168,q=Math.round(h*.12),C=(h-q)/2,$=h/2,k=h/2,S=2*Math.PI*C,L=S*(300/360),V=S-L,z=120,D={session:0,module:0,"course-order":1,"course-name":"","course-code":"","total-sessions":25,"credits-per-course":5,"credits-per-session":.2,"milestone-mini":20,"milestone-cert":45,"milestone-degree":90,"program-short-name":"","program-short-title":"Short Certificate","program-cert-name":"","program-cert-title":"Certificate","program-degree-name":"","program-degree-title":"AAS Degree","accent-color":"#4a90d9","cert-color":"#7b68ee","degree-color":"#e8a838","bg-color":"#ffffff","track-color":"#e8e4df",layout:"row"};function I(){A("trl-dash-styles",F)}var j="progress-dashboard";function E(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===j}function K(e){let t=Object.assign({},D);return Array.from(e.querySelectorAll("li")).slice(1).forEach(r=>{let o=r.textContent.trim(),s=o.indexOf(":");if(s>0){let a=o.slice(0,s).trim(),l=o.slice(s+1).trim();a&&l!==""&&(t[a]=l)}}),t}function W(e){let t=parseFloat(e.session)||0,r=parseFloat(e.module)||0,o=Math.max(1,parseFloat(e["course-order"])||1),s=parseFloat(e["total-sessions"])||25,a=parseFloat(e["credits-per-course"])||5,l=parseFloat(e["credits-per-session"])||.2,c=parseFloat(e["milestone-mini"])||0,i=parseFloat(e["milestone-cert"])||0,d=parseFloat(e["milestone-degree"])||0,p=(o-1)*a+t*l,m=L*Math.min(t/s,1),b=Math.floor(r),u=c?Math.min(100,p/c*100):0,x=i?Math.min(100,p/i*100):0,n=d?Math.min(100,p/d*100):0,f="";if(t>0){let w=Math.floor(t),y=Math.round(t%1*10),v=y>0?` <span class="trl-dash-part">(Part ${y})</span>`:"";f=`Session ${w}${v}, of ${s}`}return{session:t,creditNum:b,progressLen:m,sessionLabel:f,miniPct:u,certPct:x,degreePct:n}}function G(e){let t=W(e),r=e["accent-color"],o=e["cert-color"],s=e["degree-color"],a=e.layout,l=e["course-name"],c=e["course-code"],i=e["program-short-name"],d=e["program-short-title"],p=e["program-cert-name"],m=e["program-cert-title"],b=e["program-degree-name"],u=e["program-degree-title"],x=(f,w,y,v)=>f?`
    <div class="trl-dash-bar-group">
      <div class="trl-dash-bar-header">
        <span class="trl-dash-bar-name">${f}</span>
        <span class="trl-dash-bar-title">${w}</span>
      </div>
      <div class="trl-dash-bar-track"
           role="progressbar"
           aria-label="${f} progress"
           aria-valuenow="${Math.round(v)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="trl-dash-bar-fill ${y}" data-pct="${v.toFixed(2)}"></div>
      </div>
    </div>`:"",n=document.createElement("div");return n.className="trl-dash-widget",n.style.setProperty("--trl-dash-accent",r),n.style.setProperty("--trl-dash-accent-55",g(r,.55)),n.style.setProperty("--trl-dash-accent-60",g(r,.6)),n.style.setProperty("--trl-dash-accent-85",g(r,.85)),n.style.setProperty("--trl-dash-cert",o),n.style.setProperty("--trl-dash-cert-60",g(o,.6)),n.style.setProperty("--trl-dash-degree",s),n.style.setProperty("--trl-dash-degree-60",g(s,.6)),n.style.setProperty("--trl-dash-bg",e["bg-color"]),n.style.setProperty("--trl-dash-track",e["track-color"]),n.innerHTML=`
    <div class="trl-dash-card" role="region" aria-label="Student Progress Dashboard">
      <div class="trl-dash-header">
        <h1 class="trl-dash-heading">
          ${l||""}${c?`<span class="trl-dash-code">${c}</span>`:""}
        </h1>
        ${t.sessionLabel?`<h4 class="trl-dash-session-heading">${t.sessionLabel}</h4>`:""}
      </div>
      <div class="trl-dash-body${a==="column"?" trl-dash-col":""}">
        <div class="trl-dash-gauge-col">
          <div class="trl-dash-gauge-wrap">
            <svg width="${h}" height="${h}" viewBox="0 0 ${h} ${h}" aria-hidden="true">
              <g transform="rotate(${z} ${$} ${k})">
                <circle class="trl-dash-track" cx="${$}" cy="${k}" r="${C.toFixed(2)}"/>
                <circle class="trl-dash-arc"   cx="${$}" cy="${k}" r="${C.toFixed(2)}"/>
              </g>
            </svg>
            <div class="trl-dash-centre">
              <span class="trl-dash-credit-num" data-target="${t.creditNum}">0</span>
              <span class="trl-dash-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="trl-dash-bars-col">
          ${x(i,d,"trl-dash-mini",t.miniPct)}
          ${x(p,m,"trl-dash-cert",t.certPct)}
          ${x(b,u,"trl-dash-degree",t.degreePct)}
        </div>
      </div>
    </div>`,{wrap:n,data:t}}function T(e,t){let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=e.querySelector(".trl-dash-card"),s=e.querySelector(".trl-dash-arc"),a=e.querySelector(".trl-dash-credit-num"),l=e.querySelectorAll(".trl-dash-bar-fill"),c=(S-t.progressLen).toFixed(2);if(requestAnimationFrame(()=>o&&o.classList.add("trl-dash-visible")),r){s&&(s.style.strokeDashoffset=c),a&&(a.textContent=t.creditNum),l.forEach(i=>{i.style.width=`${i.dataset.pct}%`});return}if(s&&setTimeout(()=>{s.style.strokeDashoffset=c,setTimeout(()=>s.classList.add("trl-dash-glow"),1350)},250),a){let i=t.creditNum;if(i>0){let d=Math.max(500,Math.min(1200,i*150)),p=performance.now(),m=b=>{let u=Math.min((b-p)/d,1);a.textContent=Math.round(M(u)*i),u<1&&requestAnimationFrame(m)};setTimeout(()=>requestAnimationFrame(m),250)}else a.textContent=0}l.forEach((i,d)=>{setTimeout(()=>{i.style.width=`${i.dataset.pct}%`},400+d*180)})}function O(e){let t=K(e),{wrap:r,data:o}=G(t);if(e.replaceWith(r),"IntersectionObserver"in window){let s=new IntersectionObserver(a=>{a[0].isIntersecting&&(T(r,o),s.disconnect())},{threshold:.25});s.observe(r)}else T(r,o)}function N(){I(),document.querySelectorAll("ul").forEach(e=>{E(e)&&O(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N();P("ul",E,e=>{I(),O(e)});})();
