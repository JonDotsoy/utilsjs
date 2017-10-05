'use strict';

var _require = require('.'),
    mapAsync = _require.mapAsync;

Array.prototype.mapAsync = Array.prototype.mapAsync || function (fn) {
  return mapAsync(this, fn);
};
