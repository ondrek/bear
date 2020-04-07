"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.echo = echo;

var _ora = _interopRequireDefault(require("ora"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function echo() {
  var obj = {};
  var instance = (0, _ora["default"])({
    text: "",
    prefixText: " ",
    color: "gray"
  });

  obj.start = function (message) {
    instance.start(message);
  };

  obj.succeed = function (message) {
    instance.succeed(message);
  };

  obj.fail = function (message) {
    instance.fail(message);
  };

  return obj;
}