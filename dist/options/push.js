"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _chalk = _interopRequireDefault(require("chalk"));

var _formData = _interopRequireDefault(require("form-data"));

var _index = require("../utils/index.js");

var _ask = require("../utils/ask.js");

var fsNative = _interopRequireWildcard(require("fs"));

var _echo = require("../utils/echo");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function listAllFiles(_x2) {
  return _listAllFiles.apply(this, arguments);
}

function _listAllFiles() {
  _listAllFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dir) {
    var files;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.info(_chalk["default"].dim.bold("  Creating package from the current folder\n  |"));
            _context2.next = 3;
            return _index.fs.walk(dir);

          case 3:
            files = _context2.sent;
            files.forEach(function (file) {
              console.info("  ".concat(_chalk["default"].dim("file"), " ").concat(_chalk["default"].green(file)));
            });
            console.info("");

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _listAllFiles.apply(this, arguments);
}

function askIfAgreesUploadFiles() {
  return _askIfAgreesUploadFiles.apply(this, arguments);
}

function _askIfAgreesUploadFiles() {
  _askIfAgreesUploadFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var answer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _ask.ask)("  Do you want to upload those files?  Y/n: ");

          case 2:
            answer = _context3.sent;

            if (!(answer === "Y" || answer === "n")) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", answer === "Y");

          case 5:
            _context3.next = 7;
            return askIfAgreesUploadFiles();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _askIfAgreesUploadFiles.apply(this, arguments);
}

function createImageAndUploadToS3() {
  return _createImageAndUploadToS.apply(this, arguments);
}

function _createImageAndUploadToS() {
  _createImageAndUploadToS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var currentFolder, files, _yield$fs$createTarFi, id, tarFilePath;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return askIfAgreesUploadFiles();

          case 2:
            if (_context4.sent) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return");

          case 4:
            console.info("  |");
            currentFolder = process.cwd();
            _context4.next = 8;
            return _index.fs.walk(currentFolder);

          case 8:
            files = _context4.sent;
            _context4.next = 11;
            return _index.fs.createTarFile(files);

          case 11:
            _yield$fs$createTarFi = _context4.sent;
            id = _yield$fs$createTarFi.id;
            tarFilePath = _yield$fs$createTarFi.tarFilePath;
            _context4.next = 16;
            return uploadToS3(id, tarFilePath);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createImageAndUploadToS.apply(this, arguments);
}

function uploadToS3(_x3, _x4) {
  return _uploadToS.apply(this, arguments);
}

function _uploadToS() {
  _uploadToS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, tarFilePath) {
    var print, stream, formData, response, data, deleted;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Uploading tar file to the cloud under ID ".concat(id));
            stream = fsNative.createReadStream(tarFilePath);
            formData = new _formData["default"]();
            formData.append("blob", stream, tarFilePath);
            _context5.t0 = _nodeFetch["default"];
            _context5.t1 = "http://localhost:3001/api/image/".concat(id);
            _context5.t2 = formData;
            _context5.next = 10;
            return _index.token.getWholeToken();

          case 10:
            _context5.t3 = _context5.sent;
            _context5.t4 = {
              token: _context5.t3
            };
            _context5.t5 = {
              method: "POST",
              body: _context5.t2,
              headers: _context5.t4
            };
            _context5.next = 15;
            return (0, _context5.t0)(_context5.t1, _context5.t5);

          case 15:
            response = _context5.sent;
            _context5.next = 18;
            return response.json();

          case 18:
            data = _context5.sent;

            if (!data.missingJwt) {
              _context5.next = 23;
              break;
            }

            return _context5.abrupt("return", console.error("Missing JWT token while during the request"));

          case 23:
            if (!data.expiredJwt) {
              _context5.next = 27;
              break;
            }

            return _context5.abrupt("return", console.error("Sent JWT token was broken or expired"));

          case 27:
            if (!data.uploaded) {
              _context5.next = 36;
              break;
            }

            print.succeed();
            deleted = (0, _echo.echo)();
            deleted.start("Removing temp file");
            _context5.next = 33;
            return _index.fs.unlinkFile(tarFilePath);

          case 33:
            deleted.succeed("Temp file was successfully removed");
            _context5.next = 37;
            break;

          case 36:
            throw new Error("This should have never happend");

          case 37:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _uploadToS.apply(this, arguments);
}

function _default() {
  return _ref2.apply(this, arguments);
}

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return listAllFiles(".");

          case 2:
            _context6.next = 4;
            return createImageAndUploadToS3();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _ref2.apply(this, arguments);
}