"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetch", {
  enumerable: true,
  get: function get() {
    return _fetch["default"];
  }
});
Object.defineProperty(exports, "uuid", {
  enumerable: true,
  get: function get() {
    return _uuid["default"];
  }
});
exports.ask = exports.echo = exports.log = exports.manifest = exports.fs = exports.token = exports.home = void 0;

var home = _interopRequireWildcard(require("./_home.js"));

exports.home = home;

var _fetch = _interopRequireDefault(require("./_fetch.js"));

var _uuid = _interopRequireDefault(require("./uuid.js"));

var token = _interopRequireWildcard(require("./_token.js"));

exports.token = token;

var fs = _interopRequireWildcard(require("./_fs.js"));

exports.fs = fs;

var manifest = _interopRequireWildcard(require("./manifest.js"));

exports.manifest = manifest;

var log = _interopRequireWildcard(require("./_log.js"));

exports.log = log;

var echo = _interopRequireWildcard(require("./echo.js"));

exports.echo = echo;

var ask = _interopRequireWildcard(require("./ask.js"));

exports.ask = ask;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }