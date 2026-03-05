/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function m(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function h(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(r=>r.innerHTML):[]}function g(e,t){if(document.getElementById(e))return;let r=document.createElement("style");r.id=e,r.textContent=t,document.head.appendChild(r)}function x(e,t,r=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let i=new IntersectionObserver(n=>{n[0].isIntersecting&&(t(!1),i.disconnect())},{threshold:r});i.observe(e)}function b(e,t,r){new MutationObserver(c=>{for(let i of c)for(let n of i.addedNodes){if(n.nodeType!==1)continue;(n.matches(e)?[n]:Array.from(n.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var y="accordion",C='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function E(){g("tac-styles",`
    .tac-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      overflow: hidden;
      max-width: 640px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .tac-widget.tac-in { opacity: 1; }
    .tac-label {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      padding: 18px 20px 0;
      margin: 0;
    }
    .tac-item { border-bottom: 1px solid #f0f0f0; }
    .tac-item:last-child { border-bottom: none; }
    .tac-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      padding: 16px 20px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      color: #222;
      text-align: left;
      transition: background 0.15s;
    }
    .tac-trigger:hover { background: #fafafa; }
    .tac-trigger:focus-visible { outline: 2px solid var(--tac-accent); outline-offset: -2px; }
    .tac-chevron {
      flex-shrink: 0;
      color: #aaa;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tac-trigger[aria-expanded="true"] .tac-chevron { transform: rotate(180deg); }
    .tac-panel {
      overflow: hidden;
      height: 0;
      transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .tac-panel-inner {
      padding: 4px 20px 18px;
      font-size: 14px;
      line-height: 1.65;
      color: #555;
    }
    .tac-panel-inner p { margin: 0; }
    .tac-panel-inner p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .tac-widget { transition: none; opacity: 1; }
      .tac-panel, .tac-chevron { transition: none; }
    }
  `)}function S(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function M(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function v(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===y||r.startsWith(y+":")}function L(e){let t=e.querySelector("li:first-child").textContent.trim(),r=t.indexOf(":"),c=r>-1?t.slice(r+1).trim():"",i=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(n=>({heading:m(n),paras:h(n)})).filter(n=>n.heading);return{label:c,items:i}}function A(e){E();let{label:t,items:r}=L(e);if(!r.length)return;let c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.createElement("div");if(i.className="tac-widget",i.style.setProperty("--tac-accent","#4a90d9"),t){let n=document.createElement("p");n.className="tac-label",n.textContent=t,i.appendChild(n)}r.forEach((n,l)=>{let u=`tac-panel-${l}-${Math.random().toString(36).slice(2,7)}`,f=`tac-btn-${l}-${Math.random().toString(36).slice(2,7)}`,s=document.createElement("div");s.className="tac-item";let o=document.createElement("button");o.className="tac-trigger",o.id=f,o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls",u),o.innerHTML=`<span>${n.heading}</span><span class="tac-chevron">${C}</span>`;let a=document.createElement("div");a.className="tac-panel",a.id=u,a.setAttribute("role","region"),a.setAttribute("aria-labelledby",f),a.style.height="0";let p=document.createElement("div");p.className="tac-panel-inner",p.innerHTML=n.paras.length?n.paras.map(d=>`<p>${d}</p>`).join(""):"<p></p>",a.appendChild(p),o.addEventListener("click",()=>{let d=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!d)),d?M(a,c):S(a,c)}),s.appendChild(o),s.appendChild(a),i.appendChild(s)}),e.replaceWith(i),x(i,()=>i.classList.add("tac-in"))}function w(){document.querySelectorAll("ul").forEach(e=>{v(e)&&A(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();b("ul",v,A);})();
