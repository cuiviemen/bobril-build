!function(){function a(a,b){}function b(a){return document.createTextNode(a)}function c(a){return document.createElement(a)}function d(a){return"object"==typeof a}function e(a){var b=zb;return zb=a,b}function f(){return Object.create(null)}function g(a){return"string"==typeof Bb[a]}function h(a){return function(b,c,d){b[a]=c,b[d]=void 0}}function i(a){return function(b,c,d){b[a]="number"==typeof c?c+"px":c,b[d]=void 0}}function j(a,b,c){"number"==typeof b&&(a[c]=b+"px")}function k(){return document.documentMode}function l(a){for(var b=Object.keys(a),c=0,d=b.length;d>c;c++){var e=b[c],f=Cb[e],k=a[e];if(void 0!==k){if(void 0===f){if(g(e))f=Db[e]===!0?null:j;else{for(var l=e.replace(/^\w/,function(a){return a.toUpperCase()}),m=0;m<Ab.length;m++)if(g(Ab[m]+l)){f=(Db[e]===!0?h:i)(Ab[m]+l);break}void 0===f&&(f=Db[e]===!0?null:j)}Cb[e]=f}null!==f&&f(a,k,e)}}}function m(a,b){a[b]=""}function n(a,b,c,e){var f=b.style;if(d(c)){l(c);var g;if(d(e)){for(g in e)g in c||m(f,g);for(g in c){var h=c[g];void 0!==h?e[g]!==h&&(f[g]=h):m(f,g)}}else{e&&(f.cssText="");for(g in c){var h=c[g];void 0!==h&&(f[g]=h)}}}else if(c)f.cssText=c;else if(d(e))for(g in e)m(f,g);else e&&(f.cssText="")}function o(a,b){wb?a.setAttribute("class",b):a.className=b}function p(a,b,c,d){var e,f,g,h,i;for(e in c)f=c[e],g=d[e],"value"!==e||wb?g!==f&&(d[e]=f,wb?"href"===e?b.setAttributeNS("http://www.w3.org/1999/xlink","href",f):b.setAttribute(e,f):e in b&&"list"!==e&&"form"!==e?b[e]=f:b.setAttribute(e,f)):(h=g,i=f,d[e]=f);for(e in d)void 0===d[e]||e in c||(d[e]=void 0,b.removeAttribute(e));return void 0!==i&&zb(b,a,i,h),d}function q(a,b){var c=a.component;c&&c[b?"postUpdateDom":"postInitDom"]&&(xb.push(b),yb.push(a))}function r(a){for(var b;a&&(b=a.cfg,void 0===b);){if(a.ctx){b=a.ctx.cfg;break}a=a.parent}return b}function s(a,b){if(null!=a){if("function"==typeof a)return void a(b);var c=a[0],d=c.refs;d||(d=f(),c.refs=d),d[a[1]]=b}}function t(a,d,e,f){var g,h={tag:a.tag,key:a.key,ref:a.ref,className:a.className,style:a.style,attrs:a.attrs,children:a.children,component:a.component,data:a.data,cfg:a.cfg,parent:d,element:void 0,ctx:void 0},i=wb,j=h.component;if(s(h.ref,h),j){var k={data:h.data||{},me:h,cfg:r(d)};h.ctx=k,j.init&&j.init(k,h),j.render&&j.render(k,h)}var l=h.tag,m=h.children;if(void 0===l)return"string"==typeof m?(g=b(m),h.element=g,e.insertBefore(g,f)):v(h,e,f),j&&(j.postRender&&j.postRender(h.ctx,h),q(h,!1)),h;if("/"===l){var t=m;if(""===t);else if(null==f){var u=e.lastChild;for(e.insertAdjacentHTML("beforeend",t),h.element=[],u=u?u.nextSibling:e.firstChild;u;)h.element.push(u),u=u.nextSibling}else{g=f;var w=f.previousSibling,x=!1,y=e;g.insertAdjacentHTML||(g=y.insertBefore(c("i"),g),x=!0),g.insertAdjacentHTML("beforebegin",t),w=w?w.nextSibling:y.firstChild;for(var z=[];w!==g;)z.push(w),w=w.nextSibling;a.element=z,x&&y.removeChild(g)}return j&&(j.postRender&&j.postRender(h.ctx,h),q(h,!1)),h}wb||"svg"===l?(g=document.createElementNS("http://www.w3.org/2000/svg",l),wb=!0):g||(g=c(l)),e.insertBefore(g,f),h.element=g,v(h,g,null),j&&j.postRender&&j.postRender(h.ctx,h),h.attrs&&(h.attrs=p(h,g,h.attrs,{})),h.style&&n(h,g,h.style,void 0);var A=h.className;return A&&o(g,A),wb=i,q(h,!1),h}function u(a){var b=typeof a;return"string"===b?{children:a}:"boolean"===b?null:a}function v(a,b,c){var d=a.children;if(d){if(!ub(d)){if("string"==typeof d)return void(vb?b.textContent=d:b.innerText=d);d=[d]}d=d.slice(0);for(var e=0,f=d.length;f>e;){var g=d[e];ub(g)?(d.splice.apply(d,[e,1].concat(g)),f=d.length):(g=u(g),null!=g?(d[e]=t(g,a,b,c),e++):(d.splice(e,1),f--))}a.children=d}}function w(a){s(a.ref,null);var b=a.children;if(ub(b))for(var c=0,d=b.length;d>c;c++)w(b[c]);var e=a.component;e&&e.destroy&&e.destroy(a.ctx,a,a.element)}function x(a){var b=a.element;if(ub(b)){var c=b[0].parentNode;if(c)for(var d=0;d<b.length;d++)c.removeChild(b[d])}else if(null!=b){var e=b.parentNode;e&&e.removeChild(b)}else{var f=a.children;if(ub(f))for(var g=0,h=f.length;h>g;g++)x(f[g])}}function y(a){w(a),x(a)}function z(a,b,c,d){var e=a.element,f=a.children;if(ub(e)){for(var g=0;g<e.length;g++)if(e[g]===b)return d.push(a),ub(f)?f:null}else if(null==e){if(ub(f))for(var h=0;h<f.length;h++){var i=z(f[h],b,c,d);if(void 0!==i)return d.splice(c,0,a),i}}else if(e===b)return d.push(a),ub(f)?f:null;return void 0}function A(a){var b=[];if(null==a)return b;var c=Object.keys(Eb),d=c.map(function(a){return Eb[a].e||document.body}),e=[];a:for(;a;){for(var f=0;f<d.length;f++)if(a===d[f])break a;e.push(a),a=a.parentNode}if(!a||0===e.length)return b;var g=null,h=e.pop();a:for(f=0;f<d.length;f++)if(a===d[f])for(var i=Eb[c[f]].c,j=0;j<i.length;j++){var k=i[j],l=z(k,h,b.length,b);if(void 0!==l){g=l;break a}}for(;e.length;){if(h=e.pop(),g&&g.length)for(var m=0,n=g.length;n>m;m++){var o=g[m],l=z(o,h,b.length,b);if(void 0!==l){g=l,h=null;break}}if(h){b.push(null);break}}return b}function B(a){var b=A(a);return 0==b.length?null:b[b.length-1]}function C(a,b,c){c&&c.postRender&&c.postRender(b.ctx,a,b),b.data=a.data,q(b,!0)}function D(a,b,c,d,e){var f=a.component,g=wb,h=!1,i=b.ctx;if(f&&null!=i)if(i[Kb]===Pb&&(e=Math.max(e,i[Lb])),f.id!==b.component.id)h=!0;else{if(void 0!=b.parent&&(i.cfg=r(b.parent)),f.shouldChange&&!f.shouldChange(i,a,b)&&!Yb)return b;i.data=a.data||{},b.component=f,f.render&&(a=da({},a),f.render(i,a,b)),b.cfg=a.cfg}var j=a.children,k=b.children,l=a.tag;if(h||f&&null==i);else if("/"===l){if("/"===b.tag&&k===j)return C(a,b,f),b}else if(l===b.tag){if(void 0===l){if("string"==typeof j&&"string"==typeof k){if(j!==k){var m=b.element;vb?m.textContent=j:m.nodeValue=j,b.children=j}}else 0>=e?ub(k)&&R(b.children,c,d):b.children=L(c,j,k,b,d,e-1);return C(a,b,f),b}"svg"===l&&(wb=!0);var m=b.element;"string"!=typeof j||ub(k)?0>=e?ub(k)&&R(b.children,m,d):k=L(m,j,k,b,null,e-1):j!==k&&(vb?m.textContent=j:m.innerText=j,k=j),b.children=k,C(a,b,f),(b.attrs||a.attrs)&&(b.attrs=p(b,m,a.attrs||{},b.attrs||{})),n(b,m,a.style,b.style),b.style=a.style;var q=a.className;return q!==b.className&&(o(m,q||""),b.className=q),wb=g,b}var s=b.element;ub(s)&&(s=s[0]),s=null==s?c:s.parentNode;var u=t(a,b.parent,s,E(b));return y(b),u}function E(a){var b=a.element;if(null!=b)return ub(b)?b[0]:b;var c=a.children;if(!ub(c))return null;for(var d=0;d<c.length;d++)if(b=E(c[d]))return b;return null}function F(a,b,c,d){for(;++b<c;){var e=a[b];if(null!=e){var f=E(e);if(null!=f)return f}}return d}function G(){for(var a=yb.length,b=0;a>b;b++){var c=yb[b];xb[b]?c.component.postUpdateDom(c.ctx,c,c.element):c.component.postInitDom(c.ctx,c,c.element)}xb=[],yb=[]}function H(a,b,c,d,e,f,g){b[c]=D(a,b[c],f,F(b,c,d,e),g)}function I(a,b,c){var d=a.element;if(null==d){var e=a.children;if(!ub(e))return null;for(var f=0;f<e.length;f++)I(e[f],b,c)}else if(ub(d))for(var f=0;f<d.length;f++)b.insertBefore(d[f],c);else b.insertBefore(d,c)}function J(a,b,c,d,e){var f=F(a,b,c,d),g=a[b],h=E(g);null!=h&&h!==f&&I(g,e,f)}function K(a,b,c,d,e,f,g){var h=F(b,c,d,e),i=b[c],j=E(i);null!=j&&j!==h&&I(i,f,h),b[c]=D(a,i,f,h,g)}function L(b,c,d,e,g,h){null==c&&(c=[]),ub(c)||(c=[c]),null==d&&(d=[]),ub(d)||(b.firstChild&&b.removeChild(b.firstChild),d=[]),c=c.slice(0);var i,j=c.length,k=d.length;for(i=0;j>i;){var l=c[i];ub(l)?(c.splice.apply(c,[i,1].concat(l)),j=c.length):(l=u(l),null!=l?(c[i]=l,i++):(c.splice(i,1),j--))}var m=j,n=k;i=0;for(var o=0;m>i&&n>o;){if(c[i].key!==d[o].key){for(;;)if(!(c[m-1].key===d[n-1].key&&(m--,n--,H(c[m],d,n,k,g,b,h),m>i&&n>o)))break;if(m>i&&n>o){if(c[i].key===d[n-1].key){d.splice(o,0,d[n-1]),d.splice(n,1),K(c[i],d,o,k,g,b,h),i++,o++;continue}if(c[m-1].key===d[o].key){d.splice(n,0,d[o]),d.splice(o,1),n--,m--,K(c[m],d,n,k,g,b,h);continue}}break}H(c[i],d,o,k,g,b,h),i++,o++}if(o===n){if(i===m)return d;for(;m>i;)d.splice(o,0,t(c[i],e,b,F(d,o-1,k,g))),o++,n++,k++,i++;return d}if(i===m){for(;n>o;)n--,y(d[n]),d.splice(n,1);return d}for(var p,q,r=f(),s=f(),v=i,w=o,x=0;n>o;o++)q=d[o],p=q.key,null!=p?(a(!(p in r)),r[p]=o):x--;for(var z=-x-x;m>i;i++)q=c[i],p=q.key,null!=p?(a(!(p in s)),s[p]=i):x++;z=x;var A=0;i=v,o=w;for(var B;n>o&&m>i;)if(null!==d[o])if(B=d[o].key,null!=B){if(p=c[i].key,null==p){for(i++;m>i&&(p=c[i].key,null==p);)i++;if(null==p)break}var C=r[p];void 0!==C?B in s?o===C+A?(H(c[i],d,o,k,g,b,h),i++,o++):(d.splice(o,0,d[C+A]),A++,d[C+A]=null,K(c[i],d,o,k,g,b,h),o++,n++,k++,i++):(y(d[o]),d.splice(o,1),A--,n--,k--):(d.splice(o,0,t(c[i],e,b,F(d,o-1,k,g))),A++,i++,o++,n++,k++)}else o++;else d.splice(o,1),n--,k--,A--;for(;n>o;)null!==d[o]?null==d[o].key?o++:(y(d[o]),d.splice(o,1),n--,k--):(d.splice(o,1),n--,k--);for(;m>i;)p=c[i].key,null!=p&&(d.splice(o,0,t(c[i],e,b,F(d,o-1,k,g))),n++,k++,A++,o++),i++;if(!z)return d;for(z=z-Math.abs(x)>>1,i=v,o=w;m>i;)if(n>o&&(B=d[o].key,null!=B))o++;else if(p=c[i].key,n>i&&p===d[i].key){if(null!=p){i++;continue}H(c[i],d,i,k,g,b,h),z--,i++,o=i}else if(null==p)n>o?(d.splice(i,0,d[o]),d.splice(o+1,1),K(c[i],d,i,k,g,b,h),z--,i++,o++):(d.splice(i,0,t(c[i],e,b,F(d,i-1,k,g))),n++,k++,i++,o++);else{if(a(i===o),0===z&&0>x){for(;;)if(y(d[o]),d.splice(o,1),n--,k--,x++,a(o!==n,"there still need to exist key node"),null!=d[o].key)break;continue}for(;null==d[o].key;)o++;a(p===d[o].key),d.splice(i,0,d[o]),d.splice(o+1,1),J(d,i,k,g,b),i++,o=i}for(;n>i;)n--,y(d[n]),d.splice(n,1);return d}function M(a){if(Fb)Gb(a);else{var b=50/3+Jb-Hb();0>b&&(b=0),window.setTimeout(function(){Jb=Hb(),a(Jb-Ib)},b)}}function N(a,b,c){var d=Tb[a]||[];d.push({priority:b,callback:c}),Tb[a]=d}function O(a,b,c,d){var e=Sb[a];if(e)for(var f=0;f<e.length;f++)if(e[f](b,c,d))return!0;return!1}function P(a,b){function c(c){c=c||window.event;var d=c.target||c.srcElement||a,e=B(d);O(b,c,d,e)}if("!"!=b[0]){var d="^"==b[0],e=b;d&&(e=b.slice(1)),"on"+e in window&&(a=window),a.addEventListener(e,c,d)}}function Q(){if(!Ub){Ub=!0;for(var a=Object.keys(Tb),b=0;b<a.length;b++){var c=a[b],d=Tb[c];d=d.sort(function(a,b){return a.priority-b.priority}),Sb[c]=d.map(function(a){return a.callback})}Tb=null;for(var e=document.body,f=0;f<a.length;f++)P(e,a[f])}}function R(a,b,c){for(var d=a.length,e=0;d>e;e++){var f=a[e],g=f.ctx;if(null!=g&&g[Kb]===Pb){var h={data:g.data,component:f.component};a[e]=D(h,f,b,c,g[Lb])}else if(ub(f.children)){var i=wb;"svg"===f.tag&&(wb=!0),R(f.children,f.element||b,F(a,e,d,c)),wb=i}}}function S(a){var b=Vb;return Vb=a,b}function T(a){var b=Wb;return Wb=a,b}function U(a){for(var b=a.length-1;b>=0;b--){var c=a[b],d=c.element;if(null!=d){if(ub(d)){var e=d.length;if(0===e)continue;return d[e-1]}return d}var f=c.children;if(ub(f)){var g=U(f);if(null!=g)return g}}return null}function V(a){Rb=Hb(),Q(),Pb++,Yb=Xb,Xb=!1,Ob=a,Nb=!1,Vb();var b=!1;Mb&&(Mb=!1,b=!0);for(var c=Object.keys(Eb),d=0;d<c.length;d++){var e=Eb[c[d]];if(e){var f=e.c,g=U(f);if(null!=g&&(g=g.nextSibling),b){var h=e.f();e.e=e.e||document.body,e.c=L(e.e,h,f,null,g,1e6)}else R(f,e.e,g)}}G();var i=Eb[0];Wb(i?i.c:null),Qb=Hb()-Rb}function W(){var a=Zb;return a}function X(){Nb||(Mb=!1),Zb()}function Y(a,b,c){$b++;var d=""+$b;return Eb[d]={f:a,e:b,c:[],p:c},X(),d}function Z(a){var b=Eb[a];b&&(b.c.length&&(b.c=L(b.e,[],b.c,null,null,1e9)),delete Eb[a])}function $(){return Eb}function _(a,b){Z("0"),Eb[0]={f:a,e:b,c:[],p:void 0},_b(),_b=X}function aa(a,b,c){for(;a;){var d=a.component;if(d){var e=a.ctx,f=d[b];if(f&&f.call(d,e,c))return e;if(f=d.shouldStopBubble,f&&f.call(d,e,b,c))break}a=a.parent}return null}function ba(a,b,c){if(!a)return null;var d=a.component;if(d){var e=a.ctx,f=d[b];if(f&&f.call(d,e,c))return e;if(f=d.shouldStopBroadcast,f&&f.call(d,e,b,c))return null}var g=a.children;if(!ub(g))return ba(g,b,c);for(var h=0;h<g.length;h++){var i=ba(g[h],b,c);if(null!=i)return i}}function ca(a,b){for(var c=Object.keys(Eb),d=0;d<c.length;d++){var e=Eb[c[d]].c;if(null!=e)for(var f=0;f<e.length;f++){var g=ba(e[f],a,b);if(null!=g)return g}}return null}function da(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];null==a&&(a={});for(var d=arguments.length,e=1;d>e;e++){var f=arguments[e];if(null!=f)for(var g=Object.keys(f),h=g.length,i=0;h>i;i++){var j=g[i];a[j]=f[j]}}return a}function ea(a){var b=a.preventDefault;b?b.call(a):a.returnValue=!1}function fa(a,b){Cb[a]=b}function ga(){return ac=null,Zb(),!1}function ha(){if(null==ac){var a=ec.clientWidth,b=ec.clientHeight,c=window.orientation,d=b>=a;null==c&&(c=d?0:90);for(var e=0;a>bc[+!d][e];)e++;ac={width:a,height:b,orientation:c,deviceCategory:e,portrait:d}}return ac}function ia(a,b){null==a.zoom&&(a.zoom="1");var c=a.filter;a.filter=null==c?b:c+" "+b}function ja(a,b,c){if(ic.test(b)){var d=b.indexOf("(to ");if(d>0){d=4;var e=b.indexOf(",",d),f=b.slice(d,e);f=f.split(" ").map(function(a){return jc[a]||a}).join(" "),b=b.slice(0,d-3)+f+b.slice(e)}b="-webkit-"+b}a[c]=b}function ka(a){var b=a.type;return"checkbox"===b||"radio"===b}function la(a,b){var c=a.length;if(c!==b.length)return!1;for(var d=0;c>d;d++)if(a[d]!==b[d])return!1;return!0}function ma(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}function na(a){for(var b=[],c=0;c<a.length;c++)a[c].selected&&b.push(a[c].value);return b}function oa(a,b,c){if(b&&"OPTION"===b.nodeName&&(b=document.activeElement,c=B(b)),!c)return!1;var d=c.component;if(!d)return!1;if(!d.onChange)return!1;var e=c.ctx,f=b.tagName,g="SELECT"===f,h=g&&b.multiple;if(h){var i=na(b.options);la(e[kc],i)||(e[kc]=i,d.onChange(e,i))}else if(ka(b)){if(a&&"change"===a.type)return setTimeout(function(){oa(null,b,c)},10),!1;if("radio"===b.type)for(var j=document.getElementsByName(b.name),k=0;k<j.length;k++){var l=j[k],m=B(l);if(m){var n=m.component;if(n&&n.onChange){var o=m.ctx,p=l.checked;o[kc]!==p&&(o[kc]=p,n.onChange(o,p))}}}else{var q=b.checked;e[kc]!==q&&(e[kc]=q,d.onChange(e,q))}}else{var r=b.value;e[kc]!==r&&(e[kc]=r,d.onChange(e,r))}return!1}function pa(a){return{shift:a.shiftKey,ctrl:a.ctrlKey,alt:a.altKey,meta:a.metaKey||!1,which:a.which||a.keyCode}}function qa(a,b,c){if(!c)return!1;var d=pa(a);return aa(c,"onKeyDown",d)?(ea(a),!0):!1}function ra(a,b,c){if(!c)return!1;var d=pa(a);return aa(c,"onKeyUp",d)?(ea(a),!0):!1}function sa(a,b,c){if(!c)return!1;if(0===a.which)return!1;var d={charCode:a.which||a.keyCode};return aa(c,"onKeyPress",d)?(ea(a),!0):!1}function ta(a,b){if(null==oc)return!1;var c=oc.me.component[a];if(!c)return!1;nc=!0;var d=c(oc,b);return nc=!1,d}function ua(a){for(;a;){var b=a.style;if(b){var c=b.pointerEvents;if(void 0!==c)return"none"===c?!0:!1}a=a.parent}return!1}function va(a){var b=B(a);return ua(b)}function wa(a){if(a.length){for(var b=a.length-1;b>=0;--b)a[b].t.style.visibility=a[b].p;return!0}return!1}function xa(a,b){a.push({t:b,p:b.style.visibility}),b.style.visibility="hidden"}function ya(a,b){for(var c=[],d=b;va(d);)xa(c,d),d=document.elementFromPoint(a.x,a.y);if(wa(c)){try{d.dispatchEvent(a)}catch(e){return!1}return ea(a),!0}return!1}function za(a,b){N(a,5,b)}function Aa(a){return"mouse"==a?0:"pen"==a?2:1}function Ba(a,b,c,d){for(var e=[],f=c;ua(d);)xa(e,f),f=document.elementFromPoint(a,b),d=B(f);return wa(e),[f,d]}function Ca(a){return function(b,c,d){if(ua(d)){var e=Ba(b.x,b.y,c,d);c=e[0],d=e[1]}var f=b.button+1,g=Aa(b.pointerType),h=b.buttons;if(0===f&&0===g&&h)for(f=1;!(1&h);)h>>=1,f++;var i={id:b.pointerId,type:g,x:b.clientX,y:b.clientY,button:f,shift:b.shiftKey,ctrl:b.ctrlKey,alt:b.altKey,meta:b.metaKey||!1};return O("!"+a,i,c,d)?(ea(b),!0):!1}}function Da(a){return function(b,c,d){for(var e=!1,f=0;f<b.changedTouches.length;f++){var g=b.changedTouches[f];c=document.elementFromPoint(g.clientX,g.clientY),d=B(c);var h={id:g.identifier+2,type:1,x:g.clientX,y:g.clientY,button:1,shift:b.shiftKey,ctrl:b.ctrlKey,alt:b.altKey,meta:b.metaKey||!1};O("!"+a,h,c,d)&&(e=!0)}return e?(ea(b),!0):!1}}function Ea(a){return function(b,c,d){if(c=document.elementFromPoint(b.clientX,b.clientY),d=B(c),ua(d)){var e=Ba(b.clientX,b.clientY,c,d);c=e[0],d=e[1]}var f={id:1,type:0,x:b.clientX,y:b.clientY,button:Oa(b),shift:b.shiftKey,ctrl:b.ctrlKey,alt:b.altKey,meta:b.metaKey||!1};return O("!"+a,f,c,d)?(ea(b),!0):!1}}function Fa(a,b,c){return Math.abs(a-b)<c}function Ga(a){var b=document.elementFromPoint(a.x,a.y),c=A(b),d=0==c.length?null:c[c.length-1];if(ua(d)){var e=Ba(a.x,a.y,b,d);b=e[0],c=A(b)}aa(d,"onMouseOver",a);for(var f=0;f<Bc.length&&f<c.length&&Bc[f]===c[f];)f++;for(var g,h,i=Bc.length;i>f;)i--,g=Bc[i],g&&(h=g.component,h&&h.onMouseLeave&&h.onMouseLeave(g.ctx,a));for(;i<c.length;)g=c[i],g&&(h=g.component,h&&h.onMouseEnter&&h.onMouseEnter(g.ctx,a)),i++;return Bc=c,!1}function Ha(){return 0===Object.keys(uc).length}function Ia(a){return-1===wc&&Ha()&&(wc=a.id,xc=Hb(),yc=a.x,zc=a.y,Ac=!1,Ga(a)),uc[a.id]=a.type,wc!==a.id&&(Ac=!0),!1}function Ja(a,b,c){return 0===a.type&&0===a.button&&null!=uc[a.id]&&(a.button=1,O("!PointerUp",a,b,c),a.button=0),wc===a.id?(Ga(a),Fa(yc,a.x,13)&&Fa(zc,a.y,13)||(Ac=!0)):Ha()&&Ga(a),!1}function Ka(a,b,c){if(delete uc[a.id],wc==a.id&&(Ga(a),wc=-1,1==a.type&&!Ac&&Hb()-xc<750)){O("!PointerCancel",a,b,c);var d=ta(pc,a)||null!=aa(c,pc,a),e=k()?800:500;return vc.push([a.x,a.y,Hb()+e,d?1:0]),d}return!1}function La(a){return delete uc[a.id],wc==a.id&&(wc=-1),!1}function Ma(a){for(var b=Hb(),c=0;c<vc.length;c++){var d=vc[c];if(d[2]<b)vc.splice(c,1),c--;else if(Fa(d[0],a.clientX,50)&&Fa(d[1],a.clientY,50))return vc.splice(c,1),d[3]&&ea(a),!0}return!1}function Na(a){return function(b,c,d){return(wc==b.id||Ha())&&(ta(a,b)||aa(d,a,b))?!0:!1}}function Oa(a){return a.which||a.button}function Pa(a){return function(b,c,d){var e=Oa(b)||1;if(1!==e)return!1;var f={x:b.clientX,y:b.clientY,button:e,shift:b.shiftKey,ctrl:b.ctrlKey,alt:b.altKey,meta:b.metaKey||!1};return ta(a,f)||aa(d,a,f)?(ea(b),!0):!1}}function Qa(a,b){var c=document.elementFromPoint(a,b),d=B(c);if(ua(d)){var e=Ba(a,b,c,d);d=e[1]}return d}function Ra(a,b,c){for(;c;){var d=c.style;if(d){var e=d.userSelect;if("none"===e)return ea(a),!0;if(e)break}c=c.parent}return!1}function Sa(){var a=document.hasFocus()?document.activeElement:null;if(a!==Gc){Gc=a;for(var b=A(Gc),c=0;c<Ic.length&&c<b.length&&Ic[c]===b[c];)c++;var d,e,f=Ic.length-1;for(f>=c&&(d=Ic[f],d&&(e=d.component,e&&e.onBlur&&e.onBlur(d.ctx)),f--);f>=c;)d=Ic[f],d&&(e=d.component,e&&e.onFocusOut&&e.onFocusOut(d.ctx)),f--;for(f=c;f+1<b.length;)d=b[f],d&&(e=d.component,e&&e.onFocusIn&&e.onFocusIn(d.ctx)),f++;f<b.length&&(d=b[f],d&&(e=d.component,e&&e.onFocus&&e.onFocus(d.ctx)),f++),Ic=b,Hc=0==Ic.length?null:Ic[Ic.length-1]}}function Ta(){setTimeout(Sa,10),Sa()}function Ua(){for(var a=0;a<Jc.length;a++)Jc[a]();return!1}function Va(){if(null==Pc){var a=document.body.style;Kc=a.cursor,Lc=a[Sc],a[Sc]="none",Pc=Y(Xa)}}function Wa(){var a="no-drop";if(0!==Nc.length){var b=Nc[0];if(b.beforeDrag)return"";if(null!=b.cursor)return b.cursor;if(b.system)return"";switch(b.operation){case 3:a="move";break;case 1:a="alias";break;case 2:a="copy"}}return a}function Xa(){return{component:Vc}}function Ya(a,b,c){var d=Xc[a.id];if(d&&d.cancelDnd(),a.button<=1){d=new Tc(a.id),d.startX=a.x,d.startY=a.y,d.lastX=a.x,d.lastY=a.y,d.overNode=c,$a(d,a);var e=aa(c,"onDragStart",d);if(e){var f=E(e.me);if(null==f)return d.destroy(),!1;d.started=!0;var g=f.getBoundingClientRect;if(g){var h=g.call(f);d.deltaX=h.left-a.x,d.deltaY=h.top-a.y}d.distanceToStart<=0&&(d.beforeDrag=!1,Za(c,d)),Va()}else d.destroy()}return!1}function Za(a,b){b.overNode=a,b.targetCtx=aa(a,"onDragOver",b),null==b.targetCtx&&(b.operation=0),ca("onDrag",b)}function $a(a,b){a.shift=b.shift,a.ctrl=b.ctrl,a.alt=b.alt,a.meta=b.meta,a.x=b.x,a.y=b.y}function _a(a,b,c){var d=Xc[a.id];if(!d)return!1;if(d.totalX=Math.abs(a.x-d.lastX),d.totalY=Math.abs(a.y-d.lastY),d.beforeDrag){if(d.totalX+d.totalY<=d.distanceToStart)return d.lastX=a.x,d.lastY=a.y,!1;d.beforeDrag=!1}return $a(d,a),Za(c,d),d.lastX=a.x,d.lastY=a.y,!0}function ab(a,b,c){var d=Xc[a.id];if(!d)return!1;if(!d.beforeDrag){$a(d,a),Za(c,d);var e=d.targetCtx;return e&&aa(e.me,"onDrop",d)?d.destroy():d.cancelDnd(),Fc(a.x,a.y),!0}return d.destroy(),!1}function bb(a){var b=Xc[a.id];return b?(b.beforeDrag?b.destroy():b.cancelDnd(),!1):!1}function cb(a,b){a.shift=b.shiftKey,a.ctrl=b.ctrlKey,a.alt=b.altKey,a.meta=b.metaKey,a.x=b.clientX,a.y=b.clientY,a.totalX=Math.abs(a.x-a.lastX),a.totalY=Math.abs(a.y-a.lastY);var c=Qa(a.x,a.y);Za(c,a),a.lastX=a.x,a.lastY=a.y}function db(a,b,c){var d=Oc;null!=d&&d.destroy();var e=Object.keys(Xc);if(e.length>0)d=Xc[e[0]],d.system=!0,Oc=d;else{var f=a.clientX,g=a.clientY;d=new Tc(-1),d.system=!0,Oc=d,d.x=f,d.y=g,d.lastX=f,d.lastY=g,d.startX=f,d.startY=g;var h=aa(c,"onDragStart",d);if(!h)return d.destroy(),!1;var i=E(h.me);if(null==i)return d.destroy(),!1;d.started=!0;var j=i.getBoundingClientRect;if(j){var k=j.call(i);d.deltaX=k.left-f,d.deltaY=k.top-g}Va()}d.beforeDrag=!1;var l=Yc[d.enabledOperations],m=a.dataTransfer;if(m.effectAllowed=l,m.setDragImage){var n=document.createElement("div");n.style.pointerEvents="none",m.setDragImage(n,0,0)}else{var o=a.target.style,p=o.opacity,q=o.width,r=o.height,s=o.padding;o.opacity="0",o.width="0",o.height="0",o.padding="0",window.setTimeout(function(){o.opacity=p,o.width=q,o.height=r,o.padding=s},0)}for(var t=d.data,u=Object.keys(t),v=0;v<u.length;v++)try{var w=u[v],x=t[w];"string"!=typeof x&&(x=JSON.stringify(x)),a.dataTransfer.setData(w,x)}catch(y){}return cb(d,a),!1}function eb(a,b){a.dataTransfer.dropEffect=["none","link","copy","move"][b]}function fb(a){var b=Oc;if(null==b){b=new Tc(-1),b.system=!0,Oc=b,b.x=a.clientX,b.y=a.clientY,b.startX=b.x,b.startY=b.y,b.local=!1;var c=a.dataTransfer,d=0;try{var e=c.effectAllowed}catch(f){}for(;7>d&&Yc[d]!==e;d++);b.enabledOperations=d;var g=c.types;if(g)for(var h=0;h<g.length;h++){var i=g[h];"text/plain"===i?i="Text":"text/uri-list"===i&&(i="Url"),b.data[i]=null}else void 0!==c.getData("Text")&&(b.data.Text=null)}return cb(b,a),eb(a,b.operation),0!=b.operation?(ea(a),!0):!1}function gb(a){var b=a.clientX,c=a.clientY,d=ha();return null!=Oc&&(0===b&&0===c||0>b||0>c||b>=d.width||c>=d.height)&&(Oc.x=0,Oc.y=0,Oc.operation=0,ca("onDrag",Oc)),!1}function hb(){return null!=Oc&&Oc.destroy(),!1}function ib(a){var b=Oc;if(null==b)return!1;if(b.x=a.clientX,b.y=a.clientY,!b.local)for(var c=Object.keys(b.data),d=a.dataTransfer,e=0;e<c.length;e++){var f,g=c[e];f="Files"===g?[].slice.call(d.files,0):d.getData(g),b.data[g]=f}cb(b,a);var h=b.targetCtx;return h&&aa(h.me,"onDrop",b)?(eb(a,b.operation),b.destroy(),ea(a)):b.cancelDnd(),!0}function jb(a){return ea(a),!0}function kb(a){return 0===Nc.length?!1:(ea(a),!0)}function lb(){return Zb(),!1}function mb(a){var b=fd.exec(a);if(!b)return $c[a].name;var c=b.index;return $c[a.substring(0,c)].name+a.substring(c)}function nb(a,b){var c="";if(a)if(ub(a))for(var d=0;d<a.length;d++)d>0&&(c=","),c="."+mb(a[d])+"."+b;else c="."+mb(a)+"."+b;else c="."+b;return c}function ob(a,b,c,d){if("string"==typeof c){var e=$c[c];if(void 0===e)throw new Error("uknown style "+c);ob(a,b,e.style,e.pseudo)}else if("function"==typeof c)c(a,b);else if(ub(c))for(var g=0;g<c.length;g++)ob(a,b,c[g],void 0);else if("object"==typeof c)for(var h in c)if(Object.prototype.hasOwnProperty.call(c,h)){var i=c[h];"function"==typeof i&&(i=i(a,h)),a[h]=i}if(null!=d&&null!=b)for(var j in d){var k=b[j];void 0===k&&(k=f(),b[j]=k),ob(k,void 0,d[j],void 0)}}function pb(){if(bd){for(var a=0;a<_c.length;a++){var b=_c[a],c=ad[b.url];if(null!=c){var d=b.color();if(d!==b.lastColor){b.lastColor=d,null==b.width&&(b.width=c.width),null==b.height&&(b.height=c.height);var e=sb(c,d,b.width,b.height,b.left,b.top),g=$c[b.styleid];g.style={backgroundImage:"url("+e+")",width:b.width,height:b.height}}}}var h="";for(var i in $c){var j=$c[i],k=j.parent,m=j.name,n=f(),o=f();ob(void 0,o,void 0,j.pseudo),ob(n,o,j.style,void 0);var p=null;n.pointerEvents&&(p=f(),p.pointerEvents=n.pointerEvents),dd&&n.userSelect&&(null==p&&(p=f()),p.userSelect=n.userSelect,delete n.userSelect),j.inlStyle=p,l(n);var q=rb(n);q.length>0&&(h+=nb(k,m)+" {"+q+"}\n");for(var r in o){var s=o[r];l(s),h=nb(k,m+":"+r)+" {"+rb(s)+"}\n"}}var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=h:t.appendChild(document.createTextNode(h));var u=document.head||document.getElementsByTagName("head")[0];null!=cd?u.replaceChild(t,cd):u.appendChild(t),cd=t,bd=!1}ed()}function qb(a){return"cssFloat"===a?"float":a.replace(gd,"-$1").toLowerCase().replace(hd,"-ms-")}function rb(a){var b="";for(var c in a){var d=a[c];void 0!==d&&(b=qb(c)+":"+(""===d?'""':d)+";")}return b=b.slice(0,-1)}function sb(a,b,c,d,e,f){var g=document.createElement("canvas");g.width=c,g.height=d;var h=g.getContext("2d");h.drawImage(a,-e,-f);var i,j,k,l,m=h.getImageData(0,0,c,d),n=m.data,o=id.exec(b);if(o?(i=parseInt(o[1],10),j=parseInt(o[2],10),k=parseInt(o[3],10),l=Math.round(255*parseFloat(o[4]))):(i=parseInt(b.substr(1,2),16),j=parseInt(b.substr(3,2),16),k=parseInt(b.substr(5,2),16),l=parseInt(b.substr(7,2),16)||255),255===l)for(var p=0;p<n.length;p+=4){var q=n[p];q===n[p+1]&&q===n[p+2]&&(128===q||n[p+3]<255&&q>112)&&(n[p]=i,n[p+1]=j,n[p+2]=k)}else for(var p=0;p<n.length;p+=4){var q=n[p],r=n[p+3];q===n[p+1]&&q===n[p+2]&&(128===q||255>r&&q>112)&&(255===r?(n[p]=i,n[p+1]=j,n[p+2]=k,n[p+3]=l):(r*=1/255,n[p]=Math.round(i*r),n[p+1]=Math.round(j*r),n[p+2]=Math.round(k*r),n[p+3]=Math.round(l*r)))}return h.putImageData(m,0,0),g.toDataURL()}function tb(a){var b=a.render;return a.render=b?function(c,d,e){return d.tag="div",b.call(a,c,d,e)}:function(a,b){b.tag="div"},function(b,c){return void 0!==c&&(b.children=c),{data:b,component:a}}}var ub=Array.isArray,vb="textContent"in b(""),wb=!1,xb=[],yb=[],zb=function(a,b,c,d){c!==d&&(a.value=c)},Ab=["Webkit","Moz","ms","O"],Bb=document.createElement("div").style,Cb=f(),Db={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexNegative:!0,flexPositive:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,strokeDashoffset:!0,widows:!0,zIndex:!0,zoom:!0},Eb=f(),Fb=!1,Gb=window.requestAnimationFrame;Gb&&Gb(function(a){a===+a&&(Fb=!0)});for(var Hb=Date.now||function(){return(new Date).getTime()},Ib=Hb(),Jb=0,Kb="$invalidated",Lb="$deepness",Mb=!0,Nb=!1,Ob=0,Pb=0,Qb=0,Rb=0,Sb={},Tb={},Ub=!1,Vb=function(){},Wb=function(){},Xb=!1,Yb=!1,Zb=function(a,b){Mb||(null!=a?(void 0==b&&(b=1e6),a[Kb]!==Pb+1?(a[Kb]=Pb+1,a[Lb]=b):b>a[Lb]&&(a[Lb]=b)):Mb=!0,Nb||(Nb=!0,M(V)))},$b=0,_b=X,ac=null,bc=[[414,800,900],[736,1280,1440]],cc=["resize","orientationchange"],dc=0;dc<cc.length;dc++)N(cc[dc],10,ga);var ec=window.document.documentElement,fc=function(){function a(){var a=b;b=[];for(var c=0,d=a.length;d>c;c++)a[c]()}var b=[],c="onreadystatechange";if(window.MutationObserver){var d=document.createElement("div");return new MutationObserver(a).observe(d,{attributes:!0}),function(a){b.length||d.setAttribute("yes","no"),b.push(a)}}if(!window.setImmediate&&window.postMessage&&window.addEventListener){var e="basap"+Math.random(),f=!1,g=function(b){b.source===window&&b.data===e&&(f=!1,a())};return window.addEventListener("message",g,!1),function(a){b.push(a),f||(f=!0,window.postMessage(e,"*"))}}if(!window.setImmediate&&c in document.createElement("script")){var h;return function(d){b.push(d),h||(h=document.createElement("script"),h[c]=function(){h[c]=null,h.parentNode.removeChild(h),h=null,a()},document.body.appendChild(h))}}var i,j=window.setImmediate||setTimeout;return function(c){b.push(c),i||(i=j(function(){i=void 0,a()},0))}}();if(function(){function a(a,b){return function(){a.apply(b,arguments)}}function b(a){var b=this;return null===this.s?void this.d.push(a):void fc(function(){var c=b.s?a[0]:a[1];if(null==c)return void(b.s?a[2]:a[3])(b.v);var d;try{d=c(b.v)}catch(e){return void a[3](e)}a[2](d)})}function c(){for(var a=0,c=this.d.length;c>a;a++)b.call(this,this.d[a]);this.d=null}function d(a){this.s=!1,this.v=a,c.call(this)}function e(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}function f(b){try{if(b===this)throw new TypeError("Promise selfresolve");if(Object(b)===b){var g=b.then;if("function"==typeof g)return void e(a(g,b),a(f,this),a(d,this))}this.s=!0,this.v=b,c.call(this)}catch(h){d.call(this,h)}}function g(b){this.s=null,this.v=null,this.d=[],e(b,a(f,this),a(d,this))}window.Promise||(g.prototype.then=function(a,c){var d=this;return new g(function(e,f){b.call(d,[a,c,e,f])})},g.all=function(){var a=[].slice.call(1===arguments.length&&ub(arguments[0])?arguments[0]:arguments);return new g(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return void b(a);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},g.resolve=function(a){return a&&"object"==typeof a&&a.constructor===g?a:new g(function(b){b(a)})},g.reject=function(a){return new g(function(b,c){c(a)})},g.race=function(a){return new g(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},window.Promise=g)}(),9===k()){var gc=/^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;fa("background",function(a,b,c){var d=gc.exec(b);if(null!=d){var e,f=d[1],g=d[2],h=d[3];switch(f){case"top":f="0",e=g,g=h,h=e;break;case"bottom":f="0";break;case"left":f="1",e=g,g=h,h=e;break;case"right":f="1";break;default:return}a[c]="none",ia(a,"progid:DXImageTransform.Microsoft.gradient(startColorstr='"+g+"',endColorstr='"+h+"', gradientType='"+f+"')")}})}else{var hc=document.createElement("div").style;if(hc.cssText="background:-webkit-linear-gradient(top,red,red)",hc.background.length>0){var ic=/^(?:repeating\-)?(?:linear|radial)\-gradient/gi,jc={top:"bottom",bottom:"top",left:"right",right:"left"};fa("background",ja)}}for(var kc="b$value",lc="value",mc=e(function(a,b,c,d){var e=a.tagName,f="SELECT"===e,g="INPUT"===e||"TEXTAREA"===e;if(!g&&!f)return void mc(a,b,c,d);void 0===b.ctx&&(b.ctx={}),void 0===d&&(b.ctx[kc]=c);var h=f&&a.multiple,i=!1;if(h){var j=a.options,k=na(j);if(!la(c,k))if(void 0===d||la(k,d)||!la(c,b.ctx[kc])){for(var l=0;l<j.length;l++)j[l].selected=ma(c,j[l].value);k=na(j),la(k,c)&&(i=!0)}else i=!0}else if(g||f)if(g&&ka(a)){var m=a.checked;c!==m&&(void 0===d||m===d||c!==b.ctx[kc]?a.checked=c:i=!0)}else{var n=f&&a.size<2,o=a[lc];c!==o&&(void 0===d||o===d||c!==b.ctx[kc]?f?(""===c?a.selectedIndex=n?0:-1:a[lc]=c,(""!==c||n)&&(o=a[lc],c!==o&&(i=!0))):a[lc]=c:i=!0)}i?oa(null,a,b):b.ctx[kc]=c}),cc=["input","cut","paste","keydown","keypress","keyup","click","change"],dc=0;dc<cc.length;dc++)N(cc[dc],10,oa);N("keydown",50,qa),N("keyup",50,ra),N("keypress",50,sa);var nc,dc,oc=null,pc="onClick",qc=["PointerDown","PointerMove","PointerUp","PointerCancel"];if(k()&&k()<11){var rc=["click","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","mousedown","mousemove","mouseout","mouseover","mouseup","mousewheel","scroll","wheel"];for(dc=0;dc<rc.length;++dc)N(rc[dc],1,ya)}if(void 0!==window.onpointerdown)for(dc=0;4>dc;dc++){var sc=qc[dc];za(sc.toLowerCase(),Ca(sc))}else if(void 0!==window.onmspointerdown)for(dc=0;4>dc;dc++){var sc=qc[dc];za("MS"+sc,Ca(sc))}else void 0!==window.ontouchstart&&(za("touchstart",Da(qc[0])),za("touchmove",Da(qc[1])),za("touchend",Da(qc[2])),za("touchcancel",Da(qc[3]))),za("mousedown",Ea(qc[0])),za("mousemove",Ea(qc[1])),za("mouseup",Ea(qc[2]));for(var tc=0;4>tc;tc++)!function(a){var b="on"+a;N("!"+a,50,function(a,c,d){return ta(b,a)||null!=aa(d,b,a)})}(qc[tc]);for(var uc=f(),vc=[],wc=-1,xc=0,yc=0,zc=0,Ac=!1,Bc=[],Cc=["!PointerDown","!PointerMove","!PointerUp","!PointerCancel","click"],Dc=[Ia,Ja,Ka,La,Ma],dc=0;5>dc;dc++)N(Cc[dc],3,Dc[dc]);for(var Ec=["Down","Move","Up","Up"],dc=0;4>dc;dc++)N(Cc[dc],80,Na("onMouse"+Ec[dc]));za("selectstart",Ra),za("click",Pa(pc)),za("dblclick",Pa("onDoubleClick"));for(var Fc=function(a,b){var c=k()?800:500;vc.push([a,b,Hb()+c,1])},Gc=null,Hc=null,Ic=[],cc=["focus","blur","keydown","keyup","keypress","mousedown","mouseup","mousemove","touchstart","touchend"],dc=0;dc<cc.length;dc++)N(cc[dc],50,k()?Ta:Sa);var Jc=[];N("^scroll",10,Ua);var Kc,Lc,Mc=0,Nc=[],Oc=null,Pc=null,Qc={userSelect:""};l(Qc);var Rc=Object.keys(Qc),Sc=Rc[Rc.length-1],Tc=function(a){
this.id=++Mc,this.pointerid=a,this.enabledOperations=7,this.operation=0,this.started=!1,this.beforeDrag=!0,this.local=!0,this.system=!1,this.ended=!1,this.cursor=null,this.overNode=null,this.targetCtx=null,this.dragView=null,this.startX=0,this.startY=0,this.distanceToStart=10,this.x=0,this.y=0,this.deltaX=0,this.deltaY=0,this.totalX=0,this.totalY=0,this.lastX=0,this.lastY=0,this.shift=!1,this.ctrl=!1,this.alt=!1,this.meta=!1,this.data=f(),a>=0&&(Xc[a]=this),Nc.push(this)},Uc={render:function(a,b){var c=a.data;b.tag="div",b.style={position:"absolute",left:c.x,top:c.y},b.children=c.dragView(c)}},Vc={render:function(a,b){for(var c=[],d=0;d<Nc.length;d++){var e=Nc[d];e.beforeDrag||null==e.dragView||0==e.x&&0==e.y||c.push({key:""+e.id,data:e,component:Uc})}b.tag="div",b.style={position:"fixed",pointerEvents:"none",userSelect:"none",left:0,top:0,right:0,bottom:0};var f=document.body.style,g=Wa();g&&f.cursor!==g&&(f.cursor=g),b.children=c},onDrag:function(a){return Zb(a),!1}},Wc=Tc.prototype;Wc.setOperation=function(a){this.operation=a},Wc.setDragNodeView=function(a){this.dragView=a},Wc.addData=function(a,b){return this.data[a]=b,!0},Wc.listData=function(){return Object.keys(this.data)},Wc.hasData=function(a){return void 0!==this.data[a]},Wc.getData=function(a){return this.data[a]},Wc.setEnabledOps=function(a){this.enabledOperations=a},Wc.cancelDnd=function(){Za(null,this),this.destroy()},Wc.destroy=function(){this.ended=!0,this.started&&ca("onDragEnd",this),delete Xc[this.pointerid];for(var a=0;a<Nc.length;a++)if(Nc[a]===this){Nc.splice(a,1);break}if(Oc===this&&(Oc=null),0===Nc.length&&null!=Pc){Z(Pc),Pc=null;var b=document.body.style;b.cursor=Kc,b[Sc]=Lc}};var Xc=f(),Yc=["none","link","copy","copyLink","move","linkMove","copyMove","all"];N("!PointerDown",4,Ya),N("!PointerMove",4,_a),N("!PointerUp",4,ab),N("!PointerCancel",4,bb),N("selectstart",4,kb),N("dragstart",5,db),N("dragover",5,fb),N("dragend",5,hb),N("drag",5,gb),N("drop",5,ib),N("dragenter",5,jb),N("dragleave",5,jb);var Zc=function(){return Nc};N("hashchange",10,lb);var $c=(f(),f()),_c=(f(),f(),[]),ad=f(),bd=!1,cd=null,dd=9===k(),ed=S(pb),fd=/\:|\ |\>/,gd=/([A-Z])/g,hd=/^ms-/,id=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;window.b||(window.b={deref:B,getRoots:$,setInvalidate:W,setAfterFrame:T,setBeforeFrame:S,getDnds:Zc});var jd=tb({render:function(a,b){b.children=[{tag:"h1",children:"Hello World!"},{tag:"p",children:["See examples on ",{tag:"a",attrs:{href:"https://github.com/Bobris/Bobril"},children:"Bobril GitHub pages"},"!"]}]}});_(function(){return jd({})})}();