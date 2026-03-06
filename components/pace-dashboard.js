/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{var xe=Object.defineProperty,ge=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var ee=(t,e,o)=>e in t?xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,te=(t,e)=>{for(var o in e||(e={}))we.call(e,o)&&ee(t,o,e[o]);if(Q)for(var o of Q(e))be.call(e,o)&&ee(t,o,e[o]);return t},oe=(t,e)=>ge(t,ye(e));function Ce(t,e=".trillian"){let o=0,s=!1,n=-1;return t.replace(/([^{}]*)([\{\}])/g,(c,r,E)=>{if(E==="}")return s&&o===n&&(s=!1,n=-1),o--,r+"}";o++;let d=r.trim();return d?/^@keyframes\s/i.test(d)?(s=!0,n=o,r+"{"):s||d.startsWith("@")?r+"{":d.split(",").map(k=>`${e} ${k.trim()}`).join(", ")+" {":r+"{"})}function ne(t,e){if(document.getElementById(t))return;let o=document.createElement("style");o.id=t,o.textContent=Ce(e),document.head.appendChild(o)}function re(t,e,o=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e(!0);return}if(!("IntersectionObserver"in window)){e(!1);return}let n=new IntersectionObserver(c=>{c[0].isIntersecting&&(e(!1),n.disconnect())},{threshold:o});n.observe(t)}function ae(t,e,o){new MutationObserver(s=>{for(let n of s)for(let c of n.addedNodes){if(c.nodeType!==1)continue;(c.matches(t)?[c]:Array.from(c.querySelectorAll(t))).filter(e).forEach(o)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var Ee="pace-dashboard",se=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function ie(t){let e=se[0];for(let o of se)t>=o.lo&&(e=o);return e}var ke="http://www.w3.org/2000/svg",b=90,M=18,x=130,g=130,F=2*Math.PI*b,C=F/2;function w(t,e){let o=document.createElementNS(ke,t);for(let[s,n]of Object.entries(e))o.setAttribute(s,String(n));return o}function Me(t){let e=ie(t),o=Math.min(C,Math.max(0,t/2*C)),s=F-o,n=w("svg",{viewBox:"0 0 260 145","aria-hidden":"true",style:"width:100%"}),c=w("g",{transform:"rotate(180 "+x+" "+g+")"});c.appendChild(w("circle",{cx:x,cy:g,r:b,fill:"none",stroke:"#e8e4df","stroke-width":M,"stroke-dasharray":C.toFixed(2)+" "+C.toFixed(2),"stroke-linecap":"round"}));let r=w("circle",{cx:x,cy:g,r:b,fill:"none",stroke:e.color,"stroke-width":M,"stroke-dasharray":F.toFixed(2),"stroke-dashoffset":F.toFixed(2),"stroke-linecap":"round"});r.style.transition="stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.3s ease",c.appendChild(r),n.appendChild(c),[.4,.8,1.2,1.6].forEach(f=>{let l=180-f*90,[N,I]=[x+(b-M/2-1)*Math.cos(l*Math.PI/180),g-(b-M/2-1)*Math.sin(l*Math.PI/180)],[S,z]=[x+(b+M/2+1)*Math.cos(l*Math.PI/180),g-(b+M/2+1)*Math.sin(l*Math.PI/180)];n.appendChild(w("line",{x1:N.toFixed(1),y1:I.toFixed(1),x2:S.toFixed(1),y2:z.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let E=b-M/2-4,d=10,p=w("g",{});p.appendChild(w("polygon",{points:(x-E).toFixed(1)+","+g+" "+x+","+(g-d)+" "+x+","+(g+d),fill:e.color})),p.appendChild(w("circle",{cx:x,cy:g,r:d,fill:e.color})),n.appendChild(p),p.style.transformOrigin=x+"px "+g+"px",p.style.transform="rotate(0deg)",p.style.transition="transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";function k(f,l,N,I){let S=w("text",{x:f,y:l,"text-anchor":N,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return S.textContent=I,S}return n.appendChild(k("18","132","start","Behind")),n.appendChild(k("242","132","end","Ahead")),{svg:n,arc:r,needleG:p}}function Ne(){ne("trl-pace-styles",`
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
    .trl-pace-program {
      border-top: 1px solid #f0f0f0;
      padding-top: 12px;
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .trl-pace-section-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #ccc;
      margin: 0 0 2px;
    }
    .trl-pace-milestone {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 13px;
      gap: 8px;
    }
    .trl-pace-milestone-name {
      color: #aaa;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .trl-pace-milestone-name strong {
      display: block;
      font-weight: 600;
      color: #555;
      font-size: 11px;
    }
    .trl-pace-milestone-date {
      font-weight: 600;
      color: #222;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .trl-pace-milestone-done {
      font-weight: 600;
      color: #22c55e;
      white-space: nowrap;
      flex-shrink: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-pace-widget { transition: none; opacity: 1; }
    }
  `)}function Se(t){let e=window.ENV,o=t["course-id"]||e&&e.COURSE_ID||"demo",s=t["user-id"]||e&&e.current_user_id||"demo";return"trl-pace-data-"+o+"-"+s}function ve(t){try{return JSON.parse(localStorage.getItem(Se(t))||"[]")||[]}catch(e){return[]}}function De(t){return(t.vs+t.ss*t.ts)/2}function U(t){if(!t)return null;let e=new Date(t);return isNaN(e)?null:e}function V(t){return t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function le(t){Ne();let e={};Array.from(t.querySelectorAll(":scope > li")).slice(1).forEach(a=>{let i=a.textContent.trim(),m=i.indexOf(":");m>-1&&(e[i.slice(0,m).trim().toLowerCase()]=i.slice(m+1).trim())});let o=parseInt(e["total-pages"]||"0",10),s=U(e["start-date"]),n=U(e["end-date"]),c=U(e["target-date"]||""),r=(e["pace-metric"]||"counted").toLowerCase();if(!o||!s||!n)return;let E=ve(e),d=E.filter(a=>a.vs>=.5).length,p=E.filter(a=>a.vs>=1&&a.ss*a.ts>=1).length,k=E.filter(a=>De(a)>=.5).length,f=r==="completed"?p:r==="visited"?d:k,l=Date.now(),N=Math.max(432e5,l-s.getTime()),I=n.getTime()-s.getTime(),S=N/864e5,z=Math.min(1,N/I),O=z>0?f/o/z:0,P=ie(O),$=f/S,X=o-f,L=$>0&&X>0?new Date(l+X/$*864e5):f>=o?new Date(l):null,y=document.createElement("div");y.className="trl-pace-widget";let{svg:pe,arc:T,needleG:Y}=Me(0);y.appendChild(pe);let j=document.createElement("p");j.className="trl-pace-label",j.textContent=P.label,j.style.color=P.color,y.appendChild(j);let _=document.createElement("p");_.className="trl-pace-sub";let fe=Math.round(f/o*100);_.textContent=f===0?"Visit course pages to begin tracking":fe+"% complete"+(r==="completed"?" (deep reads)":""),y.appendChild(_);let R=document.createElement("div");R.className="trl-pace-stats";function A(a,i,m){let h=document.createElement("div");h.className="trl-pace-row";let K=document.createElement("span");K.className="trl-pace-row-label",K.textContent=a;let v=document.createElement("span");v.className="trl-pace-row-value"+(m?" trl-pace-dim":""),v.textContent=i,h.appendChild(K),h.appendChild(v),R.appendChild(h)}if(A("Pages visited",d+" of "+o,r!=="visited"),A("Pages counted",k+" of "+o,r!=="counted"),A("Pages completed",p+" of "+o,r!=="completed"),L&&A("Projected finish",V(L)),A("Course ends",V(n)),c&&L){let a=Math.round((c-L)/864e5),i=a>=0,m=document.createElement("div");m.className="trl-pace-track-pill "+(i?"trl-pace-track-yes":"trl-pace-track-no");let h=Math.abs(a);m.textContent=(i?"\u2713 ":"\u2717 ")+h+" day"+(h!==1?"s":"")+(i?" before":" after")+" your target",R.appendChild(m)}y.appendChild(R);let H=U(e["program-start-date"]||""),J=parseFloat(e["credits-earned"]||"NaN"),me=parseFloat(e["credits-per-course"]||"0");if(H&&!isNaN(J)){let a=o>0?f/o*me:0,i=J+a,m=Math.max(1,(l-H.getTime())/864e5),h=i/m,v=[{key:"milestone-mini",nameKey:"program-short-name",label:"Short Certificate"},{key:"milestone-cert",nameKey:"program-cert-name",label:"Certificate"},{key:"milestone-degree",nameKey:"program-degree-name",label:"AAS Degree"}].map(u=>oe(te({},u),{threshold:parseFloat(e[u.key]||"NaN"),name:e[u.nameKey]||""})).filter(u=>!isNaN(u.threshold)&&u.name);if(v.length){let u=document.createElement("div");u.className="trl-pace-program";let G=document.createElement("p");G.className="trl-pace-section-label",G.textContent="Program Outlook",u.appendChild(G),v.forEach(q=>{let B=document.createElement("div");B.className="trl-pace-milestone";let W=document.createElement("span");W.className="trl-pace-milestone-name";let Z=document.createElement("strong");Z.textContent=q.name,W.appendChild(Z),W.appendChild(document.createTextNode(q.label));let D=document.createElement("span");if(i>=q.threshold)D.className="trl-pace-milestone-done",D.textContent="\u2713 Reached";else if(D.className="trl-pace-milestone-date",h>0){let he=(q.threshold-i)/h;D.textContent=V(new Date(l+he*864e5))}else D.textContent="\u2014";B.appendChild(W),B.appendChild(D),u.appendChild(B)}),y.appendChild(u)}}t.replaceWith(y);let ue=window.matchMedia("(prefers-reduced-motion: reduce)").matches;re(y,()=>{if(y.classList.add("trl-pace-in"),ue)T.style.strokeDashoffset=(F-Math.min(C,Math.max(0,O/2*C))).toFixed(2),T.style.stroke=P.color,Y.style.transform="rotate("+Math.min(180,O*90).toFixed(1)+"deg)";else{let a=F-Math.min(C,Math.max(0,O/2*C));T.style.strokeDashoffset=a.toFixed(2),T.style.stroke=P.color,Y.style.transform="rotate("+Math.min(180,O*90).toFixed(1)+"deg)"}})}function de(t){let e=t.querySelector("li:first-child");return!!e&&e.textContent.trim().toLowerCase()===Ee}function ce(){document.querySelectorAll("ul").forEach(t=>{de(t)&&le(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce();ae("ul",de,le);})();
