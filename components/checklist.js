/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function u(e,t){if(document.getElementById(e)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let r=document.createElement("style");r.id=e,r.textContent=t,document.head.appendChild(r)}function p(e,t,r=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let c=new IntersectionObserver(n=>{n[0].isIntersecting&&(t(!1),c.disconnect())},{threshold:r});c.observe(e)}function f(e,t,r){new MutationObserver(o=>{for(let c of o)for(let n of c.addedNodes){if(n.nodeType!==1)continue;(n.matches(e)?[n]:Array.from(n.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var m=`/* \u2500\u2500 Checklist \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
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
}
`;var b="checklist";function S(e,t){let r=e+"\0"+t.join(""),o=0;for(let n=0;n<r.length;n++)o=Math.imul(o,31)+r.charCodeAt(n)|0;return`trillian-cl-${location.pathname.replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").slice(0,40)}-${(o>>>0).toString(36)}`}function v(e){try{return new Set(JSON.parse(localStorage.getItem(e))||[])}catch(t){return new Set}}function $(e,t){try{localStorage.setItem(e,JSON.stringify([...t]))}catch(r){}}function x(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===b||r.startsWith(b+":")}function C(e){let t=e.querySelector("li:first-child").textContent.trim(),r=t.indexOf(":"),o=r>-1?t.slice(r+1).trim():"",c=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(n=>n.textContent.trim()).filter(Boolean);return{title:o,items:c}}function A(){u("trl-check-styles",m)}function q(e,t,r){let o=t?(r/t*100).toFixed(1):0,c=e.querySelector(".trl-check-bar-fill"),n=e.querySelector(".trl-check-bar"),l=e.querySelector(".trl-check-count");c&&(c.style.width=`${o}%`),n&&n.setAttribute("aria-valuenow",Math.round(o)),l&&(l.textContent=`${r} / ${t}`)}function E(e){let{title:t,items:r}=C(e),o=S(t,r),c=v(o),n=o.slice(-8),l=document.createElement("div");l.className="trl-check-widget",l.style.setProperty("--trl-check-accent","#4a90d9");let d=r.filter((s,i)=>c.has(i)).length,h=r.length?(d/r.length*100).toFixed(1):0;return l.innerHTML=`
    <div class="trl-check-header">
      <p class="trl-check-title">${t||"Checklist"}</p>
      <span class="trl-check-count">${d} / ${r.length}</span>
    </div>
    <div class="trl-check-bar"
         role="progressbar"
         aria-valuenow="${Math.round(h)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="trl-check-bar-fill" style="width:${h}%"></div>
    </div>
    <ul class="trl-check-list">
      ${r.map((s,i)=>`
        <li class="trl-check-item${c.has(i)?" trl-check-done":""}" data-i="${i}">
          <input class="trl-check-cb" type="checkbox" id="trl-check-${n}-${i}"${c.has(i)?" checked":""}>
          <label class="trl-check-lbl" for="trl-check-${n}-${i}">${s}</label>
        </li>`).join("")}
    </ul>
  `,l.querySelectorAll(".trl-check-item").forEach(s=>{let i=s.querySelector(".trl-check-cb"),y=s.querySelector(".trl-check-lbl");i.addEventListener("change",()=>{let a=parseInt(s.dataset.i,10);s.classList.toggle("trl-check-done",i.checked),i.checked?c.add(a):c.delete(a),$(o,c),q(l,r.length,c.size)}),s.addEventListener("click",a=>{a.target===i||y.contains(a.target)||i.click()})}),l}function g(e){A();let t=E(e);e.replaceWith(t),p(t,()=>t.classList.add("trl-check-in"))}function k(){document.querySelectorAll("ul").forEach(e=>{x(e)&&g(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k):k();f("ul",x,g);})();
