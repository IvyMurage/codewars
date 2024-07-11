function askForMissingDetails(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list
    .filter((item) => Object.values(item).includes(null))
    .map((developer) => {
      let missing = Object.keys(developer).find(
        (key) => developer[key] === null
      );
      return {
        ...developer,
        question: `Hi, could you please provide your ${missing}.`,
      };
    });
}
