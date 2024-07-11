// Create a function that performs a deep comparison between two arrays of objects, checking for equality of nested properties.
// const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 3, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// // console.log(deepEqualArrays(array1, array2));
// output: true
// ......................................................................................

// const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// // console.log(deepEqualArrays(array1, array2));
// output: falseI

const deepEqualArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i]))
      return false;
  }
  return true;
};

const array1 = [
  {
    id: 1,
    name: "Alice",
    details: { age: 30, city: "New York" },
  },
  {
    id: 2,
    name: "Bob",
    details: { age: 25, city: "Los Angeles" },
  },
];

const array2 = [
  {
    id: 1,
    name: "Alice",
    details: { age: 30, city: "New York" },
  },
  {
    id: 2,
    name: "Bob",
    details: { age: 25, city: "Los Angeles" },
  },
];

console.log(deepEqualArrays(array1, array2)); // true
