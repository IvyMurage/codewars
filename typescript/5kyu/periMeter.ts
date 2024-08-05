export const perimeter = (n:number):number => {
    // your code
    let sum = 0
    let prevNumber = 0
    let currentNumber = 1
   for(let i = 1; i <= n + 1; i++){
     let nextNumber = prevNumber + currentNumber
     prevNumber = currentNumber
     currentNumber = nextNumber
     sum += prevNumber
   } 
    return sum * 4
  }
  