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

},{"handwrite":10}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arrow_green_1 = [{
  "x": 5,
  "y": 61
}, {
  "x": 7,
  "y": 60
}, {
  "x": 9,
  "y": 59
}, {
  "x": 12,
  "y": 58
}, {
  "x": 16,
  "y": 55
}, {
  "x": 21,
  "y": 53
}, {
  "x": 26,
  "y": 51
}, {
  "x": 30,
  "y": 49
}, {
  "x": 35,
  "y": 48
}, {
  "x": 38,
  "y": 46
}, {
  "x": 42,
  "y": 45
}, {
  "x": 45,
  "y": 44
}, {
  "x": 48,
  "y": 43
}, {
  "x": 52,
  "y": 41
}, {
  "x": 55,
  "y": 40
}, {
  "x": 58,
  "y": 40
}, {
  "x": 62,
  "y": 39
}, {
  "x": 64,
  "y": 38
}, {
  "x": 66,
  "y": 38
}, {
  "x": 69,
  "y": 38
}, {
  "x": 72,
  "y": 38
}, {
  "x": 72,
  "y": 36
}, {
  "x": 6,
  "y": 61
}, {
  "x": 8,
  "y": 60
}, {
  "x": 10,
  "y": 59
}, {
  "x": 14,
  "y": 56
}, {
  "x": 19,
  "y": 54
}, {
  "x": 23,
  "y": 52
}, {
  "x": 28,
  "y": 50
}, {
  "x": 32,
  "y": 49
}, {
  "x": 36,
  "y": 47
}, {
  "x": 40,
  "y": 45
}, {
  "x": 43,
  "y": 44
}, {
  "x": 46,
  "y": 43
}, {
  "x": 50,
  "y": 42
}, {
  "x": 53,
  "y": 41
}, {
  "x": 56,
  "y": 40
}, {
  "x": 61,
  "y": 39
}, {
  "x": 63,
  "y": 39
}, {
  "x": 65,
  "y": 38
}, {
  "x": 67,
  "y": 38
}, {
  "x": 71,
  "y": 38
}, {
  "x": 72,
  "y": 37
}, {
  "x": 49,
  "y": 17
}, {
  "x": 52,
  "y": 17
}, {
  "x": 57,
  "y": 19
}, {
  "x": 62,
  "y": 21
}, {
  "x": 66,
  "y": 23
}, {
  "x": 70,
  "y": 25
}, {
  "x": 73,
  "y": 26
}, {
  "x": 78,
  "y": 28
}, {
  "x": 84,
  "y": 30
}, {
  "x": 86,
  "y": 31
}, {
  "x": 89,
  "y": 33
}, {
  "x": 91,
  "y": 33
}, {
  "x": 88,
  "y": 33
}, {
  "x": 84,
  "y": 35
}, {
  "x": 80,
  "y": 37
}, {
  "x": 75,
  "y": 39
}, {
  "x": 70,
  "y": 43
}, {
  "x": 64,
  "y": 46
}, {
  "x": 60,
  "y": 49
}, {
  "x": 56,
  "y": 52
}, {
  "x": 52,
  "y": 54
}, {
  "x": 50,
  "y": 56
}, {
  "x": 51,
  "y": 54
}, {
  "x": 49,
  "y": 17
}, {
  "x": 52,
  "y": 17
}, {
  "x": 57,
  "y": 19
}, {
  "x": 62,
  "y": 21
}, {
  "x": 66,
  "y": 23
}, {
  "x": 70,
  "y": 25
}, {
  "x": 73,
  "y": 26
}, {
  "x": 78,
  "y": 28
}, {
  "x": 84,
  "y": 30
}, {
  "x": 86,
  "y": 31
}, {
  "x": 89,
  "y": 33
}, {
  "x": 91,
  "y": 33
}, {
  "x": 88,
  "y": 33
}, {
  "x": 84,
  "y": 35
}, {
  "x": 80,
  "y": 37
}, {
  "x": 75,
  "y": 39
}, {
  "x": 70,
  "y": 43
}, {
  "x": 64,
  "y": 46
}, {
  "x": 60,
  "y": 49
}, {
  "x": 56,
  "y": 52
}, {
  "x": 52,
  "y": 54
}, {
  "x": 50,
  "y": 56
}, {
  "x": 51,
  "y": 54
}, {
  "x": 115,
  "y": 28
}, {
  "x": 112,
  "y": 28
}, {
  "x": 109,
  "y": 28
}, {
  "x": 106,
  "y": 28
}, {
  "x": 104,
  "y": 29
}, {
  "x": 102,
  "y": 31
}, {
  "x": 101,
  "y": 33
}, {
  "x": 101,
  "y": 35
}, {
  "x": 101,
  "y": 37
}, {
  "x": 103,
  "y": 39
}, {
  "x": 106,
  "y": 41
}, {
  "x": 110,
  "y": 41
}, {
  "x": 115,
  "y": 41
}, {
  "x": 117,
  "y": 40
}, {
  "x": 118,
  "y": 38
}, {
  "x": 118,
  "y": 35
}, {
  "x": 118,
  "y": 33
}, {
  "x": 116,
  "y": 31
}, {
  "x": 114,
  "y": 30
}, {
  "x": 111,
  "y": 30
}, {
  "x": 115,
  "y": 28
}, {
  "x": 112,
  "y": 28
}, {
  "x": 109,
  "y": 28
}, {
  "x": 106,
  "y": 28
}, {
  "x": 104,
  "y": 29
}, {
  "x": 102,
  "y": 31
}, {
  "x": 101,
  "y": 33
}, {
  "x": 101,
  "y": 35
}, {
  "x": 101,
  "y": 37
}, {
  "x": 103,
  "y": 39
}, {
  "x": 106,
  "y": 41
}, {
  "x": 110,
  "y": 41
}, {
  "x": 115,
  "y": 41
}, {
  "x": 117,
  "y": 40
}, {
  "x": 118,
  "y": 38
}, {
  "x": 118,
  "y": 35
}, {
  "x": 118,
  "y": 33
}, {
  "x": 116,
  "y": 31
}, {
  "x": 114,
  "y": 30
}, {
  "x": 111,
  "y": 30
}];

