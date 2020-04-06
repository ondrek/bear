import readline from "readline"
import { promisify } from "util"
import chalk from "chalk"

readline.Interface.prototype.question[promisify.custom] = function(prompt) {
  return new Promise(resolve => readline.Interface.prototype.question.call(this, prompt, resolve))
}

readline.Interface.prototype.questionAsync = promisify(
  readline.Interface.prototype.question,
)

async function ask (question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const answer = await rl.questionAsync(chalk.bold(question))
  rl.close()

  return answer
}

export { ask }
