#!/usr/bin/env node
// import inquirer from "inquirer"
"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

require("@babel/polyfill");

var _push = _interopRequireDefault(require("./options/push.js"));

var _help = require("./options/help.js");

var _init = require("./options/init.js");

var _logout = require("./options/logout.js");

var _args4 = require("./utils/args.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import log from "./utils/log.js"
// import { pipeline } from "./utils/tasks.js"
// import { debug } from "./utils/debug.js"
// import { unicorn } from "./unicorn/index.js"
function parseOptions() {
  return _parseOptions.apply(this, arguments);
}

function _parseOptions() {
  _parseOptions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _help.printHelpSection)();

          case 2:
            if (!_args4.args.push) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return (0, _push["default"])();

          case 5:
            _context2.next = 15;
            break;

          case 7:
            if (!_args4.args.init) {
              _context2.next = 12;
              break;
            }

            _context2.next = 10;
            return (0, _init.constructInit)();

          case 10:
            _context2.next = 15;
            break;

          case 12:
            if (!_args4.args.logout) {
              _context2.next = 15;
              break;
            }

            _context2.next = 15;
            return (0, _logout.constructLogout)();

          case 15:
            _context2.next = 17;
            return kill();

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
  _kill = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            process.exit(1);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _kill.apply(this, arguments);
}

process.on("uncaughtException", handleError);
process.on("unhandledRejection", handleError);

function handleError(error) {
  console.error(_chalk["default"].bgRed("\nUnhandled error, this should have never happend"));
  console.error(error);
  process.exit(1);
}

process.on("exit", function (code) {
  console.log("");
});