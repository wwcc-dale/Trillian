/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function s(e,n){if(document.getElementById(e)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let r=document.createElement("style");r.id=e,r.textContent=n,document.head.appendChild(r)}function c(e,n,r){new MutationObserver(o=>{for(let i of o)for(let t of i.addedNodes){if(t.nodeType!==1)continue;(t.matches(e)?[t]:Array.from(t.querySelectorAll(e))).filter(n).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var l=`/* \u2500\u2500 Pill / Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
  .trl-pill {
    display: inline-flex;
    align-items: center;
    padding: 0 5px;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 0.78em;
    font-weight: 700;
    line-height: 1.6;
    white-space: nowrap;
    vertical-align: middle;
    background: var(--trl-pill-bg);
    color: #fff;
    cursor: default;
    user-select: text;
    box-sizing: border-box;
  }
}
`;var a={accent:"#4a90d9",info:"#3b82f6",warning:"#f59e0b",success:"#22c55e",error:"#ef4444",tip:"#a855f7",cert:"#7b68ee",degree:"#e8a838",neutral:"#888888"};function m(){s("trl-pill-styles",l)}function f(e){return/^#pill(:|$)/i.test(e.getAttribute("href")||"")}function d(e){m();let n=e.getAttribute("href")||"",r=/^#pill(?::(.+))?$/i.exec(n);if(!r)return;let o=(r[1]||"accent").toLowerCase(),i=a[o]||a.accent,t=document.createElement("span");t.className="trl-pill",t.textContent=e.textContent,t.style.setProperty("--trl-pill-bg",i),e.replaceWith(t)}function u(){document.querySelectorAll("a").forEach(e=>{f(e)&&d(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();c("a",f,d);})();
