const bubbleSort = require("../bubble")

describe("bubble", () => {
  it("should sort the array correctly", () => {
    const input = [5, 1, 6, 2, 4, 3]
    expect(bubbleSort(input)).toEqual([1, 2, 3, 4, 5, 6])
  })
})