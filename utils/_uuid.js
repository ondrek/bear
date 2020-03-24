const uuidv4 = require("uuid").v4

const _uuid = () => {
    return uuidv4().split("-").join("")
}

module.exports = _uuid
