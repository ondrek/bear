#!/usr/bin/env node

import Listr from "listr"
import inquirer from "inquirer"
import "dotenv/config.js"
import arg from "arg"
import "@babel/polyfill"
// import "regenerator-runtime/runtime"

import { constructPush } from "./options/push.js"
import { echoHelpTexts } from "./options/help.js"
import { ensuresHomeFolderExist, ensuresUserIsAuthenticated, ensuresProjectConfigExists } from "./options/init.js"
import { constructLogout } from "./options/logout.js"

console.log("> ", process.env.MY_SECRET)
process.exit(0)

// function parseArgumentsIntoOptions(rawArgs) {
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


const tasks = new Listr([
  {
    title: 'Success',
    task: () => 'Foo'
  },
  {
    title: 'Installing dependencies',
    task: () => {
      return new Listr([
        {
          title: 'Checking git status',
          task: (ctx, task) => new Promise( (resolve, reject) => {
            setTimeout(() => { resolve() }, 2000)
          }).catch(() => {
            ctx.yarn = false;
            task.skip('Yarn not available, install it via `npm install -g yarn`');
          }),
        },
        {
          title: 'Checking remote history',
          task: (ctx, task) => new Promise( (resolve, reject) => {
            setTimeout(() => { resolve() }, 2000)
          }).catch(() => {
            ctx.yarn = false;
            task.skip('Yarn not available, install it via `npm install -g yarn`');
          }),
        },
        {
          title: 'Checking remote history',
          task: (ctx, task) => new Promise( (resolve, reject) => {
            setTimeout(() => { resolve() }, 2000)
          }).catch(() => {
            ctx.yarn = false;
            task.skip('Yarn not available, install it via `npm install -g yarn`');
          }),
        }
      ], {concurrent: true});
    }
  },
  {
    title: 'Creating home folder',
    task: (ctx, task) => new Promise( (resolve, reject) => {
      setTimeout(() => { resolve() }, 2000)
    }).catch(() => {
      ctx.yarn = false;
      task.skip('Yarn not available, install it via `npm install -g yarn`');
    })
  },
  {
    title: 'Generating private and public key',
    task: (ctx, task) => new Promise( (resolve, reject) => {
      setTimeout(() => { resolve() }, 2000)
    }).catch(() => {
      ctx.yarn = false;
      task.skip('Yarn not available, install it via `npm install -g yarn`');
    }),
    skip: () => {
      const random = Math.random()
      if (random > 0.5) {
        return 'Was skipped because random was ' + random;
      }
    }
  },
  {
    title: 'Getting public token from Bearicorn server',
    task: (ctx, task) => new Promise( (resolve, reject) => {
      setTimeout(() => { resolve() }, 2000)
    }).catch(() => {
      ctx.yarn = false;
      task.skip('Yarn not available, install it via `npm install -g yarn`');
    })
  }
]);

tasks.run().catch(err => {
  console.error(err);
});
