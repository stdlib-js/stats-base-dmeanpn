"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=i(function(z,p){
var w=require('@stdlib/blas-ext-base-dsumpw/dist'),f=require('@stdlib/blas-ext-base-dapxsumpw/dist');function j(r,e,a){var u,n;return r<=0?NaN:r===1||a===0?e[0]:(u=w(r,e,a)/r,n=f(r,-u,e,a)/r,u+n)}p.exports=j
});var q=i(function(A,m){
var l=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray,x=require('@stdlib/blas-ext-base-dapxsumpw/dist').ndarray;function R(r,e,a,u){var n,v;return r<=0?NaN:r===1||a===0?e[u]:(n=l(r,e,a,u)/r,v=x(r,-n,e,a,u)/r,n+v)}m.exports=R
});var o=i(function(B,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=s(),E=q();_(d,"ndarray",E);c.exports=d
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=o(),t,y=b(O(__dirname,"./native.js"));g(y)?t=h:t=y;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
