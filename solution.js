function solution(str, ending) {
  console.log(str.indexOf(ending) !== -1);
}

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde")); // true
