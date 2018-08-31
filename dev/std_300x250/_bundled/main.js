(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _handwrite = require('handwrite');

var _handwrite2 = _interopRequireDefault(_handwrite);

TweenLite.defaultEase = Power3.easeInOut;

function writer(points) {
    var image = document.getElementById("cta_O");
    var canvas = document.getElementById("canvas");

    canvas.width = image.width;
    canvas.height = image.height;
    var handwrite = new _handwrite2["default"](canvas, image);

    var options = {
        speed: 5,
        brushSize: 5,
        repeat: 0,
        cleanUpWhenDone: false,
        callback: function callback() {
            // console.log('sdlkfjs')
        },
        cleanFromBehind: false
    };
    handwrite.draw(points, options);
}

function masker() {
    var maskerList = {};
    var maskerListDOM = document.querySelectorAll(".masker");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = maskerListDOM.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var image = item[1];
            maskerList[image.id] = image;

            maskerItem(image);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return maskerList;
}

function maskerItem(image) {
    var width = image.width;
    var height = image.height;

    var top = 0;
    var right = width;
    var bottom = height;
    var left = 0;
    TweenMax.set(image, { clip: top + "px, " + right + "px, " + bottom + "px, " + left + "px" });
}

exports.writer = writer;
exports.masker = masker;

},{"handwrite":3}],2:[function(require,module,exports){
"use strict";

var _commonJsProline = require("../../_common/js/proline");

var points = [{ "x": 378, "y": 51 }, { "x": 377, "y": 53 }, { "x": 377, "y": 54 }, { "x": 376, "y": 57 }, { "x": 375, "y": 60 }, { "x": 372, "y": 66 }, { "x": 372, "y": 68 }, { "x": 371, "y": 70 }, { "x": 370, "y": 73 }, { "x": 369, "y": 76 }, { "x": 368, "y": 78 }, { "x": 367, "y": 80 }, { "x": 367, "y": 82 }, { "x": 366, "y": 85 }, { "x": 364, "y": 87 }, { "x": 362, "y": 90 }, { "x": 361, "y": 92 }, { "x": 359, "y": 94 }, { "x": 358, "y": 97 }, { "x": 356, "y": 99 }, { "x": 355, "y": 101 }, { "x": 354, "y": 104 }, { "x": 352, "y": 106 }, { "x": 350, "y": 109 }, { "x": 348, "y": 112 }, { "x": 347, "y": 115 }, { "x": 345, "y": 118 }, { "x": 343, "y": 120 }, { "x": 341, "y": 124 }, { "x": 339, "y": 126 }, { "x": 338, "y": 129 }, { "x": 336, "y": 133 }, { "x": 334, "y": 136 }, { "x": 331, "y": 140 }, { "x": 329, "y": 144 }, { "x": 327, "y": 147 }, { "x": 324, "y": 151 }, { "x": 323, "y": 154 }, { "x": 320, "y": 158 }, { "x": 319, "y": 160 }, { "x": 315, "y": 165 }, { "x": 312, "y": 170 }, { "x": 310, "y": 172 }, { "x": 307, "y": 177 }, { "x": 305, "y": 181 }, { "x": 303, "y": 185 }, { "x": 302, "y": 186 }, { "x": 301, "y": 187 }, { "x": 300, "y": 189 }, { "x": 299, "y": 190 }, { "x": 298, "y": 193 }, { "x": 296, "y": 194 }, { "x": 292, "y": 200 }, { "x": 290, "y": 203 }, { "x": 288, "y": 208 }, { "x": 285, "y": 213 }, { "x": 282, "y": 218 }, { "x": 279, "y": 222 }, { "x": 275, "y": 228 }, { "x": 271, "y": 232 }, { "x": 269, "y": 237 }, { "x": 266, "y": 242 }, { "x": 263, "y": 247 }, { "x": 259, "y": 252 }, { "x": 257, "y": 255 }, { "x": 256, "y": 256 }, { "x": 254, "y": 258 }, { "x": 253, "y": 260 }, { "x": 251, "y": 262 }, { "x": 249, "y": 265 }, { "x": 244, "y": 269 }, { "x": 240, "y": 272 }, { "x": 236, "y": 276 }, { "x": 231, "y": 281 }, { "x": 226, "y": 286 }, { "x": 222, "y": 289 }, { "x": 219, "y": 292 }, { "x": 217, "y": 295 }, { "x": 213, "y": 297 }, { "x": 211, "y": 299 }, { "x": 206, "y": 302 }, { "x": 200, "y": 307 }, { "x": 198, "y": 309 }, { "x": 195, "y": 311 }, { "x": 193, "y": 313 }, { "x": 187, "y": 317 }, { "x": 185, "y": 320 }, { "x": 178, "y": 326 }, { "x": 172, "y": 332 }, { "x": 168, "y": 335 }, { "x": 165, "y": 337 }, { "x": 161, "y": 341 }, { "x": 158, "y": 343 }, { "x": 154, "y": 346 }, { "x": 147, "y": 353 }, { "x": 142, "y": 358 }, { "x": 137, "y": 363 }, { "x": 130, "y": 367 }, { "x": 125, "y": 372 }, { "x": 121, "y": 374 }, { "x": 115, "y": 378 }, { "x": 105, "y": 383 }, { "x": 100, "y": 386 }, { "x": 96, "y": 388 }, { "x": 94, "y": 390 }, { "x": 91, "y": 391 }, { "x": 88, "y": 392 }, { "x": 84, "y": 393 }, { "x": 79, "y": 394 }, { "x": 76, "y": 395 }, { "x": 70, "y": 395 }, { "x": 63, "y": 395 }, { "x": 55, "y": 396 }, { "x": 49, "y": 398 }, { "x": 45, "y": 399 }, { "x": 41, "y": 399 }, { "x": 38, "y": 401 }, { "x": 36, "y": 401 }, { "x": 34, "y": 402 }, { "x": 33, "y": 402 }, { "x": 32, "y": 403 }, { "x": 30, "y": 403 }, { "x": 28, "y": 404 }, { "x": 26, "y": 406 }, { "x": 25, "y": 406 }, { "x": 24, "y": 407 }, { "x": 23, "y": 408 }, { "x": 22, "y": 408 }, { "x": 20, "y": 409 }, { "x": 19, "y": 411 }, { "x": 17, "y": 412 }, { "x": 378, "y": 51 }, { "x": 377, "y": 53 }, { "x": 377, "y": 54 }, { "x": 376, "y": 57 }, { "x": 375, "y": 60 }, { "x": 372, "y": 66 }, { "x": 372, "y": 68 }, { "x": 371, "y": 70 }, { "x": 370, "y": 73 }, { "x": 369, "y": 76 }, { "x": 368, "y": 78 }, { "x": 367, "y": 80 }, { "x": 367, "y": 82 }, { "x": 366, "y": 85 }, { "x": 364, "y": 87 }, { "x": 362, "y": 90 }, { "x": 361, "y": 92 }, { "x": 359, "y": 94 }, { "x": 358, "y": 97 }, { "x": 356, "y": 99 }, { "x": 355, "y": 101 }, { "x": 354, "y": 104 }, { "x": 352, "y": 106 }, { "x": 350, "y": 109 }, { "x": 348, "y": 112 }, { "x": 347, "y": 115 }, { "x": 345, "y": 118 }, { "x": 343, "y": 120 }, { "x": 341, "y": 124 }, { "x": 339, "y": 126 }, { "x": 338, "y": 129 }, { "x": 336, "y": 133 }, { "x": 334, "y": 136 }, { "x": 331, "y": 140 }, { "x": 329, "y": 144 }, { "x": 327, "y": 147 }, { "x": 324, "y": 151 }, { "x": 323, "y": 154 }, { "x": 320, "y": 158 }, { "x": 319, "y": 160 }, { "x": 315, "y": 165 }, { "x": 312, "y": 170 }, { "x": 310, "y": 172 }, { "x": 307, "y": 177 }, { "x": 305, "y": 181 }, { "x": 303, "y": 185 }, { "x": 302, "y": 186 }, { "x": 301, "y": 187 }, { "x": 300, "y": 189 }, { "x": 299, "y": 190 }, { "x": 298, "y": 193 }, { "x": 296, "y": 194 }, { "x": 292, "y": 200 }, { "x": 290, "y": 203 }, { "x": 288, "y": 208 }, { "x": 285, "y": 213 }, { "x": 282, "y": 218 }, { "x": 279, "y": 222 }, { "x": 275, "y": 228 }, { "x": 271, "y": 232 }, { "x": 269, "y": 237 }, { "x": 266, "y": 242 }, { "x": 263, "y": 247 }, { "x": 259, "y": 252 }, { "x": 257, "y": 255 }, { "x": 256, "y": 256 }, { "x": 254, "y": 258 }, { "x": 253, "y": 260 }, { "x": 251, "y": 262 }, { "x": 249, "y": 265 }, { "x": 244, "y": 269 }, { "x": 240, "y": 272 }, { "x": 236, "y": 276 }, { "x": 231, "y": 281 }, { "x": 226, "y": 286 }, { "x": 222, "y": 289 }, { "x": 219, "y": 292 }, { "x": 217, "y": 295 }, { "x": 213, "y": 297 }, { "x": 211, "y": 299 }, { "x": 206, "y": 302 }, { "x": 200, "y": 307 }, { "x": 198, "y": 309 }, { "x": 195, "y": 311 }, { "x": 193, "y": 313 }, { "x": 187, "y": 317 }, { "x": 185, "y": 320 }, { "x": 178, "y": 326 }, { "x": 172, "y": 332 }, { "x": 168, "y": 335 }, { "x": 165, "y": 337 }, { "x": 161, "y": 341 }, { "x": 158, "y": 343 }, { "x": 154, "y": 346 }, { "x": 147, "y": 353 }, { "x": 142, "y": 358 }, { "x": 137, "y": 363 }, { "x": 130, "y": 367 }, { "x": 125, "y": 372 }, { "x": 121, "y": 374 }, { "x": 115, "y": 378 }, { "x": 105, "y": 383 }, { "x": 100, "y": 386 }, { "x": 96, "y": 388 }, { "x": 94, "y": 390 }, { "x": 91, "y": 391 }, { "x": 88, "y": 392 }, { "x": 84, "y": 393 }, { "x": 79, "y": 394 }, { "x": 76, "y": 395 }, { "x": 70, "y": 395 }, { "x": 63, "y": 395 }, { "x": 55, "y": 396 }, { "x": 49, "y": 398 }, { "x": 45, "y": 399 }, { "x": 41, "y": 399 }, { "x": 38, "y": 401 }, { "x": 36, "y": 401 }, { "x": 34, "y": 402 }, { "x": 33, "y": 402 }, { "x": 32, "y": 403 }, { "x": 30, "y": 403 }, { "x": 28, "y": 404 }, { "x": 26, "y": 406 }, { "x": 25, "y": 406 }, { "x": 24, "y": 407 }, { "x": 23, "y": 408 }, { "x": 22, "y": 408 }, { "x": 20, "y": 409 }, { "x": 19, "y": 411 }, { "x": 17, "y": 412 }, { "x": 49, "y": 379 }, { "x": 49, "y": 380 }, { "x": 49, "y": 382 }, { "x": 45, "y": 388 }, { "x": 41, "y": 394 }, { "x": 38, "y": 398 }, { "x": 35, "y": 402 }, { "x": 33, "y": 405 }, { "x": 30, "y": 408 }, { "x": 28, "y": 411 }, { "x": 26, "y": 412 }, { "x": 25, "y": 414 }, { "x": 24, "y": 416 }, { "x": 23, "y": 419 }, { "x": 21, "y": 421 }, { "x": 20, "y": 423 }, { "x": 19, "y": 424 }, { "x": 19, "y": 425 }, { "x": 20, "y": 425 }, { "x": 21, "y": 425 }, { "x": 23, "y": 425 }, { "x": 26, "y": 425 }, { "x": 31, "y": 425 }, { "x": 32, "y": 425 }, { "x": 33, "y": 425 }, { "x": 35, "y": 426 }, { "x": 38, "y": 427 }, { "x": 43, "y": 428 }, { "x": 48, "y": 432 }, { "x": 52, "y": 433 }, { "x": 54, "y": 434 }, { "x": 55, "y": 434 }, { "x": 57, "y": 435 }, { "x": 58, "y": 435 }, { "x": 60, "y": 435 }, { "x": 62, "y": 436 }, { "x": 64, "y": 436 }, { "x": 68, "y": 436 }, { "x": 49, "y": 379 }, { "x": 49, "y": 380 }, { "x": 49, "y": 382 }, { "x": 45, "y": 388 }, { "x": 41, "y": 394 }, { "x": 38, "y": 398 }, { "x": 35, "y": 402 }, { "x": 33, "y": 405 }, { "x": 30, "y": 408 }, { "x": 28, "y": 411 }, { "x": 26, "y": 412 }, { "x": 25, "y": 414 }, { "x": 24, "y": 416 }, { "x": 23, "y": 419 }, { "x": 21, "y": 421 }, { "x": 20, "y": 423 }, { "x": 19, "y": 424 }, { "x": 19, "y": 425 }, { "x": 20, "y": 425 }, { "x": 21, "y": 425 }, { "x": 23, "y": 425 }, { "x": 26, "y": 425 }, { "x": 31, "y": 425 }, { "x": 32, "y": 425 }, { "x": 33, "y": 425 }, { "x": 35, "y": 426 }, { "x": 38, "y": 427 }, { "x": 43, "y": 428 }, { "x": 48, "y": 432 }, { "x": 52, "y": 433 }, { "x": 54, "y": 434 }, { "x": 55, "y": 434 }, { "x": 57, "y": 435 }, { "x": 58, "y": 435 }, { "x": 60, "y": 435 }, { "x": 62, "y": 436 }, { "x": 64, "y": 436 }, { "x": 68, "y": 436 }];

setTimeout(function () {
    // writer(points)
    start();
}, 1000);

function start() {

    console.log((0, _commonJsProline.masker)());

    var tl = new TimelineMax();

    var _masker = (0, _commonJsProline.masker)();

    var cta_O = _masker.cta_O;
    var arrow2 = _masker.arrow2;

    tl.from(cta_O, .5, { clip: 0 + "px, " + cta_O.width + "px, " + 0 + "px, " + cta_O.width + "px" });
    // tl.from(arrow2, .5, {clip:`${0}px, ${0}px, ${0}px, ${0}px`})
}

},{"../../_common/js/proline":1}],3:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handwrite"] = factory();
	else
		root["Handwrite"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var PI = Math.PI;
// const color = '#ff0000'

function Circle(ctx, x, y) {
	var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
	var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#ff0000';

	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * PI, false);
	ctx.fillStyle = color;
	ctx.fill();
}

