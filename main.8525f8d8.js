parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var n={second:60,minute:60,hour:24,day:5};function t(r){var i=document.getElementById(r),a=i.children[0].children[0],d=a.children[0].children[0],s=i.children[0].children[1].children[0].children[0],o=i.children[1].children[0].children[0].children[0],l=i.children[1].children[1],c=l.children[0].children[0];if(a.style.transform="rotateX(180deg)",l.style.transform="rotateX(0deg)",d.innerText-1<0){var h=e(r);h&&t(h)}setTimeout(function(){a.style.transition="transform 0s",l.style.transition="transform 0s"},800),setTimeout(function(){d.innerText-1>=0?(d.innerText=String(d.innerText-1).padStart(2,"0"),o.innerText=String(o.innerText-1).padStart(2,"0")):(d.innerText=String(n[r]-1).padStart(2,"0"),o.innerText=String(n[r]-1).padStart(2,"0")),a.style.transform="rotateX(0deg)",l.style.transform="rotateX(180deg)"},850),setTimeout(function(){a.style.transition="transform 1s ease-in",l.style.transition="transform 1s ease-in",s.innerText-1>=0?(s.innerText=String(d.innerText-1).padStart(2,"0"),c.innerText=String(o.innerText-1).padStart(2,"0")):(s.innerText=String(n[r]-1).padStart(2,"0"),c.innerText=String(n[r]-1).padStart(2,"0"))},900)}function e(n){var t=["second","minute","hour","day"],e=t.indexOf(n);return e<t.length-1?t[e+1]:null}setInterval(function(){t("second")},1e3);
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.8525f8d8.js.map