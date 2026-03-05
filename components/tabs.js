/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function m(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function h(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(r=>r.innerHTML):[]}function S(e,t=".trillian"){let r=0,o=!1,s=-1;return e.replace(/([^{}]*)([\{\}])/g,(c,a,u)=>{if(u==="}")return o&&r===s&&(o=!1,s=-1),r--,a+"}";r++;let b=a.trim();return b?/^@keyframes\s/i.test(b)?(o=!0,s=r,a+"{"):o||b.startsWith("@")?a+"{":b.split(",").map(n=>`${t} ${n.trim()}`).join(", ")+" {":a+"{"})}function y(e,t){if(document.getElementById(e))return;let r=document.createElement("style");r.id=e,r.textContent=S(t),document.head.appendChild(r)}function x(e,t,r=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let s=new IntersectionObserver(c=>{c[0].isIntersecting&&(t(!1),s.disconnect())},{threshold:r});s.observe(e)}function g(e,t,r){new MutationObserver(o=>{for(let s of o)for(let c of s.addedNodes){if(c.nodeType!==1)continue;(c.matches(e)?[c]:Array.from(c.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var k="tabs";function C(){y("trl-tabs-styles",`
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
    @keyframes trl-tabs-fade { from { opacity: 0; } to { opacity: 1; } }
    .trl-tabs-panel p { margin: 0; }
    .trl-tabs-panel p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .trl-tabs-widget { transition: none; opacity: 1; }
      .trl-tabs-tab { transition: none; }
      @keyframes trl-tabs-fade { from { opacity: 1; } }
    }
  `)}function v(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===k}function L(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>({label:m(t),paras:h(t)})).filter(t=>t.label)}function A(e){C();let t=L(e);if(!t.length)return;let r=Math.random().toString(36).slice(2,7),o=document.createElement("div");o.className="trl-tabs-widget",o.style.setProperty("--trl-tabs-accent","#4a90d9");let s=document.createElement("div");s.className="trl-tabs-tablist",s.setAttribute("role","tablist");let c=document.createElement("div");c.className="trl-tabs-panels";let a=[],u=[];t.forEach((d,n)=>{let i=`trl-tabs-tab-${r}-${n}`,l=`trl-tabs-panel-${r}-${n}`,p=document.createElement("button");p.className="trl-tabs-tab",p.id=i,p.setAttribute("role","tab"),p.setAttribute("aria-selected",n===0?"true":"false"),p.setAttribute("aria-controls",l),p.setAttribute("tabindex",n===0?"0":"-1"),p.textContent=d.label;let f=document.createElement("div");f.className="trl-tabs-panel"+(n===0?" trl-tabs-active":""),f.id=l,f.setAttribute("role","tabpanel"),f.setAttribute("aria-labelledby",i),d.paras.length&&(f.innerHTML=d.paras.map(E=>`<p>${E}</p>`).join("")),s.appendChild(p),c.appendChild(f),a.push(p),u.push(f)});function b(d){a.forEach((n,i)=>{let l=i===d;n.setAttribute("aria-selected",String(l)),n.setAttribute("tabindex",l?"0":"-1")}),u.forEach((n,i)=>{n.classList.toggle("trl-tabs-active",i===d)})}a.forEach((d,n)=>{d.addEventListener("click",()=>b(n)),d.addEventListener("keydown",i=>{let l=n;if(i.key==="ArrowRight")l=(n+1)%a.length;else if(i.key==="ArrowLeft")l=(n-1+a.length)%a.length;else if(i.key==="Home")l=0;else if(i.key==="End")l=a.length-1;else return;i.preventDefault(),b(l),a[l].focus()})}),o.appendChild(s),o.appendChild(c),e.replaceWith(o),x(o,()=>o.classList.add("trl-tabs-in"))}function w(){document.querySelectorAll("ul").forEach(e=>{v(e)&&A(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();g("ul",v,A);})();
