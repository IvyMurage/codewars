function reverse(str) {
  return str
    .trim()
    .split(" ")
    .reduce((newString, val, index) => {
      index % 2 !== 0
        ? newString.push(val.split("").reverse().join(""))
        : newString.push(val);
      return newString;
    }, [])
    .join(" ");
}
