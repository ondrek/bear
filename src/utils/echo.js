import ora from "ora"

function echo(text) {
  const obj = {}
  const instance = ora({
    text,
    prefixText: " ",
    color: "gray"
  })

  if (text) {
    instance.start()
  }

  obj.start = (message) => {
    instance.start(message)
  }

  obj.succeed = (message) => {
    instance.succeed(message)
  }

  obj.fail = (message) => {
    instance.fail(message)
  }

  return obj
}

export { echo }