exports.arrow_green_1 = arrow_green_1;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arrow_green_2a = [{
  "x": 14,
  "y": 233
}, {
  "x": 14,
  "y": 236
}, {
  "x": 14,
  "y": 240
}, {
  "x": 14,
  "y": 244
}, {
  "x": 14,
  "y": 246
}, {
  "x": 14,
  "y": 248
}, {
  "x": 14,
  "y": 233
}, {
  "x": 14,
  "y": 236
}, {
  "x": 14,
  "y": 240
}, {
  "x": 14,
  "y": 244
}, {
  "x": 14,
  "y": 246
}, {
  "x": 14,
  "y": 248
}, {
  "x": 14,
  "y": 233
}, {
  "x": 14,
  "y": 236
}, {
  "x": 14,
  "y": 240
}, {
  "x": 14,
  "y": 244
}, {
  "x": 14,
  "y": 246
}, {
  "x": 14,
  "y": 248
}, {
  "x": 11,
  "y": 226
}, {
  "x": 9,
  "y": 229
}, {
  "x": 8,
  "y": 232
}, {
  "x": 4,
  "y": 235
}, {
  "x": 2,
  "y": 237
}, {
  "x": 11,
  "y": 226
}, {
  "x": 9,
  "y": 229
}, {
  "x": 8,
  "y": 232
}, {
  "x": 4,
  "y": 235
}, {
  "x": 2,
  "y": 237
}, {
  "x": 11,
  "y": 226
}, {
  "x": 9,
  "y": 229
}, {
  "x": 8,
  "y": 232
}, {
  "x": 4,
  "y": 235
}, {
  "x": 2,
  "y": 237
}, {
  "x": 14,
  "y": 228
}, {
  "x": 16,
  "y": 230
}, {
  "x": 21,
  "y": 234
}, {
  "x": 27,
  "y": 236
}, {
  "x": 28,
  "y": 237
}, {
  "x": 15,
  "y": 229
}, {
  "x": 19,
  "y": 232
}, {
  "x": 24,
  "y": 235
}, {
  "x": 28,
  "y": 236
}, {
  "x": 14,
  "y": 228
}, {
  "x": 16,
  "y": 230
}, {
  "x": 21,
  "y": 234
}, {
  "x": 27,
  "y": 236
}, {
  "x": 28,
  "y": 237
}, {
  "x": 23,
  "y": 182
}, {
  "x": 28,
  "y": 185
}, {
  "x": 36,
  "y": 189
}, {
  "x": 39,
  "y": 190
}, {
  "x": 41,
  "y": 191
}, {
  "x": 39,
  "y": 187
}, {
  "x": 38,
  "y": 183
}, {
  "x": 36,
  "y": 180
}, {
  "x": 34,
  "y": 180
}, {
  "x": 32,
  "y": 186
}, {
  "x": 29,
  "y": 192
}, {
  "x": 27,
  "y": 195
}, {
  "x": 23,
  "y": 182
}, {
  "x": 28,
  "y": 185
}, {
  "x": 36,
  "y": 189
}, {
  "x": 39,
  "y": 190
}, {
  "x": 41,
  "y": 191
}, {
  "x": 39,
  "y": 187
}, {
  "x": 38,
  "y": 183
}, {
  "x": 36,
  "y": 180
}, {
  "x": 34,
  "y": 180
}, {
  "x": 32,
  "y": 186
}, {
  "x": 29,
  "y": 192
}, {
  "x": 27,
  "y": 195
}, {
  "x": 23,
  "y": 182
}, {
  "x": 28,
  "y": 185
}, {
  "x": 36,
  "y": 189
}, {
  "x": 39,
  "y": 190
}, {
  "x": 41,
  "y": 191
}, {
  "x": 39,
  "y": 187
}, {
  "x": 38,
  "y": 183
}, {
  "x": 36,
  "y": 180
}, {
  "x": 34,
  "y": 180
}, {
  "x": 32,
  "y": 186
}, {
  "x": 29,
  "y": 192
}, {
  "x": 27,
  "y": 195
}];

exports.arrow_green_2a = arrow_green_2a;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arrow_yellow_1 = [{
  "x": 5,
  "y": 88
}, {
  "x": 8,
  "y": 89
}, {
  "x": 14,
  "y": 92
}, {
  "x": 18,
  "y": 94
}, {
  "x": 25,
  "y": 97
}, {
  "x": 29,
  "y": 98
}, {
  "x": 33,
  "y": 99
}, {
  "x": 37,
  "y": 100
}, {
  "x": 41,
  "y": 101
}, {
  "x": 47,
  "y": 102
}, {
  "x": 52,
  "y": 103
}, {
  "x": 58,
  "y": 103
}, {
  "x": 63,
  "y": 103
}, {
  "x": 70,
  "y": 103
}, {
  "x": 77,
  "y": 102
}, {
  "x": 85,
  "y": 100
}, {
  "x": 94,
  "y": 99
}, {
  "x": 100,
  "y": 97
}, {
  "x": 108,
  "y": 95
}, {
  "x": 115,
  "y": 94
}, {
  "x": 123,
  "y": 92
}, {
  "x": 128,
  "y": 91
}, {
  "x": 132,
  "y": 90
}, {
  "x": 140,
  "y": 87
}, {
  "x": 144,
  "y": 86
}, {
  "x": 146,
  "y": 85
}, {
  "x": 147,
  "y": 84
}, {
  "x": 149,
  "y": 83
}, {
  "x": 6,
  "y": 89
}, {
  "x": 10,
  "y": 90
}, {
  "x": 16,
  "y": 93
}, {
  "x": 21,
  "y": 95
}, {
  "x": 27,
  "y": 97
}, {
  "x": 30,
  "y": 98
}, {
  "x": 36,
  "y": 100
}, {
  "x": 39,
  "y": 101
}, {
  "x": 45,
  "y": 102
}, {
  "x": 49,
  "y": 102
}, {
  "x": 55,
  "y": 103
}, {
  "x": 61,
  "y": 103
}, {
  "x": 66,
  "y": 103
}, {
  "x": 72,
  "y": 103
}, {
  "x": 80,
  "y": 101
}, {
  "x": 89,
  "y": 100
}, {
  "x": 97,
  "y": 98
}, {
  "x": 105,
  "y": 96
}, {
  "x": 112,
  "y": 95
}, {
  "x": 118,
  "y": 93
}, {
  "x": 125,
  "y": 91
}, {
  "x": 130,
  "y": 90
}, {
  "x": 135,
  "y": 89
}, {
  "x": 142,
  "y": 86
}, {
  "x": 145,
  "y": 85
}, {
  "x": 146,
  "y": 84
}, {
  "x": 148,
  "y": 83
}, {
  "x": 133,
  "y": 79
}, {
  "x": 135,
  "y": 79
}, {
  "x": 139,
  "y": 79
}, {
  "x": 144,
  "y": 78
}, {
  "x": 150,
  "y": 77
}, {
  "x": 153,
  "y": 76
}, {
  "x": 156,
  "y": 76
}, {
  "x": 158,
  "y": 76
}, {
  "x": 158,
  "y": 79
}, {
  "x": 156,
  "y": 84
}, {
  "x": 154,
  "y": 93
}, {
  "x": 153,
  "y": 100
}, {
  "x": 152,
  "y": 104
}, {
  "x": 134,
  "y": 79
}, {
  "x": 137,
  "y": 79
}, {
  "x": 141,
  "y": 78
}, {
  "x": 148,
  "y": 77
}, {
  "x": 152,
  "y": 76
}, {
  "x": 155,
  "y": 76
}, {
  "x": 157,
  "y": 76
}, {
  "x": 158,
  "y": 77
}, {
  "x": 157,
  "y": 82
}, {
  "x": 154,
  "y": 89
}, {
  "x": 153,
  "y": 97
}, {
  "x": 152,
  "y": 102
}, {
  "x": 174,
  "y": 41
}, {
  "x": 178,
  "y": 44
}, {
  "x": 185,
  "y": 50
}, {
  "x": 194,
  "y": 55
}, {
  "x": 199,
  "y": 59
}, {
  "x": 201,
  "y": 61
}, {
  "x": 176,
  "y": 42
}, {
  "x": 181,
  "y": 47
}, {
  "x": 189,
  "y": 52
}, {
  "x": 197,
  "y": 57
}, {
  "x": 201,
  "y": 60
}, {
  "x": 189,
  "y": 37
}, {
  "x": 186,
  "y": 41
}, {
  "x": 181,
  "y": 48
}, {
  "x": 176,
  "y": 57
}, {
  "x": 174,
  "y": 62
}, {
  "x": 173,
  "y": 63
}, {
  "x": 188,
  "y": 38
}, {
  "x": 184,
  "y": 44
}, {
  "x": 178,
  "y": 53
}, {
  "x": 175,
  "y": 60
}, {
  "x": 174,
  "y": 63
}, {
  "x": 212,
  "y": 30
}, {
  "x": 217,
  "y": 27
}, {
  "x": 226,
  "y": 22
}, {
  "x": 235,
  "y": 17
}, {
  "x": 244,
  "y": 12
}, {
  "x": 249,
  "y": 10
}, {
  "x": 249,
  "y": 9
}, {
  "x": 212,
  "y": 30
}, {
  "x": 217,
  "y": 27
}, {
  "x": 226,
  "y": 22
}, {
  "x": 235,
  "y": 17
}, {
  "x": 244,
  "y": 12
}, {
  "x": 249,
  "y": 10
}, {
  "x": 249,
  "y": 9
}, {
  "x": 231,
  "y": 7
}, {
  "x": 230,
  "y": 6
}, {
  "x": 234,
  "y": 6
}, {
  "x": 241,
  "y": 6
}, {
  "x": 248,
  "y": 6
}, {
  "x": 253,
  "y": 5
}, {
  "x": 254,
  "y": 7
}, {
  "x": 251,
  "y": 12
}, {
  "x": 248,
  "y": 18
}, {
  "x": 248,
  "y": 20
}, {
  "x": 231,
  "y": 7
}, {
  "x": 230,
  "y": 6
}, {
  "x": 234,
  "y": 6
}, {
  "x": 241,
  "y": 6
}, {
  "x": 248,
  "y": 6
}, {
  "x": 253,
  "y": 5
}, {
  "x": 254,
  "y": 7
}, {
  "x": 251,
  "y": 12
}, {
  "x": 248,
  "y": 18
}, {
  "x": 248,
  "y": 20
}];

