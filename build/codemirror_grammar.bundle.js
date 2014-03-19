/**
*
*   Classy.js
*   @version: 0.4.6
*
*   Object-Oriented mini-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,t,n,r,o){var i="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,l=i||"undefined"==typeof navigator?0:1,a="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,c=Array,u=c.prototype,f=function(){var e=null;if(i)return e=__filename,{path:__dirname,file:__filename};if(a)e=self.location.href;else if(l){var t;(t=document.getElementsByTagName("script"))&&t.length&&(e=t[t.length-1].src)}return e?{path:e.split("/").slice(0,-1).join("/"),file:e}:{path:null,file:null}},s=f(),p=function(e,t){if(i)return t;if("."==t.charAt(0)){e=e.split("/"),t=t.split("/");var n,r=0,o=0,l=t.length,a=e.length;for(n=0;l>n;n++)if(/^\.\./.test(t[n]))r++,o++;else{if(!/^\./.test(t[n]))break;o++}r=r>=a?0:a-r,t=e.slice(0,r).concat(t.slice(o)).join("/")}return t};n=n?[].concat(n):[];var b,y,d,g=n.length,v=new c(g),m=new c(g),h=new c(g),j=new c(g);for(b=0;g>b;b++)v[b]=n[b][0],m[b]=n[b][1],h[b]=/\.js$/i.test(m[b])?p(s.path,m[b]):p(s.path,m[b]+".js");if("object"==typeof module&&module.exports){if(o===module.exports[t]){for(b=0;g>b;b++)j[b]=module.exports[v[b]]||require(h[b])[v[b]];y=r.apply(e,j),module.exports[t]=y||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(m),function(n){if(o===n[t]){for(var i=u.slice.call(arguments,1),l=i.length,a=0;l>a;a++)j[a]=n[v[a]]||i[a];y=r.apply(e,j),n[t]=y||1}});else if(a){for(b=0;g>b;b++)self[v[b]]||importScripts(h[b]),j[b]=self[v[b]];y=r.apply(e,j),self[t]=y||1}else if(o===e[t]){var w=function(e,t){d=d||document.getElementsByTagName("head")[0];var n=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.src=e,r.onload=r.onreadystatechange=function(){n||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(n=1,r.onload=r.onreadystatechange=null,d.removeChild(r),r=null,t&&t())},d.appendChild(r)},x=function(t,n,r){e[t]?r():w(n,r)},E=function(n){return function(){g>n&&(j[n]=e[v[n]]),++n<g?x(v[n],h[n],E(n)):(y=r.apply(e,j),e[t]=y||1)}};g?x(v[0],h[0],E(0)):(y=r.apply(e,j),e[t]=y||1)}}(this,"Classy",null,function(){var e={};return function(e){var t=function(e,t,n){this.v=e||null,this.prev=t||null,this.next=n||null};t.prototype={constructor:t,v:null,prev:null,next:null};var n=Array.prototype,r=Object.prototype,o=Function.prototype,i=o.call.bind(n.slice),l=o.call.bind(r.toString),a=o.call.bind(r.hasOwnProperty),c=o.call.bind(r.propertyIsEnumerable),u=Object.keys,f=Object.defineProperty,s=function(e){return"function"==typeof e||e instanceof Function},p=function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad desc");var n={};if(a(e,"enumerable")&&(n.enumerable=!!t.enumerable),a(e,"configurable")&&(n.configurable=!!t.configurable),a(e,"value")&&(n.value=t.value),a(e,"writable")&&(n.writable=!!e.writable),a(e,"get")){var r=e.get;if(!s(r)&&"undefined"!==r)throw new TypeError("bad get");n.get=r}if(a(e,"set")){var o=e.set;if(!s(o)&&"undefined"!==o)throw new TypeError("bad set");n.set=o}if(("get"in n||"set"in n)&&("value"in n||"writable"in n))throw new TypeError("identity-confused descriptor");return n},b=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var n=u(t),r=[],o=0;o<n.length;o++)r.push([n[o],p(t[n[o]],e)]);for(var o=0;o<r.length;o++)f(e,r[o][0],r[o][1]);return e},y=Object.create||function(e,t){var n,r=function(){};return r.prototype=e,n=new r,n.__proto__=e,"object"==typeof t&&b(n,t),n},d=function(e){var n=new t(e);return function(e){if(e&&n&&n.v){var r,o=this;if(e="constructor"==e?n.v:n.v.prototype[e])return n=new t(n.v.$super,n),r=e.apply(o,i(arguments,1)),n=n.prev,r}}},g=function(){var e,t,n,r,o,u,f,s,p=i(arguments);for(t=p.shift()||{},e=p.length,s=0;e>s;s++)if(n=p[s],n&&"object"==typeof n)for(f in n)a(n,f)&&c(n,f)&&(u=n[f],r=l(u),o=typeof u,t[f]="number"==o||u instanceof Number?0+u:u&&("[object Array]"==r||u instanceof Array||"string"==o||u instanceof String)?u.slice(0):u);return t},v=function(e,t){e=e||Object,t=t||{};var n,r,o=null;return a(t,"constructor")?r=t.constructor:(n=function(){},t.constructor=r=n),a(t,"$static")&&(o=t.$static,delete t.$static),r.prototype=y(e.prototype),r.prototype=g(r.prototype,t),b(r.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0},$class:{value:r,enumerable:!1,writable:!0,configurable:!0},$super:{value:d(e),enumerable:!1,writable:!0,configurable:!0}}),b(r,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:e.$static&&"object"==typeof e.$static?g(null,e.$static):null,enumerable:!1,writable:!0,configurable:!0}}),o&&(r=g(r,o)),r},m=Mixin=g,h=function(){var e=i(arguments),t=e.length,n=null;if(t>=2){var r=typeof e[0];r="function"===r?{Extends:e[0]}:"object"===r?e[0]:{Extends:Object};var o,l,a=e[1]||{},c=e[2]||null,u={},f=r.Extends||r.extends||Object,s=r.Implements||r.implements,p=r.Mixin||r.mixin;if(s=s?[].concat(s):null,p=p?[].concat(p):null)for(o=0,l=p.length;l>o;o++)p[o].prototype&&(u=Mixin(u,p[o].prototype));if(s)for(o=0,l=s.length;l>o;o++)s[o].prototype&&(u=m(u,s[o].prototype));n=v(f,g(u,a)),c&&"object"==typeof c&&(n.$static=g(n.$static,c))}else n=v(Object,e[0]);return n};e.Classy={VERSION:"0.4.6",Class:h,Static:function(e){return e},Extends:v,Implements:m,Mixin:Mixin,Create:y,Merge:g}}(e),e.Classy});
/**
*
*   RegExAnalyzer
*   @version: 0.3
*
*   A simple Regular Expression Analyzer in JavaScript
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r,a,p){var s="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,h=s||"undefined"==typeof navigator?0:1,i="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,n=Array,l=n.prototype,g=function(){var t=null;if(s)return t=__filename,{path:__dirname,file:__filename};if(i)t=self.location.href;else if(h){var e;(e=document.getElementsByTagName("script"))&&e.length&&(t=e[e.length-1].src)}return t?{path:t.split("/").slice(0,-1).join("/"),file:t}:{path:null,file:null}},o=g(),f=function(t,e){if(s)return e;if("."==e.charAt(0)){t=t.split("/"),e=e.split("/");var r,a=0,p=0,h=e.length,i=t.length;for(r=0;h>r;r++)if(/^\.\./.test(e[r]))a++,p++;else{if(!/^\./.test(e[r]))break;p++}a=a>=i?0:i-a,e=t.slice(0,a).concat(e.slice(p)).join("/")}return e};r=r?[].concat(r):[];var u,c,y,d=r.length,S=new n(d),C=new n(d),x=new n(d),m=new n(d);for(u=0;d>u;u++)S[u]=r[u][0],C[u]=r[u][1],x[u]=/\.js$/i.test(C[u])?f(o.path,C[u]):f(o.path,C[u]+".js");if("object"==typeof module&&module.exports){if(p===module.exports[e]){for(u=0;d>u;u++)m[u]=module.exports[S[u]]||require(x[u])[S[u]];c=a.apply(t,m),module.exports[e]=c||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(C),function(r){if(p===r[e]){for(var s=l.slice.call(arguments,1),h=s.length,i=0;h>i;i++)m[i]=r[S[i]]||s[i];c=a.apply(t,m),r[e]=c||1}});else if(i){for(u=0;d>u;u++)self[S[u]]||importScripts(x[u]),m[u]=self[S[u]];c=a.apply(t,m),self[e]=c||1}else if(p===t[e]){var M=function(t,e){y=y||document.getElementsByTagName("head")[0];var r=0,a=document.createElement("script");a.type="text/javascript",a.language="javascript",a.src=t,a.onload=a.onreadystatechange=function(){r||a.readyState&&"loaded"!=a.readyState&&"complete"!=a.readyState||(r=1,a.onload=a.onreadystatechange=null,y.removeChild(a),a=null,e&&e())},y.appendChild(a)},A=function(e,r,a){t[e]?a():M(r,a)},v=function(r){return function(){d>r&&(m[r]=t[S[r]]),++r<d?A(S[r],x[r],v(r)):(c=a.apply(t,m),t[e]=c||1)}};d?A(S[0],x[0],v(0)):(c=a.apply(t,m),t[e]=c||1)}}(this,"RegExAnalyzer",null,function(){var t={};return function(t){var e="\\",r=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,a=/^u([0-9a-fA-F]{4})/,p=/^x([0-9a-fA-F]{2})/,s={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},h={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},i=Object.prototype.toString,n=function(t,e){if(e&&(e instanceof Array||"[object Array]"==i.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},l=function(t,e){t&&(t instanceof Array||"[object Array]"==i.call(t))&&(e=t[1],t=t[0]);var r,a,p=t.charCodeAt(0),s=e.charCodeAt(0);if(s==p)return[String.fromCharCode(p)];for(a=[],r=p;s>=r;++r)a.push(String.fromCharCode(r));return a},g=function(t){var e,r,a,p,s,h,i={},o={};if("Alternation"==t.type)for(a=0,p=t.part.length;p>a;a++)s=g(t.part[a]),i=n(i,s.peek),o=n(o,s.negativepeek);else if("Group"==t.type)s=g(t.part),i=n(i,s.peek),o=n(o,s.negativepeek);else if("Sequence"==t.type){for(a=0,p=t.part.length,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)s=g(r.part),i=n(i,s.peek),o=n(o,s.negativepeek),a++,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;p>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(s=g(r),i=n(i,s.peek),o=n(o,s.negativepeek)))}else if("CharGroup"==t.type)for(e=t.flags.NotMatch?o:i,a=0,p=t.part.length;p>a;a++)r=t.part[a],"Chars"==r.type?e=n(e,r.part):"CharRange"==r.type?e=n(e,l(r.part)):"UnicodeChar"==r.type||"HexChar"==r.type?e[r.flags.Char]=1:"Special"==r.type&&("D"==r.part?t.flags.NotMatch?i["\\d"]=1:o["\\d"]=1:"W"==r.part?t.flags.NotMatch?i["\\w"]=1:o["\\W"]=1:"S"==r.part?t.flags.NotMatch?i["\\s"]=1:o["\\s"]=1:e["\\"+r.part]=1);else"String"==t.type?i[t.part.charAt(0)]=1:"Special"!=t.type||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==t.type||"HexChar"==t.type)&&(i[t.flags.Char]=1):"D"==t.part?o["\\d"]=1:"W"==t.part?o["\\W"]=1:"S"==t.part?o["\\s"]=1:i["\\"+t.part]=1;return{peek:i,negativepeek:o}},o=function(t,e){t&&this.setRegex(t,e)};o.VERSION="0.3",o.getCharRange=l,o.prototype={constructor:o,VERSION:o.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:o.getCharRange,getPeekChars:function(){var t,e,r,a,p=this.flags&&this.flags.i,h=g(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=n(a,l("0","9"))):"\\s"==e?(delete r[e],a=n(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=n(a,["_"].concat(l("0","9")).concat(l("a","z")).concat(l("A","Z")))):"\\."==e?(delete r[e],a[s["."]]=1):"\\"!=e.charAt(0)&&p?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=n(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,p=r.charAt(a-1);e!=p;)this.flags[p]=1,r=r.substr(0,a-1),a=r.length,p=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var t,i,n,l="",g=[],o=[],f=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)if(t=this.regex.charAt(this.pos++),f=e==t?!0:!1,f&&(t=this.regex.charAt(this.pos++)),f)"u"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n=a.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"UnicodeChar"})):"x"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n=p.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"HexChar"})):h[t]&&"/"!=t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i={},i[h[t]]=1,o.push({part:t,flags:i,type:"Special"})):l+=t;else if("|"==t)l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.push({part:o,flags:{},type:"Sequence"}),o=[];else if("["==t)l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.chargroup());else if("("==t)l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.subgroup());else if("{"==t){l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n=r.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,i={part:n[0],MatchMinimum:n[1],MatchMaximum:n[2]||"unlimited"},i[s[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var u=o.pop();"String"==u.type&&u.part.length>1&&(o.push({part:u.part.slice(0,-1),flags:{},type:"String"}),u.part=u.part.slice(-1)),o.push({part:u,flags:i,type:"Quantifier"})}else if("*"==t||"+"==t||"?"==t){l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i={},i[s[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var u=o.pop();"String"==u.type&&u.part.length>1&&(o.push({part:u.part.slice(0,-1),flags:{},type:"String"}),u.part=u.part.slice(-1)),o.push({part:u,flags:i,type:"Quantifier"})}else s[t]?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i={},i[s[t]]=1,o.push({part:t,flags:i,type:"Special"})):l+=t;return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],i={},i[s["|"]]=1,this.parts={part:g,flags:i,type:"Alternation"}):this.parts={part:o,flags:{},type:"Sequence"},this},subgroup:function(){var t,i,n,l="",g=[],o=[],f={},u=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(f.NotCaptured=1,this.pos+=2):"?="==c?(f.LookAhead=1,this.pos+=2):"?!"==c&&(f.NegativeLookAhead=1,this.pos+=2),f.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(t=this.regex.charAt(this.pos++),u=e==t?!0:!1,u&&(t=this.regex.charAt(this.pos++)),u)"u"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n=a.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"UnicodeChar"})):"x"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n=p.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"HexChar"})):h[t]&&"/"!=t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i={},i[h[t]]=1,o.push({part:t,flags:i,type:"Special"})):l+=t;else{if(")"==t)return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],i={},i[s["|"]]=1,{part:{part:g,flags:i,type:"Alternation"},flags:f,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:f,type:"Group"};if("|"==t)l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.push({part:o,flags:{},type:"Sequence"}),o=[];else if("["==t)l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.chargroup());else if("("==t)l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.subgroup());else if("{"==t){l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n=r.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,i={part:n[0],MatchMinimum:n[1],MatchMaximum:n[2]||"unlimited"},i[s[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var y=o.pop();"String"==y.type&&y.part.length>1&&(o.push({part:y.part.slice(0,-1),flags:{},type:"String"}),y.part=y.part.slice(-1)),o.push({part:y,flags:i,type:"Quantifier"})}else if("*"==t||"+"==t||"?"==t){l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i={},i[s[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var y=o.pop();"String"==y.type&&y.part.length>1&&(o.push({part:y.part.slice(0,-1),flags:{},type:"String"}),y.part=y.part.slice(-1)),o.push({part:y,flags:i,type:"Quantifier"})}else s[t]?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i={},i[s[t]]=1,o.push({part:t,flags:i,type:"Special"})):l+=t}return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],i={},i[s["|"]]=1,{part:{part:g,flags:i,type:"Alternation"},flags:f,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:f,type:"Group"}},chargroup:function(){var t,r,s,i,n,l,g=[],o=[],f={},u=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(f.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(l=!1,s=r,r=this.regex.charAt(this.pos++),c=e==r?!0:!1,c&&(r=this.regex.charAt(this.pos++)),c&&("u"==r?(n=a.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,r=String.fromCharCode(parseInt(n[1],16)),l=!0):"x"==r&&(n=p.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,r=String.fromCharCode(parseInt(n[1],16)),l=!0)),u)o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),i[1]=r,u=!1,g.push({part:i,flags:{},type:"CharRange"});else if(c)!l&&h[r]&&"/"!=r?(o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),t={},t[h[r]]=1,g.push({part:r,flags:t,type:"Special"})):o.push(r);else{if("]"==r)return o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),{part:g,flags:f,type:"CharGroup"};"-"==r?(i=[s,""],o.pop(),u=!0):o.push(r)}return o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),{part:g,flags:f,type:"CharGroup"}}},t.RegExAnalyzer=o}(t),t.RegExAnalyzer});
/**
*
*   CodeMirrorGrammar
*   @version: 0.9.1
*
*   Transform a grammar specification in JSON format, into a syntax-highlight parser mode for CodeMirror
*   https://github.com/foo123/codemirror-grammar
*
**/!function(t,n,e,r,l){var o="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,i=o||"undefined"==typeof navigator?0:1,s="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,u=Array,c=u.prototype,a=function(){var t=null;if(o)return t=__filename,{path:__dirname,file:__filename};if(s)t=self.location.href;else if(i){var n;(n=document.getElementsByTagName("script"))&&n.length&&(t=n[n.length-1].src)}return t?{path:t.split("/").slice(0,-1).join("/"),file:t}:{path:null,file:null}},f=a(),p=function(t,n){if(o)return n;if("."==n.charAt(0)){t=t.split("/"),n=n.split("/");var e,r=0,l=0,i=n.length,s=t.length;for(e=0;i>e;e++)if(/^\.\./.test(n[e]))r++,l++;else{if(!/^\./.test(n[e]))break;l++}r=r>=s?0:s-r,n=t.slice(0,r).concat(n.slice(l)).join("/")}return n};e=e?[].concat(e):[];var h,g,d,m=e.length,k=new u(m),E=new u(m),v=new u(m),C=new u(m);for(h=0;m>h;h++)k[h]=e[h][0],E[h]=e[h][1],v[h]=/\.js$/i.test(E[h])?p(f.path,E[h]):p(f.path,E[h]+".js");if("object"==typeof module&&module.exports){if(l===module.exports[n]){for(h=0;m>h;h++)C[h]=module.exports[k[h]]||require(v[h])[k[h]];g=r.apply(t,C),module.exports[n]=g||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(E),function(e){if(l===e[n]){for(var o=c.slice.call(arguments,1),i=o.length,s=0;i>s;s++)C[s]=e[k[s]]||o[s];g=r.apply(t,C),e[n]=g||1}});else if(s){for(h=0;m>h;h++)self[k[h]]||importScripts(v[h]),C[h]=self[k[h]];g=r.apply(t,C),self[n]=g||1}else if(l===t[n]){var y=function(t,n){d=d||document.getElementsByTagName("head")[0];var e=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.src=t,r.onload=r.onreadystatechange=function(){e||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(e=1,r.onload=r.onreadystatechange=null,d.removeChild(r),r=null,n&&n())},d.appendChild(r)},R=function(n,e,r){t[n]?r():y(e,r)},_=function(e){return function(){m>e&&(C[e]=t[k[e]]),++e<m?R(k[e],v[e],_(e)):(g=r.apply(t,C),t[n]=g||1)}};m?R(k[0],v[0],_(0)):(g=r.apply(t,C),t[n]=g||1)}}(this,"CodeMirrorGrammar",[["Classy","./classy"],["RegExAnalyzer","./regexanalyzer"]],function(t,n){var e,r,o=1/0,s=2,u=3,c=4,a=8,f=9,p=10,h=16,g=32,d=64,m=128,k=256,E=512,v=1024,C=2,y=4,R=8,_=16,b=17,w=18,S=20,x=32,T=33,M=34,B=64,A=128,D=256,O=257,L=258,P=259,j=512,N=1024,I=2048,H=4096,Q={EITHER:B,ALL:A,ZEROORONE:O,ZEROORMORE:L,ONEORMORE:P,REPEATED:D},$={INDENT:I,DEDENT:H,BLOCK:x,COMMENT:M,ESCAPEDBLOCK:T,SIMPLE:_,GROUP:j,NGRAM:N},V=t.Class,K=Array.prototype,q=Object.prototype,F=Function.prototype,U=F.call.bind(K.slice),G=F.call.bind(q.hasOwnProperty),z=F.call.bind(q.toString),W=F.call.bind(q.propertyIsEnumerable),Z=Object.keys,Y=function(t){var n=typeof t,e=z(t);return"undefined"===n?E:"number"===n||t instanceof Number?isNaN(t)?u:s:null===t?k:!0===t||!1===t?c:t&&("string"===n||t instanceof String)?1===t.length?f:a:t&&("[object Array]"===e||t instanceof Array)?h:t&&("[object RegExp]"===e||t instanceof RegExp)?m:t&&("function"===n&&"[object Function]"===e||t instanceof Function)?d:t&&"[object Object]"===e?g:v},J=function(t,n){return n||h!=Y(t)?[t]:t},X=function(t,n){return t=J(t,n),(n||h!=Y(t[0]))&&(t=[t]),t},tn=function(t){var n,e=Y(t);if(!((g|h)&e))return t;var r,l={};for(r in t)G(t,r)&&W(t,r)&&(n=Y(t[r]),l[r]=g&n?tn(t[r]):h&n?t[r].slice():t[r]);return l},nn=function(){var t=U(arguments),n=t.length;if(1>n)return null;if(2>n)return tn(t[0]);var e,r,l,o,i=t.shift(),s=tn(i);for(n--,r=0;n>r;r++)if(e=t.shift())for(l in e)G(e,l)&&W(e,l)&&(G(i,l)&&W(i,l)?(o=Y(i[l]),g&~a&o&&(s[l]=nn(i[l],e[l]))):s[l]=tn(e[l]));return s},en=function(t){return t.replace(/([.*+?^${}()|[\]\/\\\-])/g,"\\$1")},rn=function(t,n){var e,r,l,o;for(o=function(t,e){return n[1+parseInt(e,10)]},e=t.split("$$"),l=e.length,r=0;l>r;r++)e[r]=e[r].replace(/\$(\d{1,2})/g,o);return e.join("$")},ln=function(t,n){return n.length-t.length},on=function(t,n){return a&Y(n)&&a&Y(t)&&n.length&&n.length<=t.length&&n==t.substr(0,n.length)},sn=function(t,e,r){if(!t||s==Y(t))return t;var l,o=e?e.length||0:0;if(o&&e==t.substr(0,o)){var i,u,c,a,f,l,p,h=t.substr(o),g=h[0],d="";for(l=h.length;l--&&(p=h[l],g!=p);)"i"==p.toLowerCase()&&(d="i");return i=h.substring(1,l),u="^("+i+")",r[u]||(c=new RegExp(u,d),f=new n(c).analyze(),a=f.getPeekChars(),Z(a.peek).length||(a.peek=null),Z(a.negativepeek).length||(a.negativepeek=null),r[u]=[c,a]),r[u]}return t},un=function(t,n){var e={},r="",l=Y(n);(a==l||f==l)&&(r=n);var o=t.sort(ln).map(function(t){return e[t.charAt(0)]=1,en(t)}).join("|");return[new RegExp("^("+o+")"+r),{peek:e,negativepeek:null},1]},cn=0,an=function(){return++cn},fn="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,pn=fn||"undefined"==typeof navigator?0:1,hn="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,gn=function(){var t,n,e=null;return fn?(e=__filename,{path:__dirname,file:__filename,base:__dirname}):(hn?e=self.location.href:pn&&(t=document.location.href.split("#")[0].split("?")[0].split("/").slice(0,-1).join("/"),(n=document.getElementsByTagName("script"))&&n.length&&(e=n[n.length-1].src)),e?{path:e.split("/").slice(0,-1).join("/"),file:e,base:t}:{path:null,file:null,base:null})};gn();var dn=Math.max,mn=/^[\s\u00a0]+/,kn=/[^\s\u00a0]/,En=function(t,n,e,r,l){var o,i;for(null===n&&(n=t.search(kn),-1==n&&(n=t.length)),o=r||0,i=l||0;n>o;++o)i+="	"==t.charAt(o)?e-i%e:1;return i},vn=V({constructor:function(t){var n=this;n._=null,n.s=t?""+t:"",n.start=n.pos=0,n.lCP=n.lCV=0,n.lS=0},_:null,s:"",start:0,pos:0,lCP:0,lCV:0,lS:0,toString:function(){return this.s},fromStream:function(t){var n=this;return n._=t,n.s=""+t.string,n.start=t.start,n.pos=t.pos,n.lCP=t.lastColumnPos,n.lCV=t.lastColumnValue,n.lS=t.lineStart,n},sol:function(){return 0==this.pos},eol:function(){return this.pos>=this.s.length},chr:function(t,n){var e=this,r=e.s.charAt(e.pos)||null;return r&&t==r?(!1!==n&&(e.pos+=1,e._&&(e._.pos=e.pos)),r):!1},chl:function(t,n){var e=this,r=e.s.charAt(e.pos)||null;return r&&-1<t.indexOf(r)?(!1!==n&&(e.pos+=1,e._&&(e._.pos=e.pos)),r):!1},str:function(t,n,e){var r,l=this,o=l.pos,i=l.s,s=i.charAt(o)||null;return s&&n[s]&&(r=t.length,t==i.substr(o,r))?(!1!==e&&(l.pos+=r,l._&&(l._.pos=l.pos)),t):!1},rex:function(t,n,e,r,l){var o,i=this,s=i.pos,u=i.s,c=u.charAt(s)||null;return c&&n&&n[c]||e&&!e[c]?(o=u.slice(s).match(t),!o||o.index>0?!1:(!1!==l&&(i.pos+=o[r||0].length,i._&&(i._.pos=i.pos)),o)):!1},spc:function(t){var n,e=this,r=e.pos,l=e.s.slice(r);return(n=l.match(mn))?(!1!==t&&(e.pos+=n[0].length,e._&&(e._.pos=e.pos)),1):0},end:function(){var t=this;return t.pos=t.s.length,t._&&(t._.pos=t.pos),t},nxt:function(){var t,n=this,e=n.s;return n.pos<e.length?(t=e.charAt(n.pos++)||null,n._&&(n._.pos=n.pos),t):void 0},bck:function(t){var n=this;return n.pos=dn(0,n.pos-t),n._&&(n._.pos=n.pos),n},bck2:function(t){var n=this;return n.pos=dn(0,t),n._&&(n._.pos=n.pos),n},col:function(t){var n=this;return t=t||1,n.lCP<n.start&&(n.lCV=En(n.s,n.start,t,n.lCP,n.lCV),n.lCP=n.start,n._&&(n._.start=n.start,n._.lastColumnPos=n.lCP,n._.lastColumnValue=n.lCV,n._.lineStart=n.lS)),n.lCV-(n.lS?En(n.s,n.lS,t):0)},ind:function(t){var n=this;return t=t||1,En(n.s,null,t)-(n.lS?En(n.s,n.lS,t):0)},cur:function(t){var n=this,e=n.s.slice(n.start,n.pos);return t&&(n.start=n.pos),e},sft:function(){return this.start=this.pos,this}}),Cn=V({constructor:function(t){this._=t||[]},_:null,toString:function(){var t=this._.slice();return t.reverse().join("\n")},clone:function(){return new this.$class(this._.slice())},isEmpty:function(){return 0>=this._.length},pos:function(){return this._.length},peek:function(t){var n=this._;if(t="undefined"==typeof t?-1:t,n.length){if(0>t&&0<=n.length+t)return n[n.length+t];if(t>=0&&t<n.length)return n[t]}return null},pop:function(){return this._.pop()},shift:function(){return this._.shift()},push:function(t){return this._.push(t),this},unshift:function(t){return this._.unshift(t),this},pushAt:function(t,n,e,r){var l=this._;return e&&r&&(n[e]=r),t<l.length?l.splice(t,0,n):l.push(n),this},empty:function(t,n){var e=this._;if(e.length,t&&n)for(;e.length&&e[e.length-1]&&e[e.length-1][t]==n;)e.pop();else e.length=0;return this}}),yn=V({constructor:function(t,n){var e=this;e.id=n?(new Date).getTime():0,e.l=t||0,e.stack=new Cn,e.data=new Cn,e.col=0,e.indent=0,e.t=null,e.inBlock=null,e.endBlock=null},id:0,l:0,col:0,indent:0,stack:null,data:null,t:null,inBlock:null,endBlock:null,clone:function(t){var n=this,e=new n.$class(n.l,t);return e.t=n.t,e.col=n.col,e.indent=n.indent,e.stack=n.stack.clone(),e.data=n.data.clone(),e.inBlock=n.inBlock,e.endBlock=n.endBlock,e},toString:function(){var t=this;return["",t.id,t.l,t.t,t.inBlock||"0"].join("_")}}),Rn=V({constructor:function(t,n,e,r){var l=this;switch(l.type=C,l.tt=t||f,l.tn=n,l.tk=r||0,l.tg=0,l.tp=null,l.p=null,l.np=null,l.tt){case f:case p:l.tp=e;break;case a:l.tp=e,l.p={},l.p[""+e.charAt(0)]=1;break;case m:l.tp=e[0],l.p=e[1].peek||null,l.np=e[1].negativepeek||null,l.tg=e[2]||0;break;case k:l.tp=null}},type:null,tt:null,tn:null,tp:null,tg:0,tk:0,p:null,np:null,get:function(t,n){var e,r=this,l=r.tt,o=r.tk,i=r.tp,s=r.tg,u=r.p,c=r.np;switch(l){case f:if(e=t.chr(i,n))return[o,e];break;case p:if(e=t.chl(i,n))return[o,e];break;case a:if(e=t.str(i,u,n))return[o,e];break;case m:if(e=t.rex(i,u,c,s,n))return[o,e];break;case k:return!1!==n&&t.end(),[o,""]}return!1},toString:function(){return["[","Matcher: ",this.tn,", Pattern: ",this.tp?this.tp.toString():null,"]"].join("")}}),_n=V(Rn,{constructor:function(t,n,e){var r=this;r.type=y,r.tn=t,r.ms=n,r.ownKey=!1!==e},ms:null,ownKey:!0,get:function(t,n){var e,r,l=this.ms,o=l.length,i=this.ownKey;for(e=0;o>e;e++)if(r=l[e].get(t,n))return i?[e,r[1]]:r;return!1}}),bn=V(Rn,{constructor:function(t,n,e){var r=this;r.type=R,r.tn=t,r.s=new _n(r.tn+"_Start",n,!1),r.e=e},s:null,e:null,get:function(t,n){var e,r=this,l=r.s,o=r.e;if(e=l.get(t,n)){var i,u=o[e[0]],c=Y(u),p=l.ms[e[0]].tt;return m==p&&(s==c?(i=e[1][u+1],u=new Rn(i.length>1?a:f,r.tn+"_End",i)):a==c&&(i=rn(u,e[1]),u=new Rn(i.length>1?a:f,r.tn+"_End",i))),u}return!1}}),wn=function(t,n,e,r){var l=Y(n);if(s==l)return n;if(!r[t]){e=e||0;var o,i=0;n&&n.isCharList&&(i=1,delete n.isCharList),o=k&l?new Rn(k,t,n,e):f==l?new Rn(f,t,n,e):a&l?i?new Rn(p,t,n,e):new Rn(a,t,n,e):h&l?new Rn(m,t,n,e):n,r[t]=o}return r[t]},Sn=function(t,n,e,r,l,o){if(!o[t]){var i,s,u,c,p,g,d,m=0,k=0,E=1;if(i=J(n),u=i.length,1==u)d=wn(t,sn(i[0],e,l),0,o);else if(u>1){for(c=(u>>1)+1,s=0;c>=s;s++)p=Y(i[s]),g=Y(i[u-1-s]),(f!=p||f!=g)&&(E=0),h&p||h&g?m=1:(on(i[s],e)||on(i[u-1-s],e))&&(k=1);if(!E||r&&a&Y(r))if(!r||m||k){for(s=0;u>s;s++)i[s]=h&Y(i[s])?Sn(t+"_"+s,i[s],e,r,l,o):wn(t+"_"+s,sn(i[s],e,l),s,o);d=u>1?new _n(t,i):i[0]}else d=wn(t,un(i,r),0,o);else i=i.slice().join(""),i.isCharList=1,d=wn(t,i,0,o)}o[t]=d}return o[t]},xn=function(t,n,e,r,l){if(!l[t]){var o,i,s,u,c,f,p;for(u=[],c=[],o=X(n),i=0,s=o.length;s>i;i++)f=wn(t+"_0_"+i,sn(o[i][0],e,r),i,l),p=o[i].length>1?m!=f.tt||a!=Y(o[i][1])||on(o[i][1],e)?wn(t+"_1_"+i,sn(o[i][1],e,r),i,l):o[i][1]:f,u.push(f),c.push(p);l[t]=new bn(t,u,c)}return l[t]},Tn=V({constructor:function(t,n,e){var r=this;r.tt=t||_,r.id=n,r.tk=e,r.REQ=0,r.ERR=0,r.MTCH=0,r.CLONE=["tk"]},sID:null,id:null,tt:null,tk:null,tm:null,REQ:0,ERR:0,MTCH:0,CLONE:null,m:function(t,n){var e,r,l=this.tm||null,o=n.data;if(l)if(e=l[1],"push"==l[0]&&e)t&&(r=Y(e),e=s==r?t[1][e]:rn(e,t[1])),o.push(e);else if("pop"==l[0])if(e){if(t&&(r=Y(e),e=s==r?t[1][e]:rn(e,t[1])),o.isEmpty()||e!=o.peek())return e;o.pop()}else o.length&&o.pop();return 0},get:function(t,n){var e=this,r=e.tm,l=e.tk,o=e.tt,i=e.id,s=null;if(e.MTCH=0,S==o)return e.ERR=0,e.REQ=0,!0;if(b==o){if(t.spc(),t.eol())return i}else if(w==o)e.ERR=e.REQ&&t.spc()&&!t.eol()?1:0,e.REQ=0;else if(s=l.get(t))return r&&(e.MTCH=e.m(s,n)),i;return!1},req:function(t){return this.REQ=t?1:0,this},err:function(){var t=this;return t.REQ?'Token "'+t.id+'" Expected':t.MTCH?'Token "'+t.MTCH+'" No Match':'Syntax Error: "'+t.id+'"'},clone:function(){var t,n,e,r=this,l=r.CLONE;if(t=new r.$class,t.tt=r.tt,t.id=r.id,t.tm=r.tm?r.tm.slice():r.tm,l&&l.length)for(n=0,e=l.length;e>n;n++)t[l[n]]=r[l[n]];return t},toString:function(){return["[","Tokenizer: ",this.id,", Matcher: ",this.tk?this.tk.toString():null,"]"].join("")}}),Mn=V(Tn,{constructor:function(t,n,e,r,l,o){var i=this;i.$super("constructor",t,n,e),i.mline="undefined"==typeof r?1:r,i.esc=l||"\\",i.inter=o,i.CLONE=["tk","mline","esc","inter"]},inter:0,mline:0,esc:null,get:function(t,n){var e,r,l,o,i,s,u,c,a,f=this,p=0,h=0,g="",d=f.mline,m=f.tk,E=f.id,v=f.tt,C=f.inter,y=C?E+".inside":E,R=0,_=T==v,b=f.esc;if(M==v&&(f.REQ=0),i=0,n.inBlock==E?(h=1,e=n.endBlock,i=1,s=y):!n.inBlock&&(e=m.get(t))&&(h=1,n.inBlock=E,n.endBlock=e,s=E),h){if(l=n.stack.pos(),o=k==e.tt,C){if(i&&o&&t.sol())return f.REQ=0,n.inBlock=null,n.endBlock=null,!1;if(!i)return n.stack.pushAt(l,f.clone(),"sID",E),s}if(p=e.get(t),r=d,a=0,p)s=o?y:E;else for(c=t.pos;!t.eol();){if(u=t.pos,!(_&&R||!e.get(t))){C?t.pos>u&&u>c?(s=y,t.bck2(u),a=1):(s=E,p=1):(s=E,p=1);break}g=t.nxt(),R=!R&&g==b}return r=d||_&&R,p||!r&&!a?(n.inBlock=null,n.endBlock=null):n.stack.pushAt(l,f.clone(),"sID",E),s}return!1}}),Bn=V(Tn,{constructor:function(t,n,e,r,l){var i=this;i.tt=t||D,i.id=n||null,i.tk=null,i.ts=null,i.min=r||0,i.max=l||o,i.found=0,i.CLONE=["ts","min","max","found"],e&&i.set(e)},ts:null,min:0,max:1,found:0,set:function(t){return t&&(this.ts=J(t)),this},get:function(t,n){var e,r,l,o,i,s,u=this,c=u.ts,a=c.length,f=u.found,p=u.min,h=u.max,g=0;for(u.ERR=0,u.REQ=0,u.MTCH=0,o=t.pos,i=n.stack.pos(),s=u.id+"_"+an(),e=0;a>e;e++){if(r=c[e].clone().req(1),l=r.get(t,n),!1!==l){if(++f,h>=f)return u.found=f,n.stack.pushAt(i,u.clone(),"sID",s),u.found=0,u.MTCH=r.MTCH,l;break}r.REQ&&g++,r.ERR&&t.bck2(o)}return u.REQ=p>f,u.ERR=f>h||p>f&&g>0,!1}}),An=V(Bn,{constructor:function(t,n,e){this.$super("constructor",t,n,e,1,1)},get:function(t,n){var e,r,l,o,i=this,s=i.ts,u=s.length,c=0,a=0;for(i.REQ=1,i.ERR=0,i.MTCH=0,o=t.pos,l=0;u>l;l++){if(r=s[l].clone().req(1),e=r.get(t,n),c+=r.REQ?1:0,!1!==e)return i.MTCH=r.MTCH,e;r.ERR&&(a++,t.bck2(o))}return i.REQ=c>0,i.ERR=u==a&&c>0,!1}}),Dn=V(Bn,{constructor:function(t,n,e){this.$super("constructor",t,n,e,1,1)},get:function(t,n){var e,r,l,o,i,s=this,u=s.ts,c=u.length;if(s.REQ=1,s.ERR=0,s.MTCH=0,l=t.pos,o=n.stack.pos(),e=u[0].clone().req(1),r=e.get(t,n),i=s.id+"_"+an(),!1!==r){if(!0!==r)for(var a=c-1;a>0;a--)n.stack.pushAt(o+c-a-1,u[a].clone().req(1),"sID",i);return s.MTCH=e.MTCH,r}return e.ERR?(s.ERR=1,t.bck2(l)):e.REQ&&(s.ERR=1),!1}}),On=V(Bn,{constructor:function(t,n,e){this.$super("constructor",t,n,e,1,1)},get:function(t,n){var e,r,l,o,i,s,u=this,c=u.ts,a=c.length;if(u.REQ=0,u.ERR=0,u.MTCH=0,l=t.pos,o=n.stack.pos(),e=c[0].clone().req(0),r=e.get(t,n),i=u.id+"_"+an(),!1!==r){if(!0!==r)for(s=a-1;s>0;s--)n.stack.pushAt(o+a-s-1,c[s].clone().req(1),"sID",i);return u.MTCH=e.MTCH,r}return e.ERR&&t.bck2(l),!1}}),Ln=function(t,n,e,r,l,i,s,u,c,f,p){var g,d,m,k,E,v,C,y,R,T,I,H,V,K=null;if(null===t)return new Tn(b,"EOL",t);if(""===t)return new Tn(w,"NONSPACE",t);if(!1===t||0===t)return new Tn(S,"EMPTY",t);if(t=""+t,!u[t]&&(g=e[t]||r[t]||{type:"simple",tokens:t})){for((a|h)&Y(g)&&(g={type:"simple",tokens:g});g.extend;){var q=g.extend,F=e[q]||r[q];delete g.extend,F&&((a|h)&Y(F)&&(F={type:"simple",tokens:F}),g=nn(F,g))}if(d=g.type?$[g.type.toUpperCase().replace("-","").replace("_","")]:_,_&d){if(""===g.tokens)return K=new Tn(w,t,t),u[t]=K,K;if(null===g.tokens)return K=new Tn(b,t,t),u[t]=K,K;if(!1===g.tokens||0===g.tokens)return K=new Tn(S,t,t),u[t]=K,K}if(g.tokens=J(g.tokens),_&d)g.autocomplete&&jn(g,t,p),k=null,g.push?k=["push",g.push]:"undefined"!=typeof g.pop&&(k=["pop",g.pop]),m="undefined"==typeof g.combine?"\\b":g.combine,K=new Tn(_,t,Sn(t,g.tokens.slice(),n,m,i,s)),K.tm=k,u[t]=K;else if(x&d)M&d&&Pn(g,f),K=new Mn(d,t,xn(t,g.tokens.slice(),n,i,s),g.multiline,g.escape,l[t+".inside"]?1:0),u[t]=K,g.interleave&&c.push(K.clone());else if(j&d){for(v=g.tokens.slice(),h&Y(g.match)?K=new Bn(D,t,null,g.match[0],g.match[1]):(E=Q[g.match.toUpperCase()],K=O==E?new Bn(O,t,null,0,1):L==E?new Bn(L,t,null,0,o):P==E?new Bn(P,t,null,1,o):B&E?new An(B,t,null):new Dn(A,t,null)),u[t]=K,C=[],T=0,I=v.length;I>T;T++)C=C.concat(Ln(v[T],n,e,r,l,i,s,u,c,f,p));K.set(C)}else if(N&d){for(K=X(g.tokens.slice()).slice(),y=[],T=0,I=K.length;I>T;T++)y[T]=K[T].slice(),K[T]=new On(N,t+"_NGRAM_"+T,null);for(u[t]=K,T=0,I=K.length;I>T;T++){for(R=y[T],C=[],H=0,V=R.length;V>H;H++)C=C.concat(Ln(R[H],n,e,r,l,i,s,u,c,f,p));K[T].set(C)}}}return u[t]},Pn=function(t,n){var e,r,o,s=X(t.tokens.slice());for(i=0,l=s.length;l>i;i++)e=s[i][0],r=s[i].length>1?s[i][1]:s[i][0],o=s[i].length>2?s[i][2]:"",null===r?(n.line=n.line||[],n.line.push(e)):(n.block=n.block||[],n.block.push([e,r,o]))},jn=function(t,n,e){var r=[].concat(J(t.tokens)).map(function(t){return{word:t,meta:n}});e.autocomplete=concat.apply(e.autocomplete||[],r)},Nn=function(t){var n,e,r,l,o,i,s,u,c,a,f,p,g,d,m,k;if(t.__parsed)return t;for(f={},p={},g={},m={},k={},d=[],t=tn(t),n=t.RegExpID||null,t.RegExpID=null,delete t.RegExpID,i=t.Lex||{},t.Lex=null,delete t.Lex,s=t.Syntax||{},t.Syntax=null,delete t.Syntax,o=t.Style||{},l=t.Parser||[],r=l.length,e=[],u=0;r>u;u++)c=l[u],a=Ln(c,n,i,s,o,f,p,g,d,m,k)||null,a&&(h&Y(a)?e=e.concat(a):e.push(a));return t.Parser=e,t.cTokens=d,t.Style=o,t.Comments=m,t.Keywords=k,t.Extra=t.Extra||{},t.__parsed=1,t},In=CodeMirror||{Pass:{toString:function(){return"CodeMirror.Pass"}}},Hn=V({constructor:function(t,n){var e=this;e.Extra=t.Extra||{},e.LC=t.Comments.line?t.Comments.line[0]:null,e.BCS=t.Comments.block?t.Comments.block[0][0]:null,e.BCE=t.Comments.block?t.Comments.block[0][1]:null,e.BCC=e.BCL=t.Comments.block?t.Comments.block[0][2]:null,e.DEF=n.DEFAULT,e.ERR=t.Style.error||n.ERROR,e.Keywords=t.Keywords.autocomplete||null,e.Tokens=t.Parser||[],e.cTokens=t.cTokens.length?t.cTokens:null,e.Style=t.Style},Extra:null,LC:null,BCS:null,BCE:null,BCL:null,BCC:null,ERR:null,DEF:null,Keywords:null,cTokens:null,Tokens:null,Style:null,parse:function(t){t=t||"";var n,e,r,l,o=t.split(/\r\n|\r|\n/g),i=o.length,s=[];for(r=new yn,r.parseAll=1,n=0;i>n;n++){for(l=new vn(o[n]),e=[];!l.eol();)e.push(this.getToken(l,r));s.push(e)}return s},getToken:function(t,n){var e,r,l,o,i,s,u=this,c=u.cTokens,a=u.Tokens,f=a.length,p=n.parseAll,h=u.Style,g=u.DEF,d=u.ERR;if(i=p?t:(new vn).fromStream(t),s=n.stack,!s.isEmpty()&&b==s.peek().tt&&i.sol()&&s.pop(),(s.isEmpty()||w!=s.peek().tt)&&i.spc())return p?{value:i.cur(1),type:g,error:null}:n.t=g;for(;!s.isEmpty()&&!i.eol();){if(c)for(r=0;r<c.length;)if(l=c[r++],o=l.get(i,n),!1!==o)return o=h[o]||g,p?{value:i.cur(1),type:o,error:null}:n.t=o;if(l=s.pop(),o=l.get(i,n),!1!==o){if(!0!==o)return o=h[o]||g,l.MTCH?(s.empty("sID",l.sID),n.t=o=d,p?{value:i.cur(1),type:d,error:l.err()}:n.t=d):p?{value:i.cur(1),type:o,error:null}:n.t=o}else if(l.ERR||l.REQ)return s.empty("sID",l.sID),i.nxt(),n.t=o=d,p?{value:i.cur(1),type:d,error:l.err()}:n.t=d}for(e=0;f>e;e++)if(l=a[e],o=l.get(i,n),!1!==o){if(!0!==o)return o=h[o]||g,l.MTCH?(s.empty("sID",l.sID),n.t=o=d,p?{value:i.cur(1),type:d,error:l.err()}:n.t=d):p?{value:i.cur(1),type:o,error:null}:n.t=o}else if(l.ERR||l.REQ)return s.empty("sID",l.sID),i.nxt(),n.t=o=d,p?{value:i.cur(1),type:d,error:l.err()}:n.t=d;return i.nxt(),n.t=g,p?{value:i.cur(1),type:g,error:null}:n.t=g},indent:function(t,n,e,r){var l=(r.indentUnit||4,In.Pass);return l}}),Qn=function(t){var n=function(e,r){var l={startState:function(){return new yn},copyState:function(t){return t.clone()},token:function(n,e){return t.getToken(n,e)},indent:function(n,l,o){return t.indent(n,l,o,e,r)},validator:function(e){if(!n.supportGrammarAnnotations)return[];var r,l,o,i,s,u,c,a,f=0,p=e;if(!p||!p.length)return[];for(r=[],l=t.parse(p),u=l.length,c=0;u>c;c++)if(o=l[c],o&&o.length)for(a=0,s=0;s<o.length;s++)i=o[s],t.ERR==i.type&&(r.push({message:i.error||"Syntax Error",severity:"error",from:CodeMirror.Pos(c,a),to:CodeMirror.Pos(c,a+1)}),f=1),a+=i.value.length;return f?r:[]}};return l.lineComment=t.LC,l.blockCommentStart=t.BCS,l.blockCommentEnd=t.BCE,l.blockCommentContinue=t.BCC,l.blockCommentLead=t.BCL,l.electricChars=t.Extra.electricChars||!1,l.fold=t.Extra.fold||!1,l};return n},$n=function(t,n){var l={DEFAULT:n||e,ERROR:r};return t=Nn(t),Qn(new Hn(t,l))};e=null,r="error";var Vn={VERSION:"0.9.1",extend:nn,parse:Nn,getMode:$n};return Vn});
