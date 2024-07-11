/**
 * function accepts a number
 * returns the sum of all the multiples of 3 or 5 below the number passed in
 * the numbers within that range are the ones to check if there are multiples of 3 or 5
 * we can use an array from to create a n array of numbers from 1 to the number passed in
 * since array starts from 0 we can and 1 so that it starts counting from 1 instead from 0
 * we then check if the number is a multiple of 3 or 5  and a multiple of both of the numbers
 * if that is the case we add the number to the sum
 */

function solution(number) {
  return Array.from({ length: number - 1 }, (_, i) => i + 1).reduce(
    (sum, num) => {
      (num % 5 === 0 && num % 3 === 0) || num % 3 === 0 || num % 5 === 0
        ? (sum += num)
        : 0;
      return sum;
    },
    0
  );
}

console.log(solution(20));
