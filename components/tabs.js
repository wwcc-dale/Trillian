/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function b(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function h(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(o=>o.innerHTML):[]}function y(e,t){if(document.getElementById(e))return;let o=document.createElement("style");o.id=e,o.textContent=t,document.head.appendChild(o)}function x(e,t,o=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let c=new IntersectionObserver(s=>{s[0].isIntersecting&&(t(!1),c.disconnect())},{threshold:o});c.observe(e)}function g(e,t,o){new MutationObserver(i=>{for(let c of i)for(let s of c.addedNodes){if(s.nodeType!==1)continue;(s.matches(e)?[s]:Array.from(s.querySelectorAll(e))).filter(t).forEach(o)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var S="tabs";function C(){y("tt-styles",`
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
  `)}function v(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===S}function L(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>({label:b(t),paras:h(t)})).filter(t=>t.label)}function A(e){C();let t=L(e);if(!t.length)return;let o=Math.random().toString(36).slice(2,7),i=document.createElement("div");i.className="tt-widget",i.style.setProperty("--tt-accent","#4a90d9");let c=document.createElement("div");c.className="tt-tablist",c.setAttribute("role","tablist");let s=document.createElement("div");s.className="tt-panels";let l=[],u=[];t.forEach((d,n)=>{let r=`tt-tab-${o}-${n}`,a=`tt-panel-${o}-${n}`,p=document.createElement("button");p.className="tt-tab",p.id=r,p.setAttribute("role","tab"),p.setAttribute("aria-selected",n===0?"true":"false"),p.setAttribute("aria-controls",a),p.setAttribute("tabindex",n===0?"0":"-1"),p.textContent=d.label;let f=document.createElement("div");f.className="tt-panel"+(n===0?" tt-active":""),f.id=a,f.setAttribute("role","tabpanel"),f.setAttribute("aria-labelledby",r),d.paras.length&&(f.innerHTML=d.paras.map(E=>`<p>${E}</p>`).join("")),c.appendChild(p),s.appendChild(f),l.push(p),u.push(f)});function m(d){l.forEach((n,r)=>{let a=r===d;n.setAttribute("aria-selected",String(a)),n.setAttribute("tabindex",a?"0":"-1")}),u.forEach((n,r)=>{n.classList.toggle("tt-active",r===d)})}l.forEach((d,n)=>{d.addEventListener("click",()=>m(n)),d.addEventListener("keydown",r=>{let a=n;if(r.key==="ArrowRight")a=(n+1)%l.length;else if(r.key==="ArrowLeft")a=(n-1+l.length)%l.length;else if(r.key==="Home")a=0;else if(r.key==="End")a=l.length-1;else return;r.preventDefault(),m(a),l[a].focus()})}),i.appendChild(c),i.appendChild(s),e.replaceWith(i),x(i,()=>i.classList.add("tt-in"))}function w(){document.querySelectorAll("ul").forEach(e=>{v(e)&&A(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();g("ul",v,A);})();
