function sort(initialArray, sortingArray) {
    return sortingArray
    .map((value, index) => ({value, index}))
    .sort((a, b) => a.value - b.value)
    .map(pair => initialArray[pair.index])
     
  }