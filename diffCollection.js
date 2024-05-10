function diff(a, b) {
  //your code here
  let newSet = new Set([...a, ...b]);
  let combineArray = [...newSet];
  for (char of newSet) {
    if (a.includes(char) && b.includes(char)) {
      combineArray.splice(combineArray.indexOf(char), 1);
    }
  }
  return combineArray.sort();
}
