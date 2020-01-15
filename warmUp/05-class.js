// make a class that represents an address
// make a class that represents a driver's license

// address has line1
// address has city, state, zip

// DL has:
//  - name,
//  - address,
//  - number

class Address {
  constructor(iLine1, iCity, iState, iZip) {
    this.line1 = iLine1;
    this.city = iCity;
    this.state = iState;
    this.zip = iZip;
  }

  generateString() {
    return `${this.line1}, ${this.city}, ${this.state}, ${this.zip}`;
  }
}

class DL {
  constructor(iName, iNumber) {
    this.name = iName;
    this.number = iNumber;
    this.address = new Address("1234 Main Street", "Austin", "TX", "78704");
  }
  // method that updates the address for a DL
  // method should take in an Address;
  // method should call updateAddress;
  updateAddess(someAddress) {
    this.address = someAddress;
  }
}

let school = new Address("314 Highland Blvd", "Austin", "TX", "78752");
let d1 = new DL("John Doe", "145728");

// console.log(school.generateString());
console.log(`${d1.name} lives at: ${d1.address.generateString()}`);
