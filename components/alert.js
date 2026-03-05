/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function l(r,t){if(document.getElementById(r))return;let o=document.createElement("style");o.id=r,o.textContent=t,document.head.appendChild(o)}function d(r,t,o=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let n=new IntersectionObserver(e=>{e[0].isIntersecting&&(t(!1),n.disconnect())},{threshold:o});n.observe(r)}function u(r,t,o){new MutationObserver(i=>{for(let n of i)for(let e of n.addedNodes){if(e.nodeType!==1)continue;(e.matches(r)?[e]:Array.from(e.querySelectorAll(r))).filter(t).forEach(o)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var p={info:{bg:"#eff6ff",border:"#3b82f6",text:"#1e3a5f",icon:"#3b82f6",label:"Info"},warning:{bg:"#fffbeb",border:"#f59e0b",text:"#78350f",icon:"#f59e0b",label:"Warning"},success:{bg:"#f0fdf4",border:"#22c55e",text:"#14532d",icon:"#22c55e",label:"Success"},error:{bg:"#fef2f2",border:"#ef4444",text:"#7f1d1d",icon:"#ef4444",label:"Error"},tip:{bg:"#faf5ff",border:"#a855f7",text:"#4a1772",icon:"#a855f7",label:"Tip"}},y={info:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="6.5" r="1.1" fill="currentColor"/></svg>',warning:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5L17.5 16.5H2.5L10 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="10" y1="8.5" x2="10" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.1" fill="currentColor"/></svg>',success:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',error:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',tip:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a5.5 5.5 0 0 1 2.75 10.25V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.75A5.5 5.5 0 0 1 10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 17.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'};function x(){l("ta-styles",`
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
  `)}function h(r){let t=r.querySelector("p");return t&&/^alert\s*:/i.test(t.textContent.trim())}function m(r){let t=Array.from(r.querySelectorAll("p"));if(!t.length)return null;let o=/^alert\s*:\s*(\w+)/i.exec(t[0].textContent.trim());if(!o)return null;let i=o[1].toLowerCase(),n=p[i]?i:"info",e;if(t.length>1)e=t.slice(1).map(c=>`<p>${c.innerHTML}</p>`).join("");else{let c=t[0].innerHTML,s=c.search(/<br\s*\/?>/i),a=s>-1?c.slice(s).replace(/^<br\s*\/?>/i,"").trim():"";e=a?`<p>${a}</p>`:""}return{type:n,bodyHtml:e}}function b(r){x();let t=m(r);if(!t)return;let{type:o,bodyHtml:i}=t,n=p[o],e=document.createElement("div");e.className="ta-callout",e.setAttribute("role","note"),e.setAttribute("aria-label",n.label),e.style.setProperty("--ta-bg",n.bg),e.style.setProperty("--ta-border",n.border),e.style.setProperty("--ta-text",n.text),e.style.setProperty("--ta-icon",n.icon),e.innerHTML=`
    <span class="ta-icon-wrap">${y[o]}</span>
    <div class="ta-body">${i}</div>
  `,r.replaceWith(e),d(e,()=>e.classList.add("ta-in"))}function f(){document.querySelectorAll("blockquote").forEach(r=>{h(r)&&b(r)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();u("blockquote",h,b);})();
