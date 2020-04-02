"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = app;

var _fs = require("./_fs.js");

var _home = require("./_home.js");

var _jsYaml = _interopRequireDefault(require("js-yaml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function app() {
  return _app.apply(this, arguments);
}

function _app() {
  _app = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var doesManifestExist, manifest, document;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fs.doesFolderExists)((0, _home.getLocalManifest)());

          case 2:
            doesManifestExist = _context.sent;

            if (doesManifestExist) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", console.info("doesnt manifest exists, wtf"));

          case 5:
            _context.next = 7;
            return (0, _fs.readFile)((0, _home.getLocalManifest)());

          case 7:
            manifest = _context.sent;
            document = _jsYaml["default"].safeLoad(manifest, "utf8");
            return _context.abrupt("return", document.GeneralDescription.Name);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _app.apply(this, arguments);
}