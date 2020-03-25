#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2))
const { constructPush } = require("./options/push")
const { echoHelpTexts } = require("./options/help")
const { ensuresHomeFolderExist, ensuresUserIsAuthenticated, ensuresProjectConfigExists } = require("./options/init")
const { constructLogout } = require("./options/logout")

console.info("")

const kill = async () => {
  console.info("")
  process.exit(0)
}

(async() => {
  // TODO "bear inita" breaks because indexOf detects it as well

  if ((argv._.length === 0 && Object.keys(argv).length === 1) || argv._.indexOf("help") > -1) {
    echoHelpTexts()
    return await kill()
  } else if (argv._.indexOf("logout") > -1) {
    await constructLogout()
    return await kill()
  }

  // for running any command you need global and local folder
  await ensuresHomeFolderExist()
  await ensuresUserIsAuthenticated()

  if (argv._.indexOf("push") > -1) {
    await constructPush()
    await kill()
  } else if (argv._.indexOf("init") > -1) {
    await ensuresProjectConfigExists()
    await kill()
  } else {
    console.info("sorry but your command does not exist")
    await kill()
  }
})()

