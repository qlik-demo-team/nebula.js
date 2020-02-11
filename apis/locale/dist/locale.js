/*
* @nebula.js/locale v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self).locale=e()}(this,(function(){"use strict";var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t="string"==typeof e||"number"==typeof e?[e]:e;return n.replace(/\{(\d+)\}/g,(function(n,e){return void 0!==t[e]?t[e]:n}))};function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.initial,i=void 0===t?"en-US":t,o=e.fallback,r=void 0===o?"en-US":o,a={},f=i,d={language:function(n){return n&&(f=n),f},add:function(n){var e=n.id,t=n.locale;Object.keys(t).forEach((function(n){a[n]||(a[n]={}),a[n][e]=t[n]}))},get:function(e,t){var i;return i=a[f]&&void 0!==a[f][e]?a[f][e]:a[r]&&void 0!==a[r][e]?a[r][e]:e,void 0!==t?n(i,t):i}};return d}return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.initial,i=void 0===t?"en-US":t,o=n.fallback,r=void 0===o?"en-US":o,a=e({initial:i,fallback:r});return{translator:a}}}));
