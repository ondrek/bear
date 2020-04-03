import Listr from "listr"

const transform = (arr) => {
  arr = arr.map(item => {
    if (Array.isArray(item.task)) return { ...item, task: () => transform(item.task)  }
    return item
  })

  return new Listr(arr, { concurrent: false, collapse: false })
}

const pipeline = async (items) => {
  await transform(items).run().catch(err => console.error("Piping error", err))
}

export { pipeline }
