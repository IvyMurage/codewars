function sortMyString(S) {
  // your code here
  let firstRes = "";
  let lastRes = "";

  S.split("").forEach((char, index) => {
    index % 2 === 0 ? (firstRes += char) : (lastRes += char);
  });
  return `${firstRes} ${lastRes}`;
}
