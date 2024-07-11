function findAdmin(list, lang) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(
    ({ githubAdmin, language }) =>
      language === lang && githubAdmin === "yes"
  );
}
