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

        console.log(options);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsProline = require("../../_common/js/proline");

var _handwrite = require('handwrite');

var _handwrite2 = _interopRequireDefault(_handwrite);

var _arrow_green_1 = require("./arrow_green_1");

var _super1 = require("./super1");

var _super2 = require("./super2");

var _super3 = require("./super3");

var _arrow_yellow_1 = require("./arrow_yellow_1");

var _arrow_green_2a = require("./arrow_green_2a");

var _cta_circle = require("./cta_circle");

console.log((0, _commonJsProline.arrayClean)(_super3.hand_super3, 3));

setTimeout(function () {
    start();
}, 100);

function start() {
    do_arrow_green();
    // do_super3()  
}

function do_arrow_green() {
    var _masker = (0, _commonJsProline.masker)();

    var arrow_green_1 = _masker.arrow_green_1;
    var arrow_green_1b = _masker.arrow_green_1b;
    var arrow_green_1c = _masker.arrow_green_1c;

    TweenMax.set([arrow_green_1, arrow_green_1b, arrow_green_1c], { opacity: 1 });

    TweenMax.set(arrow_green_1, { opacity: 1, clip: 0 + "px, " + 0 + "px, " + arrow_green_1.height + "px, " + 0 + "px" });
    TweenMax.to(arrow_green_1, .3, { clip: 0 + "px, " + 92 + "px, " + arrow_green_1.height + "px, " + 0 + "px", onComplete: function onComplete() {} });

    TweenMax.from(arrow_green_1b, .5, { delay: 1.7, clip: arrow_green_1b.height + "px, " + arrow_green_1b.width + "px, " + arrow_green_1b.height + "px, " + 0 + "px" });
    TweenMax.from(arrow_green_1c, .5, { delay: 1.7, clip: arrow_green_1c.height + "px, " + arrow_green_1c.width + "px, " + arrow_green_1c.height + "px, " + 0 + "px" });
    do_super1();
}

function do_super1() {
    TweenMax.set('#super1', { opacity: 1 });
    (0, _commonJsProline.hand)(_super1.hand_super1, "super1", { brushSize: 8, speed: 1 }).then(do_super2);
}

function do_super2() {
    TweenMax.set('#super2', { opacity: 1 });
    (0, _commonJsProline.hand)(_super2.hand_super2, "super2", { brushSize: 5, speed: 1 }).then(do_super3);
}

function do_super3() {
    TweenMax.set('#super3', { opacity: 1 });
    (0, _commonJsProline.hand)(_super3.hand_super3, "super3", { brushSize: 5, speed: 1 }).then(do_arrow_yellow_1);
}

function do_arrow_yellow_1() {

    TweenLite.delayedCall(1, function () {
        TweenMax.to(['#panner', '#panBg'], 4, { x: -600, ease: Power1.easeOut });
        TweenMax.set('#arrow_yellow_1', { opacity: 1 });
        (0, _commonJsProline.hand)(_arrow_yellow_1.arrow_yellow_1, "arrow_yellow_1", { brushsize: 5, speed: 8 }).then();
        do_arrow_green_2a();
    });
}

function do_arrow_green_2a() {
    // TweenMax.set('#arrow_green_2a', {opacity:1})
    TweenMax.set(".masker", { opacity: 1 });

    var tl = new TimelineMax({
        onComplete: do_cta
    });

    var _masker2 = (0, _commonJsProline.masker)();

    var arrow_green_1b = _masker2.arrow_green_1b;
    var arrow_green_1c = _masker2.arrow_green_1c;
    var arrow_green_2a = _masker2.arrow_green_2a;
    var arrow_green_2b = _masker2.arrow_green_2b;
    var arrow_green_2c = _masker2.arrow_green_2c;
    var arrow_green_2d = _masker2.arrow_green_2d;
    var arrow_green_2e = _masker2.arrow_green_2e;
    var arrow_green_2f = _masker2.arrow_green_2f;
    var arrow_yellow_2 = _masker2.arrow_yellow_2;

    tl.from(arrow_green_2a, .5, { clip: arrow_green_2a.height + "px, " + arrow_green_2a.width + "px, " + arrow_green_2a.height + "px, " + 0 + "px" }, '+=.7');
    tl.from(arrow_green_2b, .5, { clip: arrow_green_2b.height + "px, " + arrow_green_2b.width + "px, " + arrow_green_2b.height + "px, " + 0 + "px" }, "-=.3");
    tl.from(arrow_green_2c, .5, { clip: arrow_green_2c.height + "px, " + arrow_green_2c.width + "px, " + arrow_green_2c.height + "px, " + arrow_green_2c.width + "px" }, "-=.3");
    tl.from(arrow_green_2d, .5, { clip: 0 + "px, " + arrow_green_2d.width + "px, " + 0 + "px, " + 0 + "px" }, "-=.3");

    // tl.set(".frame2", {opacity:1})

    tl.add("end", "+=.2");
    tl.to("#logo_proSmall", .6, { opacity: 0 });
    // tl.to('.pan', 1.2, {x:-600}, "end")
    // tl.from(arrow_yellow_2, .5, {clip:`${0}px, ${0}px, ${arrow_yellow_2.height}px, ${0}px`}, "end+=.7")
    tl.from(arrow_green_2e, .5, { clip: 0 + "px, " + 0 + "px, " + arrow_green_2e.height + "px, " + 0 + "px" }, "end+=.7");
    tl.from(arrow_green_2f, .5, { clip: arrow_green_2f.height + "px, " + arrow_green_2f.width + "px, " + arrow_green_2f.height + "px, " + 0 + "px" }, "end+=.9");

    tl.from(["#logo_pro", "#cta", "#footer"], .6, { opacity: 0 }, '-=.2');
    // tl.from("#cta", .3, {opacity:0})
    // tl.from("#footer", .3, {opacity:0})

    // hand(arrow_green_2a, "arrow_green_2a", {brushsize:5, speed:9})
}

