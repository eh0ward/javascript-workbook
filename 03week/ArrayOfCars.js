console.log("==================================");
console.log("1. length of the array");
console.log("  ");
// 1. length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
// Console.log the length of the array.

const cars = ["Ford", "Chevy", "Mitsubshi", "Audi"];
console.log(cars.length);

console.log("==================================");
console.log("2. concat method");
console.log("  ");
// 2.concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.

const moreCars = ["BMW", "Toyota", "Mercedes", "Honda"];

totalCars = cars.concat(moreCars);
console.log(totalCars);

// +++ OR you can use this concat method...

// totalCars = [].concat(carsArray, moreCars);
// console.log(totalCars);

console.log("==================================");
console.log("3. indexOf and lastIndexOf");
console.log("  ");
// 3. indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Ford.
// Use the lastIndexOf method to console.log the index of Honda.

console.log("indexOf:");
console.log(totalCars.indexOf("Ford"));

console.log("lastIndexOf:");
console.log(totalCars.lastIndexOf("Honda"));

console.log("==================================");
console.log("4. join");
console.log(" ");
// 4. join
// Use the join method to covert the array totalCars into a string called stringOfCars.

const stringOfCars = totalCars.join(", ");
console.log(stringOfCars);

console.log("==================================");
console.log("5. split");
console.log(" ");
// 5. split
// Use the split method to convert stringOfCars back intro an array called totalCars.

totalCars = stringOfCars.split(", ");
console.log(totalCars);

console.log("==================================");
console.log("6. reverse");
console.log(" ");
// 6. reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

console.log("==================================");
console.log("7. sort");
console.log(" ");
// 7. sort
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));

// alert(carsInReverse.indexOf("Audi"));

carsInReverse.sort();
console.log(carsInReverse);

console.log("==================================");
console.log("8. slice");
console.log(" ");
// 8. slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.

const removedCars = carsInReverse.slice(3, 5);
console.log(removedCars);

console.log("==================================");
console.log("9. splice");
console.log(" ");
// 9. splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.

carsInReverse.splice(1, 2, "Ford", "Honda");

console.log(carsInReverse);

console.log("==================================");
console.log("10. push");
console.log(" ");
// 10. push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.

carsInReverse.push("BMW", "Chevy");
console.log(carsInReverse);

console.log("==================================");
console.log("11. pop");
console.log(" ");
// 11. pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.

const deletedCars = carsInReverse.pop();
console.log(deletedCars);

console.log("==================================");
console.log("12. shift");
console.log(" ");
// 12. shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.

const newFirstCar = carsInReverse.shift();
console.log(newFirstCar);

console.log("==================================");
console.log("13. unshift");
console.log(" ");
// 13. unshift
// Use the unshift method to add a new type of car to the array carsInReverse.

carsInReverse.unshift("Alfa Romeo");
console.log(carsInReverse);

console.log("==================================");
console.log("14. forEach");
console.log(" ");
// 14. forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const numbers = [23, 45, 0, 2];
numbers.forEach((item, index) => {
  numbers[index] = item + 2;
});
console.log(numbers);
