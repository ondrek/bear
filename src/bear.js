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
import { pipeline } from "./utils/tasks.js"
import { debug } from "./utils/debug.js"


async function parseOptions() {
  await debug("")
  
  if (args.push) {
    await ensuresHomeFolderExist()
    await ensuresUserIsAuthenticated()
    await ensuresProjectConfigExists()
    await constructPush()
  } else if (args.init) {
    // await ensuresProjectConfigExists()
    // await tasks.run().catch(err => console.error(err))
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

process.on("uncaughtException", (err) => {
  console.error("We don't handle this error. Shit.", err)
  process.exit(1)
})

process.on("exit", (code) => {
  console.log("")
})
