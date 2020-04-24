"use strict";

// vehicle simulation
// want a class to represent our vehicle
// vehicle should have some attributes
// one of them should be mpg attribute

// we should be able to add gas to vehicle
// we should be able to drive for a certain amount of miles
// we should be able to query it for the range left

class Vehicle {
  constructor(mpg, color, engineType, gasTankCapacity) {
    this.color = color;
    this.engineType = engineType;
    this.mpg = mpg;
    this.gasTankCapacity = gasTankCapacity; // holds the max cap of our gas
    this.fuelLevel = 0; // holds the current fuel level
    this.miles = 0;
  }

  // gallons: number of gallons to add to tank
  fuelUp(gallons) {
    this.fuelLevel = this.fuelLevel + gallons;

    if (this.fuelLevel > this.gasTankCapacity) {
      this.fuelLevel = this.gasTankCapacity;
    } else if (this.fuelLevel < 0) {
      this.fuelLevel = 0;
    }
  }

  // the num of miles you are driving
  // want to update the fuel level based on the num of miles driven
  drive(miles) {
    // distance/mpg gives us the amount of gas consumed
    // know that I have the amount of gas consumed, I can subtract it from the fuel level

    let gallonsConsumed = miles / this.mpg;
    this.fuelLevel = this.fuelLevel - gallonsConsumed;
    if (this.fuelLevel < 0) {
      this.fuelLevel = 0;
    }
  }
}

let myJeep = new Vehicle(15, "Blue", "5.3 liter", 24);
myJeep.fuelUp(10); // add 1 gallons
myJeep.drive(20); // let us drive 30 miles

console.log(myJeep.fuelLevel); // fuel level should be 8 gallons
myJeep.fuelUp(40);
console.log(myJeep.fuelLevel);
