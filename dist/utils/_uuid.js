"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._uuid = void 0;

var _v = _interopRequireDefault(require("uuid/v4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _uuid = function _uuid() {
  return (0, _v["default"])().split("-").join("");
};

exports._uuid = _uuid;