

console.log(getCount("abracadabra")); // 5

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '')
  }

