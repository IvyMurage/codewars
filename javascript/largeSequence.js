var lengthOfSequence = function (arr, n) {
  if (arr.length === 1) return 0;
  if (arr.filter((num) => num === n).length > 2) return 0;
  return arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1)
    .length;
};
