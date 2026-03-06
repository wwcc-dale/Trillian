/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function g(t,r){if(document.getElementById(t)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let n=document.createElement("style");n.id=t,n.textContent=r,document.head.appendChild(n)}function h(t,r,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!0);return}if(!("IntersectionObserver"in window)){r(!1);return}let a=new IntersectionObserver(e=>{e[0].isIntersecting&&(r(!1),a.disconnect())},{threshold:n});a.observe(t)}function y(t,r,n){new MutationObserver(i=>{for(let a of i)for(let e of a.addedNodes){if(e.nodeType!==1)continue;(e.matches(t)?[e]:Array.from(e.querySelectorAll(t))).filter(r).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var x=`/* \u2500\u2500 Flow Accordion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
  .trl-fac-widget {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    border: 1px solid #ebebeb;
    border-radius: 12px;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .trl-fac-widget.trl-fac-in { opacity: 1; }
  .trl-fac-item { border-bottom: 1px solid #f0f0f0; }
  .trl-fac-item:last-child { border-bottom: none; }
  .trl-fac-trigger {
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
    font-size: 15px;
    font-weight: 600;
    color: #222;
    text-align: left;
    transition: background 0.15s;
  }
  .trl-fac-trigger:hover { background: #fafafa; }
  .trl-fac-trigger:focus-visible { outline: 2px solid var(--trl-fac-accent); outline-offset: -2px; }
  .trl-fac-chevron {
    flex-shrink: 0;
    color: #bbb;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .trl-fac-trigger[aria-expanded="true"] .trl-fac-chevron { transform: rotate(180deg); }
  .trl-fac-panel {
    overflow: hidden;
    height: 0;
    transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .trl-fac-panel-inner {
    padding: 4px 20px 20px;
    font-size: 14px;
    line-height: 1.7;
    color: #444;
  }

  @media (prefers-reduced-motion: reduce) {
    .trl-fac-widget { transition: none; opacity: 1; }
    .trl-fac-panel, .trl-fac-chevron { transition: none; }
  }

  /* \u2500\u2500 Flow Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

  .trl-fta-widget {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 12px;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .trl-fta-widget.trl-fta-in { opacity: 1; }
  .trl-fta-tablist {
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .trl-fta-tablist::-webkit-scrollbar { display: none; }
  .trl-fta-tab {
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
  .trl-fta-tab:hover { color: #555; }
  .trl-fta-tab:focus-visible { outline: 2px solid var(--trl-fta-accent); outline-offset: -2px; }
  .trl-fta-tab[aria-selected="true"] {
    color: var(--trl-fta-accent);
    border-bottom-color: var(--trl-fta-accent);
  }
  .trl-fta-panels { padding: 20px; }
  .trl-fta-panel {
    display: none;
    font-size: 14px;
    line-height: 1.7;
    color: #444;
    animation: trl-fta-fade 0.18s ease;
  }
  .trl-fta-panel.trl-fta-active { display: block; }

  @media (prefers-reduced-motion: reduce) {
    .trl-fta-widget { transition: none; opacity: 1; }
    .trl-fta-tab { transition: none; }
  }
}

@keyframes trl-fta-fade { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  @keyframes trl-fta-fade { from { opacity: 1; } }
}
`;var m="flow-accordion",w="flow-tabs",k='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function S(){g("trl-flow-styles",x)}function b(t){let r=t.querySelector("li:first-child");if(!r)return!1;let n=r.textContent.trim().toLowerCase();return n===m||n.startsWith(m+":")||n===w||n.startsWith(w+":")}function L(t){let r=t.querySelector("li:first-child").textContent.trim().toLowerCase(),n=r===m||r.startsWith(m+":"),i=r.indexOf(":"),a=i>-1?r.slice(i+1).trim():"h6",e=/^h[1-6]$/.test(a)?a:"h6";return{mode:n?"accordion":"tabs",trigger:e}}function N(t,r){let n=parseInt(r[1]),i=[],a=null,e=t.nextSibling;for(;e;){let l=e.nextSibling,c=e.nodeType===1?e.tagName.toLowerCase():"";if(c==="ul"&&b(e)||/^h[1-6]$/.test(c)&&parseInt(c[1])<n)break;if(c===r){a={heading:e.textContent.trim(),nodes:[]},i.push(a),e.remove(),e=l;continue}a&&(a.nodes.push(e),e.remove()),e=l}return i}function M(t,r){if(r){t.style.height="auto";return}t.style.height=t.scrollHeight+"px",t.addEventListener("transitionend",()=>{t.style.height!=="0px"&&(t.style.height="auto")},{once:!0})}function $(t,r){if(r){t.style.height="0";return}t.style.height=t.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{t.style.height="0"}))}function I(t,r,n){let i=document.createElement("div");return i.className="trl-fac-widget",i.style.setProperty("--trl-fac-accent","#4a90d9"),t.forEach((a,e)=>{let l=`trl-fac-panel-${n}-${e}`,p=`trl-fac-btn-${n}-${e}`,c=document.createElement("div");c.className="trl-fac-item";let o=document.createElement("button");o.className="trl-fac-trigger",o.id=p,o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls",l),o.innerHTML=`<span>${a.heading}</span><span class="trl-fac-chevron">${k}</span>`;let s=document.createElement("div");s.className="trl-fac-panel",s.id=l,s.setAttribute("role","region"),s.setAttribute("aria-labelledby",p),s.style.height="0";let d=document.createElement("div");d.className="trl-fac-panel-inner",a.nodes.forEach(f=>d.appendChild(f)),s.appendChild(d),o.addEventListener("click",()=>{let f=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!f)),f?$(s,r):M(s,r)}),c.appendChild(o),c.appendChild(s),i.appendChild(c)}),i}function O(t,r){let n=document.createElement("div");n.className="trl-fta-widget",n.style.setProperty("--trl-fta-accent","#4a90d9");let i=document.createElement("div");i.className="trl-fta-tablist",i.setAttribute("role","tablist");let a=document.createElement("div");a.className="trl-fta-panels";let e=[],l=[];t.forEach((c,o)=>{let s=`trl-fta-tab-${r}-${o}`,d=`trl-fta-panel-${r}-${o}`,f=document.createElement("button");f.className="trl-fta-tab",f.id=s,f.setAttribute("role","tab"),f.setAttribute("aria-selected",o===0?"true":"false"),f.setAttribute("aria-controls",d),f.setAttribute("tabindex",o===0?"0":"-1"),f.textContent=c.heading;let u=document.createElement("div");u.className="trl-fta-panel"+(o===0?" trl-fta-active":""),u.id=d,u.setAttribute("role","tabpanel"),u.setAttribute("aria-labelledby",s),c.nodes.forEach(A=>u.appendChild(A)),i.appendChild(f),a.appendChild(u),e.push(f),l.push(u)});function p(c){e.forEach((o,s)=>{let d=s===c;o.setAttribute("aria-selected",String(d)),o.setAttribute("tabindex",d?"0":"-1")}),l.forEach((o,s)=>{o.classList.toggle("trl-fta-active",s===c)})}return e.forEach((c,o)=>{c.addEventListener("click",()=>p(o)),c.addEventListener("keydown",s=>{let d=o;if(s.key==="ArrowRight")d=(o+1)%e.length;else if(s.key==="ArrowLeft")d=(o-1+e.length)%e.length;else if(s.key==="Home")d=0;else if(s.key==="End")d=e.length-1;else return;s.preventDefault(),p(d),e[d].focus()})}),n.appendChild(i),n.appendChild(a),n}function E(t){let{mode:r,trigger:n}=L(t),i=N(t,n);if(!i.length)return;let a=Math.random().toString(36).slice(2,7),e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l;S(),r==="accordion"?(l=I(i,e,a),t.replaceWith(l),h(l,()=>l.classList.add("trl-fac-in"))):(l=O(i,a),t.replaceWith(l),h(l,()=>l.classList.add("trl-fta-in")))}function v(){document.querySelectorAll("ul").forEach(t=>{b(t)&&E(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();y("ul",b,E);})();
