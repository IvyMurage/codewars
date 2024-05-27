function allContinents(list) {
  return [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ].every((val) =>
    list.some(({ continent }) => continent === val)
  );
  // thank you for checking out the Coding Meetup kata :)
}
