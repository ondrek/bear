"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFn = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { getWholeToken } from "./_token"
var fetchFn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var method,
        url,
        data,
        fullUrl,
        headers,
        response,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 0 && _args[0] !== undefined ? _args[0] : "GET";
            url = _args.length > 1 && _args[1] !== undefined ? _args[1] : "";
            data = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            fullUrl = "http://localhost:3001/api" + url;
            _context.next = 6;
            return getWholeToken();

          case 6:
            _context.t0 = _context.sent;
            headers = {
              "token": _context.t0,
              "accept": "application/json",
              "content-type": "application/json"
            };
            _context.next = 10;
            return (0, _nodeFetch["default"])(fullUrl, {
              method: method,
              headers: headers,
              body: method !== "GET" ? JSON.stringify(data) : null
            });

          case 10:
            response = _context.sent;
            _context.next = 13;
            return response.json();

          case 13:
            return _context.abrupt("return", _context.sent);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchFn() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchFn = fetchFn;