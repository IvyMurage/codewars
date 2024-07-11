function mergeArrays(a, b) {
  let min = Math.min(a.length, b.length);
  let max = Math.max(a.length, b.length);
  let result = [];
  for (let i = 0; i < min; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }
  a.length > b.length
    ? result.push(...a.slice(min, max))
    : result.push(...b.slice(min, max));
  return result;
}

console.log(
  mergeArrays(
    [1, 2, 3, 4, 5],
    ["a", "b", "c", "d", "e", "f"]
  )
);
// [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", "f"]
console.log(
  mergeArrays([1, 2, 3, 4, 5, 6], ["a", "b", "c", "d", "e"])
);
