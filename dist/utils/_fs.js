"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLocalConfigFile = exports.unlinkFolder = exports.unlinkFile = exports.createFile = exports.createFolder = exports.doesFolderExists = exports.readFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var readFile = function readFile(path) {
  return new Promise(function (resolve, reject) {
    _fs["default"].readFile(path, function (err, data) {
      if (err) throw err;
      resolve(data + "");
    });
  });
};

exports.readFile = readFile;

var doesFolderExists = function doesFolderExists(path) {
  return new Promise(function (resolve, reject) {
    _fs["default"].stat(path, function (err, stats) {
      if (err && err.code === "ENOENT") {
        resolve(false);
      } else if (stats) {
        resolve(true);
      }
    });
  });
};

exports.doesFolderExists = doesFolderExists;

var createFolder = function createFolder(path) {
  return new Promise(function (resolve, reject) {
    _fs["default"].mkdir(path, {
      recursive: true
    }, function (err) {
      if (err) {
        throw err;
      } else {
        resolve(true);
      }
    });
  });
};

exports.createFolder = createFolder;

var createFile = function createFile(path, data) {
  return new Promise(function (resolve, reject) {
    _fs["default"].writeFile(path, data, function (error) {
      if (error && error.code === "ENOENT") resolve(false);
      resolve(true);
    });
  });
};

exports.createFile = createFile;

var unlinkFile = function unlinkFile(path) {
  return new Promise(function (resolve, reject) {
    _fs["default"].unlink(path, function (err) {
      if (err) throw err;
      resolve(true);
    });
  });
};

exports.unlinkFile = unlinkFile;

var unlinkFolder = function unlinkFolder(path) {
  return new Promise(function (resolve, reject) {
    _fs["default"].rmdir(path, {
      recursive: true
    }, function (err) {
      if (err) throw err;
      resolve(true);
    });
  });
};

exports.unlinkFolder = unlinkFolder;

var createLocalConfigFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
    var template, filledIn;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readFile(__dirname + "/../templates/default");

          case 2:
            template = _context.sent;
            filledIn = template.replace("{{name}}", name);
            _context.next = 6;
            return createFile(process.cwd() + "/.bearicorn", filledIn);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createLocalConfigFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createLocalConfigFile = createLocalConfigFile;