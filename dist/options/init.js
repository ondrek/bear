"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructInit = constructInit;

var _inquirer = _interopRequireDefault(require("inquirer"));

var _index = require("../utils/index.js");

var _echo = require("../utils/echo.js");

var _ask = require("../utils/ask.js");

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sleep = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ms) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sleep(_x) {
    return _ref.apply(this, arguments);
  };
}();

var pickAnApp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(choices) {
    var name;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.info("\n  Pick an app:");
            choices.forEach(function (choice) {
              return console.info("  > ", _chalk["default"].green(choice));
            });
            _context2.next = 4;
            return (0, _ask.ask)("\n  Select an app: ");

          case 4:
            name = _context2.sent;

            if (!(choices.indexOf(name) === -1)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 8;
            return pickAnApp(choices);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function pickAnApp(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function ensuresManifestExists() {
  return _ensuresManifestExists.apply(this, arguments);
}

function _ensuresManifestExists() {
  _ensuresManifestExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var print, localManifestFile, manifest, response, apps, app;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            print = (0, _echo.echo)();
            localManifestFile = _index.home.getLocalManifest();
            print.start("Ensuring local manifest does exist");
            _context7.next = 5;
            return _index.fs.doesFolderExists(localManifestFile);

          case 5:
            manifest = _context7.sent;
            _context7.next = 8;
            return sleep(1000);

          case 8:
            if (!manifest) {
              _context7.next = 11;
              break;
            }

            print.succeed("Ensuring local manifest does exist — IT DOES.");
            return _context7.abrupt("return");

          case 11:
            print.fail("Ensuring local manifest does exist — IT DOES NOT.");
            _context7.next = 14;
            return (0, _index.fetch)("GET", "/apps/list");

          case 14:
            response = _context7.sent;
            apps = response.apps.map(function (app) {
              return app.name;
            });
            _context7.next = 18;
            return pickAnApp(apps);

          case 18:
            app = _context7.sent;
            _context7.next = 21;
            return _index.fs.createLocalConfigFile(app);

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _ensuresManifestExists.apply(this, arguments);
}

var ensuresHomeFolderExist = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var print, homeFolder, doesAlreadyExist;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Checking if home configuration already exist");
            _context3.next = 4;
            return sleep(1000);

          case 4:
            homeFolder = _index.home.getHomeFolder();
            _context3.next = 7;
            return _index.fs.doesFolderExists(homeFolder);

          case 7:
            doesAlreadyExist = _context3.sent;

            if (!doesAlreadyExist) {
              _context3.next = 11;
              break;
            }

            print.succeed("Home configuration was already located on your disk");
            return _context3.abrupt("return");

          case 11:
            _context3.next = 13;
            return _index.fs.createFolder(homeFolder);

          case 13:
            print.succeed("Home configuration was added");

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function ensuresHomeFolderExist() {
    return _ref3.apply(this, arguments);
  };
}();

var ensuresUserIsAuthenticated = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var print, tokenFile;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Ensuring user is already authentificated");
            _context4.next = 4;
            return _index.fs.doesFolderExists(_index.home.getTokenFilePath());

          case 4:
            tokenFile = _context4.sent;
            _context4.next = 7;
            return sleep(1000);

          case 7:
            if (tokenFile) {
              _context4.next = 11;
              break;
            }

            print.fail("User is not authentificated yet");
            _context4.next = 11;
            return loginUser();

          case 11:
            print.succeed("User does already have TOKEN file in his profile");

          case 12:
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

function loginUser() {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var _yield$inquirer$promp, username, passcode, print, response;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _inquirer["default"].prompt([{
              type: "input",
              message: "Enter a username:",
              name: "username"
            }, {
              type: "password",
              message: "Enter a password:",
              name: "passcode",
              mask: "*"
            }]);

          case 2:
            _yield$inquirer$promp = _context8.sent;
            username = _yield$inquirer$promp.username;
            passcode = _yield$inquirer$promp.passcode;
            print = (0, _echo.echo)();
            print.start("Contacting server for authentification");
            _context8.next = 9;
            return (0, _index.fetch)("POST", "/auth/login", {
              username: username,
              passcode: passcode
            });

          case 9:
            response = _context8.sent;
            _context8.next = 12;
            return sleep(500);

          case 12:
            if (!response.userDoesNotExistYet) {
              _context8.next = 15;
              break;
            }

            print.fail("Sorry, but this user does not exist");
            return _context8.abrupt("return", process.exit(0));

          case 15:
            _context8.next = 17;
            return _index.fs.createFile(_index.home.getTokenFilePath(), response.cli.token);

          case 17:
            print.succeed("Sorry, but this user does not exist");

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _loginUser.apply(this, arguments);
}

var validateExistingToken = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var print, token, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Validating TOKEN existing if it's not expired or broken");
            _context5.next = 4;
            return sleep(1000);

          case 4:
            _context5.next = 6;
            return _index.fs.readFile(_index.home.getTokenFilePath());

          case 6:
            token = _context5.sent;
            _context5.next = 9;
            return (0, _index.fetch)("POST", "/auth/jsonwebtoken", {
              token: token
            });

          case 9:
            response = _context5.sent;

            if (response.token) {
              _context5.next = 18;
              break;
            }

            print.fail("Current token has expired, please login again");
            _context5.next = 14;
            return _index.fs.unlinkFolder(_index.home.getTokenFilePath());

          case 14:
            _context5.next = 16;
            return loginUser();

          case 16:
            _context5.next = 19;
            break;

          case 18:
            print.succeed("Validating TOKEN existing if it's not expired or broken. Was valid.");

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function validateExistingToken() {
    return _ref5.apply(this, arguments);
  };
}();

var hasInternetConnection = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var print, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Checking internet connection");
            _context6.next = 4;
            return sleep(1000);

          case 4:
            _context6.next = 6;
            return (0, _index.fetch)("GET", "/")["catch"](function () {
              print.fail("We can't reach Bearicorn servers, try to browse bearicorn.com in your browser");
              return process.exit(1);
            });

          case 6:
            response = _context6.sent;

            if (response) {
              print.succeed("Internet connection is OK");
            }

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function hasInternetConnection() {
    return _ref6.apply(this, arguments);
  };
}();

function constructInit() {
  return _constructInit.apply(this, arguments);
}

function _constructInit() {
  _constructInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return hasInternetConnection();

          case 2:
            _context9.next = 4;
            return ensuresHomeFolderExist();

          case 4:
            _context9.next = 6;
            return ensuresUserIsAuthenticated();

          case 6:
            _context9.next = 8;
            return validateExistingToken();

          case 8:
            _context9.next = 10;
            return ensuresManifestExists();

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _constructInit.apply(this, arguments);
}