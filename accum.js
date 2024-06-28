function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .reduce((accum, char, index) => {
      accum += `-${
        char.toUpperCase() + char.repeat(index)
      }`;
      return accum;
    }, "")
    .slice(1);
}
