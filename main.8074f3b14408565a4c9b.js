(()=>{"use strict";var e=!1,t=!1,n=document.querySelector(".popup-bg"),o=document.querySelector(".popup"),i=document.querySelector(".popup__button-not-now"),c=document.querySelector(".popup-bg-desktop");console.log(c);var l=function(){t=!0,window.innerWidth<1280?(n.classList.remove("hidden"),setTimeout((function(){n.classList.remove("hidden-popup"),o.classList.remove("hide")}),1),e=!0,setTimeout((function(){return t=!1}),1e3)):(c.classList.remove("hidden"),setTimeout((function(){c.classList.add("show")}),0),setTimeout((function(){return t=!1}),500))};c.addEventListener("click",(function(n){event.target.closest(".popup-desktop__wrapper")||(t=!0,c.classList.remove("show"),setTimeout((function(){c.classList.add("hidden"),e=!1,t=!1}),500))})),window.innerWidth<1280&&l(),window.addEventListener("click",(function(n){n.target===i||n.target.closest(".swiper")||e||t||l()})),i.addEventListener("click",(function(){t||(t=!0,n.classList.add("hidden-popup"),o.classList.add("hide"),setTimeout((function(){e=!1,n.classList.add("hidden"),t=!1}),1e3))}));var s=function(e){for(var t=e[0],n=0,o=1;o<e.length;o++)e[o]<t&&(t=e[o],n=o);return{high:t,numberColumn:n}},r=function(e){for(var t=e[0],n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t},d=function(e){var t,n="grid",o=8,i=(document.querySelector(".".concat(n)).clientWidth-o)/2,c=2,l=document.querySelector("body");e>=1280&&("product-page"!==l.className&&"selection-page"!==l.className&&"profile"!==l.className&&(n="grid-desktop"),i=236,o=16,c=5,e<=1700&&(i=177,o=12));var d=document.querySelector(".".concat(n)),a=Array.from(document.querySelectorAll(".".concat(n," .grid-item__container")));if(d.style.display="block",1===(null==a?void 0:a.length))return a[0].parentElement.style.position="absolute",a[0].parentElement.style.top="0px",a[0].parentElement.style.left="0px",void(d.style.height="".concat(a[0].clientHeight,"px"));for(var u=0,p=[],m=0;m<c;m++)p.push(null===(t=a[m])||void 0===t?void 0:t.clientHeight);if((null==a?void 0:a.length)>1)for(m=1;m<a.length;m++){if(u=Math.floor(m/c),a[m].parentElement.style.position="absolute",0===u)a[m].parentElement.style.top="0px",a[m].parentElement.style.left="".concat((i+o)*(m%c),"px"),console.log("".concat((i+o)*(m%c),"px"),i,o,m,c);else{var h=s(p),f=h.high,v=h.numberColumn;a[m].parentElement.style.top="".concat(f+o,"px"),a[m].parentElement.style.left="".concat((i+o)*v,"px"),console.log(a[m],"".concat(f+o,"px"),"".concat((i+o)*v,"px"),i,o,v),p[v]+=o+a[m].clientHeight}m===a.length-1&&(d.style.height="".concat(r(p),"px"),d.style.overflow="visible")}};document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){d(window.innerWidth)}),300)})),window.addEventListener("resize",(function(){d(window.innerWidth)}))})();
//# sourceMappingURL=main.8074f3b14408565a4c9b.js.map