function do_cta() {
    TweenLite.delayedCall(1, function () {
        TweenMax.set('#cta_circle', { opacity: 1 });
        (0, _commonJsProline.hand)(_cta_circle.cta_circle, "cta_circle", { brushsize: 8, speed: 1, cleanFromBehind: false, cleanUpWhenDone: false }).then(function () {});
    });
}

},{"../../_common/js/proline":1,"./arrow_green_1":2,"./arrow_green_2a":3,"./arrow_yellow_1":4,"./cta_circle":5,"./super1":7,"./super2":8,"./super3":9,"handwrite":10}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super1 = [{
  "x": 43,
  "y": 73
}, {
  "x": 43,
  "y": 80
}, {
  "x": 43,
  "y": 87
}, {
  "x": 43,
  "y": 93
}, {
  "x": 43,
  "y": 97
}, {
  "x": 43,
  "y": 73
}, {
  "x": 43,
  "y": 80
}, {
  "x": 43,
  "y": 87
}, {
  "x": 43,
  "y": 93
}, {
  "x": 43,
  "y": 97
}, {
  "x": 40,
  "y": 74
}, {
  "x": 44,
  "y": 73
}, {
  "x": 50,
  "y": 73
}, {
  "x": 54,
  "y": 74
}, {
  "x": 55,
  "y": 79
}, {
  "x": 51,
  "y": 85
}, {
  "x": 47,
  "y": 87
}, {
  "x": 45,
  "y": 86
}, {
  "x": 43,
  "y": 73
}, {
  "x": 48,
  "y": 73
}, {
  "x": 53,
  "y": 73
}, {
  "x": 55,
  "y": 77
}, {
  "x": 53,
  "y": 82
}, {
  "x": 48,
  "y": 86
}, {
  "x": 45,
  "y": 87
}, {
  "x": 63,
  "y": 75
}, {
  "x": 63,
  "y": 80
}, {
  "x": 65,
  "y": 87
}, {
  "x": 66,
  "y": 93
}, {
  "x": 68,
  "y": 97
}, {
  "x": 71,
  "y": 98
}, {
  "x": 75,
  "y": 97
}, {
  "x": 77,
  "y": 95
}, {
  "x": 80,
  "y": 91
}, {
  "x": 81,
  "y": 86
}, {
  "x": 81,
  "y": 80
}, {
  "x": 81,
  "y": 76
}, {
  "x": 81,
  "y": 73
}, {
  "x": 63,
  "y": 76
}, {
  "x": 64,
  "y": 82
}, {
  "x": 65,
  "y": 89
}, {
  "x": 67,
  "y": 95
}, {
  "x": 69,
  "y": 98
}, {
  "x": 72,
  "y": 98
}, {
  "x": 76,
  "y": 96
}, {
  "x": 78,
  "y": 94
}, {
  "x": 80,
  "y": 89
}, {
  "x": 81,
  "y": 84
}, {
  "x": 81,
  "y": 79
}, {
  "x": 81,
  "y": 75
}, {
  "x": 86,
  "y": 75
}, {
  "x": 93,
  "y": 76
}, {
  "x": 101,
  "y": 76
}, {
  "x": 106,
  "y": 76
}, {
  "x": 88,
  "y": 76
}, {
  "x": 95,
  "y": 76
}, {
  "x": 103,
  "y": 76
}, {
  "x": 107,
  "y": 76
}, {
  "x": 92,
  "y": 84
}, {
  "x": 95,
  "y": 93
}, {
  "x": 96,
  "y": 101
}, {
  "x": 91,
  "y": 79
}, {
  "x": 93,
  "y": 87
}, {
  "x": 96,
  "y": 97
}, {
  "x": 96,
  "y": 102
}, {
  "x": 117,
  "y": 73
}, {
  "x": 122,
  "y": 80
}, {
  "x": 125,
  "y": 85
}, {
  "x": 128,
  "y": 83
}, {
  "x": 131,
  "y": 78
}, {
  "x": 135,
  "y": 73
}, {
  "x": 138,
  "y": 69
}, {
  "x": 116,
  "y": 72
}, {
  "x": 120,
  "y": 78
}, {
  "x": 124,
  "y": 84
}, {
  "x": 127,
  "y": 85
}, {
  "x": 129,
  "y": 80
}, {
  "x": 133,
  "y": 74
}, {
  "x": 138,
  "y": 70
}, {
  "x": 136,
  "y": 70
}, {
  "x": 122,
  "y": 92
}, {
  "x": 123,
  "y": 101
}, {
  "x": 123,
  "y": 107
}, {
  "x": 124,
  "y": 106
}, {
  "x": 122,
  "y": 92
}, {
  "x": 123,
  "y": 101
}, {
  "x": 123,
  "y": 107
}, {
  "x": 124,
  "y": 106
}, {
  "x": 153,
  "y": 72
}, {
  "x": 148,
  "y": 72
}, {
  "x": 142,
  "y": 74
}, {
  "x": 140,
  "y": 77
}, {
  "x": 139,
  "y": 82
}, {
  "x": 139,
  "y": 87
}, {
  "x": 140,
  "y": 91
}, {
  "x": 146,
  "y": 94
}, {
  "x": 150,
  "y": 95
}, {
  "x": 154,
  "y": 95
}, {
  "x": 157,
  "y": 93
}, {
  "x": 160,
  "y": 89
}, {
  "x": 161,
  "y": 84
}, {
  "x": 161,
  "y": 79
}, {
  "x": 158,
  "y": 76
}, {
  "x": 153,
  "y": 74
}, {
  "x": 149,
  "y": 74
}, {
  "x": 154,
  "y": 72
}, {
  "x": 150,
  "y": 72
}, {
  "x": 143,
  "y": 74
}, {
  "x": 140,
  "y": 76
}, {
  "x": 139,
  "y": 80
}, {
  "x": 139,
  "y": 86
}, {
  "x": 139,
  "y": 90
}, {
  "x": 143,
  "y": 93
}, {
  "x": 149,
  "y": 95
}, {
  "x": 152,
  "y": 95
}, {
  "x": 156,
  "y": 94
}, {
  "x": 160,
  "y": 90
}, {
  "x": 161,
  "y": 85
}, {
  "x": 161,
  "y": 81
}, {
  "x": 159,
  "y": 77
}, {
  "x": 155,
  "y": 75
}, {
  "x": 150,
  "y": 74
}, {
  "x": 170,
  "y": 74
}, {
  "x": 170,
  "y": 80
}, {
  "x": 170,
  "y": 87
}, {
  "x": 170,
  "y": 92
}, {
  "x": 174,
  "y": 94
}, {
  "x": 178,
  "y": 94
}, {
  "x": 182,
  "y": 91
}, {
  "x": 185,
  "y": 87
}, {
  "x": 185,
  "y": 81
}, {
  "x": 185,
  "y": 77
}, {
  "x": 185,
  "y": 73
}, {
  "x": 184,
  "y": 73
}, {
  "x": 170,
  "y": 76
}, {
  "x": 170,
  "y": 82
}, {
  "x": 170,
  "y": 89
}, {
  "x": 171,
  "y": 93
}, {
  "x": 175,
  "y": 94
}, {
  "x": 180,
  "y": 93
}, {
  "x": 183,
  "y": 90
}, {
  "x": 185,
  "y": 85
}, {
  "x": 185,
  "y": 80
}, {
  "x": 185,
  "y": 75
}, {
  "x": 185,
  "y": 72
}, {
  "x": 183,
  "y": 74
}, {
  "x": 193,
  "y": 80
}, {
  "x": 193,
  "y": 90
}, {
  "x": 193,
  "y": 96
}, {
  "x": 193,
  "y": 96
}, {
  "x": 193,
  "y": 92
}, {
  "x": 194,
  "y": 75
}, {
  "x": 193,
  "y": 84
}, {
  "x": 193,
  "y": 93
}, {
  "x": 193,
  "y": 97
}, {
  "x": 193,
  "y": 95
}, {
  "x": 193,
  "y": 91
}, {
  "x": 198,
  "y": 73
}, {
  "x": 204,
  "y": 73
}, {
  "x": 207,
  "y": 76
}, {
  "x": 204,
  "y": 81
}, {
  "x": 196,
  "y": 85
}, {
  "x": 196,
  "y": 86
}, {
  "x": 200,
  "y": 89
}, {
  "x": 206,
  "y": 94
}, {
  "x": 209,
  "y": 96
}, {
  "x": 200,
  "y": 73
}, {
  "x": 206,
  "y": 74
}, {
  "x": 207,
  "y": 78
}, {
  "x": 200,
  "y": 83
}, {
  "x": 195,
  "y": 85
}, {
  "x": 197,
  "y": 87
}, {
  "x": 202,
  "y": 91
}, {
  "x": 208,
  "y": 95
}];

