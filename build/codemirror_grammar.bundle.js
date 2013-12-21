/**
*
*   classy.js
*   Object-Oriented mini-framework for JavaScript
*   @version: 0.3
*
*   https://github.com/foo123/classy.js
*
**/!function(t,e,o,r){o=o?[].concat(o):[];var n,p=o.length,i=new Array(p),c=new Array(p),s=new Array(p);for(n=0;p>n;n++)i[n]=o[n][0],c[n]=o[n][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[e]){for(n=0;p>n;n++)s[n]=module.exports[i[n]]||require(c[n])[i[n]];module.exports[e]=r.apply(t,s)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(c),function(o){if("undefined"==typeof o[e]){for(var n=Array.prototype.slice.call(arguments,1),p=0,c=n.length;c>p;p++)s[p]=o[i[p]];o[e]=r.apply(t,s)}});else if("undefined"==typeof t[e]){for(n=0;p>n;n++)s[n]=t[i[n]];t[e]=r.apply(t,s)}}(this,"Classy",null,function(){var t=Array.prototype.slice,e=(Array.prototype.splice,Array.prototype.concat,Object.prototype.hasOwnProperty),o=Object.defineProperties,r=Object.prototype.toString,n=Object.create||function(t,e){var r,n=function(){};return n.prototype=t,r=new n,r.__proto__=t,o&&"undefined"!=typeof e&&o(r,e),r},p=function(e){return e&&this.$class&&this.$class.$super&&(e="constructor"==e?this.$class.$super:this.$class.$super.prototype[""+e])?e.apply(this,t.call(arguments,1)||[]):void 0},i=function(){var o,n,p,i,c,s,a,l,f=t.call(arguments);for(n=f.shift()||{},o=f.length,l=0;o>l;l++)if(p=f[l],p&&"object"==typeof p)for(a in p)e.call(p,a)&&(s=p[a],i=r.call(s),c=typeof s,n[a]="number"==c||s instanceof Number?0+s:s&&("[object Array]"==i||s instanceof Array||"string"==c||s instanceof String)?s.slice(0):s);return n},c=function(t,e){t=t||Object,e=e||{};var o=e.constructor?e.constructor:function(){};return o.prototype=n(t.prototype),o.prototype=i(o.prototype,e),o.prototype.constructor=o.prototype.$class=o,o.prototype.$super=p,o.$super=t,o.$static="object"==typeof t.$static?i({},t.$static):{},o},s=Mixin=i,a=function(){var e=t.call(arguments),o=e.length,r=null;if(o>=2){var n,p,a="object"==typeof e[0]?e[0]:{},l=e[1]||{},f=e[2]||null,u={},y=a.Extends||a.extends||Object,d=a.Implements||a.implements,m=a.Mixin||a.mixin;if(d=d?[].concat(d):null,m=m?[].concat(m):null)for(n=0,p=m.length;p>n;n++)m[n].prototype&&(u=Mixin(u,m[n].prototype));if(d)for(n=0,p=d.length;p>n;n++)d[n].prototype&&(u=s(u,d[n].prototype));r=c(y,i(u,l)),f&&"object"==typeof f&&(r.$static=i(r.$static,f))}else r=c(Object,e[0]);return r};return{VERSION:"0.3",Class:a,Extends:c,Implements:s,Mixin:Mixin,Create:n,Merge:i}});/**
*
*   A simple Regular Expression Analyzer
*   @version 0.2.4
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r,a){r=r?[].concat(r):[];var p,s=r.length,h=new Array(s),n=new Array(s),i=new Array(s);for(p=0;s>p;p++)h[p]=r[p][0],n[p]=r[p][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[e]){for(p=0;s>p;p++)i[p]=module.exports[h[p]]||require(n[p])[h[p]];module.exports[e]=a.apply(t,i)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(n),function(r){if("undefined"==typeof r[e]){for(var p=Array.prototype.slice.call(arguments,1),s=0,n=p.length;n>s;s++)i[s]=r[h[s]];r[e]=a.apply(t,i)}});else if("undefined"==typeof t[e]){for(p=0;s>p;p++)i[p]=t[h[p]];t[e]=a.apply(t,i)}}(this,"RegExAnalyzer",null,function(){var t="\\",e=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,r=/^u([0-9a-fA-F]{4})/,a=/^x([0-9a-fA-F]{2})/,p={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},s={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},h=Object.prototype.toString,n=function(t,e){if(e&&(e instanceof Array||"[object Array]"==h.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},i=function(t,e){t&&(t instanceof Array||"[object Array]"==h.call(t))&&(e=t[1],t=t[0]);var r,a,p=t.charCodeAt(0),s=e.charCodeAt(0);if(s==p)return[String.fromCharCode(p)];for(a=[],r=p;s>=r;++r)a.push(String.fromCharCode(r));return a},g=function(t){var e,r,a,p,s,h,o={},l={};if("Alternation"==t.type)for(a=0,p=t.part.length;p>a;a++)s=g(t.part[a]),o=n(o,s.peek),l=n(l,s.negativepeek);else if("Group"==t.type)s=g(t.part),o=n(o,s.peek),l=n(l,s.negativepeek);else if("Sequence"==t.type){for(a=0,p=t.part.length,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)s=g(r.part),o=n(o,s.peek),l=n(l,s.negativepeek),a++,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;p>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(s=g(r),o=n(o,s.peek),l=n(l,s.negativepeek)))}else if("CharGroup"==t.type)for(e=t.flags.NotMatch?l:o,a=0,p=t.part.length;p>a;a++)r=t.part[a],"Chars"==r.type?e=n(e,r.part):"CharRange"==r.type?e=n(e,i(r.part)):"UnicodeChar"==r.type||"HexChar"==r.type?e[r.flags.Char]=1:"Special"==r.type&&("D"==r.part?t.flags.NotMatch?o["\\d"]=1:l["\\d"]=1:"W"==r.part?t.flags.NotMatch?o["\\w"]=1:l["\\W"]=1:"S"==r.part?t.flags.NotMatch?o["\\s"]=1:l["\\s"]=1:e["\\"+r.part]=1);else"String"==t.type?o[t.part.charAt(0)]=1:"Special"!=t.type||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==t.type||"HexChar"==t.type)&&(o[t.flags.Char]=1):"D"==t.part?l["\\d"]=1:"W"==t.part?l["\\W"]=1:"S"==t.part?l["\\s"]=1:o["\\"+t.part]=1;return{peek:o,negativepeek:l}},o=function(t,e){t&&this.setRegex(t,e)};return o.VERSION="0.2.4",o.getCharRange=i,o.prototype={constructor:o,VERSION:o.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:o.getCharRange,getPeekChars:function(){var t,e,r,a,s=this.flags&&this.flags.i,h=g(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=n(a,i("0","9"))):"\\s"==e?(delete r[e],a=n(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=n(a,["_"].concat(i("0","9")).concat(i("a","z")).concat(i("A","Z")))):"\\."==e?(delete r[e],a[p["."]]=1):"\\"!=e.charAt(0)&&s?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=n(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,p=r.charAt(a-1);e!=p;)this.flags[p]=1,r=r.substr(0,a-1),a=r.length,p=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var h,n,i,g="",o=[],l=[],u=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)h=this.regex.charAt(this.pos++),u=t==h?!0:!1,u&&(h=this.regex.charAt(this.pos++)),u?"u"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):s[h]&&"/"!=h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h:"|"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=e.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==h||"+"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):p[h]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h;return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,this.parts={part:o,flags:n,type:"Alternation"}):this.parts={part:l,flags:{},type:"Sequence"},this},subgroup:function(){var h,n,i,g="",o=[],l=[],u={},f=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(u.NotCaptured=1,this.pos+=2):"?="==c?(u.LookAhead=1,this.pos+=2):"?!"==c&&(u.NegativeLookAhead=1,this.pos+=2),u.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(h=this.regex.charAt(this.pos++),f=t==h?!0:!1,f&&(h=this.regex.charAt(this.pos++)),f)"u"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):s[h]&&"/"!=h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h;else{if(")"==h)return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"};"|"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=e.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==h||"+"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):p[h]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h}return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"}},chargroup:function(){var e,p,h,n,i,g,o=[],l=[],u={},f=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(u.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(g=!1,h=p,p=this.regex.charAt(this.pos++),c=t==p?!0:!1,c&&(p=this.regex.charAt(this.pos++)),c&&("u"==p?(i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,p=String.fromCharCode(parseInt(i[1],16)),g=!0):"x"==p&&(i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,p=String.fromCharCode(parseInt(i[1],16)),g=!0)),f)l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),n[1]=p,f=!1,o.push({part:n,flags:{},type:"CharRange"});else if(c)!g&&s[p]&&"/"!=p?(l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),e={},e[s[p]]=1,o.push({part:p,flags:e,type:"Special"})):l.push(p);else{if("]"==p)return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"};"-"==p?(n=[h,""],l.pop(),f=!0):l.push(p)}return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"}}},o});/**
*
*   CodeMirrorGrammar
*   @version: 0.5.1
*   Transform a grammar specification in JSON format,
*   into a CodeMirror syntax-highlight parser mode
*
*   https://github.com/foo123/codemirror-grammar
*
**/!function(t,e,n,s){n=n?[].concat(n):[];var i,r=n.length,o=new Array(r),h=new Array(r),l=new Array(r);for(i=0;r>i;i++)o[i]=n[i][0],h[i]=n[i][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[e]){for(i=0;r>i;i++)l[i]=module.exports[o[i]]||require(h[i])[o[i]];module.exports[e]=s.apply(t,l)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(h),function(n){if("undefined"==typeof n[e]){for(var i=Array.prototype.slice.call(arguments,1),r=0,h=i.length;h>r;r++)l[r]=n[o[r]];n[e]=s.apply(t,l)}});else if("undefined"==typeof t[e]){for(i=0;r>i;i++)l[i]=t[o[i]];t[e]=s.apply(t,l)}}(this,"CodeMirrorGrammar",[["Classy","./classy"],["RegExAnalyzer","./regexanalyzer"]],function(t,e,n){var s,r="0.5.1",o=t.Class,h=2,u=4,c=8,a=9,k=16,p=32,f=64,m=128,g=256,d=512,R=33,y=34,E=36,C=40,O=48,v=64,b=128,x=4,B=8,P=16,S=32,T=64,w=65,A=128,L=256,q=512,N=1024,_=2048,M=4096,G=8192,j={ONEOF:A,EITHER:A,ALL:L,ALLOF:L,ZEROORONE:q,ZEROORMORE:N,ONEORMORE:_},D={BLOCK:T,COMMENT:w,"ESCAPED-BLOCK":S,SIMPLE:P,GROUP:M,NGRAM:G,"N-GRAM":G},F=Array.prototype.slice,I=(Array.prototype.splice,Array.prototype.concat,Object.prototype.hasOwnProperty),K=Object.prototype.toString,U=function(t){var e=typeof t,s=K.call(t);return"number"==e||t instanceof Number?h:!0===t||!1===t?u:t&&("string"==e||t instanceof String)?1==t.length?a:c:t&&("[object RegExp]"==s||t instanceof RegExp)?k:t&&("[object Array]"==s||t instanceof Array)?p:t&&"[object Object]"==s?f:null===t?m:n===t?g:d},z=function(t,e){return e||p!=U(t)?[t]:t},$=function(t,e){return t=z(t,e),(e||p!=U(t[0]))&&(t=[t]),t},Z=function(t){var e,n=U(t);if(f!=n&&p!=n)return t;var s,i={};for(s in t)I.call(t,s)&&(e=U(t[s]),i[s]=f==e?Z(t[s]):p==e?t[s].slice():t[s]);return i},H=function(){var t=F.call(arguments),e=t.length;if(1>e)return null;if(2>e)return Z(t[0]);var n,s,i,r,o=t.shift(),h=Z(o);for(e--,s=0;e>s;s++)if(n=t.shift())for(i in n)I.call(n,i)&&(I.call(o,i)?(r=U(o[i]),f&~c&r&&(h[i]=H(o[i],n[i]))):h[i]=Z(n[i]));return h},V=/([\-\.\*\+\?\^\$\{\}\(\)\|\[\]\/\\])/g,J=function(t,e){return e.length-t.length},Q=function(t,e){return c&U(e)&&c&U(t)&&e.length&&e.length<=t.length&&e==t.substr(0,e.length)},W=function(t,n,s){if(!t||h==U(t))return t;var i=n?n.length||0:0;if(i&&n==t.substr(0,i)){var r,o,l,u="^("+t.substr(i)+")";return s[u]||(r=new RegExp(u),l=new e(r).analyze(),o=l.getPeekChars(),Object.keys(o.peek).length||(o.peek=null),Object.keys(o.negativepeek).length||(o.negativepeek=null),s[u]=[r,o]),s[u]}return t},X=function(t,e){var n,s,i={},r="";for(c==U(e)&&(r=e),n=0,s=t.length;s>n;n++)i[t[n].charAt(0)]=1,t[n]=t[n].replace(V,"\\$1");return[new RegExp("^("+t.sort(J).join("|")+")"+r),{peek:i,negativepeek:null},1]},Y=o({constructor:function(t){this.string=t?""+t:"",this.start=this.pos=0,this.stream=null},stream:null,string:"",start:0,pos:0,fromStream:function(t){return this.stream=t,this.string=""+t.string,this.start=t.start,this.pos=t.pos,this},sol:function(){return 0==this.pos},eol:function(){return this.pos>=this.string.length},chr:function(t,e){e=!1!==e;var n=this.string.charAt(this.pos)||"";return t==n?(e&&(this.pos+=1,this.stream&&(this.stream.pos=this.pos)),n):!1},str:function(t,e,n){n=!1!==n;var s=this.pos,i=this.string.charAt(s);if(e.peek[i]){var r=t.length,o=this.string.substr(s,r);if(t==o)return n&&(this.pos+=r,this.stream&&(this.stream.pos=this.pos)),o}return!1},rex:function(t,e,n,s){n=!1!==n,s=s||0;var i=this.pos,r=this.string.charAt(i);if(e.peek&&e.peek[r]||e.negativepeek&&!e.negativepeek[r]){var o=this.string.slice(i).match(t);return!o||o.index>0?!1:(n&&(this.pos+=o[s].length,this.stream&&(this.stream.pos=this.pos)),o)}return!1},mch:function(t,e,n,s){if("string"!=typeof t){s=s||0;var i=this.string.slice(this.pos).match(t);return i&&i.index>0?null:(i&&e!==!1&&(this.pos+=i[s].length),i)}var r=function(t){return n?t.toLowerCase():t},o=this.string.substr(this.pos,t.length);return r(o)==r(t)?(e!==!1&&(this.pos+=t.length),!0):void 0},end:function(){return this.pos=this.string.length,this.stream&&(this.stream.pos=this.pos),this},pk:function(){return this.string.charAt(this.pos)},nxt:function(){if(this.pos<this.string.length){var t=this.string.charAt(this.pos++);return this.stream&&(this.stream.pos=this.pos),t}},bck:function(t){return this.pos-=t,this.stream&&(this.stream.pos=this.pos),this},bck2:function(t){return this.pos=t,this.stream&&(this.stream.pos=this.pos),this},space:function(){for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.stream&&(this.stream.pos=this.pos),this.pos>t},cur:function(){return this.string.slice(this.start,this.pos)},sft:function(){return this.start=this.pos,this}}),te=o({constructor:function(t){this.id=t||0,this.stack=[],this.inBlock=null,this.endBlock=null,this.currentToken=B},id:0,stack:null,inBlock:null,endBlock:null,currentToken:null,clone:function(){var t=new this.$class;return t.id=this.id,t.stack=this.stack.slice(),t.inBlock=this.inBlock,t.endBlock=this.endBlock,t.currentToken=this.currentToken,t},toString:function(){return"_"+this.id+"_"+this.inBlock}}),ee=o({constructor:function(t,e,n,s){this.name=t,this.pattern=e,this.key=n||0,this.type=s||O},name:null,pattern:null,peek:null,type:null,key:0,toString:function(){var t="[";return t+="Matcher: "+this.name,t+=", Type: "+this.type,t+=", Pattern: "+(this.pattern?this.pattern.toString():null),t+="]"},get:function(){return[this.key,this.pattern]}}),ne=o({Extends:ee},{constructor:function(t,e,n){this.name=t,this.pattern=e,this.type=R,this.key=n||0},get:function(t,e){var n;return(n=t.chr(this.pattern,e))?[this.key,n]:!1}}),se=o({Extends:ee},{constructor:function(t,e,n){this.name=t,this.pattern=e,this.peek={peek:{},negativepeek:null},this.peek.peek[""+e.charAt(0)]=1,this.type=y,this.key=n||0},get:function(t,e){var n;return(n=t.str(this.pattern,this.peek,e))?[this.key,n]:!1}}),ie=o({Extends:ee},{constructor:function(t,e,n){this.name=t,this.pattern=e[0],this.peek=e[1],this.isComposite=e[2]||0,this.type=E,this.key=n||0},isComposite:0,get:function(t,e){var n;return(n=t.rex(this.pattern,this.peek,e,this.isComposite))?[this.key,n]:!1}}),re=o({Extends:ee},{constructor:function(t,e,n){this.name=t,this.type=C,this.key=n||0},get:function(t,e){return!1!==e&&t.end(),[this.key,""]}}),oe=o({Extends:ee},{constructor:function(t,e,n){this.name=t,this.matchers=e,this.type=v,this.ownKey=!1!==n},matchers:null,ownKey:!0,get:function(t,e){var n,s,i=this.matchers,r=i.length;for(n=0;r>n;n++)if(s=i[n].get(t,e))return this.ownKey?[n,s[1]]:s;return!1}}),he=o({Extends:ee},{constructor:function(t,e,n){this.name=t,this.type=b,this.start=new oe(this.name+"_StartMatcher",e,!1),this.pattern=this.start.pattern||null,this.end=n},start:null,end:null,get:function(t,e){var n=this.start.get(t,e);if(n){var s=this.end[n[0]];return h==U(s)&&(s=new se(this.name+"_EndMatcher",n[1][s+1])),s}return!1}}),le=function(t,e,n,s){n=n||0;var i,r=t+"_SimpleMatcher",o=U(e);return h==o?e:(s[r]||(i=u==o?new ee(r,e,n):m==o?new re(r,e,n):a==o?new ne(r,e,n):c==o?new se(r,e,n):p==o?new ie(r,e,n):e,s[r]=i),s[r])},ue=function(t,e,n,s,i,r){var o,h,l,u,c,a=!1,k=!1,f=t+"_CompoMatcher";if(!r[f]){if(o=z(e),l=o.length,s)for(u=(l>>1)+1,h=0;u>=h;h++){if(p==U(o[h])||p==U(o[l-1-h])){a=!0;break}if(Q(o[h],n)||Q(o[l-1-h],n)){k=!0;break}}if(!s||a||k){for(h=0;l>h;h++)o[h]=p==U(o[h])?ue(f+"_"+h,o[h],n,s,i,r):le(f+"_"+h,W(o[h],n,i),h,r);c=o.length>1?new oe(f,o):o[0]}else c=le(f,X(o,s),0,r);r[f]=c}return r[f]},ce=function(t,e,n,s,i){var r,o,h,l,u,c,a,k=t+"_BlockMatcher";if(!i[k]){for(l=[],u=[],r=$(e),o=0,h=r.length;h>o;o++)c=le(k+"_0_"+o,W(r[o][0],n,s),o,i),a=r[o].length>1?le(k+"_1_"+o,W(r[o][1],n,s),o,i):c,l.push(c),u.push(a);i[k]=new he(k,l,u)}return i[k]},ae=o({constructor:function(t,e,n,s){t&&(this.name=t),e&&(this.token=e),n&&(this.type=n),s&&(this.style=s),this.tokenName=this.name},name:null,token:null,tokenName:null,type:null,style:null,isRequired:!1,ERROR:!1,streamPos:null,stackPos:null,actionBefore:null,actionAfter:null,toString:function(){var t="[";return t+="Tokenizer: "+this.name,t+=", Type: "+this.type,t+=", Token: "+(this.token?this.token.toString():null),t+="]"},required:function(t){return this.isRequired=t?!0:!1,this},pushToken:function(t,e,n){return this.stackPos?t.splice(this.stackPos+(n||0),0,e):t.push(e),this},clone:function(){var t,e,n=F.call(arguments),s=n.length;for(t=new this.$class,t.name=this.name,t.tokenName=this.tokenName,t.token=this.token,t.type=this.type,t.style=this.style,t.isRequired=this.isRequired,t.ERROR=this.ERROR,t.streamPos=this.streamPos,t.stackPos=this.stackPos,t.actionBefore=this.actionBefore,t.actionAfter=this.actionAfter,e=0;s>e;e++)t[n[e]]=this[n[e]];return t},get:function(t,e){return this.token.get(t)?(e.currentToken=this.type,this.style):!1}}),ke=o({Extends:ae},{constructor:function(t,e,n,s,i){t&&(this.name=t),e&&(this.token=e),n&&(this.type=n),s&&(this.style=s),this.multiline=!1!==i,this.endBlock=null,this.tokenName=this.name},multiline:!1,endBlock:null,get:function(t,e){var n=!1,s=!1;if(e.inBlock==this.name?(s=!0,this.endBlock=e.endBlock):!e.inBlock&&(this.endBlock=this.token.get(t))&&(s=!0,e.inBlock=this.name,e.endBlock=this.endBlock),s){for(this.stackPos=e.stack.length,n=this.endBlock.get(t);!n&&!t.eol();){if(this.endBlock.get(t)){n=!0;break}t.nxt()}return n=n||!this.multiline&&t.eol(),n?(e.inBlock=null,e.endBlock=null):this.pushToken(e.stack,this),e.currentToken=this.type,this.style}return e.inBlock=null,e.endBlock=null,!1}}),pe=o({Extends:ke},{constructor:function(t,e,n,s,i,r){t&&(this.name=t),e&&(this.token=e),n&&(this.type=n),s&&(this.style=s),this.escape=i||"\\",this.multiline=r||!1,this.endBlock=null,this.tokenName=this.name},escape:"\\",get:function(t,e){var n="",s=!1,i=!1,r=!1;if(e.inBlock==this.name?(i=!0,this.endBlock=e.endBlock):!e.inBlock&&(this.endBlock=this.token.get(t))&&(i=!0,e.inBlock=this.name,e.endBlock=this.endBlock),i){for(this.stackPos=e.stack.length,s=this.endBlock.get(t);!s&&!t.eol();){if(!r&&this.endBlock.get(t)){s=!0;break}n=t.nxt(),r=!r&&n==this.escape}return s=s||!(r&&this.multiline),s?(e.inBlock=null,e.endBlock=null):this.pushToken(e.stack,this),e.currentToken=this.type,this.style}return e.inBlock=null,e.endBlock=null,!1}}),fe=o({Extends:ae},{constructor:function(t,e){t&&(this.name=t),e&&(this.type=e),this.tokenName=this.name},tokens:null,buildTokens:function(t){return t&&(this.tokens=z(t),this.token=this.tokens[0]),this}}),me=o({Extends:fe},{constructor:function(t,e){this.type=q,t&&(this.name=t),e&&this.buildTokens(e),this.tokenName=this.name},get:function(t,e){this.isRequired=!1,this.ERROR=!1,this.streamPos=t.pos;var n=this.token.get(t,e);return token.ERROR&&t.bck2(this.streamPos),n}}),ge=o({Extends:fe},{constructor:function(t,e){this.type=N,t&&(this.name=t),e&&this.buildTokens(e),this.tokenName=this.name},get:function(t,e,n){var s,i,r,o=this.tokens.length,h=0;for(this.isRequired=!1,this.ERROR=!1,this.streamPos=t.pos,this.stackPos=e.stack.length,s=0;o>s;s++){if(i=this.tokens[s],r=i.get(t,e,n),!1!==r)return this.pushToken(e.stack,this),r;i.ERROR&&(h++,t.bck2(this.streamPos))}return!1}}),de=o({Extends:fe},{constructor:function(t,e){this.type=_,t&&(this.name=t),e&&this.buildTokens(e),this.foundOne=!1,this.tokenName=this.name},foundOne:!1,get:function(t,e,n){var s,i,r,o=this.tokens.length,h=0,l=0;for(this.isRequired=!this.foundOne,this.ERROR=!1,this.streamPos=t.pos,this.stackPos=e.stack.length,r=0;o>r;r++){if(i=this.tokens[r],s=i.get(t,e,n),h+=i.isRequired?1:0,!1!==s)return this.foundOne=!0,this.isRequired=!1,this.ERROR=!1,this.pushToken(e.stack,this.clone("tokens","foundOne")),this.foundOne=!1,s;i.ERROR&&(l++,t.bck2(this.streamPos))}return this.ERROR=this.foundOne?!1:!0,!1}}),Re=o({Extends:fe},{constructor:function(t,e){this.type=A,t&&(this.name=t),e&&this.buildTokens(e),this.tokenName=this.name},get:function(t,e,n){var s,i,r,o=this.tokens.length,h=0,l=0;for(this.isRequired=!0,this.ERROR=!1,this.streamPos=t.pos,r=0;o>r;r++){if(i=this.tokens[r],s=i.get(t,e,n),h+=i.isRequired?1:0,!1!==s)return s;i.ERROR&&(l++,t.bck2(this.streamPos))}return this.isRequired=h>0?!0:!1,this.ERROR=o==l&&h>0?!0:!1,!1}}),ye=o({Extends:fe},{constructor:function(t,e){this.type=L,t&&(this.name=t),e&&this.buildTokens(e),this.tokenName=this.name},get:function(t,e,n){var s,i,r=this.tokens.length,o=!1;if(this.isRequired=!0,this.ERROR=!1,this.streamPos=t.pos,this.stackPos=e.stack.length,s=this.tokens[0],i=s.required(!0).get(t,e,n),!1!==i){this.stackPos=e.stack.length;for(var h=r-1;h>0;h--)this.pushToken(e.stack,this.tokens[h].required(!0),r-h);o=i}else s.ERROR?(this.ERROR=!0,t.bck2(this.streamPos)):s.isRequired&&(this.ERROR=!0);return o}}),Ee=o({Extends:fe},{constructor:function(t,e){this.type=G,t&&(this.name=t),e&&this.buildTokens(e),this.tokenName=this.tokens[0].name},get:function(t,e,n){var s,i,r=this.tokens.length,o=!1;if(this.isRequired=!1,this.ERROR=!1,this.streamPos=t.pos,this.stackPos=e.stack.length,s=this.tokens[0],i=s.required(!1).get(t,e,n),!1!==i){this.stackPos=e.stack.length;for(var h=r-1;h>0;h--)this.pushToken(e.stack,this.tokens[h].required(!0),r-h);o=i}else s.ERROR&&t.bck2(this.streamPos);return o}}),Ce=function(t,e){var n,s,r,o=$(t.tokens.slice());for(i=0,l=o.length;l>i;i++)n=o[i][0],s=o[i].length>1?o[i][1]:o[i][0],r=o[i].length>2?o[i][2]:"",null===s?(e.lineCommentStart=e.lineCommentStart||[],e.lineCommentStart.push(n)):(e.blockCommentStart=e.blockCommentStart||[],e.blockCommentEnd=e.blockCommentEnd||[],e.blockCommentLead=e.blockCommentLead||[],e.blockCommentStart.push(n),e.blockCommentEnd.push(s),e.blockCommentLead.push(r))},Oe=function(t,e,n,i,r,o,h,l,u,c){var a,k,p,f,m,g=null;if(!u[t]){if(a=i[t]||r[t]||null)if(k=a.type||"simple",k=D[k.toUpperCase()],m=a.action||null,T==k||w==k)w==k&&Ce(a,c),g=new ke(t,ce(t,a.tokens.slice(),e,h,l),k,o[t]||s,a.multiline);else if(S==k)g=new pe(t,ce(t,a.tokens.slice(),e,h,l),k,o[t]||s,a.escape||"\\",a.multiline||!1);else if(P==k)g=new ae(t,ue(t,a.tokens.slice(),e,n[t],h,l),k,o[t]||s);else if(M==k){p=j[a.match.toUpperCase()],f=z(a.tokens).slice();for(var d=0,R=f.length;R>d;d++)f[d]=Oe(f[d],e,n,i,r,o,h,l,u,c);g=q==p?new me(t,f):N==p?new ge(t,f):_==p?new de(t,f):A==p?new Re(t,f):new ye(t,f)}else if(G==k){g=$(z(a.tokens).slice()).slice();for(var d=0,R=g.length;R>d;d++){for(var y=g[d],E=0,C=y.length;C>E;E++)y[E]=Oe(y[E],e,n,i,r,o,h,l,u,c);g[d]=new Ee(t+"_NGRAM_"+d,y)}}u[t]=g}return u[t]},ve=o({constructor:function(t,e){this.LOC=e,this.Grammar=t,this.Style=t.Style||{},this.Comments=t.Comments||{},this.electricChars=t.electricChars?t.electricChars:!1,this.tokens=t.Parser||[],this.DEF=this.LOC.DEFAULT,this.ERR=this.Style.error||this.LOC.ERROR},LOC:null,ERR:null,DEF:null,Grammar:null,Style:null,Comments:null,electricChars:!1,tokens:null,getToken:function(t,e){var n,s,i,r,o,h=this.tokens.length,l=this.LOC,u=this.DEF,c=this.ERR;if(o=e.stack,r=(new Y).fromStream(t),r.space())return e.currentToken=B,u;for(;o.length;){if(s=o.pop(),i=s.get(r,e,l),!1!==i)return i;if(s.ERROR||s.isRequired)return o.length=0,r.nxt(),e.currentToken=x,c}for(n=0;h>n;n++){if(s=this.tokens[n],i=s.get(r,e,l),!1!==i)return i;if(s.ERROR||s.isRequired)return o.length=0,r.nxt(),e.currentToken=x,c}return r.nxt(),e.currentToken=B,u},indent:function(){return CodeMirror.Pass}}),be=function(t,e){return new ve(t,e)},xe=function(t){return function(e,n){return t.LOC.conf=e,t.LOC.parserConf=n,{startState:function(){return new te},electricChars:t.electricChars,lineComment:t.Comments.lineCommentStart?t.Comments.lineCommentStart[0]:null,blockCommentStart:t.Comments.blockCommentStart?t.Comments.blockCommentStart[0]:null,blockCommentEnd:t.Comments.blockCommentEnd?t.Comments.blockCommentEnd[0]:null,blockCommentLead:t.Comments.blockCommentLead?t.Comments.blockCommentLead[0]:null,copyState:function(t){return t.clone()},token:function(e,n){return t.getToken(e,n)},indent:function(e,n,s){return t.indent(e,n,s)}}}},Be={RegExpID:null,RegExpGroups:null,Style:{error:"error"},Lex:null,Syntax:null,Parser:null},Pe=function(t){var e,n,s,i,r,o,h,l,u,c,a,k={},f={},m={},g={};if(t.__parsed)return t;for(t=H(t,Be),e=t.RegExpID||null,t.RegExpID=null,delete t.RegExpID,n=t.RegExpGroups||{},t.RegExpGroups=null,delete t.RegExpGroups,h=t.Lex||{},t.Lex=null,delete t.Lex,l=t.Syntax||{},t.Syntax=null,delete t.Syntax,o=t.Style||{},r=t.Parser||[],i=r.length,s=[],u=0;i>u;u++)c=r[u],a=Oe(c,e,n,h,l,o,k,f,m,g)||null,a&&(p==U(a)?s=s.concat(a):s.push(a));return t.Parser=s,t.Style=o,t.Comments=g,t.__parsed=!0,t},Se={VERSION:r,extend:H,parse:Pe,getMode:function(t,e){s=null,t=Pe(t);var n={DEFAULT:e||s,ERROR:Be.Style.error};return xe(be(t,n))}};return Se});