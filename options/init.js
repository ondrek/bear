const tar = require("tar")
const { log, uuid, fs, home, fetch } = require("../utils")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ask = (q) => new Promise((r) => rl.question(log.green(q), (a) => r(a)))

const createStructure = () => {
    const file = `${process.cwd()}/.${uuid()}.tar`

    const files = fs.readdirSync(process.cwd())
    const forDeletion = [ ".DS_Store", "package.tar" ]
    const filtered = files.filter(i => !forDeletion.includes(i))

    const stream = tar.c({ cwd: process.cwd() }, filtered)
    stream.pipe(fs.createWriteStream(file)).on("close", () => uploadToS3(file))
}

const uploadToS3 = (tarName) => {
    const stream = fs.createReadStream(tarName)
    log.info(`${tarName} Before uploading package`)

    fetch("http://localhost:3001/api/cli", { method: "POST", body: stream })
        .then(res => res.json())
        .then(json => {
            log.info(`${tarName} Upload done successfully`)
            console.info(json)
            unlinkFile(tarName)
        })
}

const letsLogin = async () => {
  const username = await ask("Please enter your username: ")
  const password = await ask("Enter login phrase from email we've sent you: ")
  rl.close()

  const res = await fetch("http://localhost:3001/api/auth/login", { username, password })

  if (res.userDoesNotExistYet) {
    console.info(log.bold("Sorry, but the password was wrong\n"))
    return process.exit()
  }

  console.info(log.bold("Password was OK\n"))
  await fs.createFile(home.getTokenFilePath(), res.cli.token)
  process.exit()
}

const isAlreadyAuthenticated = async () => {
  const tokenFilePath = home.getTokenFilePath()
  const doesExist = await fs.doesFolderExists(tokenFilePath)

  if (!doesExist) {
    console.info(log.red("You are not authenticate yet, let's do it together now"))
    await letsLogin()
    return
  }

  const token = await fs.readFile(tokenFilePath)
  const res = await fetch("http://localhost:3001/api/auth/jsonwebtoken", { token })

  if (res.token) {
    console.info(log.green("You are already logged in. Everything OK."))
    process.exit()
  } else {
    console.info(log.red("Your token has expired and you have been logged out, please log in again.."))
    await fs.unlinkFolder(tokenFilePath)
    console.info(log.red("Old token was removed, please login with new credentials"))
    await letsLogin()
  }



}

const checkIfWasAlreadyInit = async () => {
  const bearFolderPath = home.getHomeFolder()
  const doesFolderExist = await fs.doesFolderExists(bearFolderPath)

  if (!doesFolderExist) {
    await fs.createFolder(bearFolderPath)
    log.dim("Home Bearicorn folder wasn't created therefore we created it")
  }
}

const constructInit = async () => {
  await isAlreadyAuthenticated()
}

module.exports = {
  checkIfWasAlreadyInit,
  constructInit,
  isAlreadyAuthenticated
}
