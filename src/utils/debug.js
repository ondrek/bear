import os from "os"
import { pipeline, dim } from "./tasks"

async function getMemory(ctx, task) {
  task.title = dim(`Total memory of user is ${os.totalmem()} and free memory is ${os.freemem()}`)
}

async function getCliVersion(ctx, task) {
  task.title = dim(`Cli version is 2.0.10`)
}

async function getUserDetails(ctx, task) {
  task.title = dim(`User ${os.userInfo().username} has homedir in ${os.homedir()}`)
}

async function getPlatform(ctx, task) {
  task.title = dim(`Platform is ${os.arch()} ${os.platform()} with uptime ${os.uptime()}`)
}

const debug = async () => {
  console.info("")

  const tasks = [{
    title: dim("Getting debug user details"),
    task: [
      { title: "Getting user details..", task: getUserDetails },
      { title: "Getting memory details..", task: getMemory },
      { title: "Getting cli versions...", task: getCliVersion },
      { title: "Getting platform details..", task: getPlatform }
    ]
  }]

  await pipeline(tasks)
}

export { debug }
