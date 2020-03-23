const readline = require("readline")
const fs = require("fs")
const chalk = require("chalk")
const fetch = require("node-fetch")
const { home } = require("../utils")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ask = (q) => new Promise((r) => rl.question(chalk.green(q), (a) => r(a)))

module.exports = async function() {
    const username = await ask("\nPlease enter your username: ")
    const password = await ask("Enter login phrase from email we've sent you: ")
    rl.close()

    const response = await postData("http://localhost:3001/api/auth/login", { username, password })
    await createFile(home.getTokenFilePath(), response.cli.token)
}

const doesFileExist = (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (error, stats) => {
            if (error && error.code === "ENOENT") resolve(false)
            resolve(stats)
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

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json()
}
