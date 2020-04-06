/* eslint-disable */

import fs from "fs"
import stream from "stream"
import path from "path"
import util from "util"
import tar from "tar-fs"
import zlib from "zlib"

const fsPromises = fs.promises

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) throw err
      resolve(data + "")
    });
  })
}

const doesFolderExists = (path) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err && err.code === "ENOENT") {
        resolve(false)
      } else if (stats) {
        resolve(true)
      }
    })
  })
}

const createFolder = (path) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, { recursive: true }, (err) => {
      if (err) {
        throw err
      } else {
        resolve(true)
      }
    })
  })
}

const createFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (error) => {
      if (error && error.code === "ENOENT") resolve(false)
      resolve(true)
    })
  })
}

const unlinkFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
      if (err) throw err
      resolve(true)
    });
  })
}

const unlinkFolder = (path) => {
  return new Promise((resolve, reject) => {
    fs.rmdir(path, { recursive: true },(err) => {
      if (err) throw err
      resolve(true)
    });
  })
}

const createLocalConfigFile = async (name) => {
  const template = await readFile(__dirname + "/../templates/default")
  const filledIn = template.replace("{{name}}", name)
  await createFile(process.cwd() + "/.bearicorn", filledIn)
}

const walk = async (dir) => {
  let files = await fsPromises.readdir(dir)

  let forDeletion = [".git", ".idea", "node_modules", ".gitignore", ".DS_Store"]
  files = files.filter(item => !forDeletion.includes(item))

  files = await Promise.all(files.map(async file => {
    const filePath = path.join(dir, file)
    const stats = await fsPromises.stat(filePath)
    if (stats.isDirectory()) return walk(filePath)
    else if(stats.isFile()) return filePath
  }))

  return files.reduce((all, folderContents) => all.concat(folderContents), [])
}

const createTarFile = (cwd, tarFilePath) => {
  return new Promise(async (resolve, reject) => {

    // const pipeline = util.promisify(stream.pipeline)
    // const pipe = promisify(pipeline);

    await testingTutorial([".gitignore", "package.json", "package-lock.json"])
    return


    const pipe = util.promisify(stream.pipeline);

    // let files = await walk(".")
    // files = files.map(file => "./" + file)
    // console.info(files)
    //
    // console.info("cwd", cwd)
    // console.info("tarFilePath", tarFilePath)

    async function do_gzip(input, output) {
      const gzip = createGzip()
      const source = fs.createReadStream(input)
      const destination = fs.createWriteStream(output)
      await pipe(source, gzip, destination)
    }

    do_gzip("package.json", 'input.txt.gz').catch((err) => {
      console.error('An error occurred:', err)
      process.exitCode = 1
    })
  })
}

// const createTarFile = async (cwd, tarFilePath) => {
//   const pipeline = util.promisify(stream.pipeline)
//
//   let files = await walk(".")
//   files = files.map(file => "./" + file)
//   console.info(files)
//
//   console.info("cwd", cwd)
//   console.info("tarFilePath", tarFilePath)
//
//   // tar.c({ cwd }, files).pipe(fs.createWriteStream(tarFilePath))
//
//
//   await tar.pack("./readme.md").pipe(fs.createWriteStream(tarFilePath))
//
//
//   // nah.on("close", async () => {
//   //   console.info("Nahahaha")
//   //   const diff = (+new Date() - startTime) / 1000
//   //   print.succeed(`Tar file created. It took ${diff}s to build a package with id ${id}`)
//   //   await uploadToS3(tarFilePath, id)
//   // }).on("error", (err) => console.info(err))
//
//   // console.info("before")
//   //
//   // const nah = await pipeline(tarStream, writeStream, (err) => {
//   //   if (err) {
//   //     console.error('Pipeline failed.', err);
//   //   } else {
//   //     console.log('Pipeline succeeded.');
//   //   }
//   // })
//   //
//   // console.info("nah", nah)
// }


export {
  readFile,
  doesFolderExists,
  createFolder,
  createFile,
  unlinkFile,
  unlinkFolder,
  createLocalConfigFile,
  walk,
  createTarFile
  // createReadStream: fs.createReadStream,
  // statSync: fs.statSync
}
