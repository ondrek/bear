import { doesFolderExists, readFile } from "./_fs.js"
import { getLocalManifest } from "./_home.js"
import yaml from "js-yaml"
import { echo } from "./echo"

async function verifyIfManifestEvenExists() {
  const print = echo()
  print.start("Verify If Manifest Even Exists")

  const doesManifestExist = await doesFolderExists(getLocalManifest())

  if (doesManifestExist) {
    print.succeed("Manifest does exist where is suppose to")
  } else {
    print.fail("Sorry, but manifest does not exist, type first < bear init >")
    process.exit(1)
  }
}

async function parseManifest() {
  const print = echo()
  print.start("Parsing manifest in the current directory")

  const manifest = await readFile(getLocalManifest())
  let document

  try {
    document = yaml.safeLoad(manifest, "utf8")
  } catch (e) {
    print.fail("Sorry, but manifest in the current directory isn't valid YAML syntax")
    process.exit(1)
  }

  print.succeed("Syntax of manifest was parsed successfully")
  return document
}

export async function getManifestApp() {
  await verifyIfManifestEvenExists()
  const manifest = await parseManifest()

  return manifest.DescribeApp.Name
}
