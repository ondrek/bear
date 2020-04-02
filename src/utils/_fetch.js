import fetch from "node-fetch"
import { getWholeToken } from "./_token"
import log from "./log"

async function fetchFn(method = "GET", url = "", data = {}) {
  const fullUrl = "http://localhost:3001/api" + url
  const headers = {
    "token": await getWholeToken(),
    "accept": "application/json",
    "content-type": "application/json"
  }

  const response = await fetch(fullUrl, {
    method,
    headers,
    body: (method !== "GET") ? JSON.stringify(data) : null
  }).catch(error => {
    if (error.code === "ECONNREFUSED") {
      log.error("Sorry, but it seems you don't have connection to the internet")
      return process.exit(1)
    }

    console.info("There was an unhandled error while making request", error)
  })

  return await response.json()
}

export default fetchFn
