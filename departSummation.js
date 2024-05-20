const employees = [
  { name: "Alice", age: 30, department: "Engineering" },
  { name: "Bob", age: 25, department: "Marketing" },
  { name: "Charlie", age: 35, department: "Engineering" },
  { name: "David", age: 40, department: "HR" },
  { name: "Eve", age: 28, department: "Marketing" },
];

const departments = (employees) => {
  const department = new Set(
    employees.map((employee) => employee.department)
  );
  let res = {};
  department.forEach((depart) => {
    res[depart] = employees.reduce((acc, person) => {
      let { department, age } = person;
      console.log(age);
      if (depart === department) {
        acc += age;
      }
      return acc;
    }, 0);
  });
  return res;
};

console.log(departments(employees));
