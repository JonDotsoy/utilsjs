
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.mapAsync = function mapAsync(arr, fn) {
  return Promise.all(arr.map(fn));
};

exports.default = exports.mapAsync;
