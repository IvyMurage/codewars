function differenceOfSquares(n) {
  let squareSumOfNumbers = 0;
  let sumSquareOfNumbers = 0;

  for (let i = 1; i <= n; i++) {
    squareSumOfNumbers += i;
    sumSquareOfNumbers += Math.pow(i, 2);
  }
  return (
    Math.pow(squareSumOfNumbers, 2) - sumSquareOfNumbers
  );
}
