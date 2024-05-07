function duplicateCount(text) {
  //...
  let lowerText = text.toLowerCase();
  return new Set(
    lowerText
      .split("")
      .filter((char) => lowerText.indexOf(char) !== lowerText.lastIndexOf(char))
  ).size;
}

console.log(duplicateCount("aabbcde")); // ["a", "b"]
