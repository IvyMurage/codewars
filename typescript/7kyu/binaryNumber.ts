export function binaryArrayToNumber(arr: number[]): number {
  return arr.reverse().reduce((sum, val, index) => {
    sum += Math.pow(2, index) * val;
    return sum;
  });
}
