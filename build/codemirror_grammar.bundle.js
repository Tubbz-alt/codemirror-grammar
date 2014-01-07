/**
*
*   Classy
*   @version: 0.4.4
*
*   Object-Oriented mini-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,t,r,n){r=r?[].concat(r):[];var o,l=r.length,a=new Array(l),i=new Array(l),c=new Array(l);for(o=0;l>o;o++)a[o]=r[o][0],i[o]=r[o][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[t]){for(o=0;l>o;o++)c[o]=module.exports[a[o]]||require(i[o])[a[o]];module.exports[t]=n.apply(e,c)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(i),function(r){if("undefined"==typeof r[t]){for(var o=Array.prototype.slice.call(arguments,1),l=0,i=o.length;i>l;l++)c[l]=r[a[l]];r[t]=n.apply(e,c)}});else if("undefined"==typeof e[t]){for(o=0;l>o;o++)c[o]=e[a[o]];e[t]=n.apply(e,c)}}(this,"Classy",null,function(){var e={};return function(e){var t=function(e,t,r){this.v=e||null,this.prev=t||null,r=r||null};t.prototype={constructor:t,v:null,prev:null,next:null};var r=Array.prototype,n=Object.prototype,o=r.slice,l=(r.splice,r.concat,n.toString),a=n.hasOwnProperty,i=n.propertyIsEnumerable,c=Object.keys,u=Object.defineProperty,f=function(e){return"function"==typeof e},p=function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad desc");var r={};if(a.call(e,"enumerable")&&(r.enumerable=!!t.enumerable),a.call(e,"configurable")&&(r.configurable=!!t.configurable),a.call(e,"value")&&(r.value=t.value),a.call(e,"writable")&&(r.writable=!!e.writable),a.call(e,"get")){var n=e.get;if(!f(n)&&"undefined"!==n)throw new TypeError("bad get");r.get=n}if(a.call(e,"set")){var o=e.set;if(!f(o)&&"undefined"!==o)throw new TypeError("bad set");r.set=o}if(("get"in r||"set"in r)&&("value"in r||"writable"in r))throw new TypeError("identity-confused descriptor");return r},s=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var r=c(t),n=[],o=0;o<r.length;o++)n.push([r[o],p(t[r[o]],e)]);for(var o=0;o<n.length;o++)u(e,n[o][0],n[o][1]);return e},y=Object.create||function(e,t){var r,n=function(){};return n.prototype=e,r=new n,r.__proto__=e,"object"==typeof t&&s(r,t),r},b=function(e){var r=new t(e);return function(e){if(e&&r&&r.v){var n,l=this;if(e="constructor"==e?r.v:r.v.prototype[e])return r=new t(r.v.$super,r),n=e.apply(l,o.call(arguments,1)),r=r.prev,n}}},v=function(){var e,t,r,n,c,u,f,p,s=o.call(arguments);for(t=s.shift()||{},e=s.length,p=0;e>p;p++)if(r=s[p],r&&"object"==typeof r)for(f in r)a.call(r,f)&&i.call(r,f)&&(u=r[f],n=l.call(u),c=typeof u,t[f]="number"==c||u instanceof Number?0+u:u&&("[object Array]"==n||u instanceof Array||"string"==c||u instanceof String)?u.slice(0):u);return t},d=function(e,t){e=e||Object,t=t||{};var r=t.constructor?t.constructor:function(){};return r.prototype=y(e.prototype),r.prototype=v(r.prototype,t),s(r.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0},$class:{value:r,enumerable:!1,writable:!0,configurable:!0},$super:{value:b(e),enumerable:!1,writable:!0,configurable:!0}}),s(r,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:e.$static&&"object"==typeof e.$static?v(null,e.$static):null,enumerable:!1,writable:!0,configurable:!0}}),r},g=Mixin=v,m=function(){var e=o.call(arguments),t=e.length,r=null;if(t>=2){var n=typeof e[0];n="function"==n?{Extends:e[0]}:"object"==n?e[0]:{Extends:Object};var l,a,i=e[1]||{},c=e[2]||null,u={},f=n.Extends||n.extends||Object,p=n.Implements||n.implements,s=n.Mixin||n.mixin;if(p=p?[].concat(p):null,s=s?[].concat(s):null)for(l=0,a=s.length;a>l;l++)s[l].prototype&&(u=Mixin(u,s[l].prototype));if(p)for(l=0,a=p.length;a>l;l++)p[l].prototype&&(u=g(u,p[l].prototype));r=d(f,v(u,i)),c&&"object"==typeof c&&(r.$static=v(r.$static,c))}else r=d(Object,e[0]);return r};e.Classy={VERSION:"0.4.4",Class:m,Extends:d,Implements:g,Mixin:Mixin,Create:y,Merge:v}}(e),e.Classy});
/**
*
*   RegExAnalyzer
*   @version: 0.2.5
*
*   A simple Regular Expression Analyzer in JavaScript
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r,a){r=r?[].concat(r):[];var p,s=r.length,h=new Array(s),n=new Array(s),i=new Array(s);for(p=0;s>p;p++)h[p]=r[p][0],n[p]=r[p][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[e]){for(p=0;s>p;p++)i[p]=module.exports[h[p]]||require(n[p])[h[p]];module.exports[e]=a.apply(t,i)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(n),function(r){if("undefined"==typeof r[e]){for(var p=Array.prototype.slice.call(arguments,1),s=0,n=p.length;n>s;s++)i[s]=r[h[s]];r[e]=a.apply(t,i)}});else if("undefined"==typeof t[e]){for(p=0;s>p;p++)i[p]=t[h[p]];t[e]=a.apply(t,i)}}(this,"RegExAnalyzer",null,function(){var t={};return function(t){var e="\\",r=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,a=/^u([0-9a-fA-F]{4})/,p=/^x([0-9a-fA-F]{2})/,s={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},h={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},n=Object.prototype.toString,i=function(t,e){if(e&&(e instanceof Array||"[object Array]"==n.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},g=function(t,e){t&&(t instanceof Array||"[object Array]"==n.call(t))&&(e=t[1],t=t[0]);var r,a,p=t.charCodeAt(0),s=e.charCodeAt(0);if(s==p)return[String.fromCharCode(p)];for(a=[],r=p;s>=r;++r)a.push(String.fromCharCode(r));return a},o=function(t){var e,r,a,p,s,h,n={},l={};if("Alternation"==t.type)for(a=0,p=t.part.length;p>a;a++)s=o(t.part[a]),n=i(n,s.peek),l=i(l,s.negativepeek);else if("Group"==t.type)s=o(t.part),n=i(n,s.peek),l=i(l,s.negativepeek);else if("Sequence"==t.type){for(a=0,p=t.part.length,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)s=o(r.part),n=i(n,s.peek),l=i(l,s.negativepeek),a++,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;p>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(s=o(r),n=i(n,s.peek),l=i(l,s.negativepeek)))}else if("CharGroup"==t.type)for(e=t.flags.NotMatch?l:n,a=0,p=t.part.length;p>a;a++)r=t.part[a],"Chars"==r.type?e=i(e,r.part):"CharRange"==r.type?e=i(e,g(r.part)):"UnicodeChar"==r.type||"HexChar"==r.type?e[r.flags.Char]=1:"Special"==r.type&&("D"==r.part?t.flags.NotMatch?n["\\d"]=1:l["\\d"]=1:"W"==r.part?t.flags.NotMatch?n["\\w"]=1:l["\\W"]=1:"S"==r.part?t.flags.NotMatch?n["\\s"]=1:l["\\s"]=1:e["\\"+r.part]=1);else"String"==t.type?n[t.part.charAt(0)]=1:"Special"!=t.type||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==t.type||"HexChar"==t.type)&&(n[t.flags.Char]=1):"D"==t.part?l["\\d"]=1:"W"==t.part?l["\\W"]=1:"S"==t.part?l["\\s"]=1:n["\\"+t.part]=1;return{peek:n,negativepeek:l}},l=function(t,e){t&&this.setRegex(t,e)};l.VERSION="0.2.5",l.getCharRange=g,l.prototype={constructor:l,VERSION:l.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:l.getCharRange,getPeekChars:function(){var t,e,r,a,p=this.flags&&this.flags.i,h=o(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=i(a,g("0","9"))):"\\s"==e?(delete r[e],a=i(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=i(a,["_"].concat(g("0","9")).concat(g("a","z")).concat(g("A","Z")))):"\\."==e?(delete r[e],a[s["."]]=1):"\\"!=e.charAt(0)&&p?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=i(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,p=r.charAt(a-1);e!=p;)this.flags[p]=1,r=r.substr(0,a-1),a=r.length,p=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var t,n,i,g="",o=[],l=[],u=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)t=this.regex.charAt(this.pos++),u=e==t?!0:!1,u&&(t=this.regex.charAt(this.pos++)),u?"u"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):h[t]&&"/"!=t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[h[t]]=1,l.push({part:t,flags:n,type:"Special"})):g+=t:"|"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==t||"+"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[t]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[t]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):s[t]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[t]]=1,l.push({part:t,flags:n,type:"Special"})):g+=t;return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[s["|"]]=1,this.parts={part:o,flags:n,type:"Alternation"}):this.parts={part:l,flags:{},type:"Sequence"},this},subgroup:function(){var t,n,i,g="",o=[],l=[],u={},f=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(u.NotCaptured=1,this.pos+=2):"?="==c?(u.LookAhead=1,this.pos+=2):"?!"==c&&(u.NegativeLookAhead=1,this.pos+=2),u.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(t=this.regex.charAt(this.pos++),f=e==t?!0:!1,f&&(t=this.regex.charAt(this.pos++)),f)"u"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):h[t]&&"/"!=t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[h[t]]=1,l.push({part:t,flags:n,type:"Special"})):g+=t;else{if(")"==t)return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[s["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"};"|"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==t||"+"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[t]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==t?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[t]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):s[t]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[t]]=1,l.push({part:t,flags:n,type:"Special"})):g+=t}return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[s["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"}},chargroup:function(){var t,r,s,n,i,g,o=[],l=[],u={},f=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(u.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(g=!1,s=r,r=this.regex.charAt(this.pos++),c=e==r?!0:!1,c&&(r=this.regex.charAt(this.pos++)),c&&("u"==r?(i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,r=String.fromCharCode(parseInt(i[1],16)),g=!0):"x"==r&&(i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,r=String.fromCharCode(parseInt(i[1],16)),g=!0)),f)l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),n[1]=r,f=!1,o.push({part:n,flags:{},type:"CharRange"});else if(c)!g&&h[r]&&"/"!=r?(l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),t={},t[h[r]]=1,o.push({part:r,flags:t,type:"Special"})):l.push(r);else{if("]"==r)return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"};"-"==r?(n=[s,""],l.pop(),f=!0):l.push(r)}return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"}}},t.RegExAnalyzer=l}(t),t.RegExAnalyzer});
/**
*
*   CodeMirrorGrammar
*   @version: 0.6.4
*
*   Transform a grammar specification in JSON format, into a syntax-highlight parser mode for CodeMirror
*   https://github.com/foo123/codemirror-grammar
*
**/!function(t,n,e,r){e=e?[].concat(e):[];var i,s=e.length,l=new Array(s),o=new Array(s),u=new Array(s);for(i=0;s>i;i++)l[i]=e[i][0],o[i]=e[i][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[n]){for(i=0;s>i;i++)u[i]=module.exports[l[i]]||require(o[i])[l[i]];module.exports[n]=r.apply(t,u)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(o),function(e){if("undefined"==typeof e[n]){for(var i=Array.prototype.slice.call(arguments,1),s=0,o=i.length;o>s;s++)u[s]=e[l[s]];e[n]=r.apply(t,u)}});else if("undefined"==typeof t[n]){for(i=0;s>i;i++)u[i]=t[l[i]];t[n]=r.apply(t,u)}}(this,"CodeMirrorGrammar",[["Classy","./classy"],["RegExAnalyzer","./regexanalyzer"]],function(t,n){var e,r,s=1/0,o=2,u=4,h=8,c=9,a=10,f=16,p=32,g=64,k=128,m=256,d=512,R=2,C=4,E=8,v=4,y=8,b=16,w=17,_=32,x=33,B=34,S=64,O=2048,A=128,q=256,L=257,T=258,M=259,P=512,j=1024,$={ONEOF:S,EITHER:S,NONEOF:O,ALL:A,ZEROORONE:L,ZEROORMORE:T,ONEORMORE:M,REPEATED:q},D={BLOCK:_,COMMENT:B,ESCAPEDBLOCK:x,SIMPLE:b,GROUP:P,NGRAM:j},N={RegExpID:null,Style:null,Lex:null,Syntax:null,Parser:null},I=t.Class,K=Array.prototype,F=Object.prototype,G=K.slice,U=(K.splice,K.concat),z=F.hasOwnProperty,Z=F.toString,H=F.propertyIsEnumerable,V=Object.keys,J=function(t){var n=typeof t,e=Z.call(t);return"undefined"==n?m:"number"==n||t instanceof Number?o:null===t?k:!0===t||!1===t?u:t&&("string"==n||t instanceof String)?1==t.length?c:h:t&&("[object RegExp]"==e||t instanceof RegExp)?f:t&&("[object Array]"==e||t instanceof Array)?p:t&&"[object Object]"==e?g:d},Q=function(t,n){return n||p!=J(t)?[t]:t},W=function(t,n){return t=Q(t,n),(n||p!=J(t[0]))&&(t=[t]),t},X=function(t){var n,e=J(t);if(!((g|p)&e))return t;var r,i={};for(r in t)z.call(t,r)&&H.call(t,r)&&(n=J(t[r]),i[r]=g&n?X(t[r]):p&n?t[r].slice():t[r]);return i},Y=function(){var t=G.call(arguments),n=t.length;if(1>n)return null;if(2>n)return X(t[0]);var e,r,i,s,l=t.shift(),o=X(l);for(n--,r=0;n>r;r++)if(e=t.shift())for(i in e)z.call(e,i)&&H.call(e,i)&&(z.call(l,i)&&H.call(l,i)?(s=J(l[i]),g&~h&s&&(o[i]=Y(l[i],e[i]))):o[i]=X(e[i]));return o},tn=function(t){return t.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},nn=function(t,n){var e,r,i,s;for(s=function(t,e){return n[1+parseInt(e,10)]},e=t.split("$$"),i=e.length,r=0;i>r;r++)e[r]=e[r].replace(/\$(\d{1,2})/g,s);return e.join("$")},en=function(t,n){return n.length-t.length},rn=function(t,n){return h&J(n)&&h&J(t)&&n.length&&n.length<=t.length&&n==t.substr(0,n.length)},sn=function(t,e,r){if(!t||o==J(t))return t;var i=e?e.length||0:0;if(i&&e==t.substr(0,i)){var s,l,u,h="^("+t.substr(i)+")";return r[h]||(s=new RegExp(h),u=new n(s).analyze(),l=u.getPeekChars(),V(l.peek).length||(l.peek=null),V(l.negativepeek).length||(l.negativepeek=null),r[h]=[s,l]),r[h]}return t},ln=function(t,n){var e={},r="",i=J(n);(h==i||c==i)&&(r=n);var s=t.sort(en).map(function(t){return e[t.charAt(0)]=1,tn(t)}).join("|");return[new RegExp("^("+s+")"+r),{peek:e,negativepeek:null},1]},on=I({constructor:function(t){this.string=t?""+t:"",this.start=this.pos=0,this._=null},_:null,string:"",start:0,pos:0,fromStream:function(t){return this._=t,this.string=""+t.string,this.start=t.start,this.pos=t.pos,this},toString:function(){return this.string},sol:function(){return 0==this.pos},eol:function(){return this.pos>=this.string.length},chr:function(t,n){var e=this.string.charAt(this.pos)||null;return e&&t==e?(!1!==n&&(this.pos+=1,this._&&(this._.pos=this.pos)),e):!1},chl:function(t,n){var e=this.string.charAt(this.pos)||null;return e&&-1<t.indexOf(e)?(!1!==n&&(this.pos+=1,this._&&(this._.pos=this.pos)),e):!1},str:function(t,n,e){var r=this.pos,i=this.string,s=i.charAt(r)||null;if(s&&n[s]){var l=t.length,o=i.substr(r,l);if(t==o)return!1!==e&&(this.pos+=l,this._&&(this._.pos=this.pos)),o}return!1},rex:function(t,n,e,r,i){var s=this.pos,l=this.string,o=l.charAt(s)||null;if(o&&n&&n[o]||e&&!e[o]){var u=l.slice(s).match(t);return!u||u.index>0?!1:(!1!==i&&(this.pos+=u[r||0].length,this._&&(this._.pos=this.pos)),u)}return!1},end:function(){return this.pos=this.string.length,this._&&(this._.pos=this.pos),this},nxt:function(){if(this.pos<this.string.length){var t=this.string.charAt(this.pos++)||null;return this._&&(this._.pos=this.pos),t}},bck:function(t){return this.pos-=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},bck2:function(t){return this.pos=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},spc:function(){for(var t=this.pos,n=this.pos,e=this.string;/[\s\u00a0]/.test(e.charAt(n));)++n;return this.pos=n,this._&&(this._.pos=this.pos),this.pos>t},cur:function(){return this.string.slice(this.start,this.pos)},sft:function(){return this.start=this.pos,this}}),un=I({constructor:function(t){this.l=t||0,this.stack=[],this.t=y,this.r="0",this.inBlock=null,this.endBlock=null},l:0,stack:null,t:null,r:null,inBlock:null,endBlock:null,clone:function(){var t=new this.$class(this.l);return t.t=this.t,t.r=this.r,t.stack=this.stack.slice(),t.inBlock=this.inBlock,t.endBlock=this.endBlock,t},toString:function(){return["",this.l,this.t,this.r,this.inBlock||"0"].join("_")}}),hn=I({constructor:function(t,n,e,r){switch(this.type=R,this.tt=t||c,this.tn=n,this.tk=r||0,this.tg=0,this.tp=null,this.p=null,this.np=null,this.tt){case c:case a:this.tp=e;break;case h:this.tp=e,this.p={},this.p[""+e.charAt(0)]=1;break;case f:this.tp=e[0],this.p=e[1].peek||null,this.np=e[1].negativepeek||null,this.tg=e[2]||0;break;case k:this.tp=null}},type:null,tt:null,tn:null,tp:null,tg:0,tk:0,p:null,np:null,get:function(t,n){var e,r=this.tt,i=this.tk,s=this.tp,l=this.tg,o=this.p,u=this.np;switch(r){case c:if(e=t.chr(s,n))return[i,e];break;case a:if(e=t.chl(s,n))return[i,e];break;case h:if(e=t.str(s,o,n))return[i,e];break;case f:if(e=t.rex(s,o,u,l,n))return[i,e];break;case k:return!1!==n&&t.end(),[i,""]}return!1},toString:function(){return["[","Matcher: ",this.tn,", Pattern: ",this.tp?this.tp.toString():null,"]"].join("")}}),cn=I(hn,{constructor:function(t,n,e){this.type=C,this.tn=t,this.ms=n,this.ownKey=!1!==e},ms:null,ownKey:!0,get:function(t,n){var e,r,i=this.ms,s=i.length,l=this.ownKey;for(e=0;s>e;e++)if(r=i[e].get(t,n))return l?[e,r[1]]:r;return!1}}),an=I(hn,{constructor:function(t,n,e){this.type=E,this.tn=t,this.s=new cn(this.tn+"_Start",n,!1),this.e=e},s:null,e:null,get:function(t,n){var e,r=this.s,i=this.e;if(e=r.get(t,n)){var s=i[e[0]],l=J(s);return o==l?s=new hn(h,this.tn+"_End",e[1][s+1]):h==l&&(s=new hn(h,this.tn+"_End",nn(s,e[1]))),s}return!1}}),fn=function(t,n,e,r){var i=J(n);if(o==i)return n;if(!r[t]){e=e||0;var s,l=0;n&&n.isCharList&&(l=1,delete n.isCharList),s=k&i?new hn(k,t,n,e):c==i?new hn(c,t,n,e):h&i?l?new hn(a,t,n,e):new hn(h,t,n,e):p&i?new hn(f,t,n,e):n,r[t]=s}return r[t]},pn=function(t,n,e,r,i,s){if(!s[t]){var l,o,u,a,f,g,k,m=0,d=0,R=1;if(l=Q(n),u=l.length,1==u)k=fn(t,sn(l[0],e,i),0,s);else if(u>1){for(a=(u>>1)+1,o=0;a>=o;o++)f=J(l[o]),g=J(l[u-1-o]),(c!=f||c!=g)&&(R=0),p&f||p&g?m=1:(rn(l[o],e)||rn(l[u-1-o],e))&&(d=1);if(!R||r&&h&J(r))if(!r||m||d){for(o=0;u>o;o++)l[o]=p&J(l[o])?pn(t+"_"+o,l[o],e,r,i,s):fn(t+"_"+o,sn(l[o],e,i),o,s);k=u>1?new cn(t,l):l[0]}else k=fn(t,ln(l,r),0,s);else l=l.slice().join(""),l.isCharList=1,k=fn(t,l,0,s)}s[t]=k}return s[t]},gn=function(t,n,e,r,i){if(!i[t]){var s,l,o,u,h,c,a;for(u=[],h=[],s=W(n),l=0,o=s.length;o>l;l++)c=fn(t+"_0_"+l,sn(s[l][0],e,r),l,i),a=s[l].length>1?rn(s[l][1],e)?fn(t+"_1_"+l,sn(s[l][1],e,r),l,i):s[l][1]:c,u.push(c),h.push(a);i[t]=new an(t,u,h)}return i[t]},kn=I({constructor:function(t,n,e){this.tt=null===n?w:b,this.tn=t,this.t=n,this.r=e,this.required=0,this.ERR=0,this.toClone=["t","r"]},tn:null,tt:null,t:null,r:null,required:0,ERR:0,toClone:null,get:function(t,n){var e=this.t;if(null===e){if(t.spc(),t.eol())return n.t=y,this.r}else if(e.get(t))return n.t=this.tt,this.r;return!1},require:function(t){return this.required=t?1:0,this},push:function(t,n,e){return n?t.splice(n,0,e):t.push(e),this},clone:function(){var t,n,e=this.toClone;if(t=new this.$class,t.tt=this.tt,t.tn=this.tn,e&&e.length){n=e.length;for(var r=0;n>r;r++)t[e[r]]=this[e[r]]}return t},toString:function(){return["[","Tokenizer: ",this.tn,", Matcher: ",this.t?this.t.toString():null,"]"].join("")}}),mn=I(kn,{constructor:function(t,n,e,r,i,s){this.$super("constructor",n,e,r),this.tt=t,this.mline="undefined"==typeof i?1:i,this.esc=s||"\\",this.toClone=["t","r","mline","esc"]},mline:0,esc:null,get:function(t,n){var e,r,i,s=0,l=0,o="",u=this.mline,h=this.t,c=this.tn,a=0,f=x==this.tt,p=this.esc;if(B==this.tt&&(this.required=0),n.inBlock==c?(l=1,e=n.endBlock):!n.inBlock&&(e=h.get(t))&&(l=1,n.inBlock=c,n.endBlock=e),l){if(i=n.stack.length,s=e.get(t),r=u,!s)for(;!t.eol();){if(!(f&&a||!e.get(t))){s=1;break}o=t.nxt(),a=!a&&o==p}return r=u||f&&a,s||!r?(n.inBlock=null,n.endBlock=null):this.push(n.stack,i,this),n.t=this.tt,this.r}return!1}}),dn=I(kn,{constructor:function(t,n,e,r){this.tt=q,this.tn=t||null,this.t=null,this.ts=null,this.min=e||0,this.max=r||s,this.found=0,this.toClone=["ts","min","max","found"],n&&this.set(n)},ts:null,min:0,max:1,found:0,set:function(t){return t&&(this.ts=Q(t)),this},get:function(t,n){var e,r,i,s,l,o=this.ts,u=o.length,h=this.found,c=this.min,a=this.max,f=0;for(this.ERR=0,this.required=0,s=t.pos,l=n.stack.length,e=0;u>e;e++){if(r=o[e].clone().require(1),i=r.get(t,n),!1!==i){if(++h,a>=h)return this.found=h,this.push(n.stack,l,this.clone()),this.found=0,i;break}r.required&&f++,r.ERR&&t.bck2(s)}return this.required=c>h,this.ERR=h>a||c>h&&f>0,!1}}),Rn=I(dn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=S},get:function(t,n){var e,r,i,s,l=this.ts,o=l.length,u=0,h=0;for(this.required=1,this.ERR=0,s=t.pos,i=0;o>i;i++){if(r=l[i].clone(),e=r.get(t,n),u+=r.required?1:0,!1!==e)return e;r.ERR&&(h++,t.bck2(s))}return this.required=u>0,this.ERR=o==h&&u>0,!1}}),Cn=I(dn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=A},get:function(t,n){var e,r,i,s,l=this.ts,o=l.length;if(this.required=1,this.ERR=0,i=t.pos,e=l[0].clone().require(1),r=e.get(t,n),!1!==r){s=n.stack.length;for(var u=o-1;u>0;u--)this.push(n.stack,s+o-u,l[u].clone().require(1));return r}return e.ERR?(this.ERR=1,t.bck2(i)):e.required&&(this.ERR=1),!1}}),En=I(dn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=j},get:function(t,n){var e,r,i,s,l=this.ts,o=l.length;if(this.required=0,this.ERR=0,i=t.pos,e=l[0].clone().require(0),r=e.get(t,n),!1!==r){s=n.stack.length;for(var u=o-1;u>0;u--)this.push(n.stack,s+o-u,l[u].clone().require(1));return r}return e.ERR&&t.bck2(i),!1}}),vn=function(t,n,r,i,l,o,u,c,a,f,g){if(null===t){var k=new kn(t,t,e);c[t]=k}else if(t=""+t,!c[t]){var m,d,R,C,E,v,k=null;if(m=r[t]||i[t]||{type:"simple",tokens:t})if((h|p)&J(m)&&(m={type:"simple",tokens:m}),d=m.type?D[m.type.toUpperCase().replace("-","").replace("_","")]:b,m.tokens=Q(m.tokens),C=m.action||null,b&d)m.autocomplete&&bn(m,t,g),R="undefined"==typeof m.combine?"\\b":m.combine,k=new kn(t,pn(t,m.tokens.slice(),n,R,o,u),l[t]||e),c[t]=k;else if(_&d)B&d&&yn(m,f),k=new mn(d,t,gn(t,m.tokens.slice(),n,o,u),l[t]||e,m.multiline,m.escape),c[t]=k,m.interleave&&a.push(k.clone());else if(P&d){v=m.tokens.slice(),p&J(m.match)?k=new dn(t,null,m.match[0],m.match[1]):(E=$[m.match.toUpperCase()],k=L==E?new dn(t,null,0,1):T==E?new dn(t,null,0,s):M==E?new dn(t,null,1,s):S&E?new Rn(t,null):O&E?new NoneTokens(t,null):new Cn(t,null)),c[t]=k;for(var y=0,w=v.length;w>y;y++)v[y]=vn(v[y],n,r,i,l,o,u,c,a,f,g);k.set(v)}else if(j&d){k=W(m.tokens.slice()).slice();for(var x,A=[],y=0,w=k.length;w>y;y++)A[y]=k[y].slice(),k[y]=new En(t+"_NGRAM_"+y,null);c[t]=k;for(var y=0,w=k.length;w>y;y++){x=A[y];for(var q=0,N=x.length;N>q;q++)x[q]=vn(x[q],n,r,i,l,o,u,c,a,f,g);k[y].set(x)}}}return c[t]},yn=function(t,n){var e,r,s,o=W(t.tokens.slice());for(i=0,l=o.length;l>i;i++)e=o[i][0],r=o[i].length>1?o[i][1]:o[i][0],s=o[i].length>2?o[i][2]:"",null===r?(n.line=n.line||[],n.line.push(e)):(n.block=n.block||[],n.block.push([e,r,s]))},bn=function(t,n,e){var r=[].concat(Q(t.tokens)).map(function(t){return{word:t,meta:n}});e.autocomplete=U.apply(e.autocomplete||[],r)},wn=function(t){var n,e,r,i,s,l,o,u,h,c,a,f,g,k,m,d;if(t.__parsed)return t;for(a={},f={},g={},m={},d={},k=[],t=Y(t,N),n=t.RegExpID||null,t.RegExpID=null,delete t.RegExpID,l=t.Lex||{},t.Lex=null,delete t.Lex,o=t.Syntax||{},t.Syntax=null,delete t.Syntax,s=t.Style||{},i=t.Parser||[],r=i.length,e=[],u=0;r>u;u++)h=i[u],c=vn(h,n,l,o,s,a,f,g,k,m,d)||null,c&&(p&J(c)?e=e.concat(c):e.push(c));return t.Parser=e,t.cTokens=k,t.Style=s,t.Comments=m,t.Keywords=d,t.__parsed=1,t},_n=CodeMirror||{Pass:{toString:function(){return"CodeMirror.Pass"}}},xn=I({constructor:function(t,n){this.electricChars=t.electricChars||!1,this.LC=t.Comments.line?t.Comments.line[0]:null,this.BCS=t.Comments.block?t.Comments.block[0][0]:null,this.BCE=t.Comments.block?t.Comments.block[0][1]:null,this.BCC=this.BCL=t.Comments.block?t.Comments.block[0][2]:null,this.DEF=n.DEFAULT,this.ERR=t.Style.error||n.ERROR,this.Keywords=t.Keywords.autocomplete||null,this.Tokens=t.Parser||[],this.cTokens=t.cTokens.length?t.cTokens:null},conf:null,parserConf:null,electricChars:!1,LC:null,BCS:null,BCE:null,BCL:null,BCC:null,ERR:null,DEF:null,Keywords:null,cTokens:null,Tokens:null,getToken:function(t,n){var e,r,i,s,l,o,u=this.cTokens,h=this.Tokens,c=h.length,a=this.DEF,f=this.ERR;if(o=n.stack,l=(new on).fromStream(t),l.sol()&&o.length&&w==o[o.length-1].tt&&o.pop(),l.spc())return n.t=y,n.r=a;for(;o.length;){if(u)for(r=0;r<u.length;)if(i=u[r++],s=i.get(l,n),!1!==s)return n.r=s;if(i=o.pop(),s=i.get(l,n),!1!==s)return n.r=s;if(i.ERR||i.required)return o.length=0,l.nxt(),n.t=v,n.r=f}for(e=0;c>e;e++){if(i=h[e],s=i.get(l,n),!1!==s)return n.r=s;if(i.ERR||i.required)return o.length=0,l.nxt(),n.t=v,n.r=f}return l.nxt(),n.t=y,n.r=a},indent:function(){return _n.Pass}}),Bn=function(t,n){return new xn(t,n)},Sn=function(t){return function(n,e){return t.conf=n,t.parserConf=e,{startState:function(){return new un},electricChars:t.electricChars,lineComment:t.LC,blockCommentStart:t.BCS,blockCommentEnd:t.BCE,blockCommentContinue:t.BCC,blockCommentLead:t.BCL,copyState:function(t){return t.clone()},token:function(n,e){return t.getToken(n,e)},indent:function(n,e,r){return t.indent(n,e,r)}}}},On=function(t,n){var i={DEFAULT:n||e,ERROR:r};return t=wn(t),Sn(Bn(t,i))};return e=null,r="error",CodeMirrorGrammar={VERSION:"0.6.4",extend:Y,parse:wn,getMode:On}});
