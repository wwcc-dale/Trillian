/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function y(t,r=".trillian"){let e=0,n=!1,c=-1;return t.replace(/([^{}]*)([\{\}])/g,(o,i,h)=>{if(h==="}")return n&&e===c&&(n=!1,c=-1),e--,i+"}";e++;let a=i.trim();return a?/^@keyframes\s/i.test(a)?(n=!0,c=e,i+"{"):n||a.startsWith("@")?i+"{":a.split(",").map(l=>`${r} ${l.trim()}`).join(", ")+" {":i+"{"})}function u(t,r){if(document.getElementById(t))return;let e=document.createElement("style");e.id=t,e.textContent=y(r),document.head.appendChild(e)}function p(t,r,e=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!0);return}if(!("IntersectionObserver"in window)){r(!1);return}let c=new IntersectionObserver(o=>{o[0].isIntersecting&&(r(!1),c.disconnect())},{threshold:e});c.observe(t)}function f(t,r,e){new MutationObserver(n=>{for(let c of n)for(let o of c.addedNodes){if(o.nodeType!==1)continue;(o.matches(t)?[o]:Array.from(o.querySelectorAll(t))).filter(r).forEach(e)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var b="checklist";function w(t,r){let e=t+"\0"+r.join(""),n=0;for(let o=0;o<e.length;o++)n=Math.imul(n,31)+e.charCodeAt(o)|0;return`trillian-cl-${location.pathname.replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").slice(0,40)}-${(n>>>0).toString(36)}`}function S(t){try{return new Set(JSON.parse(localStorage.getItem(t))||[])}catch(r){return new Set}}function v(t,r){try{localStorage.setItem(t,JSON.stringify([...r]))}catch(e){}}function m(t){let r=t.querySelector("li:first-child");if(!r)return!1;let e=r.textContent.trim().toLowerCase();return e===b||e.startsWith(b+":")}function $(t){let r=t.querySelector("li:first-child").textContent.trim(),e=r.indexOf(":"),n=e>-1?r.slice(e+1).trim():"",c=Array.from(t.querySelectorAll(":scope > li")).slice(1).map(o=>o.textContent.trim()).filter(Boolean);return{title:n,items:c}}function C(){u("trl-check-styles",`
    .trl-check-widget {
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
    .trl-check-widget.trl-check-in { opacity: 1; }
    .trl-check-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .trl-check-title {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      margin: 0;
    }
    .trl-check-count { font-size: 12px; color: #bbb; }
    .trl-check-bar {
      height: 4px;
      background: #eee;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .trl-check-bar-fill {
      height: 100%;
      background: var(--trl-check-accent);
      border-radius: 2px;
      width: 0%;
      transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-check-list { list-style: none; margin: 0; padding: 0; }
    .trl-check-item {
      display: flex;
      align-items: flex-start;
      gap: 11px;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .trl-check-item:hover { background: #f7f7f7; }
    .trl-check-cb {
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
    .trl-check-cb:checked {
      background: var(--trl-check-accent);
      border-color: var(--trl-check-accent);
    }
    .trl-check-cb:checked::after {
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
    .trl-check-cb:focus-visible { outline: 2px solid var(--trl-check-accent); outline-offset: 2px; }
    .trl-check-lbl {
      font-size: 14px;
      line-height: 1.55;
      color: #333;
      cursor: pointer;
      user-select: none;
      transition: color 0.2s;
    }
    .trl-check-item.trl-check-done .trl-check-lbl { color: #bbb; text-decoration: line-through; }
    @media (prefers-reduced-motion: reduce) {
      .trl-check-widget { transition: none; opacity: 1; }
      .trl-check-bar-fill, .trl-check-item { transition: none; }
    }
  `)}function A(t,r,e){let n=r?(e/r*100).toFixed(1):0,c=t.querySelector(".trl-check-bar-fill"),o=t.querySelector(".trl-check-bar"),i=t.querySelector(".trl-check-count");c&&(c.style.width=`${n}%`),o&&o.setAttribute("aria-valuenow",Math.round(n)),i&&(i.textContent=`${e} / ${r}`)}function q(t){let{title:r,items:e}=$(t),n=w(r,e),c=S(n),o=n.slice(-8),i=document.createElement("div");i.className="trl-check-widget",i.style.setProperty("--trl-check-accent","#4a90d9");let h=e.filter((s,l)=>c.has(l)).length,a=e.length?(h/e.length*100).toFixed(1):0;return i.innerHTML=`
    <div class="trl-check-header">
      <p class="trl-check-title">${r||"Checklist"}</p>
      <span class="trl-check-count">${h} / ${e.length}</span>
    </div>
    <div class="trl-check-bar"
         role="progressbar"
         aria-valuenow="${Math.round(a)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="trl-check-bar-fill" style="width:${a}%"></div>
    </div>
    <ul class="trl-check-list">
      ${e.map((s,l)=>`
        <li class="trl-check-item${c.has(l)?" trl-check-done":""}" data-i="${l}">
          <input class="trl-check-cb" type="checkbox" id="trl-check-${o}-${l}"${c.has(l)?" checked":""}>
          <label class="trl-check-lbl" for="trl-check-${o}-${l}">${s}</label>
        </li>`).join("")}
    </ul>
  `,i.querySelectorAll(".trl-check-item").forEach(s=>{let l=s.querySelector(".trl-check-cb"),g=s.querySelector(".trl-check-lbl");l.addEventListener("change",()=>{let d=parseInt(s.dataset.i,10);s.classList.toggle("trl-check-done",l.checked),l.checked?c.add(d):c.delete(d),v(n,c),A(i,e.length,c.size)}),s.addEventListener("click",d=>{d.target===l||g.contains(d.target)||l.click()})}),i}function x(t){C();let r=q(t);t.replaceWith(r),p(r,()=>r.classList.add("trl-check-in"))}function k(){document.querySelectorAll("ul").forEach(t=>{m(t)&&x(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k):k();f("ul",m,x);})();
