import fetch from "node-fetch"
// import { getWholeToken } from "./_token"

const fetchFn = async (method = "GET", url = "", data = {}) => {
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
  });

  return await response.json()
}

export { fetchFn }
