/**
 *
 * @param {*} num
 * @returns
 *  the number returns a single value
 * So I can use reduce
 * Convert the num into a string
 * loop through the string
 * on each number parse it find the square then add it to a new result string
 * then return the result
 */
function squareDigits(num) {
  const numStr = num.toString();
  let result = "";
  for (let num of numStr) {
    result += Math.pow(parseInt(num), 2);
  }
  return result;
}
console.log(squareDigits(765));
