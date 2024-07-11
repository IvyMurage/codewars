function high(x) {
  let highCount = 0;
  let map = new Map();

  x.split(" ").forEach((word) => {
    highCount = 0;
    for (let char of word) {
      highCount +=
        word
          .toLowerCase()
          .charCodeAt(word.toLowerCase().indexOf(char)) -
        97 +
        1;
    }
    map.set(word, highCount);
  });

  for ([key, value] of map.entries()) {
    if (value === Math.max(...map.values())) {
      return key;
    }
  }
}
