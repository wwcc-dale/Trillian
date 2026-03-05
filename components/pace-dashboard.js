/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function Z(e,t=".trillian"){let n=0,r=!1,a=-1;return e.replace(/([^{}]*)([\{\}])/g,(s,l,c)=>{if(c==="}")return r&&n===a&&(r=!1,a=-1),n--,l+"}";n++;let o=l.trim();return o?/^@keyframes\s/i.test(o)?(r=!0,a=n,l+"{"):r||o.startsWith("@")?l+"{":o.split(",").map(p=>`${t} ${p.trim()}`).join(", ")+" {":l+"{"})}function P(e,t){if(document.getElementById(e))return;let n=document.createElement("style");n.id=e,n.textContent=Z(t),document.head.appendChild(n)}function q(e,t,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let a=new IntersectionObserver(s=>{s[0].isIntersecting&&(t(!1),a.disconnect())},{threshold:n});a.observe(e)}function B(e,t,n){new MutationObserver(r=>{for(let a of r)for(let s of a.addedNodes){if(s.nodeType!==1)continue;(s.matches(e)?[s]:Array.from(s.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var G="pace-dashboard",L=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function V(e){let t=L[0];for(let n of L)e>=n.lo&&(t=n);return t}var H="http://www.w3.org/2000/svg",C=88,A=20,h=130,g=130,W=2*Math.PI*C,J=W/2,O=J/5;function x(e,t){let n=document.createElementNS(H,e);for(let[r,a]of Object.entries(t))n.setAttribute(r,String(a));return n}function X(e){let t=(180-Math.min(2,Math.max(0,e))*90)*Math.PI/180,n=C-A/2-4;return[h+n*Math.cos(t),g-n*Math.sin(t)]}function Y(e){let t=V(e),n=x("svg",{viewBox:"0 0 260 138","aria-hidden":"true",style:"width:100%"}),r=x("g",{transform:"rotate(180 "+h+" "+g+")"});L.forEach((c,o)=>{let d=(o*O).toFixed(2),p=(W-(o+1)*O).toFixed(2);r.appendChild(x("circle",{cx:h,cy:g,r:C,fill:"none",stroke:c.color,"stroke-width":A,"stroke-dasharray":d+" "+O.toFixed(2)+" "+p,opacity:t===c?"1":"0.18","stroke-linecap":"butt"}))}),n.appendChild(r),[.4,.8,1.2,1.6].forEach(c=>{let o=(180-c*90)*Math.PI/180,d=C-A/2-5,p=C+A/2+5,y=h+d*Math.cos(o),E=g-d*Math.sin(o),M=h+p*Math.cos(o),S=g-p*Math.sin(o);n.appendChild(x("line",{x1:y.toFixed(1),y1:E.toFixed(1),x2:M.toFixed(1),y2:S.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let[a,s]=X(e);n.appendChild(x("line",{x1:h,y1:g,x2:a.toFixed(2),y2:s.toFixed(2),stroke:t.color,"stroke-width":"3.5","stroke-linecap":"round"})),n.appendChild(x("circle",{cx:h,cy:g,r:"7",fill:t.color}));function l(c,o,d,p){let y=x("text",{x:c,y:o,"text-anchor":d,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return y.textContent=p,y}return n.appendChild(l("14","132","start","Behind")),n.appendChild(l("246","132","end","Ahead")),n}function Q(){P("trl-pace-styles",`
    .trl-pace-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08);
      padding: 20px 20px 18px;
      max-width: 320px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-pace-widget.trl-pace-in { opacity: 1; }
    .trl-pace-label {
      font-size: 22px;
      font-weight: 800;
      text-align: center;
      margin: 6px 0 2px;
      letter-spacing: -0.02em;
    }
    .trl-pace-sub {
      font-size: 12px;
      color: #aaa;
      text-align: center;
      margin: 0 0 14px;
    }
    .trl-pace-stats {
      border-top: 1px solid #f0f0f0;
      padding-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .trl-pace-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 13px;
    }
    .trl-pace-row-label { color: #aaa; }
    .trl-pace-row-value { font-weight: 600; color: #222; }
    .trl-pace-track-pill {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 10px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      margin-top: 4px;
    }
    .trl-pace-track-yes { background: #f0fdf4; color: #15803d; }
    .trl-pace-track-no  { background: #fef2f2; color: #b91c1c; }
    @media (prefers-reduced-motion: reduce) {
      .trl-pace-widget { transition: none; opacity: 1; }
    }
  `)}function ee(){let e=window.ENV;return"trl-pace-log-"+(e&&e.COURSE_ID||"demo")+"-"+(e&&e.current_user_id||"demo")}function te(){try{let e=localStorage.getItem(ee()),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch(e){return[]}}function I(e){if(!e)return null;let t=new Date(e);return isNaN(t)?null:t}function R(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function U(e){Q();let t={};Array.from(e.querySelectorAll(":scope > li")).slice(1).forEach(b=>{let f=b.textContent.trim(),i=f.indexOf(":");i>-1&&(t[f.slice(0,i).trim().toLowerCase()]=f.slice(i+1).trim())});let n=parseInt(t["total-pages"]||"0",10),r=I(t["start-date"]),a=I(t["end-date"]),s=I(t["target-date"]||"");if(!n||!r||!a)return;let c=te().length,o=Date.now(),d=Math.max(432e5,o-r.getTime()),p=a.getTime()-r.getTime(),y=d/864e5,E=Math.min(1,d/p),M=c/n,S=E>0?M/E:0,z=c/y,T=n-c,k=z>0&&T>0?new Date(o+T/z*864e5):c>=n?new Date(o):null,j=V(S),u=document.createElement("div");u.className="trl-pace-widget",u.appendChild(Y(S));let N=document.createElement("p");N.className="trl-pace-label",N.textContent=j.label,N.style.color=j.color,u.appendChild(N);let F=document.createElement("p");F.className="trl-pace-sub";let $=Math.round(M*100);F.textContent=c===0?"Visit course pages to begin tracking":$+"% complete",u.appendChild(F);let v=document.createElement("div");v.className="trl-pace-stats";function D(b,f){let i=document.createElement("div");i.className="trl-pace-row";let w=document.createElement("span");w.className="trl-pace-row-label",w.textContent=b;let m=document.createElement("span");m.className="trl-pace-row-value",m.textContent=f,i.appendChild(w),i.appendChild(m),v.appendChild(i)}if(D("Pages visited",c+" of "+n),D("Projected finish",k?R(k):"\u2014"),D("Course ends",R(a)),s&&k){let b=Math.round((s-k)/864e5),f=b>=0,i=document.createElement("div");i.className="trl-pace-track-pill "+(f?"trl-pace-track-yes":"trl-pace-track-no");let w=f?"\u2713":"\u2717",m=Math.abs(b);i.textContent=f?w+" "+m+" day"+(m!==1?"s":"")+" before your target":w+" "+m+" day"+(m!==1?"s":"")+" after your target",v.appendChild(i)}u.appendChild(v),e.replaceWith(u),q(u,()=>u.classList.add("trl-pace-in"))}function K(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase()===G}function _(){document.querySelectorAll("ul").forEach(e=>{K(e)&&U(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_):_();B("ul",K,U);})();
