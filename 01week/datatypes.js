"use strict";

console.log("hello");

// +++++ PART ONE - PROGRAMS +++++

//Write a Javascript program display the current date and time.
console.log("");
console.log("-------------------------------");
console.log("The Date and Time");
console.log("");

let myDate = new Date();

console.log("the current date and time is:", myDate);

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

let isMale;

console.log("variable 'isMale', is:", isMale);

// OR AS A FUNCTION
console.log("");
console.log("Standard object example:");
function object(t) {
  if (t === undefined) {
    return "Object has an undefined value!";
  }
  return t;
}

let z;

console.log(object(z));

// Number
console.log("");
console.log("-------------------------------");
console.log("A Number:");
console.log("");

let b = 8;

console.log(b, "is a number");

// NaN
console.log("");
console.log("-------------------------------");
console.log("NaN:");
console.log("");

let u = undefined;
let y = 5;

console.log(u + y);

// let newArray = [1, 2, 3, 4];
// let arraySum = 0;

// arraySum += newArray * 2;

// String
console.log("");
console.log("-------------------------------");
console.log("A String:");
console.log("");

let s = "This is a string";

console.log(s);

// Write a JavaScript program that adds 2 numbers together.
console.log("");
console.log("-------------------------------");
console.log("Add 2 Number Together:");
console.log("");

let num1 = 2036;
let num2 = 1000;
let sum = num1 + num2;

console.log("2036 + 1000 =", sum);

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

// +++  get the span from the page/document
// let dateSpan = document.getElementById("theTime");
// +++ change what the inner text of the span says
// dateSpan.innerText = myDate.toString();

let dateSpan = document.getElementById("theTime");
dateSpan.addEventListener("click", function() {
  dateSpan.innerText = myDate.toString();
});

let ageSpan = document.getElementById("myAge");
ageSpan.addEventListener("click", function() {
  ageSpan.innerText = thisMany.toString();
});

let sumSpan = document.getElementById("sum");
sumSpan.addEventListener("click", function() {
  sumSpan.innerText = sum.toString();
});
