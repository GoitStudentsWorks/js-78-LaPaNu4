!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("6JpON");var r=document.getElementById("dropdownMenuLibrary"),l=document.querySelector(".dropdown-toggle-library"),i=document.querySelectorAll(".dropdown-item-library");function d(e){var t=e.target;i.forEach((function(e){e.classList.remove("dropdown-item-library-color")})),t.classList.add("dropdown-item-library-color"),l.textContent=t.textContent,l.classList.toggle("rotated"),r.style.display="none"}l.addEventListener("click",(function(){"none"===r.style.display||""===r.style.display?(r.style.display="block",l.classList.toggle("rotated")):r.style.display="none"})),i.forEach((function(e){e.addEventListener("click",d)}))}();
//# sourceMappingURL=library.20537acf.js.map
