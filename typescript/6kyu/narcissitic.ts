export function narcissistic(value: number): boolean {
    let sum = 0
    let input = value
    while(input > 0){
    sum += Math.pow(input % 10,  value.toString().length)
    input = Math.floor(input / 10)
    }
    return sum === value
  }
  