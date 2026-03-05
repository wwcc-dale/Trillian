/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{var Ct=Object.create;var Ae=Object.defineProperty;var $t=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Lt=Object.getPrototypeOf,_t=Object.prototype.hasOwnProperty;var Tt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Nt=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Mt(t))!_t.call(e,r)&&r!==n&&Ae(e,r,{get:()=>t[r],enumerable:!(i=$t(t,r))||i.enumerable});return e};var Ot=(e,t,n)=>(n=e!=null?Ct(Lt(e)):{},Nt(t||!e||!e.__esModule?Ae(n,"default",{value:e,enumerable:!0}):n,e));var gt=Tt((nn,le)=>{var Nr=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};var w=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function o(s){return s instanceof a?new a(s.type,o(s.content),s.alias):Array.isArray(s)?s.map(o):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++n}),o.__id},clone:function o(s,g){g=g||{};var f,h;switch(r.util.type(s)){case"Object":if(h=r.util.objId(s),g[h])return g[h];f={},g[h]=f;for(var k in s)s.hasOwnProperty(k)&&(f[k]=o(s[k],g));return f;case"Array":return h=r.util.objId(s),g[h]?g[h]:(f=[],g[h]=f,s.forEach(function(S,v){f[v]=o(S,g)}),f);default:return s}},getLanguage:function(o){for(;o;){var s=t.exec(o.className);if(s)return s[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,s){o.className=o.className.replace(RegExp(t,"gi"),""),o.classList.add("language-"+s)},currentScript:function(){if(typeof document=="undefined")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(f){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(o){var s=document.getElementsByTagName("script");for(var g in s)if(s[g].src==o)return s[g]}return null}},isActive:function(o,s,g){for(var f="no-"+s;o;){var h=o.classList;if(h.contains(s))return!0;if(h.contains(f))return!1;o=o.parentElement}return!!g}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(o,s){var g=r.util.clone(r.languages[o]);for(var f in s)g[f]=s[f];return g},insertBefore:function(o,s,g,f){f=f||r.languages;var h=f[o],k={};for(var S in h)if(h.hasOwnProperty(S)){if(S==s)for(var v in g)g.hasOwnProperty(v)&&(k[v]=g[v]);g.hasOwnProperty(S)||(k[S]=h[S])}var F=f[o];return f[o]=k,r.languages.DFS(r.languages,function(M,D){D===F&&M!=o&&(this[M]=k)}),k},DFS:function o(s,g,f,h){h=h||{};var k=r.util.objId;for(var S in s)if(s.hasOwnProperty(S)){g.call(s,S,s[S],f||S);var v=s[S],F=r.util.type(v);F==="Object"&&!h[k(v)]?(h[k(v)]=!0,o(v,g,null,h)):F==="Array"&&!h[k(v)]&&(h[k(v)]=!0,o(v,g,S,h))}}},plugins:{},highlightAll:function(o,s){r.highlightAllUnder(document,o,s)},highlightAllUnder:function(o,s,g){var f={callback:g,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),r.hooks.run("before-all-elements-highlight",f);for(var h=0,k;k=f.elements[h++];)r.highlightElement(k,s===!0,f.callback)},highlightElement:function(o,s,g){var f=r.util.getLanguage(o),h=r.languages[f];r.util.setLanguage(o,f);var k=o.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(k,f);var S=o.textContent,v={element:o,language:f,grammar:h,code:S};function F(D){v.highlightedCode=D,r.hooks.run("before-insert",v),v.element.innerHTML=v.highlightedCode,r.hooks.run("after-highlight",v),r.hooks.run("complete",v),g&&g.call(v.element)}if(r.hooks.run("before-sanity-check",v),k=v.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!v.code){r.hooks.run("complete",v),g&&g.call(v.element);return}if(r.hooks.run("before-highlight",v),!v.grammar){F(r.util.encode(v.code));return}if(s&&e.Worker){var M=new Worker(r.filename);M.onmessage=function(D){F(D.data)},M.postMessage(JSON.stringify({language:v.language,code:v.code,immediateClose:!0}))}else F(r.highlight(v.code,v.grammar,v.language))},highlight:function(o,s,g){var f={code:o,grammar:s,language:g};if(r.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=r.tokenize(f.code,f.grammar),r.hooks.run("after-tokenize",f),a.stringify(r.util.encode(f.tokens),f.language)},tokenize:function(o,s){var g=s.rest;if(g){for(var f in g)s[f]=g[f];delete s.rest}var h=new c;return d(h,h.head,o),y(o,h,s,h.head,0),p(h)},hooks:{all:{},add:function(o,s){var g=r.hooks.all;g[o]=g[o]||[],g[o].push(s)},run:function(o,s){var g=r.hooks.all[o];if(!(!g||!g.length))for(var f=0,h;h=g[f++];)h(s)}},Token:a};e.Prism=r;function a(o,s,g,f){this.type=o,this.content=s,this.alias=g,this.length=(f||"").length|0}a.stringify=function o(s,g){if(typeof s=="string")return s;if(Array.isArray(s)){var f="";return s.forEach(function(F){f+=o(F,g)}),f}var h={type:s.type,content:o(s.content,g),tag:"span",classes:["token",s.type],attributes:{},language:g},k=s.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(h.classes,k):h.classes.push(k)),r.hooks.run("wrap",h);var S="";for(var v in h.attributes)S+=" "+v+'="'+(h.attributes[v]||"").replace(/"/g,"&quot;")+'"';return"<"+h.tag+' class="'+h.classes.join(" ")+'"'+S+">"+h.content+"</"+h.tag+">"};function u(o,s,g,f){o.lastIndex=s;var h=o.exec(g);if(h&&f&&h[1]){var k=h[1].length;h.index+=k,h[0]=h[0].slice(k)}return h}function y(o,s,g,f,h,k){for(var S in g)if(!(!g.hasOwnProperty(S)||!g[S])){var v=g[S];v=Array.isArray(v)?v:[v];for(var F=0;F<v.length;++F){if(k&&k.cause==S+","+F)return;var M=v[F],D=M.inside,W=!!M.lookbehind,Z=!!M.greedy,de=M.alias;if(Z&&!M.pattern.global){var K=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,K+"g")}for(var H=M.pattern||M,_=f.next,E=h;_!==s.tail&&!(k&&E>=k.reach);E+=_.value.length,_=_.next){var N=_.value;if(s.length>o.length)return;if(!(N instanceof a)){var I=1,L;if(Z){if(L=u(H,E,o,W),!L||L.index>=o.length)break;var ee=L.index,X=L.index+L[0].length,R=E;for(R+=_.value.length;ee>=R;)_=_.next,R+=_.value.length;if(R-=_.value.length,E=R,_.value instanceof a)continue;for(var J=_;J!==s.tail&&(R<X||typeof J.value=="string");J=J.next)I++,R+=J.value.length;I--,N=o.slice(E,R),L.index-=E}else if(L=u(H,0,N,W),!L)continue;var ee=L.index,te=L[0],ue=N.slice(0,ee),Se=N.slice(ee+te.length),pe=E+N.length;k&&pe>k.reach&&(k.reach=pe);var re=_.prev;ue&&(re=d(s,re,ue),E+=ue.length),l(s,re,I);var Ft=new a(S,D?r.tokenize(te,D):te,de,te);if(_=d(s,re,Ft),Se&&d(s,_,Se),I>1){var ge={cause:S+","+F,reach:pe};y(o,s,g,_.prev,E,ge),k&&ge.reach>k.reach&&(k.reach=ge.reach)}}}}}}function c(){var o={value:null,prev:null,next:null},s={value:null,prev:o,next:null};o.next=s,this.head=o,this.tail=s,this.length=0}function d(o,s,g){var f=s.next,h={value:g,prev:s,next:f};return s.next=h,f.prev=h,o.length++,h}function l(o,s,g){for(var f=s.next,h=0;h<g&&f!==o.tail;h++)f=f.next;s.next=f,f.prev=s,o.length-=h}function p(o){for(var s=[],g=o.head.next;g!==o.tail;)s.push(g.value),g=g.next;return s}if(!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(o){var s=JSON.parse(o.data),g=s.language,f=s.code,h=s.immediateClose;e.postMessage(r.highlight(f,r.languages[g],g)),h&&e.close()},!1)),r;var m=r.util.currentScript();m&&(r.filename=m.src,m.hasAttribute("data-manual")&&(r.manual=!0));function b(){r.manual||r.highlightAll()}if(!r.manual){var x=document.readyState;x==="loading"||x==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return r}(Nr);typeof le!="undefined"&&le.exports&&(le.exports=w);typeof global!="undefined"&&(global.Prism=w);w.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};w.languages.markup.tag.inside["attr-value"].inside.entity=w.languages.markup.entity;w.languages.markup.doctype.inside["internal-subset"].inside=w.languages.markup;w.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(w.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:w.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};r["language-"+n]={pattern:/[\s\S]+/,inside:w.languages[n]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},w.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(w.languages.markup.tag,"addAttribute",{value:function(e,t){w.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:w.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});w.languages.html=w.languages.markup;w.languages.mathml=w.languages.markup;w.languages.svg=w.languages.markup;w.languages.xml=w.languages.extend("markup",{});w.languages.ssml=w.languages.xml;w.languages.atom=w.languages.xml;w.languages.rss=w.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(w);w.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};w.languages.javascript=w.languages.extend("clike",{"class-name":[w.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});w.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;w.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:w.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:w.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:w.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:w.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:w.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});w.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:w.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});w.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});w.languages.markup&&(w.languages.markup.tag.addInlined("script","javascript"),w.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));w.languages.js=w.languages.javascript;(function(){if(typeof w=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",t=function(m,b){return"\u2716 Error "+m+" while fetching file: "+b},n="\u2716 Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",a="loading",u="loaded",y="failed",c="pre[data-src]:not(["+r+'="'+u+'"]):not(['+r+'="'+a+'"])';function d(m,b,x){var o=new XMLHttpRequest;o.open("GET",m,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?b(o.responseText):o.status>=400?x(t(o.status,o.statusText)):x(n))},o.send(null)}function l(m){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(b){var x=Number(b[1]),o=b[2],s=b[3];return o?s?[x,Number(s)]:[x,void 0]:[x,x]}}w.hooks.add("before-highlightall",function(m){m.selector+=", "+c}),w.hooks.add("before-sanity-check",function(m){var b=m.element;if(b.matches(c)){m.code="",b.setAttribute(r,a);var x=b.appendChild(document.createElement("CODE"));x.textContent=e;var o=b.getAttribute("data-src"),s=m.language;if(s==="none"){var g=(/\.(\w+)$/.exec(o)||[,"none"])[1];s=i[g]||g}w.util.setLanguage(x,s),w.util.setLanguage(b,s);var f=w.plugins.autoloader;f&&f.loadLanguages(s),d(o,function(h){b.setAttribute(r,u);var k=l(b.getAttribute("data-range"));if(k){var S=h.split(/\r\n?|\n/g),v=k[0],F=k[1]==null?S.length:k[1];v<0&&(v+=S.length),v=Math.max(0,Math.min(v-1,S.length)),F<0&&(F+=S.length),F=Math.max(0,Math.min(F,S.length)),h=S.slice(v,F).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(v+1))}x.textContent=h,w.highlightElement(x)},function(h){b.setAttribute(r,y),x.textContent=h})}}),w.plugins.fileHighlight={highlight:function(b){for(var x=(b||document).querySelectorAll(c),o=0,s;s=x[o++];)w.highlightElement(s)}};var p=!1;w.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),w.plugins.fileHighlight.highlight.apply(this,arguments)}})()});function q(e,t){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(t*255).toString(16).padStart(2,"0"):e}function ne(e){return 1-Math.pow(1-e,3)}function ae(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function ie(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(n=>n.innerHTML):[]}function It(e,t=".trillian"){let n=0,i=!1,r=-1;return e.replace(/([^{}]*)([\{\}])/g,(a,u,y)=>{if(y==="}")return i&&n===r&&(i=!1,r=-1),n--,u+"}";n++;let c=u.trim();return c?/^@keyframes\s/i.test(c)?(i=!0,r=n,u+"{"):i||c.startsWith("@")?u+"{":c.split(",").map(l=>`${t} ${l.trim()}`).join(", ")+" {":u+"{"})}function $(e,t){if(document.getElementById(e))return;let n=document.createElement("style");n.id=e,n.textContent=It(t),document.head.appendChild(n)}function T(e,t,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let r=new IntersectionObserver(a=>{a[0].isIntersecting&&(t(!1),r.disconnect())},{threshold:n});r.observe(e)}function C(e,t,n){new MutationObserver(i=>{for(let r of i)for(let a of r.addedNodes){if(a.nodeType!==1)continue;(a.matches(e)?[a]:Array.from(a.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var Fe={info:{bg:"#eff6ff",border:"#3b82f6",text:"#1e3a5f",icon:"#3b82f6",label:"Info"},warning:{bg:"#fffbeb",border:"#f59e0b",text:"#78350f",icon:"#f59e0b",label:"Warning"},success:{bg:"#f0fdf4",border:"#22c55e",text:"#14532d",icon:"#22c55e",label:"Success"},error:{bg:"#fef2f2",border:"#ef4444",text:"#7f1d1d",icon:"#ef4444",label:"Error"},tip:{bg:"#faf5ff",border:"#a855f7",text:"#4a1772",icon:"#a855f7",label:"Tip"}},Rt={info:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="6.5" r="1.1" fill="currentColor"/></svg>',warning:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5L17.5 16.5H2.5L10 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="10" y1="8.5" x2="10" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.1" fill="currentColor"/></svg>',success:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',error:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',tip:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a5.5 5.5 0 0 1 2.75 10.25V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.75A5.5 5.5 0 0 1 10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 17.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'};function Pt(){$("trl-alert-styles",`
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
  `)}function Ce(e){let t=e.querySelector("p");return t&&/^alert\s*:/i.test(t.textContent.trim())}function Dt(e){let t=Array.from(e.querySelectorAll("p"));if(!t.length)return null;let n=/^alert\s*:\s*(\w+)/i.exec(t[0].textContent.trim());if(!n)return null;let i=n[1].toLowerCase(),r=Fe[i]?i:"info",a;if(t.length>1)a=t.slice(1).map(u=>`<p>${u.innerHTML}</p>`).join("");else{let u=t[0].innerHTML,y=u.search(/<br\s*\/?>/i),c=y>-1?u.slice(y).replace(/^<br\s*\/?>/i,"").trim():"";a=c?`<p>${c}</p>`:""}return{type:r,bodyHtml:a}}function $e(e){Pt();let t=Dt(e);if(!t)return;let{type:n,bodyHtml:i}=t,r=Fe[n],a=document.createElement("div");a.className="trl-alert-callout",a.setAttribute("role","note"),a.setAttribute("aria-label",r.label),a.style.setProperty("--trl-alert-bg",r.bg),a.style.setProperty("--trl-alert-border",r.border),a.style.setProperty("--trl-alert-text",r.text),a.style.setProperty("--trl-alert-icon",r.icon),a.innerHTML=`
    <span class="trl-alert-icon-wrap">${Rt[n]}</span>
    <div class="trl-alert-body">${i}</div>
  `,e.replaceWith(a),T(a,()=>a.classList.add("trl-alert-in"))}function Ee(){document.querySelectorAll("blockquote").forEach(e=>{Ce(e)&&$e(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ee):Ee();C("blockquote",Ce,$e);var Me={accent:"#4a90d9",info:"#3b82f6",warning:"#f59e0b",success:"#22c55e",error:"#ef4444",tip:"#a855f7",cert:"#7b68ee",degree:"#e8a838",neutral:"#888888"};function zt(){$("trl-pill-styles",`
    .trl-pill {
      display: inline-flex;
      align-items: center;
      padding: 1px 4px;
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
  `)}function _e(e){return/^#pill(:|$)/i.test(e.getAttribute("href")||"")}function Te(e){zt();let t=e.getAttribute("href")||"",n=/^#pill(?::(.+))?$/i.exec(t);if(!n)return;let i=(n[1]||"accent").toLowerCase(),r=Me[i]||Me.accent,a=document.createElement("span");a.className="trl-pill",a.textContent=e.textContent,a.style.setProperty("--trl-pill-bg",r),e.replaceWith(a)}function Le(){document.querySelectorAll("a").forEach(e=>{_e(e)&&Te(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Le):Le();C("a",_e,Te);var Ne="checklist";function jt(e,t){let n=e+"\0"+t.join(""),i=0;for(let a=0;a<n.length;a++)i=Math.imul(i,31)+n.charCodeAt(a)|0;return`trillian-cl-${location.pathname.replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").slice(0,40)}-${(i>>>0).toString(36)}`}function Ht(e){try{return new Set(JSON.parse(localStorage.getItem(e))||[])}catch(t){return new Set}}function qt(e,t){try{localStorage.setItem(e,JSON.stringify([...t]))}catch(n){}}function Ie(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===Ne||n.startsWith(Ne+":")}function Bt(e){let t=e.querySelector("li:first-child").textContent.trim(),n=t.indexOf(":"),i=n>-1?t.slice(n+1).trim():"",r=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(a=>a.textContent.trim()).filter(Boolean);return{title:i,items:r}}function Ut(){$("trl-check-styles",`
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
  `)}function Gt(e,t,n){let i=t?(n/t*100).toFixed(1):0,r=e.querySelector(".trl-check-bar-fill"),a=e.querySelector(".trl-check-bar"),u=e.querySelector(".trl-check-count");r&&(r.style.width=`${i}%`),a&&a.setAttribute("aria-valuenow",Math.round(i)),u&&(u.textContent=`${n} / ${t}`)}function Wt(e){let{title:t,items:n}=Bt(e),i=jt(t,n),r=Ht(i),a=i.slice(-8),u=document.createElement("div");u.className="trl-check-widget",u.style.setProperty("--trl-check-accent","#4a90d9");let y=n.filter((d,l)=>r.has(l)).length,c=n.length?(y/n.length*100).toFixed(1):0;return u.innerHTML=`
    <div class="trl-check-header">
      <p class="trl-check-title">${t||"Checklist"}</p>
      <span class="trl-check-count">${y} / ${n.length}</span>
    </div>
    <div class="trl-check-bar"
         role="progressbar"
         aria-valuenow="${Math.round(c)}"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Completion">
      <div class="trl-check-bar-fill" style="width:${c}%"></div>
    </div>
    <ul class="trl-check-list">
      ${n.map((d,l)=>`
        <li class="trl-check-item${r.has(l)?" trl-check-done":""}" data-i="${l}">
          <input class="trl-check-cb" type="checkbox" id="trl-check-${a}-${l}"${r.has(l)?" checked":""}>
          <label class="trl-check-lbl" for="trl-check-${a}-${l}">${d}</label>
        </li>`).join("")}
    </ul>
  `,u.querySelectorAll(".trl-check-item").forEach(d=>{let l=d.querySelector(".trl-check-cb"),p=d.querySelector(".trl-check-lbl");l.addEventListener("change",()=>{let m=parseInt(d.dataset.i,10);d.classList.toggle("trl-check-done",l.checked),l.checked?r.add(m):r.delete(m),qt(i,r),Gt(u,n.length,r.size)}),d.addEventListener("click",m=>{m.target===l||p.contains(m.target)||l.click()})}),u}function Re(e){Ut();let t=Wt(e);e.replaceWith(t),T(t,()=>t.classList.add("trl-check-in"))}function Oe(){document.querySelectorAll("ul").forEach(e=>{Ie(e)&&Re(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oe):Oe();C("ul",Ie,Re);var A=e=>`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,Vt={"arrow-right":A('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),"arrow-left":A('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),"arrow-up":A('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'),"arrow-down":A('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),"chevron-right":A('<path d="m9 18 6-6-6-6"/>'),"chevron-left":A('<path d="m15 18-6-6 6-6"/>'),"chevron-up":A('<path d="m18 15-6-6-6 6"/>'),"chevron-down":A('<path d="m6 9 6 6 6-6"/>'),"external-link":A('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>'),download:A('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),upload:A('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),check:A('<path d="M20 6 9 17l-5-5"/>'),x:A('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),plus:A('<path d="M5 12h14"/><path d="M12 5v14"/>'),minus:A('<path d="M5 12h14"/>'),search:A('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),edit:A('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),copy:A('<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'),trash:A('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),"file-text":A('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'),"book-open":A('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),bookmark:A('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>'),link:A('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),clock:A('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),calendar:A('<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'),user:A('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),users:A('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),star:A('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),play:A('<polygon points="5 3 19 12 5 21 5 3"/>'),video:A('<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>'),mail:A('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),"graduation-cap":A('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),info:A('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),"alert-triangle":A('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>')};function Pe(e){return Vt[e]||""}var De="buttons",Zt=["primary","secondary","ghost","danger"];function Kt(){$("trl-btn-styles",`
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
  `)}function Yt(e){return/^javascript:/i.test(e.trim())?"#":e.trim()}function Xt(e){let t=e.includes("\xB7")?"\xB7":" | ",n=e.split(t).map(c=>c.trim()).filter(Boolean);if(n.length<2)return null;let[i,r,a="primary",u="",y="left"]=n;return!i||!r?null:{label:i,href:Yt(r),style:a.toLowerCase(),iconName:u.toLowerCase(),iconPos:y.toLowerCase()==="right"?"right":"left"}}function He(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===De||n.startsWith(De+":")}function Jt(e){let t=e.querySelector("li:first-child").textContent.trim(),n=t.indexOf(":"),i=n>-1?t.slice(n+1).trim().toLowerCase():"left",r=["center","right"].includes(i)?i:"left",a=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(u=>Xt(u.textContent.trim())).filter(Boolean);return{align:r,items:a}}var Qt={left:"flex-start",center:"center",right:"flex-end"},ze="#4a90d9";function qe(e){Kt();let{align:t,items:n}=Jt(e);if(!n.length)return;let i=document.createElement("div");i.className="trl-btn-row",i.style.justifyContent=Qt[t]||"flex-start",i.style.setProperty("--trl-btn-accent",ze),i.style.setProperty("--trl-btn-accent-10",q(ze,.1)),n.forEach(({label:r,href:a,style:u,iconName:y,iconPos:c})=>{let d=document.createElement("a");d.className=`trl-btn-btn trl-btn-${Zt.includes(u)?u:"primary"}`,d.href=a;let l=Pe(y);if(l){let p=document.createElement("span");p.className="trl-btn-icon",p.innerHTML=l,c==="right"?(d.appendChild(document.createTextNode(r)),d.appendChild(p)):(d.appendChild(p),d.appendChild(document.createTextNode(r)))}else d.textContent=r;i.appendChild(d)}),e.replaceWith(i),T(i,()=>i.classList.add("trl-btn-in"))}function je(){document.querySelectorAll("ul").forEach(e=>{He(e)&&qe(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",je):je();C("ul",He,qe);var Be="accordion",er='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function tr(){$("trl-acc-styles",`
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
  `)}function rr(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function nr(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function Ge(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===Be||n.startsWith(Be+":")}function ar(e){let t=e.querySelector("li:first-child").textContent.trim(),n=t.indexOf(":"),i=n>-1?t.slice(n+1).trim():"",r=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(a=>({heading:ae(a),paras:ie(a)})).filter(a=>a.heading);return{label:i,items:r}}function We(e){tr();let{label:t,items:n}=ar(e);if(!n.length)return;let i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=document.createElement("div");if(r.className="trl-acc-widget",r.style.setProperty("--trl-acc-accent","#4a90d9"),t){let a=document.createElement("p");a.className="trl-acc-label",a.textContent=t,r.appendChild(a)}n.forEach((a,u)=>{let y=`trl-acc-panel-${u}-${Math.random().toString(36).slice(2,7)}`,c=`trl-acc-btn-${u}-${Math.random().toString(36).slice(2,7)}`,d=document.createElement("div");d.className="trl-acc-item";let l=document.createElement("button");l.className="trl-acc-trigger",l.id=c,l.setAttribute("aria-expanded","false"),l.setAttribute("aria-controls",y),l.innerHTML=`<span>${a.heading}</span><span class="trl-acc-chevron">${er}</span>`;let p=document.createElement("div");p.className="trl-acc-panel",p.id=y,p.setAttribute("role","region"),p.setAttribute("aria-labelledby",c),p.style.height="0";let m=document.createElement("div");m.className="trl-acc-panel-inner",m.innerHTML=a.paras.length?a.paras.map(b=>`<p>${b}</p>`).join(""):"<p></p>",p.appendChild(m),l.addEventListener("click",()=>{let b=l.getAttribute("aria-expanded")==="true";l.setAttribute("aria-expanded",String(!b)),b?nr(p,i):rr(p,i)}),d.appendChild(l),d.appendChild(p),r.appendChild(d)}),e.replaceWith(r),T(r,()=>r.classList.add("trl-acc-in"))}function Ue(){document.querySelectorAll("ul").forEach(e=>{Ge(e)&&We(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ue):Ue();C("ul",Ge,We);var ir="tabs";function or(){$("trl-tabs-styles",`
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
  `)}function Ze(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===ir}function sr(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>({label:ae(t),paras:ie(t)})).filter(t=>t.label)}function Ke(e){or();let t=sr(e);if(!t.length)return;let n=Math.random().toString(36).slice(2,7),i=document.createElement("div");i.className="trl-tabs-widget",i.style.setProperty("--trl-tabs-accent","#4a90d9");let r=document.createElement("div");r.className="trl-tabs-tablist",r.setAttribute("role","tablist");let a=document.createElement("div");a.className="trl-tabs-panels";let u=[],y=[];t.forEach((d,l)=>{let p=`trl-tabs-tab-${n}-${l}`,m=`trl-tabs-panel-${n}-${l}`,b=document.createElement("button");b.className="trl-tabs-tab",b.id=p,b.setAttribute("role","tab"),b.setAttribute("aria-selected",l===0?"true":"false"),b.setAttribute("aria-controls",m),b.setAttribute("tabindex",l===0?"0":"-1"),b.textContent=d.label;let x=document.createElement("div");x.className="trl-tabs-panel"+(l===0?" trl-tabs-active":""),x.id=m,x.setAttribute("role","tabpanel"),x.setAttribute("aria-labelledby",p),d.paras.length&&(x.innerHTML=d.paras.map(o=>`<p>${o}</p>`).join("")),r.appendChild(b),a.appendChild(x),u.push(b),y.push(x)});function c(d){u.forEach((l,p)=>{let m=p===d;l.setAttribute("aria-selected",String(m)),l.setAttribute("tabindex",m?"0":"-1")}),y.forEach((l,p)=>{l.classList.toggle("trl-tabs-active",p===d)})}u.forEach((d,l)=>{d.addEventListener("click",()=>c(l)),d.addEventListener("keydown",p=>{let m=l;if(p.key==="ArrowRight")m=(l+1)%u.length;else if(p.key==="ArrowLeft")m=(l-1+u.length)%u.length;else if(p.key==="Home")m=0;else if(p.key==="End")m=u.length-1;else return;p.preventDefault(),c(m),u[m].focus()})}),i.appendChild(r),i.appendChild(a),e.replaceWith(i),T(i,()=>i.classList.add("trl-tabs-in"))}function Ve(){document.querySelectorAll("ul").forEach(e=>{Ze(e)&&Ke(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ve):Ve();C("ul",Ze,Ke);var Ye="stats",oe={accent:"#4a90d9",cert:"#7b68ee",degree:"#e8a838",success:"#22c55e",error:"#ef4444",neutral:"#888888"};function lr(e){if(!e)return oe.accent;let t=e.trim().toLowerCase();return oe[t]?oe[t]:/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{6}$/i.test(e)?e.trim():oe.accent}function cr(){$("trl-stat-styles",`
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
  `)}function dr(e){let t=e.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);if(!t)return null;let n=parseFloat(t[2].replace(/,/g,""));return isNaN(n)?null:{prefix:t[1],num:n,suffix:t[3]}}function ur(e,t,n){let i=Math.max(600,Math.min(1400,t.num*20));setTimeout(()=>{let r=performance.now(),a=u=>{let y=Math.min((u-r)/i,1);e.textContent=t.prefix+Math.round(ne(y)*t.num)+t.suffix,y<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},n)}function Je(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===Ye||n.startsWith(Ye+":")}function pr(e){let t=e.includes("\xB7")?"\xB7":" | ",n=e.split(t).map(u=>u.trim()).filter(Boolean);if(n.length<2)return null;let[i,r,a]=n;return{value:i,label:r,color:lr(a)}}function gr(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>pr(t.textContent.trim())).filter(Boolean)}function Qe(e){cr();let t=gr(e);if(!t.length)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.createElement("div");i.className="trl-stat-row";let r=[];t.forEach((a,u)=>{let y=document.createElement("div");y.className="trl-stat-card",y.style.setProperty("--trl-stat-color",a.color);let c=document.createElement("div");c.className="trl-stat-value";let d=document.createElement("div");d.className="trl-stat-label",d.textContent=a.label;let l=dr(a.value);l&&!n?(c.textContent=l.prefix+"0"+l.suffix,r.push({el:c,parsed:l,delay:u*120})):c.textContent=a.value,y.appendChild(c),y.appendChild(d),i.appendChild(y)}),e.replaceWith(i),T(i,a=>{a||r.forEach(({el:u,parsed:y,delay:c})=>ur(u,y,c)),i.classList.add("trl-stat-in")},.25)}function Xe(){document.querySelectorAll("ul").forEach(e=>{Je(e)&&Qe(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xe):Xe();C("ul",Je,Qe);var P=168,me=Math.round(P*.12),be=(P-me)/2,fe=P/2,he=P/2,Q=2*Math.PI*be,ye=Q*(300/360),fr=Q-ye,hr=120,mr={session:0,module:0,"course-order":1,"course-name":"","course-code":"","total-sessions":25,"credits-per-course":5,"credits-per-session":.2,"milestone-mini":20,"milestone-cert":45,"milestone-degree":90,"program-short-name":"","program-short-title":"Short Certificate","program-cert-name":"","program-cert-title":"Certificate","program-degree-name":"","program-degree-title":"AAS Degree","accent-color":"#4a90d9","cert-color":"#7b68ee","degree-color":"#e8a838","bg-color":"#ffffff","track-color":"#e8e4df",layout:"row"};function rt(){$("trl-dash-styles",`
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
      width: ${P}px;
      height: ${P}px;
    }
    .trl-dash-gauge-wrap svg { display: block; overflow: visible; }
    .trl-dash-track {
      fill: none;
      stroke: var(--trl-dash-track);
      stroke-width: ${me};
      stroke-linecap: round;
      stroke-dasharray: ${ye.toFixed(2)} ${fr.toFixed(2)};
    }
    .trl-dash-arc {
      fill: none;
      stroke: var(--trl-dash-accent);
      stroke-width: ${me};
      stroke-linecap: round;
      stroke-dasharray: ${Q.toFixed(2)};
      stroke-dashoffset: ${Q.toFixed(2)};
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
      font-size: ${Math.round(P*.46)}px;
      font-weight: 800;
      line-height: 1;
      color: var(--trl-dash-accent);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }
    .trl-dash-credit-lbl {
      font-size: ${Math.round(P*.072)}px;
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
  `)}var br="progress-dashboard";function nt(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===br}function yr(e){let t=Object.assign({},mr);return Array.from(e.querySelectorAll("li")).slice(1).forEach(n=>{let i=n.textContent.trim(),r=i.indexOf(":");if(r>0){let a=i.slice(0,r).trim(),u=i.slice(r+1).trim();a&&u!==""&&(t[a]=u)}}),t}function xr(e){let t=parseFloat(e.session)||0,n=parseFloat(e.module)||0,i=Math.max(1,parseFloat(e["course-order"])||1),r=parseFloat(e["total-sessions"])||25,a=parseFloat(e["credits-per-course"])||5,u=parseFloat(e["credits-per-session"])||.2,y=parseFloat(e["milestone-mini"])||0,c=parseFloat(e["milestone-cert"])||0,d=parseFloat(e["milestone-degree"])||0,l=(i-1)*a+t*u,p=ye*Math.min(t/r,1),m=Math.floor(n),b=y?Math.min(100,l/y*100):0,x=c?Math.min(100,l/c*100):0,o=d?Math.min(100,l/d*100):0,s="";if(t>0){let g=Math.floor(t),f=Math.round(t%1*10),h=f>0?` <span class="trl-dash-part">(Part ${f})</span>`:"";s=`Session ${g}${h}, of ${r}`}return{session:t,creditNum:m,progressLen:p,sessionLabel:s,miniPct:b,certPct:x,degreePct:o}}function vr(e){let t=xr(e),n=e["accent-color"],i=e["cert-color"],r=e["degree-color"],a=e.layout,u=e["course-name"],y=e["course-code"],c=e["program-short-name"],d=e["program-short-title"],l=e["program-cert-name"],p=e["program-cert-title"],m=e["program-degree-name"],b=e["program-degree-title"],x=(s,g,f,h)=>s?`
    <div class="trl-dash-bar-group">
      <div class="trl-dash-bar-header">
        <span class="trl-dash-bar-name">${s}</span>
        <span class="trl-dash-bar-title">${g}</span>
      </div>
      <div class="trl-dash-bar-track"
           role="progressbar"
           aria-label="${s} progress"
           aria-valuenow="${Math.round(h)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="trl-dash-bar-fill ${f}" data-pct="${h.toFixed(2)}"></div>
      </div>
    </div>`:"",o=document.createElement("div");return o.className="trl-dash-widget",o.style.setProperty("--trl-dash-accent",n),o.style.setProperty("--trl-dash-accent-55",q(n,.55)),o.style.setProperty("--trl-dash-accent-60",q(n,.6)),o.style.setProperty("--trl-dash-accent-85",q(n,.85)),o.style.setProperty("--trl-dash-cert",i),o.style.setProperty("--trl-dash-cert-60",q(i,.6)),o.style.setProperty("--trl-dash-degree",r),o.style.setProperty("--trl-dash-degree-60",q(r,.6)),o.style.setProperty("--trl-dash-bg",e["bg-color"]),o.style.setProperty("--trl-dash-track",e["track-color"]),o.innerHTML=`
    <div class="trl-dash-card" role="region" aria-label="Student Progress Dashboard">
      <div class="trl-dash-header">
        <h1 class="trl-dash-heading">
          ${u||""}${y?`<span class="trl-dash-code">${y}</span>`:""}
        </h1>
        ${t.sessionLabel?`<h4 class="trl-dash-session-heading">${t.sessionLabel}</h4>`:""}
      </div>
      <div class="trl-dash-body${a==="column"?" trl-dash-col":""}">
        <div class="trl-dash-gauge-col">
          <div class="trl-dash-gauge-wrap">
            <svg width="${P}" height="${P}" viewBox="0 0 ${P} ${P}" aria-hidden="true">
              <g transform="rotate(${hr} ${fe} ${he})">
                <circle class="trl-dash-track" cx="${fe}" cy="${he}" r="${be.toFixed(2)}"/>
                <circle class="trl-dash-arc"   cx="${fe}" cy="${he}" r="${be.toFixed(2)}"/>
              </g>
            </svg>
            <div class="trl-dash-centre">
              <span class="trl-dash-credit-num" data-target="${t.creditNum}">0</span>
              <span class="trl-dash-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="trl-dash-bars-col">
          ${x(c,d,"trl-dash-mini",t.miniPct)}
          ${x(l,p,"trl-dash-cert",t.certPct)}
          ${x(m,b,"trl-dash-degree",t.degreePct)}
        </div>
      </div>
    </div>`,{wrap:o,data:t}}function et(e,t){let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=e.querySelector(".trl-dash-card"),r=e.querySelector(".trl-dash-arc"),a=e.querySelector(".trl-dash-credit-num"),u=e.querySelectorAll(".trl-dash-bar-fill"),y=(Q-t.progressLen).toFixed(2);if(requestAnimationFrame(()=>i&&i.classList.add("trl-dash-visible")),n){r&&(r.style.strokeDashoffset=y),a&&(a.textContent=t.creditNum),u.forEach(c=>{c.style.width=`${c.dataset.pct}%`});return}if(r&&setTimeout(()=>{r.style.strokeDashoffset=y,setTimeout(()=>r.classList.add("trl-dash-glow"),1350)},250),a){let c=t.creditNum;if(c>0){let d=Math.max(500,Math.min(1200,c*150)),l=performance.now(),p=m=>{let b=Math.min((m-l)/d,1);a.textContent=Math.round(ne(b)*c),b<1&&requestAnimationFrame(p)};setTimeout(()=>requestAnimationFrame(p),250)}else a.textContent=0}u.forEach((c,d)=>{setTimeout(()=>{c.style.width=`${c.dataset.pct}%`},400+d*180)})}function at(e){let t=yr(e),{wrap:n,data:i}=vr(t);if(e.replaceWith(n),"IntersectionObserver"in window){let r=new IntersectionObserver(a=>{a[0].isIntersecting&&(et(n,i),r.disconnect())},{threshold:.25});r.observe(n)}else et(n,i)}function tt(){rt(),document.querySelectorAll("ul").forEach(e=>{nt(e)&&at(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt();C("ul",nt,e=>{rt(),at(e)});var it="trl-lb-styles";function wr(){if(document.getElementById(it))return;let e=document.createElement("style");e.id=it,e.textContent=`
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
  `,document.head.appendChild(e)}var O=null;function kr(){if(O)return O;O=document.createElement("div"),O.className="trl-lb-overlay",O.setAttribute("role","dialog"),O.setAttribute("aria-modal","true"),O.setAttribute("aria-label","Image viewer");let e=document.createElement("button");e.className="trl-lb-close",e.setAttribute("aria-label","Close"),e.textContent="\xD7",e.addEventListener("click",i=>{i.stopPropagation(),xe()});let t=document.createElement("img");t.className="trl-lb-img",t.alt="",t.addEventListener("click",i=>i.stopPropagation());let n=document.createElement("p");return n.className="trl-lb-caption",O.appendChild(e),O.appendChild(t),O.appendChild(n),O.addEventListener("click",xe),document.body.appendChild(O),O}function Sr(e,t){let n=kr(),i=n.querySelector(".trl-lb-img"),r=n.querySelector(".trl-lb-caption");i.src=e,i.alt=t,r.textContent=t,r.hidden=!t,requestAnimationFrame(()=>n.classList.add("trl-lb-open")),document.addEventListener("keydown",st)}function xe(){O&&(O.classList.remove("trl-lb-open"),document.removeEventListener("keydown",st))}function st(e){e.key==="Escape"&&xe()}function lt(e){return!e.closest("a")&&!e.dataset.trlLb}function ct(e){wr(),e.dataset.trlLb="1",e.classList.add("trl-lb-trigger"),e.addEventListener("click",()=>Sr(e.src,e.alt||""))}function ot(){document.querySelectorAll("img").forEach(e=>{lt(e)&&ct(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ot):ot();C("img",lt,ct);var se="flow-accordion",dt="flow-tabs",Ar='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function Er(){$("trl-fac-styles",`
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
  `)}function Fr(){$("trl-fta-styles",`
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
  `)}function ve(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===se||n.startsWith(se+":")||n===dt||n.startsWith(dt+":")}function Cr(e){let t=e.querySelector("li:first-child").textContent.trim().toLowerCase(),n=t===se||t.startsWith(se+":"),i=t.indexOf(":"),r=i>-1?t.slice(i+1).trim():"h6",a=/^h[1-6]$/.test(r)?r:"h6";return{mode:n?"accordion":"tabs",trigger:a}}function $r(e,t){let n=parseInt(t[1]),i=[],r=null,a=e.nextSibling;for(;a;){let u=a.nextSibling,c=a.nodeType===1?a.tagName.toLowerCase():"";if(c==="ul"&&ve(a)||/^h[1-6]$/.test(c)&&parseInt(c[1])<n)break;if(c===t){r={heading:a.textContent.trim(),nodes:[]},i.push(r),a.remove(),a=u;continue}r&&(r.nodes.push(a),a.remove()),a=u}return i}function Mr(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function Lr(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function _r(e,t,n){let i=document.createElement("div");return i.className="trl-fac-widget",i.style.setProperty("--trl-fac-accent","#4a90d9"),e.forEach((r,a)=>{let u=`trl-fac-panel-${n}-${a}`,y=`trl-fac-btn-${n}-${a}`,c=document.createElement("div");c.className="trl-fac-item";let d=document.createElement("button");d.className="trl-fac-trigger",d.id=y,d.setAttribute("aria-expanded","false"),d.setAttribute("aria-controls",u),d.innerHTML=`<span>${r.heading}</span><span class="trl-fac-chevron">${Ar}</span>`;let l=document.createElement("div");l.className="trl-fac-panel",l.id=u,l.setAttribute("role","region"),l.setAttribute("aria-labelledby",y),l.style.height="0";let p=document.createElement("div");p.className="trl-fac-panel-inner",r.nodes.forEach(m=>p.appendChild(m)),l.appendChild(p),d.addEventListener("click",()=>{let m=d.getAttribute("aria-expanded")==="true";d.setAttribute("aria-expanded",String(!m)),m?Lr(l,t):Mr(l,t)}),c.appendChild(d),c.appendChild(l),i.appendChild(c)}),i}function Tr(e,t){let n=document.createElement("div");n.className="trl-fta-widget",n.style.setProperty("--trl-fta-accent","#4a90d9");let i=document.createElement("div");i.className="trl-fta-tablist",i.setAttribute("role","tablist");let r=document.createElement("div");r.className="trl-fta-panels";let a=[],u=[];e.forEach((c,d)=>{let l=`trl-fta-tab-${t}-${d}`,p=`trl-fta-panel-${t}-${d}`,m=document.createElement("button");m.className="trl-fta-tab",m.id=l,m.setAttribute("role","tab"),m.setAttribute("aria-selected",d===0?"true":"false"),m.setAttribute("aria-controls",p),m.setAttribute("tabindex",d===0?"0":"-1"),m.textContent=c.heading;let b=document.createElement("div");b.className="trl-fta-panel"+(d===0?" trl-fta-active":""),b.id=p,b.setAttribute("role","tabpanel"),b.setAttribute("aria-labelledby",l),c.nodes.forEach(x=>b.appendChild(x)),i.appendChild(m),r.appendChild(b),a.push(m),u.push(b)});function y(c){a.forEach((d,l)=>{let p=l===c;d.setAttribute("aria-selected",String(p)),d.setAttribute("tabindex",p?"0":"-1")}),u.forEach((d,l)=>{d.classList.toggle("trl-fta-active",l===c)})}return a.forEach((c,d)=>{c.addEventListener("click",()=>y(d)),c.addEventListener("keydown",l=>{let p=d;if(l.key==="ArrowRight")p=(d+1)%a.length;else if(l.key==="ArrowLeft")p=(d-1+a.length)%a.length;else if(l.key==="Home")p=0;else if(l.key==="End")p=a.length-1;else return;l.preventDefault(),y(p),a[p].focus()})}),n.appendChild(i),n.appendChild(r),n}function pt(e){let{mode:t,trigger:n}=Cr(e),i=$r(e,n);if(!i.length)return;let r=Math.random().toString(36).slice(2,7),a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u;t==="accordion"?(Er(),u=_r(i,a,r),e.replaceWith(u),T(u,()=>u.classList.add("trl-fac-in"))):(Fr(),u=Tr(i,r),e.replaceWith(u),T(u,()=>u.classList.add("trl-fta-in")))}function ut(){document.querySelectorAll("ul").forEach(e=>{ve(e)&&pt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ut):ut();C("ul",ve,pt);var we=Ot(gt(),1);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,r=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(c,d){return c=c.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return r}),RegExp(c,d)}r=a(r).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var u=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(u).join(""):""},y=function(c){for(var d=[],l=0;l<c.length;l++){var p=c[l],m=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===u(p.content[0].content[1])&&d.pop():p.content[p.content.length-1].content==="/>"||d.push({tagName:u(p.content[0].content[1]),openedBraces:0}):d.length>0&&p.type==="punctuation"&&p.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?d[d.length-1].openedBraces--:m=!0),(m||typeof p=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var b=u(p);l<c.length-1&&(typeof c[l+1]=="string"||c[l+1].type==="plain-text")&&(b+=u(c[l+1]),c.splice(l+1,1)),l>0&&(typeof c[l-1]=="string"||c[l-1].type==="plain-text")&&(b=u(c[l-1])+b,c.splice(l-1,1),l--),c[l]=new e.Token("plain-text",b,null,b)}p.content&&typeof p.content!="string"&&y(p.content)}};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||y(c.tokens)})})(Prism);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};r["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=i.variable[1].inside,u=0;u<r.length;u++)a[r[u]]=e.languages.bash[r[u]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(l){return l=l.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+l+")")}var i=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,r=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return i}),a=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+a+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+a+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(i),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(i),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(l){["url","bold","italic","strike","code-snippet"].forEach(function(p){l!==p&&(e.languages.markdown[l].inside.content.inside[p]=e.languages.markdown[p])})}),e.hooks.add("after-tokenize",function(l){if(l.language!=="markdown"&&l.language!=="md")return;function p(m){if(!(!m||typeof m=="string"))for(var b=0,x=m.length;b<x;b++){var o=m[b];if(o.type!=="code"){p(o.content);continue}var s=o.content[1],g=o.content[3];if(s&&g&&s.type==="code-language"&&g.type==="code-block"&&typeof s.content=="string"){var f=s.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");f=(/[a-z][\w-]*/i.exec(f)||[""])[0].toLowerCase();var h="language-"+f;g.alias?typeof g.alias=="string"?g.alias=[g.alias,h]:g.alias.push(h):g.alias=[h]}}}p(l.tokens)}),e.hooks.add("wrap",function(l){if(l.type==="code-block"){for(var p="",m=0,b=l.classes.length;m<b;m++){var x=l.classes[m],o=/language-(.+)/.exec(x);if(o){p=o[1];break}}var s=e.languages[p];if(s)l.content=e.highlight(d(l.content),s,p);else if(p&&p!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);l.attributes.id=g,e.plugins.autoloader.loadLanguages(p,function(){var f=document.getElementById(g);f&&(f.innerHTML=e.highlight(f.textContent,e.languages[p],p))})}}});var u=RegExp(e.languages.markup.tag.pattern.source,"gi"),y={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;function d(l){var p=l.replace(u,"");return p=p.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(m,b){if(b=b.toLowerCase(),b[0]==="#"){var x;return b[1]==="x"?x=parseInt(b.slice(2),16):x=Number(b.slice(1)),c(x)}else{var o=y[b];return o||m}}),p}e.languages.md=e.languages.markdown})(Prism);function Or(){$("trl-code-styles",`
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
  `)}var Ir={javascript:"JS",js:"JS",jsx:"JSX",typescript:"TS",ts:"TS",css:"CSS",markup:"HTML",html:"HTML",xml:"XML",python:"Python",py:"Python",bash:"Bash",shell:"Bash",sh:"Bash",json:"JSON",markdown:"Markdown",md:"Markdown"};function ht(e){return!!mt(e)&&!e.dataset.trlCode}function mt(e){for(let t of e.classList){let n=t.match(/^language-(.+)$/);if(n)return n[1].toLowerCase()}return null}function bt(e){Or(),e.dataset.trlCode="1";let t=mt(e),n=Ir[t]||t,i=e.parentElement;if(i&&i.tagName==="PRE"){let y=document.createElement("span");y.className="trl-code-label",y.textContent=n,i.insertBefore(y,e),i.classList.contains(`language-${t}`)||i.classList.add(`language-${t}`)}let a={js:"javascript",ts:"typescript",py:"python",html:"markup",sh:"bash",shell:"bash",md:"markdown"}[t]||t,u=we.default.languages[a];u&&(e.innerHTML=we.default.highlight(e.textContent,u,a))}function ft(){document.querySelectorAll('pre > code[class*="language-"]').forEach(e=>{ht(e)&&bt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ft):ft();C("code",ht,bt);var ce=window.ENV,yt=ce&&ce.COURSE_ID,xt=ce&&ce.current_user_id;if(yt&&xt){let e=/^\/courses\/\d+\/(pages|assignments|quizzes|discussion_topics|modules\/items)\//,t=window.location.pathname,n=45e3;if(e.test(t)){let a=function(){try{return JSON.parse(localStorage.getItem(i)||"[]")||[]}catch(x){return[]}},u=function(x){try{localStorage.setItem(i,JSON.stringify(x))}catch(o){}},d=function(){let x=a(),o=x.findIndex(function(s){return s.url===t});o>-1?x[o]=c:x.push(c),u(x)},m=function(){let x=(window.scrollY+window.innerHeight)/Math.max(1,document.body.scrollHeight);x>c.ss&&(c.ss=Math.min(1,x),c.ss>=Math.ceil(c.ss/.25)*.25&&d())},b=function(){let x=Array.prototype.slice.call(document.querySelectorAll('[role="tab"]')),o=x.length;if(o===0){c.ts=1;return}let s={};x.forEach(function(h){h.getAttribute("aria-selected")==="true"&&(s[h.id||h.textContent.trim()]=!0)});function g(){c.ts=Math.min(1,Object.keys(s).length/o)}g();let f=new MutationObserver(function(h){h.forEach(function(k){k.attributeName==="aria-selected"&&k.target.getAttribute("aria-selected")==="true"&&(s[k.target.id||k.target.textContent.trim()]=!0,g(),c.ts>=1&&f.disconnect())})});x.forEach(function(h){f.observe(h,{attributes:!0,attributeFilter:["aria-selected"]})})},i="trl-pace-data-"+yt+"-"+xt,r=Date.now(),y=a(),c=y.find(function(x){return x.url===t});c||(c={url:t,t:r,vs:0,ss:0,ts:1},y.push(c));let l=c.vs*n,p=Date.now();document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"?(l+=Date.now()-p,c.vs=Math.min(1,l/n),d()):p=Date.now()}),window.addEventListener("pagehide",function(){document.visibilityState!=="hidden"&&(l+=Date.now()-p),c.vs=Math.min(1,l/n),d()}),window.addEventListener("scroll",m,{passive:!0}),m(),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",function(){setTimeout(b,0)}):setTimeout(b,0)}}var Rr="pace-dashboard",vt=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function St(e){let t=vt[0];for(let n of vt)e>=n.lo&&(t=n);return t}var Pr="http://www.w3.org/2000/svg",U=90,V=18,z=130,j=130,Y=2*Math.PI*U,G=Y/2;function B(e,t){let n=document.createElementNS(Pr,e);for(let[i,r]of Object.entries(t))n.setAttribute(i,String(r));return n}function Dr(e){let t=St(e),n=Math.min(G,Math.max(0,e/2*G)),i=Y-n,r=B("svg",{viewBox:"0 0 260 145","aria-hidden":"true",style:"width:100%"}),a=B("g",{transform:"rotate(180 "+z+" "+j+")"});a.appendChild(B("circle",{cx:z,cy:j,r:U,fill:"none",stroke:"#e8e4df","stroke-width":V,"stroke-dasharray":G.toFixed(2)+" "+G.toFixed(2),"stroke-linecap":"round"}));let u=B("circle",{cx:z,cy:j,r:U,fill:"none",stroke:t.color,"stroke-width":V,"stroke-dasharray":Y.toFixed(2),"stroke-dashoffset":Y.toFixed(2),"stroke-linecap":"round"});u.style.transition="stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.3s ease",a.appendChild(u),r.appendChild(a),[.4,.8,1.2,1.6].forEach(p=>{let m=180-p*90,[b,x]=[z+(U-V/2-1)*Math.cos(m*Math.PI/180),j-(U-V/2-1)*Math.sin(m*Math.PI/180)],[o,s]=[z+(U+V/2+1)*Math.cos(m*Math.PI/180),j-(U+V/2+1)*Math.sin(m*Math.PI/180)];r.appendChild(B("line",{x1:b.toFixed(1),y1:x.toFixed(1),x2:o.toFixed(1),y2:s.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let y=U-V/2-4,c=10,d=B("g",{});d.appendChild(B("polygon",{points:(z-y).toFixed(1)+","+j+" "+z+","+(j-c)+" "+z+","+(j+c),fill:t.color})),r.appendChild(d),d.style.transformOrigin=z+"px "+j+"px",d.style.transform="rotate(0deg)",d.style.transition="transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";function l(p,m,b,x){let o=B("text",{x:p,y:m,"text-anchor":b,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return o.textContent=x,o}return r.appendChild(l("18","132","start","Behind")),r.appendChild(l("242","132","end","Ahead")),{svg:r,arc:u,needleG:d}}function zr(){$("trl-pace-styles",`
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
  `)}function jr(e){let t=window.ENV,n=e["course-id"]||t&&t.COURSE_ID||"demo",i=e["user-id"]||t&&t.current_user_id||"demo";return"trl-pace-data-"+n+"-"+i}function Hr(e){try{return JSON.parse(localStorage.getItem(jr(e))||"[]")||[]}catch(t){return[]}}function qr(e){return(e.vs+e.ss*e.ts)/2}function ke(e){if(!e)return null;let t=new Date(e);return isNaN(t)?null:t}function wt(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function At(e){zr();let t={};Array.from(e.querySelectorAll(":scope > li")).slice(1).forEach(E=>{let N=E.textContent.trim(),I=N.indexOf(":");I>-1&&(t[N.slice(0,I).trim().toLowerCase()]=N.slice(I+1).trim())});let n=parseInt(t["total-pages"]||"0",10),i=ke(t["start-date"]),r=ke(t["end-date"]),a=ke(t["target-date"]||""),u=(t["pace-metric"]||"counted").toLowerCase();if(!n||!i||!r)return;let y=Hr(t),c=y.filter(E=>E.vs>=.5).length,d=y.filter(E=>E.vs>=1&&E.ss*E.ts>=1).length,l=y.filter(E=>qr(E)>=.5).length,p=u==="completed"?d:u==="visited"?c:l,m=Date.now(),b=Math.max(432e5,m-i.getTime()),x=r.getTime()-i.getTime(),o=b/864e5,s=Math.min(1,b/x),g=s>0?p/n/s:0,f=St(g),h=p/o,k=n-p,S=h>0&&k>0?new Date(m+k/h*864e5):p>=n?new Date(m):null,v=document.createElement("div");v.className="trl-pace-widget";let{svg:F,arc:M,needleG:D}=Dr(0);v.appendChild(F);let W=document.createElement("p");W.className="trl-pace-label",W.textContent=f.label,W.style.color=f.color,v.appendChild(W);let Z=document.createElement("p");Z.className="trl-pace-sub";let de=Math.round(p/n*100);Z.textContent=p===0?"Visit course pages to begin tracking":de+"% complete"+(u==="completed"?" (deep reads)":""),v.appendChild(Z);let K=document.createElement("div");K.className="trl-pace-stats";function H(E,N,I){let L=document.createElement("div");L.className="trl-pace-row";let X=document.createElement("span");X.className="trl-pace-row-label",X.textContent=E;let R=document.createElement("span");R.className="trl-pace-row-value"+(I?" trl-pace-dim":""),R.textContent=N,L.appendChild(X),L.appendChild(R),K.appendChild(L)}if(H("Pages visited",c+" of "+n,u!=="visited"),H("Pages counted",l+" of "+n,u!=="counted"),H("Pages completed",d+" of "+n,u!=="completed"),S&&H("Projected finish",wt(S)),H("Course ends",wt(r)),a&&S){let E=Math.round((a-S)/864e5),N=E>=0,I=document.createElement("div");I.className="trl-pace-track-pill "+(N?"trl-pace-track-yes":"trl-pace-track-no");let L=Math.abs(E);I.textContent=(N?"\u2713 ":"\u2717 ")+L+" day"+(L!==1?"s":"")+(N?" before":" after")+" your target",K.appendChild(I)}v.appendChild(K),e.replaceWith(v);let _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;T(v,()=>{if(v.classList.add("trl-pace-in"),_)M.style.strokeDashoffset=(Y-Math.min(G,Math.max(0,g/2*G))).toFixed(2),M.style.stroke=f.color,D.style.transform="rotate("+Math.min(180,g*90).toFixed(1)+"deg)";else{let E=Y-Math.min(G,Math.max(0,g/2*G));M.style.strokeDashoffset=E.toFixed(2),M.style.stroke=f.color,D.style.transform="rotate("+Math.min(180,g*90).toFixed(1)+"deg)"}})}function Et(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase()===Rr}function kt(){document.querySelectorAll("ul").forEach(e=>{Et(e)&&At(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",kt):kt();C("ul",Et,At);})();
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
