/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function g(e,t){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(t*255).toString(16).padStart(2,"0"):e}function A(e){return 1-Math.pow(1-e,3)}function z(e,t=".trillian"){let r=0,a=!1,s=-1;return e.replace(/([^{}]*)([\{\}])/g,(o,i,d)=>{if(d==="}")return a&&r===s&&(a=!1,s=-1),r--,i+"}";r++;let n=i.trim();return n?/^@keyframes\s/i.test(n)?(a=!0,s=r,i+"{"):a||n.startsWith("@")?i+"{":n.split(",").map(p=>`${t} ${p.trim()}`).join(", ")+" {":i+"{"})}function P(e,t){if(document.getElementById(e))return;let r=document.createElement("style");r.id=e,r.textContent=z(t),document.head.appendChild(r)}function L(e,t,r){new MutationObserver(a=>{for(let s of a)for(let o of s.addedNodes){if(o.nodeType!==1)continue;(o.matches(e)?[o]:Array.from(o.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var c=168,C=Math.round(c*.12),S=(c-C)/2,k=c/2,M=c/2,y=2*Math.PI*S,F=y*(300/360),I=y-F,D=120,R={session:0,module:0,"course-order":1,"course-name":"","course-code":"","total-sessions":25,"credits-per-course":5,"credits-per-session":.2,"milestone-mini":20,"milestone-cert":45,"milestone-degree":90,"program-short-name":"","program-short-title":"Short Certificate","program-cert-name":"","program-cert-title":"Certificate","program-degree-name":"","program-degree-title":"AAS Degree","accent-color":"#4a90d9","cert-color":"#7b68ee","degree-color":"#e8a838","bg-color":"#ffffff","track-color":"#e8e4df",layout:"row"};function q(){P("trl-dash-styles",`
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
      width: ${c}px;
      height: ${c}px;
    }
    .trl-dash-gauge-wrap svg { display: block; overflow: visible; }
    .trl-dash-track {
      fill: none;
      stroke: var(--trl-dash-track);
      stroke-width: ${C};
      stroke-linecap: round;
      stroke-dasharray: ${F.toFixed(2)} ${I.toFixed(2)};
    }
    .trl-dash-arc {
      fill: none;
      stroke: var(--trl-dash-accent);
      stroke-width: ${C};
      stroke-linecap: round;
      stroke-dasharray: ${y.toFixed(2)};
      stroke-dashoffset: ${y.toFixed(2)};
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
      font-size: ${Math.round(c*.46)}px;
      font-weight: 800;
      line-height: 1;
      color: var(--trl-dash-accent);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }
    .trl-dash-credit-lbl {
      font-size: ${Math.round(c*.072)}px;
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
  `)}var j="progress-dashboard";function O(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===j}function H(e){let t=Object.assign({},R);return Array.from(e.querySelectorAll("li")).slice(1).forEach(r=>{let a=r.textContent.trim(),s=a.indexOf(":");if(s>0){let o=a.slice(0,s).trim(),i=a.slice(s+1).trim();o&&i!==""&&(t[o]=i)}}),t}function B(e){let t=parseFloat(e.session)||0,r=parseFloat(e.module)||0,a=Math.max(1,parseFloat(e["course-order"])||1),s=parseFloat(e["total-sessions"])||25,o=parseFloat(e["credits-per-course"])||5,i=parseFloat(e["credits-per-session"])||.2,d=parseFloat(e["milestone-mini"])||0,n=parseFloat(e["milestone-cert"])||0,h=parseFloat(e["milestone-degree"])||0,p=(a-1)*o+t*i,m=F*Math.min(t/s,1),x=Math.floor(r),f=d?Math.min(100,p/d*100):0,b=n?Math.min(100,p/n*100):0,l=h?Math.min(100,p/h*100):0,u="";if(t>0){let $=Math.floor(t),v=Math.round(t%1*10),w=v>0?` <span class="trl-dash-part">(Part ${v})</span>`:"";u=`Session ${$}${w}, of ${s}`}return{session:t,creditNum:x,progressLen:m,sessionLabel:u,miniPct:f,certPct:b,degreePct:l}}function K(e){let t=B(e),r=e["accent-color"],a=e["cert-color"],s=e["degree-color"],o=e.layout,i=e["course-name"],d=e["course-code"],n=e["program-short-name"],h=e["program-short-title"],p=e["program-cert-name"],m=e["program-cert-title"],x=e["program-degree-name"],f=e["program-degree-title"],b=(u,$,v,w)=>u?`
    <div class="trl-dash-bar-group">
      <div class="trl-dash-bar-header">
        <span class="trl-dash-bar-name">${u}</span>
        <span class="trl-dash-bar-title">${$}</span>
      </div>
      <div class="trl-dash-bar-track"
           role="progressbar"
           aria-label="${u} progress"
           aria-valuenow="${Math.round(w)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="trl-dash-bar-fill ${v}" data-pct="${w.toFixed(2)}"></div>
      </div>
    </div>`:"",l=document.createElement("div");return l.className="trl-dash-widget",l.style.setProperty("--trl-dash-accent",r),l.style.setProperty("--trl-dash-accent-55",g(r,.55)),l.style.setProperty("--trl-dash-accent-60",g(r,.6)),l.style.setProperty("--trl-dash-accent-85",g(r,.85)),l.style.setProperty("--trl-dash-cert",a),l.style.setProperty("--trl-dash-cert-60",g(a,.6)),l.style.setProperty("--trl-dash-degree",s),l.style.setProperty("--trl-dash-degree-60",g(s,.6)),l.style.setProperty("--trl-dash-bg",e["bg-color"]),l.style.setProperty("--trl-dash-track",e["track-color"]),l.innerHTML=`
    <div class="trl-dash-card" role="region" aria-label="Student Progress Dashboard">
      <div class="trl-dash-header">
        <h1 class="trl-dash-heading">
          ${i||""}${d?`<span class="trl-dash-code">${d}</span>`:""}
        </h1>
        ${t.sessionLabel?`<h4 class="trl-dash-session-heading">${t.sessionLabel}</h4>`:""}
      </div>
      <div class="trl-dash-body${o==="column"?" trl-dash-col":""}">
        <div class="trl-dash-gauge-col">
          <div class="trl-dash-gauge-wrap">
            <svg width="${c}" height="${c}" viewBox="0 0 ${c} ${c}" aria-hidden="true">
              <g transform="rotate(${D} ${k} ${M})">
                <circle class="trl-dash-track" cx="${k}" cy="${M}" r="${S.toFixed(2)}"/>
                <circle class="trl-dash-arc"   cx="${k}" cy="${M}" r="${S.toFixed(2)}"/>
              </g>
            </svg>
            <div class="trl-dash-centre">
              <span class="trl-dash-credit-num" data-target="${t.creditNum}">0</span>
              <span class="trl-dash-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="trl-dash-bars-col">
          ${b(n,h,"trl-dash-mini",t.miniPct)}
          ${b(p,m,"trl-dash-cert",t.certPct)}
          ${b(x,f,"trl-dash-degree",t.degreePct)}
        </div>
      </div>
    </div>`,{wrap:l,data:t}}function T(e,t){let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=e.querySelector(".trl-dash-card"),s=e.querySelector(".trl-dash-arc"),o=e.querySelector(".trl-dash-credit-num"),i=e.querySelectorAll(".trl-dash-bar-fill"),d=(y-t.progressLen).toFixed(2);if(requestAnimationFrame(()=>a&&a.classList.add("trl-dash-visible")),r){s&&(s.style.strokeDashoffset=d),o&&(o.textContent=t.creditNum),i.forEach(n=>{n.style.width=`${n.dataset.pct}%`});return}if(s&&setTimeout(()=>{s.style.strokeDashoffset=d,setTimeout(()=>s.classList.add("trl-dash-glow"),1350)},250),o){let n=t.creditNum;if(n>0){let h=Math.max(500,Math.min(1200,n*150)),p=performance.now(),m=x=>{let f=Math.min((x-p)/h,1);o.textContent=Math.round(A(f)*n),f<1&&requestAnimationFrame(m)};setTimeout(()=>requestAnimationFrame(m),250)}else o.textContent=0}i.forEach((n,h)=>{setTimeout(()=>{n.style.width=`${n.dataset.pct}%`},400+h*180)})}function E(e){let t=H(e),{wrap:r,data:a}=K(t);if(e.replaceWith(r),"IntersectionObserver"in window){let s=new IntersectionObserver(o=>{o[0].isIntersecting&&(T(r,a),s.disconnect())},{threshold:.25});s.observe(r)}else T(r,a)}function N(){q(),document.querySelectorAll("ul").forEach(e=>{O(e)&&E(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N();L("ul",O,e=>{q(),E(e)});})();
