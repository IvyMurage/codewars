function addUsername(list) {
  let currentYear = new Date().getFullYear();
  return list.map((developer) => ({
    ...developer,
    ["username"]: `${developer.firstName.toLowerCase()}${developer.lastName
      .charAt(0)
      .toLowerCase()}${currentYear - developer.age}`,
  }));
}
