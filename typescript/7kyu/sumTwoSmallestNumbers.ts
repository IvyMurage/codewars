export function sumTwoSmallestNumbers(numbers:Array<number>):number {  
    let sortedNumbers = numbers.sort((a, b) => a - b)
    return sortedNumbers[0] + sortedNumbers[1]
  }