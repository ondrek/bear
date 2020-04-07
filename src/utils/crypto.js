import crypto from "crypto"
import fs from "fs"

async function encrypt(tarFilePath) {
  console.info("asddsas")
  console.info(tarFilePath)

  const key = "14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd"
  const cipher = crypto.createCipher("aes-256-cbc", key)
  const input = fs.createReadStream(tarFilePath)
  const output = fs.createWriteStream(tarFilePath + ".enc")

  input.pipe(cipher).pipe(output)

  output.on("finish", function () {
    console.log("Encrypted file written to disk!")
  })
}

export { encrypt }
