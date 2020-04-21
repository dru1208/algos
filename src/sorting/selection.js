function findMinimum(array) {
  let smallest = array[0]
  let index = 0
  array.forEach((num, i) => {
    if (num < smallest) {
      smallest = num
      index = i
    }
  })
  return {
    smallest,
    index
  }
}

function selectionSort(input) {
  let currentEvaluatedIndex = 0
  while (currentEvaluatedIndex < input.length - 1) {
    const { smallest, index } = findMinimum(input.slice(currentEvaluatedIndex))
    input[index + currentEvaluatedIndex] = input[currentEvaluatedIndex]
    input[currentEvaluatedIndex] = smallest

    currentEvaluatedIndex ++
  }
  return input
}

module.exports = selectionSort