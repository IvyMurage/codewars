function inter(s1, s2) {
  return new Set(
    [...s1, ...s2].filter(
      (item) => s1.has(item) && s2.has(item)
    )
  );
}
