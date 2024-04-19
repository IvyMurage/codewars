/**
 * @param {number} num
 * @return {number}
 * take a number and find the sum of its digits
 * if the sum is greater than 9, repeat the process
 * until a single digit is found
 * return the single digit
 * use recursion
 * we have a number
 * convert the number into a string
 * split it into an array of digits
 * reduce the digits into a single number
 * if the number is less than 10, return the number
 * if the number is greater than 9 pass the number again to the function
 * repeat until a single digit is found
 */

function sumOfDigits(num) {
  let val = 0;
  val = num
    .toString()
    .split("")
    .reduce((acc, val) => (acc += parseInt(val)), 0);
  if (val > 9) {
    return sumOfDigits(val);
  } else {
    return val;
  }
}
console.log(sumOfDigits(17));
console.log(sumOfDigits(942));
