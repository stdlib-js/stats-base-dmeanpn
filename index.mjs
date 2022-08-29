// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e,{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumpw@v0.0.10-esm/index.mjs";import t,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dapxsumpw@esm/index.mjs";function a(s,r,n){var a;return s<=0?NaN:1===s||0===n?r[0]:(a=e(s,r,n)/s)+t(s,-a,r,n)/s}function d(s,e,t,a){var d;return s<=0?NaN:1===s||0===t?e[a]:(d=r(s,e,t,a)/s)+n(s,-d,e,t,a)/s}s(a,"ndarray",d);export{a as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
