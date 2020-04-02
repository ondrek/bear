import { doesFolderExists, readFile } from "./_fs.js"
import { getLocalManifest } from "./_home.js"
import yaml from "js-yaml"

async function app () {
  const doesManifestExist = await doesFolderExists(getLocalManifest())

  if (!doesManifestExist) {
    return console.info("doesnt manifest exists, wtf")
  }

  const manifest = await readFile(getLocalManifest())
  const document = yaml.safeLoad(manifest, "utf8")

  return document.GeneralDescription.Name
}

export { app }
