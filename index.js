'use strict';

var _ = require('lodash');

module.exports = function (value) {
  if (value === void 0 || value === null || _.isNaN(value)) {
    return [];
  } else if (_.isArray(value)) {
    return value;
  } else {
    return [value];
  }
};
