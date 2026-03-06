/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function a(e,n,r){new MutationObserver(o=>{for(let i of o)for(let l of i.addedNodes){if(l.nodeType!==1)continue;(l.matches(e)?[l]:Array.from(l.querySelectorAll(e))).filter(n).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var c=`/* \u2500\u2500 Lightbox \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* NOTE: Not scoped to .trillian \u2014 overlay lives at document.body level. */

.trl-lb-trigger {
  cursor: zoom-in;
}
.trl-lb-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.22s ease;
}
.trl-lb-overlay.trl-lb-open { opacity: 1; pointer-events: auto; }
.trl-lb-img {
  max-width: 92vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.6);
  transform: scale(0.94);
  transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}
.trl-lb-overlay.trl-lb-open .trl-lb-img { transform: scale(1); }
.trl-lb-caption {
  color: rgba(255, 255, 255, 0.65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 13px;
  max-width: 640px;
  text-align: center;
  line-height: 1.5;
  padding: 0 24px;
}
.trl-lb-close {
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.55);
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;
}
.trl-lb-close:hover { color: #fff; }

@media (prefers-reduced-motion: reduce) {
  .trl-lb-overlay { transition: none; }
  .trl-lb-img { transition: none; transform: none; }
}
`;var d="trl-lb-styles";function y(){if(document.getElementById(d))return;let e=document.createElement("style");e.id=d,e.textContent=c,document.head.appendChild(e)}var t=null;function g(){if(t)return t;t=document.createElement("div"),t.className="trl-lb-overlay",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Image viewer");let e=document.createElement("button");e.className="trl-lb-close",e.setAttribute("aria-label","Close"),e.textContent="\xD7",e.addEventListener("click",o=>{o.stopPropagation(),s()});let n=document.createElement("img");n.className="trl-lb-img",n.alt="",n.addEventListener("click",o=>o.stopPropagation());let r=document.createElement("p");return r.className="trl-lb-caption",t.appendChild(e),t.appendChild(n),t.appendChild(r),t.addEventListener("click",s),document.body.appendChild(t),t}function h(e,n){let r=g(),o=r.querySelector(".trl-lb-img"),i=r.querySelector(".trl-lb-caption");o.src=e,o.alt=n,i.textContent=n,i.hidden=!n,requestAnimationFrame(()=>r.classList.add("trl-lb-open")),document.addEventListener("keydown",p)}function s(){t&&(t.classList.remove("trl-lb-open"),document.removeEventListener("keydown",p))}function p(e){e.key==="Escape"&&s()}function m(e){return!e.closest("a")&&!e.dataset.trlLb}function f(e){y(),e.dataset.trlLb="1",e.classList.add("trl-lb-trigger"),e.addEventListener("click",()=>h(e.src,e.alt||""))}function u(){document.querySelectorAll("img").forEach(e=>{m(e)&&f(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();a("img",m,f);})();
