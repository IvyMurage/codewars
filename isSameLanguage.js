const isSameLanguage = (list) => {
  return list.every(
    ({ language }, index, array) =>
      index === array.length - 1 ||
      language === array[index + 1].language
  );
};
