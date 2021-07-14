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
	return polyfill;
};
