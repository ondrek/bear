import { log, fs, home } from "../utils/index.js"

const constructLogout = async () => {
  const bearFolderPath = home.getHomeFolder()
  await fs.unlinkFolder(bearFolderPath)

  const doesExist = await fs.doesFolderExists(bearFolderPath)

  if (doesExist) {
    console.info(log.dim("Removing ~/.bearicorn home folder with all its user related data "))
    console.info(log.green("Home Bearic sdadassssorn folder was removed"))
  } else {
    console.info(log.green("User was already logged out.. see you later."))
  }
}

export { constructLogout }
