import readline from "readline"
import { log, fs, home, fetch } from "../utils/index.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ask = (q) => {
  return new Promise((r) => rl.question(log.bold(q), (a) => r(a)))
}

const letsLogin = async () => {
  const username = await ask("Please enter your username: ")
  const passcode = await ask("Enter login phrase from email we've sent you: ")
  rl.close()

  const response = await fetch("POST", "/auth/login", { username, passcode })

  if (response.userDoesNotExistYet) {
    console.info(log.red("Sorry, but this user does not exist\n"))
    return process.exit(0)
  }

  console.info(log.green("Password was fine"))
  await fs.createFile(home.getTokenFilePath(), response.cli.token)
  console.info("")
}

const pickAnApp = async (apps) => {
  const picked = await ask("App name: ")
  if (apps.indexOf(picked) === -1) return await pickAnApp(apps)
  return picked
}

const ensuresProjectConfigExists = async () => {
  const manifest = await fs.doesFolderExists(home.getLocalManifest())
  if (manifest) return

  // TODO
  const response = await fetch("GET", "/apps/list")
  const apps = response.apps.map(app => app.name)
  console.log(log.green(`You currently have ${apps.length} apps. Which one should be linked?`))
  apps.forEach(app => console.info(app))

  const chosen = await pickAnApp(apps)
  await fs.createLocalConfigFile(chosen)
  console.log(log.green(`We created file .bearicorn in ${process.cwd()}`))
}

const ensuresUserIsAuthenticated = async () => {
  const tokenFile = await fs.doesFolderExists(home.getTokenFilePath())

  if (!tokenFile) {
    console.info(log.bold("You are not authenticate yet, let's do it together now"))
    return await letsLogin()
  }

  const token = await fs.readFile(home.getTokenFilePath())
  const response = await fetch("POST", "/auth/jsonwebtoken", { token })

  if (!response.token) {
    console.info(log.red("Your token has expired and you have been logged out, please log in again.."))
    await fs.unlinkFolder(home.getTokenFilePath())
    console.info(log.red("Old token was removed, please login with new credentials"))
    await letsLogin()
  }
}

const ensuresHomeFolderExist = async () => {
  const doesFolderExist = await fs.doesFolderExists(home.getHomeFolder())
  if (doesFolderExist) return

  await fs.createFolder(home.getHomeFolder())
  console.info(log.dim("It seems like you run cli for the first time, we created home folder"))
}

export {
  ensuresHomeFolderExist,
  ensuresUserIsAuthenticated,
  ensuresProjectConfigExists
}
