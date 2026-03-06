/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function C(r,e=".trillian"){let t=0,o=!1,n=-1;return r.replace(/([^{}]*)([\{\}])/g,(s,c,i)=>{if(i==="}")return o&&t===n&&(o=!1,n=-1),t--,c+"}";t++;let a=c.trim();return a?/^@keyframes\s/i.test(a)?(o=!0,n=t,c+"{"):o||a.startsWith("@")?c+"{":a.split(",").map(f=>`${e} ${f.trim()}`).join(", ")+" {":c+"{"})}function g(r,e){if(document.getElementById(r))return;let t=document.createElement("style");t.id=r,t.textContent=C(e),document.head.appendChild(t)}function b(r,e,t){new MutationObserver(o=>{for(let n of o)for(let s of n.addedNodes){if(s.nodeType!==1)continue;(s.matches(r)?[s]:Array.from(s.querySelectorAll(r))).filter(e).forEach(t)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var k="carousel",A='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',N='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';function S(){g("trl-carousel-styles",`
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
  `)}function v(r){let e=r.querySelector("li:first-child");return!!e&&e.textContent.trim().toLowerCase().startsWith(k)}function L(r){let e=r.cloneNode(!0);return e.querySelectorAll("ul").forEach(t=>t.remove()),e.querySelectorAll("img").length>=1&&e.textContent.trim()===""}function M(r){return Array.from(r.childNodes).filter(e=>e.nodeType===3||e.nodeType===1&&e.tagName!=="UL").map(e=>e.textContent).join("").trim()}function T(r){let e=document.createElement("div");if(L(r)){e.className="trl-carousel-slide trl-carousel-slide--image";let t=r.querySelector("img"),o=document.createElement("img");if(o.src=t.src,o.alt=t.alt,e.appendChild(o),t.alt){let n=document.createElement("p");n.className="trl-carousel-caption",n.textContent=t.alt,e.appendChild(n)}}else{e.className="trl-carousel-slide trl-carousel-slide--content";let t=r.querySelector(":scope > ul"),o=M(r);if(o){let s=document.createElement("p");s.className="trl-carousel-slide-title",s.textContent=o,e.appendChild(s)}let n=document.createElement("div");if(n.className="trl-carousel-body",t){let s=document.createElement("ul");Array.from(t.querySelectorAll(":scope > li")).forEach(c=>{let i=document.createElement("li");i.innerHTML=c.innerHTML,s.appendChild(i)}),n.appendChild(s)}else n.innerHTML=r.innerHTML;e.appendChild(n)}return e}function E(r){S();let e=Array.from(r.querySelectorAll(":scope > li")).slice(1);if(!e.length)return;let t=document.createElement("div");t.className="trl-carousel",t.setAttribute("tabindex","0");let o=document.createElement("div");o.className="trl-carousel-stage";let n=document.createElement("div");n.className="trl-carousel-viewport";let s=document.createElement("div");s.className="trl-carousel-track";let c=e.map(l=>{let d=T(l);return s.appendChild(d),d});n.appendChild(s),o.appendChild(n);let i=document.createElement("button");i.className="trl-carousel-btn trl-carousel-prev",i.setAttribute("aria-label","Previous slide"),i.innerHTML=A;let a=document.createElement("button");a.className="trl-carousel-btn trl-carousel-next",a.setAttribute("aria-label","Next slide"),a.innerHTML=N,o.appendChild(i),o.appendChild(a),t.appendChild(o);let h=document.createElement("div");h.className="trl-carousel-dots";let f=c.length,u=0,w=Array.from({length:f},(l,d)=>{let m=document.createElement("button");return m.className="trl-carousel-dot"+(d===0?" trl-carousel-dot--active":""),m.setAttribute("aria-label","Slide "+(d+1)),m.addEventListener("click",()=>p(d)),h.appendChild(m),m});t.appendChild(h);function p(l){u=Math.max(0,Math.min(f-1,l)),s.style.transform="translateX(-"+u*100+"%)",w.forEach((d,m)=>d.classList.toggle("trl-carousel-dot--active",m===u)),i.disabled=u===0,a.disabled=u===f-1}i.addEventListener("click",()=>p(u-1)),a.addEventListener("click",()=>p(u+1)),t.addEventListener("keydown",l=>{l.key==="ArrowLeft"&&(p(u-1),l.preventDefault()),l.key==="ArrowRight"&&(p(u+1),l.preventDefault())});let x=0;n.addEventListener("touchstart",l=>{x=l.touches[0].clientX},{passive:!0}),n.addEventListener("touchend",l=>{let d=l.changedTouches[0].clientX-x;Math.abs(d)>40&&p(u+(d<0?1:-1))},{passive:!0}),f<=1&&(i.style.display="none",a.style.display="none",h.style.display="none"),p(0),r.replaceWith(t)}function y(){document.querySelectorAll("ul").forEach(r=>{v(r)&&E(r)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y();b("ul",v,E);})();
