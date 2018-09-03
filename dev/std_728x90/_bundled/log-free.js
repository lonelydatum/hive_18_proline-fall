(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _handwrite = require('handwrite');

var _handwrite2 = _interopRequireDefault(_handwrite);

TweenLite.defaultEase = Power2.easeOut;

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
        cleanUpWhenDone: true,
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

            brushSize: 4,
            speed: 8,
            repeat: 0,
            cleanFromBehind: true,
            cleanUpWhenDone: true
        }, opt, {
            callback: function callback() {
                good();
            }
        });

        myCanvas.width = myImg.width;
        myCanvas.height = myImg.height;

        void 0;

        var handwrite = new _handwrite2["default"](myCanvas, myImg);
        var holder = document.querySelector("#" + div);

        // handwrite.brushSize = 1
        // console.log(handwrite)
        // holder.appendChild(handwrite.canvasMask)
        //
        handwrite.draw(points, options);

        TweenLite.set(myImg, { opacity: 0 });
    });
}

exports.writer = writer;
exports.masker = masker;
exports.arrayClean = arrayClean;
exports.hand = hand;

},{"handwrite":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cta_circle = [{
  "x": 13,
  "y": 22
}, {
  "x": 16,
  "y": 21
}, {
  "x": 18,
  "y": 19
}, {
  "x": 20,
  "y": 18
}, {
  "x": 23,
  "y": 17
}, {
  "x": 26,
  "y": 16
}, {
  "x": 29,
  "y": 15
}, {
  "x": 32,
  "y": 15
}, {
  "x": 36,
  "y": 15
}, {
  "x": 40,
  "y": 14
}, {
  "x": 43,
  "y": 14
}, {
  "x": 46,
  "y": 14
}, {
  "x": 48,
  "y": 13
}, {
  "x": 52,
  "y": 13
}, {
  "x": 55,
  "y": 13
}, {
  "x": 58,
  "y": 13
}, {
  "x": 61,
  "y": 13
}, {
  "x": 64,
  "y": 13
}, {
  "x": 69,
  "y": 13
}, {
  "x": 73,
  "y": 13
}, {
  "x": 77,
  "y": 13
}, {
  "x": 81,
  "y": 12
}, {
  "x": 85,
  "y": 12
}, {
  "x": 89,
  "y": 12
}, {
  "x": 92,
  "y": 12
}, {
  "x": 96,
  "y": 12
}, {
  "x": 99,
  "y": 12
}, {
  "x": 102,
  "y": 12
}, {
  "x": 106,
  "y": 12
}, {
  "x": 111,
  "y": 12
}, {
  "x": 116,
  "y": 12
}, {
  "x": 122,
  "y": 12
}, {
  "x": 126,
  "y": 12
}, {
  "x": 131,
  "y": 12
}, {
  "x": 135,
  "y": 12
}, {
  "x": 139,
  "y": 12
}, {
  "x": 144,
  "y": 12
}, {
  "x": 147,
  "y": 12
}, {
  "x": 151,
  "y": 13
}, {
  "x": 154,
  "y": 13
}, {
  "x": 157,
  "y": 14
}, {
  "x": 160,
  "y": 15
}, {
  "x": 163,
  "y": 17
}, {
  "x": 167,
  "y": 18
}, {
  "x": 169,
  "y": 20
}, {
  "x": 172,
  "y": 23
}, {
  "x": 169,
  "y": 24
}, {
  "x": 166,
  "y": 26
}, {
  "x": 164,
  "y": 27
}, {
  "x": 160,
  "y": 29
}, {
  "x": 158,
  "y": 30
}, {
  "x": 157,
  "y": 32
}, {
  "x": 154,
  "y": 33
}, {
  "x": 152,
  "y": 34
}, {
  "x": 149,
  "y": 35
}, {
  "x": 146,
  "y": 35
}, {
  "x": 144,
  "y": 36
}, {
  "x": 140,
  "y": 36
}, {
  "x": 137,
  "y": 37
}, {
  "x": 134,
  "y": 37
}, {
  "x": 129,
  "y": 38
}, {
  "x": 124,
  "y": 38
}, {
  "x": 120,
  "y": 38
}, {
  "x": 116,
  "y": 39
}, {
  "x": 113,
  "y": 39
}, {
  "x": 109,
  "y": 39
}, {
  "x": 106,
  "y": 39
}, {
  "x": 103,
  "y": 39
}, {
  "x": 100,
  "y": 39
}, {
  "x": 96,
  "y": 39
}, {
  "x": 92,
  "y": 39
}, {
  "x": 89,
  "y": 39
}, {
  "x": 85,
  "y": 39
}, {
  "x": 82,
  "y": 39
}, {
  "x": 79,
  "y": 38
}, {
  "x": 75,
  "y": 38
}, {
  "x": 70,
  "y": 37
}, {
  "x": 65,
  "y": 37
}, {
  "x": 62,
  "y": 37
}, {
  "x": 59,
  "y": 36
}, {
  "x": 56,
  "y": 36
}, {
  "x": 52,
  "y": 36
}, {
  "x": 47,
  "y": 36
}, {
  "x": 43,
  "y": 36
}, {
  "x": 38,
  "y": 36
}, {
  "x": 35,
  "y": 36
}, {
  "x": 31,
  "y": 37
}, {
  "x": 28,
  "y": 37
}, {
  "x": 24,
  "y": 37
}, {
  "x": 21,
  "y": 37
}, {
  "x": 19,
  "y": 35
}, {
  "x": 17,
  "y": 33
}, {
  "x": 15,
  "y": 32
}, {
  "x": 13,
  "y": 22
}, {
  "x": 16,
  "y": 21
}, {
  "x": 18,
  "y": 19
}, {
  "x": 20,
  "y": 18
}, {
  "x": 23,
  "y": 17
}, {
  "x": 26,
  "y": 16
}, {
  "x": 29,
  "y": 15
}, {
  "x": 32,
  "y": 15
}, {
  "x": 36,
  "y": 15
}, {
  "x": 40,
  "y": 14
}, {
  "x": 43,
  "y": 14
}, {
  "x": 46,
  "y": 14
}, {
  "x": 48,
  "y": 13
}, {
  "x": 52,
  "y": 13
}, {
  "x": 55,
  "y": 13
}, {
  "x": 58,
  "y": 13
}, {
  "x": 61,
  "y": 13
}, {
  "x": 64,
  "y": 13
}, {
  "x": 69,
  "y": 13
}, {
  "x": 73,
  "y": 13
}, {
  "x": 77,
  "y": 13
}, {
  "x": 81,
  "y": 12
}, {
  "x": 85,
  "y": 12
}, {
  "x": 89,
  "y": 12
}, {
  "x": 92,
  "y": 12
}, {
  "x": 96,
  "y": 12
}, {
  "x": 99,
  "y": 12
}, {
  "x": 102,
  "y": 12
}, {
  "x": 106,
  "y": 12
}, {
  "x": 111,
  "y": 12
}, {
  "x": 116,
  "y": 12
}, {
  "x": 122,
  "y": 12
}, {
  "x": 126,
  "y": 12
}, {
  "x": 131,
  "y": 12
}, {
  "x": 135,
  "y": 12
}, {
  "x": 139,
  "y": 12
}, {
  "x": 144,
  "y": 12
}, {
  "x": 147,
  "y": 12
}, {
  "x": 151,
  "y": 13
}, {
  "x": 154,
  "y": 13
}, {
  "x": 157,
  "y": 14
}, {
  "x": 160,
  "y": 15
}, {
  "x": 163,
  "y": 17
}, {
  "x": 167,
  "y": 18
}, {
  "x": 169,
  "y": 20
}, {
  "x": 172,
  "y": 23
}, {
  "x": 169,
  "y": 24
}, {
  "x": 166,
  "y": 26
}, {
  "x": 164,
  "y": 27
}, {
  "x": 160,
  "y": 29
}, {
  "x": 158,
  "y": 30
}, {
  "x": 157,
  "y": 32
}, {
  "x": 154,
  "y": 33
}, {
  "x": 152,
  "y": 34
}, {
  "x": 149,
  "y": 35
}, {
  "x": 146,
  "y": 35
}, {
  "x": 144,
  "y": 36
}, {
  "x": 140,
  "y": 36
}, {
  "x": 137,
  "y": 37
}, {
  "x": 134,
  "y": 37
}, {
  "x": 129,
  "y": 38
}, {
  "x": 124,
  "y": 38
}, {
  "x": 120,
  "y": 38
}, {
  "x": 116,
  "y": 39
}, {
  "x": 113,
  "y": 39
}, {
  "x": 109,
  "y": 39
}, {
  "x": 106,
  "y": 39
}, {
  "x": 103,
  "y": 39
}, {
  "x": 100,
  "y": 39
}, {
  "x": 96,
  "y": 39
}, {
  "x": 92,
  "y": 39
}, {
  "x": 89,
  "y": 39
}, {
  "x": 85,
  "y": 39
}, {
  "x": 82,
  "y": 39
}, {
  "x": 79,
  "y": 38
}, {
  "x": 75,
  "y": 38
}, {
  "x": 70,
  "y": 37
}, {
  "x": 65,
  "y": 37
}, {
  "x": 62,
  "y": 37
}, {
  "x": 59,
  "y": 36
}, {
  "x": 56,
  "y": 36
}, {
  "x": 52,
  "y": 36
}, {
  "x": 47,
  "y": 36
}, {
  "x": 43,
  "y": 36
}, {
  "x": 38,
  "y": 36
}, {
  "x": 35,
  "y": 36
}, {
  "x": 31,
  "y": 37
}, {
  "x": 28,
  "y": 37
}, {
  "x": 24,
  "y": 37
}, {
  "x": 21,
  "y": 37
}, {
  "x": 19,
  "y": 35
}, {
  "x": 17,
  "y": 33
}, {
  "x": 15,
  "y": 32
}, {
  "x": 13,
  "y": 22
}, {
  "x": 16,
  "y": 21
}, {
  "x": 18,
  "y": 19
}, {
  "x": 20,
  "y": 18
}, {
  "x": 23,
  "y": 17
}, {
  "x": 26,
  "y": 16
}, {
  "x": 29,
  "y": 15
}, {
  "x": 32,
  "y": 15
}, {
  "x": 36,
  "y": 15
}, {
  "x": 40,
  "y": 14
}, {
  "x": 43,
  "y": 14
}, {
  "x": 46,
  "y": 14
}, {
  "x": 48,
  "y": 13
}, {
  "x": 52,
  "y": 13
}, {
  "x": 55,
  "y": 13
}, {
  "x": 58,
  "y": 13
}, {
  "x": 61,
  "y": 13
}, {
  "x": 64,
  "y": 13
}, {
  "x": 69,
  "y": 13
}, {
  "x": 73,
  "y": 13
}, {
  "x": 77,
  "y": 13
}, {
  "x": 81,
  "y": 12
}, {
  "x": 85,
  "y": 12
}, {
  "x": 89,
  "y": 12
}, {
  "x": 92,
  "y": 12
}, {
  "x": 96,
  "y": 12
}, {
  "x": 99,
  "y": 12
}, {
  "x": 102,
  "y": 12
}, {
  "x": 106,
  "y": 12
}, {
  "x": 111,
  "y": 12
}, {
  "x": 116,
  "y": 12
}, {
  "x": 122,
  "y": 12
}, {
  "x": 126,
  "y": 12
}, {
  "x": 131,
  "y": 12
}, {
  "x": 135,
  "y": 12
}, {
  "x": 139,
  "y": 12
}, {
  "x": 144,
  "y": 12
}, {
  "x": 147,
  "y": 12
}, {
  "x": 151,
  "y": 13
}, {
  "x": 154,
  "y": 13
}, {
  "x": 157,
  "y": 14
}, {
  "x": 160,
  "y": 15
}, {
  "x": 163,
  "y": 17
}, {
  "x": 167,
  "y": 18
}, {
  "x": 169,
  "y": 20
}, {
  "x": 172,
  "y": 23
}, {
  "x": 169,
  "y": 24
}, {
  "x": 166,
  "y": 26
}, {
  "x": 164,
  "y": 27
}, {
  "x": 160,
  "y": 29
}, {
  "x": 158,
  "y": 30
}, {
  "x": 157,
  "y": 32
}, {
  "x": 154,
  "y": 33
}, {
  "x": 152,
  "y": 34
}, {
  "x": 149,
  "y": 35
}, {
  "x": 146,
  "y": 35
}, {
  "x": 144,
  "y": 36
}, {
  "x": 140,
  "y": 36
}, {
  "x": 137,
  "y": 37
}, {
  "x": 134,
  "y": 37
}, {
  "x": 129,
  "y": 38
}, {
  "x": 124,
  "y": 38
}, {
  "x": 120,
  "y": 38
}, {
  "x": 116,
  "y": 39
}, {
  "x": 113,
  "y": 39
}, {
  "x": 109,
  "y": 39
}, {
  "x": 106,
  "y": 39
}, {
  "x": 103,
  "y": 39
}, {
  "x": 100,
  "y": 39
}, {
  "x": 96,
  "y": 39
}, {
  "x": 92,
  "y": 39
}, {
  "x": 89,
  "y": 39
}, {
  "x": 85,
  "y": 39
}, {
  "x": 82,
  "y": 39
}, {
  "x": 79,
  "y": 38
}, {
  "x": 75,
  "y": 38
}, {
  "x": 70,
  "y": 37
}, {
  "x": 65,
  "y": 37
}, {
  "x": 62,
  "y": 37
}, {
  "x": 59,
  "y": 36
}, {
  "x": 56,
  "y": 36
}, {
  "x": 52,
  "y": 36
}, {
  "x": 47,
  "y": 36
}, {
  "x": 43,
  "y": 36
}, {
  "x": 38,
  "y": 36
}, {
  "x": 35,
  "y": 36
}, {
  "x": 31,
  "y": 37
}, {
  "x": 28,
  "y": 37
}, {
  "x": 24,
  "y": 37
}, {
  "x": 21,
  "y": 37
}, {
  "x": 19,
  "y": 35
}, {
  "x": 17,
  "y": 33
}, {
  "x": 15,
  "y": 32
}];

exports.cta_circle = cta_circle;

},{}],3:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsProline = require("../../_common/js/proline");

