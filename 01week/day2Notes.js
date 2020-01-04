// this function takes in 2 inputs
// x: the first number to add
// y: the second number to add
// returns the sum of the first and second numbers
function sum1(x, y) {
  //creates a new variable z, that is the sum of the x and y passed in
  let z = x + y;
  //return the computed sum 'z'
  return z;
}

let sum2 = function(a, b, c) {
  let ab = a + b;
  console.log("the sum of the first 2 numbers is ", ab);

  let abc = ab + c;
  console.log("the sum for all 3 numbers is ", abc);
  return abc;
};

let sum3 = (l, m, n, o, p) => {
  let lm = sum1(l, m);
  let nop = sum2(n, o, p);
  let finalSum = sum1(lm, nop);
  return finalSum;
};

console.log(sum3(1, 1, 2, 3, 5));

//let myVariable = sum(12,13);
//console.log("The sum of 12 and 13 is", myVariable);

//sum2(15,2,4);

function foo() {
  console.log("I am foo");
}

function bar(a, b, c) {
  console.log("I am a bar");
  console.log("the first input is", a);
  console.log("the second input is", b);
  console.log("the third input is", c);
}

foo();

bar(1, 2);
bar("Hello");
bar("hi", "there", "friend");

bar();

let x = 110;

if (x > 100) {
  console.log("You made above 100");
} else {
  console.log("You did not make over 100");
}

console.log("Program over");
