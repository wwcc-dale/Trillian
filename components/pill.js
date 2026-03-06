/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function h(e,o=".trillian"){let t=0,n=!1,i=-1;return e.replace(/([^{}]*)([\{\}])/g,(r,s,m)=>{if(m==="}")return n&&t===i&&(n=!1,i=-1),t--,s+"}";t++;let c=s.trim();return c?/^@keyframes\s/i.test(c)?(n=!0,i=t,s+"{"):n||c.startsWith("@")?s+"{":c.split(",").map(y=>`${o} ${y.trim()}`).join(", ")+" {":s+"{"})}function l(e,o){if(document.getElementById(e))return;let t=document.createElement("style");t.id=e,t.textContent=h(o),document.head.appendChild(t)}function a(e,o,t){new MutationObserver(n=>{for(let i of n)for(let r of i.addedNodes){if(r.nodeType!==1)continue;(r.matches(e)?[r]:Array.from(r.querySelectorAll(e))).filter(o).forEach(t)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var f={accent:"#4a90d9",info:"#3b82f6",warning:"#f59e0b",success:"#22c55e",error:"#ef4444",tip:"#a855f7",cert:"#7b68ee",degree:"#e8a838",neutral:"#888888"};function g(){l("trl-pill-styles",`
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
  `)}function d(e){return/^#pill(:|$)/i.test(e.getAttribute("href")||"")}function p(e){g();let o=e.getAttribute("href")||"",t=/^#pill(?::(.+))?$/i.exec(o);if(!t)return;let n=(t[1]||"accent").toLowerCase(),i=f[n]||f.accent,r=document.createElement("span");r.className="trl-pill",r.textContent=e.textContent,r.style.setProperty("--trl-pill-bg",i),e.replaceWith(r)}function u(){document.querySelectorAll("a").forEach(e=>{d(e)&&p(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();a("a",d,p);})();
