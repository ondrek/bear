"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ask = ask;

var _readline = _interopRequireDefault(require("readline"));

var _util = require("util");

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_readline["default"].Interface.prototype.question[_util.promisify.custom] = function (prompt) {
  var _this = this;

  return new Promise(function (resolve) {
    return _readline["default"].Interface.prototype.question.call(_this, prompt, resolve);
  });
};

_readline["default"].Interface.prototype.questionAsync = (0, _util.promisify)(_readline["default"].Interface.prototype.question);

function ask(_x) {
  return _ask.apply(this, arguments);
}

function _ask() {
  _ask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(question) {
    var rl, answer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rl = _readline["default"].createInterface({
              input: process.stdin,
              output: process.stdout
            });
            _context.next = 3;
            return rl.questionAsync(_chalk["default"].bold(question));

          case 3:
            answer = _context.sent;
            rl.close();
            return _context.abrupt("return", answer);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ask.apply(this, arguments);
}