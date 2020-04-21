const input = [2, 1, 3, 2, 6, 7, 1]

function bubbleSort(input) {
  let count = 0
  const result = [...input]
  const max = result.length - 1
  while (count < max) {
    let flag = 0
    result.forEach((num, index) => {
      if (index < max) {
        const nextNum = result[index + 1]
        if (num > nextNum) {
          const temp = num
          result[index] = nextNum
          result[index + 1] = num
          flag ++
        }
      }
    })
    if (flag === 0) {
      break
    }
    count ++
  }
  return result
}

module.exports = bubbleSort

/*

Bubble Sort is a simple algorithm which is used to sort a given set of n elements provided in form of an array with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values.

If the given array has to be sorted in ascending order, then bubble sort will start by comparing the first element of the array with the second element, if the first element is greater than the second element, it will swap both the elements, and then move on to compare the second and the third element, and so on.

If we have total n elements, then we need to repeat this process for n-1 times.

It is known as bubble sort, because with every complete iteration the largest element in the given array, bubbles up towards the last place or the highest index, just like a water bubble rises up to the water surface.

Sorting takes place by stepping through all the elements one-by-one and comparing it with the adjacent element and swapping them if required.

*/