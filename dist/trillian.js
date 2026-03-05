/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */
(()=>{var Ct=Object.create;var Se=Object.defineProperty;var $t=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Lt=Object.getPrototypeOf,_t=Object.prototype.hasOwnProperty;var Tt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Nt=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Mt(t))!_t.call(e,r)&&r!==n&&Se(e,r,{get:()=>t[r],enumerable:!(i=$t(t,r))||i.enumerable});return e};var Ot=(e,t,n)=>(n=e!=null?Ct(Lt(e)):{},Nt(t||!e||!e.__esModule?Se(n,"default",{value:e,enumerable:!0}):n,e));var pt=Tt((an,ae)=>{var Nr=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};var x=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function o(l){return l instanceof a?new a(l.type,o(l.content),l.alias):Array.isArray(l)?l.map(o):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++n}),o.__id},clone:function o(l,g){g=g||{};var h,f;switch(r.util.type(l)){case"Object":if(f=r.util.objId(l),g[f])return g[f];h={},g[f]=h;for(var v in l)l.hasOwnProperty(v)&&(h[v]=o(l[v],g));return h;case"Array":return f=r.util.objId(l),g[f]?g[f]:(h=[],g[f]=h,l.forEach(function(S,w){h[w]=o(S,g)}),h);default:return l}},getLanguage:function(o){for(;o;){var l=t.exec(o.className);if(l)return l[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,l){o.className=o.className.replace(RegExp(t,"gi"),""),o.classList.add("language-"+l)},currentScript:function(){if(typeof document=="undefined")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(h){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if(o){var l=document.getElementsByTagName("script");for(var g in l)if(l[g].src==o)return l[g]}return null}},isActive:function(o,l,g){for(var h="no-"+l;o;){var f=o.classList;if(f.contains(l))return!0;if(f.contains(h))return!1;o=o.parentElement}return!!g}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(o,l){var g=r.util.clone(r.languages[o]);for(var h in l)g[h]=l[h];return g},insertBefore:function(o,l,g,h){h=h||r.languages;var f=h[o],v={};for(var S in f)if(f.hasOwnProperty(S)){if(S==l)for(var w in g)g.hasOwnProperty(w)&&(v[w]=g[w]);g.hasOwnProperty(S)||(v[S]=f[S])}var E=h[o];return h[o]=v,r.languages.DFS(r.languages,function($,_){_===E&&$!=o&&(this[$]=v)}),v},DFS:function o(l,g,h,f){f=f||{};var v=r.util.objId;for(var S in l)if(l.hasOwnProperty(S)){g.call(l,S,l[S],h||S);var w=l[S],E=r.util.type(w);E==="Object"&&!f[v(w)]?(f[v(w)]=!0,o(w,g,null,f)):E==="Array"&&!f[v(w)]&&(f[v(w)]=!0,o(w,g,S,f))}}},plugins:{},highlightAll:function(o,l){r.highlightAllUnder(document,o,l)},highlightAllUnder:function(o,l,g){var h={callback:g,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),r.hooks.run("before-all-elements-highlight",h);for(var f=0,v;v=h.elements[f++];)r.highlightElement(v,l===!0,h.callback)},highlightElement:function(o,l,g){var h=r.util.getLanguage(o),f=r.languages[h];r.util.setLanguage(o,h);var v=o.parentElement;v&&v.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(v,h);var S=o.textContent,w={element:o,language:h,grammar:f,code:S};function E(_){w.highlightedCode=_,r.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,r.hooks.run("after-highlight",w),r.hooks.run("complete",w),g&&g.call(w.element)}if(r.hooks.run("before-sanity-check",w),v=w.element.parentElement,v&&v.nodeName.toLowerCase()==="pre"&&!v.hasAttribute("tabindex")&&v.setAttribute("tabindex","0"),!w.code){r.hooks.run("complete",w),g&&g.call(w.element);return}if(r.hooks.run("before-highlight",w),!w.grammar){E(r.util.encode(w.code));return}if(l&&e.Worker){var $=new Worker(r.filename);$.onmessage=function(_){E(_.data)},$.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else E(r.highlight(w.code,w.grammar,w.language))},highlight:function(o,l,g){var h={code:o,grammar:l,language:g};if(r.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=r.tokenize(h.code,h.grammar),r.hooks.run("after-tokenize",h),a.stringify(r.util.encode(h.tokens),h.language)},tokenize:function(o,l){var g=l.rest;if(g){for(var h in g)l[h]=g[h];delete l.rest}var f=new c;return d(f,f.head,o),y(o,f,l,f.head,0),p(f)},hooks:{all:{},add:function(o,l){var g=r.hooks.all;g[o]=g[o]||[],g[o].push(l)},run:function(o,l){var g=r.hooks.all[o];if(!(!g||!g.length))for(var h=0,f;f=g[h++];)f(l)}},Token:a};e.Prism=r;function a(o,l,g,h){this.type=o,this.content=l,this.alias=g,this.length=(h||"").length|0}a.stringify=function o(l,g){if(typeof l=="string")return l;if(Array.isArray(l)){var h="";return l.forEach(function(E){h+=o(E,g)}),h}var f={type:l.type,content:o(l.content,g),tag:"span",classes:["token",l.type],attributes:{},language:g},v=l.alias;v&&(Array.isArray(v)?Array.prototype.push.apply(f.classes,v):f.classes.push(v)),r.hooks.run("wrap",f);var S="";for(var w in f.attributes)S+=" "+w+'="'+(f.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'"'+S+">"+f.content+"</"+f.tag+">"};function u(o,l,g,h){o.lastIndex=l;var f=o.exec(g);if(f&&h&&f[1]){var v=f[1].length;f.index+=v,f[0]=f[0].slice(v)}return f}function y(o,l,g,h,f,v){for(var S in g)if(!(!g.hasOwnProperty(S)||!g[S])){var w=g[S];w=Array.isArray(w)?w:[w];for(var E=0;E<w.length;++E){if(v&&v.cause==S+","+E)return;var $=w[E],_=$.inside,O=!!$.lookbehind,T=!!$.greedy,z=$.alias;if(T&&!$.pattern.global){var P=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,P+"g")}for(var we=$.pattern||$,L=h.next,D=f;L!==l.tail&&!(v&&D>=v.reach);D+=L.value.length,L=L.next){var G=L.value;if(l.length>o.length)return;if(!(G instanceof a)){var K=1,R;if(T){if(R=u(we,D,o,O),!R||R.index>=o.length)break;var X=R.index,Et=R.index+R[0].length,j=D;for(j+=L.value.length;X>=j;)L=L.next,j+=L.value.length;if(j-=L.value.length,D=j,L.value instanceof a)continue;for(var W=L;W!==l.tail&&(j<Et||typeof W.value=="string");W=W.next)K++,j+=W.value.length;K--,G=o.slice(D,j),R.index-=D}else if(R=u(we,0,G,O),!R)continue;var X=R.index,Y=R[0],se=G.slice(0,X),ke=G.slice(X+Y.length),le=D+G.length;v&&le>v.reach&&(v.reach=le);var J=L.prev;se&&(J=d(l,J,se),D+=se.length),s(l,J,K);var Ft=new a(S,_?r.tokenize(Y,_):Y,z,Y);if(L=d(l,J,Ft),ke&&d(l,L,ke),K>1){var ce={cause:S+","+E,reach:le};y(o,l,g,L.prev,D,ce),v&&ce.reach>v.reach&&(v.reach=ce.reach)}}}}}}function c(){var o={value:null,prev:null,next:null},l={value:null,prev:o,next:null};o.next=l,this.head=o,this.tail=l,this.length=0}function d(o,l,g){var h=l.next,f={value:g,prev:l,next:h};return l.next=f,h.prev=f,o.length++,f}function s(o,l,g){for(var h=l.next,f=0;f<g&&h!==o.tail;f++)h=h.next;l.next=h,h.prev=l,o.length-=f}function p(o){for(var l=[],g=o.head.next;g!==o.tail;)l.push(g.value),g=g.next;return l}if(!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(o){var l=JSON.parse(o.data),g=l.language,h=l.code,f=l.immediateClose;e.postMessage(r.highlight(h,r.languages[g],g)),f&&e.close()},!1)),r;var m=r.util.currentScript();m&&(r.filename=m.src,m.hasAttribute("data-manual")&&(r.manual=!0));function b(){r.manual||r.highlightAll()}if(!r.manual){var k=document.readyState;k==="loading"||k==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return r}(Nr);typeof ae!="undefined"&&ae.exports&&(ae.exports=x);typeof global!="undefined"&&(global.Prism=x);x.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};x.languages.markup.tag.inside["attr-value"].inside.entity=x.languages.markup.entity;x.languages.markup.doctype.inside["internal-subset"].inside=x.languages.markup;x.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(x.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:x.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};r["language-"+n]={pattern:/[\s\S]+/,inside:x.languages[n]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},x.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(x.languages.markup.tag,"addAttribute",{value:function(e,t){x.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:x.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});x.languages.html=x.languages.markup;x.languages.mathml=x.languages.markup;x.languages.svg=x.languages.markup;x.languages.xml=x.languages.extend("markup",{});x.languages.ssml=x.languages.xml;x.languages.atom=x.languages.xml;x.languages.rss=x.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(x);x.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};x.languages.javascript=x.languages.extend("clike",{"class-name":[x.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});x.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;x.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:x.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:x.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:x.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:x.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:x.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});x.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:x.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});x.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});x.languages.markup&&(x.languages.markup.tag.addInlined("script","javascript"),x.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));x.languages.js=x.languages.javascript;(function(){if(typeof x=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",t=function(m,b){return"\u2716 Error "+m+" while fetching file: "+b},n="\u2716 Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",a="loading",u="loaded",y="failed",c="pre[data-src]:not(["+r+'="'+u+'"]):not(['+r+'="'+a+'"])';function d(m,b,k){var o=new XMLHttpRequest;o.open("GET",m,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?b(o.responseText):o.status>=400?k(t(o.status,o.statusText)):k(n))},o.send(null)}function s(m){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(b){var k=Number(b[1]),o=b[2],l=b[3];return o?l?[k,Number(l)]:[k,void 0]:[k,k]}}x.hooks.add("before-highlightall",function(m){m.selector+=", "+c}),x.hooks.add("before-sanity-check",function(m){var b=m.element;if(b.matches(c)){m.code="",b.setAttribute(r,a);var k=b.appendChild(document.createElement("CODE"));k.textContent=e;var o=b.getAttribute("data-src"),l=m.language;if(l==="none"){var g=(/\.(\w+)$/.exec(o)||[,"none"])[1];l=i[g]||g}x.util.setLanguage(k,l),x.util.setLanguage(b,l);var h=x.plugins.autoloader;h&&h.loadLanguages(l),d(o,function(f){b.setAttribute(r,u);var v=s(b.getAttribute("data-range"));if(v){var S=f.split(/\r\n?|\n/g),w=v[0],E=v[1]==null?S.length:v[1];w<0&&(w+=S.length),w=Math.max(0,Math.min(w-1,S.length)),E<0&&(E+=S.length),E=Math.max(0,Math.min(E,S.length)),f=S.slice(w,E).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(w+1))}k.textContent=f,x.highlightElement(k)},function(f){b.setAttribute(r,y),k.textContent=f})}}),x.plugins.fileHighlight={highlight:function(b){for(var k=(b||document).querySelectorAll(c),o=0,l;l=k[o++];)x.highlightElement(l)}};var p=!1;x.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),x.plugins.fileHighlight.highlight.apply(this,arguments)}})()});function H(e,t){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(t*255).toString(16).padStart(2,"0"):e}function Q(e){return 1-Math.pow(1-e,3)}function ee(e){return Array.from(e.childNodes).filter(t=>!(t.nodeType===1&&t.tagName==="UL")).map(t=>t.textContent).join("").trim()}function te(e){let t=e.querySelector(":scope > ul");return t?Array.from(t.querySelectorAll(":scope > li")).map(n=>n.innerHTML):[]}function It(e,t=".trillian"){let n=0,i=!1,r=-1;return e.replace(/([^{}]*)([\{\}])/g,(a,u,y)=>{if(y==="}")return i&&n===r&&(i=!1,r=-1),n--,u+"}";n++;let c=u.trim();return c?/^@keyframes\s/i.test(c)?(i=!0,r=n,u+"{"):i||c.startsWith("@")?u+"{":c.split(",").map(s=>`${t} ${s.trim()}`).join(", ")+" {":u+"{"})}function C(e,t){if(document.getElementById(e))return;let n=document.createElement("style");n.id=e,n.textContent=It(t),document.head.appendChild(n)}function M(e,t,n=.1){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}if(!("IntersectionObserver"in window)){t(!1);return}let r=new IntersectionObserver(a=>{a[0].isIntersecting&&(t(!1),r.disconnect())},{threshold:n});r.observe(e)}function F(e,t,n){new MutationObserver(i=>{for(let r of i)for(let a of r.addedNodes){if(a.nodeType!==1)continue;(a.matches(e)?[a]:Array.from(a.querySelectorAll(e))).filter(t).forEach(n)}}).observe(document.documentElement,{childList:!0,subtree:!0})}var Ee={info:{bg:"#eff6ff",border:"#3b82f6",text:"#1e3a5f",icon:"#3b82f6",label:"Info"},warning:{bg:"#fffbeb",border:"#f59e0b",text:"#78350f",icon:"#f59e0b",label:"Warning"},success:{bg:"#f0fdf4",border:"#22c55e",text:"#14532d",icon:"#22c55e",label:"Success"},error:{bg:"#fef2f2",border:"#ef4444",text:"#7f1d1d",icon:"#ef4444",label:"Error"},tip:{bg:"#faf5ff",border:"#a855f7",text:"#4a1772",icon:"#a855f7",label:"Tip"}},Rt={info:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="6.5" r="1.1" fill="currentColor"/></svg>',warning:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5L17.5 16.5H2.5L10 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="10" y1="8.5" x2="10" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.1" fill="currentColor"/></svg>',success:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',error:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',tip:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a5.5 5.5 0 0 1 2.75 10.25V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.75A5.5 5.5 0 0 1 10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 17.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'};function Pt(){C("trl-alert-styles",`
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
  `)}function Fe(e){let t=e.querySelector("p");return t&&/^alert\s*:/i.test(t.textContent.trim())}function Dt(e){let t=Array.from(e.querySelectorAll("p"));if(!t.length)return null;let n=/^alert\s*:\s*(\w+)/i.exec(t[0].textContent.trim());if(!n)return null;let i=n[1].toLowerCase(),r=Ee[i]?i:"info",a;if(t.length>1)a=t.slice(1).map(u=>`<p>${u.innerHTML}</p>`).join("");else{let u=t[0].innerHTML,y=u.search(/<br\s*\/?>/i),c=y>-1?u.slice(y).replace(/^<br\s*\/?>/i,"").trim():"";a=c?`<p>${c}</p>`:""}return{type:r,bodyHtml:a}}function Ce(e){Pt();let t=Dt(e);if(!t)return;let{type:n,bodyHtml:i}=t,r=Ee[n],a=document.createElement("div");a.className="trl-alert-callout",a.setAttribute("role","note"),a.setAttribute("aria-label",r.label),a.style.setProperty("--trl-alert-bg",r.bg),a.style.setProperty("--trl-alert-border",r.border),a.style.setProperty("--trl-alert-text",r.text),a.style.setProperty("--trl-alert-icon",r.icon),a.innerHTML=`
    <span class="trl-alert-icon-wrap">${Rt[n]}</span>
    <div class="trl-alert-body">${i}</div>
  `,e.replaceWith(a),M(a,()=>a.classList.add("trl-alert-in"))}function Ae(){document.querySelectorAll("blockquote").forEach(e=>{Fe(e)&&Ce(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ae):Ae();F("blockquote",Fe,Ce);var $e={accent:"#4a90d9",info:"#3b82f6",warning:"#f59e0b",success:"#22c55e",error:"#ef4444",tip:"#a855f7",cert:"#7b68ee",degree:"#e8a838",neutral:"#888888"};function zt(){C("trl-pill-styles",`
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
  `)}function Le(e){return/^#pill(:|$)/i.test(e.getAttribute("href")||"")}function _e(e){zt();let t=e.getAttribute("href")||"",n=/^#pill(?::(.+))?$/i.exec(t);if(!n)return;let i=(n[1]||"accent").toLowerCase(),r=$e[i]||$e.accent,a=document.createElement("span");a.className="trl-pill",a.textContent=e.textContent,a.style.setProperty("--trl-pill-bg",r),e.replaceWith(a)}function Me(){document.querySelectorAll("a").forEach(e=>{Le(e)&&_e(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Me):Me();F("a",Le,_e);var Te="checklist";function jt(e,t){let n=e+"\0"+t.join(""),i=0;for(let a=0;a<n.length;a++)i=Math.imul(i,31)+n.charCodeAt(a)|0;return`trillian-cl-${location.pathname.replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").slice(0,40)}-${(i>>>0).toString(36)}`}function Ht(e){try{return new Set(JSON.parse(localStorage.getItem(e))||[])}catch(t){return new Set}}function Bt(e,t){try{localStorage.setItem(e,JSON.stringify([...t]))}catch(n){}}function Oe(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===Te||n.startsWith(Te+":")}function qt(e){let t=e.querySelector("li:first-child").textContent.trim(),n=t.indexOf(":"),i=n>-1?t.slice(n+1).trim():"",r=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(a=>a.textContent.trim()).filter(Boolean);return{title:i,items:r}}function Ut(){C("trl-check-styles",`
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
  `)}function Gt(e,t,n){let i=t?(n/t*100).toFixed(1):0,r=e.querySelector(".trl-check-bar-fill"),a=e.querySelector(".trl-check-bar"),u=e.querySelector(".trl-check-count");r&&(r.style.width=`${i}%`),a&&a.setAttribute("aria-valuenow",Math.round(i)),u&&(u.textContent=`${n} / ${t}`)}function Wt(e){let{title:t,items:n}=qt(e),i=jt(t,n),r=Ht(i),a=i.slice(-8),u=document.createElement("div");u.className="trl-check-widget",u.style.setProperty("--trl-check-accent","#4a90d9");let y=n.filter((d,s)=>r.has(s)).length,c=n.length?(y/n.length*100).toFixed(1):0;return u.innerHTML=`
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
      ${n.map((d,s)=>`
        <li class="trl-check-item${r.has(s)?" trl-check-done":""}" data-i="${s}">
          <input class="trl-check-cb" type="checkbox" id="trl-check-${a}-${s}"${r.has(s)?" checked":""}>
          <label class="trl-check-lbl" for="trl-check-${a}-${s}">${d}</label>
        </li>`).join("")}
    </ul>
  `,u.querySelectorAll(".trl-check-item").forEach(d=>{let s=d.querySelector(".trl-check-cb"),p=d.querySelector(".trl-check-lbl");s.addEventListener("change",()=>{let m=parseInt(d.dataset.i,10);d.classList.toggle("trl-check-done",s.checked),s.checked?r.add(m):r.delete(m),Bt(i,r),Gt(u,n.length,r.size)}),d.addEventListener("click",m=>{m.target===s||p.contains(m.target)||s.click()})}),u}function Ie(e){Ut();let t=Wt(e);e.replaceWith(t),M(t,()=>t.classList.add("trl-check-in"))}function Ne(){document.querySelectorAll("ul").forEach(e=>{Oe(e)&&Ie(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ne):Ne();F("ul",Oe,Ie);var A=e=>`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,Vt={"arrow-right":A('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),"arrow-left":A('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),"arrow-up":A('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'),"arrow-down":A('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),"chevron-right":A('<path d="m9 18 6-6-6-6"/>'),"chevron-left":A('<path d="m15 18-6-6 6-6"/>'),"chevron-up":A('<path d="m18 15-6-6-6 6"/>'),"chevron-down":A('<path d="m6 9 6 6 6-6"/>'),"external-link":A('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>'),download:A('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),upload:A('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),check:A('<path d="M20 6 9 17l-5-5"/>'),x:A('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),plus:A('<path d="M5 12h14"/><path d="M12 5v14"/>'),minus:A('<path d="M5 12h14"/>'),search:A('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),edit:A('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),copy:A('<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'),trash:A('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),"file-text":A('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'),"book-open":A('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),bookmark:A('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>'),link:A('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),clock:A('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),calendar:A('<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'),user:A('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),users:A('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),star:A('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),play:A('<polygon points="5 3 19 12 5 21 5 3"/>'),video:A('<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>'),mail:A('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),"graduation-cap":A('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),info:A('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),"alert-triangle":A('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>')};function Re(e){return Vt[e]||""}var Pe="buttons",Zt=["primary","secondary","ghost","danger"];function Kt(){C("trl-btn-styles",`
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
  `)}function Xt(e){return/^javascript:/i.test(e.trim())?"#":e.trim()}function Yt(e){let t=e.includes("\xB7")?"\xB7":" | ",n=e.split(t).map(c=>c.trim()).filter(Boolean);if(n.length<2)return null;let[i,r,a="primary",u="",y="left"]=n;return!i||!r?null:{label:i,href:Xt(r),style:a.toLowerCase(),iconName:u.toLowerCase(),iconPos:y.toLowerCase()==="right"?"right":"left"}}function je(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===Pe||n.startsWith(Pe+":")}function Jt(e){let t=e.querySelector("li:first-child").textContent.trim(),n=t.indexOf(":"),i=n>-1?t.slice(n+1).trim().toLowerCase():"left",r=["center","right"].includes(i)?i:"left",a=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(u=>Yt(u.textContent.trim())).filter(Boolean);return{align:r,items:a}}var Qt={left:"flex-start",center:"center",right:"flex-end"},De="#4a90d9";function He(e){Kt();let{align:t,items:n}=Jt(e);if(!n.length)return;let i=document.createElement("div");i.className="trl-btn-row",i.style.justifyContent=Qt[t]||"flex-start",i.style.setProperty("--trl-btn-accent",De),i.style.setProperty("--trl-btn-accent-10",H(De,.1)),n.forEach(({label:r,href:a,style:u,iconName:y,iconPos:c})=>{let d=document.createElement("a");d.className=`trl-btn-btn trl-btn-${Zt.includes(u)?u:"primary"}`,d.href=a;let s=Re(y);if(s){let p=document.createElement("span");p.className="trl-btn-icon",p.innerHTML=s,c==="right"?(d.appendChild(document.createTextNode(r)),d.appendChild(p)):(d.appendChild(p),d.appendChild(document.createTextNode(r)))}else d.textContent=r;i.appendChild(d)}),e.replaceWith(i),M(i,()=>i.classList.add("trl-btn-in"))}function ze(){document.querySelectorAll("ul").forEach(e=>{je(e)&&He(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ze):ze();F("ul",je,He);var Be="accordion",er='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function tr(){C("trl-acc-styles",`
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
  `)}function rr(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function nr(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function Ue(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===Be||n.startsWith(Be+":")}function ar(e){let t=e.querySelector("li:first-child").textContent.trim(),n=t.indexOf(":"),i=n>-1?t.slice(n+1).trim():"",r=Array.from(e.querySelectorAll(":scope > li")).slice(1).map(a=>({heading:ee(a),paras:te(a)})).filter(a=>a.heading);return{label:i,items:r}}function Ge(e){tr();let{label:t,items:n}=ar(e);if(!n.length)return;let i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=document.createElement("div");if(r.className="trl-acc-widget",r.style.setProperty("--trl-acc-accent","#4a90d9"),t){let a=document.createElement("p");a.className="trl-acc-label",a.textContent=t,r.appendChild(a)}n.forEach((a,u)=>{let y=`trl-acc-panel-${u}-${Math.random().toString(36).slice(2,7)}`,c=`trl-acc-btn-${u}-${Math.random().toString(36).slice(2,7)}`,d=document.createElement("div");d.className="trl-acc-item";let s=document.createElement("button");s.className="trl-acc-trigger",s.id=c,s.setAttribute("aria-expanded","false"),s.setAttribute("aria-controls",y),s.innerHTML=`<span>${a.heading}</span><span class="trl-acc-chevron">${er}</span>`;let p=document.createElement("div");p.className="trl-acc-panel",p.id=y,p.setAttribute("role","region"),p.setAttribute("aria-labelledby",c),p.style.height="0";let m=document.createElement("div");m.className="trl-acc-panel-inner",m.innerHTML=a.paras.length?a.paras.map(b=>`<p>${b}</p>`).join(""):"<p></p>",p.appendChild(m),s.addEventListener("click",()=>{let b=s.getAttribute("aria-expanded")==="true";s.setAttribute("aria-expanded",String(!b)),b?nr(p,i):rr(p,i)}),d.appendChild(s),d.appendChild(p),r.appendChild(d)}),e.replaceWith(r),M(r,()=>r.classList.add("trl-acc-in"))}function qe(){document.querySelectorAll("ul").forEach(e=>{Ue(e)&&Ge(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qe):qe();F("ul",Ue,Ge);var ir="tabs";function or(){C("trl-tabs-styles",`
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
  `)}function Ve(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===ir}function sr(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>({label:ee(t),paras:te(t)})).filter(t=>t.label)}function Ze(e){or();let t=sr(e);if(!t.length)return;let n=Math.random().toString(36).slice(2,7),i=document.createElement("div");i.className="trl-tabs-widget",i.style.setProperty("--trl-tabs-accent","#4a90d9");let r=document.createElement("div");r.className="trl-tabs-tablist",r.setAttribute("role","tablist");let a=document.createElement("div");a.className="trl-tabs-panels";let u=[],y=[];t.forEach((d,s)=>{let p=`trl-tabs-tab-${n}-${s}`,m=`trl-tabs-panel-${n}-${s}`,b=document.createElement("button");b.className="trl-tabs-tab",b.id=p,b.setAttribute("role","tab"),b.setAttribute("aria-selected",s===0?"true":"false"),b.setAttribute("aria-controls",m),b.setAttribute("tabindex",s===0?"0":"-1"),b.textContent=d.label;let k=document.createElement("div");k.className="trl-tabs-panel"+(s===0?" trl-tabs-active":""),k.id=m,k.setAttribute("role","tabpanel"),k.setAttribute("aria-labelledby",p),d.paras.length&&(k.innerHTML=d.paras.map(o=>`<p>${o}</p>`).join("")),r.appendChild(b),a.appendChild(k),u.push(b),y.push(k)});function c(d){u.forEach((s,p)=>{let m=p===d;s.setAttribute("aria-selected",String(m)),s.setAttribute("tabindex",m?"0":"-1")}),y.forEach((s,p)=>{s.classList.toggle("trl-tabs-active",p===d)})}u.forEach((d,s)=>{d.addEventListener("click",()=>c(s)),d.addEventListener("keydown",p=>{let m=s;if(p.key==="ArrowRight")m=(s+1)%u.length;else if(p.key==="ArrowLeft")m=(s-1+u.length)%u.length;else if(p.key==="Home")m=0;else if(p.key==="End")m=u.length-1;else return;p.preventDefault(),c(m),u[m].focus()})}),i.appendChild(r),i.appendChild(a),e.replaceWith(i),M(i,()=>i.classList.add("trl-tabs-in"))}function We(){document.querySelectorAll("ul").forEach(e=>{Ve(e)&&Ze(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",We):We();F("ul",Ve,Ze);var Ke="stats",re={accent:"#4a90d9",cert:"#7b68ee",degree:"#e8a838",success:"#22c55e",error:"#ef4444",neutral:"#888888"};function lr(e){if(!e)return re.accent;let t=e.trim().toLowerCase();return re[t]?re[t]:/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{6}$/i.test(e)?e.trim():re.accent}function cr(){C("trl-stat-styles",`
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
  `)}function dr(e){let t=e.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);if(!t)return null;let n=parseFloat(t[2].replace(/,/g,""));return isNaN(n)?null:{prefix:t[1],num:n,suffix:t[3]}}function ur(e,t,n){let i=Math.max(600,Math.min(1400,t.num*20));setTimeout(()=>{let r=performance.now(),a=u=>{let y=Math.min((u-r)/i,1);e.textContent=t.prefix+Math.round(Q(y)*t.num)+t.suffix,y<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},n)}function Ye(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===Ke||n.startsWith(Ke+":")}function pr(e){let t=e.includes("\xB7")?"\xB7":" | ",n=e.split(t).map(u=>u.trim()).filter(Boolean);if(n.length<2)return null;let[i,r,a]=n;return{value:i,label:r,color:lr(a)}}function gr(e){return Array.from(e.querySelectorAll(":scope > li")).slice(1).map(t=>pr(t.textContent.trim())).filter(Boolean)}function Je(e){cr();let t=gr(e);if(!t.length)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.createElement("div");i.className="trl-stat-row";let r=[];t.forEach((a,u)=>{let y=document.createElement("div");y.className="trl-stat-card",y.style.setProperty("--trl-stat-color",a.color);let c=document.createElement("div");c.className="trl-stat-value";let d=document.createElement("div");d.className="trl-stat-label",d.textContent=a.label;let s=dr(a.value);s&&!n?(c.textContent=s.prefix+"0"+s.suffix,r.push({el:c,parsed:s,delay:u*120})):c.textContent=a.value,y.appendChild(c),y.appendChild(d),i.appendChild(y)}),e.replaceWith(i),M(i,a=>{a||r.forEach(({el:u,parsed:y,delay:c})=>ur(u,y,c)),i.classList.add("trl-stat-in")},.25)}function Xe(){document.querySelectorAll("ul").forEach(e=>{Ye(e)&&Je(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xe):Xe();F("ul",Ye,Je);var I=168,pe=Math.round(I*.12),ge=(I-pe)/2,de=I/2,ue=I/2,V=2*Math.PI*ge,fe=V*(300/360),fr=V-fe,hr=120,mr={session:0,module:0,"course-order":1,"course-name":"","course-code":"","total-sessions":25,"credits-per-course":5,"credits-per-session":.2,"milestone-mini":20,"milestone-cert":45,"milestone-degree":90,"program-short-name":"","program-short-title":"Short Certificate","program-cert-name":"","program-cert-title":"Certificate","program-degree-name":"","program-degree-title":"AAS Degree","accent-color":"#4a90d9","cert-color":"#7b68ee","degree-color":"#e8a838","bg-color":"#ffffff","track-color":"#e8e4df",layout:"row"};function tt(){C("trl-dash-styles",`
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
      width: ${I}px;
      height: ${I}px;
    }
    .trl-dash-gauge-wrap svg { display: block; overflow: visible; }
    .trl-dash-track {
      fill: none;
      stroke: var(--trl-dash-track);
      stroke-width: ${pe};
      stroke-linecap: round;
      stroke-dasharray: ${fe.toFixed(2)} ${fr.toFixed(2)};
    }
    .trl-dash-arc {
      fill: none;
      stroke: var(--trl-dash-accent);
      stroke-width: ${pe};
      stroke-linecap: round;
      stroke-dasharray: ${V.toFixed(2)};
      stroke-dashoffset: ${V.toFixed(2)};
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
      font-size: ${Math.round(I*.46)}px;
      font-weight: 800;
      line-height: 1;
      color: var(--trl-dash-accent);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }
    .trl-dash-credit-lbl {
      font-size: ${Math.round(I*.072)}px;
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
  `)}var br="progress-dashboard";function rt(e){let t=e.querySelector("li:first-child");return t&&t.textContent.trim().toLowerCase()===br}function yr(e){let t=Object.assign({},mr);return Array.from(e.querySelectorAll("li")).slice(1).forEach(n=>{let i=n.textContent.trim(),r=i.indexOf(":");if(r>0){let a=i.slice(0,r).trim(),u=i.slice(r+1).trim();a&&u!==""&&(t[a]=u)}}),t}function xr(e){let t=parseFloat(e.session)||0,n=parseFloat(e.module)||0,i=Math.max(1,parseFloat(e["course-order"])||1),r=parseFloat(e["total-sessions"])||25,a=parseFloat(e["credits-per-course"])||5,u=parseFloat(e["credits-per-session"])||.2,y=parseFloat(e["milestone-mini"])||0,c=parseFloat(e["milestone-cert"])||0,d=parseFloat(e["milestone-degree"])||0,s=(i-1)*a+t*u,p=fe*Math.min(t/r,1),m=Math.floor(n),b=y?Math.min(100,s/y*100):0,k=c?Math.min(100,s/c*100):0,o=d?Math.min(100,s/d*100):0,l="";if(t>0){let g=Math.floor(t),h=Math.round(t%1*10),f=h>0?` <span class="trl-dash-part">(Part ${h})</span>`:"";l=`Session ${g}${f}, of ${r}`}return{session:t,creditNum:m,progressLen:p,sessionLabel:l,miniPct:b,certPct:k,degreePct:o}}function vr(e){let t=xr(e),n=e["accent-color"],i=e["cert-color"],r=e["degree-color"],a=e.layout,u=e["course-name"],y=e["course-code"],c=e["program-short-name"],d=e["program-short-title"],s=e["program-cert-name"],p=e["program-cert-title"],m=e["program-degree-name"],b=e["program-degree-title"],k=(l,g,h,f)=>l?`
    <div class="trl-dash-bar-group">
      <div class="trl-dash-bar-header">
        <span class="trl-dash-bar-name">${l}</span>
        <span class="trl-dash-bar-title">${g}</span>
      </div>
      <div class="trl-dash-bar-track"
           role="progressbar"
           aria-label="${l} progress"
           aria-valuenow="${Math.round(f)}"
           aria-valuemin="0" aria-valuemax="100">
        <div class="trl-dash-bar-fill ${h}" data-pct="${f.toFixed(2)}"></div>
      </div>
    </div>`:"",o=document.createElement("div");return o.className="trl-dash-widget",o.style.setProperty("--trl-dash-accent",n),o.style.setProperty("--trl-dash-accent-55",H(n,.55)),o.style.setProperty("--trl-dash-accent-60",H(n,.6)),o.style.setProperty("--trl-dash-accent-85",H(n,.85)),o.style.setProperty("--trl-dash-cert",i),o.style.setProperty("--trl-dash-cert-60",H(i,.6)),o.style.setProperty("--trl-dash-degree",r),o.style.setProperty("--trl-dash-degree-60",H(r,.6)),o.style.setProperty("--trl-dash-bg",e["bg-color"]),o.style.setProperty("--trl-dash-track",e["track-color"]),o.innerHTML=`
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
            <svg width="${I}" height="${I}" viewBox="0 0 ${I} ${I}" aria-hidden="true">
              <g transform="rotate(${hr} ${de} ${ue})">
                <circle class="trl-dash-track" cx="${de}" cy="${ue}" r="${ge.toFixed(2)}"/>
                <circle class="trl-dash-arc"   cx="${de}" cy="${ue}" r="${ge.toFixed(2)}"/>
              </g>
            </svg>
            <div class="trl-dash-centre">
              <span class="trl-dash-credit-num" data-target="${t.creditNum}">0</span>
              <span class="trl-dash-credit-lbl">Credit</span>
            </div>
          </div>
        </div>
        <div class="trl-dash-bars-col">
          ${k(c,d,"trl-dash-mini",t.miniPct)}
          ${k(s,p,"trl-dash-cert",t.certPct)}
          ${k(m,b,"trl-dash-degree",t.degreePct)}
        </div>
      </div>
    </div>`,{wrap:o,data:t}}function Qe(e,t){let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=e.querySelector(".trl-dash-card"),r=e.querySelector(".trl-dash-arc"),a=e.querySelector(".trl-dash-credit-num"),u=e.querySelectorAll(".trl-dash-bar-fill"),y=(V-t.progressLen).toFixed(2);if(requestAnimationFrame(()=>i&&i.classList.add("trl-dash-visible")),n){r&&(r.style.strokeDashoffset=y),a&&(a.textContent=t.creditNum),u.forEach(c=>{c.style.width=`${c.dataset.pct}%`});return}if(r&&setTimeout(()=>{r.style.strokeDashoffset=y,setTimeout(()=>r.classList.add("trl-dash-glow"),1350)},250),a){let c=t.creditNum;if(c>0){let d=Math.max(500,Math.min(1200,c*150)),s=performance.now(),p=m=>{let b=Math.min((m-s)/d,1);a.textContent=Math.round(Q(b)*c),b<1&&requestAnimationFrame(p)};setTimeout(()=>requestAnimationFrame(p),250)}else a.textContent=0}u.forEach((c,d)=>{setTimeout(()=>{c.style.width=`${c.dataset.pct}%`},400+d*180)})}function nt(e){let t=yr(e),{wrap:n,data:i}=vr(t);if(e.replaceWith(n),"IntersectionObserver"in window){let r=new IntersectionObserver(a=>{a[0].isIntersecting&&(Qe(n,i),r.disconnect())},{threshold:.25});r.observe(n)}else Qe(n,i)}function et(){tt(),document.querySelectorAll("ul").forEach(e=>{rt(e)&&nt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",et):et();F("ul",rt,e=>{tt(),nt(e)});var at="trl-lb-styles";function wr(){if(document.getElementById(at))return;let e=document.createElement("style");e.id=at,e.textContent=`
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
  `,document.head.appendChild(e)}var N=null;function kr(){if(N)return N;N=document.createElement("div"),N.className="trl-lb-overlay",N.setAttribute("role","dialog"),N.setAttribute("aria-modal","true"),N.setAttribute("aria-label","Image viewer");let e=document.createElement("button");e.className="trl-lb-close",e.setAttribute("aria-label","Close"),e.textContent="\xD7",e.addEventListener("click",i=>{i.stopPropagation(),he()});let t=document.createElement("img");t.className="trl-lb-img",t.alt="",t.addEventListener("click",i=>i.stopPropagation());let n=document.createElement("p");return n.className="trl-lb-caption",N.appendChild(e),N.appendChild(t),N.appendChild(n),N.addEventListener("click",he),document.body.appendChild(N),N}function Sr(e,t){let n=kr(),i=n.querySelector(".trl-lb-img"),r=n.querySelector(".trl-lb-caption");i.src=e,i.alt=t,r.textContent=t,r.hidden=!t,requestAnimationFrame(()=>n.classList.add("trl-lb-open")),document.addEventListener("keydown",ot)}function he(){N&&(N.classList.remove("trl-lb-open"),document.removeEventListener("keydown",ot))}function ot(e){e.key==="Escape"&&he()}function st(e){return!e.closest("a")&&!e.dataset.trlLb}function lt(e){wr(),e.dataset.trlLb="1",e.classList.add("trl-lb-trigger"),e.addEventListener("click",()=>Sr(e.src,e.alt||""))}function it(){document.querySelectorAll("img").forEach(e=>{st(e)&&lt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",it):it();F("img",st,lt);var ne="flow-accordion",ct="flow-tabs",Ar='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function Er(){C("trl-fac-styles",`
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
  `)}function Fr(){C("trl-fta-styles",`
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
  `)}function me(e){let t=e.querySelector("li:first-child");if(!t)return!1;let n=t.textContent.trim().toLowerCase();return n===ne||n.startsWith(ne+":")||n===ct||n.startsWith(ct+":")}function Cr(e){let t=e.querySelector("li:first-child").textContent.trim().toLowerCase(),n=t===ne||t.startsWith(ne+":"),i=t.indexOf(":"),r=i>-1?t.slice(i+1).trim():"h6",a=/^h[1-6]$/.test(r)?r:"h6";return{mode:n?"accordion":"tabs",trigger:a}}function $r(e,t){let n=parseInt(t[1]),i=[],r=null,a=e.nextSibling;for(;a;){let u=a.nextSibling,c=a.nodeType===1?a.tagName.toLowerCase():"";if(c==="ul"&&me(a)||/^h[1-6]$/.test(c)&&parseInt(c[1])<n)break;if(c===t){r={heading:a.textContent.trim(),nodes:[]},i.push(r),a.remove(),a=u;continue}r&&(r.nodes.push(a),a.remove()),a=u}return i}function Mr(e,t){if(t){e.style.height="auto";return}e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.style.height!=="0px"&&(e.style.height="auto")},{once:!0})}function Lr(e,t){if(t){e.style.height="0";return}e.style.height=e.scrollHeight+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function _r(e,t,n){let i=document.createElement("div");return i.className="trl-fac-widget",i.style.setProperty("--trl-fac-accent","#4a90d9"),e.forEach((r,a)=>{let u=`trl-fac-panel-${n}-${a}`,y=`trl-fac-btn-${n}-${a}`,c=document.createElement("div");c.className="trl-fac-item";let d=document.createElement("button");d.className="trl-fac-trigger",d.id=y,d.setAttribute("aria-expanded","false"),d.setAttribute("aria-controls",u),d.innerHTML=`<span>${r.heading}</span><span class="trl-fac-chevron">${Ar}</span>`;let s=document.createElement("div");s.className="trl-fac-panel",s.id=u,s.setAttribute("role","region"),s.setAttribute("aria-labelledby",y),s.style.height="0";let p=document.createElement("div");p.className="trl-fac-panel-inner",r.nodes.forEach(m=>p.appendChild(m)),s.appendChild(p),d.addEventListener("click",()=>{let m=d.getAttribute("aria-expanded")==="true";d.setAttribute("aria-expanded",String(!m)),m?Lr(s,t):Mr(s,t)}),c.appendChild(d),c.appendChild(s),i.appendChild(c)}),i}function Tr(e,t){let n=document.createElement("div");n.className="trl-fta-widget",n.style.setProperty("--trl-fta-accent","#4a90d9");let i=document.createElement("div");i.className="trl-fta-tablist",i.setAttribute("role","tablist");let r=document.createElement("div");r.className="trl-fta-panels";let a=[],u=[];e.forEach((c,d)=>{let s=`trl-fta-tab-${t}-${d}`,p=`trl-fta-panel-${t}-${d}`,m=document.createElement("button");m.className="trl-fta-tab",m.id=s,m.setAttribute("role","tab"),m.setAttribute("aria-selected",d===0?"true":"false"),m.setAttribute("aria-controls",p),m.setAttribute("tabindex",d===0?"0":"-1"),m.textContent=c.heading;let b=document.createElement("div");b.className="trl-fta-panel"+(d===0?" trl-fta-active":""),b.id=p,b.setAttribute("role","tabpanel"),b.setAttribute("aria-labelledby",s),c.nodes.forEach(k=>b.appendChild(k)),i.appendChild(m),r.appendChild(b),a.push(m),u.push(b)});function y(c){a.forEach((d,s)=>{let p=s===c;d.setAttribute("aria-selected",String(p)),d.setAttribute("tabindex",p?"0":"-1")}),u.forEach((d,s)=>{d.classList.toggle("trl-fta-active",s===c)})}return a.forEach((c,d)=>{c.addEventListener("click",()=>y(d)),c.addEventListener("keydown",s=>{let p=d;if(s.key==="ArrowRight")p=(d+1)%a.length;else if(s.key==="ArrowLeft")p=(d-1+a.length)%a.length;else if(s.key==="Home")p=0;else if(s.key==="End")p=a.length-1;else return;s.preventDefault(),y(p),a[p].focus()})}),n.appendChild(i),n.appendChild(r),n}function ut(e){let{mode:t,trigger:n}=Cr(e),i=$r(e,n);if(!i.length)return;let r=Math.random().toString(36).slice(2,7),a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u;t==="accordion"?(Er(),u=_r(i,a,r),e.replaceWith(u),M(u,()=>u.classList.add("trl-fac-in"))):(Fr(),u=Tr(i,r),e.replaceWith(u),M(u,()=>u.classList.add("trl-fta-in")))}function dt(){document.querySelectorAll("ul").forEach(e=>{me(e)&&ut(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",dt):dt();F("ul",me,ut);var be=Ot(pt(),1);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,r=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(c,d){return c=c.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return r}),RegExp(c,d)}r=a(r).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var u=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(u).join(""):""},y=function(c){for(var d=[],s=0;s<c.length;s++){var p=c[s],m=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===u(p.content[0].content[1])&&d.pop():p.content[p.content.length-1].content==="/>"||d.push({tagName:u(p.content[0].content[1]),openedBraces:0}):d.length>0&&p.type==="punctuation"&&p.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?d[d.length-1].openedBraces--:m=!0),(m||typeof p=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var b=u(p);s<c.length-1&&(typeof c[s+1]=="string"||c[s+1].type==="plain-text")&&(b+=u(c[s+1]),c.splice(s+1,1)),s>0&&(typeof c[s-1]=="string"||c[s-1].type==="plain-text")&&(b=u(c[s-1])+b,c.splice(s-1,1),s--),c[s]=new e.Token("plain-text",b,null,b)}p.content&&typeof p.content!="string"&&y(p.content)}};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||y(c.tokens)})})(Prism);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};r["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=i.variable[1].inside,u=0;u<r.length;u++)a[r[u]]=e.languages.bash[r[u]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(s){return s=s.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+s+")")}var i=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,r=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return i}),a=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+a+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+a+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(i),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(i),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(s){["url","bold","italic","strike","code-snippet"].forEach(function(p){s!==p&&(e.languages.markdown[s].inside.content.inside[p]=e.languages.markdown[p])})}),e.hooks.add("after-tokenize",function(s){if(s.language!=="markdown"&&s.language!=="md")return;function p(m){if(!(!m||typeof m=="string"))for(var b=0,k=m.length;b<k;b++){var o=m[b];if(o.type!=="code"){p(o.content);continue}var l=o.content[1],g=o.content[3];if(l&&g&&l.type==="code-language"&&g.type==="code-block"&&typeof l.content=="string"){var h=l.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");h=(/[a-z][\w-]*/i.exec(h)||[""])[0].toLowerCase();var f="language-"+h;g.alias?typeof g.alias=="string"?g.alias=[g.alias,f]:g.alias.push(f):g.alias=[f]}}}p(s.tokens)}),e.hooks.add("wrap",function(s){if(s.type==="code-block"){for(var p="",m=0,b=s.classes.length;m<b;m++){var k=s.classes[m],o=/language-(.+)/.exec(k);if(o){p=o[1];break}}var l=e.languages[p];if(l)s.content=e.highlight(d(s.content),l,p);else if(p&&p!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);s.attributes.id=g,e.plugins.autoloader.loadLanguages(p,function(){var h=document.getElementById(g);h&&(h.innerHTML=e.highlight(h.textContent,e.languages[p],p))})}}});var u=RegExp(e.languages.markup.tag.pattern.source,"gi"),y={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;function d(s){var p=s.replace(u,"");return p=p.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(m,b){if(b=b.toLowerCase(),b[0]==="#"){var k;return b[1]==="x"?k=parseInt(b.slice(2),16):k=Number(b.slice(1)),c(k)}else{var o=y[b];return o||m}}),p}e.languages.md=e.languages.markdown})(Prism);function Or(){C("trl-code-styles",`
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
  `)}var Ir={javascript:"JS",js:"JS",jsx:"JSX",typescript:"TS",ts:"TS",css:"CSS",markup:"HTML",html:"HTML",xml:"XML",python:"Python",py:"Python",bash:"Bash",shell:"Bash",sh:"Bash",json:"JSON",markdown:"Markdown",md:"Markdown"};function ft(e){return!!ht(e)&&!e.dataset.trlCode}function ht(e){for(let t of e.classList){let n=t.match(/^language-(.+)$/);if(n)return n[1].toLowerCase()}return null}function mt(e){Or(),e.dataset.trlCode="1";let t=ht(e),n=Ir[t]||t,i=e.parentElement;if(i&&i.tagName==="PRE"){let y=document.createElement("span");y.className="trl-code-label",y.textContent=n,i.insertBefore(y,e),i.classList.contains(`language-${t}`)||i.classList.add(`language-${t}`)}let a={js:"javascript",ts:"typescript",py:"python",html:"markup",sh:"bash",shell:"bash",md:"markdown"}[t]||t,u=be.default.languages[a];u&&(e.innerHTML=be.default.highlight(e.textContent,u,a))}function gt(){document.querySelectorAll('pre > code[class*="language-"]').forEach(e=>{ft(e)&&mt(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gt):gt();F("code",ft,mt);var ie=window.ENV,bt=ie&&ie.COURSE_ID,yt=ie&&ie.current_user_id;if(bt&&yt){let e=/^\/courses\/\d+\/(pages|assignments|quizzes|discussion_topics|modules\/items)\//,t=window.location.pathname;if(e.test(t)){let n="trl-pace-log-"+bt+"-"+yt,i=45e3,r=Date.now(),a=0,u=r,y=!1;try{let c=JSON.parse(localStorage.getItem(n)||"[]");Array.isArray(c)&&c.some(function(d){return d.url===t})&&(y=!0)}catch(c){}if(!y){let c=function(){if(!y&&a>=i){y=!0;try{let d=JSON.parse(localStorage.getItem(n)||"[]");Array.isArray(d)||(d=[]),d.some(function(s){return s.url===t})||(d.push({url:t,t:r}),localStorage.setItem(n,JSON.stringify(d)))}catch(d){}}};document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"?(a+=Date.now()-u,c()):u=Date.now()}),window.addEventListener("pagehide",function(){document.visibilityState!=="hidden"&&(a+=Date.now()-u),c()})}}}var Rr="pace-dashboard",ve=[{lo:0,color:"#ef4444",label:"Way Behind"},{lo:.4,color:"#f59e0b",label:"Behind"},{lo:.8,color:"#22c55e",label:"On Track"},{lo:1.2,color:"#3b82f6",label:"Ahead"},{lo:1.6,color:"#a855f7",label:"Way Ahead"}];function wt(e){let t=ve[0];for(let n of ve)e>=n.lo&&(t=n);return t}var Pr="http://www.w3.org/2000/svg",Z=88,oe=20,q=130,U=130,kt=2*Math.PI*Z,Dr=kt/2,ye=Dr/5;function B(e,t){let n=document.createElementNS(Pr,e);for(let[i,r]of Object.entries(t))n.setAttribute(i,String(r));return n}function zr(e){let t=(180-Math.min(2,Math.max(0,e))*90)*Math.PI/180,n=Z-oe/2-4;return[q+n*Math.cos(t),U-n*Math.sin(t)]}function jr(e){let t=wt(e),n=B("svg",{viewBox:"0 0 260 138","aria-hidden":"true",style:"width:100%"}),i=B("g",{transform:"rotate(180 "+q+" "+U+")"});ve.forEach((y,c)=>{let d=(c*ye).toFixed(2),s=(kt-(c+1)*ye).toFixed(2);i.appendChild(B("circle",{cx:q,cy:U,r:Z,fill:"none",stroke:y.color,"stroke-width":oe,"stroke-dasharray":d+" "+ye.toFixed(2)+" "+s,opacity:t===y?"1":"0.18","stroke-linecap":"butt"}))}),n.appendChild(i),[.4,.8,1.2,1.6].forEach(y=>{let c=(180-y*90)*Math.PI/180,d=Z-oe/2-5,s=Z+oe/2+5,p=q+d*Math.cos(c),m=U-d*Math.sin(c),b=q+s*Math.cos(c),k=U-s*Math.sin(c);n.appendChild(B("line",{x1:p.toFixed(1),y1:m.toFixed(1),x2:b.toFixed(1),y2:k.toFixed(1),stroke:"#fff","stroke-width":"2.5"}))});let[r,a]=zr(e);n.appendChild(B("line",{x1:q,y1:U,x2:r.toFixed(2),y2:a.toFixed(2),stroke:t.color,"stroke-width":"3.5","stroke-linecap":"round"})),n.appendChild(B("circle",{cx:q,cy:U,r:"7",fill:t.color}));function u(y,c,d,s){let p=B("text",{x:y,y:c,"text-anchor":d,"font-size":"10",fill:"#bbb","font-family":"system-ui,sans-serif"});return p.textContent=s,p}return n.appendChild(u("14","132","start","Behind")),n.appendChild(u("246","132","end","Ahead")),n}function Hr(){C("trl-pace-styles",`
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
  `)}function Br(){let e=window.ENV;return"trl-pace-log-"+(e&&e.COURSE_ID||"demo")+"-"+(e&&e.current_user_id||"demo")}function qr(){try{let e=localStorage.getItem(Br()),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch(e){return[]}}function xe(e){if(!e)return null;let t=new Date(e);return isNaN(t)?null:t}function xt(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function St(e){Hr();let t={};Array.from(e.querySelectorAll(":scope > li")).slice(1).forEach(_=>{let O=_.textContent.trim(),T=O.indexOf(":");T>-1&&(t[O.slice(0,T).trim().toLowerCase()]=O.slice(T+1).trim())});let n=parseInt(t["total-pages"]||"0",10),i=xe(t["start-date"]),r=xe(t["end-date"]),a=xe(t["target-date"]||"");if(!n||!i||!r)return;let y=qr().length,c=Date.now(),d=Math.max(432e5,c-i.getTime()),s=r.getTime()-i.getTime(),p=d/864e5,m=Math.min(1,d/s),b=y/n,k=m>0?b/m:0,o=y/p,l=n-y,g=o>0&&l>0?new Date(c+l/o*864e5):y>=n?new Date(c):null,h=wt(k),f=document.createElement("div");f.className="trl-pace-widget",f.appendChild(jr(k));let v=document.createElement("p");v.className="trl-pace-label",v.textContent=h.label,v.style.color=h.color,f.appendChild(v);let S=document.createElement("p");S.className="trl-pace-sub";let w=Math.round(b*100);S.textContent=y===0?"Visit course pages to begin tracking":w+"% complete",f.appendChild(S);let E=document.createElement("div");E.className="trl-pace-stats";function $(_,O){let T=document.createElement("div");T.className="trl-pace-row";let z=document.createElement("span");z.className="trl-pace-row-label",z.textContent=_;let P=document.createElement("span");P.className="trl-pace-row-value",P.textContent=O,T.appendChild(z),T.appendChild(P),E.appendChild(T)}if($("Pages visited",y+" of "+n),$("Projected finish",g?xt(g):"\u2014"),$("Course ends",xt(r)),a&&g){let _=Math.round((a-g)/864e5),O=_>=0,T=document.createElement("div");T.className="trl-pace-track-pill "+(O?"trl-pace-track-yes":"trl-pace-track-no");let z=O?"\u2713":"\u2717",P=Math.abs(_);T.textContent=O?z+" "+P+" day"+(P!==1?"s":"")+" before your target":z+" "+P+" day"+(P!==1?"s":"")+" after your target",E.appendChild(T)}f.appendChild(E),e.replaceWith(f),M(f,()=>f.classList.add("trl-pace-in"))}function At(e){let t=e.querySelector("li:first-child");return!!t&&t.textContent.trim().toLowerCase()===Rr}function vt(){document.querySelectorAll("ul").forEach(e=>{At(e)&&St(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vt):vt();F("ul",At,St);})();
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
