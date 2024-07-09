function sumDigits(n) {
  return Math.abs(n)
    .toString()
    .split("")
    .reduce((a, b) => +a + +b, 0);
}
