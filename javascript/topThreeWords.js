function topThreeWords(text) {
  let objText = new Map();
  let newText = text.replace(/[/#\.,:;]/gi, "").split(" ");

  newText.forEach((item) => {
    if (item !== "" && item !== "'") {
      objText.set(
        item.toLowerCase(),
        (objText.get(item.toLowerCase()) || 0) + 1
      );
    }
  });

  return [...objText.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0])
    .slice(0, 3);
}
