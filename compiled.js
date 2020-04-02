#!/usr/bin/env node
"use strict";

var _listr = _interopRequireDefault(require("listr"));

var _inquirer = _interopRequireDefault(require("inquirer"));

require("dotenv/config");

var _minimist = _interopRequireDefault(require("minimist"));

var _arg = _interopRequireDefault(require("arg"));

var _push = require("./options/push");

var _help = require("./options/help");

var _init = require("./options/init");

var _logout = require("./options/logout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

console.log(process.env.MY_SECRET);

function parseArgumentsIntoOptions(rawArgs) {
  var args = (0, _arg["default"])({
    '--giaat': Boolean,
    '--yes': Boolean,
    '--instddall': Boolean,
    '-g': '--git',
    '-y': '--yes',
    '-i': '--installss'
  }, {
    argv: rawArgs.slice(2)
  });
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    template: args._[0],
    runInstall: args['--install'] || false
  };
}

console.info(parseArgumentsIntoOptions(process.argv));
process.exit(0);

var kill = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.info("");
            process.exit(0);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function kill() {
    return _ref.apply(this, arguments);
  };
}(); // (async() => {
//   // TODO "bear inita" breaks because indexOf detects it as well
//
//   if ((argv._.length === 0 && Object.keys(argv).length === 1) || argv._.indexOf("help") > -1) {
//     echoHelpTexts()
//     return await kill()
//   } else if (argv._.indexOf("logout") > -1) {
//     await constructLogout()
//     return await kill()
//   }
//
//   // for running any command you need global and local folder
//   await ensuresHomeFolderExist()
//   await ensuresUserIsAuthenticated()
//
//   if (argv._.indexOf("push") > -1) {
//     await ensuresProjectConfigExists()
//     await constructPush()
//   } else if (argv._.indexOf("init") > -1) {
//     await ensuresProjectConfigExists()
//     await kill()
//   } else {
//     console.info("sorry but your command does not exist")
//     await kill()
//   }
// })()


var tasks = new _listr["default"]([{
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
      return 'Was skipped because random was ' + random;
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
}]);
tasks.run()["catch"](function (err) {// console.error(err);
});
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = require("node-fetch");

var _require = require("./_token"),
    getWholeToken = _require.getWholeToken;

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
            return fetch(fullUrl, {
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

module.exports = fetchFn;
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fs = require("fs");

var readFile = function readFile(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
      if (err) throw err;
      resolve(data + "");
    });
  });
};

var doesFolderExists = function doesFolderExists(path) {
  return new Promise(function (resolve, reject) {
    fs.stat(path, function (err, stats) {
      if (err && err.code === "ENOENT") {
        resolve(false);
      } else if (stats) {
        resolve(true);
      }
    });
  });
};

var createFolder = function createFolder(path) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(path, {
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

var createFile = function createFile(path, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, data, function (error) {
      if (error && error.code === "ENOENT") resolve(false);
      resolve(true);
    });
  });
};

var unlinkFile = function unlinkFile(path) {
  return new Promise(function (resolve, reject) {
    fs.unlink(path, function (err) {
      if (err) throw err;
      resolve(true);
    });
  });
};

var unlinkFolder = function unlinkFolder(path) {
  return new Promise(function (resolve, reject) {
    fs.rmdir(path, {
      recursive: true
    }, function (err) {
      if (err) throw err;
      resolve(true);
    });
  });
};

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

module.exports = {
  readFile: readFile,
  doesFolderExists: doesFolderExists,
  createFolder: createFolder,
  createFile: createFile,
  unlinkFile: unlinkFile,
  unlinkFolder: unlinkFolder,
  createLocalConfigFile: createLocalConfigFile,
  createWriteStream: fs.createWriteStream,
  createReadStream: fs.createReadStream,
  statSync: fs.statSync
};
"use strict";

var os = require("os");

function getTokenFilePath() {
  return os.homedir() + "/.bearicorn/TOKEN";
}

function getHomeFolder() {
  return os.homedir() + "/.bearicorn";
}

function getLocalManifest() {
  return process.cwd() + "/.bearicorn";
}

module.exports = {
  getTokenFilePath: getTokenFilePath,
  getHomeFolder: getHomeFolder,
  getLocalManifest: getLocalManifest
};
"use strict";

var chalk = require("chalk");

