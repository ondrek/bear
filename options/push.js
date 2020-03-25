const { log, home, uuid, fs, token, manifest } = require("../utils")
const fetch = require("node-fetch")
const tar = require("tar")
const FormData = require("form-data")

async function constructPush() {
  console.info(log.green("Creating image from the current source code.."))
  const id = uuid()

  const startTime = +new Date()
  const tarFilePath = home.getHomeFolder() + "/" + id + ".tar"
  const stream = await tar.c({ cwd: process.cwd() }, [""])

  await stream.pipe(fs.createWriteStream(tarFilePath)).on("close", async () => {
    const diff = (+new Date() - startTime) / 1000
    console.info(`It took ${diff}s to build a package with id ${id}`)
    await uploadToS3(tarFilePath, id)
  })
}

async function uploadToS3(tarName, id) {
  const stream = fs.createReadStream(tarName)
  const formData = new FormData()
  formData.append("blob", stream, tarName)

  const startTime = +new Date()
  console.info(log.green(`${id} Uploading...`))

  const app = await manifest.app()
  const response = await fetch(`http://localhost:3001/api/image/upload/${app}`, {
    method: "POST",
    body: formData,
    headers: { token: await token.getWholeToken() }
  })

  let data = await response.json()

  if (data.missingJwt) {
    return console.error("Missing JWT token while during the request")
  } else if (data.expiredJwt) {
    return console.error("Sent JWT token was broken or expired")
  }

  await fs.unlinkFile(tarName)

  const diff = (+new Date() - startTime) / 1000
  console.info(log.green(`${id} Upload done successfully and it took ${diff}s`))
  process.exit(0)
}

module.exports = { constructPush }
