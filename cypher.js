/**
 * @param {string} s
 * @return {string}
 * the function takes a string
 * and returns a cyphered string
 * we have a table with  some strings with there cyphered values
 * create an object that stores the characters with their cyphered values
 * the  keys will be the characters in small letters and the values will be the cyphered values
 * create a variable to store the cyphered string
 * split the string into an array then reduce it to a single value
 */

function cypher(string) {
  let result = "";
  const codes = {
    1: ["L", "l"],
    2: ["R", "z"],
    3: ["E", "e"],
    4: ["A", "a"],
    5: ["S", "s"],
    6: ["G", "b"],
    7: ["T", "t"],
    8: ["B"],
    9: ["g"],
    0: ["o", "O"],
  };
  string.split("").forEach((char) => {
    for (let key in codes) {
      if (codes[key].includes(char)) {
        result += key;
        // the next line of code will not be executed
        return;
      }
    }
    result += char;
  });
  return result;
}
console.log(cypher("hello"));
console.log(cypher("world"));
console.log(cypher("I am your father"));
