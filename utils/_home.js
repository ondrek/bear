const _home = require("os")

function getTokenFilePath() {
    return _home.homedir() + "/.bearicorn/TOKEN"
}

module.exports = {
    getTokenFilePath
}
