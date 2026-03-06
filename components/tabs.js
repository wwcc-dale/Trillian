/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function m(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function y(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(n=>n.innerHTML):[]}function h(e,t){if(document.getElementById(e)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function x(e,t,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let l=new IntersectionObserver(i=>{i[0].isIntersecting&&(t(!1),l.disconnect())},{threshold:n});l.observe(e)}function g(e,t,n){new MutationObserver(s=>{for(let l of s)for(let i of l.addedNodes){if(i.nodeType!==1)continue;(i.matches(e)?[i]:Array.from(i.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var w=`/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
  .trl-tabs-widget {
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
  .trl-tabs-widget.trl-tabs-in { opacity: 1; }
  .trl-tabs-tablist {
    display: flex;
    gap: 0;
    border-bottom: 1px solid #f0f0f0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .trl-tabs-tablist::-webkit-scrollbar { display: none; }
  .trl-tabs-tab {
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
  .trl-tabs-tab:hover { color: #555; }
  .trl-tabs-tab:focus-visible { outline: 2px solid var(--trl-tabs-accent); outline-offset: -2px; }
  .trl-tabs-tab[aria-selected="true"] {
    color: var(--trl-tabs-accent);
    border-bottom-color: var(--trl-tabs-accent);
  }
  .trl-tabs-panels { padding: 20px; }
  .trl-tabs-panel {
    display: none;
    font-size: 14px;
    line-height: 1.65;
    color: #444;
    animation: trl-tabs-fade 0.2s ease;
  }
  .trl-tabs-panel.trl-tabs-active { display: block; }
  .trl-tabs-panel p { margin: 0; }
  .trl-tabs-panel p + p { margin-top: 8px; }

  @media (prefers-reduced-motion: reduce) {
    .trl-tabs-widget { transition: none; opacity: 1; }
    .trl-tabs-tab { transition: none; }
  }
}

@keyframes trl-tabs-fade { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  @keyframes trl-tabs-fade { from { opacity: 1; } }
}
`;var k="tabs";function L(){h("trl-tabs-styles",w)}function E(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===k}function M(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>({label:m(t),paras:y(t)})).filter(t=>t.label)}function A(e){L();let t=M(e);if(!t.length)return;let n=Math.random().toString(36).slice(2,7),s=document.createElement("div");s.className="trl-tabs-widget",s.style.setProperty("--trl-tabs-accent","#4a90d9");let l=document.createElement("div");l.className="trl-tabs-tablist",l.setAttribute("role","tablist");let i=document.createElement("div");i.className="trl-tabs-panels";let c=[],f=[];t.forEach((d,r)=>{let a=`trl-tabs-tab-${n}-${r}`,o=`trl-tabs-panel-${n}-${r}`,p=document.createElement("button");p.className="trl-tabs-tab",p.id=a,p.setAttribute("role","tab"),p.setAttribute("aria-selected",r===0?"true":"false"),p.setAttribute("aria-controls",o),p.setAttribute("tabindex",r===0?"0":"-1"),p.textContent=d.label;let b=document.createElement("div");b.className="trl-tabs-panel"+(r===0?" trl-tabs-active":""),b.id=o,b.setAttribute("role","tabpanel"),b.setAttribute("aria-labelledby",a),d.paras.length&&(b.innerHTML=d.paras.map(S=>`<p>${S}</p>`).join("")),l.appendChild(p),i.appendChild(b),c.push(p),f.push(b)});function u(d){c.forEach((r,a)=>{let o=a===d;r.setAttribute("aria-selected",String(o)),r.setAttribute("tabindex",o?"0":"-1")}),f.forEach((r,a)=>{r.classList.toggle("trl-tabs-active",a===d)})}c.forEach((d,r)=>{d.addEventListener("click",()=>u(r)),d.addEventListener("keydown",a=>{let o=r;if(a.key==="ArrowRight")o=(r+1)%c.length;else if(a.key==="ArrowLeft")o=(r-1+c.length)%c.length;else if(a.key==="Home")o=0;else if(a.key==="End")o=c.length-1;else return;a.preventDefault(),u(o),c[o].focus()})}),s.appendChild(l),s.appendChild(i),e.replaceWith(s),x(s,()=>s.classList.add("trl-tabs-in"))}function v(){document.querySelectorAll("ul").forEach(e=>{E(e)&&A(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();g("ul",E,A);})();
