function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(
    (developer) =>
      developer.firstName
        .split("")
        .reduce((sum, _, index) => {
          sum += developer.firstName.charCodeAt(index);
          return sum;
        }, 0) %
        2 !==
        0 && developer
  );
}
