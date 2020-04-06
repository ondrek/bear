"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTarFile = exports.walk = exports.createLocalConfigFile = exports.unlinkFolder = exports.unlinkFile = exports.createFile = exports.createFolder = exports.doesFolderExists = exports.readFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _stream = _interopRequireDefault(require("stream"));

var _path = _interopRequireDefault(require("path"));

var _util = _interopRequireDefault(require("util"));

var _tarFs = _interopRequireDefault(require("tar-fs"));

var _zlib = _interopRequireDefault(require("zlib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fsPromises = _fs["default"].promises;

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

var walk = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dir) {
    var files, forDeletion;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fsPromises.readdir(dir);

          case 2:
            files = _context3.sent;
            forDeletion = [".git", ".idea", "node_modules", ".gitignore", ".DS_Store"];
            files = files.filter(function (item) {
              return !forDeletion.includes(item);
            });
            _context3.next = 7;
            return Promise.all(files.map( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
                var filePath, stats;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        filePath = _path["default"].join(dir, file);
                        _context2.next = 3;
                        return fsPromises.stat(filePath);

                      case 3:
                        stats = _context2.sent;

                        if (!stats.isDirectory()) {
                          _context2.next = 8;
                          break;
                        }

                        return _context2.abrupt("return", walk(filePath));

                      case 8:
                        if (!stats.isFile()) {
                          _context2.next = 10;
                          break;
                        }

                        return _context2.abrupt("return", filePath);

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 7:
            files = _context3.sent;
            return _context3.abrupt("return", files.reduce(function (all, folderContents) {
              return all.concat(folderContents);
            }, []));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function walk(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.walk = walk;

var createTarFile = function createTarFile(cwd, tarFilePath) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
      var pipe, do_gzip, _do_gzip;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _do_gzip = function _do_gzip3() {
                _do_gzip = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(input, output) {
                  var gzip, source, destination;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          gzip = createGzip();
                          source = _fs["default"].createReadStream(input);
                          destination = _fs["default"].createWriteStream(output);
                          _context4.next = 5;
                          return pipe(source, gzip, destination);

                        case 5:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));
                return _do_gzip.apply(this, arguments);
              };

              do_gzip = function _do_gzip2(_x6, _x7) {
                return _do_gzip.apply(this, arguments);
              };

              _context5.next = 4;
              return testingTutorial([".gitignore", "package.json", "package-lock.json"]);

            case 4:
              return _context5.abrupt("return");

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }());
}; // const createTarFile = async (cwd, tarFilePath) => {
//   const pipeline = util.promisify(stream.pipeline)
//
//   let files = await walk(".")
//   files = files.map(file => "./" + file)
//   console.info(files)
//
//   console.info("cwd", cwd)
//   console.info("tarFilePath", tarFilePath)
//
//   // tar.c({ cwd }, files).pipe(fs.createWriteStream(tarFilePath))
//
//
//   await tar.pack("./readme.md").pipe(fs.createWriteStream(tarFilePath))
//
//
//   // nah.on("close", async () => {
//   //   console.info("Nahahaha")
//   //   const diff = (+new Date() - startTime) / 1000
//   //   print.succeed(`Tar file created. It took ${diff}s to build a package with id ${id}`)
//   //   await uploadToS3(tarFilePath, id)
//   // }).on("error", (err) => console.info(err))
//
//   // console.info("before")
//   //
//   // const nah = await pipeline(tarStream, writeStream, (err) => {
//   //   if (err) {
//   //     console.error('Pipeline failed.', err);
//   //   } else {
//   //     console.log('Pipeline succeeded.');
//   //   }
//   // })
//   //
//   // console.info("nah", nah)
// }


exports.createTarFile = createTarFile;