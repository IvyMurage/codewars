function isAgeDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  let ageGroups = [13, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return ageGroups.every((ageGroup) =>
    list.some(
      ({ age }) =>
        (age >= ageGroup && age < ageGroup + 10) ||
        (ageGroup === 100 && age >= 100)
    )
  );
}
