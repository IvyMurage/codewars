var searchArray = function (arrayToSearch, query) {
  if (
    arrayToSearch.some((arr) => arr.length > 2) ||
    query.length > 2 ||
    !Array.isArray(query)
  )
    throw "Invalid Input";
  return arrayToSearch.indexOf(
    arrayToSearch.find((arr) => arr.join() === query.join())
  );
};
