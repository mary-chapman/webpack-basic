/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//for the small image 
var imageSm = document.createElement('img');
imageSm.src = _small2.default;
document.body.appendChild(imageSm);

//for the large image
var imageBig = document.createElement('img');
imageBig.src = _big2.default;
document.body.appendChild(imageBig);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77e5f2f94a9d9c7079e223a36b080ae7.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
//since code doesn't need to be executed, can simply import code

console.log(total);

/***/ })
/******/ ]);