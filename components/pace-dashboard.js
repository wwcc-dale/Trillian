/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{var ge=Object.defineProperty,ye=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ee=(t,e,o)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,te=(t,e)=>{for(var o in e||(e={}))we.call(e,o)&&ee(t,o,e[o]);if(Q)for(var o of Q(e))Ce.call(e,o)&&ee(t,o,e[o]);return t},oe=(t,e)=>ye(t,be(e));function ne(t,e){if(document.getElementById(t)||getComputedStyle(document.documentElement).getPropertyValue("--trl-css-loaded").trim()==="1")return;let o=document.createElement("style");o.id=t,o.textContent=e,document.head.appendChild(o)}function re(t,e,o=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e(!0);return}if(!("IntersectionObserver"in window)){e(!1);return}let r=new IntersectionObserver(a=>{a[0].isIntersecting&&(e(!1),r.disconnect())},{threshold:o});r.observe(t)}function ae(t,e,o){new MutationObserver(i=>{for(let r of i)for(let a of r.addedNodes){if(a.nodeType!==1)continue;(a.matches(t)?[a]:Array.from(a.querySelectorAll(t))).filter(e).forEach(o)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var se=`/* \u2500\u2500 Pace Dashboard \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.trillian {
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
}
`;var ke="pace-dashboard",ce=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function le(t){let e=ce[0];for(let o of ce)t>=o.lo&&(e=o);return e}var Me="http://www.w3.org/2000/svg",b=90,C=18,h=130,x=130,v=2*Math.PI*b,w=v/2;function y(t,e){let o=document.createElementNS(Me,t);for(let[i,r]of Object.entries(e))o.setAttribute(i,String(r));return o}function Ne(t){let e=le(t),o=Math.min(w,Math.max(0,t/2*w)),i=v-o,r=y("svg",{viewBox:"0 0 260 145","aria-hidden":"true",style:"width:100%"}),a=y("g",{transform:"rotate(180 "+h+" "+x+")"});a.appendChild(y("circle",{cx:h,cy:x,r:b,fill:"none",stroke:"#e8e4df","stroke-width":C,"stroke-dasharray":w.toFixed(2)+" "+w.toFixed(2),"stroke-linecap":"round"}));let l=y("circle",{cx:h,cy:x,r:b,fill:"none",stroke:e.color,"stroke-width":C,"stroke-dasharray":v.toFixed(2),"stroke-dashoffset":v.toFixed(2),"stroke-linecap":"round"});l.style.transition="stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.3s ease",a.appendChild(l),r.appendChild(a),[.4,.8,1.2,1.6].forEach(d=>{let c=180-d*90,[k,I]=[h+(b-C/2-1)*Math.cos(c*Math.PI/180),x-(b-C/2-1)*Math.sin(c*Math.PI/180)],[M,P]=[h+(b+C/2+1)*Math.cos(c*Math.PI/180),x-(b+C/2+1)*Math.sin(c*Math.PI/180)];r.appendChild(y("line",{x1:k.toFixed(1),y1:I.toFixed(1),x2:M.toFixed(1),y2:P.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let D=b-C/2-4,E=10,f=y("g",{});f.appendChild(y("polygon",{points:(h-D).toFixed(1)+","+x+" "+h+","+(x-E)+" "+h+","+(x+E),fill:e.color})),f.appendChild(y("circle",{cx:h,cy:x,r:E,fill:e.color})),r.appendChild(f),f.style.transformOrigin=h+"px "+x+"px",f.style.transform="rotate(0deg)",f.style.transition="transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";function F(d,c,k,I){let M=y("text",{x:d,y:c,"text-anchor":k,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return M.textContent=I,M}return r.appendChild(F("18","132","start","Behind")),r.appendChild(F("242","132","end","Ahead")),{svg:r,arc:l,needleG:f}}function Se(){ne("trl-pace-styles",se)}function ve(t){let e=window.ENV,o=t["course-id"]||e&&e.COURSE_ID||"demo",i=t["user-id"]||e&&e.current_user_id||"demo";return"trl-pace-data-"+o+"-"+i}function De(t){try{return JSON.parse(localStorage.getItem(ve(t))||"[]")||[]}catch(e){return[]}}function Fe(t){return(t.vs+t.ss*t.ts)/2}function U(t){if(!t)return null;let e=new Date(t);return isNaN(e)?null:e}function G(t){return t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function de(t){Se();let e={};Array.from(t.querySelectorAll(":scope > li")).slice(1).forEach(n=>{let s=n.textContent.trim(),p=s.indexOf(":");p>-1&&(e[s.slice(0,p).trim().toLowerCase()]=s.slice(p+1).trim())});let o=parseInt(e["total-pages"]||"0",10),i=U(e["start-date"]),r=U(e["end-date"]),a=U(e["target-date"]||""),l=(e["pace-metric"]||"counted").toLowerCase();if(!o||!i||!r)return;let D=De(e),E=D.filter(n=>n.vs>=.5).length,f=D.filter(n=>n.vs>=1&&n.ss*n.ts>=1).length,F=D.filter(n=>Fe(n)>=.5).length,d=l==="completed"?f:l==="visited"?E:F,c=Date.now(),k=Math.max(432e5,c-i.getTime()),I=r.getTime()-i.getTime(),M=k/864e5,P=Math.min(1,k/I),O=P>0?d/o/P:0,z=le(O),$=d/M,X=o-d,L=$>0&&X>0?new Date(c+X/$*864e5):d>=o?new Date(c):null,g=document.createElement("div");g.className="trl-pace-widget";let{svg:me,arc:T,needleG:Y}=Ne(0);g.appendChild(me);let j=document.createElement("p");j.className="trl-pace-label",j.textContent=z.label,j.style.color=z.color,g.appendChild(j);let V=document.createElement("p");V.className="trl-pace-sub";let fe=Math.round(d/o*100);V.textContent=d===0?"Visit course pages to begin tracking":fe+"% complete"+(l==="completed"?" (deep reads)":""),g.appendChild(V);let R=document.createElement("div");R.className="trl-pace-stats";function A(n,s,p){let u=document.createElement("div");u.className="trl-pace-row";let K=document.createElement("span");K.className="trl-pace-row-label",K.textContent=n;let N=document.createElement("span");N.className="trl-pace-row-value"+(p?" trl-pace-dim":""),N.textContent=s,u.appendChild(K),u.appendChild(N),R.appendChild(u)}if(A("Pages visited",E+" of "+o,l!=="visited"),A("Pages counted",F+" of "+o,l!=="counted"),A("Pages completed",f+" of "+o,l!=="completed"),L&&A("Projected finish",G(L)),A("Course ends",G(r)),a&&L){let n=Math.round((a-L)/864e5),s=n>=0,p=document.createElement("div");p.className="trl-pace-track-pill "+(s?"trl-pace-track-yes":"trl-pace-track-no");let u=Math.abs(n);p.textContent=(s?"\u2713 ":"\u2717 ")+u+" day"+(u!==1?"s":"")+(s?" before":" after")+" your target",R.appendChild(p)}g.appendChild(R);let H=U(e["program-start-date"]||""),J=parseFloat(e["credits-earned"]||"NaN"),ue=parseFloat(e["credits-per-course"]||"0");if(H&&!isNaN(J)){let n=o>0?d/o*ue:0,s=J+n,p=Math.max(1,(c-H.getTime())/864e5),u=s/p,N=[{key:"milestone-mini",nameKey:"program-short-name",label:"Short Certificate"},{key:"milestone-cert",nameKey:"program-cert-name",label:"Certificate"},{key:"milestone-degree",nameKey:"program-degree-name",label:"AAS Degree"}].map(m=>oe(te({},m),{threshold:parseFloat(e[m.key]||"NaN"),name:e[m.nameKey]||""})).filter(m=>!isNaN(m.threshold)&&m.name);if(N.length){let m=document.createElement("div");m.className="trl-pace-program";let _=document.createElement("p");_.className="trl-pace-section-label",_.textContent="Program Outlook",m.appendChild(_),N.forEach(q=>{let B=document.createElement("div");B.className="trl-pace-milestone";let W=document.createElement("span");W.className="trl-pace-milestone-name";let Z=document.createElement("strong");Z.textContent=q.name,W.appendChild(Z),W.appendChild(document.createTextNode(q.label));let S=document.createElement("span");if(s>=q.threshold)S.className="trl-pace-milestone-done",S.textContent="\u2713 Reached";else if(S.className="trl-pace-milestone-date",u>0){let xe=(q.threshold-s)/u;S.textContent=G(new Date(c+xe*864e5))}else S.textContent="\u2014";B.appendChild(W),B.appendChild(S),m.appendChild(B)}),g.appendChild(m)}}t.replaceWith(g);let he=window.matchMedia("(prefers-reduced-motion: reduce)").matches;re(g,()=>{if(g.classList.add("trl-pace-in"),he)T.style.strokeDashoffset=(v-Math.min(w,Math.max(0,O/2*w))).toFixed(2),T.style.stroke=z.color,Y.style.transform="rotate("+Math.min(180,O*90).toFixed(1)+"deg)";else{let n=v-Math.min(w,Math.max(0,O/2*w));T.style.strokeDashoffset=n.toFixed(2),T.style.stroke=z.color,Y.style.transform="rotate("+Math.min(180,O*90).toFixed(1)+"deg)"}})}function pe(t){let e=t.querySelector("li:first-child");return!!e&&e.textContent.trim().toLowerCase()===ke}function ie(){document.querySelectorAll("ul").forEach(t=>{pe(t)&&de(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ie):ie();ae("ul",pe,de);})();
