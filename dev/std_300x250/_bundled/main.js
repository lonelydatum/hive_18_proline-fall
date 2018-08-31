(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function arrayClean(points, amount) {
    var pointsClean = [];
    points.forEach(function (item, i) {
        if (i % amount === 0) {
            pointsClean.push(item);
        }
    });

    return pointsClean;
}

function hand(points, div, opt) {
    return new Promise(function (good, bad) {
        var myCanvas = document.querySelector("#" + div + " canvas");
        var myImg = document.querySelector("#" + div + " img");
        var options = _extends({

            brushsize: 8,
            speed: 8,
            repeat: 0,
            cleanFromBehind: true,
            cleanUpWhenDone: true
        }, opt, {
            callback: function callback() {
                good();
            }
        });

        console.log(myCanvas);
        myCanvas.width = myImg.width;
        myCanvas.height = myImg.height;

        var handwrite = new _handwrite2["default"](myCanvas, myImg);
        handwrite.draw(points, options);

        TweenLite.set(myImg, { opacity: 0 });
    });
}

exports.writer = writer;
exports.masker = masker;
exports.arrayClean = arrayClean;
exports.hand = hand;

},{"handwrite":4}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsProline = require("../../_common/js/proline");

var _handwrite = require('handwrite');

var _handwrite2 = _interopRequireDefault(_handwrite);

var _super1 = require("./super1");

setTimeout(function () {
    start();
}, 500);

