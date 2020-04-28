"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.args = void 0;

var _arg = _interopRequireDefault(require("arg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function parseArgumentsIntoOptions(rawArgs) {
  var args = (0, _arg["default"])({}, {
    argv: rawArgs.slice(2),
    permissive: true
  });
  return {
    logout: args._[0] === "logout",
    help: args._[0] === "help",
    push: args._[0] === "push",
    images: args._[0] === "images",
    init: args._[0] === "init"
  };
}

var args = parseArgumentsIntoOptions(process.argv);
exports.args = args;