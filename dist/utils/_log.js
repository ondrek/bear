"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.red = exports.green = exports.bold = exports.dim = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var title = _chalk["default"].dim("Bearicorn; ");

var dim = function dim(message, prefix) {
  return prefix ? _chalk["default"].dim(title + message) : _chalk["default"].dim(message);
};

exports.dim = dim;

var bold = function bold(message, prefix) {
  return prefix ? _chalk["default"].bold(title + message) : _chalk["default"].bold(message);
};

exports.bold = bold;

var red = function red(message, prefix) {
  return prefix ? _chalk["default"].red(title + message) : _chalk["default"].red(message);
};

exports.red = red;

var green = function green(message, prefix) {
  return prefix ? _chalk["default"].green(title + message) : _chalk["default"].green(message);
};

exports.green = green;