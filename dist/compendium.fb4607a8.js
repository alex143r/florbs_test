parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wWPn":[function(require,module,exports) {
function e(e,t,n,r,o,c,u){try{var a=e[c](u),i=a.value}catch(l){return void n(l)}a.done?t(i):Promise.resolve(i).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,c){var u=t.apply(n,r);function a(t){e(u,o,c,a,i,"next",t)}function i(t){e(u,o,c,a,i,"throw",t)}a(void 0)})}}document.addEventListener("DOMContentLoaded",c);var n,r="http://www.ddalby.dk/florbs/wordpress/wp-json/wp/v2/florbs",o="all";function c(){u()}function u(){return a.apply(this,arguments)}function a(){return(a=t(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i();case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function i(){var e=document.querySelector(".compendium"),t=document.querySelector("template");e.innerHTML="",n.forEach(function(n){var r=t.cloneNode(!0).content;r.querySelector(".florb-name").textContent=n.title.rendered,r.querySelector(".florb-img").src=n.image.guid,r.querySelector(".florb-img").alt=n.title.rendered,r.querySelector(".florb-phrase").textContent=n.phrase,e.appendChild(r)})}
},{}]},{},["wWPn"], null)
//# sourceMappingURL=compendium.fb4607a8.js.map