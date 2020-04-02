"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWholeToken = getWholeToken;
exports.routineTokenExpirationCheck = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _fs = require("./_fs.js");

var _home = require("./_home.js");

var _log = require("./_log.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var routineTokenExpirationCheck = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function routineTokenExpirationCheck() {
    return _ref.apply(this, arguments);
  };
}();

exports.routineTokenExpirationCheck = routineTokenExpirationCheck;

// function hasTokenExpired() {
//   return (getJwt().exp > +new Date)
// }
function getWholeToken() {
  return _getWholeToken.apply(this, arguments);
}

function _getWholeToken() {
  _getWholeToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var doesExist;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _fs.doesFolderExists)((0, _home.getTokenFilePath)());

          case 2:
            doesExist = _context2.sent;

            if (doesExist) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", null);

          case 5:
            _context2.next = 7;
            return (0, _fs.readFile)((0, _home.getTokenFilePath)());

          case 7:
            return _context2.abrupt("return", _context2.sent);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getWholeToken.apply(this, arguments);
}

function getTokenUsername() {
  return _getTokenUsername.apply(this, arguments);
}

function _getTokenUsername() {
  _getTokenUsername = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var doesExist, tokenFile;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _fs.doesFolderExists)((0, _home.getTokenFilePath)());

          case 2:
            doesExist = _context3.sent;

            if (doesExist) {
              _context3.next = 6;
              break;
            }

            console.log((0, _log.red)("You are not authorized yet"));
            return _context3.abrupt("return", process.exit());

          case 6:
            _context3.next = 8;
            return (0, _fs.readFile)((0, _home.getTokenFilePath)());

          case 8:
            tokenFile = _context3.sent;
            return _context3.abrupt("return", _jsonwebtoken["default"].decode(tokenFile).data.username);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTokenUsername.apply(this, arguments);
}