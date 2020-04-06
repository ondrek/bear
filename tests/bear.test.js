import { home, fetch, uuid, token, fs, manifest, log } from "../src/utils"

test("exports function", () => {
  expect(home).toBeDefined()
  expect(fetch).toBeDefined()
  expect(uuid).toBeDefined()
  expect(token).toBeDefined()
  expect(fs).toBeDefined()
  expect(manifest).toBeDefined()
  expect(log).toBeDefined()
})
