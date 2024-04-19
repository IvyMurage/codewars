/**
 * Have an object that stores the string with a number
 * Have an array that stores the number of a string
 * Find the difference between the 2 arrays
 * Push the number of the string to the array until the difference is 0
 *
 */

function encode(str, n) {
  let strObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const result = str
    .split("")
    .map((char) => strObj[char] || 0)
    .map(
      (num, index) => num + parseInt(n.toString()[index % n.toString().length])
    );

  return result;
}

console.log(encode("scout", 1939));
console.log(encode("masterpiece", 1939));
