/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function c(t,e){return/^#[0-9a-f]{6}$/i.test(t)?t+Math.round(e*255).toString(16).padStart(2,"0"):t}function l(t,e){if(document.getElementById(t))return;let n=document.createElement("style");n.id=t,n.textContent=e,document.head.appendChild(n)}function d(t,e,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e(!0);return}if(!("IntersectionObserver"in window)){e(!1);return}let i=new IntersectionObserver(o=>{o[0].isIntersecting&&(e(!1),i.disconnect())},{threshold:n});i.observe(t)}function f(t,e,n){new MutationObserver(r=>{for(let i of r)for(let o of i.addedNodes){if(o.nodeType!==1)continue;(o.matches(t)?[o]:Array.from(o.querySelectorAll(t))).filter(e).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var u="buttons";function h(){l("tb-styles",`
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
  `)}function x(t){return/^javascript:/i.test(t.trim())?"#":t.trim()}function g(t){let e=t.includes("\xB7")?"\xB7":" | ",n=t.split(e).map(s=>s.trim()).filter(Boolean);if(n.length<2)return null;let[r,i,o="primary"]=n;return!r||!i?null:{label:r,href:x(i),style:o.toLowerCase()}}function m(t){let e=t.querySelector("li:first-child");if(!e)return!1;let n=e.textContent.trim().toLowerCase();return n===u||n.startsWith(u+":")}function w(t){let e=t.querySelector("li:first-child").textContent.trim(),n=e.indexOf(":"),r=n>-1?e.slice(n+1).trim().toLowerCase():"left",i=["center","right"].includes(r)?r:"left",o=Array.from(t.querySelectorAll(":scope > li")).slice(1).map(s=>g(s.textContent.trim())).filter(Boolean);return{align:i,items:o}}var v={left:"flex-start",center:"center",right:"flex-end"},p="#4a90d9";function y(t){h();let{align:e,items:n}=w(t);if(!n.length)return;let r=document.createElement("div");r.className="tb-row",r.style.justifyContent=v[e]||"flex-start",r.style.setProperty("--tb-accent",p),r.style.setProperty("--tb-accent-10",c(p,.1)),n.forEach(({label:i,href:o,style:s})=>{let a=document.createElement("a");a.className=`tb-btn tb-${["primary","secondary","ghost","danger"].includes(s)?s:"primary"}`,a.href=o,a.textContent=i,r.appendChild(a)}),t.replaceWith(r),d(r,()=>r.classList.add("tb-in"))}function b(){document.querySelectorAll("ul").forEach(t=>{m(t)&&y(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();f("ul",m,y);})();
