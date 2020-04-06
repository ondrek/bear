import fetch from "node-fetch"
import { getWholeToken } from "./_token"

async function fetchFn(method = "GET", url = "", data = {}) {
  const againstLocalhost = process.env.USER === "samuel"

  const fullUrl = againstLocalhost
    ? "http://localhost:3001/api" + url
    : "https://bearicorn.com/api" + url

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
      return Promise.reject("Sorry, but it seems you don't have connection to the internet")
    }

    console.info("There was an unhandled error while making request", error)
  })

  return await response.json()
}

export default fetchFn
