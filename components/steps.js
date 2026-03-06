/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function g(e,t=".trillian"){let n=0,o=!1,c=-1;return e.replace(/([^{}]*)([\{\}])/g,(r,i,a)=>{if(a==="}")return o&&n===c&&(o=!1,c=-1),n--,i+"}";n++;let s=i.trim();return s?/^@keyframes\s/i.test(s)?(o=!0,c=n,i+"{"):o||s.startsWith("@")?i+"{":s.split(",").map(l=>`${t} ${l.trim()}`).join(", ")+" {":i+"{"})}function u(e,t){if(document.getElementById(e))return;let n=document.createElement("style");n.id=e,n.textContent=g(t),document.head.appendChild(n)}function m(e,t,n){new MutationObserver(o=>{for(let c of o)for(let r of c.addedNodes){if(r.nodeType!==1)continue;(r.matches(e)?[r]:Array.from(r.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var S="steps",b={blue:"#3b82f6",green:"#22c55e",purple:"#a855f7",amber:"#f59e0b",red:"#ef4444",pink:"#ec4899",teal:"#14b8a6",indigo:"#6366f1",slate:"#64748b"};function w(e){if(!e)return"#6366f1";let t=e.trim().toLowerCase();return b[t]||(/^#[0-9a-f]{3,6}$/i.test(t)?t:"#6366f1")}function C(){u("trl-steps-styles",`
    .trl-steps-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .trl-steps-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 12px 10px 8px;
      border-radius: 10px;
      transition: background 0.25s ease;
      scroll-margin-top: 80px;
    }
    .trl-steps-item:target {
      background: rgba(0, 0, 0, 0.04);
    }
    .trl-steps-num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      margin-top: 2px;
    }
    .trl-steps-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
      line-height: 1.6;
      color: #333;
      padding-top: 4px;
      flex: 1;
      min-width: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-steps-item { transition: none; }
    }
  `)}function h(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase().startsWith(S)}function A(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t^e.charCodeAt(n);return(t>>>0).toString(36).slice(0,5)}function y(e){C();let n=e.querySelector("li:first-child").textContent.trim(),o=n.indexOf(":")>-1?n.slice(n.indexOf(":")+1).trim():"",c=w(o),r=Array.from(e.querySelectorAll(":scope > li")).slice(1);if(!r.length)return;let i=A(r.map(s=>s.textContent).join("")),a=document.createElement("ol");a.className="trl-steps-list",r.forEach((s,d)=>{let l=document.createElement("li");l.className="trl-steps-item",l.id="trl-step-"+i+"-"+(d+1);let f=document.createElement("span");f.className="trl-steps-num",f.style.background=c,f.textContent=String(d+1);let p=document.createElement("span");p.className="trl-steps-text",p.innerHTML=s.innerHTML,l.appendChild(f),l.appendChild(p),a.appendChild(l)}),e.replaceWith(a)}function x(){document.querySelectorAll("ul").forEach(e=>{h(e)&&y(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x();m("ul",h,y);})();
