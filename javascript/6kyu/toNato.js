function toNato(words) {
    return words.split('')
    .map((character) => NATO[character.toUpperCase()] ? ` ${NATO[character.toUpperCase()]} ` : character)
    .join('').replace(/\s+/g, ' ').trim() 
    }