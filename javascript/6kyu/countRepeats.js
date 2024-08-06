function countRepeats(str) {
    return str.split('').reduce((sum, character, i, array) => 
       character === array[i + 1] ? sum += 1 : sum
   , 0) 
   }