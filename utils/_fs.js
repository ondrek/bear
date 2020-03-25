const fs = require("fs")

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
  const template = await readFile(process.cwd() + "/templates/default")
  const filledIn = template.replace("{{name}}", name)
  await createFile(process.cwd() + "/.bearicorn", filledIn)
}

module.exports = {
  readFile,
  doesFolderExists,
  createFolder,
  createFile,
  unlinkFile,
  unlinkFolder,
  createLocalConfigFile,
  createWriteStream: fs.createWriteStream,
  createReadStream: fs.createReadStream,
  statSync: fs.statSync
}
