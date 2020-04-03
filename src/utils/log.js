import chalk from "chalk"

const info = (message) => {
  console.log(`${chalk.green("bearicorn")} ${chalk.dim("info")} ${chalk.dim(message)}`)
}

const error = (message) => {
  console.log(`${chalk.green("bearicorn")} ${chalk.red("error")} ${message}`)
}

export default { info, error }
