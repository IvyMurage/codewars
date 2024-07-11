const getFirstPython = (list) => {
  let developer = list.find(
    ({ language }) => language === "Python"
  );
  return developer
    ? `${developer.firstName}, ${developer.country}`
    : "There will be no Python developers";
}; // Thank you for checking out my kata :)
