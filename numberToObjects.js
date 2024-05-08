function numObj(s) {
  return s.map((num) => {
    return { ["" + num]: String.fromCharCode(num) };
  });
}
