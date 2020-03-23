const fs = require("fs")
const tar = require("tar")
const { log } = require("../utils")

module.exports = function() {
    const dir = "./.bearicorn"
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
    let start = +new Date()

    const file = process.cwd() + "/.bearicorn/package.tar"

    console.info(log.green("Downloading.. wait a moment, it can take a while."))

    const c = tar.c({ cwd: process.cwd() }, [""])
    c.pipe(fs.createWriteStream(file)).on("close", function(){
        console.info("Took", ((+new Date() - start)/1000))
    })
}
