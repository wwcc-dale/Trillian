/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function f(e){return 1-Math.pow(1-e,3)}function m(e,t){if(document.getElementById(e))return;let n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function p(e,t,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let i=new IntersectionObserver(r=>{r[0].isIntersecting&&(t(!1),i.disconnect())},{threshold:n});i.observe(e)}function x(e,t,n){new MutationObserver(o=>{for(let i of o)for(let r of i.addedNodes){if(r.nodeType!==1)continue;(r.matches(e)?[r]:Array.from(r.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var h="stats",u={accent:"#4a90d9",cert:"#7b68ee",degree:"#e8a838",success:"#22c55e",error:"#ef4444",neutral:"#888888"};function w(e){if(!e)return u.accent;let t=e.trim().toLowerCase();return u[t]?u[t]:/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{6}$/i.test(e)?e.trim():u.accent}function v(){m("ts-styles",`
    .ts-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .ts-row.ts-in { opacity: 1; }
    .ts-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 80px;
      background: #fff;
      border-radius: 14px;
      border-top: 4px solid var(--ts-color);
      padding: 16px 14px 14px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.07);
      box-sizing: border-box;
      text-align: center;
    }
    .ts-value {
      font-size: 32px;
      font-weight: 800;
      line-height: 1;
      color: var(--ts-color);
      letter-spacing: -0.03em;
      font-variant-numeric: tabular-nums;
    }
    .ts-label {
      font-size: 12px;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.02em;
      line-height: 1.3;
    }
    @media (prefers-reduced-motion: reduce) {
      .ts-row { transition: none; opacity: 1; }
    }
  `)}function C(e){let t=e.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);if(!t)return null;let n=parseFloat(t[2].replace(/,/g,""));return isNaN(n)?null:{prefix:t[1],num:n,suffix:t[3]}}function E(e,t,n){let o=Math.max(600,Math.min(1400,t.num*20));setTimeout(()=>{let i=performance.now(),r=c=>{let s=Math.min((c-i)/o,1);e.textContent=t.prefix+Math.round(f(s)*t.num)+t.suffix,s<1&&requestAnimationFrame(r)};requestAnimationFrame(r)},n)}function g(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===h||n.startsWith(h+":")}function A(e){let t=e.includes("\xB7")?"\xB7":" | ",n=e.split(t).map(c=>c.trim()).filter(Boolean);if(n.length<2)return null;let[o,i,r]=n;return{value:o,label:i,color:w(r)}}function M(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>A(t.textContent.trim())).filter(Boolean)}function b(e){v();let t=M(e);if(!t.length)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=document.createElement("div");o.className="ts-row";let i=[];t.forEach((r,c)=>{let s=document.createElement("div");s.className="ts-card",s.style.setProperty("--ts-color",r.color);let a=document.createElement("div");a.className="ts-value";let d=document.createElement("div");d.className="ts-label",d.textContent=r.label;let l=C(r.value);l&&!n?(a.textContent=l.prefix+"0"+l.suffix,i.push({el:a,parsed:l,delay:c*120})):a.textContent=r.value,s.appendChild(a),s.appendChild(d),o.appendChild(s)}),e.replaceWith(o),p(o,r=>{r||i.forEach(({el:c,parsed:s,delay:a})=>E(c,s,a)),o.classList.add("ts-in")},.25)}function y(){document.querySelectorAll("ul").forEach(e=>{g(e)&&b(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y();x("ul",g,b);})();
