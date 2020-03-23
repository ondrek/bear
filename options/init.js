const fs = require("fs")
const tar = require("tar")
const { log, uuid } = require("../utils")
const DIR = "./.bearicorn"
const fetch = require("node-fetch")


const createStructure = () => {
    const file = `${process.cwd()}/.${uuid()}.tar`

    const files = fs.readdirSync(process.cwd())
    const forDeletion = [ ".DS_Store", "package.tar" ]
    const filtered = files.filter(i => !forDeletion.includes(i))

    const stream = tar.c({ cwd: process.cwd() }, filtered)
    stream.pipe(fs.createWriteStream(file)).on("close", () => uploadToS3(file))
}

const uploadToS3 = (tarName) => {
    const stream = fs.createReadStream(tarName)
    log.info(`${tarName} Before uploading package`)

    fetch("http://localhost:3001/api/cli", { method: "POST", body: stream })
        .then(res => res.json())
        .then(json => {
            log.info(`${tarName} Upload done successfully`)
            console.info(json)
            unlinkFile(tarName)
        })
}

const unlinkFile = (tarName) => {
    fs.unlink(tarName, (err) => {
        if (err) throw err;
        log.info(`${tarName} Removed from the project folder`)
        process.exit()
    });
}

const checkIfWasAlreadyInit = () => {
    if (!fs.existsSync(DIR)) {
        log.info("The init didn't exist yet, so it's created now")
        fs.mkdirSync(DIR)
    } else {
        log.info("Folder already existed")
    }
}


module.exports = {
    checkIfWasAlreadyInit,
    createStructure
}
