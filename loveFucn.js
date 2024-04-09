function loveFunc(flower1, flower2) {
  // moment of truth
  return (flower1 + flower2) % 2 !== 0 ? true : false;
}

console.log(loveFunc(1, 4));
console.log(loveFunc(2, 2));
console.log(loveFunc(0, 1));
