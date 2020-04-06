#!/usr/bin/env node
"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _chalk = _interopRequireDefault(require("chalk"));

require("@babel/polyfill");

var _push = require("./options/push.js");

var _help = require("./options/help.js");

var _init = require("./options/init.js");

var _logout = require("./options/logout.js");

var _args5 = require("./utils/args.js");

var _log = _interopRequireDefault(require("./utils/log.js"));

var _tasks = require("./utils/tasks.js");

var _debug = require("./utils/debug.js");

var _index = require("./unicorn/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function parseOptions() {
  return _parseOptions.apply(this, arguments);
}

function _parseOptions() {
  _parseOptions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var sleep;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _help.printHelpSection)();

          case 2:
            sleep = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ms) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", new Promise(function (resolve) {
                          return setTimeout(resolve, ms);
                        }));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function sleep(_x) {
                return _ref2.apply(this, arguments);
              };
            }();

            if (!_args5.args.push) {
              _context3.next = 14;
              break;
            }

            _context3.next = 6;
            return ensuresHomeFolderExist();

          case 6:
            _context3.next = 8;
            return ensuresUserIsAuthenticated();

          case 8:
            _context3.next = 10;
            return ensuresProjectConfigExists();

          case 10:
            _context3.next = 12;
            return (0, _push.constructPush)();

          case 12:
            _context3.next = 22;
            break;

          case 14:
            if (!_args5.args.init) {
              _context3.next = 19;
              break;
            }

            _context3.next = 17;
            return (0, _init.constructInit)();

          case 17:
            _context3.next = 22;
            break;

          case 19:
            if (!_args5.args.logout) {
              _context3.next = 22;
              break;
            }

            _context3.next = 22;
            return (0, _logout.constructLogout)();

          case 22:
            _context3.next = 24;
            return kill();

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _parseOptions.apply(this, arguments);
}

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return parseOptions();

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

function kill() {
  return _kill.apply(this, arguments);
}

function _kill() {
  _kill = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            process.exit(1);

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _kill.apply(this, arguments);
}

process.on("uncaughtException", handleError);
process.on("unhandledRejection", handleError);

function handleError(error) {
  console.error(_chalk["default"].bgRed("\n\n  > Unhandled error, this is a real problem and should have never happen"));
  process.exit(1);
}

process.on("exit", function (code) {
  console.log("");
});