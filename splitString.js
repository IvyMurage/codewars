function solution(str) {
  let res = [];
  str.length % 2 === 1 ? (str += "_") : str;
  for (let i = 0; i < str.length; i += 2) {
    res.push(str.slice(i, i + 2));
  }
  return res;
}
