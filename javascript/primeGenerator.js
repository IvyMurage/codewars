var primeGen = (function* () {
  //your code goes here
  let num = 1;
  while (true) {
    if (isPrime(++num)) {
      yield num;
    }
  }
})();

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
