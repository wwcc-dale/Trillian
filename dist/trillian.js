/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{var jt=Object.create;var xe=Object.defineProperty,Ht=Object.defineProperties,qt=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,Ut=Object.getOwnPropertyNames,$e=Object.getOwnPropertySymbols,Gt=Object.getPrototypeOf,Le=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable;var Me=(e,t,r)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ne=(e,t)=>{for(var r in t||(t={}))Le.call(t,r)&&Me(e,r,t[r]);if($e)for(var r of $e(t))Wt.call(t,r)&&Me(e,r,t[r]);return e},_e=(e,t)=>Ht(e,Bt(t));var Vt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Kt=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ut(t))!Le.call(e,n)&&n!==r&&xe(e,n,{get:()=>t[n],enumerable:!(o=qt(t,n))||o.enumerable});return e};var Xt=(e,t,r)=>(r=e!=null?jt(Gt(e)):{},Kt(t||!e||!e.__esModule?xe(r,"default",{value:e,enumerable:!0}):r,e));var wt=Vt((Nn,fe)=>{var Kr=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};var w=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,o={},n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function i(s){return s instanceof a?new a(s.type,i(s.content),s.alias):Array.isArray(s)?s.map(i):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(i){return Object.prototype.toString.call(i).slice(8,-1)},objId:function(i){return i.__id||Object.defineProperty(i,"__id",{value:++r}),i.__id},clone:function i(s,g){g=g||{};var h,b;switch(n.util.type(s)){case"Object":if(b=n.util.objId(s),g[b])return g[b];h={},g[b]=h;for(var k in s)s.hasOwnProperty(k)&&(h[k]=i(s[k],g));return h;case"Array":return b=n.util.objId(s),g[b]?g[b]:(h=[],g[b]=h,s.forEach(function(S,v){h[v]=i(S,g)}),h);default:return s}},getLanguage:function(i){for(;i;){var s=t.exec(i.className);if(s)return s[1].toLowerCase();i=i.parentElement}return"none"},setLanguage:function(i,s){i.className=i.className.replace(RegExp(t,"gi"),""),i.classList.add("language-"+s)},currentScript:function(){if(typeof document=="undefined")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(h){var i=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if(i){var s=document.getElementsByTagName("script");for(var g in s)if(s[g].src==i)return s[g]}return null}},isActive:function(i,s,g){for(var h="no-"+s;i;){var b=i.classList;if(b.contains(s))return!0;if(b.contains(h))return!1;i=i.parentElement}return!!g}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(i,s){var g=n.util.clone(n.languages[i]);for(var h in s)g[h]=s[h];return g},insertBefore:function(i,s,g,h){h=h||n.languages;var b=h[i],k={};for(var S in b)if(b.hasOwnProperty(S)){if(S==s)for(var v in g)g.hasOwnProperty(v)&&(k[v]=g[v]);g.hasOwnProperty(S)||(k[S]=b[S])}var $=h[i];return h[i]=k,n.languages.DFS(n.languages,function(M,z){z===$&&M!=i&&(this[M]=k)}),k},DFS:function i(s,g,h,b){b=b||{};var k=n.util.objId;for(var S in s)if(s.hasOwnProperty(S)){g.call(s,S,s[S],h||S);var v=s[S],$=n.util.type(v);$==="Object"&&!b[k(v)]?(b[k(v)]=!0,i(v,g,null,b)):$==="Array"&&!b[k(v)]&&(b[k(v)]=!0,i(v,g,S,b))}}},plugins:{},highlightAll:function(i,s){n.highlightAllUnder(document,i,s)},highlightAllUnder:function(i,s,g){var h={callback:g,container:i,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),n.hooks.run("before-all-elements-highlight",h);for(var b=0,k;k=h.elements[b++];)n.highlightElement(k,s===!0,h.callback)},highlightElement:function(i,s,g){var h=n.util.getLanguage(i),b=n.languages[h];n.util.setLanguage(i,h);var k=i.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(k,h);var S=i.textContent,v={element:i,language:h,grammar:b,code:S};function $(z){v.highlightedCode=z,n.hooks.run("before-insert",v),v.element.innerHTML=v.highlightedCode,n.hooks.run("after-highlight",v),n.hooks.run("complete",v),g&&g.call(v.element)}if(n.hooks.run("before-sanity-check",v),k=v.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!v.code){n.hooks.run("complete",v),g&&g.call(v.element);return}if(n.hooks.run("before-highlight",v),!v.grammar){$(n.util.encode(v.code));return}if(s&&e.Worker){var M=new Worker(n.filename);M.onmessage=function(z){$(z.data)},M.postMessage(JSON.stringify({language:v.language,code:v.code,immediateClose:!0}))}else $(n.highlight(v.code,v.grammar,v.language))},highlight:function(i,s,g){var h={code:i,grammar:s,language:g};if(n.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=n.tokenize(h.code,h.grammar),n.hooks.run("after-tokenize",h),a.stringify(n.util.encode(h.tokens),h.language)},tokenize:function(i,s){var g=s.rest;if(g){for(var h in g)s[h]=g[h];delete s.rest}var b=new c;return u(b,b.head,i),x(i,b,s,b.head,0),d(b)},hooks:{all:{},add:function(i,s){var g=n.hooks.all;g[i]=g[i]||[],g[i].push(s)},run:function(i,s){var g=n.hooks.all[i];if(!(!g||!g.length))for(var h=0,b;b=g[h++];)b(s)}},Token:a};e.Prism=n;function a(i,s,g,h){this.type=i,this.content=s,this.alias=g,this.length=(h||"").length|0}a.stringify=function i(s,g){if(typeof s=="string")return s;if(Array.isArray(s)){var h="";return s.forEach(function($){h+=i($,g)}),h}var b={type:s.type,content:i(s.content,g),tag:"span",classes:["token",s.type],attributes:{},language:g},k=s.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(b.classes,k):b.classes.push(k)),n.hooks.run("wrap",b);var S="";for(var v in b.attributes)S+=" "+v+'="'+(b.attributes[v]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+S+">"+b.content+"</"+b.tag+">"};function p(i,s,g,h){i.lastIndex=s;var b=i.exec(g);if(b&&h&&b[1]){var k=b[1].length;b.index+=k,b[0]=b[0].slice(k)}return b}function x(i,s,g,h,b,k){for(var S in g)if(!(!g.hasOwnProperty(S)||!g[S])){var v=g[S];v=Array.isArray(v)?v:[v];for(var $=0;$<v.length;++$){if(k&&k.cause==S+","+$)return;var M=v[$],z=M.inside,J=!!M.lookbehind,ee=!!M.greedy,be=M.alias;if(ee&&!M.pattern.global){var te=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,te+"g")}for(var W=M.pattern||M,N=h.next,P=b;N!==s.tail&&!(k&&P>=k.reach);P+=N.value.length,N=N.next){var V=N.value;if(s.length>i.length)return;if(!(V instanceof a)){var re=1,E;if(ee){if(E=p(W,P,i,J),!E||E.index>=i.length)break;var B=E.index,O=E.index+E[0].length,L=P;for(L+=N.value.length;B>=L;)N=N.next,L+=N.value.length;if(L-=N.value.length,P=L,N.value instanceof a)continue;for(var T=N;T!==s.tail&&(L<O||typeof T.value=="string");T=T.next)re++,L+=T.value.length;re--,V=i.slice(P,L),E.index-=P}else if(E=p(W,0,V,J),!E)continue;var B=E.index,j=E[0],I=V.slice(0,B),ne=V.slice(B+j.length),K=P+V.length;k&&K>k.reach&&(k.reach=K);var U=N.prev;I&&(U=u(s,U,I),P+=I.length),l(s,U,re);var ae=new a(S,z?n.tokenize(j,z):j,be,j);if(N=u(s,U,ae),ne&&u(s,N,ne),re>1){var oe={cause:S+","+$,reach:K};x(i,s,g,N.prev,P,oe),k&&oe.reach>k.reach&&(k.reach=oe.reach)}}}}}}function c(){var i={value:null,prev:null,next:null},s={value:null,prev:i,next:null};i.next=s,this.head=i,this.tail=s,this.length=0}function u(i,s,g){var h=s.next,b={value:g,prev:s,next:h};return s.next=b,h.prev=b,i.length++,b}function l(i,s,g){for(var h=s.next,b=0;b<g&&h!==i.tail;b++)h=h.next;s.next=h,h.prev=s,i.length-=b}function d(i){for(var s=[],g=i.head.next;g!==i.tail;)s.push(g.value),g=g.next;return s}if(!e.document)return e.addEventListener&&(n.disableWorkerMessageHandler||e.addEventListener("message",function(i){var s=JSON.parse(i.data),g=s.language,h=s.code,b=s.immediateClose;e.postMessage(n.highlight(h,n.languages[g],g)),b&&e.close()},!1)),n;var f=n.util.currentScript();f&&(n.filename=f.src,f.hasAttribute("data-manual")&&(n.manual=!0));function m(){n.manual||n.highlightAll()}if(!n.manual){var y=document.readyState;y==="loading"||y==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return n}(Kr);typeof fe!="undefined"&&fe.exports&&(fe.exports=w);typeof global!="undefined"&&(global.Prism=w);w.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};w.languages.markup.tag.inside["attr-value"].inside.entity=w.languages.markup.entity;w.languages.markup.doctype.inside["internal-subset"].inside=w.languages.markup;w.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(w.languages.markup.tag,"addInlined",{value:function(t,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:w.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};n["language-"+r]={pattern:/[\s\S]+/,inside:w.languages[r]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},w.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(w.languages.markup.tag,"addAttribute",{value:function(e,t){w.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:w.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});w.languages.html=w.languages.markup;w.languages.mathml=w.languages.markup;w.languages.svg=w.languages.markup;w.languages.xml=w.languages.extend("markup",{});w.languages.ssml=w.languages.xml;w.languages.atom=w.languages.xml;w.languages.rss=w.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(w);w.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};w.languages.javascript=w.languages.extend("clike",{"class-name":[w.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});w.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;w.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:w.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:w.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:w.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:w.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:w.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});w.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:w.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});w.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});w.languages.markup&&(w.languages.markup.tag.addInlined("script","javascript"),w.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));w.languages.js=w.languages.javascript;(function(){if(typeof w=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",t=function(f,m){return"\u2716 Error "+f+" while fetching file: "+m},r="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a="loading",p="loaded",x="failed",c="pre[data-src]:not(["+n+'="'+p+'"]):not(['+n+'="'+a+'"])';function u(f,m,y){var i=new XMLHttpRequest;i.open("GET",f,!0),i.onreadystatechange=function(){i.readyState==4&&(i.status<400&&i.responseText?m(i.responseText):i.status>=400?y(t(i.status,i.statusText)):y(r))},i.send(null)}function l(f){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f||"");if(m){var y=Number(m[1]),i=m[2],s=m[3];return i?s?[y,Number(s)]:[y,void 0]:[y,y]}}w.hooks.add("before-highlightall",function(f){f.selector+=", "+c}),w.hooks.add("before-sanity-check",function(f){var m=f.element;if(m.matches(c)){f.code="",m.setAttribute(n,a);var y=m.appendChild(document.createElement("CODE"));y.textContent=e;var i=m.getAttribute("data-src"),s=f.language;if(s==="none"){var g=(/\.(\w+)$/.exec(i)||[,"none"])[1];s=o[g]||g}w.util.setLanguage(y,s),w.util.setLanguage(m,s);var h=w.plugins.autoloader;h&&h.loadLanguages(s),u(i,function(b){m.setAttribute(n,p);var k=l(m.getAttribute("data-range"));if(k){var S=b.split(/\r\n?|\n/g),v=k[0],$=k[1]==null?S.length:k[1];v<0&&(v+=S.length),v=Math.max(0,Math.min(v-1,S.length)),$<0&&($+=S.length),$=Math.max(0,Math.min($,S.length)),b=S.slice(v,$).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(v+1))}y.textContent=b,w.highlightElement(y)},function(b){m.setAttribute(n,x),y.textContent=b})}}),w.plugins.fileHighlight={highlight:function(m){for(var y=(m||document).querySelectorAll(c),i=0,s;s=y[i++];)w.highlightElement(s)}};var d=!1;w.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),w.plugins.fileHighlight.highlight.apply(this,arguments)}})()});function X(e,t){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(t*255).toString(16).padStart(2,"0"):e}function ce(e){return 1-Math.pow(1-e,3)}function de(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function ue(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(r=>r.innerHTML):[]}function Zt(e,t=".trillian"){let r=0,o=!1,n=-1;return e.replace(/([^{}]*)([\{\}])/g,(a,p,x)=>{if(x==="}")return o&&r===n&&(o=!1,n=-1),r--,p+"}";r++;let c=p.trim();return c?/^@keyframes\s/i.test(c)?(o=!0,n=r,p+"{"):o||c.startsWith("@")?p+"{":c.split(",").map(l=>`${t} ${l.trim()}`).join(", ")+" {":p+"{"})}function C(e,t){if(document.getElementById(e))return;let r=document.createElement("style");r.id=e,r.textContent=Zt(t),document.head.appendChild(r)}function _(e,t,r=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let n=new IntersectionObserver(a=>{a[0].isIntersecting&&(t(!1),n.disconnect())},{threshold:r});n.observe(e)}function F(e,t,r){new MutationObserver(o=>{for(let n of o)for(let a of n.addedNodes){if(a.nodeType!==1)continue;(a.matches(e)?[a]:Array.from(a.querySelectorAll(e))).filter(t).forEach(r)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var Oe={info:{bg:"#eff6ff",border:"#3b82f6",text:"#1e3a5f",icon:"#3b82f6",label:"Info"},warning:{bg:"#fffbeb",border:"#f59e0b",text:"#78350f",icon:"#f59e0b",label:"Warning"},success:{bg:"#f0fdf4",border:"#22c55e",text:"#14532d",icon:"#22c55e",label:"Success"},error:{bg:"#fef2f2",border:"#ef4444",text:"#7f1d1d",icon:"#ef4444",label:"Error"},tip:{bg:"#faf5ff",border:"#a855f7",text:"#4a1772",icon:"#a855f7",label:"Tip"}},Yt={info:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="6.5" r="1.1" fill="currentColor"/></svg>',warning:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5L17.5 16.5H2.5L10 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="10" y1="8.5" x2="10" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.1" fill="currentColor"/></svg>',success:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',error:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',tip:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a5.5 5.5 0 0 1 2.75 10.25V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.75A5.5 5.5 0 0 1 10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 17.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'};function Jt(){C("trl-alert-styles",`
    .trl-alert-callout {
      display: flex;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 10px;
      border-left: 4px solid var(--trl-alert-border);
      background: var(--trl-alert-bg);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.65;
      color: var(--trl-alert-text);
      box-sizing: border-box;
      margin: 8px 0;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .trl-alert-callout.trl-alert-in { opacity: 1; }
    .trl-alert-icon-wrap { flex-shrink: 0; color: var(--trl-alert-icon); padding-top: 1px; }
    .trl-alert-body { flex: 1; min-width: 0; }
    .trl-alert-body p { margin: 0; }
    .trl-alert-body p + p { margin-top: 5px; }
    .trl-alert-body a { color: var(--trl-alert-icon); }
    @media (prefers-reduced-motion: reduce) {
      .trl-alert-callout { transition: none; opacity: 1; }
    }
  `)}function Ie(e){let t=e.querySelector("p");return t&&/^alert\s*:/i.test(t.textContent.trim())}function Qt(e){let t=Array.from(e.querySelectorAll("p"));if(!t.length)return null;let r=/^alert\s*:\s*(\w+)/i.exec(t[0].textContent.trim());if(!r)return null;let o=r[1].toLowerCase(),n=Oe[o]?o:"info",a;if(t.length>1)a=t.slice(1).map(p=>`<p>${p.innerHTML}</p>`).join("");else{let p=t[0].innerHTML,x=p.search(/<br\s*\/?>/i),c=x>-1?p.slice(x).replace(/^<br\s*\/?>/i,"").trim():"";a=c?`<p>${c}</p>`:""}return{type:n,bodyHtml:a}}function Re(e){Jt();let t=Qt(e);if(!t)return;let{type:r,bodyHtml:o}=t,n=Oe[r],a=document.createElement("div");a.className="trl-alert-callout",a.setAttribute("role","note"),a.setAttribute("aria-label",n.label),a.style.setProperty("--trl-alert-bg",n.bg),a.style.setProperty("--trl-alert-border",n.border),a.style.setProperty("--trl-alert-text",n.text),a.style.setProperty("--trl-alert-icon",n.icon),a.innerHTML=`
    <span class="trl-alert-icon-wrap">${Yt[r]}</span>
    <div class="trl-alert-body">${o}</div>
  `,e.replaceWith(a),_(a,()=>a.classList.add("trl-alert-in"))}function Te(){document.querySelectorAll("blockquote").forEach(e=>{Ie(e)&&Re(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Te):Te();F("blockquote",Ie,Re);var Pe={accent:"#4a90d9",info:"#3b82f6",warning:"#f59e0b",success:"#22c55e",error:"#ef4444",tip:"#a855f7",cert:"#7b68ee",degree:"#e8a838",neutral:"#888888"};function er(){C("trl-pill-styles",`
    .trl-pill {
      display: inline-flex;
      align-items: center;
      padding: 0 5px;
      border-radius: 5px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 0.78em;
      font-weight: 700;
      line-height: 1.6;
      white-space: nowrap;
      vertical-align: middle;
      background: var(--trl-pill-bg);
      color: #fff;
      cursor: default;
      user-select: text;
      box-sizing: border-box;
    }
  `)}function ze(e){return/^#pill(:|$)/i.test(e.getAttribute("href")||"")}function je(e){er();let t=e.getAttribute("href")||"",r=/^#pill(?::(.+))?$/i.exec(t);if(!r)return;let o=(r[1]||"accent").toLowerCase(),n=Pe[o]||Pe.accent,a=document.createElement("span");a.className="trl-pill",a.textContent=e.textContent,a.style.setProperty("--trl-pill-bg",n),e.replaceWith(a)}function De(){document.querySelectorAll("a").forEach(e=>{ze(e)&&je(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",De):De();F("a",ze,je);var He="checklist";function tr(e,t){let r=e+"\0"+t.join(""),o=0;for(let a=0;a<r.length;a++)o=Math.imul(o,31)+r.charCodeAt(a)|0;return`trillian-cl-${location.pathname.replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").slice(0,40)}-${(o>>>0).toString(36)}`}function rr(e){try{return new Set(JSON.parse(localStorage.getItem(e))||[])}catch(t){return new Set}}function nr(e,t){try{localStorage.setItem(e,JSON.stringify([...t]))}catch(r){}}function Be(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===He||r.startsWith(He+":")}function ar(e){let t=e.querySelector("li:first-child").textContent.trim(),r=t.indexOf(":"),o=r>-1?t.slice(r+1).trim():"",n=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(a=>a.textContent.trim()).filter(Boolean);return{title:o,items:n}}function or(){C("trl-check-styles",`
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
  `)}function ir(e,t,r){let o=t?(r/t*100).toFixed(1):0,n=e.querySelector(".trl-check-bar-fill"),a=e.querySelector(".trl-check-bar"),p=e.querySelector(".trl-check-count");n&&(n.style.width=`${o}%`),a&&a.setAttribute("aria-valuenow",Math.round(o)),p&&(p.textContent=`${r} / ${t}`)}function sr(e){let{title:t,items:r}=ar(e),o=tr(t,r),n=rr(o),a=o.slice(-8),p=document.createElement("div");p.className="trl-check-widget",p.style.setProperty("--trl-check-accent","#4a90d9");let x=r.filter((u,l)=>n.has(l)).length,c=r.length?(x/r.length*100).toFixed(1):0;return p.innerHTML=`
    <div class="trl-check-header">
      <p class="trl-check-title">${t||"Checklist"}</p>
      <span class="trl-check-count">${x} / ${r.length}</span>
    </div>
    <div class="trl-check-bar"
         role="progressbar"
         aria-valuenow="${Math.round(c)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="trl-check-bar-fill" style="width:${c}%"></div>
    </div>
    <ul class="trl-check-list">
      ${r.map((u,l)=>`
        <li class="trl-check-item${n.has(l)?" trl-check-done":""}" data-i="${l}">
          <input class="trl-check-cb" type="checkbox" id="trl-check-${a}-${l}"${n.has(l)?" checked":""}>
          <label class="trl-check-lbl" for="trl-check-${a}-${l}">${u}</label>
        </li>`).join("")}
    </ul>
  `,p.querySelectorAll(".trl-check-item").forEach(u=>{let l=u.querySelector(".trl-check-cb"),d=u.querySelector(".trl-check-lbl");l.addEventListener("change",()=>{let f=parseInt(u.dataset.i,10);u.classList.toggle("trl-check-done",l.checked),l.checked?n.add(f):n.delete(f),nr(o,n),ir(p,r.length,n.size)}),u.addEventListener("click",f=>{f.target===l||d.contains(f.target)||l.click()})}),p}function Ue(e){or();let t=sr(e);e.replaceWith(t),_(t,()=>t.classList.add("trl-check-in"))}function qe(){document.querySelectorAll("ul").forEach(e=>{Be(e)&&Ue(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qe):qe();F("ul",Be,Ue);var A=e=>`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,lr={"arrow-right":A('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),"arrow-left":A('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),"arrow-up":A('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'),"arrow-down":A('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),"chevron-right":A('<path d="m9 18 6-6-6-6"/>'),"chevron-left":A('<path d="m15 18-6-6 6-6"/>'),"chevron-up":A('<path d="m18 15-6-6-6 6"/>'),"chevron-down":A('<path d="m6 9 6 6 6-6"/>'),"external-link":A('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>'),download:A('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),upload:A('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),check:A('<path d="M20 6 9 17l-5-5"/>'),x:A('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),plus:A('<path d="M5 12h14"/><path d="M12 5v14"/>'),minus:A('<path d="M5 12h14"/>'),search:A('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),edit:A('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),copy:A('<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'),trash:A('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),"file-text":A('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'),"book-open":A('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),bookmark:A('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>'),link:A('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),clock:A('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),calendar:A('<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'),user:A('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),users:A('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),star:A('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),play:A('<polygon points="5 3 19 12 5 21 5 3"/>'),video:A('<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>'),mail:A('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),"graduation-cap":A('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),info:A('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),"alert-triangle":A('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>')};function Ge(e){return lr[e]||""}var We="buttons",cr=["primary","secondary","ghost","danger"];function dr(){C("trl-btn-styles",`
    .trl-btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .trl-btn-row.trl-btn-in { opacity: 1; }
    .trl-btn-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 9px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: filter 0.15s ease, box-shadow 0.15s ease;
      box-sizing: border-box;
      white-space: nowrap;
    }
    .trl-btn-btn:hover  { filter: brightness(1.08); box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
    .trl-btn-btn:active { filter: brightness(0.95); }
    .trl-btn-primary {
      background: var(--trl-btn-accent);
      color: #fff;
      border: 2px solid transparent;
    }
    .trl-btn-secondary {
      background: transparent;
      color: var(--trl-btn-accent);
      border: 2px solid var(--trl-btn-accent);
    }
    .trl-btn-ghost {
      background: transparent;
      color: var(--trl-btn-accent);
      border: 2px solid transparent;
      padding-left: 8px;
      padding-right: 8px;
    }
    .trl-btn-ghost:hover { background: var(--trl-btn-accent-10); box-shadow: none; filter: none; }
    .trl-btn-danger {
      background: #ef4444;
      color: #fff;
      border: 2px solid transparent;
    }
    .trl-btn-icon {
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-btn-row { transition: none; opacity: 1; }
      .trl-btn-btn { transition: none; }
    }
  `)}function ur(e){return/^javascript:/i.test(e.trim())?"#":e.trim()}function pr(e){let t=e.includes("\xB7")?"\xB7":" | ",r=e.split(t).map(c=>c.trim()).filter(Boolean);if(r.length<2)return null;let[o,n,a="primary",p="",x="left"]=r;return!o||!n?null:{label:o,href:ur(n),style:a.toLowerCase(),iconName:p.toLowerCase(),iconPos:x.toLowerCase()==="right"?"right":"left"}}function Xe(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===We||r.startsWith(We+":")}function gr(e){let t=e.querySelector("li:first-child").textContent.trim(),r=t.indexOf(":"),o=r>-1?t.slice(r+1).trim().toLowerCase():"left",n=["center","right"].includes(o)?o:"left",a=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(p=>pr(p.textContent.trim())).filter(Boolean);return{align:n,items:a}}var fr={left:"flex-start",center:"center",right:"flex-end"},Ve="#4a90d9";function Ze(e){dr();let{align:t,items:r}=gr(e);if(!r.length)return;let o=document.createElement("div");o.className="trl-btn-row",o.style.justifyContent=fr[t]||"flex-start",o.style.setProperty("--trl-btn-accent",Ve),o.style.setProperty("--trl-btn-accent-10",X(Ve,.1)),r.forEach(({label:n,href:a,style:p,iconName:x,iconPos:c})=>{let u=document.createElement("a");u.className=`trl-btn-btn trl-btn-${cr.includes(p)?p:"primary"}`,u.href=a;let l=Ge(x);if(l){let d=document.createElement("span");d.className="trl-btn-icon",d.innerHTML=l,c==="right"?(u.appendChild(document.createTextNode(n)),u.appendChild(d)):(u.appendChild(d),u.appendChild(document.createTextNode(n)))}else u.textContent=n;o.appendChild(u)}),e.replaceWith(o),_(o,()=>o.classList.add("trl-btn-in"))}function Ke(){document.querySelectorAll("ul").forEach(e=>{Xe(e)&&Ze(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ke):Ke();F("ul",Xe,Ze);var Ye="accordion",hr='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function mr(){C("trl-acc-styles",`
    .trl-acc-widget {
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
    .trl-acc-widget.trl-acc-in { opacity: 1; }
    .trl-acc-label {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #aaa;
      padding: 18px 20px 0;
      margin: 0;
    }
    .trl-acc-item { border-bottom: 1px solid #f0f0f0; }
    .trl-acc-item:last-child { border-bottom: none; }
    .trl-acc-trigger {
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
    .trl-acc-trigger:hover { background: #fafafa; }
    .trl-acc-trigger:focus-visible { outline: 2px solid var(--trl-acc-accent); outline-offset: -2px; }
    .trl-acc-chevron {
      flex-shrink: 0;
      color: #aaa;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-acc-trigger[aria-expanded="true"] .trl-acc-chevron { transform: rotate(180deg); }
    .trl-acc-panel {
      overflow: hidden;
      height: 0;
      transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-acc-panel-inner {
      padding: 4px 20px 18px;
      font-size: 14px;
      line-height: 1.65;
      color: #555;
    }
    .trl-acc-panel-inner p { margin: 0; }
    .trl-acc-panel-inner p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .trl-acc-widget { transition: none; opacity: 1; }
      .trl-acc-panel, .trl-acc-chevron { transition: none; }
    }
  `)}function br(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function xr(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function Qe(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===Ye||r.startsWith(Ye+":")}function yr(e){let t=e.querySelector("li:first-child").textContent.trim(),r=t.indexOf(":"),o=r>-1?t.slice(r+1).trim():"",n=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(a=>({heading:de(a),paras:ue(a)})).filter(a=>a.heading);return{label:o,items:n}}function et(e){mr();let{label:t,items:r}=yr(e);if(!r.length)return;let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=document.createElement("div");if(n.className="trl-acc-widget",n.style.setProperty("--trl-acc-accent","#4a90d9"),t){let a=document.createElement("p");a.className="trl-acc-label",a.textContent=t,n.appendChild(a)}r.forEach((a,p)=>{let x=`trl-acc-panel-${p}-${Math.random().toString(36).slice(2,7)}`,c=`trl-acc-btn-${p}-${Math.random().toString(36).slice(2,7)}`,u=document.createElement("div");u.className="trl-acc-item";let l=document.createElement("button");l.className="trl-acc-trigger",l.id=c,l.setAttribute("aria-expanded","false"),l.setAttribute("aria-controls",x),l.innerHTML=`<span>${a.heading}</span><span class="trl-acc-chevron">${hr}</span>`;let d=document.createElement("div");d.className="trl-acc-panel",d.id=x,d.setAttribute("role","region"),d.setAttribute("aria-labelledby",c),d.style.height="0";let f=document.createElement("div");f.className="trl-acc-panel-inner",f.innerHTML=a.paras.length?a.paras.map(m=>`<p>${m}</p>`).join(""):"<p></p>",d.appendChild(f),l.addEventListener("click",()=>{let m=l.getAttribute("aria-expanded")==="true";l.setAttribute("aria-expanded",String(!m)),m?xr(d,o):br(d,o)}),u.appendChild(l),u.appendChild(d),n.appendChild(u)}),e.replaceWith(n),_(n,()=>n.classList.add("trl-acc-in"))}function Je(){document.querySelectorAll("ul").forEach(e=>{Qe(e)&&et(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Je):Je();F("ul",Qe,et);var vr="tabs";function wr(){C("trl-tabs-styles",`
    .trl-tabs-widget {
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
    .trl-tabs-widget.trl-tabs-in { opacity: 1; }
    .trl-tabs-tablist {
      display: flex;
      gap: 0;
      border-bottom: 1px solid #f0f0f0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .trl-tabs-tablist::-webkit-scrollbar { display: none; }
    .trl-tabs-tab {
      flex-shrink: 0;
      padding: 14px 20px;
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      margin-bottom: -1px;
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      color: #999;
      transition: color 0.2s, border-color 0.2s;
      white-space: nowrap;
    }
    .trl-tabs-tab:hover { color: #555; }
    .trl-tabs-tab:focus-visible { outline: 2px solid var(--trl-tabs-accent); outline-offset: -2px; }
    .trl-tabs-tab[aria-selected="true"] {
      color: var(--trl-tabs-accent);
      border-bottom-color: var(--trl-tabs-accent);
    }
    .trl-tabs-panels { padding: 20px; }
    .trl-tabs-panel {
      display: none;
      font-size: 14px;
      line-height: 1.65;
      color: #444;
      animation: trl-tabs-fade 0.2s ease;
    }
    .trl-tabs-panel.trl-tabs-active { display: block; }
    @keyframes trl-tabs-fade { from { opacity: 0; } to { opacity: 1; } }
    .trl-tabs-panel p { margin: 0; }
    .trl-tabs-panel p + p { margin-top: 8px; }
    @media (prefers-reduced-motion: reduce) {
      .trl-tabs-widget { transition: none; opacity: 1; }
      .trl-tabs-tab { transition: none; }
      @keyframes trl-tabs-fade { from { opacity: 1; } }
    }
  `)}function rt(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===vr}function kr(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>({label:de(t),paras:ue(t)})).filter(t=>t.label)}function nt(e){wr();let t=kr(e);if(!t.length)return;let r=Math.random().toString(36).slice(2,7),o=document.createElement("div");o.className="trl-tabs-widget",o.style.setProperty("--trl-tabs-accent","#4a90d9");let n=document.createElement("div");n.className="trl-tabs-tablist",n.setAttribute("role","tablist");let a=document.createElement("div");a.className="trl-tabs-panels";let p=[],x=[];t.forEach((u,l)=>{let d=`trl-tabs-tab-${r}-${l}`,f=`trl-tabs-panel-${r}-${l}`,m=document.createElement("button");m.className="trl-tabs-tab",m.id=d,m.setAttribute("role","tab"),m.setAttribute("aria-selected",l===0?"true":"false"),m.setAttribute("aria-controls",f),m.setAttribute("tabindex",l===0?"0":"-1"),m.textContent=u.label;let y=document.createElement("div");y.className="trl-tabs-panel"+(l===0?" trl-tabs-active":""),y.id=f,y.setAttribute("role","tabpanel"),y.setAttribute("aria-labelledby",d),u.paras.length&&(y.innerHTML=u.paras.map(i=>`<p>${i}</p>`).join("")),n.appendChild(m),a.appendChild(y),p.push(m),x.push(y)});function c(u){p.forEach((l,d)=>{let f=d===u;l.setAttribute("aria-selected",String(f)),l.setAttribute("tabindex",f?"0":"-1")}),x.forEach((l,d)=>{l.classList.toggle("trl-tabs-active",d===u)})}p.forEach((u,l)=>{u.addEventListener("click",()=>c(l)),u.addEventListener("keydown",d=>{let f=l;if(d.key==="ArrowRight")f=(l+1)%p.length;else if(d.key==="ArrowLeft")f=(l-1+p.length)%p.length;else if(d.key==="Home")f=0;else if(d.key==="End")f=p.length-1;else return;d.preventDefault(),c(f),p[f].focus()})}),o.appendChild(n),o.appendChild(a),e.replaceWith(o),_(o,()=>o.classList.add("trl-tabs-in"))}function tt(){document.querySelectorAll("ul").forEach(e=>{rt(e)&&nt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt();F("ul",rt,nt);var at="stats",pe={accent:"#4a90d9",cert:"#7b68ee",degree:"#e8a838",success:"#22c55e",error:"#ef4444",neutral:"#888888"};function Sr(e){if(!e)return pe.accent;let t=e.trim().toLowerCase();return pe[t]?pe[t]:/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{6}$/i.test(e)?e.trim():pe.accent}function Ar(){C("trl-stat-styles",`
    .trl-stat-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-stat-row.trl-stat-in { opacity: 1; }
    .trl-stat-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 80px;
      background: #fff;
      border-radius: 14px;
      border-top: 4px solid var(--trl-stat-color);
      padding: 16px 14px 14px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.07);
      box-sizing: border-box;
      text-align: center;
    }
    .trl-stat-value {
      font-size: 32px;
      font-weight: 800;
      line-height: 1;
      color: var(--trl-stat-color);
      letter-spacing: -0.03em;
      font-variant-numeric: tabular-nums;
    }
    .trl-stat-label {
      font-size: 12px;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.02em;
      line-height: 1.3;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-stat-row { transition: none; opacity: 1; }
    }
  `)}function Er(e){let t=e.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);if(!t)return null;let r=parseFloat(t[2].replace(/,/g,""));return isNaN(r)?null:{prefix:t[1],num:r,suffix:t[3]}}function Fr(e,t,r){let o=Math.max(600,Math.min(1400,t.num*20));setTimeout(()=>{let n=performance.now(),a=p=>{let x=Math.min((p-n)/o,1);e.textContent=t.prefix+Math.round(ce(x)*t.num)+t.suffix,x<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},r)}function it(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===at||r.startsWith(at+":")}function Cr(e){let t=e.includes("\xB7")?"\xB7":" | ",r=e.split(t).map(p=>p.trim()).filter(Boolean);if(r.length<2)return null;let[o,n,a]=r;return{value:o,label:n,color:Sr(a)}}function $r(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>Cr(t.textContent.trim())).filter(Boolean)}function st(e){Ar();let t=$r(e);if(!t.length)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=document.createElement("div");o.className="trl-stat-row";let n=[];t.forEach((a,p)=>{let x=document.createElement("div");x.className="trl-stat-card",x.style.setProperty("--trl-stat-color",a.color);let c=document.createElement("div");c.className="trl-stat-value";let u=document.createElement("div");u.className="trl-stat-label",u.textContent=a.label;let l=Er(a.value);l&&!r?(c.textContent=l.prefix+"0"+l.suffix,n.push({el:c,parsed:l,delay:p*120})):c.textContent=a.value,x.appendChild(c),x.appendChild(u),o.appendChild(x)}),e.replaceWith(o),_(o,a=>{a||n.forEach(({el:p,parsed:x,delay:c})=>Fr(p,x,c)),o.classList.add("trl-stat-in")},.25)}function ot(){document.querySelectorAll("ul").forEach(e=>{it(e)&&st(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ot):ot();F("ul",it,st);var D=168,we=Math.round(D*.12),ke=(D-we)/2,ye=D/2,ve=D/2,le=2*Math.PI*ke,Se=le*(300/360),Mr=le-Se,Lr=120,Nr={session:0,module:0,"course-order":1,"course-name":"","course-code":"","total-sessions":25,"credits-per-course":5,"credits-per-session":.2,"milestone-mini":20,"milestone-cert":45,"milestone-degree":90,"program-short-name":"","program-short-title":"Short Certificate","program-cert-name":"","program-cert-title":"Certificate","program-degree-name":"","program-degree-title":"AAS Degree","accent-color":"#4a90d9","cert-color":"#7b68ee","degree-color":"#e8a838","bg-color":"#ffffff","track-color":"#e8e4df",layout:"row"};function dt(){C("trl-dash-styles",`
    .trl-dash-widget {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .trl-dash-card {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 36px;
      background: var(--trl-dash-bg);
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08);
      max-width: 640px;
      width: 100%;
      box-sizing: border-box;
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .trl-dash-card.trl-dash-visible { opacity: 1; transform: translateY(0); }
    .trl-dash-header { display: flex; flex-direction: column; gap: 4px; }
    .trl-dash-heading {
      margin: 0;
      font-size: 22px;
      font-weight: 800;
      color: #333;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    .trl-dash-heading .trl-dash-code {
      font-size: 0.55em;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.04em;
      margin-left: 0.5em;
      vertical-align: middle;
    }
    .trl-dash-session-heading {
      margin: 0;
      font-size: 13px;
      font-weight: 500;
      color: #aaa;
      letter-spacing: 0.01em;
    }
    .trl-dash-session-heading .trl-dash-part { font-size: 0.9em; }
    .trl-dash-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 36px;
    }
    .trl-dash-body.trl-dash-col { flex-direction: column; }
    .trl-dash-gauge-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      flex-shrink: 0;
    }
    .trl-dash-gauge-wrap {
      position: relative;
      width: ${D}px;
      height: ${D}px;
    }
    .trl-dash-gauge-wrap svg { display: block; overflow: visible; }
    .trl-dash-track {
      fill: none;
      stroke: var(--trl-dash-track);
      stroke-width: ${we};
      stroke-linecap: round;
      stroke-dasharray: ${Se.toFixed(2)} ${Mr.toFixed(2)};
    }
    .trl-dash-arc {
      fill: none;
      stroke: var(--trl-dash-accent);
      stroke-width: ${we};
      stroke-linecap: round;
      stroke-dasharray: ${le.toFixed(2)};
      stroke-dashoffset: ${le.toFixed(2)};
      transition: stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1);
      filter: drop-shadow(0 0 4px var(--trl-dash-accent-55));
    }
    @keyframes trl-dash-glow {
      0%   { filter: drop-shadow(0 0  4px var(--trl-dash-accent-55)); }
      40%  { filter: drop-shadow(0 0 12px var(--trl-dash-accent-85)); }
      100% { filter: drop-shadow(0 0  5px var(--trl-dash-accent-55)); }
    }
    .trl-dash-arc.trl-dash-glow { animation: trl-dash-glow 1.2s ease-out forwards; }
    .trl-dash-centre {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      pointer-events: none;
    }
    .trl-dash-credit-num {
      font-size: ${Math.round(D*.46)}px;
      font-weight: 800;
      line-height: 1;
      color: var(--trl-dash-accent);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }
    .trl-dash-credit-lbl {
      font-size: ${Math.round(D*.072)}px;
      font-weight: 700;
      color: #bbb;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .trl-dash-bars-col {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    .trl-dash-bar-group { display: flex; flex-direction: column; gap: 7px; }
    .trl-dash-bar-header { display: flex; align-items: baseline; gap: 8px; }
    .trl-dash-bar-name  { font-size: 13px; font-weight: 600; color: #333; }
    .trl-dash-bar-title { font-size: 11px; font-weight: 400; color: #aaa; }
    .trl-dash-bar-track {
      height: 10px;
      background: var(--trl-dash-track);
      border-radius: 5px;
      overflow: hidden;
      position: relative;
    }
    .trl-dash-bar-fill {
      position: absolute;
      inset: 0 auto 0 0;
      border-radius: 5px;
      width: 0%;
      transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-dash-bar-fill.trl-dash-mini   { background: linear-gradient(90deg, var(--trl-dash-accent-60), var(--trl-dash-accent)); }
    .trl-dash-bar-fill.trl-dash-cert   { background: linear-gradient(90deg, var(--trl-dash-cert-60),   var(--trl-dash-cert));   }
    .trl-dash-bar-fill.trl-dash-degree { background: linear-gradient(90deg, var(--trl-dash-degree-60), var(--trl-dash-degree)); }
    @media (prefers-reduced-motion: reduce) {
      .trl-dash-card, .trl-dash-arc, .trl-dash-bar-fill { transition: none; }
      .trl-dash-card { opacity: 1; transform: none; }
    }
  `)}var _r="progress-dashboard";function ut(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===_r}function Tr(e){let t=Object.assign({},Nr);return Array.from(e.querySelectorAll("li")).slice(1).forEach(r=>{let o=r.textContent.trim(),n=o.indexOf(":");if(n>0){let a=o.slice(0,n).trim(),p=o.slice(n+1).trim();a&&p!==""&&(t[a]=p)}}),t}function Or(e){let t=parseFloat(e.session)||0,r=parseFloat(e.module)||0,o=Math.max(1,parseFloat(e["course-order"])||1),n=parseFloat(e["total-sessions"])||25,a=parseFloat(e["credits-per-course"])||5,p=parseFloat(e["credits-per-session"])||.2,x=parseFloat(e["milestone-mini"])||0,c=parseFloat(e["milestone-cert"])||0,u=parseFloat(e["milestone-degree"])||0,l=(o-1)*a+t*p,d=Se*Math.min(t/n,1),f=Math.floor(r),m=x?Math.min(100,l/x*100):0,y=c?Math.min(100,l/c*100):0,i=u?Math.min(100,l/u*100):0,s="";if(t>0){let g=Math.floor(t),h=Math.round(t%1*10),b=h>0?` <span class="trl-dash-part">(Part ${h})</span>`:"";s=`Session ${g}${b}, of ${n}`}return{session:t,creditNum:f,progressLen:d,sessionLabel:s,miniPct:m,certPct:y,degreePct:i}}function Ir(e){let t=Or(e),r=e["accent-color"],o=e["cert-color"],n=e["degree-color"],a=e.layout,p=e["course-name"],x=e["course-code"],c=e["program-short-name"],u=e["program-short-title"],l=e["program-cert-name"],d=e["program-cert-title"],f=e["program-degree-name"],m=e["program-degree-title"],y=(s,g,h,b)=>s?`
    <div class="trl-dash-bar-group">
      <div class="trl-dash-bar-header">
        <span class="trl-dash-bar-name">${s}</span>
        <span class="trl-dash-bar-title">${g}</span>
      </div>
      <div class="trl-dash-bar-track"
           role="progressbar"
           aria-label="${s} progress"
           aria-valuenow="${Math.round(b)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="trl-dash-bar-fill ${h}" data-pct="${b.toFixed(2)}"></div>
      </div>
    </div>`:"",i=document.createElement("div");return i.className="trl-dash-widget",i.style.setProperty("--trl-dash-accent",r),i.style.setProperty("--trl-dash-accent-55",X(r,.55)),i.style.setProperty("--trl-dash-accent-60",X(r,.6)),i.style.setProperty("--trl-dash-accent-85",X(r,.85)),i.style.setProperty("--trl-dash-cert",o),i.style.setProperty("--trl-dash-cert-60",X(o,.6)),i.style.setProperty("--trl-dash-degree",n),i.style.setProperty("--trl-dash-degree-60",X(n,.6)),i.style.setProperty("--trl-dash-bg",e["bg-color"]),i.style.setProperty("--trl-dash-track",e["track-color"]),i.innerHTML=`
    <div class="trl-dash-card" role="region" aria-label="Student Progress Dashboard">
      <div class="trl-dash-header">
        <h1 class="trl-dash-heading">
          ${p||""}${x?`<span class="trl-dash-code">${x}</span>`:""}
        </h1>
        ${t.sessionLabel?`<h4 class="trl-dash-session-heading">${t.sessionLabel}</h4>`:""}
      </div>
      <div class="trl-dash-body${a==="column"?" trl-dash-col":""}">
        <div class="trl-dash-gauge-col">
          <div class="trl-dash-gauge-wrap">
            <svg width="${D}" height="${D}" viewBox="0 0 ${D} ${D}" aria-hidden="true">
              <g transform="rotate(${Lr} ${ye} ${ve})">
                <circle class="trl-dash-track" cx="${ye}" cy="${ve}" r="${ke.toFixed(2)}"/>
                <circle class="trl-dash-arc"   cx="${ye}" cy="${ve}" r="${ke.toFixed(2)}"/>
              </g>
            </svg>
            <div class="trl-dash-centre">
              <span class="trl-dash-credit-num" data-target="${t.creditNum}">0</span>
              <span class="trl-dash-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="trl-dash-bars-col">
          ${y(c,u,"trl-dash-mini",t.miniPct)}
          ${y(l,d,"trl-dash-cert",t.certPct)}
          ${y(f,m,"trl-dash-degree",t.degreePct)}
        </div>
      </div>
    </div>`,{wrap:i,data:t}}function lt(e,t){let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=e.querySelector(".trl-dash-card"),n=e.querySelector(".trl-dash-arc"),a=e.querySelector(".trl-dash-credit-num"),p=e.querySelectorAll(".trl-dash-bar-fill"),x=(le-t.progressLen).toFixed(2);if(requestAnimationFrame(()=>o&&o.classList.add("trl-dash-visible")),r){n&&(n.style.strokeDashoffset=x),a&&(a.textContent=t.creditNum),p.forEach(c=>{c.style.width=`${c.dataset.pct}%`});return}if(n&&setTimeout(()=>{n.style.strokeDashoffset=x,setTimeout(()=>n.classList.add("trl-dash-glow"),1350)},250),a){let c=t.creditNum;if(c>0){let u=Math.max(500,Math.min(1200,c*150)),l=performance.now(),d=f=>{let m=Math.min((f-l)/u,1);a.textContent=Math.round(ce(m)*c),m<1&&requestAnimationFrame(d)};setTimeout(()=>requestAnimationFrame(d),250)}else a.textContent=0}p.forEach((c,u)=>{setTimeout(()=>{c.style.width=`${c.dataset.pct}%`},400+u*180)})}function pt(e){let t=Tr(e),{wrap:r,data:o}=Ir(t);if(e.replaceWith(r),"IntersectionObserver"in window){let n=new IntersectionObserver(a=>{a[0].isIntersecting&&(lt(r,o),n.disconnect())},{threshold:.25});n.observe(r)}else lt(r,o)}function ct(){dt(),document.querySelectorAll("ul").forEach(e=>{ut(e)&&pt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ct):ct();F("ul",ut,e=>{dt(),pt(e)});var gt="trl-lb-styles";function Rr(){if(document.getElementById(gt))return;let e=document.createElement("style");e.id=gt,e.textContent=`
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
  `,document.head.appendChild(e)}var R=null;function Pr(){if(R)return R;R=document.createElement("div"),R.className="trl-lb-overlay",R.setAttribute("role","dialog"),R.setAttribute("aria-modal","true"),R.setAttribute("aria-label","Image viewer");let e=document.createElement("button");e.className="trl-lb-close",e.setAttribute("aria-label","Close"),e.textContent="\xD7",e.addEventListener("click",o=>{o.stopPropagation(),Ae()});let t=document.createElement("img");t.className="trl-lb-img",t.alt="",t.addEventListener("click",o=>o.stopPropagation());let r=document.createElement("p");return r.className="trl-lb-caption",R.appendChild(e),R.appendChild(t),R.appendChild(r),R.addEventListener("click",Ae),document.body.appendChild(R),R}function Dr(e,t){let r=Pr(),o=r.querySelector(".trl-lb-img"),n=r.querySelector(".trl-lb-caption");o.src=e,o.alt=t,n.textContent=t,n.hidden=!t,requestAnimationFrame(()=>r.classList.add("trl-lb-open")),document.addEventListener("keydown",ht)}function Ae(){R&&(R.classList.remove("trl-lb-open"),document.removeEventListener("keydown",ht))}function ht(e){e.key==="Escape"&&Ae()}function mt(e){return!e.closest("a")&&!e.dataset.trlLb}function bt(e){Rr(),e.dataset.trlLb="1",e.classList.add("trl-lb-trigger"),e.addEventListener("click",()=>Dr(e.src,e.alt||""))}function ft(){document.querySelectorAll("img").forEach(e=>{mt(e)&&bt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ft):ft();F("img",mt,bt);var ge="flow-accordion",xt="flow-tabs",zr='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function jr(){C("trl-fac-styles",`
    .trl-fac-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      border: 1px solid #ebebeb;
      border-radius: 12px;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-fac-widget.trl-fac-in { opacity: 1; }
    .trl-fac-item { border-bottom: 1px solid #f0f0f0; }
    .trl-fac-item:last-child { border-bottom: none; }
    .trl-fac-trigger {
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
      font-size: 15px;
      font-weight: 600;
      color: #222;
      text-align: left;
      transition: background 0.15s;
    }
    .trl-fac-trigger:hover { background: #fafafa; }
    .trl-fac-trigger:focus-visible { outline: 2px solid var(--trl-fac-accent); outline-offset: -2px; }
    .trl-fac-chevron {
      flex-shrink: 0;
      color: #bbb;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-fac-trigger[aria-expanded="true"] .trl-fac-chevron { transform: rotate(180deg); }
    .trl-fac-panel {
      overflow: hidden;
      height: 0;
      transition: height 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .trl-fac-panel-inner {
      padding: 4px 20px 20px;
      font-size: 14px;
      line-height: 1.7;
      color: #444;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-fac-widget { transition: none; opacity: 1; }
      .trl-fac-panel, .trl-fac-chevron { transition: none; }
    }
  `)}function Hr(){C("trl-fta-styles",`
    .trl-fta-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #fff;
      border: 1px solid #ebebeb;
      border-radius: 12px;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .trl-fta-widget.trl-fta-in { opacity: 1; }
    .trl-fta-tablist {
      display: flex;
      border-bottom: 1px solid #f0f0f0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .trl-fta-tablist::-webkit-scrollbar { display: none; }
    .trl-fta-tab {
      flex-shrink: 0;
      padding: 14px 20px;
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      margin-bottom: -1px;
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      color: #999;
      transition: color 0.2s, border-color 0.2s;
      white-space: nowrap;
    }
    .trl-fta-tab:hover { color: #555; }
    .trl-fta-tab:focus-visible { outline: 2px solid var(--trl-fta-accent); outline-offset: -2px; }
    .trl-fta-tab[aria-selected="true"] {
      color: var(--trl-fta-accent);
      border-bottom-color: var(--trl-fta-accent);
    }
    .trl-fta-panels { padding: 20px; }
    .trl-fta-panel {
      display: none;
      font-size: 14px;
      line-height: 1.7;
      color: #444;
      animation: trl-fta-fade 0.18s ease;
    }
    .trl-fta-panel.trl-fta-active { display: block; }
    @keyframes trl-fta-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      .trl-fta-widget { transition: none; opacity: 1; }
      .trl-fta-tab { transition: none; }
      @keyframes trl-fta-fade { from { opacity: 1; } }
    }
  `)}function Ee(e){let t=e.querySelector("li:first-child");if(!t)return!1;let r=t.textContent.trim().toLowerCase();return r===ge||r.startsWith(ge+":")||r===xt||r.startsWith(xt+":")}function qr(e){let t=e.querySelector("li:first-child").textContent.trim().toLowerCase(),r=t===ge||t.startsWith(ge+":"),o=t.indexOf(":"),n=o>-1?t.slice(o+1).trim():"h6",a=/^h[1-6]$/.test(n)?n:"h6";return{mode:r?"accordion":"tabs",trigger:a}}function Br(e,t){let r=parseInt(t[1]),o=[],n=null,a=e.nextSibling;for(;a;){let p=a.nextSibling,c=a.nodeType===1?a.tagName.toLowerCase():"";if(c==="ul"&&Ee(a)||/^h[1-6]$/.test(c)&&parseInt(c[1])<r)break;if(c===t){n={heading:a.textContent.trim(),nodes:[]},o.push(n),a.remove(),a=p;continue}n&&(n.nodes.push(a),a.remove()),a=p}return o}function Ur(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function Gr(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function Wr(e,t,r){let o=document.createElement("div");return o.className="trl-fac-widget",o.style.setProperty("--trl-fac-accent","#4a90d9"),e.forEach((n,a)=>{let p=`trl-fac-panel-${r}-${a}`,x=`trl-fac-btn-${r}-${a}`,c=document.createElement("div");c.className="trl-fac-item";let u=document.createElement("button");u.className="trl-fac-trigger",u.id=x,u.setAttribute("aria-expanded","false"),u.setAttribute("aria-controls",p),u.innerHTML=`<span>${n.heading}</span><span class="trl-fac-chevron">${zr}</span>`;let l=document.createElement("div");l.className="trl-fac-panel",l.id=p,l.setAttribute("role","region"),l.setAttribute("aria-labelledby",x),l.style.height="0";let d=document.createElement("div");d.className="trl-fac-panel-inner",n.nodes.forEach(f=>d.appendChild(f)),l.appendChild(d),u.addEventListener("click",()=>{let f=u.getAttribute("aria-expanded")==="true";u.setAttribute("aria-expanded",String(!f)),f?Gr(l,t):Ur(l,t)}),c.appendChild(u),c.appendChild(l),o.appendChild(c)}),o}function Vr(e,t){let r=document.createElement("div");r.className="trl-fta-widget",r.style.setProperty("--trl-fta-accent","#4a90d9");let o=document.createElement("div");o.className="trl-fta-tablist",o.setAttribute("role","tablist");let n=document.createElement("div");n.className="trl-fta-panels";let a=[],p=[];e.forEach((c,u)=>{let l=`trl-fta-tab-${t}-${u}`,d=`trl-fta-panel-${t}-${u}`,f=document.createElement("button");f.className="trl-fta-tab",f.id=l,f.setAttribute("role","tab"),f.setAttribute("aria-selected",u===0?"true":"false"),f.setAttribute("aria-controls",d),f.setAttribute("tabindex",u===0?"0":"-1"),f.textContent=c.heading;let m=document.createElement("div");m.className="trl-fta-panel"+(u===0?" trl-fta-active":""),m.id=d,m.setAttribute("role","tabpanel"),m.setAttribute("aria-labelledby",l),c.nodes.forEach(y=>m.appendChild(y)),o.appendChild(f),n.appendChild(m),a.push(f),p.push(m)});function x(c){a.forEach((u,l)=>{let d=l===c;u.setAttribute("aria-selected",String(d)),u.setAttribute("tabindex",d?"0":"-1")}),p.forEach((u,l)=>{u.classList.toggle("trl-fta-active",l===c)})}return a.forEach((c,u)=>{c.addEventListener("click",()=>x(u)),c.addEventListener("keydown",l=>{let d=u;if(l.key==="ArrowRight")d=(u+1)%a.length;else if(l.key==="ArrowLeft")d=(u-1+a.length)%a.length;else if(l.key==="Home")d=0;else if(l.key==="End")d=a.length-1;else return;l.preventDefault(),x(d),a[d].focus()})}),r.appendChild(o),r.appendChild(n),r}function vt(e){let{mode:t,trigger:r}=qr(e),o=Br(e,r);if(!o.length)return;let n=Math.random().toString(36).slice(2,7),a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p;t==="accordion"?(jr(),p=Wr(o,a,n),e.replaceWith(p),_(p,()=>p.classList.add("trl-fac-in"))):(Hr(),p=Vr(o,n),e.replaceWith(p),_(p,()=>p.classList.add("trl-fta-in")))}function yt(){document.querySelectorAll("ul").forEach(e=>{Ee(e)&&vt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",yt):yt();F("ul",Ee,vt);var Fe=Xt(wt(),1);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){var t=e.util.clone(e.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,n=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(c,u){return c=c.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return n}),RegExp(c,u)}n=a(n).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var p=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(p).join(""):""},x=function(c){for(var u=[],l=0;l<c.length;l++){var d=c[l],f=!1;if(typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===p(d.content[0].content[1])&&u.pop():d.content[d.content.length-1].content==="/>"||u.push({tagName:p(d.content[0].content[1]),openedBraces:0}):u.length>0&&d.type==="punctuation"&&d.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&d.type==="punctuation"&&d.content==="}"?u[u.length-1].openedBraces--:f=!0),(f||typeof d=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var m=p(d);l<c.length-1&&(typeof c[l+1]=="string"||c[l+1].type==="plain-text")&&(m+=p(c[l+1]),c.splice(l+1,1)),l>0&&(typeof c[l-1]=="string"||c[l-1].type==="plain-text")&&(m=p(c[l-1])+m,c.splice(l-1,1),l--),c[l]=new e.Token("plain-text",m,null,m)}d.content&&typeof d.content!="string"&&x(d.content)}};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||x(c.tokens)})})(Prism);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};n["language-"+r]={pattern:/[\s\S]+/,inside:Prism.languages[r]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=e.languages.bash;for(var n=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=o.variable[1].inside,p=0;p<n.length;p++)a[n[p]]=e.languages.bash[n[p]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(l){return l=l.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+l+")")}var o=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,n=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return o}),a=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+n+a+"(?:"+n+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+n+a+")(?:"+n+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(o),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+n+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+n+"$"),inside:{"table-header":{pattern:RegExp(o),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(l){["url","bold","italic","strike","code-snippet"].forEach(function(d){l!==d&&(e.languages.markdown[l].inside.content.inside[d]=e.languages.markdown[d])})}),e.hooks.add("after-tokenize",function(l){if(l.language!=="markdown"&&l.language!=="md")return;function d(f){if(!(!f||typeof f=="string"))for(var m=0,y=f.length;m<y;m++){var i=f[m];if(i.type!=="code"){d(i.content);continue}var s=i.content[1],g=i.content[3];if(s&&g&&s.type==="code-language"&&g.type==="code-block"&&typeof s.content=="string"){var h=s.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");h=(/[a-z][\w-]*/i.exec(h)||[""])[0].toLowerCase();var b="language-"+h;g.alias?typeof g.alias=="string"?g.alias=[g.alias,b]:g.alias.push(b):g.alias=[b]}}}d(l.tokens)}),e.hooks.add("wrap",function(l){if(l.type==="code-block"){for(var d="",f=0,m=l.classes.length;f<m;f++){var y=l.classes[f],i=/language-(.+)/.exec(y);if(i){d=i[1];break}}var s=e.languages[d];if(s)l.content=e.highlight(u(l.content),s,d);else if(d&&d!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);l.attributes.id=g,e.plugins.autoloader.loadLanguages(d,function(){var h=document.getElementById(g);h&&(h.innerHTML=e.highlight(h.textContent,e.languages[d],d))})}}});var p=RegExp(e.languages.markup.tag.pattern.source,"gi"),x={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;function u(l){var d=l.replace(p,"");return d=d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(f,m){if(m=m.toLowerCase(),m[0]==="#"){var y;return m[1]==="x"?y=parseInt(m.slice(2),16):y=Number(m.slice(1)),c(y)}else{var i=x[m];return i||f}}),d}e.languages.md=e.languages.markdown})(Prism);function Xr(){C("trl-code-styles",`
    pre[class*="language-"],
    code[class*="language-"] {
      font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', Consolas, monospace;
      font-size: 13px;
      line-height: 1.6;
      direction: ltr;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      tab-size: 2;
      hyphens: none;
    }
    pre[class*="language-"] {
      background: #f6f8fa;
      border: 1px solid #e8eaed;
      border-radius: 8px;
      padding: 16px 18px;
      overflow: auto;
      margin: 0 0 16px;
    }
    :not(pre) > code[class*="language-"] {
      background: #f0f3f6;
      border-radius: 4px;
      padding: 2px 5px;
    }
    .trl-code-label {
      display: block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #aaa;
      margin-bottom: 8px;
    }

    /* Tokens */
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata          { color: #6e7781; }
    .token.punctuation    { color: #555; }
    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted        { color: #cf222e; }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted       { color: #0a3069; }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string  { color: #953800; }
    .token.atrule,
    .token.attr-value,
    .token.keyword        { color: #8250df; }
    .token.function,
    .token.class-name     { color: #1a7f37; }
    .token.regex,
    .token.important,
    .token.variable       { color: #e16209; }
    .token.important,
    .token.bold           { font-weight: 600; }
    .token.italic         { font-style: italic; }
  `)}var Zr={javascript:"JS",js:"JS",jsx:"JSX",typescript:"TS",ts:"TS",css:"CSS",markup:"HTML",html:"HTML",xml:"XML",python:"Python",py:"Python",bash:"Bash",shell:"Bash",sh:"Bash",json:"JSON",markdown:"Markdown",md:"Markdown"};function St(e){return!!At(e)&&!e.dataset.trlCode}function At(e){for(let t of e.classList){let r=t.match(/^language-(.+)$/);if(r)return r[1].toLowerCase()}return null}function Et(e){Xr(),e.dataset.trlCode="1";let t=At(e),r=Zr[t]||t,o=e.parentElement;if(o&&o.tagName==="PRE"){let x=document.createElement("span");x.className="trl-code-label",x.textContent=r,o.insertBefore(x,e),o.classList.contains(`language-${t}`)||o.classList.add(`language-${t}`)}let a={js:"javascript",ts:"typescript",py:"python",html:"markup",sh:"bash",shell:"bash",md:"markdown"}[t]||t,p=Fe.default.languages[a];p&&(e.innerHTML=Fe.default.highlight(e.textContent,p,a))}function kt(){document.querySelectorAll('pre > code[class*="language-"]').forEach(e=>{St(e)&&Et(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",kt):kt();F("code",St,Et);var Yr="steps",Jr={blue:"#3b82f6",green:"#22c55e",purple:"#a855f7",amber:"#f59e0b",red:"#ef4444",pink:"#ec4899",teal:"#14b8a6",indigo:"#6366f1",slate:"#64748b"};function Qr(e){if(!e)return"#6366f1";let t=e.trim().toLowerCase();return Jr[t]||(/^#[0-9a-f]{3,6}$/i.test(t)?t:"#6366f1")}function en(){C("trl-steps-styles",`
    .trl-steps-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .trl-steps-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 12px 10px 8px;
      border-radius: 10px;
      transition: background 0.25s ease;
      scroll-margin-top: 80px;
    }
    .trl-steps-item:target {
      background: rgba(0, 0, 0, 0.04);
    }
    .trl-steps-num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      margin-top: 2px;
    }
    .trl-steps-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
      line-height: 1.6;
      color: #333;
      padding-top: 4px;
      flex: 1;
      min-width: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      .trl-steps-item { transition: none; }
    }
  `)}function Ct(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase().startsWith(Yr)}function tn(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t^e.charCodeAt(r);return(t>>>0).toString(36).slice(0,5)}function $t(e){en();let r=e.querySelector("li:first-child").textContent.trim(),o=r.indexOf(":")>-1?r.slice(r.indexOf(":")+1).trim():"",n=Qr(o),a=Array.from(e.querySelectorAll(":scope > li")).slice(1);if(!a.length)return;let p=tn(a.map(c=>c.textContent).join("")),x=document.createElement("ol");x.className="trl-steps-list",a.forEach((c,u)=>{let l=document.createElement("li");l.className="trl-steps-item",l.id="trl-step-"+p+"-"+(u+1);let d=document.createElement("span");d.className="trl-steps-num",d.style.background=n,d.textContent=String(u+1);let f=document.createElement("span");f.className="trl-steps-text",f.innerHTML=c.innerHTML,l.appendChild(d),l.appendChild(f),x.appendChild(l)}),e.replaceWith(x)}function Ft(){document.querySelectorAll("ul").forEach(e=>{Ct(e)&&$t(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ft):Ft();F("ul",Ct,$t);var rn="carousel",nn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',an='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';function on(){C("trl-carousel-styles",`
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
  `)}function Lt(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase().startsWith(rn)}function sn(e){let t=e.cloneNode(!0);return t.querySelectorAll("ul").forEach(r=>r.remove()),t.querySelectorAll("img").length>=1&&t.textContent.trim()===""}function ln(e){return Array.from(e.childNodes).filter(t=>t.nodeType===3||t.nodeType===1&&t.tagName!=="UL").map(t=>t.textContent).join("").trim()}function cn(e){let t=document.createElement("div");if(sn(e)){t.className="trl-carousel-slide trl-carousel-slide--image";let r=e.querySelector("img"),o=document.createElement("img");if(o.src=r.src,o.alt=r.alt,t.appendChild(o),r.alt){let n=document.createElement("p");n.className="trl-carousel-caption",n.textContent=r.alt,t.appendChild(n)}}else{t.className="trl-carousel-slide trl-carousel-slide--content";let r=e.querySelector(":scope > ul"),o=ln(e);if(o){let a=document.createElement("p");a.className="trl-carousel-slide-title",a.textContent=o,t.appendChild(a)}let n=document.createElement("div");if(n.className="trl-carousel-body",r){let a=document.createElement("ul");Array.from(r.querySelectorAll(":scope > li")).forEach(p=>{let x=document.createElement("li");x.innerHTML=p.innerHTML,a.appendChild(x)}),n.appendChild(a)}else n.innerHTML=e.innerHTML;t.appendChild(n)}return t}function Nt(e){on();let t=Array.from(e.querySelectorAll(":scope > li")).slice(1);if(!t.length)return;let r=document.createElement("div");r.className="trl-carousel",r.setAttribute("tabindex","0");let o=document.createElement("div");o.className="trl-carousel-stage";let n=document.createElement("div");n.className="trl-carousel-viewport";let a=document.createElement("div");a.className="trl-carousel-track";let p=t.map(i=>{let s=cn(i);return a.appendChild(s),s});n.appendChild(a),o.appendChild(n);let x=document.createElement("button");x.className="trl-carousel-btn trl-carousel-prev",x.setAttribute("aria-label","Previous slide"),x.innerHTML=nn;let c=document.createElement("button");c.className="trl-carousel-btn trl-carousel-next",c.setAttribute("aria-label","Next slide"),c.innerHTML=an,o.appendChild(x),o.appendChild(c),r.appendChild(o);let u=document.createElement("div");u.className="trl-carousel-dots";let l=p.length,d=0,f=Array.from({length:l},(i,s)=>{let g=document.createElement("button");return g.className="trl-carousel-dot"+(s===0?" trl-carousel-dot--active":""),g.setAttribute("aria-label","Slide "+(s+1)),g.addEventListener("click",()=>m(s)),u.appendChild(g),g});r.appendChild(u);function m(i){d=Math.max(0,Math.min(l-1,i)),a.style.transform="translateX(-"+d*100+"%)",f.forEach((s,g)=>s.classList.toggle("trl-carousel-dot--active",g===d)),x.disabled=d===0,c.disabled=d===l-1}x.addEventListener("click",()=>m(d-1)),c.addEventListener("click",()=>m(d+1)),r.addEventListener("keydown",i=>{i.key==="ArrowLeft"&&(m(d-1),i.preventDefault()),i.key==="ArrowRight"&&(m(d+1),i.preventDefault())});let y=0;n.addEventListener("touchstart",i=>{y=i.touches[0].clientX},{passive:!0}),n.addEventListener("touchend",i=>{let s=i.changedTouches[0].clientX-y;Math.abs(s)>40&&m(d+(s<0?1:-1))},{passive:!0}),l<=1&&(x.style.display="none",c.style.display="none",u.style.display="none"),m(0),e.replaceWith(r)}function Mt(){document.querySelectorAll("ul").forEach(e=>{Lt(e)&&Nt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mt):Mt();F("ul",Lt,Nt);var he=window.ENV,_t=he&&he.COURSE_ID,Tt=he&&he.current_user_id;if(_t&&Tt){let e=/^\/courses\/\d+\/(pages|assignments|quizzes|discussion_topics|modules\/items)\//,t=window.location.pathname,r=45e3;if(e.test(t)){let a=function(){try{return JSON.parse(localStorage.getItem(o)||"[]")||[]}catch(y){return[]}},p=function(y){try{localStorage.setItem(o,JSON.stringify(y))}catch(i){}},u=function(){let y=a(),i=y.findIndex(function(s){return s.url===t});i>-1?y[i]=c:y.push(c),p(y)},f=function(){let y=(window.scrollY+window.innerHeight)/Math.max(1,document.body.scrollHeight);y>c.ss&&(c.ss=Math.min(1,y),c.ss>=Math.ceil(c.ss/.25)*.25&&u())},m=function(){let y=Array.prototype.slice.call(document.querySelectorAll('[role="tab"]')),i=y.length;if(i===0){c.ts=1;return}let s={};y.forEach(function(b){b.getAttribute("aria-selected")==="true"&&(s[b.id||b.textContent.trim()]=!0)});function g(){c.ts=Math.min(1,Object.keys(s).length/i)}g();let h=new MutationObserver(function(b){b.forEach(function(k){k.attributeName==="aria-selected"&&k.target.getAttribute("aria-selected")==="true"&&(s[k.target.id||k.target.textContent.trim()]=!0,g(),c.ts>=1&&h.disconnect())})});y.forEach(function(b){h.observe(b,{attributes:!0,attributeFilter:["aria-selected"]})})},o="trl-pace-data-"+_t+"-"+Tt,n=Date.now(),x=a(),c=x.find(function(y){return y.url===t});c||(c={url:t,t:n,vs:0,ss:0,ts:1},x.push(c));let l=c.vs*r,d=Date.now();document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"?(l+=Date.now()-d,c.vs=Math.min(1,l/r),u()):d=Date.now()}),window.addEventListener("pagehide",function(){document.visibilityState!=="hidden"&&(l+=Date.now()-d),c.vs=Math.min(1,l/r),u()}),window.addEventListener("scroll",f,{passive:!0}),f(),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",function(){setTimeout(m,0)}):setTimeout(m,0)}}var dn="pace-dashboard",Ot=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function Rt(e){let t=Ot[0];for(let r of Ot)e>=r.lo&&(t=r);return t}var un="http://www.w3.org/2000/svg",Z=90,Q=18,H=130,q=130,se=2*Math.PI*Z,Y=se/2;function G(e,t){let r=document.createElementNS(un,e);for(let[o,n]of Object.entries(t))r.setAttribute(o,String(n));return r}function pn(e){let t=Rt(e),r=Math.min(Y,Math.max(0,e/2*Y)),o=se-r,n=G("svg",{viewBox:"0 0 260 145","aria-hidden":"true",style:"width:100%"}),a=G("g",{transform:"rotate(180 "+H+" "+q+")"});a.appendChild(G("circle",{cx:H,cy:q,r:Z,fill:"none",stroke:"#e8e4df","stroke-width":Q,"stroke-dasharray":Y.toFixed(2)+" "+Y.toFixed(2),"stroke-linecap":"round"}));let p=G("circle",{cx:H,cy:q,r:Z,fill:"none",stroke:t.color,"stroke-width":Q,"stroke-dasharray":se.toFixed(2),"stroke-dashoffset":se.toFixed(2),"stroke-linecap":"round"});p.style.transition="stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.3s ease",a.appendChild(p),n.appendChild(a),[.4,.8,1.2,1.6].forEach(d=>{let f=180-d*90,[m,y]=[H+(Z-Q/2-1)*Math.cos(f*Math.PI/180),q-(Z-Q/2-1)*Math.sin(f*Math.PI/180)],[i,s]=[H+(Z+Q/2+1)*Math.cos(f*Math.PI/180),q-(Z+Q/2+1)*Math.sin(f*Math.PI/180)];n.appendChild(G("line",{x1:m.toFixed(1),y1:y.toFixed(1),x2:i.toFixed(1),y2:s.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let x=Z-Q/2-4,c=10,u=G("g",{});u.appendChild(G("polygon",{points:(H-x).toFixed(1)+","+q+" "+H+","+(q-c)+" "+H+","+(q+c),fill:t.color})),u.appendChild(G("circle",{cx:H,cy:q,r:c,fill:t.color})),n.appendChild(u),u.style.transformOrigin=H+"px "+q+"px",u.style.transform="rotate(0deg)",u.style.transition="transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";function l(d,f,m,y){let i=G("text",{x:d,y:f,"text-anchor":m,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return i.textContent=y,i}return n.appendChild(l("18","132","start","Behind")),n.appendChild(l("242","132","end","Ahead")),{svg:n,arc:p,needleG:u}}function gn(){C("trl-pace-styles",`
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
  `)}function fn(e){let t=window.ENV,r=e["course-id"]||t&&t.COURSE_ID||"demo",o=e["user-id"]||t&&t.current_user_id||"demo";return"trl-pace-data-"+r+"-"+o}function hn(e){try{return JSON.parse(localStorage.getItem(fn(e))||"[]")||[]}catch(t){return[]}}function mn(e){return(e.vs+e.ss*e.ts)/2}function me(e){if(!e)return null;let t=new Date(e);return isNaN(t)?null:t}function Ce(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Pt(e){gn();let t={};Array.from(e.querySelectorAll(":scope > li")).slice(1).forEach(E=>{let O=E.textContent.trim(),L=O.indexOf(":");L>-1&&(t[O.slice(0,L).trim().toLowerCase()]=O.slice(L+1).trim())});let r=parseInt(t["total-pages"]||"0",10),o=me(t["start-date"]),n=me(t["end-date"]),a=me(t["target-date"]||""),p=(t["pace-metric"]||"counted").toLowerCase();if(!r||!o||!n)return;let x=hn(t),c=x.filter(E=>E.vs>=.5).length,u=x.filter(E=>E.vs>=1&&E.ss*E.ts>=1).length,l=x.filter(E=>mn(E)>=.5).length,d=p==="completed"?u:p==="visited"?c:l,f=Date.now(),m=Math.max(432e5,f-o.getTime()),y=n.getTime()-o.getTime(),i=m/864e5,s=Math.min(1,m/y),g=s>0?d/r/s:0,h=Rt(g),b=d/i,k=r-d,S=b>0&&k>0?new Date(f+k/b*864e5):d>=r?new Date(f):null,v=document.createElement("div");v.className="trl-pace-widget";let{svg:$,arc:M,needleG:z}=pn(0);v.appendChild($);let J=document.createElement("p");J.className="trl-pace-label",J.textContent=h.label,J.style.color=h.color,v.appendChild(J);let ee=document.createElement("p");ee.className="trl-pace-sub";let be=Math.round(d/r*100);ee.textContent=d===0?"Visit course pages to begin tracking":be+"% complete"+(p==="completed"?" (deep reads)":""),v.appendChild(ee);let te=document.createElement("div");te.className="trl-pace-stats";function W(E,O,L){let T=document.createElement("div");T.className="trl-pace-row";let B=document.createElement("span");B.className="trl-pace-row-label",B.textContent=E;let j=document.createElement("span");j.className="trl-pace-row-value"+(L?" trl-pace-dim":""),j.textContent=O,T.appendChild(B),T.appendChild(j),te.appendChild(T)}if(W("Pages visited",c+" of "+r,p!=="visited"),W("Pages counted",l+" of "+r,p!=="counted"),W("Pages completed",u+" of "+r,p!=="completed"),S&&W("Projected finish",Ce(S)),W("Course ends",Ce(n)),a&&S){let E=Math.round((a-S)/864e5),O=E>=0,L=document.createElement("div");L.className="trl-pace-track-pill "+(O?"trl-pace-track-yes":"trl-pace-track-no");let T=Math.abs(E);L.textContent=(O?"\u2713 ":"\u2717 ")+T+" day"+(T!==1?"s":"")+(O?" before":" after")+" your target",te.appendChild(L)}v.appendChild(te);let N=me(t["program-start-date"]||""),P=parseFloat(t["credits-earned"]||"NaN"),V=parseFloat(t["credits-per-course"]||"0");if(N&&!isNaN(P)){let E=r>0?d/r*V:0,O=P+E,L=Math.max(1,(f-N.getTime())/864e5),T=O/L,j=[{key:"milestone-mini",nameKey:"program-short-name",label:"Short Certificate"},{key:"milestone-cert",nameKey:"program-cert-name",label:"Certificate"},{key:"milestone-degree",nameKey:"program-degree-name",label:"AAS Degree"}].map(I=>_e(Ne({},I),{threshold:parseFloat(t[I.key]||"NaN"),name:t[I.nameKey]||""})).filter(I=>!isNaN(I.threshold)&&I.name);if(j.length){let I=document.createElement("div");I.className="trl-pace-program";let ne=document.createElement("p");ne.className="trl-pace-section-label",ne.textContent="Program Outlook",I.appendChild(ne),j.forEach(K=>{let U=document.createElement("div");U.className="trl-pace-milestone";let ae=document.createElement("span");ae.className="trl-pace-milestone-name";let oe=document.createElement("strong");oe.textContent=K.name,ae.appendChild(oe),ae.appendChild(document.createTextNode(K.label));let ie=document.createElement("span");if(O>=K.threshold)ie.className="trl-pace-milestone-done",ie.textContent="\u2713 Reached";else if(ie.className="trl-pace-milestone-date",T>0){let zt=(K.threshold-O)/T;ie.textContent=Ce(new Date(f+zt*864e5))}else ie.textContent="\u2014";U.appendChild(ae),U.appendChild(ie),I.appendChild(U)}),v.appendChild(I)}}e.replaceWith(v);let re=window.matchMedia("(prefers-reduced-motion: reduce)").matches;_(v,()=>{if(v.classList.add("trl-pace-in"),re)M.style.strokeDashoffset=(se-Math.min(Y,Math.max(0,g/2*Y))).toFixed(2),M.style.stroke=h.color,z.style.transform="rotate("+Math.min(180,g*90).toFixed(1)+"deg)";else{let E=se-Math.min(Y,Math.max(0,g/2*Y));M.style.strokeDashoffset=E.toFixed(2),M.style.stroke=h.color,z.style.transform="rotate("+Math.min(180,g*90).toFixed(1)+"deg)"}})}function Dt(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase()===dn}function It(){document.querySelectorAll("ul").forEach(e=>{Dt(e)&&Pt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",It):It();F("ul",Dt,Pt);})();
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
