function numberFormat(number) {
  new Intl.NumberFormat().format(number);
  number.toLocaleString();

  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let numString = number.toString();

  let result = "";

  while (numString.length > 3) {
    result = "," + numString.slice(-3) + result;
    numString = numString.slice(0, numString.length - 3);
  }
  if (numString.length <= 3) {
    result = numString + result;
  }
  return result;
}

console.log(numberFormat(1234567890)); // 1,234,567,890
console.log(numberFormat(123456789)); // 123,456,789
console.log(numberFormat(12345678)); // 12,345,678
console.log(numberFormat(1234567)); // 1,234,567
console.log(numberFormat(123456)); // 123,456
console.log(numberFormat(12345)); // 12,345
console.log(numberFormat(1234)); // 1,234
console.log(numberFormat(123)); // 123
console.log(numberFormat(12)); // 12
console.log(numberFormat(1)); // 1
console.log(numberFormat(0)); // 0
console.log(numberFormat(1000000)); // 1,000,000
