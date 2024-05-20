const originalObj = { aa: "1", bf: "3", cq: "5" };
const reverseObject = (obj) => {
  let res = {};
  for (let key in obj) {
    res[obj[key]] = key;
  }
  return res;
};
const reversedObj = reverseObject(originalObj);

console.log(reversedObj);
//output: {"1": 'aa', "3": 'bf', "5": 'cq'}
// Expected output
