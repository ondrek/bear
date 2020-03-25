const { log } = require("../utils")

const echoHelpTexts = () => {
  console.info(log.dim("Bearicorn is script runner of docker-based pay-as-you-go auto-scale tool"))

  console.info(`
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

module.exports = {
    echoHelpTexts
}
