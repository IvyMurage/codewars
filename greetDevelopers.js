const greetDevelopers = (list) =>
  list.map((developer) => ({
    ...developer,
    greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`,
  }));
