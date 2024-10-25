function solve(s) {
    let sum = 0;

    return Math.max(...[...s].map((character, index) => {
        if ('aeiou'.includes(character)) {
            sum = 0
            return sum
        } else {
            sum += s.charCodeAt(index) - 97 + 1
        }
        return sum
    }))
};