#!/usr/bin/env node
"use strict";

var _listr = _interopRequireDefault(require("listr"));

var _inquirer = _interopRequireDefault(require("inquirer"));

require("@babel/polyfill");

var _push = require("./options/push.js");

var _help = require("./options/help.js");

var _init = require("./options/init.js");

var _logout = require("./options/logout.js");

var _args4 = require("./utils/args.js");

var _log = _interopRequireDefault(require("./utils/log.js"));

var _tasks = require("./utils/tasks.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

console.info("");

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
            return (0, _tasks.pipeline)([{
              title: "1",
              task: wait
            }, {
              title: "2",
              task: wait
            }, {
              title: "3",
              task: [{
                title: "3a",
                task: wait
              }, {
                title: "3b",
                task: [{
                  title: "3b-x",
                  task: wait
                }, {
                  title: "3b-y",
                  task: wait
                }, {
                  title: "3b-c",
                  task: wait
                }]
              }, {
                title: "3c",
                task: wait
              }]
            }, {
              title: "4",
              task: wait
            }]);

          case 2:
            return _context2.abrupt("return", process.exit(1));

          case 6:
            _context2.next = 8;
            return (0, _init.ensuresUserIsAuthenticated)();

          case 8:
            _context2.next = 10;
            return (0, _init.ensuresProjectConfigExists)();

          case 10:
            _context2.next = 12;
            return (0, _push.constructPush)();

          case 12:
            _context2.next = 24;
            break;

          case 14:
            if (!_args4.args.init) {
              _context2.next = 17;
              break;
            }

            _context2.next = 24;
            break;

          case 17:
            if (!_args4.args.logout) {
              _context2.next = 22;
              break;
            }

            _context2.next = 20;
            return (0, _logout.constructLogout)();

          case 20:
            _context2.next = 24;
            break;

          case 22:
            _context2.next = 24;
            return (0, _help.printHelpSection)();

          case 24:
            _context2.next = 26;
            return kill();

          case 26:
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
            console.info("");
            process.exit(1);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _kill.apply(this, arguments);
}

process.on("uncaughtException", function (err) {
  console.error("We don't handle this error. Shit.", err);
  process.exit(1);
});
process.on("exit", function (code) {
  console.log("");
});