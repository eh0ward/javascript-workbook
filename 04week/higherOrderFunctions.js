"use strict";

// function print(element, index) {
//   console.log(` ${element} is at index ${index}`);
// }

// function writeLetter(element, index) {
//   console.log(` Hi ${element},
//     It was nice meeting you.
//     `);
// }

// let array1 = ["Jack", "Kate", "John"];

// array1.forEach(print);
// array1.forEach(writeLetter);

// function exactMatches(array1, array2){
//     return numExact;
// }

// function fuzzyMatches(array1, array2){
//     return numFuzzy;
// }

function exactMatches(s1, s2) {
  return numExact;
}

function fuzzyMatches(s1, s2) {
  return numExact;
}

// let a1 = ["a", "b", "c", "d"];

let soln = "abcd";
let guess = "aabb";

console.log(exactMatches(soln, guess));
console.log(fuzzyMatches(soln, guess));
