"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructLogout = void 0;

var _index = require("../utils/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var constructLogout = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var bearFolderPath, doesExist;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bearFolderPath = _index.home.getHomeFolder();
            _context.next = 3;
            return _index.fs.unlinkFolder(bearFolderPath);

          case 3:
            _context.next = 5;
            return _index.fs.doesFolderExists(bearFolderPath);

          case 5:
            doesExist = _context.sent;

            if (doesExist) {
              console.info(_index.log.dim("Removing ~/.bearicorn home folder with all its user related data "));
              console.info(_index.log.green("Home Bearic sdadassssorn folder was removed"));
            } else {
              console.info(_index.log.green("User was already logged out.. see you later."));
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function constructLogout() {
    return _ref.apply(this, arguments);
  };
}();

exports.constructLogout = constructLogout;