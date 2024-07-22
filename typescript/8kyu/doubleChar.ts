export function doubleChar(str: string): string{
    return str.split('').reduce((accum, character) =>  {
      accum += character.repeat(2)
      return accum
    }, '')
   }