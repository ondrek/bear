#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import "@babel/polyfill"

import optionPush from "./options/push.js"
import { printHelpSection } from "./options/help.js"
import { constructInit } from "./options/init.js"
import { constructLogout } from "./options/logout.js"

import { args } from "./utils/args.js"
import log from "./utils/log.js"
import { pipeline } from "./utils/tasks.js"
import { debug } from "./utils/debug.js"
import { unicorn } from "./unicorn/index.js"


async function parseOptions() {
  // await debug("")
  await printHelpSection()

  const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms))

  if (args.push) {
    await optionPush()
  } else if (args.init) {
    await constructInit()
  } else if (args.logout) {
    await constructLogout()
  }

  await kill()
}

(async() => await parseOptions())()

async function kill() {
  process.exit(1)
}

process.on("uncaughtException", handleError)
process.on("unhandledRejection", handleError)

function handleError(error) {
  console.error(chalk.bgRed("\nUnhandled error, this should have never happend"))
  console.error(error)
  process.exit(1)
}

process.on("exit", (code) => {
  console.log("")
})
