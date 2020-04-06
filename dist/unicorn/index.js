"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unicorn = unicorn;

var _ora = _interopRequireDefault(require("ora"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var options = {
  name: ""
};

function process(_x) {
  return _process.apply(this, arguments);
}

function _process() {
  _process = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(issue) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var spinner = (0, _ora["default"])({
                text: issue.title,
                prefixText: " ",
                color: "gray"
              });
              spinner.start(); //console.info(issue.fn)

              issue.fn(options).then(function () {
                spinner.succeed();
                resolve();
              })["catch"](reject);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _process.apply(this, arguments);
}

function unicorn(_x2) {
  return _unicorn.apply(this, arguments);
}

function _unicorn() {
  _unicorn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(message) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", {
              text: function text() {},
              success: function success() {},
              failed: function failed() {}
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _unicorn.apply(this, arguments);
}

function echo(_x3) {
  return _echo.apply(this, arguments);
}

function _echo() {
  _echo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(text) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _echo.apply(this, arguments);
}