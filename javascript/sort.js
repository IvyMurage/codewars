function sort(students) {
  return students
    .sort(
      (a, b) =>
        b.gpa - a.gpa ||
        a.fullName
          .split(" ")[1][0]
          .localeCompare(b.fullName.split(" ")[1][0]) ||
        a.age - b.age
    )
    .map(({ fullName }) => fullName)
    .join(",");
}

console.log(
  // "John Doe,John Smith,John Evans"
  sort([
    { fullName: "John Evans", age: 23, gpa: 3.9 },
    { fullName: "John Smith", age: 23, gpa: 3.4 },
    { fullName: "John Doe", age: 22, gpa: 3.7 },
  ])
);