var title = chalk.dim("Bearicorn; ");

var dim = function dim(message, prefix) {
  return prefix ? chalk.dim(title + message) : chalk.dim(message);
};

var bold = function bold(message, prefix) {
  return prefix ? chalk.bold(title + message) : chalk.bold(message);
};

var red = function red(message, prefix) {
  return prefix ? chalk.red(title + message) : chalk.red(message);
};

var green = function green(message, prefix) {
  return prefix ? chalk.green(title + message) : chalk.green(message);
};

module.exports = {
  dim: dim,
  bold: bold,
  green: green,
  red: red
};
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("./_fs"),
    doesFolderExists = _require.doesFolderExists,
    readFile = _require.readFile;

var _require2 = require("./_home"),
    getLocalManifest = _require2.getLocalManifest;

var yaml = require("js-yaml");

function app() {
  return _app.apply(this, arguments);
}

function _app() {
  _app = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var doesManifestExist, manifest, document;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return doesFolderExists(getLocalManifest());

          case 2:
            doesManifestExist = _context.sent;

            if (doesManifestExist) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", console.info("doesnt manifest exists, wtf"));

          case 5:
            _context.next = 7;
            return readFile(getLocalManifest());

          case 7:
            manifest = _context.sent;
            document = yaml.safeLoad(manifest, "utf8");
            return _context.abrupt("return", document.GeneralDescription.Name);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _app.apply(this, arguments);
}

module.exports = {
  app: app
};
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jwt = require("jsonwebtoken");

var _require = require("./_fs"),
    doesFolderExists = _require.doesFolderExists,
    readFile = _require.readFile;

var _require2 = require("./_home"),
    getTokenFilePath = _require2.getTokenFilePath;

var _require3 = require("./_log"),
    red = _require3.red;

var routineTokenExpirationCheck = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function routineTokenExpirationCheck() {
    return _ref.apply(this, arguments);
  };
}();

// function hasTokenExpired() {
//   return (getJwt().exp > +new Date)
// }
function getWholeToken() {
  return _getWholeToken.apply(this, arguments);
}

function _getWholeToken() {
  _getWholeToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var doesExist;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return doesFolderExists(getTokenFilePath());

          case 2:
            doesExist = _context2.sent;

            if (doesExist) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", null);

          case 5:
            _context2.next = 7;
            return readFile(getTokenFilePath());

          case 7:
            return _context2.abrupt("return", _context2.sent);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getWholeToken.apply(this, arguments);
}

function getTokenUsername() {
  return _getTokenUsername.apply(this, arguments);
}

function _getTokenUsername() {
  _getTokenUsername = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var doesExist, tokenFile;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return doesFolderExists(getTokenFilePath());

          case 2:
            doesExist = _context3.sent;

            if (doesExist) {
              _context3.next = 6;
              break;
            }

            console.log(red("You are not authorized yet"));
            return _context3.abrupt("return", process.exit());

          case 6:
            _context3.next = 8;
            return readFile(getTokenFilePath());

          case 8:
            tokenFile = _context3.sent;
            return _context3.abrupt("return", jwt.decode(tokenFile).data.username);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTokenUsername.apply(this, arguments);
}

module.exports = {
  routineTokenExpirationCheck: routineTokenExpirationCheck,
  getWholeToken: getWholeToken
};
"use strict";

var uuidv4 = require("uuid").v4;

var _uuid = function _uuid() {
  return uuidv4().split("-").join("");
};

module.exports = _uuid;
"use strict";

module.exports = {
  log: require("./_log"),
  manifest: require("./_manifest"),
  fs: require("./_fs"),
  token: require("./_token"),
  uuid: require("./_uuid"),
  fetch: require("./_fetch"),
  home: require("./_home")
};
"use strict";

var _require = require("../utils"),
    log = _require.log;

var echoHelpTexts = function echoHelpTexts() {
  console.info(log.dim("Bearicorn is script runner of docker-based pay-as-you-go auto-scale tool"));
  console.info("\n  init        ".concat(log.dim("Link your Cli to your cloud online account", false), "\n  push        ").concat(log.dim("Push an image or a repository to a registry", false), "\n  pull        ").concat(log.dim("Unlinks this cli from your online cloud account", false), "\n  config      ").concat(log.dim("Config your account", false), "\n  app         ").concat(log.dim("Apps have hardware, urls and possibility to deploy an image", false), "\n  image       ").concat(log.dim("Images are multiple versions of your code", false), "\n  stats       ").concat(log.dim("Display statistics of app your apps", false), "\n  logout      ").concat(log.dim("Unlinks this cli from your online cloud account", false), "\n  version     ").concat(log.dim("Show the Docker version information", false), "\n  hello       ").concat(log.dim("Creates example of app in multiple languages", false), "\n  "));
};

