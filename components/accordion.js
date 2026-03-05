/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function m(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function h(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(r=>r.innerHTML):[]}function C(e,t=".trillian"){let r=0,o=!1,i=-1;return e.replace(/([^{}]*)([\{\}])/g,(n,a,p)=>{if(p==="}")return o&&r===i&&(o=!1,i=-1),r--,a+"}";r++;let l=a.trim();return l?/^@keyframes\s/i.test(l)?(o=!0,i=r,a+"{"):o||l.startsWith("@")?a+"{":l.split(",").map(c=>`${t} ${c.trim()}`).join(", ")+" {":a+"{"})}function g(e,t){if(document.getElementById(e))return;let r=document.createElement("style");r.id=e,r.textContent=C(t),document.head.appendChild(r)}function x(e,t,r=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let i=new IntersectionObserver(n=>{n[0].isIntersecting&&(t(!1),i.disconnect())},{threshold:r});i.observe(e)}function b(e,t,r){new MutationObserver(o=>{for(let i of o)for(let n of i.addedNodes){if(n.nodeType!==1)continue;(n.matches(e)?[n]:Array.from(n.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var y="accordion",S='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function E(){g("trl-acc-styles",`
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
  `)}function M(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function L(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function v(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===y||r.startsWith(y+":")}function N(e){let t=e.querySelector("li:first-child").textContent.trim(),r=t.indexOf(":"),o=r>-1?t.slice(r+1).trim():"",i=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(n=>({heading:m(n),paras:h(n)})).filter(n=>n.heading);return{label:o,items:i}}function A(e){E();let{label:t,items:r}=N(e);if(!r.length)return;let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.createElement("div");if(i.className="trl-acc-widget",i.style.setProperty("--trl-acc-accent","#4a90d9"),t){let n=document.createElement("p");n.className="trl-acc-label",n.textContent=t,i.appendChild(n)}r.forEach((n,a)=>{let p=`trl-acc-panel-${a}-${Math.random().toString(36).slice(2,7)}`,l=`trl-acc-btn-${a}-${Math.random().toString(36).slice(2,7)}`,d=document.createElement("div");d.className="trl-acc-item";let c=document.createElement("button");c.className="trl-acc-trigger",c.id=l,c.setAttribute("aria-expanded","false"),c.setAttribute("aria-controls",p),c.innerHTML=`<span>${n.heading}</span><span class="trl-acc-chevron">${S}</span>`;let s=document.createElement("div");s.className="trl-acc-panel",s.id=p,s.setAttribute("role","region"),s.setAttribute("aria-labelledby",l),s.style.height="0";let f=document.createElement("div");f.className="trl-acc-panel-inner",f.innerHTML=n.paras.length?n.paras.map(u=>`<p>${u}</p>`).join(""):"<p></p>",s.appendChild(f),c.addEventListener("click",()=>{let u=c.getAttribute("aria-expanded")==="true";c.setAttribute("aria-expanded",String(!u)),u?L(s,o):M(s,o)}),d.appendChild(c),d.appendChild(s),i.appendChild(d)}),e.replaceWith(i),x(i,()=>i.classList.add("trl-acc-in"))}function w(){document.querySelectorAll("ul").forEach(e=>{v(e)&&A(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();b("ul",v,A);})();
