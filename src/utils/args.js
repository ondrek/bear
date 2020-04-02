import arg from "arg"

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg({}, {
    argv: rawArgs.slice(2),
    permissive: true
  })

  return {
    logout: args._[0] === "logout",
    help: args._[0] === "help",
    push: args._[0] === "push",
    init: args._[0] === "init"
  }
}

const args = parseArgumentsIntoOptions(process.argv)

export { args }