module.exports = {
  echoHelpTexts: echoHelpTexts
};
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var readline = require("readline");

var _require = require("../utils"),
    log = _require.log,
    fs = _require.fs,
    home = _require.home,
    fetch = _require.fetch;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var ask = function ask(q) {
  return new Promise(function (r) {
    return rl.question(log.bold(q), function (a) {
      return r(a);
    });
  });
};

var letsLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var username, passcode, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ask("Please enter your username: ");

          case 2:
            username = _context.sent;
            _context.next = 5;
            return ask("Enter login phrase from email we've sent you: ");

          case 5:
            passcode = _context.sent;
            rl.close();
            _context.next = 9;
            return fetch("POST", "/auth/login", {
              username: username,
              passcode: passcode
            });

          case 9:
            response = _context.sent;

            if (!response.userDoesNotExistYet) {
              _context.next = 13;
              break;
            }

            console.info(log.red("Sorry, but this user does not exist\n"));
            return _context.abrupt("return", process.exit(0));

          case 13:
            console.info(log.green("Password was fine"));
            _context.next = 16;
            return fs.createFile(home.getTokenFilePath(), response.cli.token);

          case 16:
            console.info("");

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function letsLogin() {
    return _ref.apply(this, arguments);
  };
}();

var pickAnApp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apps) {
    var picked;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ask("App name: ");

          case 2:
            picked = _context2.sent;

            if (!(apps.indexOf(picked) === -1)) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return pickAnApp(apps);

          case 6:
            return _context2.abrupt("return", _context2.sent);

          case 7:
            return _context2.abrupt("return", picked);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function pickAnApp(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var ensuresProjectConfigExists = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var manifest, response, apps, chosen;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fs.doesFolderExists(home.getLocalManifest());

          case 2:
            manifest = _context3.sent;

            if (!manifest) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return");

          case 5:
            _context3.next = 7;
            return fetch("GET", "/apps/list");

          case 7:
            response = _context3.sent;
            apps = response.apps.map(function (app) {
              return app.name;
            });
            console.log(log.green("You currently have ".concat(apps.length, " apps. Which one should be linked?")));
            apps.forEach(function (app) {
              return console.info(app);
            });
            _context3.next = 13;
            return pickAnApp(apps);

          case 13:
            chosen = _context3.sent;
            _context3.next = 16;
            return fs.createLocalConfigFile(chosen);

          case 16:
            console.log(log.green("We created file .bearicorn in ".concat(process.cwd())));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function ensuresProjectConfigExists() {
    return _ref3.apply(this, arguments);
  };
}();

var ensuresUserIsAuthenticated = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var tokenFile, token, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fs.doesFolderExists(home.getTokenFilePath());

          case 2:
            tokenFile = _context4.sent;

            if (tokenFile) {
              _context4.next = 8;
              break;
            }

            console.info(log.bold("You are not authenticate yet, let's do it together now"));
            _context4.next = 7;
            return letsLogin();

          case 7:
            return _context4.abrupt("return", _context4.sent);

          case 8:
            _context4.next = 10;
            return fs.readFile(home.getTokenFilePath());

          case 10:
            token = _context4.sent;
            _context4.next = 13;
            return fetch("POST", "/auth/jsonwebtoken", {
              token: token
            });

          case 13:
            response = _context4.sent;

            if (response.token) {
              _context4.next = 21;
              break;
            }

            console.info(log.red("Your token has expired and you have been logged out, please log in again.."));
            _context4.next = 18;
            return fs.unlinkFolder(home.getTokenFilePath());

          case 18:
            console.info(log.red("Old token was removed, please login with new credentials"));
            _context4.next = 21;
            return letsLogin();

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function ensuresUserIsAuthenticated() {
    return _ref4.apply(this, arguments);
  };
}();

