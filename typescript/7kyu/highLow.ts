export class Kata {
    static highAndLow(numbers: string): string {
      const newValues = numbers.split(' ').map(number => +number)
      return `${Math.max(...newValues)} ${Math.min(...newValues)}`
    }
  }