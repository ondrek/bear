import uuid from "uuid/v4.js"

const _uuid = () => {
    return uuid().split("-").join("")
}

export { _uuid }
