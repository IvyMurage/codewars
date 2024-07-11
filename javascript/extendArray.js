let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 3];
let diff = array1.length - array2.length;

for (let i = 0; i < diff; i++) {
  array2.push(array2[i]);
}

console.log(array2);
console.log(Array.from({ length: 6 }).map((_, i) => (i + 1) * 2));
