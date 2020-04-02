#!/usr/bin/env node
"use strict";

var _listr = _interopRequireDefault(require("listr"));

var _inquirer = _interopRequireDefault(require("inquirer"));

require("dotenv/config.js");

var _arg = _interopRequireDefault(require("arg"));

require("@babel/polyfill");

var _push = require("./options/push.js");

var _help = require("./options/help.js");

var _init = require("./options/init.js");

var _logout = require("./options/logout.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import "regenerator-runtime/runtime"
console.log("> ", process.env.MY_SECRET);
process.exit(0); // function parseArgumentsIntoOptions(rawArgs) {
//   const args = arg(
//     {
//       '--giaat': Boolean,
//       '--yes': Boolean,
//       '--instddall': Boolean,
//       '-g': '--git',
//       '-y': '--yes',
//       '-i': '--installss',
//     },
//     {
//       argv: rawArgs.slice(2),
//     }
//   );
//   return {
//     skipPrompts: args['--yes'] || false,
//     git: args['--git'] || false,
//     template: args._[0],
//     template1: args._[1],
//     runInstall: args['--install'] || false,
//   };
// }
//
// console.info(parseArgumentsIntoOptions(process.argv))
//
// const kill = async () => {
//   console.info("")
//   process.exit(0)
// }
// (async() => {
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
tasks.run()["catch"](function (err) {
  console.error(err);
});