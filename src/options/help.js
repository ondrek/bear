import { log } from "../utils/index.js"
import chalk from "chalk"

async function printHelpSection() {
  console.info(`
  ${chalk.dim.bold("Try bearicorn with one command from the bellow:")}
  ${chalk.dim.bold("|")}
  init        ${log.dim("Link your Cli to your cloud online account", false)}
  push        ${log.dim("Push an image or a repository to a registry", false)}
  pull        ${log.dim("Unlinks this cli from your online cloud account", false)}
  config      ${log.dim("Config your account", false)}
  app         ${log.dim("Apps have hardware, urls and possibility to deploy an image", false)}
  image       ${log.dim("Images are multiple versions of your code", false)}
  stats       ${log.dim("Display statistics of app your apps", false)}
  logout      ${log.dim("Unlinks this cli from your online cloud account", false)}
  version     ${log.dim("Show the Docker version information", false)}
  hello       ${log.dim("Creates example of app in multiple languages", false)}
  `)
}

export { printHelpSection }
