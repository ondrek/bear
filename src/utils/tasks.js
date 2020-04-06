import Listr from "listr"
import chalk from "chalk"

const transform = (arr, options = {}) => {
  arr = arr.map(item => {
    if (Array.isArray(item.task)) return { ...item, task: () => transform(item.task)  }
    return item
  })

  return new Listr(arr, {
    concurrent: options.concurrent || false,
    collapse: options.collapse || false
  })
}

const pipeline = async (items) => {
  await transform(items).run().catch(err => {
    console.error("Unhandled piping error", err)
  })
}

const dim = (message) => {
  return chalk.dim(message)
}

const red = (message) => {
  return chalk.red(message)
}

export { pipeline, dim, red }
