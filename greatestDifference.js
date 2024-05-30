function diff(str) {
  //code here
  let max = 0;
  let res = "";

  str.forEach((pair) => {
    let arr = pair.split("-");
    let diff = Math.abs(arr[0] - arr[1]);
    max = Math.max(max, diff);
    res = pair;
  });

  return res ? res : false;
}
console.log(diff(["1-2", "4-6", "8-10"])); // "1-2"
console.log(diff(["1-2", "4-6", "8-10", "20-30"])); // "20-30"
