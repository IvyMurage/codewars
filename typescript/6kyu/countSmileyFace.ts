  //eyes -> : or ; - MUST
  //nose -> - or ~ - NOT MUST
  //smile -> ) or D - MUST
  export function countSmileys(arr: string[]): number {
    return arr.reduce((sum, smile) => {
      if(smile.length === 3 && [':', ';'].includes(smile[0]) && ['-', '~'].includes(smile[1]) && [")", 'D'].includes(smile[2]) ){
        sum += 1
      }
      if(smile.length == 2 && [':', ';'].includes(smile[0]) && ['-', '~', ")", 'D'].includes(smile[1]) ){
        sum += 1
      }
        return sum
    },0)   
  }