exports.arrow_yellow_1 = arrow_yellow_1;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cta_circle = [{
  "x": 18,
  "y": 29
}, {
  "x": 20,
  "y": 26
}, {
  "x": 21,
  "y": 24
}, {
  "x": 23,
  "y": 22
}, {
  "x": 25,
  "y": 20
}, {
  "x": 27,
  "y": 19
}, {
  "x": 30,
  "y": 18
}, {
  "x": 33,
  "y": 16
}, {
  "x": 36,
  "y": 16
}, {
  "x": 39,
  "y": 15
}, {
  "x": 43,
  "y": 14
}, {
  "x": 45,
  "y": 13
}, {
  "x": 49,
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
  "x": 62,
  "y": 12
}, {
  "x": 67,
  "y": 11
}, {
  "x": 72,
  "y": 10
}, {
  "x": 76,
  "y": 10
}, {
  "x": 80,
  "y": 10
}, {
  "x": 83,
  "y": 10
}, {
  "x": 86,
  "y": 10
}, {
  "x": 90,
  "y": 10
}, {
  "x": 94,
  "y": 10
}, {
  "x": 98,
  "y": 10
}, {
  "x": 103,
  "y": 10
}, {
  "x": 107,
  "y": 10
}, {
  "x": 110,
  "y": 11
}, {
  "x": 114,
  "y": 11
}, {
  "x": 118,
  "y": 12
}, {
  "x": 123,
  "y": 13
}, {
  "x": 127,
  "y": 15
}, {
  "x": 131,
  "y": 15
}, {
  "x": 134,
  "y": 16
}, {
  "x": 138,
  "y": 17
}, {
  "x": 141,
  "y": 18
}, {
  "x": 145,
  "y": 19
}, {
  "x": 148,
  "y": 20
}, {
  "x": 151,
  "y": 21
}, {
  "x": 154,
  "y": 21
}, {
  "x": 157,
  "y": 22
}, {
  "x": 159,
  "y": 23
}, {
  "x": 162,
  "y": 24
}, {
  "x": 165,
  "y": 25
}, {
  "x": 167,
  "y": 26
}, {
  "x": 169,
  "y": 28
}, {
  "x": 171,
  "y": 31
}, {
  "x": 172,
  "y": 33
}, {
  "x": 173,
  "y": 36
}, {
  "x": 174,
  "y": 39
}, {
  "x": 174,
  "y": 42
}, {
  "x": 174,
  "y": 45
}, {
  "x": 172,
  "y": 46
}, {
  "x": 169,
  "y": 47
}, {
  "x": 164,
  "y": 48
}, {
  "x": 161,
  "y": 48
}, {
  "x": 157,
  "y": 48
}, {
  "x": 154,
  "y": 48
}, {
  "x": 151,
  "y": 48
}, {
  "x": 148,
  "y": 48
}, {
  "x": 143,
  "y": 48
}, {
  "x": 140,
  "y": 48
}, {
  "x": 137,
  "y": 48
}, {
  "x": 134,
  "y": 48
}, {
  "x": 132,
  "y": 49
}, {
  "x": 129,
  "y": 49
}, {
  "x": 126,
  "y": 50
}, {
  "x": 122,
  "y": 51
}, {
  "x": 120,
  "y": 52
}, {
  "x": 115,
  "y": 53
}, {
  "x": 111,
  "y": 54
}, {
  "x": 107,
  "y": 55
}, {
  "x": 104,
  "y": 56
}, {
  "x": 100,
  "y": 57
}, {
  "x": 97,
  "y": 57
}, {
  "x": 94,
  "y": 57
}, {
  "x": 90,
  "y": 58
}, {
  "x": 86,
  "y": 59
}, {
  "x": 82,
  "y": 59
}, {
  "x": 78,
  "y": 59
}, {
  "x": 74,
  "y": 59
}, {
  "x": 70,
  "y": 59
}, {
  "x": 67,
  "y": 59
}, {
  "x": 64,
  "y": 59
}, {
  "x": 60,
  "y": 59
}, {
  "x": 56,
  "y": 59
}, {
  "x": 51,
  "y": 59
}, {
  "x": 47,
  "y": 59
}, {
  "x": 43,
  "y": 59
}, {
  "x": 40,
  "y": 59
}, {
  "x": 36,
  "y": 59
}, {
  "x": 32,
  "y": 59
}, {
  "x": 29,
  "y": 58
}, {
  "x": 24,
  "y": 57
}, {
  "x": 22,
  "y": 56
}, {
  "x": 19,
  "y": 55
}, {
  "x": 16,
  "y": 54
}, {
  "x": 14,
  "y": 52
}, {
  "x": 18,
  "y": 28
}, {
  "x": 20,
  "y": 25
}, {
  "x": 22,
  "y": 23
}, {
  "x": 24,
  "y": 22
}, {
  "x": 26,
  "y": 20
}, {
  "x": 28,
  "y": 19
}, {
  "x": 31,
  "y": 17
}, {
  "x": 34,
  "y": 16
}, {
  "x": 37,
  "y": 16
}, {
  "x": 40,
  "y": 15
}, {
  "x": 44,
  "y": 14
}, {
  "x": 47,
  "y": 13
}, {
  "x": 50,
  "y": 13
}, {
  "x": 53,
  "y": 13
}, {
  "x": 56,
  "y": 13
}, {
  "x": 59,
  "y": 12
}, {
  "x": 64,
  "y": 11
}, {
  "x": 69,
  "y": 11
}, {
  "x": 73,
  "y": 10
}, {
  "x": 77,
  "y": 10
}, {
  "x": 81,
  "y": 10
}, {
  "x": 84,
  "y": 10
}, {
  "x": 88,
  "y": 10
}, {
  "x": 91,
  "y": 10
}, {
  "x": 96,
  "y": 10
}, {
  "x": 100,
  "y": 10
}, {
  "x": 104,
  "y": 10
}, {
  "x": 108,
  "y": 10
}, {
  "x": 111,
  "y": 11
}, {
  "x": 115,
  "y": 12
}, {
  "x": 120,
  "y": 13
}, {
  "x": 124,
  "y": 14
}, {
  "x": 129,
  "y": 15
}, {
  "x": 132,
  "y": 15
}, {
  "x": 135,
  "y": 16
}, {
  "x": 138,
  "y": 18
}, {
  "x": 143,
  "y": 18
}, {
  "x": 146,
  "y": 19
}, {
  "x": 149,
  "y": 20
}, {
  "x": 152,
  "y": 21
}, {
  "x": 155,
  "y": 22
}, {
  "x": 157,
  "y": 23
}, {
  "x": 160,
  "y": 24
}, {
  "x": 163,
  "y": 24
}, {
  "x": 166,
  "y": 25
}, {
  "x": 167,
  "y": 27
}, {
  "x": 170,
  "y": 29
}, {
  "x": 171,
  "y": 32
}, {
  "x": 173,
  "y": 34
}, {
  "x": 173,
  "y": 37
}, {
  "x": 174,
  "y": 40
}, {
  "x": 174,
  "y": 43
}, {
  "x": 173,
  "y": 45
}, {
  "x": 171,
  "y": 46
}, {
  "x": 168,
  "y": 48
}, {
  "x": 163,
  "y": 48
}, {
  "x": 159,
  "y": 48
}, {
  "x": 156,
  "y": 48
}, {
  "x": 153,
  "y": 48
}, {
  "x": 150,
  "y": 48
}, {
  "x": 146,
  "y": 48
}, {
  "x": 142,
  "y": 48
}, {
  "x": 139,
  "y": 48
}, {
  "x": 136,
  "y": 48
}, {
  "x": 133,
  "y": 48
}, {
  "x": 131,
  "y": 49
}, {
  "x": 128,
  "y": 49
}, {
  "x": 124,
  "y": 51
}, {
  "x": 121,
  "y": 51
}, {
  "x": 118,
  "y": 52
}, {
  "x": 114,
  "y": 54
}, {
  "x": 110,
  "y": 54
}, {
  "x": 106,
  "y": 55
}, {
  "x": 102,
  "y": 56
}, {
  "x": 99,
  "y": 57
}, {
  "x": 96,
  "y": 57
}, {
  "x": 93,
  "y": 58
}, {
  "x": 89,
  "y": 59
}, {
  "x": 84,
  "y": 59
}, {
  "x": 81,
  "y": 59
}, {
  "x": 76,
  "y": 59
}, {
  "x": 73,
  "y": 59
}, {
  "x": 69,
  "y": 59
}, {
  "x": 66,
  "y": 59
}, {
  "x": 63,
  "y": 59
}, {
  "x": 59,
  "y": 59
}, {
  "x": 55,
  "y": 59
}, {
  "x": 50,
  "y": 59
}, {
  "x": 46,
  "y": 59
}, {
  "x": 42,
  "y": 59
}, {
  "x": 39,
  "y": 59
}, {
  "x": 35,
  "y": 59
}, {
  "x": 31,
  "y": 59
}, {
  "x": 27,
  "y": 58
}, {
  "x": 23,
  "y": 57
}, {
  "x": 21,
  "y": 56
}, {
  "x": 18,
  "y": 54
}, {
  "x": 15,
  "y": 53
}, {
  "x": 14,
  "y": 51
}];

