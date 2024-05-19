function diff(s1, s2) {
  // ...
  return new Set([...s1].filter((item) => !s2.has(item)));
}
