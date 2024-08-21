function toWeirdCase(string){
    return string.split(' ').map(characters => {
      return characters.split('').map((character, index, array) => {
        if(index % 2 === 0) return character.toUpperCase()
        if(index % 2 !== 0) return character.toLowerCase()
      }).join('')
    }).join(' ')
    
    }