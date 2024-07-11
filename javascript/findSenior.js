function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :)
  let maxAge = Math.max(...list.map(({ age }) => age));
  return list.filter(
    (developer) => developer.age >= maxAge
  );
}
