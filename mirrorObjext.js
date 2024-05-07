const mirror = (obj) => {
  return Object.keys(obj).reduce((acc, val) => {
    acc[val] = val.split("").reverse().join("");
    return acc;
  }, {});
};

console.log(mirror({ abc: undefined }));
