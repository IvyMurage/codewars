function twosDifference(input) {
  //Enter your solution here
  let result = [];
  let newSet = new Set(input);

  input.forEach((num) => {
    if (newSet.has(num + 2)) {
      result.push([num, num + 2]);
    }
  });
  return result;
}
