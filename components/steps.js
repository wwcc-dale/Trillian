/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function u(e,t){if(document.getElementById(e)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function m(e,t,n){new MutationObserver(s=>{for(let l of s)for(let r of l.addedNodes){if(r.nodeType!==1)continue;(r.matches(e)?[r]:Array.from(r.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var x=`/* \u2500\u2500 Steps \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
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
}
`;var b="steps",C={blue:"#3b82f6",green:"#22c55e",purple:"#a855f7",amber:"#f59e0b",red:"#ef4444",pink:"#ec4899",teal:"#14b8a6",indigo:"#6366f1",slate:"#64748b"};function w(e){if(!e)return"#6366f1";let t=e.trim().toLowerCase();return C[t]||(/^#[0-9a-f]{3,6}$/i.test(t)?t:"#6366f1")}function E(){u("trl-steps-styles",x)}function y(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase().startsWith(b)}function A(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t^e.charCodeAt(n);return(t>>>0).toString(36).slice(0,5)}function g(e){E();let n=e.querySelector("li:first-child").textContent.trim(),s=n.indexOf(":")>-1?n.slice(n.indexOf(":")+1).trim():"",l=w(s),r=Array.from(e.querySelectorAll(":scope > li")).slice(1);if(!r.length)return;let f=A(r.map(a=>a.textContent).join("")),c=document.createElement("ol");c.className="trl-steps-list",r.forEach((a,p)=>{let i=document.createElement("li");i.className="trl-steps-item",i.id="trl-step-"+f+"-"+(p+1);let o=document.createElement("span");o.className="trl-steps-num",o.style.background=l,o.textContent=String(p+1);let d=document.createElement("span");d.className="trl-steps-text",d.innerHTML=a.innerHTML,i.appendChild(o),i.appendChild(d),c.appendChild(i)}),e.replaceWith(c)}function h(){document.querySelectorAll("ul").forEach(e=>{y(e)&&g(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();m("ul",y,g);})();
