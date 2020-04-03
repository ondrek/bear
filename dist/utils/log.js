"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var info = function info(message) {
  console.log("".concat(_chalk["default"].green("bearicorn"), " ").concat(_chalk["default"].dim("info"), " ").concat(_chalk["default"].dim(message)));
};

var error = function error(message) {
  console.log("".concat(_chalk["default"].green("bearicorn"), " ").concat(_chalk["default"].red("error"), " ").concat(message));
};

var _default = {
  info: info,
  error: error
};
exports["default"] = _default;