#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2))
const { constructPush } = require("./options/push")
const { echoHelpTexts } = require("./options/help")
const { ensuresHomeFolderExist, ensuresUserIsAuthenticated } = require("./options/init")
const { constructLogout } = require("./options/logout")

console.info("")

const goThroughAllPreChecks = async () => {
  console.debug("Doing all prechecks")
  await ensuresHomeFolderExist()
  await ensuresUserIsAuthenticated()
}

(async() => {
  if ((argv._.length === 0 && Object.keys(argv).length === 1) || argv._.indexOf("help") > -1) {
    echoHelpTexts()
  } else if (argv._.indexOf("logout") > -1) {
    await constructLogout()
  }

  await goThroughAllPreChecks()

  if (argv._.indexOf("push") > -1) {
    await constructPush()
  } else if (argv._.indexOf("init") > -1) {
    await ensuresUserIsAuthenticated()
  } else {
    console.info("sorry but your command does not exist")
  }
})()
