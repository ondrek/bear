import chalk from "chalk"
import os from "os"
import Listr from "listr"

const info = (message) => {
  console.log(`${chalk.green("bearicorn")} ${chalk.dim("info")} ${chalk.dim(message)}`)
}

const error = (message) => {
  console.log(`${chalk.green("bearicorn")} ${chalk.red("error")} ${message}`)
}

const debug = async () => {
  console.log("")
  // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("Memory")} ${chalk.dim(os.totalmem())} ${chalk.dim(os.freemem())}`)
  // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("Version")} ${chalk.dim("2.0.40")}`)
  // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("User")} ${chalk.dim(os.userInfo().username.toUpperCase())} ${chalk.dim(os.homedir().toUpperCase())}`)
  // console.log(`${chalk.dim("bearicorn")} ${chalk.dim("debug")} ${chalk.dim("Platform")} ${chalk.dim(os.uptime())} ${chalk.dim(os.arch().toUpperCase())} ${chalk.dim(os.release())} ${chalk.dim(os.platform().toUpperCase())}`)


  console.log(`Getting all debug info`)

  const tasks = new Listr([
    {
      title: 'Success',
      task: () => 'Foo'
    },
    {
      title: 'Installing dependencies',
      task: () => {

        const tasks = []
        const nmbr = 10;

        for (let i = 0; i < nmbr; i++){
          tasks.push({
            title: i + " nahahahah",
            task: (ctx, task) => new Promise( (resolve, reject) => {
              setTimeout(() => { resolve() }, 300)
            })
          })
        }

        return new Listr(tasks)

        // return new Listr([
        //   {
        //     title: 'Checking git status',
        //     task: (ctx, task) => new Promise( (resolve, reject) => {
        //       setTimeout(() => { resolve() }, 2000)
        //     }).catch(() => {
        //       ctx.yarn = false;
        //       task.skip('Yarn not available, install it via `npm install -g yarn`');
        //     }),
        //   },
        //   {
        //     title: 'Checking remote history',
        //     task: (ctx, task) => new Promise( (resolve, reject) => {
        //       setTimeout(() => { resolve() }, 2000)
        //     }).catch(() => {
        //       ctx.yarn = false;
        //       task.skip('Yarn not available, install it via `npm install -g yarn`');
        //     }),
        //   },
        //   {
        //     title: 'Checking remote history',
        //     task: (ctx, task) => new Promise( (resolve, reject) => {
        //       setTimeout(() => { resolve() }, 2000)
        //     }).catch(() => {
        //       ctx.yarn = false;
        //       task.skip('Yarn not available, install it via `npm install -g yarn`');
        //     }),
        //   }
        // ], {concurrent: true});
      }
    },
    {
      title: 'Creating home folder',
      task: (ctx, task) => new Promise( (resolve, reject) => {
        setTimeout(() => { resolve() }, 2000)
      }).catch(() => {
        ctx.yarn = false;
        task.skip('Yarn not available, install it via `npm install -g yarn`');
      })
    },
    {
      title: 'Generating private and public key',
      task: (ctx, task) => new Promise( (resolve, reject) => {
        setTimeout(() => { resolve() }, 2000)
      }).catch(() => {
        ctx.yarn = false;
        task.skip('Yarn not available, install it via `npm install -g yarn`');
      }),
      skip: () => {
        const random = Math.random()
        if (random > 0.5) {
          return 'Was skipped because this is Mac computer ' + random;
        }
      }
    },
    {
      title: 'Getting public token from Bearicorn server',
      task: (ctx, task) => new Promise( (resolve, reject) => {
        setTimeout(() => { resolve() }, 2000)
      }).catch(() => {
        ctx.yarn = false;
        task.skip('Yarn not available, install it via `npm install -g yarn`');
      })
    }
  ], {
    collapse: false
  })

  await tasks.run().catch(err => {
    console.error(err)
  })

  console.log("")
}





export default { info, error, debug }
