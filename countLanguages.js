const countLanguages = (list) =>
  list.reduce((acc, { language }) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});
