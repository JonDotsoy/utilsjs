'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.filterAsync = function filterAsync(arr, fn) {
  return new Promise(function (resolve, reject) {
    Promise.all(arr.map(fn)).then(function (results) {
      return arr.filter(function (e, i, c) {
        return results[i];
      });
    }).then(resolve).catch(reject);
  });
};

exports.default = exports.filterAsync;