exports.hand_super1 = hand_super1;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super2 = [{
  "x": 44,
  "y": 117
}, {
  "x": 44,
  "y": 121
}, {
  "x": 44,
  "y": 128
}, {
  "x": 44,
  "y": 134
}, {
  "x": 44,
  "y": 137
}, {
  "x": 44,
  "y": 117
}, {
  "x": 44,
  "y": 121
}, {
  "x": 44,
  "y": 128
}, {
  "x": 44,
  "y": 134
}, {
  "x": 44,
  "y": 137
}, {
  "x": 57,
  "y": 113
}, {
  "x": 55,
  "y": 119
}, {
  "x": 50,
  "y": 125
}, {
  "x": 48,
  "y": 128
}, {
  "x": 54,
  "y": 130
}, {
  "x": 58,
  "y": 134
}, {
  "x": 60,
  "y": 136
}, {
  "x": 57,
  "y": 114
}, {
  "x": 54,
  "y": 121
}, {
  "x": 49,
  "y": 127
}, {
  "x": 51,
  "y": 129
}, {
  "x": 55,
  "y": 131
}, {
  "x": 59,
  "y": 135
}, {
  "x": 60,
  "y": 134
}, {
  "x": 66,
  "y": 118
}, {
  "x": 65,
  "y": 126
}, {
  "x": 65,
  "y": 132
}, {
  "x": 64,
  "y": 137
}, {
  "x": 63,
  "y": 136
}, {
  "x": 66,
  "y": 116
}, {
  "x": 65,
  "y": 123
}, {
  "x": 65,
  "y": 131
}, {
  "x": 64,
  "y": 136
}, {
  "x": 63,
  "y": 138
}, {
  "x": 68,
  "y": 115
}, {
  "x": 73,
  "y": 121
}, {
  "x": 77,
  "y": 127
}, {
  "x": 80,
  "y": 132
}, {
  "x": 81,
  "y": 135
}, {
  "x": 81,
  "y": 132
}, {
  "x": 81,
  "y": 127
}, {
  "x": 83,
  "y": 120
}, {
  "x": 85,
  "y": 114
}, {
  "x": 85,
  "y": 109
}, {
  "x": 68,
  "y": 115
}, {
  "x": 73,
  "y": 121
}, {
  "x": 77,
  "y": 127
}, {
  "x": 80,
  "y": 132
}, {
  "x": 81,
  "y": 135
}, {
  "x": 81,
  "y": 132
}, {
  "x": 81,
  "y": 127
}, {
  "x": 83,
  "y": 120
}, {
  "x": 85,
  "y": 114
}, {
  "x": 85,
  "y": 109
}, {
  "x": 100,
  "y": 115
}, {
  "x": 97,
  "y": 116
}, {
  "x": 95,
  "y": 119
}, {
  "x": 93,
  "y": 123
}, {
  "x": 93,
  "y": 128
}, {
  "x": 93,
  "y": 131
}, {
  "x": 94,
  "y": 134
}, {
  "x": 99,
  "y": 136
}, {
  "x": 103,
  "y": 137
}, {
  "x": 107,
  "y": 137
}, {
  "x": 110,
  "y": 136
}, {
  "x": 113,
  "y": 135
}, {
  "x": 114,
  "y": 131
}, {
  "x": 115,
  "y": 127
}, {
  "x": 115,
  "y": 123
}, {
  "x": 113,
  "y": 120
}, {
  "x": 110,
  "y": 118
}, {
  "x": 106,
  "y": 117
}, {
  "x": 102,
  "y": 117
}, {
  "x": 99,
  "y": 117
}, {
  "x": 99,
  "y": 115
}, {
  "x": 96,
  "y": 117
}, {
  "x": 94,
  "y": 121
}, {
  "x": 93,
  "y": 125
}, {
  "x": 93,
  "y": 129
}, {
  "x": 93,
  "y": 132
}, {
  "x": 95,
  "y": 135
}, {
  "x": 100,
  "y": 136
}, {
  "x": 104,
  "y": 137
}, {
  "x": 109,
  "y": 137
}, {
  "x": 111,
  "y": 136
}, {
  "x": 113,
  "y": 134
}, {
  "x": 115,
  "y": 130
}, {
  "x": 115,
  "y": 126
}, {
  "x": 115,
  "y": 122
}, {
  "x": 112,
  "y": 119
}, {
  "x": 108,
  "y": 118
}, {
  "x": 104,
  "y": 117
}, {
  "x": 101,
  "y": 117
}, {
  "x": 98,
  "y": 117
}, {
  "x": 122,
  "y": 116
}, {
  "x": 125,
  "y": 123
}, {
  "x": 127,
  "y": 129
}, {
  "x": 128,
  "y": 133
}, {
  "x": 130,
  "y": 132
}, {
  "x": 133,
  "y": 127
}, {
  "x": 135,
  "y": 121
}, {
  "x": 135,
  "y": 115
}, {
  "x": 137,
  "y": 113
}, {
  "x": 138,
  "y": 117
}, {
  "x": 139,
  "y": 122
}, {
  "x": 141,
  "y": 127
}, {
  "x": 142,
  "y": 132
}, {
  "x": 143,
  "y": 134
}, {
  "x": 143,
  "y": 135
}, {
  "x": 145,
  "y": 132
}, {
  "x": 146,
  "y": 127
}, {
  "x": 148,
  "y": 120
}, {
  "x": 150,
  "y": 115
}, {
  "x": 152,
  "y": 110
}, {
  "x": 122,
  "y": 116
}, {
  "x": 125,
  "y": 123
}, {
  "x": 127,
  "y": 129
}, {
  "x": 128,
  "y": 133
}, {
  "x": 130,
  "y": 132
}, {
  "x": 133,
  "y": 127
}, {
  "x": 135,
  "y": 121
}, {
  "x": 135,
  "y": 115
}, {
  "x": 137,
  "y": 113
}, {
  "x": 138,
  "y": 117
}, {
  "x": 139,
  "y": 122
}, {
  "x": 141,
  "y": 127
}, {
  "x": 142,
  "y": 132
}, {
  "x": 143,
  "y": 134
}, {
  "x": 143,
  "y": 135
}, {
  "x": 145,
  "y": 132
}, {
  "x": 146,
  "y": 127
}, {
  "x": 148,
  "y": 120
}, {
  "x": 150,
  "y": 115
}, {
  "x": 152,
  "y": 110
}, {
  "x": 159,
  "y": 116
}, {
  "x": 159,
  "y": 123
}, {
  "x": 159,
  "y": 128
}, {
  "x": 159,
  "y": 132
}, {
  "x": 159,
  "y": 136
}, {
  "x": 162,
  "y": 136
}, {
  "x": 169,
  "y": 136
}, {
  "x": 159,
  "y": 112
}, {
  "x": 159,
  "y": 118
}, {
  "x": 159,
  "y": 125
}, {
  "x": 159,
  "y": 130
}, {
  "x": 159,
  "y": 133
}, {
  "x": 160,
  "y": 136
}, {
  "x": 164,
  "y": 136
}, {
  "x": 170,
  "y": 136
}, {
  "x": 176,
  "y": 112
}, {
  "x": 176,
  "y": 120
}, {
  "x": 176,
  "y": 126
}, {
  "x": 176,
  "y": 131
}, {
  "x": 176,
  "y": 134
}, {
  "x": 178,
  "y": 135
}, {
  "x": 181,
  "y": 136
}, {
  "x": 186,
  "y": 136
}, {
  "x": 176,
  "y": 110
}, {
  "x": 176,
  "y": 118
}, {
  "x": 176,
  "y": 124
}, {
  "x": 176,
  "y": 130
}, {
  "x": 176,
  "y": 133
}, {
  "x": 177,
  "y": 135
}, {
  "x": 180,
  "y": 135
}, {
  "x": 184,
  "y": 136
}, {
  "x": 188,
  "y": 136
}, {
  "x": 182,
  "y": 123
}, {
  "x": 178,
  "y": 123
}, {
  "x": 183,
  "y": 123
}, {
  "x": 181,
  "y": 109
}, {
  "x": 186,
  "y": 109
}, {
  "x": 181,
  "y": 109
}, {
  "x": 186,
  "y": 109
}, {
  "x": 198,
  "y": 113
}, {
  "x": 196,
  "y": 118
}, {
  "x": 195,
  "y": 125
}, {
  "x": 195,
  "y": 130
}, {
  "x": 195,
  "y": 129
}, {
  "x": 196,
  "y": 123
}, {
  "x": 197,
  "y": 116
}, {
  "x": 198,
  "y": 113
}, {
  "x": 199,
  "y": 111
}, {
  "x": 202,
  "y": 111
}, {
  "x": 208,
  "y": 112
}, {
  "x": 212,
  "y": 115
}, {
  "x": 212,
  "y": 122
}, {
  "x": 209,
  "y": 128
}, {
  "x": 202,
  "y": 132
}, {
  "x": 198,
  "y": 133
}, {
  "x": 196,
  "y": 132
}, {
  "x": 197,
  "y": 114
}, {
  "x": 196,
  "y": 120
}, {
  "x": 195,
  "y": 127
}, {
  "x": 195,
  "y": 131
}, {
  "x": 195,
  "y": 127
}, {
  "x": 196,
  "y": 121
}, {
  "x": 197,
  "y": 115
}, {
  "x": 198,
  "y": 112
}, {
  "x": 200,
  "y": 111
}, {
  "x": 204,
  "y": 111
}, {
  "x": 210,
  "y": 113
}, {
  "x": 212,
  "y": 117
}, {
  "x": 212,
  "y": 125
}, {
  "x": 206,
  "y": 129
}, {
  "x": 201,
  "y": 132
}, {
  "x": 197,
  "y": 133
}, {
  "x": 235,
  "y": 114
}, {
  "x": 231,
  "y": 114
}, {
  "x": 227,
  "y": 117
}, {
  "x": 225,
  "y": 123
}, {
  "x": 225,
  "y": 127
}, {
  "x": 226,
  "y": 131
}, {
  "x": 231,
  "y": 132
}, {
  "x": 235,
  "y": 133
}, {
  "x": 240,
  "y": 133
}, {
  "x": 243,
  "y": 131
}, {
  "x": 232,
  "y": 114
}, {
  "x": 229,
  "y": 115
}, {
  "x": 226,
  "y": 120
}, {
  "x": 225,
  "y": 126
}, {
  "x": 225,
  "y": 129
}, {
  "x": 229,
  "y": 132
}, {
  "x": 234,
  "y": 133
}, {
  "x": 239,
  "y": 133
}, {
  "x": 243,
  "y": 132
}, {
  "x": 234,
  "y": 124
}, {
  "x": 238,
  "y": 123
}, {
  "x": 241,
  "y": 123
}, {
  "x": 241,
  "y": 127
}, {
  "x": 241,
  "y": 132
}, {
  "x": 232,
  "y": 124
}, {
  "x": 237,
  "y": 123
}, {
  "x": 241,
  "y": 122
}, {
  "x": 241,
  "y": 126
}, {
  "x": 241,
  "y": 131
}, {
  "x": 240,
  "y": 131
}, {
  "x": 252,
  "y": 119
}, {
  "x": 252,
  "y": 126
}, {
  "x": 252,
  "y": 132
}, {
  "x": 253,
  "y": 134
}, {
  "x": 258,
  "y": 134
}, {
  "x": 264,
  "y": 133
}, {
  "x": 265,
  "y": 132
}, {
  "x": 252,
  "y": 119
}, {
  "x": 252,
  "y": 126
}, {
  "x": 252,
  "y": 132
}, {
  "x": 253,
  "y": 134
}, {
  "x": 258,
  "y": 134
}, {
  "x": 264,
  "y": 133
}, {
  "x": 265,
  "y": 132
}, {
  "x": 256,
  "y": 124
}, {
  "x": 261,
  "y": 123
}, {
  "x": 256,
  "y": 124
}, {
  "x": 261,
  "y": 123
}, {
  "x": 257,
  "y": 110
}, {
  "x": 262,
  "y": 110
}, {
  "x": 268,
  "y": 109
}, {
  "x": 256,
  "y": 110
}, {
  "x": 261,
  "y": 110
}, {
  "x": 266,
  "y": 110
}];

