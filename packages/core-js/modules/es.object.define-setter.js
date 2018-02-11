'use strict';
var toObject = require('core-js-internals/to-object');
var aFunction = require('core-js-internals/a-function');
var definePropertyModule = require('../internals/object-define-property');

// `Object.prototype.__defineSetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__defineSetter__
if (require('core-js-internals/descriptors')) {
  require('../internals/export')({ target: 'Object', proto: true, forced: require('../internals/object-forced-pam') }, {
    __defineSetter__: function __defineSetter__(P, setter) {
      definePropertyModule.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
    }
  });
}