var _handwrite = require('handwrite');

var _handwrite2 = _interopRequireDefault(_handwrite);

var _super1 = require("./super1");

var _cta_circle = require("./cta_circle");

TweenLite.defaultEase = Power2.easeOut;

setTimeout(function () {
    start();
}, 100);

function start() {
    do_super();
}

function do_super() {
    TweenMax.set('#super', { opacity: 1 });
    (0, _commonJsProline.hand)(_super1.hand_super1, "super", { brushSize: 4, speed: 6 }).then(logo);
}

function logo() {

    TweenMax.to("#logo_pro", .5, { opacity: 1, onComplete: function onComplete() {
            TweenLite.delayedCall(.3, do_arrow_green_2a);
        } });
}

function do_arrow_green_2a() {
    // TweenMax.set('#arrow_green_2a', {opacity:1})
    TweenMax.set(".masker", { opacity: 1 });

    var tl = new TimelineMax({
        onComplete: do_cta
    });

    var _masker = (0, _commonJsProline.masker)();

    var arrow_yellow_1 = _masker.arrow_yellow_1;
    var arrow_green_1 = _masker.arrow_green_1;
    var arrow_green_2 = _masker.arrow_green_2;
    var arrow_green_3 = _masker.arrow_green_3;
    var arrow_green_4 = _masker.arrow_green_4;

    TweenMax.set(arrow_green_1, { opacity: 0 });

    tl.from(arrow_yellow_1, .5, { clip: 0 + "px, " + 0 + "px, " + 0 + "px, " + 0 + "px" }, '+=.2');

    tl.from(arrow_green_2, .5, { clip: arrow_green_2.height + "px, " + arrow_green_2.width + "px, " + arrow_green_2.height + "px, " + 0 + "px" }, "-=.2");
    tl.from(arrow_green_3, .5, { clip: arrow_green_3.height + "px, " + arrow_green_3.width + "px, " + arrow_green_2.height + "px, " + arrow_green_2.width + "px" }, "-=.2");
    tl.from(arrow_green_4, .5, { clip: 0 + "px, " + arrow_green_4.width + "px, " + 0 + "px, " + arrow_green_4.width + "px" }, "-=.4");

    tl.set(".frame2", { opacity: 1 });

    tl.from(["#cta", "#footer"], .5, { opacity: 0, onComplete: function onComplete() {
            TweenMax.set(arrow_green_1, { opacity: 1 });
            var clip = { clip: arrow_green_1.height + "px, " + arrow_green_1.width + "px, " + arrow_green_1.height + "px, " + 0 + "px" };
            TweenMax.from(arrow_green_1, .5, _extends({}, clip, { onComplete: function onComplete() {
                    TweenMax.set('#cta_circle', { opacity: 1 });
                    (0, _commonJsProline.hand)(_cta_circle.cta_circle, "cta_circle", { brushSize: 8, speed: 1, cleanFromBehind: false, cleanUpWhenDone: false });
                } }));
        } }, "+=.5");

    // hand(arrow_green_2a, "arrow_green_2a", {brushsize:5, speed:9})
}

