'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimFindLastIndex() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ findLastIndex: polyfill },
		{ findLastIndex: function () { return Array.prototype.findLastIndex !== polyfill; } }
	);
	if (typeof Symbol === 'function' && typeof Symbol.unscopables === 'symbol') {
		Array.prototype[Symbol.unscopables].findLastIndex = true;
	}
	return polyfill;
};