exports.cta_circle = cta_circle;

},{}],6:[function(require,module,exports){
"use strict";

var _commonJsProline = require("../../_common/js/proline");

var _arrow_green_1 = require("./arrow_green_1");

var _super1 = require("./super1");

var _super2 = require("./super2");

var _super3 = require("./super3");

var _arrow_yellow_1 = require("./arrow_yellow_1");

var _arrow_green_2a = require("./arrow_green_2a");

var _cta_circle = require("./cta_circle");

void 0;

setTimeout(function () {
    start();
}, 100);

function start() {
    do_arrow_green();
}

function do_arrow_green() {
    var _masker = (0, _commonJsProline.masker)();

    var arrow_green_1 = _masker.arrow_green_1;
    var arrow_green_1a = _masker.arrow_green_1a;
    var arrow_green_1b = _masker.arrow_green_1b;
    var arrow_green_1c = _masker.arrow_green_1c;

    TweenMax.set([arrow_green_1a, arrow_green_1b, arrow_green_1c], { opacity: 1 });
    TweenMax.set(arrow_green_1, { opacity: 1, clip: 0 + "px, " + 0 + "px, " + arrow_green_1.height + "px, " + 0 + "px" });
    TweenMax.to(arrow_green_1, .3, { clip: 0 + "px, " + 92 + "px, " + arrow_green_1.height + "px, " + 0 + "px", onComplete: function onComplete() {} });

    TweenMax.from(arrow_green_1a, .5, { delay: 1.8, clip: arrow_green_1a.height + "px, " + arrow_green_1a.width + "px, " + arrow_green_1a.height + "px, " + 0 + "px" });
    TweenMax.from(arrow_green_1b, .8, { delay: 1.8, clip: arrow_green_1b.height + "px, " + arrow_green_1b.width + "px, " + arrow_green_1b.height + "px, " + 0 + "px" });
    TweenMax.from(arrow_green_1c, .9, { delay: 1.8, clip: arrow_green_1c.height + "px, " + arrow_green_1c.width + "px, " + arrow_green_1c.height + "px, " + 0 + "px" });

    do_super1();
}

function do_super1() {
    TweenMax.set('#super1', { opacity: 1 });
    (0, _commonJsProline.hand)(_super1.hand_super1, "super1", { brushSize: 5, speed: 6 }).then(do_super2);
}

function do_super2() {
    TweenMax.set('#super2', { opacity: 1 });
    (0, _commonJsProline.hand)(_super2.hand_super2, "super2", { brushSize: 5, speed: 5 }).then(do_super3);
}

function do_super3() {
    TweenMax.set('#super3', { opacity: 1 });
    (0, _commonJsProline.hand)(_super3.hand_super3, "super3", { brushSize: 5, speed: 5 }).then(function () {
        TweenLite.delayedCall(1, do_arrow_green_2a);
    });
}

function do_arrow_green_2a() {
    // TweenMax.set('#arrow_green_2a', {opacity:1})   
    TweenMax.to(['#panner', '#panBg'], 4, { x: -600, ease: Power1.easeOut });
    TweenMax.set(".masker", { opacity: 1 });

    var tl = new TimelineMax({
        onComplete: do_cta
    });

    var _masker2 = (0, _commonJsProline.masker)();

    var arrow_yellow_3a = _masker2.arrow_yellow_3a;
    var arrow_yellow_3b = _masker2.arrow_yellow_3b;
    var arrow_green_3a = _masker2.arrow_green_3a;
    var arrow_green_3b = _masker2.arrow_green_3b;
    var arrow_green_1a = _masker2.arrow_green_1a;
    var arrow_green_1b = _masker2.arrow_green_1b;
    var arrow_green_1c = _masker2.arrow_green_1c;
    var arrow_yellow_1 = _masker2.arrow_yellow_1;
    var arrow_yellow_2 = _masker2.arrow_yellow_2;
    var arrow_green_2a = _masker2.arrow_green_2a;
    var arrow_green_2b = _masker2.arrow_green_2b;
    var arrow_green_2c = _masker2.arrow_green_2c;
    var arrow_green_2d = _masker2.arrow_green_2d;
    var arrow_green_2e = _masker2.arrow_green_2e;

    tl.add("yellow", .2);

    tl.from(arrow_yellow_1, .7, { clip: 0 + "px, " + 0 + "px, " + arrow_yellow_1.height + "px, " + 0 + "px" }, 'yellow');
    tl.from(arrow_yellow_2, .5, { clip: 0 + "px, " + 0 + "px, " + arrow_yellow_2.height + "px, " + 0 + "px" }, 'yellow');
    tl.from(arrow_green_2a, .5, { clip: arrow_green_2a.height + "px, " + arrow_green_2a.width + "px, " + arrow_green_2a.height + "px, " + 0 + "px" });
    tl.from(arrow_green_2b, .5, { clip: arrow_green_2b.height + "px, " + arrow_green_2b.width + "px, " + arrow_green_2b.height + "px, " + 0 + "px" }, "-=.2");
    tl.from(arrow_green_2c, .5, { clip: arrow_green_2c.height + "px, " + arrow_green_2c.width + "px, " + arrow_green_2c.height + "px, " + arrow_green_2c.width + "px" }, "-=.2");
    tl.from(arrow_green_2d, .5, { clip: 0 + "px, " + arrow_green_2d.width + "px, " + 0 + "px, " + 0 + "px" }, "-=.2");

    tl.set(".frame2", { opacity: 1 });
    tl.add("end");
    tl.to("#logo_proSmall", .6, { opacity: 0 });

    tl.from(arrow_green_2e, .55, { clip: 0 + "px, " + 0 + "px, " + arrow_green_2e.height + "px, " + 0 + "px" }, "end");
    tl.from(arrow_green_3a, .5, { clip: arrow_green_3a.height + "px, " + arrow_green_3a.width + "px, " + arrow_green_3a.height + "px, " + 0 + "px" }, "end");
    tl.from(arrow_green_3b, .5, { clip: arrow_green_3b.height + "px, " + arrow_green_3b.width + "px, " + arrow_green_3b.height + "px, " + 0 + "px" }, "end");
    tl.from(arrow_yellow_3a, .5, { clip: arrow_yellow_3a.height + "px, " + arrow_yellow_3a.width + "px, " + arrow_yellow_3a.height + "px, " + 0 + "px" }, "end");
    tl.from(arrow_yellow_3b, .5, { clip: arrow_yellow_3b.height + "px, " + arrow_yellow_3b.width + "px, " + arrow_yellow_3b.height + "px, " + 0 + "px" }, "end");

    // tl.from("#logo_pro", .3, {opacity:0}, "-=.5")
    // tl.from("#cta", .3, {opacity:0})
    // tl.from("#footer", .3, {opacity:0})

    tl.from(["#logo_pro", "#cta", "#footer"], .6, { opacity: 0 }, '-=.2');

    // hand(arrow_green_2a, "arrow_green_2a", {brushsize:5, speed:9})
}

function do_cta() {
    TweenLite.delayedCall(1, function () {
        TweenMax.set('#cta_circle', { opacity: 1 });
        (0, _commonJsProline.hand)(_cta_circle.cta_circle, "cta_circle", { brushsize: 10, speed: 1, cleanFromBehind: false, cleanUpWhenDone: false }).then(function () {
            void 0;
        });
    });
}

},{"../../_common/js/proline":1,"./arrow_green_1":2,"./arrow_green_2a":3,"./arrow_yellow_1":4,"./cta_circle":5,"./super1":7,"./super2":8,"./super3":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super1 = [{
  "x": 26,
  "y": 243
}, {
  "x": 28,
  "y": 245
}, {
  "x": 30,
  "y": 254
}, {
  "x": 32,
  "y": 264
}, {
  "x": 33,
  "y": 271
}, {
  "x": 26,
  "y": 243
}, {
  "x": 28,
  "y": 245
}, {
  "x": 30,
  "y": 254
}, {
  "x": 32,
  "y": 264
}, {
  "x": 33,
  "y": 271
}, {
  "x": 23,
  "y": 245
}, {
  "x": 29,
  "y": 242
}, {
  "x": 36,
  "y": 241
}, {
  "x": 38,
  "y": 248
}, {
  "x": 33,
  "y": 256
}, {
  "x": 28,
  "y": 257
}, {
  "x": 23,
  "y": 245
}, {
  "x": 29,
  "y": 242
}, {
  "x": 36,
  "y": 241
}, {
  "x": 38,
  "y": 248
}, {
  "x": 33,
  "y": 256
}, {
  "x": 28,
  "y": 257
}, {
  "x": 51,
  "y": 243
}, {
  "x": 52,
  "y": 254
}, {
  "x": 54,
  "y": 266
}, {
  "x": 58,
  "y": 270
}, {
  "x": 66,
  "y": 268
}, {
  "x": 68,
  "y": 261
}, {
  "x": 69,
  "y": 251
}, {
  "x": 70,
  "y": 244
}, {
  "x": 68,
  "y": 243
}, {
  "x": 52,
  "y": 251
}, {
  "x": 53,
  "y": 264
}, {
  "x": 56,
  "y": 270
}, {
  "x": 63,
  "y": 270
}, {
  "x": 67,
  "y": 264
}, {
  "x": 69,
  "y": 254
}, {
  "x": 70,
  "y": 245
}, {
  "x": 68,
  "y": 242
}, {
  "x": 83,
  "y": 244
}, {
  "x": 95,
  "y": 241
}, {
  "x": 97,
  "y": 241
}, {
  "x": 85,
  "y": 244
}, {
  "x": 96,
  "y": 240
}, {
  "x": 86,
  "y": 244
}, {
  "x": 88,
  "y": 249
}, {
  "x": 90,
  "y": 261
}, {
  "x": 90,
  "y": 266
}, {
  "x": 87,
  "y": 245
}, {
  "x": 88,
  "y": 255
}, {
  "x": 90,
  "y": 266
}, {
  "x": 109,
  "y": 242
}, {
  "x": 115,
  "y": 249
}, {
  "x": 119,
  "y": 255
}, {
  "x": 123,
  "y": 255
}, {
  "x": 126,
  "y": 250
}, {
  "x": 133,
  "y": 240
}, {
  "x": 132,
  "y": 240
}, {
  "x": 111,
  "y": 244
}, {
  "x": 118,
  "y": 252
}, {
  "x": 121,
  "y": 255
}, {
  "x": 124,
  "y": 253
}, {
  "x": 132,
  "y": 243
}, {
  "x": 134,
  "y": 238
}, {
  "x": 120,
  "y": 255
}, {
  "x": 121,
  "y": 265
}, {
  "x": 122,
  "y": 273
}, {
  "x": 120,
  "y": 256
}, {
  "x": 121,
  "y": 268
}, {
  "x": 123,
  "y": 273
}, {
  "x": 147,
  "y": 245
}, {
  "x": 141,
  "y": 250
}, {
  "x": 139,
  "y": 255
}, {
  "x": 139,
  "y": 263
}, {
  "x": 144,
  "y": 265
}, {
  "x": 151,
  "y": 266
}, {
  "x": 156,
  "y": 263
}, {
  "x": 162,
  "y": 258
}, {
  "x": 161,
  "y": 252
}, {
  "x": 155,
  "y": 246
}, {
  "x": 149,
  "y": 245
}, {
  "x": 143,
  "y": 244
}, {
  "x": 145,
  "y": 247
}, {
  "x": 140,
  "y": 252
}, {
  "x": 139,
  "y": 257
}, {
  "x": 139,
  "y": 264
}, {
  "x": 145,
  "y": 265
}, {
  "x": 153,
  "y": 266
}, {
  "x": 158,
  "y": 262
}, {
  "x": 162,
  "y": 257
}, {
  "x": 159,
  "y": 252
}, {
  "x": 154,
  "y": 245
}, {
  "x": 149,
  "y": 244
}, {
  "x": 169,
  "y": 241
}, {
  "x": 171,
  "y": 242
}, {
  "x": 172,
  "y": 247
}, {
  "x": 172,
  "y": 252
}, {
  "x": 172,
  "y": 256
}, {
  "x": 174,
  "y": 260
}, {
  "x": 178,
  "y": 262
}, {
  "x": 182,
  "y": 262
}, {
  "x": 187,
  "y": 261
}, {
  "x": 187,
  "y": 256
}, {
  "x": 187,
  "y": 251
}, {
  "x": 187,
  "y": 246
}, {
  "x": 187,
  "y": 241
}, {
  "x": 171,
  "y": 240
}, {
  "x": 172,
  "y": 244
}, {
  "x": 172,
  "y": 249
}, {
  "x": 172,
  "y": 254
}, {
  "x": 173,
  "y": 258
}, {
  "x": 176,
  "y": 262
}, {
  "x": 180,
  "y": 262
}, {
  "x": 185,
  "y": 262
}, {
  "x": 187,
  "y": 258
}, {
  "x": 187,
  "y": 253
}, {
  "x": 187,
  "y": 248
}, {
  "x": 187,
  "y": 244
}, {
  "x": 196,
  "y": 244
}, {
  "x": 197,
  "y": 251
}, {
  "x": 198,
  "y": 261
}, {
  "x": 198,
  "y": 268
}, {
  "x": 198,
  "y": 268
}, {
  "x": 198,
  "y": 259
}, {
  "x": 198,
  "y": 250
}, {
  "x": 200,
  "y": 245
}, {
  "x": 205,
  "y": 244
}, {
  "x": 212,
  "y": 242
}, {
  "x": 217,
  "y": 243
}, {
  "x": 216,
  "y": 249
}, {
  "x": 206,
  "y": 255
}, {
  "x": 200,
  "y": 256
}, {
  "x": 198,
  "y": 258
}, {
  "x": 201,
  "y": 259
}, {
  "x": 205,
  "y": 261
}, {
  "x": 208,
  "y": 264
}, {
  "x": 210,
  "y": 267
}, {
  "x": 213,
  "y": 269
}, {
  "x": 216,
  "y": 271
}, {
  "x": 196,
  "y": 245
}, {
  "x": 197,
  "y": 254
}, {
  "x": 198,
  "y": 263
}, {
  "x": 198,
  "y": 269
}, {
  "x": 198,
  "y": 266
}, {
  "x": 198,
  "y": 256
}, {
  "x": 198,
  "y": 249
}, {
  "x": 201,
  "y": 245
}, {
  "x": 208,
  "y": 243
}, {
  "x": 214,
  "y": 242
}, {
  "x": 217,
  "y": 245
}, {
  "x": 214,
  "y": 251
}, {
  "x": 205,
  "y": 255
}, {
  "x": 199,
  "y": 256
}, {
  "x": 199,
  "y": 258
}, {
  "x": 202,
  "y": 259
}, {
  "x": 205,
  "y": 262
}, {
  "x": 208,
  "y": 265
}, {
  "x": 211,
  "y": 267
}, {
  "x": 214,
  "y": 269
}, {
  "x": 215,
  "y": 271
}];

exports.hand_super1 = hand_super1;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super2 = [{
  "x": 30,
  "y": 286
}, {
  "x": 31,
  "y": 294
}, {
  "x": 31,
  "y": 303
}, {
  "x": 31,
  "y": 309
}, {
  "x": 30,
  "y": 286
}, {
  "x": 31,
  "y": 294
}, {
  "x": 31,
  "y": 303
}, {
  "x": 31,
  "y": 309
}, {
  "x": 41,
  "y": 285
}, {
  "x": 42,
  "y": 286
}, {
  "x": 33,
  "y": 296
}, {
  "x": 33,
  "y": 299
}, {
  "x": 38,
  "y": 302
}, {
  "x": 44,
  "y": 308
}, {
  "x": 46,
  "y": 314
}, {
  "x": 48,
  "y": 316
}, {
  "x": 43,
  "y": 284
}, {
  "x": 37,
  "y": 292
}, {
  "x": 32,
  "y": 298
}, {
  "x": 35,
  "y": 300
}, {
  "x": 41,
  "y": 306
}, {
  "x": 46,
  "y": 312
}, {
  "x": 47,
  "y": 315
}, {
  "x": 57,
  "y": 285
}, {
  "x": 57,
  "y": 299
}, {
  "x": 57,
  "y": 310
}, {
  "x": 57,
  "y": 316
}, {
  "x": 57,
  "y": 287
}, {
  "x": 57,
  "y": 302
}, {
  "x": 57,
  "y": 313
}, {
  "x": 57,
  "y": 314
}, {
  "x": 62,
  "y": 289
}, {
  "x": 73,
  "y": 299
}, {
  "x": 78,
  "y": 306
}, {
  "x": 80,
  "y": 309
}, {
  "x": 78,
  "y": 303
}, {
  "x": 76,
  "y": 293
}, {
  "x": 75,
  "y": 284
}, {
  "x": 59,
  "y": 285
}, {
  "x": 71,
  "y": 297
}, {
  "x": 77,
  "y": 305
}, {
  "x": 79,
  "y": 309
}, {
  "x": 79,
  "y": 305
}, {
  "x": 76,
  "y": 295
}, {
  "x": 75,
  "y": 286
}, {
  "x": 103,
  "y": 287
}, {
  "x": 98,
  "y": 287
}, {
  "x": 91,
  "y": 287
}, {
  "x": 87,
  "y": 291
}, {
  "x": 85,
  "y": 299
}, {
  "x": 85,
  "y": 306
}, {
  "x": 92,
  "y": 310
}, {
  "x": 101,
  "y": 311
}, {
  "x": 108,
  "y": 306
}, {
  "x": 110,
  "y": 298
}, {
  "x": 111,
  "y": 293
}, {
  "x": 105,
  "y": 288
}, {
  "x": 99,
  "y": 286
}, {
  "x": 101,
  "y": 287
}, {
  "x": 94,
  "y": 287
}, {
  "x": 88,
  "y": 289
}, {
  "x": 86,
  "y": 296
}, {
  "x": 85,
  "y": 302
}, {
  "x": 88,
  "y": 309
}, {
  "x": 97,
  "y": 311
}, {
  "x": 105,
  "y": 309
}, {
  "x": 109,
  "y": 302
}, {
  "x": 111,
  "y": 296
}, {
  "x": 109,
  "y": 290
}, {
  "x": 102,
  "y": 287
}, {
  "x": 116,
  "y": 285
}, {
  "x": 120,
  "y": 296
}, {
  "x": 122,
  "y": 304
}, {
  "x": 126,
  "y": 303
}, {
  "x": 130,
  "y": 294
}, {
  "x": 132,
  "y": 288
}, {
  "x": 133,
  "y": 287
}, {
  "x": 134,
  "y": 295
}, {
  "x": 137,
  "y": 303
}, {
  "x": 139,
  "y": 306
}, {
  "x": 143,
  "y": 298
}, {
  "x": 148,
  "y": 287
}, {
  "x": 117,
  "y": 288
}, {
  "x": 121,
  "y": 299
}, {
  "x": 123,
  "y": 305
}, {
  "x": 126,
  "y": 301
}, {
  "x": 131,
  "y": 292
}, {
  "x": 132,
  "y": 287
}, {
  "x": 133,
  "y": 289
}, {
  "x": 135,
  "y": 298
}, {
  "x": 138,
  "y": 304
}, {
  "x": 140,
  "y": 305
}, {
  "x": 144,
  "y": 296
}, {
  "x": 151,
  "y": 284
}, {
  "x": 157,
  "y": 288
}, {
  "x": 157,
  "y": 298
}, {
  "x": 157,
  "y": 306
}, {
  "x": 161,
  "y": 307
}, {
  "x": 167,
  "y": 306
}, {
  "x": 171,
  "y": 307
}, {
  "x": 157,
  "y": 288
}, {
  "x": 157,
  "y": 298
}, {
  "x": 157,
  "y": 306
}, {
  "x": 161,
  "y": 307
}, {
  "x": 167,
  "y": 306
}, {
  "x": 171,
  "y": 307
}, {
  "x": 176,
  "y": 290
}, {
  "x": 176,
  "y": 299
}, {
  "x": 176,
  "y": 306
}, {
  "x": 178,
  "y": 308
}, {
  "x": 181,
  "y": 310
}, {
  "x": 187,
  "y": 310
}, {
  "x": 193,
  "y": 308
}, {
  "x": 176,
  "y": 287
}, {
  "x": 176,
  "y": 297
}, {
  "x": 176,
  "y": 304
}, {
  "x": 177,
  "y": 308
}, {
  "x": 180,
  "y": 309
}, {
  "x": 185,
  "y": 310
}, {
  "x": 192,
  "y": 309
}, {
  "x": 177,
  "y": 295
}, {
  "x": 183,
  "y": 295
}, {
  "x": 190,
  "y": 295
}, {
  "x": 180,
  "y": 295
}, {
  "x": 187,
  "y": 295
}, {
  "x": 179,
  "y": 283
}, {
  "x": 188,
  "y": 283
}, {
  "x": 181,
  "y": 283
}, {
  "x": 189,
  "y": 283
}, {
  "x": 202,
  "y": 288
}, {
  "x": 202,
  "y": 301
}, {
  "x": 202,
  "y": 306
}, {
  "x": 201,
  "y": 297
}, {
  "x": 201,
  "y": 287
}, {
  "x": 203,
  "y": 285
}, {
  "x": 209,
  "y": 285
}, {
  "x": 214,
  "y": 285
}, {
  "x": 217,
  "y": 288
}, {
  "x": 218,
  "y": 295
}, {
  "x": 214,
  "y": 301
}, {
  "x": 207,
  "y": 305
}, {
  "x": 203,
  "y": 305
}, {
  "x": 202,
  "y": 286
}, {
  "x": 202,
  "y": 297
}, {
  "x": 202,
  "y": 305
}, {
  "x": 202,
  "y": 299
}, {
  "x": 201,
  "y": 288
}, {
  "x": 202,
  "y": 285
}, {
  "x": 207,
  "y": 285
}, {
  "x": 213,
  "y": 285
}, {
  "x": 217,
  "y": 287
}, {
  "x": 218,
  "y": 293
}, {
  "x": 216,
  "y": 299
}, {
  "x": 209,
  "y": 304
}, {
  "x": 204,
  "y": 305
}, {
  "x": 246,
  "y": 287
}, {
  "x": 243,
  "y": 286
}, {
  "x": 236,
  "y": 285
}, {
  "x": 229,
  "y": 289
}, {
  "x": 227,
  "y": 296
}, {
  "x": 227,
  "y": 302
}, {
  "x": 233,
  "y": 308
}, {
  "x": 242,
  "y": 309
}, {
  "x": 246,
  "y": 309
}, {
  "x": 248,
  "y": 305
}, {
  "x": 248,
  "y": 301
}, {
  "x": 242,
  "y": 299
}, {
  "x": 236,
  "y": 299
}, {
  "x": 245,
  "y": 286
}, {
  "x": 239,
  "y": 285
}, {
  "x": 232,
  "y": 287
}, {
  "x": 228,
  "y": 292
}, {
  "x": 227,
  "y": 299
}, {
  "x": 229,
  "y": 305
}, {
  "x": 237,
  "y": 308
}, {
  "x": 244,
  "y": 309
}, {
  "x": 248,
  "y": 307
}, {
  "x": 248,
  "y": 303
}, {
  "x": 245,
  "y": 300
}, {
  "x": 238,
  "y": 299
}, {
  "x": 261,
  "y": 283
}, {
  "x": 261,
  "y": 294
}, {
  "x": 260,
  "y": 303
}, {
  "x": 263,
  "y": 306
}, {
  "x": 267,
  "y": 308
}, {
  "x": 277,
  "y": 308
}, {
  "x": 261,
  "y": 283
}, {
  "x": 261,
  "y": 294
}, {
  "x": 260,
  "y": 303
}, {
  "x": 263,
  "y": 306
}, {
  "x": 267,
  "y": 308
}, {
  "x": 277,
  "y": 308
}, {
  "x": 262,
  "y": 296
}, {
  "x": 275,
  "y": 295
}, {
  "x": 267,
  "y": 296
}, {
  "x": 276,
  "y": 295
}, {
  "x": 267,
  "y": 283
}, {
  "x": 280,
  "y": 283
}, {
  "x": 272,
  "y": 283
}];

exports.hand_super2 = hand_super2;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super3 = [{
  "x": 41,
  "y": 326
}, {
  "x": 36,
  "y": 330
}, {
  "x": 33,
  "y": 334
}, {
  "x": 32,
  "y": 338
}, {
  "x": 31,
  "y": 343
}, {
  "x": 31,
  "y": 348
}, {
  "x": 36,
  "y": 353
}, {
  "x": 41,
  "y": 356
}, {
  "x": 49,
  "y": 356
}, {
  "x": 54,
  "y": 352
}, {
  "x": 55,
  "y": 343
}, {
  "x": 53,
  "y": 335
}, {
  "x": 47,
  "y": 331
}, {
  "x": 40,
  "y": 329
}, {
  "x": 41,
  "y": 326
}, {
  "x": 36,
  "y": 330
}, {
  "x": 33,
  "y": 334
}, {
  "x": 32,
  "y": 338
}, {
  "x": 31,
  "y": 343
}, {
  "x": 31,
  "y": 348
}, {
  "x": 36,
  "y": 353
}, {
  "x": 41,
  "y": 356
}, {
  "x": 49,
  "y": 356
}, {
  "x": 54,
  "y": 352
}, {
  "x": 55,
  "y": 343
}, {
  "x": 53,
  "y": 335
}, {
  "x": 47,
  "y": 331
}, {
  "x": 40,
  "y": 329
}, {
  "x": 63,
  "y": 328
}, {
  "x": 63,
  "y": 342
}, {
  "x": 63,
  "y": 352
}, {
  "x": 64,
  "y": 352
}, {
  "x": 63,
  "y": 334
}, {
  "x": 63,
  "y": 347
}, {
  "x": 64,
  "y": 353
}, {
  "x": 65,
  "y": 323
}, {
  "x": 74,
  "y": 335
}, {
  "x": 81,
  "y": 345
}, {
  "x": 84,
  "y": 349
}, {
  "x": 65,
  "y": 323
}, {
  "x": 74,
  "y": 335
}, {
  "x": 81,
  "y": 345
}, {
  "x": 84,
  "y": 349
}, {
  "x": 81,
  "y": 325
}, {
  "x": 80,
  "y": 338
}, {
  "x": 80,
  "y": 350
}, {
  "x": 81,
  "y": 325
}, {
  "x": 80,
  "y": 338
}, {
  "x": 80,
  "y": 350
}, {
  "x": 104,
  "y": 326
}, {
  "x": 119,
  "y": 326
}, {
  "x": 104,
  "y": 326
}, {
  "x": 119,
  "y": 326
}, {
  "x": 107,
  "y": 331
}, {
  "x": 108,
  "y": 344
}, {
  "x": 109,
  "y": 354
}, {
  "x": 107,
  "y": 333
}, {
  "x": 108,
  "y": 347
}, {
  "x": 109,
  "y": 355
}, {
  "x": 128,
  "y": 330
}, {
  "x": 128,
  "y": 345
}, {
  "x": 128,
  "y": 350
}, {
  "x": 128,
  "y": 335
}, {
  "x": 128,
  "y": 348
}, {
  "x": 141,
  "y": 325
}, {
  "x": 142,
  "y": 339
}, {
  "x": 145,
  "y": 354
}, {
  "x": 141,
  "y": 325
}, {
  "x": 142,
  "y": 339
}, {
  "x": 145,
  "y": 354
}, {
  "x": 125,
  "y": 339
}, {
  "x": 136,
  "y": 338
}, {
  "x": 125,
  "y": 339
}, {
  "x": 136,
  "y": 338
}, {
  "x": 157,
  "y": 328
}, {
  "x": 156,
  "y": 340
}, {
  "x": 155,
  "y": 352
}, {
  "x": 158,
  "y": 356
}, {
  "x": 168,
  "y": 354
}, {
  "x": 157,
  "y": 328
}, {
  "x": 156,
  "y": 340
}, {
  "x": 155,
  "y": 352
}, {
  "x": 158,
  "y": 356
}, {
  "x": 168,
  "y": 354
}, {
  "x": 155,
  "y": 337
}, {
  "x": 163,
  "y": 337
}, {
  "x": 157,
  "y": 337
}, {
  "x": 164,
  "y": 337
}, {
  "x": 161,
  "y": 324
}, {
  "x": 169,
  "y": 324
}, {
  "x": 159,
  "y": 324
}, {
  "x": 164,
  "y": 324
}, {
  "x": 173,
  "y": 324
}, {
  "x": 191,
  "y": 330
}, {
  "x": 189,
  "y": 343
}, {
  "x": 189,
  "y": 353
}, {
  "x": 192,
  "y": 354
}, {
  "x": 198,
  "y": 353
}, {
  "x": 203,
  "y": 353
}, {
  "x": 191,
  "y": 330
}, {
  "x": 189,
  "y": 343
}, {
  "x": 189,
  "y": 353
}, {
  "x": 192,
  "y": 354
}, {
  "x": 198,
  "y": 353
}, {
  "x": 203,
  "y": 353
}, {
  "x": 208,
  "y": 332
}, {
  "x": 209,
  "y": 345
}, {
  "x": 209,
  "y": 356
}, {
  "x": 208,
  "y": 332
}, {
  "x": 209,
  "y": 345
}, {
  "x": 209,
  "y": 356
}, {
  "x": 223,
  "y": 331
}, {
  "x": 223,
  "y": 348
}, {
  "x": 223,
  "y": 356
}, {
  "x": 223,
  "y": 331
}, {
  "x": 223,
  "y": 348
}, {
  "x": 223,
  "y": 356
}, {
  "x": 223,
  "y": 330
}, {
  "x": 230,
  "y": 339
}, {
  "x": 235,
  "y": 346
}, {
  "x": 237,
  "y": 347
}, {
  "x": 235,
  "y": 343
}, {
  "x": 225,
  "y": 331
}, {
  "x": 231,
  "y": 341
}, {
  "x": 236,
  "y": 347
}, {
  "x": 237,
  "y": 346
}, {
  "x": 237,
  "y": 326
}, {
  "x": 237,
  "y": 340
}, {
  "x": 237,
  "y": 351
}, {
  "x": 237,
  "y": 329
}, {
  "x": 237,
  "y": 343
}, {
  "x": 237,
  "y": 352
}, {
  "x": 254,
  "y": 335
}, {
  "x": 254,
  "y": 346
}, {
  "x": 255,
  "y": 350
}, {
  "x": 260,
  "y": 351
}, {
  "x": 269,
  "y": 351
}, {
  "x": 254,
  "y": 327
}, {
  "x": 254,
  "y": 341
}, {
  "x": 254,
  "y": 349
}, {
  "x": 258,
  "y": 351
}, {
  "x": 264,
  "y": 351
}, {
  "x": 270,
  "y": 350
}, {
  "x": 254,
  "y": 337
}, {
  "x": 263,
  "y": 337
}, {
  "x": 251,
  "y": 338
}, {
  "x": 258,
  "y": 337
}, {
  "x": 268,
  "y": 337
}, {
  "x": 260,
  "y": 324
}, {
  "x": 269,
  "y": 325
}, {
  "x": 260,
  "y": 324
}, {
  "x": 269,
  "y": 325
}];

exports.hand_super3 = hand_super3;

},{}],10:[function(require,module,exports){
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

},{}]},{},[6])


//# sourceMappingURL=main.js.map
