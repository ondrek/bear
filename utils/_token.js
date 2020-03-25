const jwt = require("jsonwebtoken")
const { doesFolderExists, readFile } = require("./_fs")
const { getTokenFilePath } = require("./_home")
const { red } = require("./_log")

const routineTokenExpirationCheck = async () => {
  // log.green("Checking if JWT token is not expired and does exists..")
  // console.info(getTokenUsername())
  // console.info(hasTokenExpired())
}

// function hasTokenExpired() {
//   return (getJwt().exp > +new Date)
// }

async function getWholeToken() {
  return await readFile(getTokenFilePath())
}

async function getTokenUsername() {
  const doesExist = await doesFolderExists(getTokenFilePath())

  if (!doesExist) {
    console.log(red("You are not authorized yet"))
    return process.exit()
  }

  const tokenFile = await readFile(getTokenFilePath())
  return jwt.decode(tokenFile).data.username
}

module.exports = {
  routineTokenExpirationCheck,
  getWholeToken
}
