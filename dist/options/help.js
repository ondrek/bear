"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printHelpSection = printHelpSection;

var _index = require("../utils/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function printHelpSection() {
  return _printHelpSection.apply(this, arguments);
}

function _printHelpSection() {
  _printHelpSection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.info("\n  ".concat(_index.log.dim("Try"), " bearicorn ").concat(_index.log.dim("with one command from the bellow:"), "\n\n  init        ").concat(_index.log.dim("Link your Cli to your cloud online account", false), "\n  push        ").concat(_index.log.dim("Push an image or a repository to a registry", false), "\n  pull        ").concat(_index.log.dim("Unlinks this cli from your online cloud account", false), "\n  config      ").concat(_index.log.dim("Config your account", false), "\n  app         ").concat(_index.log.dim("Apps have hardware, urls and possibility to deploy an image", false), "\n  image       ").concat(_index.log.dim("Images are multiple versions of your code", false), "\n  stats       ").concat(_index.log.dim("Display statistics of app your apps", false), "\n  logout      ").concat(_index.log.dim("Unlinks this cli from your online cloud account", false), "\n  version     ").concat(_index.log.dim("Show the Docker version information", false), "\n  hello       ").concat(_index.log.dim("Creates example of app in multiple languages", false), "\n\n  ").concat(_index.log.dim("Debug info"), "\n  "));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _printHelpSection.apply(this, arguments);
}