function findSequences(n) {
  let results = [];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    let sequence = [];
    let num = i;
    while (sum < n) {
      sum += num;
      sequence.push(num);
      num++;
    }
    if (sum === n) {
      results.push(sequence);
    }
  }
  return results.sort((a, b) => a.length - b.length);
}
