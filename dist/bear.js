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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
            return _log["default"].debug("");

          case 2:
            if (!_args4.args.push) {
              _context2.next = 13;
              break;
            }

            _context2.next = 5;
            return (0, _init.ensuresHomeFolderExist)();

          case 5:
            _context2.next = 7;
            return (0, _init.ensuresUserIsAuthenticated)();

          case 7:
            _context2.next = 9;
            return (0, _init.ensuresProjectConfigExists)();

          case 9:
            _context2.next = 11;
            return (0, _push.constructPush)();

          case 11:
            _context2.next = 25;
            break;

          case 13:
            if (!_args4.args.init) {
              _context2.next = 18;
              break;
            }

            _context2.next = 16;
            return (0, _init.ensuresProjectConfigExists)();

          case 16:
            _context2.next = 25;
            break;

          case 18:
            if (!_args4.args.logout) {
              _context2.next = 23;
              break;
            }

            _context2.next = 21;
            return (0, _logout.constructLogout)();

          case 21:
            _context2.next = 25;
            break;

          case 23:
            _context2.next = 25;
            return (0, _help.printHelpSection)();

          case 25:
            _context2.next = 27;
            return kill();

          case 27:
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
} // const tasks = new Listr([
//   {
//     title: 'Success',
//     task: () => 'Foo'
//   },
//   {
//     title: 'Installing dependencies',
//     task: () => {
//       return new Listr([
//         {
//           title: 'Checking git status',
//           task: (ctx, task) => new Promise( (resolve, reject) => {
//             setTimeout(() => { resolve() }, 2000)
//           }).catch(() => {
//             ctx.yarn = false;
//             task.skip('Yarn not available, install it via `npm install -g yarn`');
//           }),
//         },
//         {
//           title: 'Checking remote history',
//           task: (ctx, task) => new Promise( (resolve, reject) => {
//             setTimeout(() => { resolve() }, 2000)
//           }).catch(() => {
//             ctx.yarn = false;
//             task.skip('Yarn not available, install it via `npm install -g yarn`');
//           }),
//         },
//         {
//           title: 'Checking remote history',
//           task: (ctx, task) => new Promise( (resolve, reject) => {
//             setTimeout(() => { resolve() }, 2000)
//           }).catch(() => {
//             ctx.yarn = false;
//             task.skip('Yarn not available, install it via `npm install -g yarn`');
//           }),
//         }
//       ], {concurrent: true});
//     }
//   },
//   {
//     title: 'Creating home folder',
//     task: (ctx, task) => new Promise( (resolve, reject) => {
//       setTimeout(() => { resolve() }, 2000)
//     }).catch(() => {
//       ctx.yarn = false;
//       task.skip('Yarn not available, install it via `npm install -g yarn`');
//     })
//   },
//   {
//     title: 'Generating private and public key',
//     task: (ctx, task) => new Promise( (resolve, reject) => {
//       setTimeout(() => { resolve() }, 2000)
//     }).catch(() => {
//       ctx.yarn = false;
//       task.skip('Yarn not available, install it via `npm install -g yarn`');
//     }),
//     skip: () => {
//       const random = Math.random()
//       if (random > 0.5) {
//         return 'Was skipped because random was ' + random;
//       }
//     }
//   },
//   {
//     title: 'Getting public token from Bearicorn server',
//     task: (ctx, task) => new Promise( (resolve, reject) => {
//       setTimeout(() => { resolve() }, 2000)
//     }).catch(() => {
//       ctx.yarn = false;
//       task.skip('Yarn not available, install it via `npm install -g yarn`');
//     })
//   }
// ])
//
// tasks.run().catch(err => {
//   console.error(err)
// })


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