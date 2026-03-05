/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function w(t,e){return/^#[0-9a-f]{6}$/i.test(t)?t+Math.round(e*255).toString(16).padStart(2,"0"):t}function $(t){return 1-Math.pow(1-t,3)}function A(t){return Array.from(t.childNodes).filter(e=>!(e.nodeType===1&&e.tagName==="UL")).map(e=>e.textContent).join("").trim()}function E(t){let e=t.querySelector(":scope > ul");return e?Array.from(e.querySelectorAll(":scope > li")).map(r=>r.innerHTML):[]}function g(t,e){if(document.getElementById(t))return;let r=document.createElement("style");r.id=t,r.textContent=e,document.head.appendChild(r)}function x(t,e,r=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e(!0);return}if(!("IntersectionObserver"in window)){e(!1);return}let o=new IntersectionObserver(n=>{n[0].isIntersecting&&(e(!1),o.disconnect())},{threshold:r});o.observe(t)}function h(t,e,r){new MutationObserver(i=>{for(let o of i)for(let n of o.addedNodes){if(n.nodeType!==1)continue;(n.matches(t)?[n]:Array.from(n.querySelectorAll(t))).filter(e).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var P={info:{bg:"#eff6ff",border:"#3b82f6",text:"#1e3a5f",icon:"#3b82f6",label:"Info"},warning:{bg:"#fffbeb",border:"#f59e0b",text:"#78350f",icon:"#f59e0b",label:"Warning"},success:{bg:"#f0fdf4",border:"#22c55e",text:"#14532d",icon:"#22c55e",label:"Success"},error:{bg:"#fef2f2",border:"#ef4444",text:"#7f1d1d",icon:"#ef4444",label:"Error"},tip:{bg:"#faf5ff",border:"#a855f7",text:"#4a1772",icon:"#a855f7",label:"Tip"}},dt={info:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="6.5" r="1.1" fill="currentColor"/></svg>',warning:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5L17.5 16.5H2.5L10 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="10" y1="8.5" x2="10" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.1" fill="currentColor"/></svg>',success:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',error:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',tip:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a5.5 5.5 0 0 1 2.75 10.25V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.75A5.5 5.5 0 0 1 10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 17.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'};function pt(){g("ta-styles",`
    .ta-callout {
      display: flex;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 10px;
      border-left: 4px solid var(--ta-border);
      background: var(--ta-bg);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.65;
      color: var(--ta-text);
      box-sizing: border-box;
      margin: 8px 0;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .ta-callout.ta-in { opacity: 1; }
    .ta-icon-wrap { flex-shrink: 0; color: var(--ta-icon); padding-top: 1px; }
    .ta-body { flex: 1; min-width: 0; }
    .ta-body p { margin: 0; }
    .ta-body p + p { margin-top: 5px; }
    .ta-body a { color: var(--ta-icon); }
    @media (prefers-reduced-motion: reduce) {
      .ta-callout { transition: none; opacity: 1; }
    }
  `)}function j(t){let e=t.querySelector("p");return e&&/^alert\s*:/i.test(e.textContent.trim())}function ft(t){let e=Array.from(t.querySelectorAll("p"));if(!e.length)return null;let r=/^alert\s*:\s*(\w+)/i.exec(e[0].textContent.trim());if(!r)return null;let i=r[1].toLowerCase(),o=P[i]?i:"info",n;if(e.length>1)n=e.slice(1).map(a=>`<p>${a.innerHTML}</p>`).join("");else{let a=e[0].innerHTML,c=a.search(/<br\s*\/?>/i),d=c>-1?a.slice(c).replace(/^<br\s*\/?>/i,"").trim():"";n=d?`<p>${d}</p>`:""}return{type:o,bodyHtml:n}}function I(t){pt();let e=ft(t);if(!e)return;let{type:r,bodyHtml:i}=e,o=P[r],n=document.createElement("div");n.className="ta-callout",n.setAttribute("role","note"),n.setAttribute("aria-label",o.label),n.style.setProperty("--ta-bg",o.bg),n.style.setProperty("--ta-border",o.border),n.style.setProperty("--ta-text",o.text),n.style.setProperty("--ta-icon",o.icon),n.innerHTML=`
    <span class="ta-icon-wrap">${dt[r]}</span>
    <div class="ta-body">${i}</div>
  `,t.replaceWith(n),x(n,()=>n.classList.add("ta-in"))}function T(){document.querySelectorAll("blockquote").forEach(t=>{j(t)&&I(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T();h("blockquote",j,I);var R="checklist";function ut(t,e){let r=t+"\0"+e.join(""),i=0;for(let n=0;n<r.length;n++)i=Math.imul(i,31)+r.charCodeAt(n)|0;return`trillian-cl-${location.pathname.replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").slice(0,40)}-${(i>>>0).toString(36)}`}function mt(t){try{return new Set(JSON.parse(localStorage.getItem(t))||[])}catch(e){return new Set}}function gt(t,e){try{localStorage.setItem(t,JSON.stringify([...e]))}catch(r){}}function H(t){let e=t.querySelector("li:first-child");if(!e)return!1;let r=e.textContent.trim().toLowerCase();return r===R||r.startsWith(R+":")}function ht(t){let e=t.querySelector("li:first-child").textContent.trim(),r=e.indexOf(":"),i=r>-1?e.slice(r+1).trim():"",o=Array.from(t.querySelectorAll(":scope > li")).slice(1).map(n=>n.textContent.trim()).filter(Boolean);return{title:i,items:o}}function bt(){g("tc-styles",`
    .tc-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      padding: 22px 24px 20px;
      max-width: 520px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .tc-widget.tc-in { opacity: 1; }
    .tc-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .tc-title {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      margin: 0;
    }
    .tc-count { font-size: 12px; color: #bbb; }
    .tc-bar {
      height: 4px;
      background: #eee;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .tc-bar-fill {
      height: 100%;
      background: var(--tc-accent);
      border-radius: 2px;
      width: 0%;
      transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tc-list { list-style: none; margin: 0; padding: 0; }
    .tc-item {
      display: flex;
      align-items: flex-start;
      gap: 11px;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .tc-item:hover { background: #f7f7f7; }
    .tc-cb {
      appearance: none;
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      min-width: 18px;
      border: 2px solid #d4d4d4;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      margin-top: 2px;
      background: #fff;
      transition: background 0.15s, border-color 0.15s;
    }
    .tc-cb:checked {
      background: var(--tc-accent);
      border-color: var(--tc-accent);
    }
    .tc-cb:checked::after {
      content: '';
      position: absolute;
      left: 3px;
      top: 0px;
      width: 6px;
      height: 10px;
      border: 2px solid #fff;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }
    .tc-cb:focus-visible { outline: 2px solid var(--tc-accent); outline-offset: 2px; }
    .tc-lbl {
      font-size: 14px;
      line-height: 1.55;
      color: #333;
      cursor: pointer;
      user-select: none;
      transition: color 0.2s;
    }
    .tc-item.tc-done .tc-lbl { color: #bbb; text-decoration: line-through; }
    @media (prefers-reduced-motion: reduce) {
      .tc-widget { transition: none; opacity: 1; }
      .tc-bar-fill, .tc-item { transition: none; }
    }
  `)}function xt(t,e,r){let i=e?(r/e*100).toFixed(1):0,o=t.querySelector(".tc-bar-fill"),n=t.querySelector(".tc-bar"),a=t.querySelector(".tc-count");o&&(o.style.width=`${i}%`),n&&n.setAttribute("aria-valuenow",Math.round(i)),a&&(a.textContent=`${r} / ${e}`)}function yt(t){let{title:e,items:r}=ht(t),i=ut(e,r),o=mt(i),n=i.slice(-8),a=document.createElement("div");a.className="tc-widget",a.style.setProperty("--tc-accent","#4a90d9");let c=r.filter((l,s)=>o.has(s)).length,d=r.length?(c/r.length*100).toFixed(1):0;return a.innerHTML=`
    <div class="tc-header">
      <p class="tc-title">${e||"Checklist"}</p>
      <span class="tc-count">${c} / ${r.length}</span>
    </div>
    <div class="tc-bar"
         role="progressbar"
         aria-valuenow="${Math.round(d)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="tc-bar-fill" style="width:${d}%"></div>
    </div>
    <ul class="tc-list">
      ${r.map((l,s)=>`
        <li class="tc-item${o.has(s)?" tc-done":""}" data-i="${s}">
          <input class="tc-cb" type="checkbox" id="tc-${n}-${s}"${o.has(s)?" checked":""}>
          <label class="tc-lbl" for="tc-${n}-${s}">${l}</label>
        </li>`).join("")}
    </ul>
  `,a.querySelectorAll(".tc-item").forEach(l=>{let s=l.querySelector(".tc-cb"),p=l.querySelector(".tc-lbl");s.addEventListener("change",()=>{let f=parseInt(l.dataset.i,10);l.classList.toggle("tc-done",s.checked),s.checked?o.add(f):o.delete(f),gt(i,o),xt(a,r.length,o.size)}),l.addEventListener("click",f=>{f.target===s||p.contains(f.target)||s.click()})}),a}function D(t){bt();let e=yt(t);t.replaceWith(e),x(e,()=>e.classList.add("tc-in"))}function B(){document.querySelectorAll("ul").forEach(t=>{H(t)&&D(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",B):B();h("ul",H,D);var W="buttons";function wt(){g("tb-styles",`
    .tb-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .tb-row.tb-in { opacity: 1; }
    .tb-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 9px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: filter 0.15s ease, box-shadow 0.15s ease;
      box-sizing: border-box;
      white-space: nowrap;
    }
    .tb-btn:hover  { filter: brightness(1.08); box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
    .tb-btn:active { filter: brightness(0.95); }
    .tb-primary {
      background: var(--tb-accent);
      color: #fff;
      border: 2px solid transparent;
    }
    .tb-secondary {
      background: transparent;
      color: var(--tb-accent);
      border: 2px solid var(--tb-accent);
    }
    .tb-ghost {
      background: transparent;
      color: var(--tb-accent);
      border: 2px solid transparent;
      padding-left: 8px;
      padding-right: 8px;
    }
    .tb-ghost:hover { background: var(--tb-accent-10); box-shadow: none; filter: none; }
    .tb-danger {
      background: #ef4444;
      color: #fff;
      border: 2px solid transparent;
    }
    @media (prefers-reduced-motion: reduce) {
      .tb-row { transition: none; opacity: 1; }
      .tb-btn { transition: none; }
    }
  `)}function vt(t){return/^javascript:/i.test(t.trim())?"#":t.trim()}function kt(t){let e=t.includes("\xB7")?"\xB7":" | ",r=t.split(e).map(a=>a.trim()).filter(Boolean);if(r.length<2)return null;let[i,o,n="primary"]=r;return!i||!o?null:{label:i,href:vt(o),style:n.toLowerCase()}}function K(t){let e=t.querySelector("li:first-child");if(!e)return!1;let r=e.textContent.trim().toLowerCase();return r===W||r.startsWith(W+":")}function Ct(t){let e=t.querySelector("li:first-child").textContent.trim(),r=e.indexOf(":"),i=r>-1?e.slice(r+1).trim().toLowerCase():"left",o=["center","right"].includes(i)?i:"left",n=Array.from(t.querySelectorAll(":scope > li")).slice(1).map(a=>kt(a.textContent.trim())).filter(Boolean);return{align:o,items:n}}var St={left:"flex-start",center:"center",right:"flex-end"},U="#4a90d9";function Y(t){wt();let{align:e,items:r}=Ct(t);if(!r.length)return;let i=document.createElement("div");i.className="tb-row",i.style.justifyContent=St[e]||"flex-start",i.style.setProperty("--tb-accent",U),i.style.setProperty("--tb-accent-10",w(U,.1)),r.forEach(({label:o,href:n,style:a})=>{let c=document.createElement("a");c.className=`tb-btn tb-${["primary","secondary","ghost","danger"].includes(a)?a:"primary"}`,c.href=n,c.textContent=o,i.appendChild(c)}),t.replaceWith(i),x(i,()=>i.classList.add("tb-in"))}function V(){document.querySelectorAll("ul").forEach(t=>{K(t)&&Y(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",V):V();h("ul",K,Y);var J="accordion",$t='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function At(){g("tac-styles",`
    .tac-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      overflow: hidden;
      max-width: 640px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .tac-widget.tac-in { opacity: 1; }
    .tac-label {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      padding: 18px 20px 0;
      margin: 0;
    }
    .tac-item { border-bottom: 1px solid #f0f0f0; }
    .tac-item:last-child { border-bottom: none; }
    .tac-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      padding: 16px 20px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      color: #222;
      text-align: left;
      transition: background 0.15s;
    }
    .tac-trigger:hover { background: #fafafa; }
    .tac-trigger:focus-visible { outline: 2px solid var(--tac-accent); outline-offset: -2px; }
    .tac-chevron {
      flex-shrink: 0;
      color: #aaa;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tac-trigger[aria-expanded="true"] .tac-chevron { transform: rotate(180deg); }
    .tac-panel {
      overflow: hidden;
      height: 0;
      transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tac-panel-inner {
      padding: 4px 20px 18px;
      font-size: 14px;
      line-height: 1.65;
      color: #555;
    }
    .tac-panel-inner p { margin: 0; }
    .tac-panel-inner p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .tac-widget { transition: none; opacity: 1; }
      .tac-panel, .tac-chevron { transition: none; }
    }
  `)}function Et(t,e){if(e){t.style.height="auto";return}t.style.height=t.scrollHeight+"px",t.addEventListener("transitionend",()=>{t.style.height!=="0px"&&(t.style.height="auto")},{once:!0})}function Mt(t,e){if(e){t.style.height="0";return}t.style.height=t.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{t.style.height="0"}))}function _(t){let e=t.querySelector("li:first-child");if(!e)return!1;let r=e.textContent.trim().toLowerCase();return r===J||r.startsWith(J+":")}function Lt(t){let e=t.querySelector("li:first-child").textContent.trim(),r=e.indexOf(":"),i=r>-1?e.slice(r+1).trim():"",o=Array.from(t.querySelectorAll(":scope > li")).slice(1).map(n=>({heading:A(n),paras:E(n)})).filter(n=>n.heading);return{label:i,items:o}}function X(t){At();let{label:e,items:r}=Lt(t);if(!r.length)return;let i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=document.createElement("div");if(o.className="tac-widget",o.style.setProperty("--tac-accent","#4a90d9"),e){let n=document.createElement("p");n.className="tac-label",n.textContent=e,o.appendChild(n)}r.forEach((n,a)=>{let c=`tac-panel-${a}-${Math.random().toString(36).slice(2,7)}`,d=`tac-btn-${a}-${Math.random().toString(36).slice(2,7)}`,l=document.createElement("div");l.className="tac-item";let s=document.createElement("button");s.className="tac-trigger",s.id=d,s.setAttribute("aria-expanded","false"),s.setAttribute("aria-controls",c),s.innerHTML=`<span>${n.heading}</span><span class="tac-chevron">${$t}</span>`;let p=document.createElement("div");p.className="tac-panel",p.id=c,p.setAttribute("role","region"),p.setAttribute("aria-labelledby",d),p.style.height="0";let f=document.createElement("div");f.className="tac-panel-inner",f.innerHTML=n.paras.length?n.paras.map(u=>`<p>${u}</p>`).join(""):"<p></p>",p.appendChild(f),s.addEventListener("click",()=>{let u=s.getAttribute("aria-expanded")==="true";s.setAttribute("aria-expanded",String(!u)),u?Mt(p,i):Et(p,i)}),l.appendChild(s),l.appendChild(p),o.appendChild(l)}),t.replaceWith(o),x(o,()=>o.classList.add("tac-in"))}function G(){document.querySelectorAll("ul").forEach(t=>{_(t)&&X(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();h("ul",_,X);var Nt="tabs";function qt(){g("tt-styles",`
    .tt-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      overflow: hidden;
      max-width: 640px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .tt-widget.tt-in { opacity: 1; }
    .tt-tablist {
      display: flex;
      gap: 0;
      border-bottom: 1px solid #f0f0f0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tt-tablist::-webkit-scrollbar { display: none; }
    .tt-tab {
      flex-shrink: 0;
      padding: 14px 20px;
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      margin-bottom: -1px;
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      color: #999;
      transition: color 0.2s, border-color 0.2s;
      white-space: nowrap;
    }
    .tt-tab:hover { color: #555; }
    .tt-tab:focus-visible { outline: 2px solid var(--tt-accent); outline-offset: -2px; }
    .tt-tab[aria-selected="true"] {
      color: var(--tt-accent);
      border-bottom-color: var(--tt-accent);
    }
    .tt-panels { padding: 20px; }
    .tt-panel {
      display: none;
      font-size: 14px;
      line-height: 1.65;
      color: #444;
      animation: tt-fade 0.2s ease;
    }
    .tt-panel.tt-active { display: block; }
    @keyframes tt-fade { from { opacity: 0; } to { opacity: 1; } }
    .tt-panel p { margin: 0; }
    .tt-panel p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .tt-widget { transition: none; opacity: 1; }
      .tt-tab { transition: none; }
      @keyframes tt-fade { from { opacity: 1; } }
    }
  `)}function Q(t){let e=t.querySelector("li:first-child");return e&&e.textContent.trim().toLowerCase()===Nt}function Ft(t){return Array.from(t.querySelectorAll(":scope > li")).slice(1).map(e=>({label:A(e),paras:E(e)})).filter(e=>e.label)}function tt(t){qt();let e=Ft(t);if(!e.length)return;let r=Math.random().toString(36).slice(2,7),i=document.createElement("div");i.className="tt-widget",i.style.setProperty("--tt-accent","#4a90d9");let o=document.createElement("div");o.className="tt-tablist",o.setAttribute("role","tablist");let n=document.createElement("div");n.className="tt-panels";let a=[],c=[];e.forEach((l,s)=>{let p=`tt-tab-${r}-${s}`,f=`tt-panel-${r}-${s}`,u=document.createElement("button");u.className="tt-tab",u.id=p,u.setAttribute("role","tab"),u.setAttribute("aria-selected",s===0?"true":"false"),u.setAttribute("aria-controls",f),u.setAttribute("tabindex",s===0?"0":"-1"),u.textContent=l.label;let b=document.createElement("div");b.className="tt-panel"+(s===0?" tt-active":""),b.id=f,b.setAttribute("role","tabpanel"),b.setAttribute("aria-labelledby",p),l.paras.length&&(b.innerHTML=l.paras.map(m=>`<p>${m}</p>`).join("")),o.appendChild(u),n.appendChild(b),a.push(u),c.push(b)});function d(l){a.forEach((s,p)=>{let f=p===l;s.setAttribute("aria-selected",String(f)),s.setAttribute("tabindex",f?"0":"-1")}),c.forEach((s,p)=>{s.classList.toggle("tt-active",p===l)})}a.forEach((l,s)=>{l.addEventListener("click",()=>d(s)),l.addEventListener("keydown",p=>{let f=s;if(p.key==="ArrowRight")f=(s+1)%a.length;else if(p.key==="ArrowLeft")f=(s-1+a.length)%a.length;else if(p.key==="Home")f=0;else if(p.key==="End")f=a.length-1;else return;p.preventDefault(),d(f),a[f].focus()})}),i.appendChild(o),i.appendChild(n),t.replaceWith(i),x(i,()=>i.classList.add("tt-in"))}function Z(){document.querySelectorAll("ul").forEach(t=>{Q(t)&&tt(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z();h("ul",Q,tt);var et="stats",M={accent:"#4a90d9",cert:"#7b68ee",degree:"#e8a838",success:"#22c55e",error:"#ef4444",neutral:"#888888"};function Ot(t){if(!t)return M.accent;let e=t.trim().toLowerCase();return M[e]?M[e]:/^#[0-9a-f]{3}$/i.test(t)||/^#[0-9a-f]{6}$/i.test(t)?t.trim():M.accent}function zt(){g("ts-styles",`
    .ts-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .ts-row.ts-in { opacity: 1; }
    .ts-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 80px;
      background: #fff;
      border-radius: 14px;
      border-top: 4px solid var(--ts-color);
      padding: 16px 14px 14px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.07);
      box-sizing: border-box;
      text-align: center;
    }
    .ts-value {
      font-size: 32px;
      font-weight: 800;
      line-height: 1;
      color: var(--ts-color);
      letter-spacing: -0.03em;
      font-variant-numeric: tabular-nums;
    }
    .ts-label {
      font-size: 12px;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.02em;
      line-height: 1.3;
    }
    @media (prefers-reduced-motion: reduce) {
      .ts-row { transition: none; opacity: 1; }
    }
  `)}function Tt(t){let e=t.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);if(!e)return null;let r=parseFloat(e[2].replace(/,/g,""));return isNaN(r)?null:{prefix:e[1],num:r,suffix:e[3]}}function Pt(t,e,r){let i=Math.max(600,Math.min(1400,e.num*20));setTimeout(()=>{let o=performance.now(),n=a=>{let c=Math.min((a-o)/i,1);t.textContent=e.prefix+Math.round($(c)*e.num)+e.suffix,c<1&&requestAnimationFrame(n)};requestAnimationFrame(n)},r)}function nt(t){let e=t.querySelector("li:first-child");if(!e)return!1;let r=e.textContent.trim().toLowerCase();return r===et||r.startsWith(et+":")}function jt(t){let e=t.includes("\xB7")?"\xB7":" | ",r=t.split(e).map(a=>a.trim()).filter(Boolean);if(r.length<2)return null;let[i,o,n]=r;return{value:i,label:o,color:Ot(n)}}function It(t){return Array.from(t.querySelectorAll(":scope > li")).slice(1).map(e=>jt(e.textContent.trim())).filter(Boolean)}function ot(t){zt();let e=It(t);if(!e.length)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.createElement("div");i.className="ts-row";let o=[];e.forEach((n,a)=>{let c=document.createElement("div");c.className="ts-card",c.style.setProperty("--ts-color",n.color);let d=document.createElement("div");d.className="ts-value";let l=document.createElement("div");l.className="ts-label",l.textContent=n.label;let s=Tt(n.value);s&&!r?(d.textContent=s.prefix+"0"+s.suffix,o.push({el:d,parsed:s,delay:a*120})):d.textContent=n.value,c.appendChild(d),c.appendChild(l),i.appendChild(c)}),t.replaceWith(i),x(i,n=>{n||o.forEach(({el:a,parsed:c,delay:d})=>Pt(a,c,d)),i.classList.add("ts-in")},.25)}function rt(){document.querySelectorAll("ul").forEach(t=>{nt(t)&&ot(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rt):rt();h("ul",nt,ot);var y=168,F=Math.round(y*.12),O=(y-F)/2,N=y/2,q=y/2,k=2*Math.PI*O,z=k*(300/360),Rt=k-z,Bt=120,Ht={session:0,module:0,"course-order":1,"course-name":"","course-code":"","total-sessions":25,"credits-per-course":5,"credits-per-session":.2,"milestone-mini":20,"milestone-cert":45,"milestone-degree":90,"program-short-name":"","program-short-title":"Short Certificate","program-cert-name":"","program-cert-title":"Certificate","program-degree-name":"","program-degree-title":"AAS Degree","accent-color":"#4a90d9","cert-color":"#7b68ee","degree-color":"#e8a838","bg-color":"#ffffff","track-color":"#e8e4df",layout:"row"};function st(){g("pd-styles",`
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
      width: ${y}px;
      height: ${y}px;
    }
    .pd-gauge-wrap svg { display: block; overflow: visible; }
    .pd-track {
      fill: none;
      stroke: var(--pd-track);
      stroke-width: ${F};
      stroke-linecap: round;
      stroke-dasharray: ${z.toFixed(2)} ${Rt.toFixed(2)};
    }
    .pd-arc {
      fill: none;
      stroke: var(--pd-accent);
      stroke-width: ${F};
      stroke-linecap: round;
      stroke-dasharray: ${k.toFixed(2)};
      stroke-dashoffset: ${k.toFixed(2)};
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
      font-size: ${Math.round(y*.46)}px;
      font-weight: 800;
      line-height: 1;
      color: var(--pd-accent);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }
    .pd-credit-lbl {
      font-size: ${Math.round(y*.072)}px;
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
  `)}var Dt="progress-dashboard";function ct(t){let e=t.querySelector("li:first-child");return e&&e.textContent.trim().toLowerCase()===Dt}function Wt(t){let e=Object.assign({},Ht);return Array.from(t.querySelectorAll("li")).slice(1).forEach(r=>{let i=r.textContent.trim(),o=i.indexOf(":");if(o>0){let n=i.slice(0,o).trim(),a=i.slice(o+1).trim();n&&a!==""&&(e[n]=a)}}),e}function Ut(t){let e=parseFloat(t.session)||0,r=parseFloat(t.module)||0,i=Math.max(1,parseFloat(t["course-order"])||1),o=parseFloat(t["total-sessions"])||25,n=parseFloat(t["credits-per-course"])||5,a=parseFloat(t["credits-per-session"])||.2,c=parseFloat(t["milestone-mini"])||0,d=parseFloat(t["milestone-cert"])||0,l=parseFloat(t["milestone-degree"])||0,s=(i-1)*n+e*a,p=z*Math.min(e/o,1),f=Math.floor(r),u=c?Math.min(100,s/c*100):0,b=d?Math.min(100,s/d*100):0,m=l?Math.min(100,s/l*100):0,v="";if(e>0){let L=Math.floor(e),C=Math.round(e%1*10),S=C>0?` <span class="pd-part">(Part ${C})</span>`:"";v=`Session ${L}${S}, of ${o}`}return{session:e,creditNum:f,progressLen:p,sessionLabel:v,miniPct:u,certPct:b,degreePct:m}}function Vt(t){let e=Ut(t),r=t["accent-color"],i=t["cert-color"],o=t["degree-color"],n=t.layout,a=t["course-name"],c=t["course-code"],d=t["program-short-name"],l=t["program-short-title"],s=t["program-cert-name"],p=t["program-cert-title"],f=t["program-degree-name"],u=t["program-degree-title"],b=(v,L,C,S)=>v?`
    <div class="pd-bar-group">
      <div class="pd-bar-header">
        <span class="pd-bar-name">${v}</span>
        <span class="pd-bar-title">${L}</span>
      </div>
      <div class="pd-bar-track"
           role="progressbar"
           aria-label="${v} progress"
           aria-valuenow="${Math.round(S)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="pd-bar-fill ${C}" data-pct="${S.toFixed(2)}"></div>
      </div>
    </div>`:"",m=document.createElement("div");return m.className="pd-widget",m.style.setProperty("--pd-accent",r),m.style.setProperty("--pd-accent-55",w(r,.55)),m.style.setProperty("--pd-accent-60",w(r,.6)),m.style.setProperty("--pd-accent-85",w(r,.85)),m.style.setProperty("--pd-cert",i),m.style.setProperty("--pd-cert-60",w(i,.6)),m.style.setProperty("--pd-degree",o),m.style.setProperty("--pd-degree-60",w(o,.6)),m.style.setProperty("--pd-bg",t["bg-color"]),m.style.setProperty("--pd-track",t["track-color"]),m.innerHTML=`
    <div class="pd-card" role="region" aria-label="Student Progress Dashboard">
      <div class="pd-header">
        <h1 class="pd-heading">
          ${a||""}${c?`<span class="pd-code">${c}</span>`:""}
        </h1>
        ${e.sessionLabel?`<h4 class="pd-session-heading">${e.sessionLabel}</h4>`:""}
      </div>
      <div class="pd-body${n==="column"?" pd-col":""}">
        <div class="pd-gauge-col">
          <div class="pd-gauge-wrap">
            <svg width="${y}" height="${y}" viewBox="0 0 ${y} ${y}" aria-hidden="true">
              <g transform="rotate(${Bt} ${N} ${q})">
                <circle class="pd-track" cx="${N}" cy="${q}" r="${O.toFixed(2)}"/>
                <circle class="pd-arc"   cx="${N}" cy="${q}" r="${O.toFixed(2)}"/>
              </g>
            </svg>
            <div class="pd-centre">
              <span class="pd-credit-num" data-target="${e.creditNum}">0</span>
              <span class="pd-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="pd-bars-col">
          ${b(d,l,"pd-mini",e.miniPct)}
          ${b(s,p,"pd-cert",e.certPct)}
          ${b(f,u,"pd-degree",e.degreePct)}
        </div>
      </div>
    </div>`,{wrap:m,data:e}}function it(t,e){let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=t.querySelector(".pd-card"),o=t.querySelector(".pd-arc"),n=t.querySelector(".pd-credit-num"),a=t.querySelectorAll(".pd-bar-fill"),c=(k-e.progressLen).toFixed(2);if(requestAnimationFrame(()=>i&&i.classList.add("pd-visible")),r){o&&(o.style.strokeDashoffset=c),n&&(n.textContent=e.creditNum),a.forEach(d=>{d.style.width=`${d.dataset.pct}%`});return}if(o&&setTimeout(()=>{o.style.strokeDashoffset=c,setTimeout(()=>o.classList.add("pd-glow"),1350)},250),n){let d=e.creditNum;if(d>0){let l=Math.max(500,Math.min(1200,d*150)),s=performance.now(),p=f=>{let u=Math.min((f-s)/l,1);n.textContent=Math.round($(u)*d),u<1&&requestAnimationFrame(p)};setTimeout(()=>requestAnimationFrame(p),250)}else n.textContent=0}a.forEach((d,l)=>{setTimeout(()=>{d.style.width=`${d.dataset.pct}%`},400+l*180)})}function lt(t){let e=Wt(t),{wrap:r,data:i}=Vt(e);if(t.replaceWith(r),"IntersectionObserver"in window){let o=new IntersectionObserver(n=>{n[0].isIntersecting&&(it(r,i),o.disconnect())},{threshold:.25});o.observe(r)}else it(r,i)}function at(){st(),document.querySelectorAll("ul").forEach(t=>{ct(t)&&lt(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",at):at();h("ul",ct,t=>{st(),lt(t)});})();
