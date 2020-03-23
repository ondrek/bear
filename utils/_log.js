const chalk = require("chalk")
const title = chalk.gray("Bearicorn; ")

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

const green = (message, prefix) => {
    return prefix
        ? chalk.green(title + message)
        : chalk.green(message)
}

module.exports = { dim, bold, green }