function do_cta() {

    var tl = new TimelineMax({});
}

},{"../../_common/js/proline":1,"./cta_circle":2,"./super1":4,"handwrite":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super1 = [{
  "x": 13,
  "y": 14
}, {
  "x": 13,
  "y": 18
}, {
  "x": 13,
  "y": 23
}, {
  "x": 13,
  "y": 26
}, {
  "x": 13,
  "y": 29
}, {
  "x": 25,
  "y": 15
}, {
  "x": 22,
  "y": 18
}, {
  "x": 19,
  "y": 22
}, {
  "x": 16,
  "y": 24
}, {
  "x": 16,
  "y": 25
}, {
  "x": 19,
  "y": 25
}, {
  "x": 20,
  "y": 28
}, {
  "x": 22,
  "y": 29
}, {
  "x": 24,
  "y": 31
}, {
  "x": 32,
  "y": 13
}, {
  "x": 32,
  "y": 18
}, {
  "x": 31,
  "y": 23
}, {
  "x": 31,
  "y": 27
}, {
  "x": 30,
  "y": 29
}, {
  "x": 30,
  "y": 25
}, {
  "x": 30,
  "y": 20
}, {
  "x": 30,
  "y": 15
}, {
  "x": 30,
  "y": 17
}, {
  "x": 34,
  "y": 20
}, {
  "x": 36,
  "y": 23
}, {
  "x": 40,
  "y": 26
}, {
  "x": 42,
  "y": 28
}, {
  "x": 43,
  "y": 28
}, {
  "x": 43,
  "y": 24
}, {
  "x": 44,
  "y": 19
}, {
  "x": 44,
  "y": 14
}, {
  "x": 45,
  "y": 11
}, {
  "x": 54,
  "y": 16
}, {
  "x": 54,
  "y": 17
}, {
  "x": 52,
  "y": 19
}, {
  "x": 52,
  "y": 22
}, {
  "x": 52,
  "y": 25
}, {
  "x": 54,
  "y": 27
}, {
  "x": 57,
  "y": 28
}, {
  "x": 60,
  "y": 28
}, {
  "x": 63,
  "y": 28
}, {
  "x": 65,
  "y": 25
}, {
  "x": 66,
  "y": 22
}, {
  "x": 65,
  "y": 18
}, {
  "x": 63,
  "y": 16
}, {
  "x": 60,
  "y": 15
}, {
  "x": 56,
  "y": 15
}, {
  "x": 53,
  "y": 16
}, {
  "x": 51,
  "y": 17
}, {
  "x": 70,
  "y": 16
}, {
  "x": 71,
  "y": 21
}, {
  "x": 71,
  "y": 24
}, {
  "x": 72,
  "y": 28
}, {
  "x": 74,
  "y": 30
}, {
  "x": 76,
  "y": 27
}, {
  "x": 78,
  "y": 23
}, {
  "x": 80,
  "y": 19
}, {
  "x": 82,
  "y": 16
}, {
  "x": 82,
  "y": 18
}, {
  "x": 82,
  "y": 22
}, {
  "x": 82,
  "y": 26
}, {
  "x": 84,
  "y": 29
}, {
  "x": 86,
  "y": 29
}, {
  "x": 88,
  "y": 23
}, {
  "x": 91,
  "y": 18
}, {
  "x": 93,
  "y": 13
}, {
  "x": 95,
  "y": 15
}, {
  "x": 96,
  "y": 13
}, {
  "x": 97,
  "y": 15
}, {
  "x": 97,
  "y": 19
}, {
  "x": 97,
  "y": 22
}, {
  "x": 97,
  "y": 25
}, {
  "x": 96,
  "y": 28
}, {
  "x": 96,
  "y": 31
}, {
  "x": 105,
  "y": 16
}, {
  "x": 105,
  "y": 20
}, {
  "x": 105,
  "y": 25
}, {
  "x": 105,
  "y": 29
}, {
  "x": 105,
  "y": 27
}, {
  "x": 105,
  "y": 23
}, {
  "x": 105,
  "y": 18
}, {
  "x": 105,
  "y": 12
}, {
  "x": 107,
  "y": 15
}, {
  "x": 110,
  "y": 19
}, {
  "x": 114,
  "y": 23
}, {
  "x": 115,
  "y": 26
}, {
  "x": 117,
  "y": 27
}, {
  "x": 117,
  "y": 24
}, {
  "x": 117,
  "y": 19
}, {
  "x": 118,
  "y": 14
}, {
  "x": 120,
  "y": 11
}, {
  "x": 120,
  "y": 14
}, {
  "x": 135,
  "y": 17
}, {
  "x": 133,
  "y": 16
}, {
  "x": 130,
  "y": 16
}, {
  "x": 127,
  "y": 16
}, {
  "x": 125,
  "y": 17
}, {
  "x": 124,
  "y": 20
}, {
  "x": 124,
  "y": 23
}, {
  "x": 126,
  "y": 25
}, {
  "x": 128,
  "y": 26
}, {
  "x": 131,
  "y": 26
}, {
  "x": 134,
  "y": 26
}, {
  "x": 137,
  "y": 26
}, {
  "x": 139,
  "y": 24
}, {
  "x": 141,
  "y": 22
}, {
  "x": 140,
  "y": 22
}, {
  "x": 135,
  "y": 22
}, {
  "x": 131,
  "y": 22
}, {
  "x": 128,
  "y": 22
}, {
  "x": 160,
  "y": 14
}, {
  "x": 157,
  "y": 14
}, {
  "x": 154,
  "y": 14
}, {
  "x": 154,
  "y": 17
}, {
  "x": 156,
  "y": 19
}, {
  "x": 159,
  "y": 20
}, {
  "x": 162,
  "y": 21
}, {
  "x": 163,
  "y": 23
}, {
  "x": 161,
  "y": 26
}, {
  "x": 156,
  "y": 28
}, {
  "x": 153,
  "y": 28
}, {
  "x": 151,
  "y": 25
}, {
  "x": 170,
  "y": 16
}, {
  "x": 170,
  "y": 21
}, {
  "x": 169,
  "y": 26
}, {
  "x": 168,
  "y": 30
}, {
  "x": 168,
  "y": 31
}, {
  "x": 168,
  "y": 28
}, {
  "x": 168,
  "y": 25
}, {
  "x": 174,
  "y": 15
}, {
  "x": 178,
  "y": 15
}, {
  "x": 180,
  "y": 16
}, {
  "x": 177,
  "y": 20
}, {
  "x": 173,
  "y": 23
}, {
  "x": 170,
  "y": 23
}, {
  "x": 189,
  "y": 16
}, {
  "x": 187,
  "y": 19
}, {
  "x": 185,
  "y": 21
}, {
  "x": 185,
  "y": 24
}, {
  "x": 186,
  "y": 26
}, {
  "x": 189,
  "y": 27
}, {
  "x": 192,
  "y": 28
}, {
  "x": 195,
  "y": 28
}, {
  "x": 198,
  "y": 28
}, {
  "x": 200,
  "y": 27
}, {
  "x": 203,
  "y": 25
}, {
  "x": 204,
  "y": 23
}, {
  "x": 204,
  "y": 20
}, {
  "x": 203,
  "y": 18
}, {
  "x": 200,
  "y": 17
}, {
  "x": 197,
  "y": 15
}, {
  "x": 193,
  "y": 15
}, {
  "x": 190,
  "y": 15
}, {
  "x": 186,
  "y": 16
}, {
  "x": 184,
  "y": 19
}, {
  "x": 210,
  "y": 15
}, {
  "x": 209,
  "y": 20
}, {
  "x": 207,
  "y": 25
}, {
  "x": 207,
  "y": 29
}, {
  "x": 206,
  "y": 29
}, {
  "x": 206,
  "y": 24
}, {
  "x": 206,
  "y": 19
}, {
  "x": 206,
  "y": 15
}, {
  "x": 208,
  "y": 14
}, {
  "x": 211,
  "y": 14
}, {
  "x": 214,
  "y": 14
}, {
  "x": 217,
  "y": 14
}, {
  "x": 217,
  "y": 17
}, {
  "x": 216,
  "y": 20
}, {
  "x": 211,
  "y": 22
}, {
  "x": 211,
  "y": 21
}, {
  "x": 213,
  "y": 23
}, {
  "x": 216,
  "y": 26
}, {
  "x": 218,
  "y": 28
}, {
  "x": 219,
  "y": 29
}, {
  "x": 228,
  "y": 15
}, {
  "x": 235,
  "y": 15
}, {
  "x": 238,
  "y": 14
}, {
  "x": 228,
  "y": 17
}, {
  "x": 227,
  "y": 21
}, {
  "x": 227,
  "y": 25
}, {
  "x": 226,
  "y": 28
}, {
  "x": 225,
  "y": 27
}, {
  "x": 243,
  "y": 14
}, {
  "x": 240,
  "y": 13
}, {
  "x": 237,
  "y": 14
}, {
  "x": 236,
  "y": 17
}, {
  "x": 238,
  "y": 19
}, {
  "x": 242,
  "y": 20
}, {
  "x": 245,
  "y": 22
}, {
  "x": 245,
  "y": 26
}, {
  "x": 242,
  "y": 28
}, {
  "x": 238,
  "y": 28
}, {
  "x": 236,
  "y": 26
}, {
  "x": 279,
  "y": 18
}, {
  "x": 278,
  "y": 16
}, {
  "x": 275,
  "y": 15
}, {
  "x": 272,
  "y": 14
}, {
  "x": 268,
  "y": 13
}, {
  "x": 265,
  "y": 14
}, {
  "x": 262,
  "y": 16
}, {
  "x": 261,
  "y": 19
}, {
  "x": 260,
  "y": 22
}, {
  "x": 260,
  "y": 26
}, {
  "x": 263,
  "y": 28
}, {
  "x": 266,
  "y": 28
}, {
  "x": 271,
  "y": 28
}, {
  "x": 274,
  "y": 27
}, {
  "x": 277,
  "y": 25
}, {
  "x": 288,
  "y": 16
}, {
  "x": 283,
  "y": 22
}, {
  "x": 279,
  "y": 26
}, {
  "x": 275,
  "y": 31
}, {
  "x": 275,
  "y": 28
}, {
  "x": 281,
  "y": 23
}, {
  "x": 287,
  "y": 16
}, {
  "x": 288,
  "y": 12
}, {
  "x": 289,
  "y": 15
}, {
  "x": 290,
  "y": 19
}, {
  "x": 290,
  "y": 24
}, {
  "x": 290,
  "y": 27
}, {
  "x": 291,
  "y": 29
}, {
  "x": 280,
  "y": 24
}, {
  "x": 284,
  "y": 25
}, {
  "x": 289,
  "y": 25
}, {
  "x": 294,
  "y": 25
}, {
  "x": 300,
  "y": 16
}, {
  "x": 300,
  "y": 15
}, {
  "x": 300,
  "y": 21
}, {
  "x": 297,
  "y": 26
}, {
  "x": 296,
  "y": 29
}, {
  "x": 295,
  "y": 28
}, {
  "x": 300,
  "y": 14
}, {
  "x": 301,
  "y": 17
}, {
  "x": 304,
  "y": 21
}, {
  "x": 306,
  "y": 24
}, {
  "x": 307,
  "y": 27
}, {
  "x": 309,
  "y": 29
}, {
  "x": 311,
  "y": 14
}, {
  "x": 311,
  "y": 18
}, {
  "x": 311,
  "y": 24
}, {
  "x": 310,
  "y": 27
}, {
  "x": 310,
  "y": 31
}, {
  "x": 328,
  "y": 14
}, {
  "x": 327,
  "y": 18
}, {
  "x": 326,
  "y": 24
}, {
  "x": 326,
  "y": 28
}, {
  "x": 324,
  "y": 31
}, {
  "x": 323,
  "y": 31
}, {
  "x": 332,
  "y": 15
}, {
  "x": 336,
  "y": 15
}, {
  "x": 340,
  "y": 15
}, {
  "x": 340,
  "y": 18
}, {
  "x": 336,
  "y": 21
}, {
  "x": 332,
  "y": 23
}, {
  "x": 329,
  "y": 23
}, {
  "x": 347,
  "y": 15
}, {
  "x": 345,
  "y": 19
}, {
  "x": 342,
  "y": 23
}, {
  "x": 340,
  "y": 27
}, {
  "x": 340,
  "y": 30
}, {
  "x": 351,
  "y": 14
}, {
  "x": 351,
  "y": 17
}, {
  "x": 352,
  "y": 20
}, {
  "x": 353,
  "y": 24
}, {
  "x": 354,
  "y": 27
}, {
  "x": 355,
  "y": 30
}, {
  "x": 341,
  "y": 24
}, {
  "x": 346,
  "y": 24
}, {
  "x": 351,
  "y": 24
}, {
  "x": 359,
  "y": 13
}, {
  "x": 362,
  "y": 15
}, {
  "x": 364,
  "y": 18
}, {
  "x": 365,
  "y": 20
}, {
  "x": 366,
  "y": 21
}, {
  "x": 370,
  "y": 17
}, {
  "x": 373,
  "y": 14
}, {
  "x": 375,
  "y": 12
}, {
  "x": 363,
  "y": 21
}, {
  "x": 363,
  "y": 25
}, {
  "x": 363,
  "y": 30
}, {
  "x": 362,
  "y": 32
}];

exports.hand_super1 = hand_super1;

},{}],5:[function(require,module,exports){
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

},{}]},{},[3])


//# sourceMappingURL=main.js.map
