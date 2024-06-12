function explode(x) {
  let sum = 0;
  if (isNaN(x[0]) && isNaN(x[1])) {
    return "Void!";
  }
  x.forEach((num) => {
    if (typeof num === "number") {
      sum += num;
    }
  });
  console.log(sum);
  return Array(sum).fill(x);
}
