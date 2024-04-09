console.log(
  Array(2)
    .fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
);
