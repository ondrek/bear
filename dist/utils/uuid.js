"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _uuid = require("uuid");

function _default() {
  return (0, _uuid.v4)().split("-").join("");
}