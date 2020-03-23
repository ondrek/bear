const _fs = require("fs")

const readFile = (path) => {
    return new Promise((resolve) => {
        _fs.readFile(path, (err, data) => {
            if (err) throw err
            resolve(data)
        });
    })
}

module.exports = {
    readFile
}
