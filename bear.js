#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2))

const packageM = require("./options/package")
const { echoHelpTexts } = require("./options/help")
const loginCli = require("./options/login")
const { checkIfWasAlreadyInit, createStructure } = require("./options/init")

const { token, log } = require("./utils")

const goThroughAllPreChecks = () => {
    log.info("Doing all prechecks")
    checkIfWasAlreadyInit()
}

if (argv._.length === 0 && Object.keys(argv).length === 1) {
    echoHelpTexts()
} else {
    goThroughAllPreChecks()
}

if (argv._.indexOf("push") > -1) {
    packageM()
} else if (argv._.indexOf("config") > -1) {
    loginCli()
} else if (argv._.indexOf("init") > -1) {
    createStructure()
} else if (argv._.indexOf("login") > -1) {
    loginCli()
} else if (argv._.indexOf("checks") > -1) {
    token.routineTokenExpirationCheck()
}
