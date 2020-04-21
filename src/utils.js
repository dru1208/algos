const run = (fn, input) => {
  const start = Date.now()
  const result = fn(input)
  const end = Date.now()
  return {
    duration: end - start,
    result
  }
}

module.exports = {
  run
}