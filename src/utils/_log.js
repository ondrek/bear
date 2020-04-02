import chalk from "chalk"

const title = chalk.dim("Bearicorn; ")

const dim = (message, prefix) => {
    return prefix
        ? chalk.dim(title + message)
        : chalk.dim(message)
}

const bold = (message, prefix) => {
    return prefix
        ? chalk.bold(title + message)
        : chalk.bold(message)
}

const red = (message, prefix) => {
  return prefix
    ? chalk.red(title + message)
    : chalk.red(message)
}

const green = (message, prefix) => {
    return prefix
        ? chalk.green(title + message)
        : chalk.green(message)
}

export { dim, bold, green, red }
