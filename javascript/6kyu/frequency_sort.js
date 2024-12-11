function solve(arr) {
  const newArray = []
  const res = arr.reduce((sortedObj, value) => {
    sortedObj[value] = (sortedObj[value] || 0) + 1
    return sortedObj
  }, {})
  Object.entries(res).sort((a, b) => b[1] - a[1]).map(num => +num[0]).forEach(key => newArray.push(...arr.filter(num => num === key)))
  return newArray
}