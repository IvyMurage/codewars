function countFeelings(string, array) {
  let feelings = array.filter((feeling) =>
    feeling.split("").every((char) => string.includes(char))
  ).length;
  return feelings > 1 || feelings === 0
    ? `${feelings} feelings.`
    : `${feelings} feeling.`;
}
