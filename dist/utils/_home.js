"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTokenFilePath = getTokenFilePath;
exports.getHomeFolder = getHomeFolder;
exports.getLocalManifest = getLocalManifest;

var _os = _interopRequireDefault(require("os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getTokenFilePath() {
  return _os["default"].homedir() + "/.bearicorn/TOKEN";
}

function getHomeFolder() {
  return _os["default"].homedir() + "/.bearicorn";
}

function getLocalManifest() {
  return process.cwd() + "/.bearicorn";
}