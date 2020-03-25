const readline = require("readline")
const { log, fs, home, fetch } = require("../utils")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ask = (q) => {
  return new Promise((r) => rl.question(log.green(q), (a) => r(a)))
}

const letsLogin = async () => {
  const username = await ask("Please enter your username: ")
  const password = await ask("Enter login phrase from email we've sent you: ")
  rl.close()

  const res = await fetch("GET", "/auth/login", { username, password })

  if (res.userDoesNotExistYet) {
    console.info(log.bold("Sorry, but the password was wrong\n"))
    return process.exit()
  }

  console.info(log.bold("Password was OK"))
  await fs.createFile(home.getTokenFilePath(), res.cli.token)

  console.info("")
  process.exit()
}

const pickAnApp = async (apps) => {
  const picked = await ask("App name: ")
  const isOneOfThem = apps.indexOf(picked) > -1
  if (!isOneOfThem) return await pickAnApp(apps)
  return picked
}

const ensuresProjectConfigExists = async () => {
  const localConfigFile = home.getLocalConfigFile()
  const doesExist = await fs.doesFolderExists(localConfigFile)

  if (doesExist) {
    console.debug("Local config file does already exists in this folder")
    return
  }

  const response = await fetch("GET", "/apps/list")
  const apps = response.apps.map(app => app.name)
  console.log(log.green(`\nYou currently have ${apps.length} apps. Which one should be linked?`))
  apps.forEach(app => console.info(app))

  const chosen = await pickAnApp(apps)
  await fs.createLocalConfigFile(chosen)
  return;
}

const ensuresUserIsAuthenticated = async () => {
  const tokenFilePath = home.getTokenFilePath()
  const doesExist = await fs.doesFolderExists(tokenFilePath)

  if (!doesExist) {
    console.info(log.red("You are not authenticate yet, let's do it together now"))
    return await letsLogin()
  } else {
    console.debug("Token file already does exist")
  }

  const token = await fs.readFile(tokenFilePath)
  const res = await fetch("POST", "/auth/jsonwebtoken", { token })

  if (res.token) {
    console.info(log.green("You are already logged in — everything ok"))
  } else {
    console.info(log.red("Your token has expired and you have been logged out, please log in again.."))
    await fs.unlinkFolder(tokenFilePath)
    console.info(log.red("Old token was removed, please login with new credentials"))
    await letsLogin()
  }
}

const ensuresHomeFolderExist = async () => {
  const bearFolderPath = home.getHomeFolder()
  const doesFolderExist = await fs.doesFolderExists(bearFolderPath)

  if (!doesFolderExist) {
    await fs.createFolder(bearFolderPath)
    console.info(log.dim("Home Bearicorn folder wasn't created therefore we created it"))
  } else {
    console.debug("Home folder is already created")
  }
}

const constructInit = async () => {
  await ensuresUserIsAuthenticated()
}

module.exports = {
  ensuresHomeFolderExist,
  constructInit,
  ensuresUserIsAuthenticated,
  ensuresProjectConfigExists
}
