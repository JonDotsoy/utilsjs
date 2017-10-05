'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.filterAsync = function filterAsync(arr, fn) {
  return Promise.all(arr.map(fn)).then(function (results) {
    return arr.filter(function (e, i, c) {
      return results[i];
    });
  });
};

exports.default = exports.filterAsync;
