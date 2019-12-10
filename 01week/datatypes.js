//Write a Javascript program display the current date and time.

let currentDate = new Date();
console.log("The current date and time is", currentDate);

//Write a JavaScript program to convert a number to a string.
var num = 15;
var n = num.toString();
console.log("The number is", num);
console.log("The string representing the number is", n);

//Write a JavaScript program to convert a string to the number.
var name = "John Doe";
var age = 12;
var isMale = true;

console.log("The name variable is a", typeof name);
console.log("The age variable is a", typeof age);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
console.log(17 === 17);
// Null
let d = null;

console.log(d);

// Undefined
const u = undefined;

console.log(u);

// Number
const c = 8;

console.log(c + " is a number");

// NaN
const t = 5;

console.log(u + t);

// String
const s = "This is a string";

console.log(s);

// Write a JavaScript program that adds 2 numbers together.
var num1 = 3;
var num2 = 5;

console.log(num1 + num2);

// Write a JavaScript program that runs only when 2 things are true.
let f = 8;
let g = 2;

if (f > g) {
  console.log(true);
}

// Write a JavaScript program that runs when 1 of 2 things are true.
let h = 8;
let i = 2;

if (h < i) {
  console.log(h + "is less than " + i + "= False");
} else if (h > i) {
  console.log(h + " is greater than " + i + " = True");
}

// Write a JavaScript program that runs when both things are not true.
let p = 9;
let o = 10;

if (p > o) {
  console.log(p + " is greater than " + o);
} else if (p === o) {
  console.log(p + " is equal to " + o);
} else {
  console.log("Both things are not true");
}
