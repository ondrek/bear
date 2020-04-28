import { fetch } from "../utils/index"
import { echo } from "../utils/echo"
import chalk from "chalk"

async function getAppImages() {
  const print = echo()
  print.start("Fetching last ten images of the particular user.. ")
  const response = await fetch("GET", "/images/list")

  if (response.images) {
    print.succeed("Fetching last ten images of the particular user.. OK")
  }

  console.info(chalk.bold.dim("\n  Images\n  |"))
  const options1 = { year: "numeric", month: "long", day: "numeric" }

  response.images.forEach(image => {
    const date = new Date(image.modified)
    const formatted = new Intl.DateTimeFormat("en-GB", options1).format(date)
    console.info(" ", "nosene", " ", image.key.replace(".zip", ""), " ", chalk.dim(formatted))
  })
}

async function listAppImages() {

}

export default async function () {
  await getAppImages()
}
