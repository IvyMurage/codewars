function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  return (
    array2
      .map((num) => Math.sqrt(num))
      .sort((a, b) => a - b)
      .join("") === array1.sort((a, b) => a - b).join("")
  );
}
