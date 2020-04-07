import fetch from "node-fetch"
import chalk from "chalk"
import FormData from "form-data"
import { token, fs } from "../utils/index.js"
import { ask } from "../utils/ask.js"
import * as fsNative from "fs"
import { echo } from "../utils/echo"

async function listAllFiles(dir) {
  console.info(chalk.dim.bold("  Creating package from the current folder\n  |"))

  const files = await fs.walk(dir)
  files.forEach(file => {
    console.info(`  ${chalk.dim("file")} ${chalk.green(file)}`)
  })

  console.info("")
}

async function askIfAgreesUploadFiles() {
  const answer = await ask("  Do you want to upload those files?  Y/n: ")
  if (answer === "Y" || answer === "n") return answer === "Y"
  await askIfAgreesUploadFiles()
}

async function createImageAndUploadToS3() {
  if (!await askIfAgreesUploadFiles()) return
  console.info("  |")

  const currentFolder = process.cwd()
  const files = await fs.walk(currentFolder)

  const { id, tarFilePath } = await fs.createTarFile(files)
  await uploadToS3(id, tarFilePath)
}

async function uploadToS3(id, tarFilePath) {
  const print = echo()
  print.start(`Uploading tar file to the cloud under ID ${id}`)

  const stream = fsNative.createReadStream(tarFilePath)
  const formData = new FormData()
  formData.append("blob", stream, tarFilePath)

  const response = await fetch(`http://localhost:3001/api/image/${id}`, {
    method: "POST",
    body: formData,
    headers: { token: await token.getWholeToken() }
  })

  let data = await response.json()

  if (data.missingJwt) {
    return console.error("Missing JWT token while during the request")
  } else if (data.expiredJwt) {
    return console.error("Sent JWT token was broken or expired")
  } else if (data.uploaded) {
    print.succeed()
    const deleted = echo()
    deleted.start("Removing temp file")
    await fs.unlinkFile(tarFilePath)
    deleted.succeed("Temp file was successfully removed")
  } else {
    throw new Error("This should have never happend")
  }
}

export default async function () {
  await listAllFiles(".")
  await createImageAndUploadToS3()
}
