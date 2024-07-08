function scramble(str, arr) {
  let res = [];
  str.split("").forEach((char, index, val) => {
    res[arr[index]] = char;
  });
  return res.join("");
}
