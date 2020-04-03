import Listr from "listr"
import chalk from "chalk"

const transform = (arr) => {
  arr = arr.map(item => {
    if (Array.isArray(item.task)) return { title: item.title, task: () => transform(item.task)  }
    return item
  })

  return new Listr(arr, { concurrent: false, collapse: false })
}

const pipeline = async (items) => {
  await transform(items).run().catch(err => console.error("Piping error", err))
}

const dim = (message) => {
  return chalk.dim(message)
}

export { pipeline, dim }
