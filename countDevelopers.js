const countDevelopers = (list) => {
  return list.filter(
    ({ language, continent }) =>
      language === "JavaScript" && continent === "Europe"
  ).length;
};
