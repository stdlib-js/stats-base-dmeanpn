// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumpw@v0.2.2-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dapxsumpw@v0.2.2-esm/index.mjs";function d(s,e,d,n){var i;return s<=0?NaN:1===s||0===d?e[n]:(i=t(s,e,d,n)/s)+r(s,-i,e,d,n)/s}function n(s,t,r){return d(s,t,r,e(s,r))}s(n,"ndarray",d);export{n as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
