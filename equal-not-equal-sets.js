function areEqual(s1, s2) {
  // ...
  return [...s1].every((item) => s2.has(item));
}

function notEqual(s1, s2) {
  // ...
  return [...s1].some((item) => !s2.has(item));
}
