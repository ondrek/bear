const jwt = require("jsonwebtoken")
const { log } = require("./_log")
const { readFile } = require("./_fs")
const { getTokenFilePath } = require("./_home")

const routineTokenExpirationCheck = async () => {
    log.green("Checking if JWT token is not expired and does exists..")
    console.info(getTokenUsername())
    console.info(hasTokenExpired())
    process.exit()
}

module.exports = {
    routineTokenExpirationCheck
}

function hasTokenExpired() {
    return (getJwt().exp > +new Date)
}

function getTokenUsername() {
    return getJwt() ? getJwt().data.username : null
}

function getJwt() {

    return jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDAyNzAzNDEsImRhdGEiOnsidXNlcm5hbWUiOiJvbmRyZWsifSwiaWF0IjoxNTg0OTEwMzQxfQ.HfzYWRVXD6jV70JsoAo7OeGZA1ogSgMShso7wjan61I")
}

