"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(z,p){
var f=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray,j=require('@stdlib/blas-ext-base-dapxsumpw/dist').ndarray;function x(r,e,a,n){var i,s;return r<=0?NaN:r===1||a===0?e[n]:(i=f(r,e,a,n)/r,s=j(r,-i,e,a,n)/r,i+s)}p.exports=x
});var d=u(function(A,q){
var l=require('@stdlib/strided-base-stride2offset/dist'),w=t();function R(r,e,a){return w(r,e,a,l(r,a))}q.exports=R
});var c=u(function(B,o){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=d(),E=t();_(m,"ndarray",E);o.exports=m
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=c(),v,y=b(O(__dirname,"./native.js"));g(y)?v=h:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
