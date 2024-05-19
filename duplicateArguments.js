function solution(...rest) {
  return rest.some(
    (val) => rest.indexOf(val) !== rest.lastIndexOf(val)
  );
  // return true if this method is called with duplicate argument values
}
