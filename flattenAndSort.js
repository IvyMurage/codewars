"use strict";

function flattenAndSort(array) {
  return array
    .reduce((acc, val) => {
      Array.isArray(val)
        ? acc.push(...flattenAndSort(val))
        : acc.push(val);
      return acc;
    }, [])
    .sort((a, b) => a - b);
}
