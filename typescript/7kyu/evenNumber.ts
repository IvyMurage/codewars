export function evenNumbers(array: number[], n: number): number[] {
    return array.filter((num) => num % 2 === 0).reverse().slice(0, n).reverse()
   }