function robberEncode(sentence) {
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    
    return sentence.split('').map(character => consonants.includes(character.toLowerCase()) ? (
    character += `${character === character.toUpperCase() ? "O" : "o"}${character}`
    ) : (character)).join('')
    
  }