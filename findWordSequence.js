function findWordSequence(headTail) {
  let str = "";
  wordList.filter((word) => {
    for (let i = 0; i < headTail.length; i++) {
      str += headTail[i];
      if (str.length === 3) {
        console.log(
          word.startsWith(str[0]) &&
            word.endsWith(
              str[2] && word.length === parseInt(str[1])
            )
        );
      }
    }
  });
}
