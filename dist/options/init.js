"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensuresProjectConfigExists = exports.ensuresUserIsAuthenticated = exports.ensuresHomeFolderExist = void 0;

var _readline = _interopRequireDefault(require("readline"));

var _index = require("../utils/index.js");

var _tasks = require("../utils/tasks.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var rl = _readline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

var ask = function ask(q) {
  return new Promise(function (r) {
    return rl.question(_index.log.bold(q), function (a) {
      return r(a);
    });
  });
};

var letsLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var username, passcode, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ask("Please enter your username: ");

          case 2:
            username = _context.sent;
            _context.next = 5;
            return ask("Enter login phrase from email we've sent you: ");

          case 5:
            passcode = _context.sent;
            rl.close();
            _context.next = 9;
            return (0, _index.fetch)("POST", "/auth/login", {
              username: username,
              passcode: passcode
            });

          case 9:
            response = _context.sent;

            if (!response.userDoesNotExistYet) {
              _context.next = 13;
              break;
            }

            console.info(_index.log.red("Sorry, but this user does not exist\n"));
            return _context.abrupt("return", process.exit(0));

          case 13:
            console.info(_index.log.green("Password was fine"));
            _context.next = 16;
            return _index.fs.createFile(_index.home.getTokenFilePath(), response.cli.token);

          case 16:
            console.info("");

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function letsLogin() {
    return _ref.apply(this, arguments);
  };
}();

var pickAnApp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apps) {
    var picked;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ask("App name: ");

          case 2:
            picked = _context2.sent;

            if (!(apps.indexOf(picked) === -1)) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return pickAnApp(apps);

          case 6:
            return _context2.abrupt("return", _context2.sent);

          case 7:
            return _context2.abrupt("return", picked);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function pickAnApp(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var ensuresProjectConfigExists = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var manifest, response, apps, chosen;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _index.fs.doesFolderExists(_index.home.getLocalManifest());

          case 2:
            manifest = _context3.sent;

            if (!manifest) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return");

          case 5:
            _context3.next = 7;
            return (0, _index.fetch)("GET", "/apps/list");

          case 7:
            response = _context3.sent;
            apps = response.apps.map(function (app) {
              return app.name;
            });
            console.log(_index.log.green("You currently have ".concat(apps.length, " apps. Which one should be linked?")));
            apps.forEach(function (app) {
              return console.info(app);
            });
            _context3.next = 13;
            return pickAnApp(apps);

          case 13:
            chosen = _context3.sent;
            _context3.next = 16;
            return _index.fs.createLocalConfigFile(chosen);

          case 16:
            console.log(_index.log.green("We created file .bearicorn in ".concat(process.cwd())));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function ensuresProjectConfigExists() {
    return _ref3.apply(this, arguments);
  };
}();

exports.ensuresProjectConfigExists = ensuresProjectConfigExists;

var ensuresUserIsAuthenticated = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var tokenFile, token, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _index.fs.doesFolderExists(_index.home.getTokenFilePath());

          case 2:
            tokenFile = _context4.sent;

            if (tokenFile) {
              _context4.next = 8;
              break;
            }

            console.info(_index.log.bold("You are not authenticate yet, let's do it together now"));
            _context4.next = 7;
            return letsLogin();

          case 7:
            return _context4.abrupt("return", _context4.sent);

          case 8:
            _context4.next = 10;
            return _index.fs.readFile(_index.home.getTokenFilePath());

          case 10:
            token = _context4.sent;
            _context4.next = 13;
            return (0, _index.fetch)("POST", "/auth/jsonwebtoken", {
              token: token
            });

          case 13:
            response = _context4.sent;

            if (response.token) {
              _context4.next = 21;
              break;
            }

            console.info(_index.log.red("Your token has expired and you have been logged out, please log in again.."));
            _context4.next = 18;
            return _index.fs.unlinkFolder(_index.home.getTokenFilePath());

          case 18:
            console.info(_index.log.red("Old token was removed, please login with new credentials"));
            _context4.next = 21;
            return letsLogin();

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function ensuresUserIsAuthenticated() {
    return _ref4.apply(this, arguments);
  };
}();

exports.ensuresUserIsAuthenticated = ensuresUserIsAuthenticated;

var ensuresHomeFolderExist = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var doesFolderExist;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _index.fs.doesFolderExists(_index.home.getHomeFolder());

          case 2:
            doesFolderExist = _context5.sent;

            if (!doesFolderExist) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return");

          case 5:
            _context5.next = 7;
            return _index.fs.createFolder(_index.home.getHomeFolder());

          case 7:
            console.info(_index.log.dim("It seems like you run cli for the first time, we created home folder"));

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function ensuresHomeFolderExist() {
    return _ref5.apply(this, arguments);
  };
}();

exports.ensuresHomeFolderExist = ensuresHomeFolderExist;