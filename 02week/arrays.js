let groceryList = ["bananas", "apple", "beef", "spinach", "eggs"];

function myFunc(value, index) {
  console.log(value);
}

groceryList.forEach(myFunc);

// SCOPE

let x = 7;

function myFunc1(x) {
  console.log(x);
}

myFunc1(12);
console.log(x);

let corey = {
  name: "corey",
  height: "72",
  born: "Kansas City",
  isMale: true
};

console.log(corey);
console.log(corey.height);

function describe(person) {
  console.log(
    `${person.name} is a nice ${person.isMale ? "guy" : "gal"} who is ${
      person.height
    } inches tall and was born in ${person.born}.`
  );
}

describe(corey);

// method of indexOf
// let word = "fox";

// let indexOf_o = word.indexOf("o");
// let indexOf_x = word.indexOf("x");

// console.log(indexOf_o, "o");

let word = "elephant";

let firstHalf = word.substring(3, 5);
let secondHalf = word.substring(2);

console.log("first half = ", firstHalf);
console.log("second half = ", secondHalf);
