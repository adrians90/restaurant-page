(()=>{var t={452:()=>{},477:()=>{},313:()=>{}},e={};function n(a){var c=e[a];if(void 0!==c)return c.exports;var d=e[a]={exports:{}};return t[a](d,d.exports,n),d.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(477),e=n.n(t),a=n(313),c=n.n(a),d=n(452),o=n.n(d);function r(t){document.querySelectorAll(".nav-btn").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");return n.classList.add("rest-name"),n.textContent="Adrian's pizzeria",t.appendChild(n),t.appendChild(function(){const t=document.createElement("nav"),n=document.createElement("button");n.classList.add("nav-btn"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(r(n),e()())}));const a=document.createElement("button");a.classList.add("nav-btn"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(r(a),c()())}));const d=document.createElement("button");return d.classList.add("nav-btn"),d.textContent="Contact",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(r(d),o()())})),t.appendChild(n),t.appendChild(a),t.appendChild(d),t}()),t}()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");return e.textContent=`Copyright ${(new Date).getFullYear()} Adrian Sandu`,t.appendChild(e),t}()),r(document.querySelector(".nav-btn")),e()()}()})()})();