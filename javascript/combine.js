function combine(...rest) {
  // Your code here
  return rest.reduce((acc, obj) => {
    for (let key in obj) {
      acc[key] = (acc[key] || 0) + obj[key];
    }
    return acc;
  }, {});
}
