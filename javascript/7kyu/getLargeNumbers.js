function getLargerNumbers(a, b) {
  return a.map((number, index) =>
    number > b[index] ? number : b[index]
  );
}
