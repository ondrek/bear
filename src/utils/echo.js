import ora from "ora"

function echo() {
  const obj = {}
  const instance = ora({
    text: "",
    prefixText: " ",
    color: "gray"
  })

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
