'use strict';

var _require = require('.'),
    filterAsync = _require.filterAsync;

Array.prototype.filterAsync = function (fn) {
  return filterAsync(this, fn);
};
