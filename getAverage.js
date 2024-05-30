function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  return Math.round(
    list.reduce((sum, { age }) => (sum += age), 0) /
      list.length
  );
}