function start() {
    (0, _commonJsProline.hand)(_super1.hand_super1, "super1", { brushsize: 8, speed: 8 }).then(function () {
        TweenMax.to('.frame1', 2, { x: -300 });
    });
}

},{"../../_common/js/proline":1,"./super1":3,"handwrite":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super1 = [{
  "x": 47,
  "y": 64
}, {
  "x": 47,
  "y": 69
}, {
  "x": 47,
  "y": 74
}, {
  "x": 47,
  "y": 79
}, {
  "x": 47,
  "y": 86
}, {
  "x": 47,
  "y": 91
}, {
  "x": 47,
  "y": 96
}, {
  "x": 47,
  "y": 68
}, {
  "x": 47,
  "y": 73
}, {
  "x": 47,
  "y": 78
}, {
  "x": 47,
  "y": 84
}, {
  "x": 47,
  "y": 90
}, {
  "x": 47,
  "y": 95
}, {
  "x": 66,
  "y": 65
}, {
  "x": 63,
  "y": 71
}, {
  "x": 58,
  "y": 74
}, {
  "x": 54,
  "y": 78
}, {
  "x": 54,
  "y": 81
}, {
  "x": 56,
  "y": 84
}, {
  "x": 59,
  "y": 88
}, {
  "x": 63,
  "y": 93
}, {
  "x": 66,
  "y": 95
}, {
  "x": 66,
  "y": 64
}, {
  "x": 64,
  "y": 70
}, {
  "x": 59,
  "y": 74
}, {
  "x": 55,
  "y": 77
}, {
  "x": 54,
  "y": 80
}, {
  "x": 56,
  "y": 83
}, {
  "x": 58,
  "y": 87
}, {
  "x": 62,
  "y": 92
}, {
  "x": 65,
  "y": 95
}, {
  "x": 75,
  "y": 93
}, {
  "x": 75,
  "y": 88
}, {
  "x": 75,
  "y": 83
}, {
  "x": 75,
  "y": 78
}, {
  "x": 75,
  "y": 73
}, {
  "x": 75,
  "y": 68
}, {
  "x": 78,
  "y": 71
}, {
  "x": 82,
  "y": 75
}, {
  "x": 85,
  "y": 79
}, {
  "x": 87,
  "y": 83
}, {
  "x": 89,
  "y": 87
}, {
  "x": 92,
  "y": 91
}, {
  "x": 94,
  "y": 92
}, {
  "x": 94,
  "y": 85
}, {
  "x": 94,
  "y": 80
}, {
  "x": 94,
  "y": 75
}, {
  "x": 94,
  "y": 70
}, {
  "x": 95,
  "y": 65
}, {
  "x": 75,
  "y": 91
}, {
  "x": 75,
  "y": 86
}, {
  "x": 75,
  "y": 81
}, {
  "x": 75,
  "y": 76
}, {
  "x": 75,
  "y": 71
}, {
  "x": 76,
  "y": 69
}, {
  "x": 80,
  "y": 73
}, {
  "x": 83,
  "y": 76
}, {
  "x": 86,
  "y": 80
}, {
  "x": 88,
  "y": 84
}, {
  "x": 90,
  "y": 89
}, {
  "x": 93,
  "y": 92
}, {
  "x": 94,
  "y": 89
}, {
  "x": 94,
  "y": 83
}, {
  "x": 94,
  "y": 78
}, {
  "x": 94,
  "y": 73
}, {
  "x": 95,
  "y": 68
}, {
  "x": 130,
  "y": 67
}, {
  "x": 125,
  "y": 67
}, {
  "x": 117,
  "y": 67
}, {
  "x": 113,
  "y": 70
}, {
  "x": 110,
  "y": 72
}, {
  "x": 108,
  "y": 80
}, {
  "x": 108,
  "y": 89
}, {
  "x": 110,
  "y": 94
}, {
  "x": 117,
  "y": 95
}, {
  "x": 128,
  "y": 94
}, {
  "x": 132,
  "y": 87
}, {
  "x": 133,
  "y": 78
}, {
  "x": 133,
  "y": 71
}, {
  "x": 128,
  "y": 70
}, {
  "x": 124,
  "y": 69
}, {
  "x": 142,
  "y": 72
}, {
  "x": 147,
  "y": 78
}, {
  "x": 151,
  "y": 84
}, {
  "x": 152,
  "y": 89
}, {
  "x": 152,
  "y": 92
}, {
  "x": 155,
  "y": 84
}, {
  "x": 157,
  "y": 76
}, {
  "x": 159,
  "y": 71
}, {
  "x": 162,
  "y": 71
}, {
  "x": 166,
  "y": 80
}, {
  "x": 169,
  "y": 90
}, {
  "x": 170,
  "y": 94
}, {
  "x": 171,
  "y": 83
}, {
  "x": 176,
  "y": 73
}, {
  "x": 186,
  "y": 71
}, {
  "x": 186,
  "y": 78
}, {
  "x": 186,
  "y": 86
}, {
  "x": 186,
  "y": 92
}, {
  "x": 200,
  "y": 90
}, {
  "x": 200,
  "y": 82
}, {
  "x": 200,
  "y": 76
}, {
  "x": 200,
  "y": 70
}, {
  "x": 202,
  "y": 66
}, {
  "x": 206,
  "y": 67
}, {
  "x": 211,
  "y": 75
}, {
  "x": 214,
  "y": 82
}, {
  "x": 217,
  "y": 86
}, {
  "x": 221,
  "y": 91
}, {
  "x": 222,
  "y": 84
}, {
  "x": 222,
  "y": 72
}, {
  "x": 222,
  "y": 65
}, {
  "x": 253,
  "y": 72
}, {
  "x": 248,
  "y": 72
}, {
  "x": 243,
  "y": 72
}, {
  "x": 238,
  "y": 72
}, {
  "x": 236,
  "y": 75
}, {
  "x": 234,
  "y": 81
}, {
  "x": 234,
  "y": 86
}, {
  "x": 236,
  "y": 90
}, {
  "x": 242,
  "y": 93
}, {
  "x": 246,
  "y": 94
}, {
  "x": 252,
  "y": 94
}, {
  "x": 258,
  "y": 90
}, {
  "x": 259,
  "y": 86
}, {
  "x": 260,
  "y": 81
}, {
  "x": 256,
  "y": 80
}, {
  "x": 250,
  "y": 80
}];

exports.hand_super1 = hand_super1;

},{}],4:[function(require,module,exports){
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
