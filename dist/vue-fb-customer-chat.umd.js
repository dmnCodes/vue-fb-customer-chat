!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).VueFbCustomerChat=t()}(this,function(){"use strict";function n(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,o;t=i,o=r[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return i}var o="en_us";function i(t){return new Promise(function(e){window.FB?e(window.FB):function(e){var c=e.locale?e.locale:o;return new Promise(function(r,u){!function(e,t,n){var o=e.getElementsByTagName(t)[0];if(!e.getElementById(n)){var i=e.createElement(t);i.id=n,i.src="https://connect.facebook.net/"+c+"/sdk/xfbml.customerchat.js",o.parentNode.insertBefore(i,o),i.onload=function(){r()},i.onerror=function(){u()}}}(document,"script","facebook-jssdk")})}(t).then(function(){(function(t){return new Promise(function(e){window.fbAsyncInit=function(){t=n({},{cookie:!0,xfbml:!0,version:"v5.0"},t),window.FB.init(t),e()}})})(t).then(function(){e(window.FB)})})})}var e={install:function(e,t){e.fbCustomerChat={setOptions:function(e){t=n({},t,e)}},Object.defineProperties(e.prototype,{$fbCustomerChat:{get:function(){return e.fbCustomerChat}}}),e.mixin({mounted:function(){this.$parent||i(t).then(function(){t.page_id&&function(e){var t=document.createElement("div");t.setAttribute("class","fb-customerchat"),t.setAttribute("attribution","setup_tool"),Object.entries(e).forEach(function(e){t.setAttribute(e[0],e[1])}),document.body.appendChild(t)}(t)})}})}};return"undefined"!=typeof window&&window.Vue&&(window.VueFbCustomerChat=e),e});
