export function tailSwap(arr: [string,string]): [string,string] {
    let [string1, string2] = arr
    
    let [x, y] = string1.split(':')
    let [a, b] = string2.split(':')
   
    return [`${x}:${b}`, `${a}:${y}`];
  }