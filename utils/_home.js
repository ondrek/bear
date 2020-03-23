const _home = require("os")

function getTokenFilePath() {
    return _home.homedir() + "/.bearicorn/TOKEN"
}

function getHomeFolder() {
  return _home.homedir() + "/.bearicorn"
}

module.exports = {
  getTokenFilePath,
  getHomeFolder
}
