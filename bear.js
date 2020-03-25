#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2))
const { constructPush } = require("./options/push")
const { echoHelpTexts } = require("./options/help")
const { ensuresHomeFolderExist, ensuresUserIsAuthenticated, ensuresProjectConfigExists } = require("./options/init")
const { constructLogout } = require("./options/logout")

console.info("")

const goThroughAllPreChecks = async () => {
  console.debug("Doing all prechecks")
  await ensuresHomeFolderExist()
  await ensuresUserIsAuthenticated()
}

const kill = async() => {
  process.kill()
}

(async() => {
  // TODO "bear inita" breaks because indexOf detects it as well

  if ((argv._.length === 0 && Object.keys(argv).length === 1) || argv._.indexOf("help") > -1) {
    echoHelpTexts()
  } else if (argv._.indexOf("logout") > -1) {
    await constructLogout()
  }

  await goThroughAllPreChecks()

  if (argv._.indexOf("push") > -1) {
    await constructPush()
    await kill()
  } else if (argv._.indexOf("init") > -1) {
    await ensuresUserIsAuthenticated()
    await ensuresProjectConfigExists()
  } else {
    console.info("sorry but your command does not exist")
    await kill()
  }
})()

