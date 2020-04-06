/* eslint-disable */

import fetch from "node-fetch"
import chalk from "chalk"
import FormData from "form-data"
import { log, home, uuid, token, manifest, fs } from "../utils/index.js"
import { echo } from "../utils/echo"

async function listAllFiles(dir) {
  console.info(chalk.dim.bold("  Creating package from the current folder\n  |"))

  const files = await fs.walk(dir)
  files.forEach(file => {
    console.info(`  ${chalk.dim("file")} ${chalk.green(file)}`)
  })

  console.info("")
}

async function createImageAndUploadToS3() {
  const print = echo("Creating image from the current source code..")
  const startTime = +new Date()

  const id = uuid()
  const tarFilePath = home.getHomeFolder() + "/" + id + ".tar"

  console.info(id)
  console.info(process.cwd())
  // tar.c({ cwd: process.cwd() }, [""]).then(_ => console.info("done"))

  await fs.createTarFile(process.cwd(), tarFilePath)
}

async function uploadToS3(tarName, id) {
  return
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

export default async function () {
  await listAllFiles(".")
  await createImageAndUploadToS3()
}
