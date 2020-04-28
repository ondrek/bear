"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _index = require("../utils/index");

var _echo = require("../utils/echo");

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAppImages() {
  return _getAppImages.apply(this, arguments);
}

function _getAppImages() {
  _getAppImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var print, response, options1;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            print = (0, _echo.echo)();
            print.start("Fetching last ten images of the particular user.. ");
            _context.next = 4;
            return (0, _index.fetch)("GET", "/images/list");

          case 4:
            response = _context.sent;

            if (response.images) {
              print.succeed("Fetching last ten images of the particular user.. OK");
            }

            console.info(_chalk["default"].bold.dim("\n  Images\n  |"));
            options1 = {
              year: "numeric",
              month: "long",
              day: "numeric"
            };
            response.images.forEach(function (image) {
              var date = new Date(image.modified);
              var formatted = new Intl.DateTimeFormat("en-GB", options1).format(date);
              console.info(" ", "nosene", " ", image.key.replace(".zip", ""), " ", _chalk["default"].dim(formatted));
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAppImages.apply(this, arguments);
}

function listAppImages() {
  return _listAppImages.apply(this, arguments);
}

function _listAppImages() {
  _listAppImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _listAppImages.apply(this, arguments);
}

function _default() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getAppImages();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _ref.apply(this, arguments);
}