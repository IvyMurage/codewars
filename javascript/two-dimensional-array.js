/**
 *
 * @param {*} array
 * @return
 * returns an array with the main diagonal of the matrix array changed to either 0 or 1
 * if the number is positive, change it to 1
 * if the number is negative, change it to 0
 * to access the main diagonal, the row index and column index must be the same
 * to access the reverse diagonal, the row index and column index must add up to the length of the array minus 1
 * or take the length of the array minus the row index minus 1
 */
function matrix(array) {
  return [...array].map((row, index) => {
    row[index] = row[index] >= 0 ? 1 : 0;
    return row;
  });
}

function reverse(array) {
  return [...array].map((row, index) => {
    row[array.length - 1 - index] = "changed";
    return row;
  });
}

const arr = [
  [-1, 4, -5, -9, 3],
  [6, -4, -7, 4, -5],
  [3, 5, 0, -9, -1],
  [1, 5, -7, -8, -9],
  [-3, 2, 1, -5, 6],
];
console.log(matrix(arr));
console.log(reverse(arr));
