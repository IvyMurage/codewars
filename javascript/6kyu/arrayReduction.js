function solve(n){
  let array = Array.from({length: n}, (_, index) => index + 1 )
  const first = [array.shift()]
  while(array.length > array[0]){
    first.push(array[0])
    array = array.filter((digit, index, array) => index % first[first.length - 1] !== 0)
    if(array.length <= array[0]){
      first.push(...array)
      break;
    }
  }
return first.reduce((sum, digit) => sum += digit)
}