/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function d(t){return 1-Math.pow(1-t,3)}function w(t,e=".trillian"){let r=0,o=!1,i=-1;return t.replace(/([^{}]*)([\{\}])/g,(n,s,a)=>{if(a==="}")return o&&r===i&&(o=!1,i=-1),r--,s+"}";r++;let c=s.trim();return c?/^@keyframes\s/i.test(c)?(o=!0,i=r,s+"{"):o||c.startsWith("@")?s+"{":c.split(",").map(l=>`${e} ${l.trim()}`).join(", ")+" {":s+"{"})}function p(t,e){if(document.getElementById(t))return;let r=document.createElement("style");r.id=t,r.textContent=w(e),document.head.appendChild(r)}function m(t,e,r=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e(!0);return}if(!("IntersectionObserver"in window)){e(!1);return}let i=new IntersectionObserver(n=>{n[0].isIntersecting&&(e(!1),i.disconnect())},{threshold:r});i.observe(t)}function x(t,e,r){new MutationObserver(o=>{for(let i of o)for(let n of i.addedNodes){if(n.nodeType!==1)continue;(n.matches(t)?[n]:Array.from(n.querySelectorAll(t))).filter(e).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var h="stats",f={accent:"#4a90d9",cert:"#7b68ee",degree:"#e8a838",success:"#22c55e",error:"#ef4444",neutral:"#888888"};function v(t){if(!t)return f.accent;let e=t.trim().toLowerCase();return f[e]?f[e]:/^#[0-9a-f]{3}$/i.test(t)||/^#[0-9a-f]{6}$/i.test(t)?t.trim():f.accent}function C(){p("trl-stat-styles",`
    .trl-stat-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-stat-row.trl-stat-in { opacity: 1; }
    .trl-stat-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 80px;
      background: #fff;
      border-radius: 14px;
      border-top: 4px solid var(--trl-stat-color);
      padding: 16px 14px 14px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.07);
      box-sizing: border-box;
      text-align: center;
    }
    .trl-stat-value {
      font-size: 32px;
      font-weight: 800;
      line-height: 1;
      color: var(--trl-stat-color);
      letter-spacing: -0.03em;
      font-variant-numeric: tabular-nums;
    }
    .trl-stat-label {
      font-size: 12px;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.02em;
      line-height: 1.3;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-stat-row { transition: none; opacity: 1; }
    }
  `)}function E(t){let e=t.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);if(!e)return null;let r=parseFloat(e[2].replace(/,/g,""));return isNaN(r)?null:{prefix:e[1],num:r,suffix:e[3]}}function S(t,e,r){let o=Math.max(600,Math.min(1400,e.num*20));setTimeout(()=>{let i=performance.now(),n=s=>{let a=Math.min((s-i)/o,1);t.textContent=e.prefix+Math.round(d(a)*e.num)+e.suffix,a<1&&requestAnimationFrame(n)};requestAnimationFrame(n)},r)}function g(t){let e=t.querySelector("li:first-child");if(!e)return!1;let r=e.textContent.trim().toLowerCase();return r===h||r.startsWith(h+":")}function A(t){let e=t.includes("\xB7")?"\xB7":" | ",r=t.split(e).map(s=>s.trim()).filter(Boolean);if(r.length<2)return null;let[o,i,n]=r;return{value:o,label:i,color:v(n)}}function M(t){return Array.from(t.querySelectorAll(":scope > li")).slice(1).map(e=>A(e.textContent.trim())).filter(Boolean)}function b(t){C();let e=M(t);if(!e.length)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=document.createElement("div");o.className="trl-stat-row";let i=[];e.forEach((n,s)=>{let a=document.createElement("div");a.className="trl-stat-card",a.style.setProperty("--trl-stat-color",n.color);let c=document.createElement("div");c.className="trl-stat-value";let u=document.createElement("div");u.className="trl-stat-label",u.textContent=n.label;let l=E(n.value);l&&!r?(c.textContent=l.prefix+"0"+l.suffix,i.push({el:c,parsed:l,delay:s*120})):c.textContent=n.value,a.appendChild(c),a.appendChild(u),o.appendChild(a)}),t.replaceWith(o),m(o,n=>{n||i.forEach(({el:s,parsed:a,delay:c})=>S(s,a,c)),o.classList.add("trl-stat-in")},.25)}function y(){document.querySelectorAll("ul").forEach(t=>{g(t)&&b(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y();x("ul",g,b);})();
