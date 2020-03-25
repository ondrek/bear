const { doesFolderExists, readFile } = require("./_fs")
const { getLocalManifest } = require("./_home")
const yaml = require("js-yaml")

async function app () {
  const doesManifestExist = await doesFolderExists(getLocalManifest())

  if (!doesManifestExist) {
    return console.info("doesnt manifest exists, wtf")
  }

  const manifest = await readFile(getLocalManifest())
  const document = yaml.safeLoad(manifest, "utf8")

  return document.GeneralDescription.Name
}

module.exports = { app }
