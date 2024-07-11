function replicate(times, number) {
  // your solution here
  if (times <= 0) {
    return [];
  }
  let res = replicate(times - 1, number);
  res.push(number);
  return res;
}
