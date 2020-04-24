"use strict";

console.log("-------------------");
console.log("loops.js start");
console.log("-------------------");
console.log(
  "1. Use a do...while loop to console.log the numbers from 1 to 1000."
);

let result = "";
let j = 0;

do {
  j = j + 1;
  result = result + j;
} while (j < 1000);

console.log(result);

console.log("-------------------");
console.log(
  "2. Create an object (an array with keys and values) called person with the following data:"
);

const person = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  },
];

console.log(person);

console.log("-------------------");
console.log(
  "3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number."
);

// const loopOverBirthDate = (person) => {
//   let birthYear = person.birthDate;
//   for (birthYear in person) {
//     if (birthYear % 2 !== 0);
//     console.log(birthYear);
//   }
// };

// loopOverBirthDate(person);

// +++ same result as above, but without loopOver func +++
// +++ still can't get it, need help! +++
for (const birthDate in person) {
  if (birthDate % 2 == 0) console.log(birthDate);
}

// +++ mnd example +++
// var obj = { a: 1, b: 2, c: 3 };

// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }

console.log("-------------------");
console.log(
  "4. Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database."
);

const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  },
  {
    firstName: "Eric",
    lastName: "Howard",
    birthDate: "Nov 12, 1979",
    gender: "male",
  },
  {
    firstName: "Fanco",
    lastName: "Howard",
    birthDate: "Jun 13, 2018",
    gender: "male dog",
  },
];

console.log(arrayOfPersons);

console.log("-------------------");
console.log(
  "5. Use .map() to map over the arrayOfPersons and console.log() their information."
);

let mapArr = arrayOfPersons.map((friends) => console.log(friends));

console.log("-------------------");
console.log(
  "6. Use .filter() to filter the persons array and console.log only males in the array."
);

let genderFilter = arrayOfPersons.filter((obj) => obj.gender === "male");

console.log(genderFilter);

// +++ only returns true/ false +++
// let genderFilter = arrayOfPersons.filter(function (person) {
//   console.log(person.gender === "male");
// });

console.log("-------------------");
console.log(
  "7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990."
);

let bdayBefore1990 = arrayOfPersons.filter(function (date) {
  let birthDateArr = date.birthDate.split(" ");
  if (birthDateArr[2] < 1990) {
    return true;
  }
});

console.log(bdayBefore1990);

console.log("-------------------");
console.log("loops.js complete");
console.log("-------------------");
