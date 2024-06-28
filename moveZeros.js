function moveZeros(arr) {
  let nonZero = [...arr].filter((num) => num !== 0);
  let num = arr.length - nonZero.length;
  for (let i = 0; i < num; i++) {
    nonZero.push(0);
  }
  return nonZero;
}
