/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function f(t,o){return/^#[0-9a-f]{6}$/i.test(t)?t+Math.round(o*255).toString(16).padStart(2,"0"):t}function C(t,o=".trillian"){let n=0,r=!1,a=-1;return t.replace(/([^{}]*)([\{\}])/g,(s,i,d)=>{if(d==="}")return r&&n===a&&(r=!1,a=-1),n--,i+"}";n++;let l=i.trim();return l?/^@keyframes\s/i.test(l)?(r=!0,a=n,i+"{"):r||l.startsWith("@")?i+"{":l.split(",").map(p=>`${o} ${p.trim()}`).join(", ")+" {":i+"{"})}function u(t,o){if(document.getElementById(t))return;let n=document.createElement("style");n.id=t,n.textContent=C(o),document.head.appendChild(n)}function m(t,o,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(!0);return}if(!("IntersectionObserver"in window)){o(!1);return}let a=new IntersectionObserver(s=>{s[0].isIntersecting&&(o(!1),a.disconnect())},{threshold:n});a.observe(t)}function y(t,o,n){new MutationObserver(r=>{for(let a of r)for(let s of a.addedNodes){if(s.nodeType!==1)continue;(s.matches(t)?[s]:Array.from(s.querySelectorAll(t))).filter(o).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var e=t=>`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`,S={"arrow-right":e('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),"arrow-left":e('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),"arrow-up":e('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'),"arrow-down":e('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),"chevron-right":e('<path d="m9 18 6-6-6-6"/>'),"chevron-left":e('<path d="m15 18-6-6 6-6"/>'),"chevron-up":e('<path d="m18 15-6-6-6 6"/>'),"chevron-down":e('<path d="m6 9 6 6 6-6"/>'),"external-link":e('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>'),download:e('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),upload:e('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),check:e('<path d="M20 6 9 17l-5-5"/>'),x:e('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),plus:e('<path d="M5 12h14"/><path d="M12 5v14"/>'),minus:e('<path d="M5 12h14"/>'),search:e('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),edit:e('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),copy:e('<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'),trash:e('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),"file-text":e('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'),"book-open":e('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),bookmark:e('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>'),link:e('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),clock:e('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),calendar:e('<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'),user:e('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),users:e('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),star:e('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),play:e('<polygon points="5 3 19 12 5 21 5 3"/>'),video:e('<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>'),mail:e('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),"graduation-cap":e('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),info:e('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),"alert-triangle":e('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>')};function x(t){return S[t]||""}var b="buttons",k=["primary","secondary","ghost","danger"];function L(){u("trl-btn-styles",`
    .trl-btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .trl-btn-row.trl-btn-in { opacity: 1; }
    .trl-btn-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
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
    .trl-btn-btn:hover  { filter: brightness(1.08); box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
    .trl-btn-btn:active { filter: brightness(0.95); }
    .trl-btn-primary {
      background: var(--trl-btn-accent);
      color: #fff;
      border: 2px solid transparent;
    }
    .trl-btn-secondary {
      background: transparent;
      color: var(--trl-btn-accent);
      border: 2px solid var(--trl-btn-accent);
    }
    .trl-btn-ghost {
      background: transparent;
      color: var(--trl-btn-accent);
      border: 2px solid transparent;
      padding-left: 8px;
      padding-right: 8px;
    }
    .trl-btn-ghost:hover { background: var(--trl-btn-accent-10); box-shadow: none; filter: none; }
    .trl-btn-danger {
      background: #ef4444;
      color: #fff;
      border: 2px solid transparent;
    }
    .trl-btn-icon {
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-btn-row { transition: none; opacity: 1; }
      .trl-btn-btn { transition: none; }
    }
  `)}function H(t){return/^javascript:/i.test(t.trim())?"#":t.trim()}function A(t){let o=t.includes("\xB7")?"\xB7":" | ",n=t.split(o).map(l=>l.trim()).filter(Boolean);if(n.length<2)return null;let[r,a,s="primary",i="",d="left"]=n;return!r||!a?null:{label:r,href:H(a),style:s.toLowerCase(),iconName:i.toLowerCase(),iconPos:d.toLowerCase()==="right"?"right":"left"}}function w(t){let o=t.querySelector("li:first-child");if(!o)return!1;let n=o.textContent.trim().toLowerCase();return n===b||n.startsWith(b+":")}function N(t){let o=t.querySelector("li:first-child").textContent.trim(),n=o.indexOf(":"),r=n>-1?o.slice(n+1).trim().toLowerCase():"left",a=["center","right"].includes(r)?r:"left",s=Array.from(t.querySelectorAll(":scope > li")).slice(1).map(i=>A(i.textContent.trim())).filter(Boolean);return{align:a,items:s}}var E={left:"flex-start",center:"center",right:"flex-end"},g="#4a90d9";function M(t){L();let{align:o,items:n}=N(t);if(!n.length)return;let r=document.createElement("div");r.className="trl-btn-row",r.style.justifyContent=E[o]||"flex-start",r.style.setProperty("--trl-btn-accent",g),r.style.setProperty("--trl-btn-accent-10",f(g,.1)),n.forEach(({label:a,href:s,style:i,iconName:d,iconPos:l})=>{let c=document.createElement("a");c.className=`trl-btn-btn trl-btn-${k.includes(i)?i:"primary"}`,c.href=s;let p=x(d);if(p){let h=document.createElement("span");h.className="trl-btn-icon",h.innerHTML=p,l==="right"?(c.appendChild(document.createTextNode(a)),c.appendChild(h)):(c.appendChild(h),c.appendChild(document.createTextNode(a)))}else c.textContent=a;r.appendChild(c)}),t.replaceWith(r),m(r,()=>r.classList.add("trl-btn-in"))}function v(){document.querySelectorAll("ul").forEach(t=>{w(t)&&M(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();y("ul",w,M);})();
