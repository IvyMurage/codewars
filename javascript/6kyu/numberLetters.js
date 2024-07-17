function numbersOfLetters(integer) {
  let result = [];
  const objectOfNumberLetters = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  const stringArray = integer
    .toString()
    .split("")
    .reduce((letters, number) => {
      if (objectOfNumberLetters[number])
        letters += objectOfNumberLetters[number];
      return letters;
    }, "");
  if (stringArray === "four") return ["four"];
  result.push(stringArray);
  let letterLength = stringArray.length;

  if (letterLength === 4) {
    result.push(objectOfNumberLetters[letterLength]);
  }
  while (letterLength !== 4) {
    if (letterLength > 9)
      return result.concat(numbersOfLetters(letterLength));
    result.push(objectOfNumberLetters[letterLength]);
    letterLength =
      objectOfNumberLetters[letterLength].length;
    if (letterLength === 4) {
      result.push(objectOfNumberLetters[letterLength]);
      break;
    }
  }
  return result;
}
