const solution = roman => {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    return roman.split('').map(romanNumber => romans[romanNumber]).reduce((sum, value, index, romanNumbers) =>
        value < romanNumbers[index + 1] ? sum - value : sum + value, 0)
}