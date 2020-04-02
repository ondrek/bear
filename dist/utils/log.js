"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _os = _interopRequireDefault(require("os"));

var _listr = _interopRequireDefault(require("listr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var info = function info(message) {
  console.log("".concat(_chalk["default"].green("bearicorn"), " ").concat(_chalk["default"].dim("info"), " ").concat(_chalk["default"].dim(message)));
};

var error = function error(message) {
  console.log("".concat(_chalk["default"].green("bearicorn"), " ").concat(_chalk["default"].red("error"), " ").concat(message));
};

var debug = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(""); // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("Memory")} ${chalk.dim(os.totalmem())} ${chalk.dim(os.freemem())}`)
            // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("Version")} ${chalk.dim("2.0.40")}`)
            // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("User")} ${chalk.dim(os.userInfo().username.toUpperCase())} ${chalk.dim(os.homedir().toUpperCase())}`)
            // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("Platform")} ${chalk.dim(os.uptime())} ${chalk.dim(os.arch().toUpperCase())} ${chalk.dim(os.release())} ${chalk.dim(os.platform().toUpperCase())}`)

            console.log("Getting all debug info");
            tasks = new _listr["default"]([{
              title: 'Success',
              task: function task() {
                return 'Foo';
              }
            }, {
              title: 'Installing dependencies',
              task: function task() {
                return new _listr["default"]([{
                  title: 'Checking git status',
                  task: function task(ctx, _task) {
                    return new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve();
                      }, 2000);
                    })["catch"](function () {
                      ctx.yarn = false;

                      _task.skip('Yarn not available, install it via `npm install -g yarn`');
                    });
                  }
                }, {
                  title: 'Checking remote history',
                  task: function task(ctx, _task2) {
                    return new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve();
                      }, 2000);
                    })["catch"](function () {
                      ctx.yarn = false;

                      _task2.skip('Yarn not available, install it via `npm install -g yarn`');
                    });
                  }
                }, {
                  title: 'Checking remote history',
                  task: function task(ctx, _task3) {
                    return new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve();
                      }, 2000);
                    })["catch"](function () {
                      ctx.yarn = false;

                      _task3.skip('Yarn not available, install it via `npm install -g yarn`');
                    });
                  }
                }], {
                  concurrent: true
                });
              }
            }, {
              title: 'Creating home folder',
              task: function task(ctx, _task4) {
                return new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    resolve();
                  }, 2000);
                })["catch"](function () {
                  ctx.yarn = false;

                  _task4.skip('Yarn not available, install it via `npm install -g yarn`');
                });
              }
            }, {
              title: 'Generating private and public key',
              task: function task(ctx, _task5) {
                return new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    resolve();
                  }, 2000);
                })["catch"](function () {
                  ctx.yarn = false;

                  _task5.skip('Yarn not available, install it via `npm install -g yarn`');
                });
              },
              skip: function skip() {
                var random = Math.random();

                if (random > 0.5) {
                  return 'Was skipped because this is Mac computer ' + random;
                }
              }
            }, {
              title: 'Getting public token from Bearicorn server',
              task: function task(ctx, _task6) {
                return new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    resolve();
                  }, 2000);
                })["catch"](function () {
                  ctx.yarn = false;

                  _task6.skip('Yarn not available, install it via `npm install -g yarn`');
                });
              }
            }], {
              collapse: false
            });
            _context.next = 5;
            return tasks.run()["catch"](function (err) {
              console.error(err);
            });

          case 5:
            console.log("");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function debug() {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  info: info,
  error: error,
  debug: debug
};
exports["default"] = _default;