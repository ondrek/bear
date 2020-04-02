import os from "os"

function getTokenFilePath() {
    return os.homedir() + "/.bearicorn/TOKEN"
}

function getHomeFolder() {
  return os.homedir() + "/.bearicorn"
}

function getLocalManifest() {
  return process.cwd() + "/.bearicorn"
}

export {
  getTokenFilePath,
  getHomeFolder,
  getLocalManifest
}
