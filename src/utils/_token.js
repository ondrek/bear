import jwt from "jsonwebtoken"
import { doesFolderExists, readFile } from "./_fs.js"
import { getTokenFilePath } from "./_home.js"
import { red } from "./_log.js"

const routineTokenExpirationCheck = async () => {
  // log.green("Checking if JWT token is not expired and does exists..")
  // console.info(getTokenUsername())
  // console.info(hasTokenExpired())
}

// function hasTokenExpired() {
//   return (getJwt().exp > +new Date)
// }

async function getWholeToken() {
  const doesExist = await doesFolderExists(getTokenFilePath())
  if (!doesExist) return null

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

export {
  routineTokenExpirationCheck,
  getWholeToken,
  getTokenUsername
}
