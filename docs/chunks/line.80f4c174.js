import{a5 as n,I as t}from"./data.4670e6e8.js";import{a as u,c as e}from"./util.a1e614b1.js";function o(n){return n[0]}function r(n){return n[1]}function l(l,f){var i=e(!0),c=null,a=n,p=null;function s(n){var e,o,r,s=(n=u(n)).length,d=!1;for(null==c&&(p=a(r=t())),e=0;e<=s;++e)!(e<s&&i(o=n[e],e,n))===d&&((d=!d)?p.lineStart():p.lineEnd()),d&&p.point(+l(o,e,n),+f(o,e,n));if(r)return p=null,r+""||null}return l="function"==typeof l?l:void 0===l?o:e(l),f="function"==typeof f?f:void 0===f?r:e(f),s.x=function(n){return arguments.length?(l="function"==typeof n?n:e(+n),s):l},s.y=function(n){return arguments.length?(f="function"==typeof n?n:e(+n),s):f},s.defined=function(n){return arguments.length?(i="function"==typeof n?n:e(!!n),s):i},s.curve=function(n){return arguments.length?(a=n,null!=c&&(p=a(c)),s):a},s.context=function(n){return arguments.length?(null==n?c=p=null:p=a(c=n),s):c},s}export{l,o as x,r as y};