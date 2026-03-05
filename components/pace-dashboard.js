/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{function te(e,t=".trillian"){let o=0,a=!1,n=-1;return e.replace(/([^{}]*)([\{\}])/g,(c,r,w)=>{if(w==="}")return a&&o===n&&(a=!1,n=-1),o--,r+"}";o++;let l=r.trim();return l?/^@keyframes\s/i.test(l)?(a=!0,n=o,r+"{"):a||l.startsWith("@")?r+"{":l.split(",").map(C=>`${t} ${C.trim()}`).join(", ")+" {":r+"{"})}function _(e,t){if(document.getElementById(e))return;let o=document.createElement("style");o.id=e,o.textContent=te(t),document.head.appendChild(o)}function V(e,t,o=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let n=new IntersectionObserver(c=>{c[0].isIntersecting&&(t(!1),n.disconnect())},{threshold:o});n.observe(e)}function G(e,t,o){new MutationObserver(a=>{for(let n of a)for(let c of n.addedNodes){if(c.nodeType!==1)continue;(c.matches(e)?[c]:Array.from(c.querySelectorAll(e))).filter(t).forEach(o)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var oe="pace-dashboard",K=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function Y(e){let t=K[0];for(let o of K)e>=o.lo&&(t=o);return t}var ne="http://www.w3.org/2000/svg",y=90,k=18,f=130,u=130,S=2*Math.PI*y,b=S/2;function x(e,t){let o=document.createElementNS(ne,e);for(let[a,n]of Object.entries(t))o.setAttribute(a,String(n));return o}function re(e){let t=Y(e),o=Math.min(b,Math.max(0,e/2*b)),a=S-o,n=x("svg",{viewBox:"0 0 260 145","aria-hidden":"true",style:"width:100%"}),c=x("g",{transform:"rotate(180 "+f+" "+u+")"});c.appendChild(x("circle",{cx:f,cy:u,r:y,fill:"none",stroke:"#e8e4df","stroke-width":k,"stroke-dasharray":b.toFixed(2)+" "+b.toFixed(2),"stroke-linecap":"round"}));let r=x("circle",{cx:f,cy:u,r:y,fill:"none",stroke:t.color,"stroke-width":k,"stroke-dasharray":S.toFixed(2),"stroke-dashoffset":S.toFixed(2),"stroke-linecap":"round"});r.style.transition="stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.3s ease",c.appendChild(r),n.appendChild(c),[.4,.8,1.2,1.6].forEach(d=>{let p=180-d*90,[v,N]=[f+(y-k/2-1)*Math.cos(p*Math.PI/180),u-(y-k/2-1)*Math.sin(p*Math.PI/180)],[E,I]=[f+(y+k/2+1)*Math.cos(p*Math.PI/180),u-(y+k/2+1)*Math.sin(p*Math.PI/180)];n.appendChild(x("line",{x1:v.toFixed(1),y1:N.toFixed(1),x2:E.toFixed(1),y2:I.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let w=y-k/2-4,l=5,i=x("g",{});i.appendChild(x("polygon",{points:(f-w).toFixed(1)+","+u+" "+f+","+(u-l)+" "+f+","+(u+l),fill:t.color})),i.appendChild(x("circle",{cx:f,cy:u,r:9,fill:"#fff",stroke:t.color,"stroke-width":"2.5"})),n.appendChild(i),i.style.transformOrigin=f+"px "+u+"px",i.style.transform="rotate(0deg)",i.style.transition="transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";function C(d,p,v,N){let E=x("text",{x:d,y:p,"text-anchor":v,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return E.textContent=N,E}return n.appendChild(C("18","132","start","Behind")),n.appendChild(C("242","132","end","Ahead")),{svg:n,arc:r,needleG:i}}function ae(){_("trl-pace-styles",`
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
  `)}function se(e){let t=window.ENV,o=e["course-id"]||t&&t.COURSE_ID||"demo",a=e["user-id"]||t&&t.current_user_id||"demo";return"trl-pace-data-"+o+"-"+a}function ce(e){try{return JSON.parse(localStorage.getItem(se(e))||"[]")||[]}catch(t){return[]}}function ie(e){return(e.vs+e.ss*e.ts)/2}function q(e){if(!e)return null;let t=new Date(e);return isNaN(t)?null:t}function $(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function H(e){ae();let t={};Array.from(e.querySelectorAll(":scope > li")).slice(1).forEach(s=>{let m=s.textContent.trim(),h=m.indexOf(":");h>-1&&(t[m.slice(0,h).trim().toLowerCase()]=m.slice(h+1).trim())});let o=parseInt(t["total-pages"]||"0",10),a=q(t["start-date"]),n=q(t["end-date"]),c=q(t["target-date"]||""),r=(t["pace-metric"]||"counted").toLowerCase();if(!o||!a||!n)return;let w=ce(t),l=w.filter(s=>s.vs>=.5).length,i=w.filter(s=>s.vs>=1&&s.ss*s.ts>=1).length,C=w.filter(s=>ie(s)>=.5).length,d=r==="completed"?i:r==="visited"?l:C,p=Date.now(),v=Math.max(432e5,p-a.getTime()),N=n.getTime()-a.getTime(),E=v/864e5,I=Math.min(1,v/N),F=I>0?d/o/I:0,A=Y(F),B=d/E,W=o-d,O=B>0&&W>0?new Date(p+W/B*864e5):d>=o?new Date(p):null,g=document.createElement("div");g.className="trl-pace-widget";let{svg:Z,arc:z,needleG:U}=re(0);g.appendChild(Z);let P=document.createElement("p");P.className="trl-pace-label",P.textContent=A.label,P.style.color=A.color,g.appendChild(P);let j=document.createElement("p");j.className="trl-pace-sub";let Q=Math.round(d/o*100);j.textContent=d===0?"Visit course pages to begin tracking":Q+"% complete"+(r==="completed"?" (deep reads)":""),g.appendChild(j);let L=document.createElement("div");L.className="trl-pace-stats";function D(s,m,h){let M=document.createElement("div");M.className="trl-pace-row";let T=document.createElement("span");T.className="trl-pace-row-label",T.textContent=s;let R=document.createElement("span");R.className="trl-pace-row-value"+(h?" trl-pace-dim":""),R.textContent=m,M.appendChild(T),M.appendChild(R),L.appendChild(M)}if(D("Pages visited",l+" of "+o,r!=="visited"),D("Pages counted",C+" of "+o,r!=="counted"),D("Pages completed",i+" of "+o,r!=="completed"),O&&D("Projected finish",$(O)),D("Course ends",$(n)),c&&O){let s=Math.round((c-O)/864e5),m=s>=0,h=document.createElement("div");h.className="trl-pace-track-pill "+(m?"trl-pace-track-yes":"trl-pace-track-no");let M=Math.abs(s);h.textContent=(m?"\u2713 ":"\u2717 ")+M+" day"+(M!==1?"s":"")+(m?" before":" after")+" your target",L.appendChild(h)}g.appendChild(L),e.replaceWith(g);let ee=window.matchMedia("(prefers-reduced-motion: reduce)").matches;V(g,()=>{if(g.classList.add("trl-pace-in"),ee)z.style.strokeDashoffset=(S-Math.min(b,Math.max(0,F/2*b))).toFixed(2),z.style.stroke=A.color,U.style.transform="rotate("+Math.min(180,F*90).toFixed(1)+"deg)";else{let s=S-Math.min(b,Math.max(0,F/2*b));z.style.strokeDashoffset=s.toFixed(2),z.style.stroke=A.color,U.style.transform="rotate("+Math.min(180,F*90).toFixed(1)+"deg)"}})}function J(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase()===oe}function X(){document.querySelectorAll("ul").forEach(e=>{J(e)&&H(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",X):X();G("ul",J,H);})();
