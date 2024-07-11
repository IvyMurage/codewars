/**
 * You have an array
 * Have an empty string to store the result
 * Add a opening bracket to the result string
 * slice the array from 0 to 3 and add it to the result string
 * Add a closing bracket to the result string
 * add a space to the result string
 * update the string by removing the first 3 elements
 * Check if the length of the string is still greater than 0
 * if it is, slice the string from 3 to 5 and add it to the result string
 * if it is not, return the result string
 * add a dash the result string
 * repeat the process until the length of the string is 0
 * Ended up using reduce lol!!!
 */

function createPhoneNumber(numbers) {
  return numbers.reduce((num, val, index) => {
    if (index === 0) {
      num += "(" + val;
    } else if (index === 2) {
      num += val + ")";
    } else if (index === 3) {
      num += " " + val;
    } else if (index === 5) {
      num += val + "-";
    } else {
      num += val;
    }
    return num;
  }, "");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
