import inquirer from "inquirer"
import { fs, home, fetch } from "../utils/index.js"
import { echo } from "../utils/echo.js"
import { ask } from "../utils/ask.js"
import chalk from "chalk"

const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms))

const pickAnApp = async (choices) => {
  console.info("\n  Pick an app:")
  choices.forEach(choice => console.info("  > ", chalk.green(choice)))

  const name = await ask("\n  Select an app: ", choices)

  if (choices.indexOf(name) === -1) await pickAnApp(choices)
}

async function ensuresManifestExists() {
  const print = echo()
  const localManifestFile = home.getLocalManifest()
  print.start("Ensuring local manifest does exist")
  const manifest = await fs.doesFolderExists(localManifestFile)
  await sleep(1000)

  if (manifest) {
    print.succeed("Ensuring local manifest does exist — IT DOES.")
    return
  }

  print.fail("Ensuring local manifest does exist — IT DOES NOT.")
  const response = await fetch("GET", "/apps/list")
  const apps = response.apps.map(app => app.name)

  const app = await pickAnApp(apps)
  await fs.createLocalConfigFile(app)
}

const ensuresHomeFolderExist = async () => {
  const print = echo()
  print.start("Checking if home configuration already exist")
  await sleep(1000)

  const homeFolder = home.getHomeFolder()
  const doesAlreadyExist = await fs.doesFolderExists(homeFolder)

  if (doesAlreadyExist) {
    print.succeed("Home configuration was already located on your disk")
    return
  }

  await fs.createFolder(homeFolder)
  print.succeed("Home configuration was added")
}

const ensuresUserIsAuthenticated = async () => {
  const print = echo()
  print.start("Ensuring user is already authentificated")
  const tokenFile = await fs.doesFolderExists(home.getTokenFilePath())
  await sleep(1000)

  if (!tokenFile) {
    print.fail("User is not authentificated yet")
    await loginUser()
  }

  print.succeed("User does already have TOKEN file in his profile")
}

async function loginUser() {
  const { username, passcode } = await inquirer.prompt([
    { type: "input", message: "Enter a username:", name: "username" },
    { type: "password", message: "Enter a password:", name: "passcode", mask: "*" }
  ])

  const print = echo()
  print.start("Contacting server for authentification")
  const response = await fetch("POST", "/auth/login", { username, passcode })
  await sleep(500)

  if (response.userDoesNotExistYet) {
    print.fail("Sorry, but this user does not exist")
    return process.exit(0)
  }

  await fs.createFile(home.getTokenFilePath(), response.cli.token)
  print.succeed("Sorry, but this user does not exist")
}

const validateExistingToken = async () => {
  const print = echo()
  print.start("Validating TOKEN existing if it's not expired or broken")
  await sleep(1000)
  const token = await fs.readFile(home.getTokenFilePath())
  const response = await fetch("POST", "/auth/jsonwebtoken", { token })

  if (!response.token) {
    print.fail("Current token has expired, please login again")
    await fs.unlinkFolder(home.getTokenFilePath())
    await loginUser()
  } else {
    print.succeed("Validating TOKEN existing if it's not expired or broken. Was valid.")
  }
}

const hasInternetConnection = async () => {
  const print = echo()
  print.start("Checking internet connection")
  await sleep(1000)

  const response = await fetch("GET", "/").catch(() => {
    print.fail("We can't reach Bearicorn servers, try to browse bearicorn.com in your browser")
    return process.exit(1)
  })

  if (response) {
    print.succeed("Internet connection is OK")
  }
}

async function constructInit() {
  await hasInternetConnection()
  await ensuresHomeFolderExist()
  await ensuresUserIsAuthenticated()
  await validateExistingToken()
  await ensuresManifestExists()
}

export { constructInit }
