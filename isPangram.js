function isPangram(string) {
  let uniqString = new Set();

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  string
    .toLowerCase()
    .trim()
    .split("")
    .forEach((char) => alphabet.includes(char) && uniqString.add(char));
  return uniqString.size === alphabet.length;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true

function isPangram1(string) {
  return (
    Array.from(new Set(string.toLowerCase().match(/[a-z]/g)))
      .sort()
      .join("") === "abcdefghijklmnopqrstuvwxyz"
  );

  function isPangram2(string) {
    return "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .every((x) => string.toLowerCase().includes(x));
  }
}

console.log(isPangram1("The quick brown fox jumps over the lazy dog.")); // true
