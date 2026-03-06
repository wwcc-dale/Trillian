/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function f(e,r){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(r*255).toString(16).padStart(2,"0"):e}function u(e,r){if(document.getElementById(e)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let n=document.createElement("style");n.id=e,n.textContent=r,document.head.appendChild(n)}function m(e,r,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!0);return}if(!("IntersectionObserver"in window)){r(!1);return}let a=new IntersectionObserver(i=>{i[0].isIntersecting&&(r(!1),a.disconnect())},{threshold:n});a.observe(e)}function y(e,r,n){new MutationObserver(o=>{for(let a of o)for(let i of a.addedNodes){if(i.nodeType!==1)continue;(i.matches(e)?[i]:Array.from(i.querySelectorAll(e))).filter(r).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var t=e=>`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,S={"arrow-right":t('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),"arrow-left":t('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),"arrow-up":t('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'),"arrow-down":t('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),"chevron-right":t('<path d="m9 18 6-6-6-6"/>'),"chevron-left":t('<path d="m15 18-6-6 6-6"/>'),"chevron-up":t('<path d="m18 15-6-6-6 6"/>'),"chevron-down":t('<path d="m6 9 6 6 6-6"/>'),"external-link":t('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>'),download:t('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),upload:t('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),check:t('<path d="M20 6 9 17l-5-5"/>'),x:t('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),plus:t('<path d="M5 12h14"/><path d="M12 5v14"/>'),minus:t('<path d="M5 12h14"/>'),search:t('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),edit:t('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),copy:t('<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'),trash:t('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),"file-text":t('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'),"book-open":t('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),bookmark:t('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>'),link:t('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),clock:t('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),calendar:t('<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'),user:t('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),users:t('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),star:t('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),play:t('<polygon points="5 3 19 12 5 21 5 3"/>'),video:t('<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>'),mail:t('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),"graduation-cap":t('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),info:t('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),"alert-triangle":t('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>')};function x(e){return S[e]||""}var b=`/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
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
}
`;var g="buttons",L=["primary","secondary","ghost","danger"];function H(){u("trl-btn-styles",b)}function A(e){return/^javascript:/i.test(e.trim())?"#":e.trim()}function E(e){let r=e.includes("\xB7")?"\xB7":" | ",n=e.split(r).map(p=>p.trim()).filter(Boolean);if(n.length<2)return null;let[o,a,i="primary",c="",d="left"]=n;return!o||!a?null:{label:o,href:A(a),style:i.toLowerCase(),iconName:c.toLowerCase(),iconPos:d.toLowerCase()==="right"?"right":"left"}}function M(e){let r=e.querySelector("li:first-child");if(!r)return!1;let n=r.textContent.trim().toLowerCase();return n===g||n.startsWith(g+":")}function N(e){let r=e.querySelector("li:first-child").textContent.trim(),n=r.indexOf(":"),o=n>-1?r.slice(n+1).trim().toLowerCase():"left",a=["center","right"].includes(o)?o:"left",i=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(c=>E(c.textContent.trim())).filter(Boolean);return{align:a,items:i}}var T={left:"flex-start",center:"center",right:"flex-end"},v="#4a90d9";function C(e){H();let{align:r,items:n}=N(e);if(!n.length)return;let o=document.createElement("div");o.className="trl-btn-row",o.style.justifyContent=T[r]||"flex-start",o.style.setProperty("--trl-btn-accent",v),o.style.setProperty("--trl-btn-accent-10",f(v,.1)),n.forEach(({label:a,href:i,style:c,iconName:d,iconPos:p})=>{let s=document.createElement("a");s.className=`trl-btn-btn trl-btn-${L.includes(c)?c:"primary"}`,s.href=i;let h=x(d);if(h){let l=document.createElement("span");l.className="trl-btn-icon",l.innerHTML=h,p==="right"?(s.appendChild(document.createTextNode(a)),s.appendChild(l)):(s.appendChild(l),s.appendChild(document.createTextNode(a)))}else s.textContent=a;o.appendChild(s)}),e.replaceWith(o),m(o,()=>o.classList.add("trl-btn-in"))}function w(){document.querySelectorAll("ul").forEach(e=>{M(e)&&C(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();y("ul",M,C);})();