exports.hand_super2 = hand_super2;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hand_super3 = [{
  "x": 49,
  "y": 151
}, {
  "x": 46,
  "y": 151
}, {
  "x": 42,
  "y": 153
}, {
  "x": 40,
  "y": 158
}, {
  "x": 39,
  "y": 163
}, {
  "x": 39,
  "y": 168
}, {
  "x": 44,
  "y": 172
}, {
  "x": 51,
  "y": 175
}, {
  "x": 54,
  "y": 176
}, {
  "x": 58,
  "y": 173
}, {
  "x": 59,
  "y": 170
}, {
  "x": 59,
  "y": 166
}, {
  "x": 58,
  "y": 161
}, {
  "x": 54,
  "y": 158
}, {
  "x": 49,
  "y": 156
}, {
  "x": 45,
  "y": 156
}, {
  "x": 48,
  "y": 151
}, {
  "x": 44,
  "y": 151
}, {
  "x": 41,
  "y": 155
}, {
  "x": 39,
  "y": 160
}, {
  "x": 39,
  "y": 165
}, {
  "x": 41,
  "y": 170
}, {
  "x": 46,
  "y": 173
}, {
  "x": 52,
  "y": 176
}, {
  "x": 56,
  "y": 176
}, {
  "x": 59,
  "y": 172
}, {
  "x": 59,
  "y": 168
}, {
  "x": 59,
  "y": 164
}, {
  "x": 57,
  "y": 160
}, {
  "x": 52,
  "y": 157
}, {
  "x": 47,
  "y": 156
}, {
  "x": 44,
  "y": 156
}, {
  "x": 71,
  "y": 152
}, {
  "x": 71,
  "y": 163
}, {
  "x": 71,
  "y": 170
}, {
  "x": 71,
  "y": 171
}, {
  "x": 71,
  "y": 150
}, {
  "x": 71,
  "y": 160
}, {
  "x": 71,
  "y": 169
}, {
  "x": 71,
  "y": 172
}, {
  "x": 73,
  "y": 151
}, {
  "x": 77,
  "y": 159
}, {
  "x": 84,
  "y": 166
}, {
  "x": 90,
  "y": 171
}, {
  "x": 91,
  "y": 172
}, {
  "x": 73,
  "y": 153
}, {
  "x": 78,
  "y": 160
}, {
  "x": 86,
  "y": 168
}, {
  "x": 90,
  "y": 172
}, {
  "x": 91,
  "y": 170
}, {
  "x": 87,
  "y": 156
}, {
  "x": 87,
  "y": 166
}, {
  "x": 87,
  "y": 172
}, {
  "x": 87,
  "y": 150
}, {
  "x": 87,
  "y": 160
}, {
  "x": 87,
  "y": 168
}, {
  "x": 87,
  "y": 173
}, {
  "x": 106,
  "y": 150
}, {
  "x": 116,
  "y": 151
}, {
  "x": 125,
  "y": 151
}, {
  "x": 105,
  "y": 150
}, {
  "x": 113,
  "y": 150
}, {
  "x": 122,
  "y": 151
}, {
  "x": 127,
  "y": 152
}, {
  "x": 114,
  "y": 159
}, {
  "x": 115,
  "y": 167
}, {
  "x": 117,
  "y": 175
}, {
  "x": 114,
  "y": 155
}, {
  "x": 114,
  "y": 161
}, {
  "x": 116,
  "y": 171
}, {
  "x": 118,
  "y": 175
}, {
  "x": 129,
  "y": 152
}, {
  "x": 130,
  "y": 163
}, {
  "x": 131,
  "y": 172
}, {
  "x": 132,
  "y": 174
}, {
  "x": 129,
  "y": 156
}, {
  "x": 130,
  "y": 167
}, {
  "x": 132,
  "y": 173
}, {
  "x": 143,
  "y": 151
}, {
  "x": 143,
  "y": 160
}, {
  "x": 143,
  "y": 169
}, {
  "x": 144,
  "y": 175
}, {
  "x": 143,
  "y": 153
}, {
  "x": 143,
  "y": 164
}, {
  "x": 143,
  "y": 172
}, {
  "x": 144,
  "y": 174
}, {
  "x": 136,
  "y": 162
}, {
  "x": 142,
  "y": 162
}, {
  "x": 128,
  "y": 162
}, {
  "x": 138,
  "y": 162
}, {
  "x": 143,
  "y": 162
}, {
  "x": 154,
  "y": 155
}, {
  "x": 155,
  "y": 163
}, {
  "x": 155,
  "y": 171
}, {
  "x": 155,
  "y": 174
}, {
  "x": 159,
  "y": 175
}, {
  "x": 163,
  "y": 175
}, {
  "x": 167,
  "y": 175
}, {
  "x": 154,
  "y": 152
}, {
  "x": 155,
  "y": 162
}, {
  "x": 155,
  "y": 169
}, {
  "x": 155,
  "y": 173
}, {
  "x": 157,
  "y": 175
}, {
  "x": 162,
  "y": 175
}, {
  "x": 166,
  "y": 175
}, {
  "x": 170,
  "y": 175
}, {
  "x": 164,
  "y": 161
}, {
  "x": 168,
  "y": 160
}, {
  "x": 158,
  "y": 161
}, {
  "x": 165,
  "y": 161
}, {
  "x": 169,
  "y": 160
}, {
  "x": 158,
  "y": 148
}, {
  "x": 164,
  "y": 148
}, {
  "x": 169,
  "y": 148
}, {
  "x": 159,
  "y": 148
}, {
  "x": 166,
  "y": 148
}, {
  "x": 188,
  "y": 149
}, {
  "x": 188,
  "y": 156
}, {
  "x": 188,
  "y": 166
}, {
  "x": 188,
  "y": 173
}, {
  "x": 188,
  "y": 176
}, {
  "x": 192,
  "y": 176
}, {
  "x": 199,
  "y": 176
}, {
  "x": 201,
  "y": 175
}, {
  "x": 188,
  "y": 153
}, {
  "x": 188,
  "y": 161
}, {
  "x": 188,
  "y": 170
}, {
  "x": 188,
  "y": 175
}, {
  "x": 191,
  "y": 176
}, {
  "x": 196,
  "y": 176
}, {
  "x": 201,
  "y": 176
}, {
  "x": 203,
  "y": 150
}, {
  "x": 203,
  "y": 156
}, {
  "x": 203,
  "y": 166
}, {
  "x": 204,
  "y": 173
}, {
  "x": 203,
  "y": 150
}, {
  "x": 203,
  "y": 156
}, {
  "x": 203,
  "y": 166
}, {
  "x": 204,
  "y": 173
}, {
  "x": 215,
  "y": 152
}, {
  "x": 215,
  "y": 165
}, {
  "x": 215,
  "y": 174
}, {
  "x": 215,
  "y": 173
}, {
  "x": 215,
  "y": 156
}, {
  "x": 215,
  "y": 168
}, {
  "x": 215,
  "y": 175
}, {
  "x": 216,
  "y": 150
}, {
  "x": 219,
  "y": 156
}, {
  "x": 227,
  "y": 165
}, {
  "x": 231,
  "y": 172
}, {
  "x": 232,
  "y": 171
}, {
  "x": 218,
  "y": 155
}, {
  "x": 225,
  "y": 162
}, {
  "x": 230,
  "y": 169
}, {
  "x": 232,
  "y": 173
}, {
  "x": 230,
  "y": 149
}, {
  "x": 229,
  "y": 162
}, {
  "x": 229,
  "y": 171
}, {
  "x": 227,
  "y": 174
}, {
  "x": 230,
  "y": 152
}, {
  "x": 229,
  "y": 165
}, {
  "x": 228,
  "y": 174
}, {
  "x": 246,
  "y": 150
}, {
  "x": 246,
  "y": 160
}, {
  "x": 243,
  "y": 168
}, {
  "x": 243,
  "y": 173
}, {
  "x": 243,
  "y": 176
}, {
  "x": 247,
  "y": 177
}, {
  "x": 252,
  "y": 177
}, {
  "x": 255,
  "y": 175
}, {
  "x": 246,
  "y": 157
}, {
  "x": 244,
  "y": 165
}, {
  "x": 243,
  "y": 172
}, {
  "x": 243,
  "y": 175
}, {
  "x": 245,
  "y": 176
}, {
  "x": 250,
  "y": 177
}, {
  "x": 256,
  "y": 176
}, {
  "x": 247,
  "y": 164
}, {
  "x": 254,
  "y": 161
}, {
  "x": 256,
  "y": 160
}, {
  "x": 249,
  "y": 163
}, {
  "x": 255,
  "y": 161
}, {
  "x": 246,
  "y": 147
}, {
  "x": 253,
  "y": 147
}, {
  "x": 259,
  "y": 147
}, {
  "x": 246,
  "y": 147
}, {
  "x": 253,
  "y": 147
}, {
  "x": 259,
  "y": 147
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
