/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function p(t,e){if(document.getElementById(t))return;let n=document.createElement("style");n.id=t,n.textContent=e,document.head.appendChild(n)}function f(t,e,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e(!0);return}if(!("IntersectionObserver"in window)){e(!1);return}let r=new IntersectionObserver(o=>{o[0].isIntersecting&&(e(!1),r.disconnect())},{threshold:n});r.observe(t)}function b(t,e,n){new MutationObserver(c=>{for(let r of c)for(let o of r.addedNodes){if(o.nodeType!==1)continue;(o.matches(t)?[o]:Array.from(o.querySelectorAll(t))).filter(e).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var h="checklist";function w(t,e){let n=t+"\0"+e.join(""),c=0;for(let o=0;o<n.length;o++)c=Math.imul(c,31)+n.charCodeAt(o)|0;return`trillian-cl-${location.pathname.replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").slice(0,40)}-${(c>>>0).toString(36)}`}function v(t){try{return new Set(JSON.parse(localStorage.getItem(t))||[])}catch(e){return new Set}}function S(t,e){try{localStorage.setItem(t,JSON.stringify([...e]))}catch(n){}}function x(t){let e=t.querySelector("li:first-child");if(!e)return!1;let n=e.textContent.trim().toLowerCase();return n===h||n.startsWith(h+":")}function k(t){let e=t.querySelector("li:first-child").textContent.trim(),n=e.indexOf(":"),c=n>-1?e.slice(n+1).trim():"",r=Array.from(t.querySelectorAll(":scope > li")).slice(1).map(o=>o.textContent.trim()).filter(Boolean);return{title:c,items:r}}function $(){p("tc-styles",`
    .tc-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      padding: 22px 24px 20px;
      max-width: 520px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .tc-widget.tc-in { opacity: 1; }
    .tc-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .tc-title {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      margin: 0;
    }
    .tc-count { font-size: 12px; color: #bbb; }
    .tc-bar {
      height: 4px;
      background: #eee;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .tc-bar-fill {
      height: 100%;
      background: var(--tc-accent);
      border-radius: 2px;
      width: 0%;
      transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tc-list { list-style: none; margin: 0; padding: 0; }
    .tc-item {
      display: flex;
      align-items: flex-start;
      gap: 11px;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .tc-item:hover { background: #f7f7f7; }
    .tc-cb {
      appearance: none;
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      min-width: 18px;
      border: 2px solid #d4d4d4;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      margin-top: 2px;
      background: #fff;
      transition: background 0.15s, border-color 0.15s;
    }
    .tc-cb:checked {
      background: var(--tc-accent);
      border-color: var(--tc-accent);
    }
    .tc-cb:checked::after {
      content: '';
      position: absolute;
      left: 3px;
      top: 0px;
      width: 6px;
      height: 10px;
      border: 2px solid #fff;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }
    .tc-cb:focus-visible { outline: 2px solid var(--tc-accent); outline-offset: 2px; }
    .tc-lbl {
      font-size: 14px;
      line-height: 1.55;
      color: #333;
      cursor: pointer;
      user-select: none;
      transition: color 0.2s;
    }
    .tc-item.tc-done .tc-lbl { color: #bbb; text-decoration: line-through; }
    @media (prefers-reduced-motion: reduce) {
      .tc-widget { transition: none; opacity: 1; }
      .tc-bar-fill, .tc-item { transition: none; }
    }
  `)}function C(t,e,n){let c=e?(n/e*100).toFixed(1):0,r=t.querySelector(".tc-bar-fill"),o=t.querySelector(".tc-bar"),a=t.querySelector(".tc-count");r&&(r.style.width=`${c}%`),o&&o.setAttribute("aria-valuenow",Math.round(c)),a&&(a.textContent=`${n} / ${e}`)}function A(t){let{title:e,items:n}=k(t),c=w(e,n),r=v(c),o=c.slice(-8),a=document.createElement("div");a.className="tc-widget",a.style.setProperty("--tc-accent","#4a90d9");let d=n.filter((s,i)=>r.has(i)).length,u=n.length?(d/n.length*100).toFixed(1):0;return a.innerHTML=`
    <div class="tc-header">
      <p class="tc-title">${e||"Checklist"}</p>
      <span class="tc-count">${d} / ${n.length}</span>
    </div>
    <div class="tc-bar"
         role="progressbar"
         aria-valuenow="${Math.round(u)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="tc-bar-fill" style="width:${u}%"></div>
    </div>
    <ul class="tc-list">
      ${n.map((s,i)=>`
        <li class="tc-item${r.has(i)?" tc-done":""}" data-i="${i}">
          <input class="tc-cb" type="checkbox" id="tc-${o}-${i}"${r.has(i)?" checked":""}>
          <label class="tc-lbl" for="tc-${o}-${i}">${s}</label>
        </li>`).join("")}
    </ul>
  `,a.querySelectorAll(".tc-item").forEach(s=>{let i=s.querySelector(".tc-cb"),y=s.querySelector(".tc-lbl");i.addEventListener("change",()=>{let l=parseInt(s.dataset.i,10);s.classList.toggle("tc-done",i.checked),i.checked?r.add(l):r.delete(l),S(c,r),C(a,n.length,r.size)}),s.addEventListener("click",l=>{l.target===i||y.contains(l.target)||i.click()})}),a}function g(t){$();let e=A(t);t.replaceWith(e),f(e,()=>e.classList.add("tc-in"))}function m(){document.querySelectorAll("ul").forEach(t=>{x(t)&&g(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m();b("ul",x,g);})();
