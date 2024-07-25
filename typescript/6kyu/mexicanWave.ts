export function wave(str: string): Array<string>{
    let stringArray:string[] = []
    let result = ''
    str.split('').forEach((character, index) =>{
      if(character === str[index] && index !== 0){
        result += str.slice(0, index)
      }
        result += character.toUpperCase()
        result += str.slice(index + 1)
        stringArray.push(result)
        result = ''
    })
    return stringArray.filter(string => string !== string.toLowerCase())
  }
  
  