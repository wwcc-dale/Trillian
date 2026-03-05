/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function A(t,r=".trillian"){let n=0,o=!1,i=-1;return t.replace(/([^{}]*)([\{\}])/g,(e,s,p)=>{if(p==="}")return o&&n===i&&(o=!1,i=-1),n--,s+"}";n++;let c=s.trim();return c?/^@keyframes\s/i.test(c)?(o=!0,i=n,s+"{"):o||c.startsWith("@")?s+"{":c.split(",").map(l=>`${r} ${l.trim()}`).join(", ")+" {":s+"{"})}function m(t,r){if(document.getElementById(t))return;let n=document.createElement("style");n.id=t,n.textContent=A(r),document.head.appendChild(n)}function b(t,r,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!0);return}if(!("IntersectionObserver"in window)){r(!1);return}let i=new IntersectionObserver(e=>{e[0].isIntersecting&&(r(!1),i.disconnect())},{threshold:n});i.observe(t)}function y(t,r,n){new MutationObserver(o=>{for(let i of o)for(let e of i.addedNodes){if(e.nodeType!==1)continue;(e.matches(t)?[e]:Array.from(e.querySelectorAll(t))).filter(r).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var h="flow-accordion",x="flow-tabs",k='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function C(){m("trl-fac-styles",`
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
  `)}function S(){m("trl-fta-styles",`
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
    @keyframes trl-fta-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      .trl-fta-widget { transition: none; opacity: 1; }
      .trl-fta-tab { transition: none; }
      @keyframes trl-fta-fade { from { opacity: 1; } }
    }
  `)}function g(t){let r=t.querySelector("li:first-child");if(!r)return!1;let n=r.textContent.trim().toLowerCase();return n===h||n.startsWith(h+":")||n===x||n.startsWith(x+":")}function L(t){let r=t.querySelector("li:first-child").textContent.trim().toLowerCase(),n=r===h||r.startsWith(h+":"),o=r.indexOf(":"),i=o>-1?r.slice(o+1).trim():"h6",e=/^h[1-6]$/.test(i)?i:"h6";return{mode:n?"accordion":"tabs",trigger:e}}function N(t,r){let n=parseInt(r[1]),o=[],i=null,e=t.nextSibling;for(;e;){let s=e.nextSibling,c=e.nodeType===1?e.tagName.toLowerCase():"";if(c==="ul"&&g(e)||/^h[1-6]$/.test(c)&&parseInt(c[1])<n)break;if(c===r){i={heading:e.textContent.trim(),nodes:[]},o.push(i),e.remove(),e=s;continue}i&&(i.nodes.push(e),e.remove()),e=s}return o}function M(t,r){if(r){t.style.height="auto";return}t.style.height=t.scrollHeight+"px",t.addEventListener("transitionend",()=>{t.style.height!=="0px"&&(t.style.height="auto")},{once:!0})}function $(t,r){if(r){t.style.height="0";return}t.style.height=t.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{t.style.height="0"}))}function I(t,r,n){let o=document.createElement("div");return o.className="trl-fac-widget",o.style.setProperty("--trl-fac-accent","#4a90d9"),t.forEach((i,e)=>{let s=`trl-fac-panel-${n}-${e}`,p=`trl-fac-btn-${n}-${e}`,c=document.createElement("div");c.className="trl-fac-item";let a=document.createElement("button");a.className="trl-fac-trigger",a.id=p,a.setAttribute("aria-expanded","false"),a.setAttribute("aria-controls",s),a.innerHTML=`<span>${i.heading}</span><span class="trl-fac-chevron">${k}</span>`;let l=document.createElement("div");l.className="trl-fac-panel",l.id=s,l.setAttribute("role","region"),l.setAttribute("aria-labelledby",p),l.style.height="0";let d=document.createElement("div");d.className="trl-fac-panel-inner",i.nodes.forEach(f=>d.appendChild(f)),l.appendChild(d),a.addEventListener("click",()=>{let f=a.getAttribute("aria-expanded")==="true";a.setAttribute("aria-expanded",String(!f)),f?$(l,r):M(l,r)}),c.appendChild(a),c.appendChild(l),o.appendChild(c)}),o}function O(t,r){let n=document.createElement("div");n.className="trl-fta-widget",n.style.setProperty("--trl-fta-accent","#4a90d9");let o=document.createElement("div");o.className="trl-fta-tablist",o.setAttribute("role","tablist");let i=document.createElement("div");i.className="trl-fta-panels";let e=[],s=[];t.forEach((c,a)=>{let l=`trl-fta-tab-${r}-${a}`,d=`trl-fta-panel-${r}-${a}`,f=document.createElement("button");f.className="trl-fta-tab",f.id=l,f.setAttribute("role","tab"),f.setAttribute("aria-selected",a===0?"true":"false"),f.setAttribute("aria-controls",d),f.setAttribute("tabindex",a===0?"0":"-1"),f.textContent=c.heading;let u=document.createElement("div");u.className="trl-fta-panel"+(a===0?" trl-fta-active":""),u.id=d,u.setAttribute("role","tabpanel"),u.setAttribute("aria-labelledby",l),c.nodes.forEach(E=>u.appendChild(E)),o.appendChild(f),i.appendChild(u),e.push(f),s.push(u)});function p(c){e.forEach((a,l)=>{let d=l===c;a.setAttribute("aria-selected",String(d)),a.setAttribute("tabindex",d?"0":"-1")}),s.forEach((a,l)=>{a.classList.toggle("trl-fta-active",l===c)})}return e.forEach((c,a)=>{c.addEventListener("click",()=>p(a)),c.addEventListener("keydown",l=>{let d=a;if(l.key==="ArrowRight")d=(a+1)%e.length;else if(l.key==="ArrowLeft")d=(a-1+e.length)%e.length;else if(l.key==="Home")d=0;else if(l.key==="End")d=e.length-1;else return;l.preventDefault(),p(d),e[d].focus()})}),n.appendChild(o),n.appendChild(i),n}function v(t){let{mode:r,trigger:n}=L(t),o=N(t,n);if(!o.length)return;let i=Math.random().toString(36).slice(2,7),e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s;r==="accordion"?(C(),s=I(o,e,i),t.replaceWith(s),b(s,()=>s.classList.add("trl-fac-in"))):(S(),s=O(o,i),t.replaceWith(s),b(s,()=>s.classList.add("trl-fta-in")))}function w(){document.querySelectorAll("ul").forEach(t=>{g(t)&&v(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();y("ul",g,v);})();
