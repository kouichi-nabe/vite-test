import { example } from "./example"

describe("example", () => {
  test("文字列を返す", () => {
    expect(example()).toEqual("example")
  })
})