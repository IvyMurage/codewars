let number = [1, 2, 3, 4, 5];

function odd() {
  return this.filter((num) => num % 2 !== 0);
}
Array.prototype.square = function () {
  return this.map((num) => Math.pow(num, 2));
};
Array.prototype.cube = function () {
  return this.map((num) => Math.pow(num, 3));
};
Array.prototype.average = function () {
  return this.reduce((sum, num) => sum + num, 0) / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((sum, num) => sum + num, 0);
};
Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((num) => num % 2 !== 0);
};

console.log(number.square());
console.log(number.cube());
console.log(number.average());
console.log(number.sum());
console.log(number.even());
console.log(number.odd());
