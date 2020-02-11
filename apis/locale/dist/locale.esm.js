/*
* @nebula.js/locale v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t="string"==typeof i||"number"==typeof i?[i]:i;return n.replace(/\{(\d+)\}/g,(function(n,i){return void 0!==t[i]?t[i]:n}))};function i(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.initial,e=void 0===t?"en-US":t,o=i.fallback,r=void 0===o?"en-US":o,a={},l=e,v={language:function(n){return n&&(l=n),l},add:function(n){var i=n.id,t=n.locale;Object.keys(t).forEach((function(n){a[n]||(a[n]={}),a[n][i]=t[n]}))},get:function(i,t){var e;return e=a[l]&&void 0!==a[l][i]?a[l][i]:a[r]&&void 0!==a[r][i]?a[r][i]:i,void 0!==t?n(e,t):e}};return v}export default function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.initial,e=void 0===t?"en-US":t,o=n.fallback,r=void 0===o?"en-US":o,a=i({initial:e,fallback:r});return{translator:a}}
