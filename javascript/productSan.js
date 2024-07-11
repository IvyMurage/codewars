function productSansN(s) {
  let product = 1;
  for (let i = 0; i < s.length; i++) {
    product *= parseInt(s[i]);
  }
  return product;
}
