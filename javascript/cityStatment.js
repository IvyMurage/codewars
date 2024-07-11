function cityStatement(cityFacts) {
  let {
    name,
    capital: [fact, country],
    facts: { pop, area },
  } = cityFacts;
  return `${name} has a population of ${pop} people over an area of ${area} square miles. ${
    fact ? `It is the capital city of ${country} ` : ""
  }`.trim();
}
console.log(
  cityStatement({
    name: "Paris",
    capital: [true, "France"],
    facts: { pop: 2140526, area: 105 },
  })
); // "Paris has a population of 2140526 people over an area of 105 square miles. It is the capital city of France"
console.log(
  cityStatement({
    name: "Tokyo",
    capital: [false, "Japan"],
    facts: { pop: 13929286, area: 845 },
  })
); // "Tokyo has a population of 13929286 people over an area of 845 square miles. It is the capital city of Japan"
