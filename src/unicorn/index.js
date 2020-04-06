import ora from "ora"

const options = {
  name: ""
}

async function process(issue) {
  return new Promise((resolve, reject) => {

    const spinner = ora({
      text: issue.title,
      prefixText: " ",
      color: "gray"
    })

    spinner.start()

    //console.info(issue.fn)

    issue.fn(options).then(() => {
      spinner.succeed()
      resolve()
    }).catch(reject)
  })
}

async function unicorn(message) {
  return {
    text: () => {},
    success: () => {},
    failed: () => {},
  }
}

async function echo(text) {

}

export { unicorn }



