// Given an array of numbers, raise each number by the power of 2 and return the sum of all the numbers that are evenly divisible by 4.

const arr1 = [1, 5, 10, 4, 2];

// let arr2 = arr1.map(function(e) {
//   return e * e;
// });

// or

let arr2 = arr1.map(e => {
  return e * e;
});

// or

// let arr2 = arr1.map(e => e * e);

console.log(arr2);

let arr3 = arr2.filter(e => {
  if (e % 4 == 0) return true;
});

console.log(arr3);

let arr4 = arr3.reduce(function(p, e) {
  return p + e;
});

console.log(arr4);