exports.Circle = Circle;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Helper = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Handwrite = function () {
	function Handwrite(canvas, image) {
		_classCallCheck(this, Handwrite);

		this.image = image;
		this.canvasArt = canvas;
		this.canvasMask = this.canvasArt.cloneNode();
		// document.body.appendChild(this.canvasMask)
		this.ctxArt = this.canvasArt.getContext('2d');
		this.ctxMask = this.canvasMask.getContext('2d');

		this.WIDTH = this.canvasArt.width;
		this.HEIGHT = this.canvasArt.height;

		this.defaultOptions = {
			speed: 3,
			brushSize: 6,
			repeat: 0,
			cleanFromBehind: false,
			cleanUpWhenDone: false,
			callback: null
		};

		this.options;
		this.interval;
		this.timeout;
		this.loopCount = 0;
	}

	_createClass(Handwrite, [{
		key: 'drawCycle',
		value: function drawCycle() {
			var _this = this;

			this.index = 0;
			this.clear();
			clearInterval(this.interval);
			clearTimeout(this.timeout);
			this.interval = setInterval(function () {
				var pos = _this.points[_this.index];

				if (pos) {
					_this.drawArt(pos, _this.options.brushSize);
				} else {

					_this.onDoneForever();
					if (_this.options.callback) {
						_this.options.callback();
					}

					if (_this.loopCount < _this.options.repeat) {
						_this.loopCount++;
						_this.timeout = setTimeout(_this.drawCycle.bind(_this), 1000);
					}
				}
				_this.index++;
			}, this.options.speed);
		}
	}, {
		key: 'draw',
		value: function draw(points, options) {
			this.loopCount = 0;
			this.points = points;
			this.options = _extends({}, this.defaultOptions, options);
			this.drawCycle();
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.ctxArt.clearRect(0, 0, this.WIDTH, this.HEIGHT);
			this.ctxMask.clearRect(0, 0, this.WIDTH, this.HEIGHT);
		}
	}, {
		key: 'drawArt',
		value: function drawArt(pos) {
			if (pos) {
				(0, _Helper.Circle)(this.ctxMask, pos.x, pos.y, this.options.brushSize);

				if (this.options.cleanFromBehind) {
					this.ctxMask.fillRect(0, 0, pos.x - 30, this.HEIGHT);
				}
			}

			this.ctxArt.clearRect(0, 0, this.WIDTH, this.HEIGHT);
			this.ctxArt.drawImage(this.canvasMask, 0, 0);
			this.ctxArt.save();
			this.ctxArt.globalCompositeOperation = 'source-in';
			this.ctxArt.drawImage(this.image, 0, 0);
			this.ctxArt.restore();
		}
	}, {
		key: 'onDoneForever',
		value: function onDoneForever() {
			if (this.options.cleanUpWhenDone) {
				this.ctxMask.fillStyle = "#31B131";
				this.ctxMask.fillRect(0, 0, this.WIDTH, this.HEIGHT);
				this.drawArt();
			}
			clearInterval(this.interval);
		}
	}]);

	return Handwrite;
}();

exports.default = Handwrite;

/***/ })
/******/ ]);
});

},{}]},{},[2])


//# sourceMappingURL=main.js.map
