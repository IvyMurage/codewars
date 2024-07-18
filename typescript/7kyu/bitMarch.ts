export function bitMarch (n: number): number[][] {
    let originalArray: number[] =  Array(8).fill(0).fill(1, -n )
    let result:number[][] = []
    let count = 8;
    while(count >= n){
      result.push([...originalArray])
      originalArray.shift()
      originalArray.push(0)
      count--
    }
    return result
  }