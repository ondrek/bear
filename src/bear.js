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

console.info("")

async function parseOptions() {
  // await log.debug("")

  await pipeline([
    { title: "1", task: wait },
    { title: "2", task: wait },
    { title: "3", task: [
      { title: "3a", task: wait },
      { title: "3b", task: [
          { title: "3b-x", task: wait },
          { title: "3b-y", task: wait },
          { title: "3b-c", task: wait }
        ] },
      { title: "3c", task: wait }
    ] },
    { title: "4", task: wait }
  ])

  return process.exit(1)

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
