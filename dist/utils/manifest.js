"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getManifestApp = getManifestApp;

var _fs = require("./_fs.js");

var _home = require("./_home.js");

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _echo = require("./echo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function verifyIfManifestEvenExists() {
  return _verifyIfManifestEvenExists.apply(this, arguments);
}

function _verifyIfManifestEvenExists() {
  _verifyIfManifestEvenExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var print, doesManifestExist;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Verify If Manifest Even Exists");
            _context.next = 4;
            return (0, _fs.doesFolderExists)((0, _home.getLocalManifest)());

          case 4:
            doesManifestExist = _context.sent;

            if (doesManifestExist) {
              print.succeed("Manifest does exist where is suppose to");
            } else {
              print.fail("Sorry, but manifest does not exist, type first < bear init >");
              process.exit(1);
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _verifyIfManifestEvenExists.apply(this, arguments);
}

function parseManifest() {
  return _parseManifest.apply(this, arguments);
}

function _parseManifest() {
  _parseManifest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var print, manifest, document;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Parsing manifest in the current directory");
            _context2.next = 4;
            return (0, _fs.readFile)((0, _home.getLocalManifest)());

          case 4:
            manifest = _context2.sent;

            try {
              document = _jsYaml["default"].safeLoad(manifest, "utf8");
            } catch (e) {
              print.fail("Sorry, but manifest in the current directory isn't valid YAML syntax");
              process.exit(1);
            }

            print.succeed("Syntax of manifest was parsed successfully");
            return _context2.abrupt("return", document);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _parseManifest.apply(this, arguments);
}

function getManifestApp() {
  return _getManifestApp.apply(this, arguments);
}

function _getManifestApp() {
  _getManifestApp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var manifest;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return verifyIfManifestEvenExists();

          case 2:
            _context3.next = 4;
            return parseManifest();

          case 4:
            manifest = _context3.sent;
            return _context3.abrupt("return", manifest.DescribeApp.Name);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getManifestApp.apply(this, arguments);
}