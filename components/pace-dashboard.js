/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function te(e,t=".trillian"){let o=0,a=!1,n=-1;return e.replace(/([^{}]*)([\{\}])/g,(c,r,w)=>{if(w==="}")return a&&o===n&&(a=!1,n=-1),o--,r+"}";o++;let i=r.trim();return i?/^@keyframes\s/i.test(i)?(a=!0,n=o,r+"{"):a||i.startsWith("@")?r+"{":i.split(",").map(C=>`${t} ${C.trim()}`).join(", ")+" {":r+"{"})}function _(e,t){if(document.getElementById(e))return;let o=document.createElement("style");o.id=e,o.textContent=te(t),document.head.appendChild(o)}function V(e,t,o=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let n=new IntersectionObserver(c=>{c[0].isIntersecting&&(t(!1),n.disconnect())},{threshold:o});n.observe(e)}function G(e,t,o){new MutationObserver(a=>{for(let n of a)for(let c of n.addedNodes){if(c.nodeType!==1)continue;(c.matches(e)?[c]:Array.from(c.querySelectorAll(e))).filter(t).forEach(o)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var oe="pace-dashboard",K=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function Y(e){let t=K[0];for(let o of K)e>=o.lo&&(t=o);return t}var ne="http://www.w3.org/2000/svg",y=90,k=18,m=130,h=130,S=2*Math.PI*y,b=S/2;function g(e,t){let o=document.createElementNS(ne,e);for(let[a,n]of Object.entries(t))o.setAttribute(a,String(n));return o}function re(e){let t=Y(e),o=Math.min(b,Math.max(0,e/2*b)),a=S-o,n=g("svg",{viewBox:"0 0 260 145","aria-hidden":"true",style:"width:100%"}),c=g("g",{transform:"rotate(180 "+m+" "+h+")"});c.appendChild(g("circle",{cx:m,cy:h,r:y,fill:"none",stroke:"#e8e4df","stroke-width":k,"stroke-dasharray":b.toFixed(2)+" "+b.toFixed(2),"stroke-linecap":"round"}));let r=g("circle",{cx:m,cy:h,r:y,fill:"none",stroke:t.color,"stroke-width":k,"stroke-dasharray":S.toFixed(2),"stroke-dashoffset":S.toFixed(2),"stroke-linecap":"round"});r.style.transition="stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.3s ease",c.appendChild(r),n.appendChild(c),[.4,.8,1.2,1.6].forEach(d=>{let p=180-d*90,[v,N]=[m+(y-k/2-1)*Math.cos(p*Math.PI/180),h-(y-k/2-1)*Math.sin(p*Math.PI/180)],[E,I]=[m+(y+k/2+1)*Math.cos(p*Math.PI/180),h-(y+k/2+1)*Math.sin(p*Math.PI/180)];n.appendChild(g("line",{x1:v.toFixed(1),y1:N.toFixed(1),x2:E.toFixed(1),y2:I.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let w=y-k/2-4,i=10,l=g("g",{});l.appendChild(g("polygon",{points:(m-w).toFixed(1)+","+h+" "+m+","+(h-i)+" "+m+","+(h+i),fill:t.color})),n.appendChild(l),l.style.transformOrigin=m+"px "+h+"px",l.style.transform="rotate(0deg)",l.style.transition="transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";function C(d,p,v,N){let E=g("text",{x:d,y:p,"text-anchor":v,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return E.textContent=N,E}return n.appendChild(C("18","132","start","Behind")),n.appendChild(C("242","132","end","Ahead")),{svg:n,arc:r,needleG:l}}function ae(){_("trl-pace-styles",`
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
      margin: 4px 0 2px;
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
    .trl-pace-row-value.trl-pace-dim { color: #bbb; font-weight: 400; }
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
  `)}function se(e){let t=window.ENV,o=e["course-id"]||t&&t.COURSE_ID||"demo",a=e["user-id"]||t&&t.current_user_id||"demo";return"trl-pace-data-"+o+"-"+a}function ce(e){try{return JSON.parse(localStorage.getItem(se(e))||"[]")||[]}catch(t){return[]}}function ie(e){return(e.vs+e.ss*e.ts)/2}function q(e){if(!e)return null;let t=new Date(e);return isNaN(t)?null:t}function $(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function H(e){ae();let t={};Array.from(e.querySelectorAll(":scope > li")).slice(1).forEach(s=>{let f=s.textContent.trim(),u=f.indexOf(":");u>-1&&(t[f.slice(0,u).trim().toLowerCase()]=f.slice(u+1).trim())});let o=parseInt(t["total-pages"]||"0",10),a=q(t["start-date"]),n=q(t["end-date"]),c=q(t["target-date"]||""),r=(t["pace-metric"]||"counted").toLowerCase();if(!o||!a||!n)return;let w=ce(t),i=w.filter(s=>s.vs>=.5).length,l=w.filter(s=>s.vs>=1&&s.ss*s.ts>=1).length,C=w.filter(s=>ie(s)>=.5).length,d=r==="completed"?l:r==="visited"?i:C,p=Date.now(),v=Math.max(432e5,p-a.getTime()),N=n.getTime()-a.getTime(),E=v/864e5,I=Math.min(1,v/N),F=I>0?d/o/I:0,A=Y(F),B=d/E,W=o-d,O=B>0&&W>0?new Date(p+W/B*864e5):d>=o?new Date(p):null,x=document.createElement("div");x.className="trl-pace-widget";let{svg:Z,arc:z,needleG:U}=re(0);x.appendChild(Z);let P=document.createElement("p");P.className="trl-pace-label",P.textContent=A.label,P.style.color=A.color,x.appendChild(P);let j=document.createElement("p");j.className="trl-pace-sub";let Q=Math.round(d/o*100);j.textContent=d===0?"Visit course pages to begin tracking":Q+"% complete"+(r==="completed"?" (deep reads)":""),x.appendChild(j);let L=document.createElement("div");L.className="trl-pace-stats";function D(s,f,u){let M=document.createElement("div");M.className="trl-pace-row";let T=document.createElement("span");T.className="trl-pace-row-label",T.textContent=s;let R=document.createElement("span");R.className="trl-pace-row-value"+(u?" trl-pace-dim":""),R.textContent=f,M.appendChild(T),M.appendChild(R),L.appendChild(M)}if(D("Pages visited",i+" of "+o,r!=="visited"),D("Pages counted",C+" of "+o,r!=="counted"),D("Pages completed",l+" of "+o,r!=="completed"),O&&D("Projected finish",$(O)),D("Course ends",$(n)),c&&O){let s=Math.round((c-O)/864e5),f=s>=0,u=document.createElement("div");u.className="trl-pace-track-pill "+(f?"trl-pace-track-yes":"trl-pace-track-no");let M=Math.abs(s);u.textContent=(f?"\u2713 ":"\u2717 ")+M+" day"+(M!==1?"s":"")+(f?" before":" after")+" your target",L.appendChild(u)}x.appendChild(L),e.replaceWith(x);let ee=window.matchMedia("(prefers-reduced-motion: reduce)").matches;V(x,()=>{if(x.classList.add("trl-pace-in"),ee)z.style.strokeDashoffset=(S-Math.min(b,Math.max(0,F/2*b))).toFixed(2),z.style.stroke=A.color,U.style.transform="rotate("+Math.min(180,F*90).toFixed(1)+"deg)";else{let s=S-Math.min(b,Math.max(0,F/2*b));z.style.strokeDashoffset=s.toFixed(2),z.style.stroke=A.color,U.style.transform="rotate("+Math.min(180,F*90).toFixed(1)+"deg)"}})}function J(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase()===oe}function X(){document.querySelectorAll("ul").forEach(e=>{J(e)&&H(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",X):X();G("ul",J,H);})();
