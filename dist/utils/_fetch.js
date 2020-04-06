"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _token = require("./_token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function fetchFn() {
  return _fetchFn.apply(this, arguments);
}

function _fetchFn() {
  _fetchFn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var method,
        url,
        data,
        againstLocalhost,
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
            againstLocalhost = process.env.USER === "samuel";
            fullUrl = againstLocalhost ? "http://localhost:3001/api" + url : "https://bearicorn.com/api" + url;
            _context.next = 7;
            return (0, _token.getWholeToken)();

          case 7:
            _context.t0 = _context.sent;
            headers = {
              "token": _context.t0,
              "accept": "application/json",
              "content-type": "application/json"
            };
            _context.next = 11;
            return (0, _nodeFetch["default"])(fullUrl, {
              method: method,
              headers: headers,
              body: method !== "GET" ? JSON.stringify(data) : null
            })["catch"](function (error) {
              if (error.code === "ECONNREFUSED") {
                return Promise.reject("Sorry, but it seems you don't have connection to the internet");
              }

              console.info("There was an unhandled error while making request", error);
            });

          case 11:
            response = _context.sent;
            _context.next = 14;
            return response.json();

          case 14:
            return _context.abrupt("return", _context.sent);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchFn.apply(this, arguments);
}

var _default = fetchFn;
exports["default"] = _default;