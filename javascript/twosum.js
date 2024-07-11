function twoSum(numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let remain = target - numbers[i];
    if (map.has(remain)) {
      return [map.get(remain), i];
    }
    map.set(numbers[i], i);
  }
}
