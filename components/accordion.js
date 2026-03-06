/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function m(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function h(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(n=>n.innerHTML):[]}function g(e,t){if(document.getElementById(e)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function x(e,t,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let i=new IntersectionObserver(r=>{r[0].isIntersecting&&(t(!1),i.disconnect())},{threshold:n});i.observe(e)}function b(e,t,n){new MutationObserver(a=>{for(let i of a)for(let r of i.addedNodes){if(r.nodeType!==1)continue;(r.matches(e)?[r]:Array.from(r.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var y=`/* \u2500\u2500 Accordion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
  .trl-acc-widget {
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
  .trl-acc-widget.trl-acc-in { opacity: 1; }
  .trl-acc-label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #aaa;
    padding: 18px 20px 0;
    margin: 0;
  }
  .trl-acc-item { border-bottom: 1px solid #f0f0f0; }
  .trl-acc-item:last-child { border-bottom: none; }
  .trl-acc-trigger {
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
  .trl-acc-trigger:hover { background: #fafafa; }
  .trl-acc-trigger:focus-visible { outline: 2px solid var(--trl-acc-accent); outline-offset: -2px; }
  .trl-acc-chevron {
    flex-shrink: 0;
    color: #aaa;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .trl-acc-trigger[aria-expanded="true"] .trl-acc-chevron { transform: rotate(180deg); }
  .trl-acc-panel {
    overflow: hidden;
    height: 0;
    transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .trl-acc-panel-inner {
    padding: 4px 20px 18px;
    font-size: 14px;
    line-height: 1.65;
    color: #555;
  }
  .trl-acc-panel-inner p { margin: 0; }
  .trl-acc-panel-inner p + p { margin-top: 8px; }

  @media (prefers-reduced-motion: reduce) {
    .trl-acc-widget { transition: none; opacity: 1; }
    .trl-acc-panel, .trl-acc-chevron { transition: none; }
  }
}
`;var w="accordion",E='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function M(){g("trl-acc-styles",y)}function L(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function N(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function A(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===w||n.startsWith(w+":")}function k(e){let t=e.querySelector("li:first-child").textContent.trim(),n=t.indexOf(":"),a=n>-1?t.slice(n+1).trim():"",i=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(r=>({heading:m(r),paras:h(r)})).filter(r=>r.heading);return{label:a,items:i}}function C(e){M();let{label:t,items:n}=k(e);if(!n.length)return;let a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.createElement("div");if(i.className="trl-acc-widget",i.style.setProperty("--trl-acc-accent","#4a90d9"),t){let r=document.createElement("p");r.className="trl-acc-label",r.textContent=t,i.appendChild(r)}n.forEach((r,d)=>{let u=`trl-acc-panel-${d}-${Math.random().toString(36).slice(2,7)}`,f=`trl-acc-btn-${d}-${Math.random().toString(36).slice(2,7)}`,s=document.createElement("div");s.className="trl-acc-item";let o=document.createElement("button");o.className="trl-acc-trigger",o.id=f,o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls",u),o.innerHTML=`<span>${r.heading}</span><span class="trl-acc-chevron">${E}</span>`;let c=document.createElement("div");c.className="trl-acc-panel",c.id=u,c.setAttribute("role","region"),c.setAttribute("aria-labelledby",f),c.style.height="0";let p=document.createElement("div");p.className="trl-acc-panel-inner",p.innerHTML=r.paras.length?r.paras.map(l=>`<p>${l}</p>`).join(""):"<p></p>",c.appendChild(p),o.addEventListener("click",()=>{let l=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!l)),l?N(c,a):L(c,a)}),s.appendChild(o),s.appendChild(c),i.appendChild(s)}),e.replaceWith(i),x(i,()=>i.classList.add("trl-acc-in"))}function v(){document.querySelectorAll("ul").forEach(e=>{A(e)&&C(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();b("ul",A,C);})();
