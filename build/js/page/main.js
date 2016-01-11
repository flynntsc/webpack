webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _m = __webpack_require__(2);

	var _m2 = _interopRequireDefault(_m);

	var _m3 = __webpack_require__(3);

	var _m4 = _interopRequireDefault(_m3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.info('a.js');

	console.info('n1 is' + _m2.default);
	console.info('n2 is' + _m4.default);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	console.info('m-1.js');
	exports.default = 11;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	console.info('m-2.js');
	exports.default = 22;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _m = __webpack_require__(2);

	var _m2 = _interopRequireDefault(_m);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.info('b.js');

	console.info('b.n1 is' + _m2.default);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _m = __webpack_require__(2);

	var _m2 = _interopRequireDefault(_m);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.info('c.js');

	// n1 = n1 + 2;
	console.info('c.n1 is' + _m2.default);

/***/ }
]);