var ensuresHomeFolderExist = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var doesFolderExist;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fs.doesFolderExists(home.getHomeFolder());

          case 2:
            doesFolderExist = _context5.sent;

            if (!doesFolderExist) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return");

          case 5:
            _context5.next = 7;
            return fs.createFolder(home.getHomeFolder());

          case 7:
            console.info(log.dim("It seems like you run cli for the first time, we created home folder"));

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function ensuresHomeFolderExist() {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  ensuresHomeFolderExist: ensuresHomeFolderExist,
  ensuresUserIsAuthenticated: ensuresUserIsAuthenticated,
  ensuresProjectConfigExists: ensuresProjectConfigExists
};
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../utils"),
    log = _require.log,
    fs = _require.fs,
    home = _require.home;

var constructLogout = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var bearFolderPath, doesExist;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bearFolderPath = home.getHomeFolder();
            _context.next = 3;
            return fs.unlinkFolder(bearFolderPath);

          case 3:
            _context.next = 5;
            return fs.doesFolderExists(bearFolderPath);

          case 5:
            doesExist = _context.sent;

            if (doesExist) {
              console.info(log.dim("Removing ~/.bearicorn home folder with all its user related data "));
              console.info(log.green("Home Bearic sdadassssorn folder was removed"));
            } else {
              console.info(log.green("User was already logged out.. see you later."));
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

module.exports = {
  constructLogout: constructLogout
};
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../utils"),
    log = _require.log,
    home = _require.home,
    uuid = _require.uuid,
    fs = _require.fs,
    token = _require.token,
    manifest = _require.manifest;

var fetch = require("node-fetch");

var tar = require("tar");

var FormData = require("form-data");

function constructPush() {
  return _constructPush.apply(this, arguments);
}

function _constructPush() {
  _constructPush = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id, startTime, tarFilePath, stream;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.info(log.green("Creating image from the current source code.."));
            id = uuid();
            startTime = +new Date();
            tarFilePath = home.getHomeFolder() + "/" + id + ".tar";
            _context2.next = 6;
            return tar.c({
              cwd: process.cwd()
            }, [""]);

          case 6:
            stream = _context2.sent;
            _context2.next = 9;
            return stream.pipe(fs.createWriteStream(tarFilePath)).on("close", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var diff;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      diff = (+new Date() - startTime) / 1000;
                      console.info("It took ".concat(diff, "s to build a package with id ").concat(id));
                      _context.next = 4;
                      return uploadToS3(tarFilePath, id);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _constructPush.apply(this, arguments);
}

function uploadToS3(_x, _x2) {
  return _uploadToS.apply(this, arguments);
}

function _uploadToS() {
  _uploadToS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tarName, id) {
    var stream, formData, startTime, app, response, data, diff;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            stream = fs.createReadStream(tarName);
            formData = new FormData();
            formData.append("blob", stream, tarName);
            startTime = +new Date();
            console.info(log.green("".concat(id, " Uploading...")));
            _context3.next = 7;
            return manifest.app();

          case 7:
            app = _context3.sent;
            _context3.t0 = fetch;
            _context3.t1 = "http://localhost:3001/api/image/upload/".concat(app);
            _context3.t2 = formData;
            _context3.next = 13;
            return token.getWholeToken();

          case 13:
            _context3.t3 = _context3.sent;
            _context3.t4 = {
              token: _context3.t3
            };
            _context3.t5 = {
              method: "POST",
              body: _context3.t2,
              headers: _context3.t4
            };
            _context3.next = 18;
            return (0, _context3.t0)(_context3.t1, _context3.t5);

          case 18:
            response = _context3.sent;
            _context3.next = 21;
            return response.json();

          case 21:
            data = _context3.sent;

            if (!data.missingJwt) {
              _context3.next = 26;
              break;
            }

            return _context3.abrupt("return", console.error("Missing JWT token while during the request"));

          case 26:
            if (!data.expiredJwt) {
              _context3.next = 28;
              break;
            }

            return _context3.abrupt("return", console.error("Sent JWT token was broken or expired"));

          case 28:
            _context3.next = 30;
            return fs.unlinkFile(tarName);

          case 30:
            diff = (+new Date() - startTime) / 1000;
            console.info(log.green("".concat(id, " Upload done successfully and it took ").concat(diff, "s")));
            process.exit(0);

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _uploadToS.apply(this, arguments);
}

module.exports = {
  constructPush: constructPush
};
