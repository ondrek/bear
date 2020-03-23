#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2))
const packageM = require("./options/package")
const { echoHelpTexts } = require("./options/help")
const { checkIfWasAlreadyInit, constructInit } = require("./options/init")
const { constructLogout } = require("./options/logout")

const { token, log } = require("./utils")

console.info("")

const goThroughAllPreChecks = () => {
    log.dim("Doing all prechecks")
    checkIfWasAlreadyInit()
}

if (argv._.length === 0 && Object.keys(argv).length === 1) {
    echoHelpTexts()
} else {
    goThroughAllPreChecks()
}

(async() => {
  if (argv._.indexOf("push") > -1) {
    packageM()
  } else if (argv._.indexOf("init") > -1) {
    await constructInit()
  } else if (argv._.indexOf("logout") > -1) {
    await constructLogout()
  } else if (argv._.indexOf("login") > -1) {
    loginCli()
  } else if (argv._.indexOf("checks") > -1) {
    token.routineTokenExpirationCheck()
  }
})()
