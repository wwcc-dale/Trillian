/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function c(r,t){if(document.getElementById(r)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let o=document.createElement("style");o.id=r,o.textContent=t,document.head.appendChild(o)}function d(r,t,o=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let n=new IntersectionObserver(e=>{e[0].isIntersecting&&(t(!1),n.disconnect())},{threshold:o});n.observe(r)}function u(r,t,o){new MutationObserver(i=>{for(let n of i)for(let e of n.addedNodes){if(e.nodeType!==1)continue;(e.matches(r)?[e]:Array.from(e.querySelectorAll(r))).filter(t).forEach(o)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var f=`/* \u2500\u2500 Alert / Callout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
  .trl-alert-callout {
    display: flex;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 10px;
    border-left: 4px solid var(--trl-alert-border);
    background: var(--trl-alert-bg);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: var(--trl-alert-text);
    box-sizing: border-box;
    margin: 8px 0;
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  .trl-alert-callout.trl-alert-in { opacity: 1; }
  .trl-alert-icon-wrap { flex-shrink: 0; color: var(--trl-alert-icon); padding-top: 1px; }
  .trl-alert-body { flex: 1; min-width: 0; }
  .trl-alert-body p { margin: 0; }
  .trl-alert-body p + p { margin-top: 5px; }
  .trl-alert-body a { color: var(--trl-alert-icon); }

  @media (prefers-reduced-motion: reduce) {
    .trl-alert-callout { transition: none; opacity: 1; }
  }
}
`;var h={info:{bg:"#eff6ff",border:"#3b82f6",text:"#1e3a5f",icon:"#3b82f6",label:"Info"},warning:{bg:"#fffbeb",border:"#f59e0b",text:"#78350f",icon:"#f59e0b",label:"Warning"},success:{bg:"#f0fdf4",border:"#22c55e",text:"#14532d",icon:"#22c55e",label:"Success"},error:{bg:"#fef2f2",border:"#ef4444",text:"#7f1d1d",icon:"#ef4444",label:"Error"},tip:{bg:"#faf5ff",border:"#a855f7",text:"#4a1772",icon:"#a855f7",label:"Tip"}},x={info:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="6.5" r="1.1" fill="currentColor"/></svg>',warning:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5L17.5 16.5H2.5L10 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="10" y1="8.5" x2="10" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.1" fill="currentColor"/></svg>',success:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',error:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',tip:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a5.5 5.5 0 0 1 2.75 10.25V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.75A5.5 5.5 0 0 1 10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 17.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'};function g(){c("trl-alert-styles",f)}function m(r){let t=r.querySelector("p");return t&&/^alert\s*:/i.test(t.textContent.trim())}function w(r){let t=Array.from(r.querySelectorAll("p"));if(!t.length)return null;let o=/^alert\s*:\s*(\w+)/i.exec(t[0].textContent.trim());if(!o)return null;let i=o[1].toLowerCase(),n=h[i]?i:"info",e;if(t.length>1)e=t.slice(1).map(l=>`<p>${l.innerHTML}</p>`).join("");else{let l=t[0].innerHTML,s=l.search(/<br\s*\/?>/i),a=s>-1?l.slice(s).replace(/^<br\s*\/?>/i,"").trim():"";e=a?`<p>${a}</p>`:""}return{type:n,bodyHtml:e}}function y(r){g();let t=w(r);if(!t)return;let{type:o,bodyHtml:i}=t,n=h[o],e=document.createElement("div");e.className="trl-alert-callout",e.setAttribute("role","note"),e.setAttribute("aria-label",n.label),e.style.setProperty("--trl-alert-bg",n.bg),e.style.setProperty("--trl-alert-border",n.border),e.style.setProperty("--trl-alert-text",n.text),e.style.setProperty("--trl-alert-icon",n.icon),e.innerHTML=`
    <span class="trl-alert-icon-wrap">${x[o]}</span>
    <div class="trl-alert-body">${i}</div>
  `,r.replaceWith(e),d(e,()=>e.classList.add("trl-alert-in"))}function p(){document.querySelectorAll("blockquote").forEach(r=>{m(r)&&y(r)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p();u("blockquote",m,y);})();
