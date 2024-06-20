function findUniq(arr) {
  // Step 1: Create a sorted version of each word
  let sortedArr = arr.map((word) =>
    word.toLowerCase().split("").sort().join("")
  );

  // Step 2: Count the occurrences of each sorted word
  let wordCount = {};
  sortedArr.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Step 3: Find the sorted word that occurs exactly once
  let uniqueWord = sortedArr.find(
    (word) => wordCount[word] === 1
  );

  // Step 4: Find and return the original word that matches the unique sorted word
  return arr.find(
    (word) =>
      word.toLowerCase().split("").sort().join("") ===
      uniqueWord
  );
}

// Test cases
console.log(
  findUniq([
    "Aa",
    "aaa",
    "aaaaa",
    "BbBb",
    "Aaaa",
    "AaAaAa",
    "a",
  ])
); // "BbBb"

console.log(
  findUniq([
    "abc",
    "acb",
    "bac",
    "foo",
    "bca",
    "cab",
    "cba",
  ])
); // "foo"

console.log(findUniq(["silvia", "vasili", "victor"])); // "victor"
