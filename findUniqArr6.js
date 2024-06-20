function findUniq(arr) {
  let obj = {};
  arr.forEach((num) => (obj[num] = (obj[num] || 0) + 1));
  return arr.find((num) => obj[num] === 1);
}
