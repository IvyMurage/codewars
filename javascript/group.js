function group(arr) {
  let res = [];
  let set = new Set(arr);
  for (let num of set) {
    res.push(arr.filter((val) => val === num).sort());
  }
  return res;
}
