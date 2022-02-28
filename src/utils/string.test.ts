import { capitalize } from "./string"

test("should capitalize a word", () => {
  expect(capitalize("hello world")).toBe("Hello world")
})
