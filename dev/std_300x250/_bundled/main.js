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

function arrayClean(points, amount) {
    var pointsClean = [];
    points.forEach(function (item, i) {
        if (i % amount === 0) {
            pointsClean.push(item);
        }
    });

    return pointsClean;
}

exports.writer = writer;
exports.masker = masker;
exports.arrayClean = arrayClean;

},{"handwrite":3}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsProline = require("../../_common/js/proline");

var _handwrite = require('handwrite');

var _handwrite2 = _interopRequireDefault(_handwrite);

var points = [{ "x": 47, "y": 64 }, { "x": 47, "y": 65 }, { "x": 47, "y": 66 }, { "x": 47, "y": 67 }, { "x": 47, "y": 68 }, { "x": 47, "y": 69 }, { "x": 47, "y": 70 }, { "x": 47, "y": 71 }, { "x": 47, "y": 72 }, { "x": 47, "y": 73 }, { "x": 47, "y": 74 }, { "x": 47, "y": 75 }, { "x": 47, "y": 76 }, { "x": 47, "y": 77 }, { "x": 47, "y": 78 }, { "x": 47, "y": 79 }, { "x": 47, "y": 80 }, { "x": 47, "y": 81 }, { "x": 47, "y": 82 }, { "x": 47, "y": 84 }, { "x": 47, "y": 86 }, { "x": 47, "y": 87 }, { "x": 47, "y": 88 }, { "x": 47, "y": 89 }, { "x": 47, "y": 90 }, { "x": 47, "y": 91 }, { "x": 47, "y": 92 }, { "x": 47, "y": 93 }, { "x": 47, "y": 94 }, { "x": 47, "y": 95 }, { "x": 47, "y": 96 }, { "x": 47, "y": 64 }, { "x": 47, "y": 65 }, { "x": 47, "y": 66 }, { "x": 47, "y": 67 }, { "x": 47, "y": 68 }, { "x": 47, "y": 69 }, { "x": 47, "y": 70 }, { "x": 47, "y": 71 }, { "x": 47, "y": 72 }, { "x": 47, "y": 73 }, { "x": 47, "y": 74 }, { "x": 47, "y": 75 }, { "x": 47, "y": 76 }, { "x": 47, "y": 77 }, { "x": 47, "y": 78 }, { "x": 47, "y": 79 }, { "x": 47, "y": 80 }, { "x": 47, "y": 81 }, { "x": 47, "y": 82 }, { "x": 47, "y": 84 }, { "x": 47, "y": 86 }, { "x": 47, "y": 87 }, { "x": 47, "y": 88 }, { "x": 47, "y": 89 }, { "x": 47, "y": 90 }, { "x": 47, "y": 91 }, { "x": 47, "y": 92 }, { "x": 47, "y": 93 }, { "x": 47, "y": 94 }, { "x": 47, "y": 95 }, { "x": 47, "y": 96 }, { "x": 66, "y": 62 }, { "x": 66, "y": 63 }, { "x": 66, "y": 64 }, { "x": 66, "y": 65 }, { "x": 66, "y": 67 }, { "x": 65, "y": 67 }, { "x": 64, "y": 69 }, { "x": 64, "y": 70 }, { "x": 63, "y": 71 }, { "x": 62, "y": 72 }, { "x": 61, "y": 73 }, { "x": 60, "y": 74 }, { "x": 59, "y": 74 }, { "x": 58, "y": 74 }, { "x": 58, "y": 75 }, { "x": 57, "y": 75 }, { "x": 56, "y": 76 }, { "x": 55, "y": 77 }, { "x": 54, "y": 78 }, { "x": 53, "y": 78 }, { "x": 53, "y": 79 }, { "x": 53, "y": 80 }, { "x": 54, "y": 80 }, { "x": 54, "y": 81 }, { "x": 55, "y": 81 }, { "x": 55, "y": 82 }, { "x": 55, "y": 83 }, { "x": 56, "y": 83 }, { "x": 56, "y": 84 }, { "x": 57, "y": 84 }, { "x": 57, "y": 85 }, { "x": 58, "y": 86 }, { "x": 58, "y": 87 }, { "x": 59, "y": 88 }, { "x": 60, "y": 89 }, { "x": 60, "y": 90 }, { "x": 61, "y": 91 }, { "x": 62, "y": 92 }, { "x": 63, "y": 93 }, { "x": 64, "y": 93 }, { "x": 64, "y": 94 }, { "x": 65, "y": 94 }, { "x": 65, "y": 95 }, { "x": 66, "y": 95 }, { "x": 66, "y": 96 }, { "x": 67, "y": 96 }, { "x": 66, "y": 62 }, { "x": 66, "y": 63 }, { "x": 66, "y": 64 }, { "x": 66, "y": 65 }, { "x": 66, "y": 67 }, { "x": 65, "y": 67 }, { "x": 64, "y": 69 }, { "x": 64, "y": 70 }, { "x": 63, "y": 71 }, { "x": 62, "y": 72 }, { "x": 61, "y": 73 }, { "x": 60, "y": 74 }, { "x": 59, "y": 74 }, { "x": 58, "y": 74 }, { "x": 58, "y": 75 }, { "x": 57, "y": 75 }, { "x": 56, "y": 76 }, { "x": 55, "y": 77 }, { "x": 54, "y": 78 }, { "x": 53, "y": 78 }, { "x": 53, "y": 79 }, { "x": 53, "y": 80 }, { "x": 54, "y": 80 }, { "x": 54, "y": 81 }, { "x": 55, "y": 81 }, { "x": 55, "y": 82 }, { "x": 55, "y": 83 }, { "x": 56, "y": 83 }, { "x": 56, "y": 84 }, { "x": 57, "y": 84 }, { "x": 57, "y": 85 }, { "x": 58, "y": 86 }, { "x": 58, "y": 87 }, { "x": 59, "y": 88 }, { "x": 60, "y": 89 }, { "x": 60, "y": 90 }, { "x": 61, "y": 91 }, { "x": 62, "y": 92 }, { "x": 63, "y": 93 }, { "x": 64, "y": 93 }, { "x": 64, "y": 94 }, { "x": 65, "y": 94 }, { "x": 65, "y": 95 }, { "x": 66, "y": 95 }, { "x": 66, "y": 96 }, { "x": 67, "y": 96 }, { "x": 75, "y": 94 }, { "x": 75, "y": 93 }, { "x": 75, "y": 92 }, { "x": 75, "y": 91 }, { "x": 75, "y": 90 }, { "x": 75, "y": 89 }, { "x": 75, "y": 88 }, { "x": 75, "y": 87 }, { "x": 75, "y": 86 }, { "x": 75, "y": 85 }, { "x": 75, "y": 84 }, { "x": 75, "y": 83 }, { "x": 75, "y": 82 }, { "x": 75, "y": 81 }, { "x": 75, "y": 80 }, { "x": 75, "y": 79 }, { "x": 75, "y": 78 }, { "x": 75, "y": 77 }, { "x": 75, "y": 76 }, { "x": 75, "y": 75 }, { "x": 75, "y": 74 }, { "x": 75, "y": 73 }, { "x": 75, "y": 72 }, { "x": 75, "y": 71 }, { "x": 75, "y": 70 }, { "x": 75, "y": 69 }, { "x": 75, "y": 68 }, { "x": 75, "y": 69 }, { "x": 76, "y": 69 }, { "x": 77, "y": 70 }, { "x": 77, "y": 71 }, { "x": 78, "y": 71 }, { "x": 79, "y": 72 }, { "x": 80, "y": 73 }, { "x": 80, "y": 74 }, { "x": 81, "y": 74 }, { "x": 82, "y": 75 }, { "x": 82, "y": 76 }, { "x": 83, "y": 76 }, { "x": 84, "y": 77 }, { "x": 84, "y": 78 }, { "x": 85, "y": 79 }, { "x": 85, "y": 80 }, { "x": 86, "y": 80 }, { "x": 86, "y": 81 }, { "x": 87, "y": 82 }, { "x": 87, "y": 83 }, { "x": 88, "y": 83 }, { "x": 88, "y": 84 }, { "x": 88, "y": 85 }, { "x": 89, "y": 86 }, { "x": 89, "y": 87 }, { "x": 90, "y": 88 }, { "x": 90, "y": 89 }, { "x": 91, "y": 89 }, { "x": 91, "y": 90 }, { "x": 92, "y": 91 }, { "x": 93, "y": 91 }, { "x": 93, "y": 92 }, { "x": 93, "y": 93 }, { "x": 94, "y": 93 }, { "x": 94, "y": 92 }, { "x": 94, "y": 90 }, { "x": 94, "y": 89 }, { "x": 94, "y": 88 }, { "x": 94, "y": 87 }, { "x": 94, "y": 85 }, { "x": 94, "y": 84 }, { "x": 94, "y": 83 }, { "x": 94, "y": 82 }, { "x": 94, "y": 81 }, { "x": 94, "y": 80 }, { "x": 94, "y": 79 }, { "x": 94, "y": 78 }, { "x": 94, "y": 77 }, { "x": 94, "y": 76 }, { "x": 94, "y": 75 }, { "x": 94, "y": 74 }, { "x": 94, "y": 73 }, { "x": 94, "y": 72 }, { "x": 94, "y": 71 }, { "x": 94, "y": 70 }, { "x": 94, "y": 69 }, { "x": 95, "y": 68 }, { "x": 95, "y": 67 }, { "x": 95, "y": 66 }, { "x": 95, "y": 65 }, { "x": 95, "y": 64 }, { "x": 75, "y": 94 }, { "x": 75, "y": 93 }, { "x": 75, "y": 92 }, { "x": 75, "y": 91 }, { "x": 75, "y": 90 }, { "x": 75, "y": 89 }, { "x": 75, "y": 88 }, { "x": 75, "y": 87 }, { "x": 75, "y": 86 }, { "x": 75, "y": 85 }, { "x": 75, "y": 84 }, { "x": 75, "y": 83 }, { "x": 75, "y": 82 }, { "x": 75, "y": 81 }, { "x": 75, "y": 80 }, { "x": 75, "y": 79 }, { "x": 75, "y": 78 }, { "x": 75, "y": 77 }, { "x": 75, "y": 76 }, { "x": 75, "y": 75 }, { "x": 75, "y": 74 }, { "x": 75, "y": 73 }, { "x": 75, "y": 72 }, { "x": 75, "y": 71 }, { "x": 75, "y": 70 }, { "x": 75, "y": 69 }, { "x": 75, "y": 68 }, { "x": 75, "y": 69 }, { "x": 76, "y": 69 }, { "x": 77, "y": 70 }, { "x": 77, "y": 71 }, { "x": 78, "y": 71 }, { "x": 79, "y": 72 }, { "x": 80, "y": 73 }, { "x": 80, "y": 74 }, { "x": 81, "y": 74 }, { "x": 82, "y": 75 }, { "x": 82, "y": 76 }, { "x": 83, "y": 76 }, { "x": 84, "y": 77 }, { "x": 84, "y": 78 }, { "x": 85, "y": 79 }, { "x": 85, "y": 80 }, { "x": 86, "y": 80 }, { "x": 86, "y": 81 }, { "x": 87, "y": 82 }, { "x": 87, "y": 83 }, { "x": 88, "y": 83 }, { "x": 88, "y": 84 }, { "x": 88, "y": 85 }, { "x": 89, "y": 86 }, { "x": 89, "y": 87 }, { "x": 90, "y": 88 }, { "x": 90, "y": 89 }, { "x": 91, "y": 89 }, { "x": 91, "y": 90 }, { "x": 92, "y": 91 }, { "x": 93, "y": 91 }, { "x": 93, "y": 92 }, { "x": 93, "y": 93 }, { "x": 94, "y": 93 }, { "x": 94, "y": 92 }, { "x": 94, "y": 90 }, { "x": 94, "y": 89 }, { "x": 94, "y": 88 }, { "x": 94, "y": 87 }, { "x": 94, "y": 85 }, { "x": 94, "y": 84 }, { "x": 94, "y": 83 }, { "x": 94, "y": 82 }, { "x": 94, "y": 81 }, { "x": 94, "y": 80 }, { "x": 94, "y": 79 }, { "x": 94, "y": 78 }, { "x": 94, "y": 77 }, { "x": 94, "y": 76 }, { "x": 94, "y": 75 }, { "x": 94, "y": 74 }, { "x": 94, "y": 73 }, { "x": 94, "y": 72 }, { "x": 94, "y": 71 }, { "x": 94, "y": 70 }, { "x": 94, "y": 69 }, { "x": 95, "y": 68 }, { "x": 95, "y": 67 }, { "x": 95, "y": 66 }, { "x": 95, "y": 65 }, { "x": 95, "y": 64 }, { "x": 130, "y": 67 }, { "x": 129, "y": 67 }, { "x": 128, "y": 67 }, { "x": 127, "y": 67 }, { "x": 126, "y": 67 }, { "x": 125, "y": 67 }, { "x": 123, "y": 67 }, { "x": 121, "y": 67 }, { "x": 120, "y": 67 }, { "x": 118, "y": 67 }, { "x": 117, "y": 67 }, { "x": 116, "y": 67 }, { "x": 116, "y": 68 }, { "x": 115, "y": 68 }, { "x": 115, "y": 69 }, { "x": 113, "y": 70 }, { "x": 112, "y": 70 }, { "x": 112, "y": 71 }, { "x": 111, "y": 71 }, { "x": 111, "y": 72 }, { "x": 110, "y": 72 }, { "x": 109, "y": 73 }, { "x": 109, "y": 74 }, { "x": 108, "y": 76 }, { "x": 108, "y": 78 }, { "x": 108, "y": 80 }, { "x": 108, "y": 82 }, { "x": 108, "y": 84 }, { "x": 108, "y": 86 }, { "x": 108, "y": 87 }, { "x": 108, "y": 89 }, { "x": 108, "y": 90 }, { "x": 108, "y": 91 }, { "x": 108, "y": 92 }, { "x": 109, "y": 93 }, { "x": 110, "y": 94 }, { "x": 111, "y": 94 }, { "x": 112, "y": 94 }, { "x": 114, "y": 95 }, { "x": 115, "y": 95 }, { "x": 117, "y": 95 }, { "x": 119, "y": 95 }, { "x": 120, "y": 95 }, { "x": 123, "y": 95 }, { "x": 126, "y": 95 }, { "x": 128, "y": 94 }, { "x": 130, "y": 94 }, { "x": 131, "y": 92 }, { "x": 132, "y": 91 }, { "x": 132, "y": 89 }, { "x": 132, "y": 87 }, { "x": 133, "y": 85 }, { "x": 133, "y": 84 }, { "x": 133, "y": 82 }, { "x": 133, "y": 80 }, { "x": 133, "y": 78 }, { "x": 133, "y": 76 }, { "x": 133, "y": 75 }, { "x": 133, "y": 74 }, { "x": 133, "y": 72 }, { "x": 133, "y": 71 }, { "x": 132, "y": 70 }, { "x": 131, "y": 70 }, { "x": 130, "y": 70 }, { "x": 129, "y": 70 }, { "x": 128, "y": 70 }, { "x": 127, "y": 70 }, { "x": 126, "y": 70 }, { "x": 125, "y": 70 }, { "x": 124, "y": 70 }, { "x": 124, "y": 69 }, { "x": 123, "y": 69 }, { "x": 141, "y": 70 }, { "x": 141, "y": 71 }, { "x": 142, "y": 71 }, { "x": 142, "y": 72 }, { "x": 143, "y": 73 }, { "x": 144, "y": 74 }, { "x": 145, "y": 76 }, { "x": 146, "y": 77 }, { "x": 147, "y": 78 }, { "x": 148, "y": 80 }, { "x": 149, "y": 80 }, { "x": 149, "y": 82 }, { "x": 150, "y": 83 }, { "x": 151, "y": 84 }, { "x": 151, "y": 85 }, { "x": 151, "y": 86 }, { "x": 152, "y": 87 }, { "x": 152, "y": 88 }, { "x": 152, "y": 89 }, { "x": 152, "y": 90 }, { "x": 152, "y": 91 }, { "x": 152, "y": 92 }, { "x": 152, "y": 93 }, { "x": 152, "y": 92 }, { "x": 152, "y": 91 }, { "x": 153, "y": 89 }, { "x": 154, "y": 87 }, { "x": 155, "y": 85 }, { "x": 155, "y": 84 }, { "x": 156, "y": 82 }, { "x": 156, "y": 80 }, { "x": 157, "y": 80 }, { "x": 157, "y": 78 }, { "x": 157, "y": 76 }, { "x": 157, "y": 75 }, { "x": 157, "y": 74 }, { "x": 158, "y": 73 }, { "x": 158, "y": 72 }, { "x": 159, "y": 71 }, { "x": 160, "y": 71 }, { "x": 160, "y": 70 }, { "x": 161, "y": 70 }, { "x": 162, "y": 70 }, { "x": 162, "y": 71 }, { "x": 163, "y": 73 }, { "x": 164, "y": 74 }, { "x": 164, "y": 76 }, { "x": 165, "y": 77 }, { "x": 166, "y": 80 }, { "x": 166, "y": 82 }, { "x": 167, "y": 84 }, { "x": 168, "y": 86 }, { "x": 168, "y": 88 }, { "x": 169, "y": 90 }, { "x": 169, "y": 92 }, { "x": 169, "y": 93 }, { "x": 169, "y": 94 }, { "x": 169, "y": 95 }, { "x": 170, "y": 94 }, { "x": 170, "y": 93 }, { "x": 170, "y": 92 }, { "x": 170, "y": 89 }, { "x": 170, "y": 86 }, { "x": 171, "y": 83 }, { "x": 172, "y": 80 }, { "x": 173, "y": 78 }, { "x": 174, "y": 75 }, { "x": 175, "y": 74 }, { "x": 176, "y": 73 }, { "x": 176, "y": 72 }, { "x": 177, "y": 71 }, { "x": 177, "y": 70 }, { "x": 186, "y": 70 }, { "x": 186, "y": 71 }, { "x": 186, "y": 72 }, { "x": 186, "y": 74 }, { "x": 186, "y": 75 }, { "x": 186, "y": 77 }, { "x": 186, "y": 78 }, { "x": 186, "y": 79 }, { "x": 186, "y": 81 }, { "x": 186, "y": 83 }, { "x": 186, "y": 84 }, { "x": 186, "y": 86 }, { "x": 186, "y": 87 }, { "x": 186, "y": 88 }, { "x": 186, "y": 90 }, { "x": 186, "y": 91 }, { "x": 186, "y": 92 }, { "x": 200, "y": 95 }, { "x": 200, "y": 93 }, { "x": 200, "y": 92 }, { "x": 200, "y": 91 }, { "x": 200, "y": 90 }, { "x": 200, "y": 87 }, { "x": 200, "y": 86 }, { "x": 200, "y": 85 }, { "x": 200, "y": 83 }, { "x": 200, "y": 82 }, { "x": 200, "y": 81 }, { "x": 200, "y": 80 }, { "x": 200, "y": 78 }, { "x": 200, "y": 77 }, { "x": 200, "y": 76 }, { "x": 200, "y": 75 }, { "x": 200, "y": 74 }, { "x": 200, "y": 73 }, { "x": 200, "y": 72 }, { "x": 200, "y": 70 }, { "x": 200, "y": 69 }, { "x": 200, "y": 68 }, { "x": 201, "y": 68 }, { "x": 201, "y": 67 }, { "x": 202, "y": 66 }, { "x": 202, "y": 65 }, { "x": 203, "y": 65 }, { "x": 204, "y": 65 }, { "x": 205, "y": 66 }, { "x": 206, "y": 67 }, { "x": 207, "y": 67 }, { "x": 208, "y": 69 }, { "x": 209, "y": 71 }, { "x": 210, "y": 73 }, { "x": 211, "y": 75 }, { "x": 212, "y": 77 }, { "x": 212, "y": 78 }, { "x": 213, "y": 79 }, { "x": 214, "y": 81 }, { "x": 214, "y": 82 }, { "x": 215, "y": 82 }, { "x": 215, "y": 84 }, { "x": 216, "y": 85 }, { "x": 216, "y": 86 }, { "x": 217, "y": 86 }, { "x": 218, "y": 87 }, { "x": 219, "y": 88 }, { "x": 219, "y": 89 }, { "x": 220, "y": 90 }, { "x": 221, "y": 91 }, { "x": 221, "y": 92 }, { "x": 221, "y": 91 }, { "x": 222, "y": 89 }, { "x": 222, "y": 87 }, { "x": 222, "y": 84 }, { "x": 222, "y": 81 }, { "x": 222, "y": 78 }, { "x": 222, "y": 76 }, { "x": 222, "y": 73 }, { "x": 222, "y": 72 }, { "x": 222, "y": 70 }, { "x": 222, "y": 69 }, { "x": 222, "y": 67 }, { "x": 222, "y": 66 }, { "x": 222, "y": 65 }, { "x": 222, "y": 64 }, { "x": 257, "y": 72 }, { "x": 256, "y": 72 }, { "x": 255, "y": 72 }, { "x": 253, "y": 72 }, { "x": 252, "y": 72 }, { "x": 251, "y": 72 }, { "x": 250, "y": 72 }, { "x": 249, "y": 72 }, { "x": 248, "y": 72 }, { "x": 247, "y": 72 }, { "x": 246, "y": 72 }, { "x": 245, "y": 72 }, { "x": 244, "y": 72 }, { "x": 243, "y": 72 }, { "x": 242, "y": 72 }, { "x": 241, "y": 72 }, { "x": 240, "y": 72 }, { "x": 239, "y": 72 }, { "x": 238, "y": 72 }, { "x": 237, "y": 72 }, { "x": 237, "y": 73 }, { "x": 237, "y": 74 }, { "x": 236, "y": 74 }, { "x": 236, "y": 75 }, { "x": 235, "y": 77 }, { "x": 235, "y": 78 }, { "x": 235, "y": 79 }, { "x": 235, "y": 80 }, { "x": 234, "y": 81 }, { "x": 234, "y": 82 }, { "x": 234, "y": 83 }, { "x": 234, "y": 84 }, { "x": 234, "y": 85 }, { "x": 234, "y": 86 }, { "x": 234, "y": 87 }, { "x": 234, "y": 88 }, { "x": 234, "y": 89 }, { "x": 235, "y": 89 }, { "x": 236, "y": 90 }, { "x": 238, "y": 91 }, { "x": 239, "y": 92 }, { "x": 240, "y": 92 }, { "x": 241, "y": 92 }, { "x": 242, "y": 93 }, { "x": 243, "y": 93 }, { "x": 243, "y": 94 }, { "x": 244, "y": 94 }, { "x": 245, "y": 94 }, { "x": 246, "y": 94 }, { "x": 248, "y": 94 }, { "x": 249, "y": 94 }, { "x": 250, "y": 94 }, { "x": 251, "y": 94 }, { "x": 252, "y": 94 }, { "x": 254, "y": 93 }, { "x": 255, "y": 92 }, { "x": 256, "y": 91 }, { "x": 257, "y": 91 }, { "x": 258, "y": 90 }, { "x": 258, "y": 89 }, { "x": 258, "y": 88 }, { "x": 259, "y": 88 }, { "x": 259, "y": 87 }, { "x": 259, "y": 86 }, { "x": 260, "y": 85 }, { "x": 260, "y": 84 }, { "x": 260, "y": 83 }, { "x": 260, "y": 82 }, { "x": 260, "y": 81 }, { "x": 260, "y": 80 }, { "x": 259, "y": 80 }, { "x": 258, "y": 80 }, { "x": 257, "y": 80 }, { "x": 256, "y": 80 }, { "x": 255, "y": 80 }, { "x": 253, "y": 80 }, { "x": 252, "y": 80 }, { "x": 251, "y": 80 }, { "x": 250, "y": 80 }, { "x": 249, "y": 80 }, { "x": 248, "y": 80 }];

function hand() {
    var brushsize = arguments.length <= 0 || arguments[0] === undefined ? 8 : arguments[0];

    var myCanvas = document.querySelector('#super1 canvas');
    var myImg = document.querySelector('#super1 img');
    var looooooongArray = (0, _commonJsProline.arrayClean)(points, 5);
    var options = {
        brushsize: brushsize,
        speed: 8,
        repeat: 0,
        cleanFromBehind: true,
        cleanUpWhenDone: true,
        callback: function callback() {
            console.log('sdlfkjsdlf');
        }
    };

    var handwrite = new _handwrite2["default"](myCanvas, myImg);
    handwrite.draw(looooooongArray, options);

    TweenLite.set(myImg, { opacity: 0 });
}

setTimeout(function () {
    // writer(points)
    start();
}, 1000);

function start() {
    hand();
}

},{"../../_common/js/proline":1,"handwrite":3}],3:[function(require,module,exports){
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
