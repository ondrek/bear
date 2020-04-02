"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructPush = constructPush;

var _index = require("../utils/index.js");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _tar = _interopRequireDefault(require("tar"));

var _formData = _interopRequireDefault(require("form-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function constructPush() {
  return _constructPush.apply(this, arguments);
}

function _constructPush() {
  _constructPush = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id, startTime, tarFilePath, stream;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.info(_index.log.green("Creating image from the current source code.."));
            id = (0, _index.uuid)();
            startTime = +new Date();
            tarFilePath = _index.home.getHomeFolder() + "/" + id + ".tar";
            _context2.next = 6;
            return _tar["default"].c({
              cwd: process.cwd()
            }, [""]);

          case 6:
            stream = _context2.sent;
            _context2.next = 9;
            return stream.pipe(_index.fs.createWriteStream(tarFilePath)).on("close", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var diff;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      diff = (+new Date() - startTime) / 1000;
                      console.info("It took ".concat(diff, "s to build a package with id ").concat(id));
                      _context.next = 4;
                      return uploadToS3(tarFilePath, id);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _constructPush.apply(this, arguments);
}

function uploadToS3(_x, _x2) {
  return _uploadToS.apply(this, arguments);
}

function _uploadToS() {
  _uploadToS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tarName, id) {
    var stream, formData, startTime, app, response, data, diff;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            stream = _index.fs.createReadStream(tarName);
            formData = new _formData["default"]();
            formData.append("blob", stream, tarName);
            startTime = +new Date();
            console.info(_index.log.green("".concat(id, " Uploading...")));
            _context3.next = 7;
            return _index.manifest.app();

          case 7:
            app = _context3.sent;
            _context3.t0 = _nodeFetch["default"];
            _context3.t1 = "http://localhost:3001/api/image/upload/".concat(app);
            _context3.t2 = formData;
            _context3.next = 13;
            return _index.token.getWholeToken();

          case 13:
            _context3.t3 = _context3.sent;
            _context3.t4 = {
              token: _context3.t3
            };
            _context3.t5 = {
              method: "POST",
              body: _context3.t2,
              headers: _context3.t4
            };
            _context3.next = 18;
            return (0, _context3.t0)(_context3.t1, _context3.t5);

          case 18:
            response = _context3.sent;
            _context3.next = 21;
            return response.json();

          case 21:
            data = _context3.sent;

            if (!data.missingJwt) {
              _context3.next = 26;
              break;
            }

            return _context3.abrupt("return", console.error("Missing JWT token while during the request"));

          case 26:
            if (!data.expiredJwt) {
              _context3.next = 28;
              break;
            }

            return _context3.abrupt("return", console.error("Sent JWT token was broken or expired"));

          case 28:
            _context3.next = 30;
            return _index.fs.unlinkFile(tarName);

          case 30:
            diff = (+new Date() - startTime) / 1000;
            console.info(_index.log.green("".concat(id, " Upload done successfully and it took ").concat(diff, "s")));
            process.exit(0);

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _uploadToS.apply(this, arguments);
}