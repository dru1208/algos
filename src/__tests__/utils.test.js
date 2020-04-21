const { run } = require("../utils")

describe("run", () => {
  it("should run the function provided", () => {
    const fn = jest.fn()
    const actual = run(fn, [])
    expect(fn.mock.calls.length).toBe(1)
  })

  it("should return the duration and the result of the function provided", () => {
    const input = [1, 2, 3]
    const fn = jest.fn(input => input.reverse())
    const { duration, result } = run(fn, input)
    expect(result).toEqual([3, 2, 1])
    expect(duration >= 0).toBe(true)
  })
})