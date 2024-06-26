function findLongestSubstr(s) {
  let uniqS = s.replace(/[^a-zA-Z0-9]/g, ""); // Clean the input string

  let result = new Map();
  let res = "";

  for (let i = 0; i < uniqS.length; i++) {
    res += uniqS[i];
    if (uniqS[i] !== uniqS[i + 1]) {
      result.set(res, [
        `${res.charCodeAt(0)}`,
        res.length,
        [s.indexOf(res), s.indexOf(res) + res.length - 1],
      ]);
      res = "";
    }
  }
  console.log(result.sort((a, b) => b[1] - a[1])[0]);
  return [...result.values()].sort(
    (a, b) => b[1] - a[1]
  )[0];
}
