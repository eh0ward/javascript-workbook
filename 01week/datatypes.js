"use strict";

console.log("hello");

//Write a Javascript program display the current date and time.
console.log("");
console.log("-------------------------------");
console.log("The Date and Time");
console.log("");

let myDate = new Date();

console.log("the current date and time is", myDate);

//Write a JavaScript program to convert a number to a string.
console.log("");
console.log("-------------------------------");
console.log("Converts A Number To A String:");
console.log("");

let age = 40;
let thisMany = age.toString();

console.log("Age:", age);
console.log("Eric is", thisMany, "years old");

//Write a JavaScript program to convert a string to the number.
console.log("");
console.log("-------------------------------");
console.log("Converts A String To The Number:");
console.log("");

let name = "Eric Howard";
let eH = name.toString();
let string = age;

console.log(eH, "age is", string);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
console.log("");
console.log("-------------------------------");
console.log("Writing A Boolean:");
console.log("");

console.log(17 === 17);

// Null
console.log("");
console.log("-------------------------------");
console.log("Null:");
console.log("");

let a = null;

console.log(a);

// Undefined
console.log("");
console.log("-------------------------------");
console.log("Undefined:");
console.log("");

const u = undefined;

console.log(u);

// Number
console.log("");
console.log("-------------------------------");
console.log("A Number:");
console.log("");

const b = 8;

console.log(b, "is a number");

// NaN
console.log("");
console.log("-------------------------------");
console.log("NaN:");
console.log("");

let z = 5;

console.log(u + z);

// String
console.log("");
console.log("-------------------------------");
console.log("A String:");
console.log("");

const s = "This is a string";

console.log(s);

// Write a JavaScript program that adds 2 numbers together.
console.log("");
console.log("-------------------------------");
console.log("Add 2 Number Together:");
console.log("");

let num1 = 2036;
let num2 = 1000;

console.log("2036 + 1000 =", num1 + num2);

// Write a JavaScript program that runs only when 2 things are true.
console.log("");
console.log("-------------------------------");
console.log("Runs Only When 2 Things Are True:");
console.log("");

let d = 8;
let e = 2;
let k = 1;
let t = true;

if (d > e && d * k === 8) {
  console.log("Both conditions are", t);
} else {
  console.log("false");
}

// Write a JavaScript program that runs when 1 of 2 things are true.
console.log("");
console.log("-------------------------------");
console.log("Runs When 1 of 2 Things Are True:");
console.log("");

let g = 17;
let h = 3;

if (g < h || g <= g) {
  console.log("1 0f 2 Conditions", t);
} else {
  console.log("false");
}

// Write a JavaScript program that runs when both things are not true.
console.log("");
console.log("-------------------------------");
console.log("Runs When Both Things Are NOT True:");
console.log("");

let i = 9;
let j = 10;
let f = false;

if (i > j) {
  console.log(i, "is greater than", j);
} else if (i === j) {
  console.log(i, "is equal to", j);
} else {
  console.log("Both conditions are", f);
}

console.log("-------------------------------");
console.log("");

// +++++ PART TWO - THE DOM +++++

// get the span from the page/document
// let mySpan = document.getElementById("theTime");
// change what the inner text of the span says
// mySpan.innerText = myDate.toString();

// let mySpan = document.getElementById("theTime");
// mySpan.addEventListener("click", function() {
//   mySpan.innerText = myDate.toString();
// });
