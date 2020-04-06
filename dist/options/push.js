"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _chalk = _interopRequireDefault(require("chalk"));

var _formData = _interopRequireDefault(require("form-data"));

var _index = require("../utils/index.js");

var _echo = require("../utils/echo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listAllFiles(_x) {
  return _listAllFiles.apply(this, arguments);
}

function _listAllFiles() {
  _listAllFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dir) {
    var files;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.info(_chalk["default"].dim.bold("  Creating package from the current folder\n  |"));
            _context.next = 3;
            return _index.fs.walk(dir);

          case 3:
            files = _context.sent;
            files.forEach(function (file) {
              console.info("  ".concat(_chalk["default"].dim("file"), " ").concat(_chalk["default"].green(file)));
            });
            console.info("");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _listAllFiles.apply(this, arguments);
}

function createImageAndUploadToS3() {
  return _createImageAndUploadToS.apply(this, arguments);
}

function _createImageAndUploadToS() {
  _createImageAndUploadToS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var print, startTime, id, tarFilePath;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            print = (0, _echo.echo)("Creating image from the current source code..");
            startTime = +new Date();
            id = (0, _index.uuid)();
            tarFilePath = _index.home.getHomeFolder() + "/" + id + ".tar";
            console.info(id);
            console.info(process.cwd()); // tar.c({ cwd: process.cwd() }, [""]).then(_ => console.info("done"))

            _context2.next = 8;
            return _index.fs.createTarFile(process.cwd(), tarFilePath);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createImageAndUploadToS.apply(this, arguments);
}

function uploadToS3(_x2, _x3) {
  return _uploadToS.apply(this, arguments);
}

function _uploadToS() {
  _uploadToS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tarName, id) {
    var stream, formData, startTime, app, response, data, diff;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return");

          case 8:
            app = _context3.sent;
            _context3.t0 = _nodeFetch["default"];
            _context3.t1 = "http://localhost:3001/api/image/upload/".concat(app);
            _context3.t2 = formData;
            _context3.next = 14;
            return _index.token.getWholeToken();

          case 14:
            _context3.t3 = _context3.sent;
            _context3.t4 = {
              token: _context3.t3
            };
            _context3.t5 = {
              method: "POST",
              body: _context3.t2,
              headers: _context3.t4
            };
            _context3.next = 19;
            return (0, _context3.t0)(_context3.t1, _context3.t5);

          case 19:
            response = _context3.sent;
            _context3.next = 22;
            return response.json();

          case 22:
            data = _context3.sent;

            if (!data.missingJwt) {
              _context3.next = 27;
              break;
            }

            return _context3.abrupt("return", console.error("Missing JWT token while during the request"));

          case 27:
            if (!data.expiredJwt) {
              _context3.next = 29;
              break;
            }

            return _context3.abrupt("return", console.error("Sent JWT token was broken or expired"));

          case 29:
            _context3.next = 31;
            return _index.fs.unlinkFile(tarName);

          case 31:
            diff = (+new Date() - startTime) / 1000;
            console.info(_index.log.green("".concat(id, " Upload done successfully and it took ").concat(diff, "s")));
            process.exit(0);

          case 34:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _uploadToS.apply(this, arguments);
}

function _default() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return listAllFiles(".");

          case 2:
            _context4.next = 4;
            return createImageAndUploadToS3();

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _ref.apply(this, arguments);
}