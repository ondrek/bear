"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = void 0;

var _os = _interopRequireDefault(require("os"));

var _tasks = require("./tasks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getMemory(_x, _x2) {
  return _getMemory.apply(this, arguments);
}

function _getMemory() {
  _getMemory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, task) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            task.title = (0, _tasks.dim)("Total memory of user is ".concat(_os["default"].totalmem(), " and free memory is ").concat(_os["default"].freemem()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMemory.apply(this, arguments);
}

function getCliVersion(_x3, _x4) {
  return _getCliVersion.apply(this, arguments);
}

function _getCliVersion() {
  _getCliVersion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, task) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            task.title = (0, _tasks.dim)("Cli version is 2.0.10");

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getCliVersion.apply(this, arguments);
}

function getUserDetails(_x5, _x6) {
  return _getUserDetails.apply(this, arguments);
}

function _getUserDetails() {
  _getUserDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx, task) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            task.title = (0, _tasks.dim)("User ".concat(_os["default"].userInfo().username, " has homedir in ").concat(_os["default"].homedir()));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUserDetails.apply(this, arguments);
}

function getPlatform(_x7, _x8) {
  return _getPlatform.apply(this, arguments);
}

function _getPlatform() {
  _getPlatform = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(ctx, task) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            task.title = (0, _tasks.dim)("Platform is ".concat(_os["default"].arch(), " ").concat(_os["default"].platform(), " with uptime ").concat(_os["default"].uptime()));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getPlatform.apply(this, arguments);
}

var debug = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.info("");
            tasks = [{
              title: (0, _tasks.dim)("Getting debug user details"),
              task: [{
                title: "Getting user details..",
                task: getUserDetails
              }, {
                title: "Getting memory details..",
                task: getMemory
              }, {
                title: "Getting cli versions...",
                task: getCliVersion
              }, {
                title: "Getting platform details..",
                task: getPlatform
              }]
            }];
            _context.next = 4;
            return (0, _tasks.pipeline)(tasks);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function debug() {
    return _ref.apply(this, arguments);
  };
}();

exports.debug = debug;