function firstNonRepeatingLetter(s) {
    let character;
    let lowerCasedString = [...s.toLowerCase()]
    const result = lowerCasedString.find(character => lowerCasedString.indexOf(character) === lowerCasedString.lastIndexOf(character))
    character = [...s].find((character, index) => result !== undefined && result.charCodeAt(0) - s.charCodeAt(index) === 32 ) === undefined ? result : result.toUpperCase()
    return character === undefined ? '' : character
    }