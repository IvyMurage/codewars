const numberFormat = number => {
    let numberString = Math.abs(number).toString().split('')
    let formattedNumber = ''
    if (numberString.length <= 3) return number.toString();
    while (numberString.length > 3) {
        formattedNumber = `,${numberString.splice(-3).join('')}${formattedNumber}`
    }
    formattedNumber = `${numberString.join('')}${formattedNumber}`
    return number < 0 ? `-${formattedNumber}` : formattedNumber
};