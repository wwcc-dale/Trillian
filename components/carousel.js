/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function g(t,e){if(document.getElementById(t)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let r=document.createElement("style");r.id=t,r.textContent=e,document.head.appendChild(r)}function b(t,e,r){new MutationObserver(s=>{for(let n of s)for(let o of n.addedNodes){if(o.nodeType!==1)continue;(o.matches(t)?[o]:Array.from(o.querySelectorAll(t))).filter(e).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var y=`/* \u2500\u2500 Carousel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
  .trl-carousel {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 560px;
    box-sizing: border-box;
  }
  .trl-carousel-stage {
    position: relative;
  }
  .trl-carousel-viewport {
    overflow: hidden;
    border-radius: 12px;
    background: #f4f4f4;
  }
  .trl-carousel-track {
    display: flex;
    transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .trl-carousel-slide {
    flex: 0 0 100%;
    width: 100%;
    box-sizing: border-box;
    min-height: 160px;
  }
  .trl-carousel-slide--image img {
    width: 100%;
    display: block;
    max-height: 360px;
    object-fit: cover;
    border-radius: 12px;
  }
  .trl-carousel-caption {
    font-size: 12px;
    color: #aaa;
    text-align: center;
    padding: 8px 16px 12px;
    margin: 0;
  }
  .trl-carousel-slide--content {
    padding: 28px 24px;
    background: #fff;
  }
  .trl-carousel-slide-title {
    font-size: 16px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
  }
  .trl-carousel-body {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }
  .trl-carousel-body ul { margin: 0; padding-left: 18px; }
  .trl-carousel-body li { margin: 4px 0; }
  .trl-carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(0,0,0,0.08);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    box-shadow: 0 1px 4px rgba(0,0,0,0.12);
    padding: 0;
    z-index: 2;
    transition: box-shadow 0.15s ease;
  }
  .trl-carousel-btn:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.18); }
  .trl-carousel-btn svg { width: 16px; height: 16px; }
  .trl-carousel-prev { left: 8px; }
  .trl-carousel-next { right: 8px; }
  .trl-carousel-btn[disabled] { opacity: 0.25; pointer-events: none; }
  .trl-carousel-dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    padding: 10px 0 0;
  }
  .trl-carousel-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ddd;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .trl-carousel-dot--active { background: #333; transform: scale(1.25); }

  @media (prefers-reduced-motion: reduce) {
    .trl-carousel-track { transition: none; }
    .trl-carousel-dot   { transition: none; }
  }
}
`;var S="carousel",A='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',N='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';function L(){g("trl-carousel-styles",y)}function E(t){let e=t.querySelector("li:first-child");return!!e&&e.textContent.trim().toLowerCase().startsWith(S)}function M(t){let e=t.cloneNode(!0);return e.querySelectorAll("ul").forEach(r=>r.remove()),e.querySelectorAll("img").length>=1&&e.textContent.trim()===""}function T(t){return Array.from(t.childNodes).filter(e=>e.nodeType===3||e.nodeType===1&&e.tagName!=="UL").map(e=>e.textContent).join("").trim()}function j(t){let e=document.createElement("div");if(M(t)){e.className="trl-carousel-slide trl-carousel-slide--image";let r=t.querySelector("img"),s=document.createElement("img");if(s.src=r.src,s.alt=r.alt,e.appendChild(s),r.alt){let n=document.createElement("p");n.className="trl-carousel-caption",n.textContent=r.alt,e.appendChild(n)}}else{e.className="trl-carousel-slide trl-carousel-slide--content";let r=t.querySelector(":scope > ul"),s=T(t);if(s){let o=document.createElement("p");o.className="trl-carousel-slide-title",o.textContent=s,e.appendChild(o)}let n=document.createElement("div");if(n.className="trl-carousel-body",r){let o=document.createElement("ul");Array.from(r.querySelectorAll(":scope > li")).forEach(m=>{let a=document.createElement("li");a.innerHTML=m.innerHTML,o.appendChild(a)}),n.appendChild(o)}else n.innerHTML=t.innerHTML;e.appendChild(n)}return e}function w(t){L();let e=Array.from(t.querySelectorAll(":scope > li")).slice(1);if(!e.length)return;let r=document.createElement("div");r.className="trl-carousel",r.setAttribute("tabindex","0");let s=document.createElement("div");s.className="trl-carousel-stage";let n=document.createElement("div");n.className="trl-carousel-viewport";let o=document.createElement("div");o.className="trl-carousel-track";let m=e.map(l=>{let i=j(l);return o.appendChild(i),i});n.appendChild(o),s.appendChild(n);let a=document.createElement("button");a.className="trl-carousel-btn trl-carousel-prev",a.setAttribute("aria-label","Previous slide"),a.innerHTML=A;let d=document.createElement("button");d.className="trl-carousel-btn trl-carousel-next",d.setAttribute("aria-label","Next slide"),d.innerHTML=N,s.appendChild(a),s.appendChild(d),r.appendChild(s);let f=document.createElement("div");f.className="trl-carousel-dots";let h=m.length,c=0,C=Array.from({length:h},(l,i)=>{let p=document.createElement("button");return p.className="trl-carousel-dot"+(i===0?" trl-carousel-dot--active":""),p.setAttribute("aria-label","Slide "+(i+1)),p.addEventListener("click",()=>u(i)),f.appendChild(p),p});r.appendChild(f);function u(l){c=Math.max(0,Math.min(h-1,l)),o.style.transform="translateX(-"+c*100+"%)",C.forEach((i,p)=>i.classList.toggle("trl-carousel-dot--active",p===c)),a.disabled=c===0,d.disabled=c===h-1}a.addEventListener("click",()=>u(c-1)),d.addEventListener("click",()=>u(c+1)),r.addEventListener("keydown",l=>{l.key==="ArrowLeft"&&(u(c-1),l.preventDefault()),l.key==="ArrowRight"&&(u(c+1),l.preventDefault())});let x=0;n.addEventListener("touchstart",l=>{x=l.touches[0].clientX},{passive:!0}),n.addEventListener("touchend",l=>{let i=l.changedTouches[0].clientX-x;Math.abs(i)>40&&u(c+(i<0?1:-1))},{passive:!0}),h<=1&&(a.style.display="none",d.style.display="none",f.style.display="none"),u(0),t.replaceWith(r)}function v(){document.querySelectorAll("ul").forEach(t=>{E(t)&&w(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();b("ul",E,w);})();
