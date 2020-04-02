#!/usr/bin/env node

import Listr from "listr"
import inquirer from "inquirer"
import "@babel/polyfill"

import { constructPush } from "./options/push.js"
import { printHelpSection } from "./options/help.js"
import { ensuresHomeFolderExist, ensuresUserIsAuthenticated, ensuresProjectConfigExists } from "./options/init.js"
import { constructLogout } from "./options/logout.js"

import { args } from "./utils/args.js"
import log from "./utils/log.js"


async function parseOptions() {
  await log.debug("")
  await log.debug("")

  if (args.push) {
    await ensuresHomeFolderExist()
    await ensuresUserIsAuthenticated()
    await ensuresProjectConfigExists()
    await constructPush()
  } else if (args.init) {
    await ensuresProjectConfigExists()
  } else if (args.logout) {
    await constructLogout()
  } else {
    await printHelpSection()
  }

  await kill()
}

(async() => await parseOptions())()

async function kill() {
  console.info("")
  process.exit(1)
}


// const tasks = new Listr([
//   {
//     title: 'Success',
//     task: () => 'Foo'
//   },
//   {
//     title: 'Installing dependencies',
//     task: () => {
//       return new Listr([
//         {
//           title: 'Checking git status',
//           task: (ctx, task) => new Promise( (resolve, reject) => {
//             setTimeout(() => { resolve() }, 2000)
//           }).catch(() => {
//             ctx.yarn = false;
//             task.skip('Yarn not available, install it via `npm install -g yarn`');
//           }),
//         },
//         {
//           title: 'Checking remote history',
//           task: (ctx, task) => new Promise( (resolve, reject) => {
//             setTimeout(() => { resolve() }, 2000)
//           }).catch(() => {
//             ctx.yarn = false;
//             task.skip('Yarn not available, install it via `npm install -g yarn`');
//           }),
//         },
//         {
//           title: 'Checking remote history',
//           task: (ctx, task) => new Promise( (resolve, reject) => {
//             setTimeout(() => { resolve() }, 2000)
//           }).catch(() => {
//             ctx.yarn = false;
//             task.skip('Yarn not available, install it via `npm install -g yarn`');
//           }),
//         }
//       ], {concurrent: true});
//     }
//   },
//   {
//     title: 'Creating home folder',
//     task: (ctx, task) => new Promise( (resolve, reject) => {
//       setTimeout(() => { resolve() }, 2000)
//     }).catch(() => {
//       ctx.yarn = false;
//       task.skip('Yarn not available, install it via `npm install -g yarn`');
//     })
//   },
//   {
//     title: 'Generating private and public key',
//     task: (ctx, task) => new Promise( (resolve, reject) => {
//       setTimeout(() => { resolve() }, 2000)
//     }).catch(() => {
//       ctx.yarn = false;
//       task.skip('Yarn not available, install it via `npm install -g yarn`');
//     }),
//     skip: () => {
//       const random = Math.random()
//       if (random > 0.5) {
//         return 'Was skipped because random was ' + random;
//       }
//     }
//   },
//   {
//     title: 'Getting public token from Bearicorn server',
//     task: (ctx, task) => new Promise( (resolve, reject) => {
//       setTimeout(() => { resolve() }, 2000)
//     }).catch(() => {
//       ctx.yarn = false;
//       task.skip('Yarn not available, install it via `npm install -g yarn`');
//     })
//   }
// ])
//
// tasks.run().catch(err => {
//   console.error(err)
// })

process.on("uncaughtException", (err) => {
  console.error("We don't handle this error. Shit.", err)
  process.exit(1)
})

process.on("exit", (code) => {
  console.log("")
})
