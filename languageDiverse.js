function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  let languageCount = list.reduce((langs, { language }) => {
    langs[language] = (langs[language] || 0) + 1;
    return langs;
  }, {});
  let max = Math.max(...Object.values(languageCount));
  let min = Math.min(...Object.values(languageCount));

  return max <= min * 2;
}
