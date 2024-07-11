function getMiddle(s) {
  //Code goes here!
  let sArray = s.split("");
  for (let i = 0; i < sArray.length / 2; i++) {
    sArray.shift();
    sArray.pop();
  }
  return sArray;
}

console.log(getMiddle("testing"));
