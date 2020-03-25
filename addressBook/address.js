console.log("In address.js");

window.onload = function() {
  console.log("inside window.onload");
  fetchUsers();
};

function fetchUsers() {
  console.log("About to call api");
  fetch("https://randomuser.me/api/?results=1")
    .then(function(response) {
      console.log("processing the response", response);
      // do something with the response once I get it
      return response.json();
    })
    .then(function(myJson) {
      //   do something with the json payload
      console.log("process json payload", myJson);
      processUsers(myJson.results);
    });
}

// function fetchUsers() {
//   console.log("About to call api");
//   fetch(
//     "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1"
//   )
//     .then(function(response) {
//       console.log("processing the response", response);
//       // do something with the response once I get it
//       return response.json();
//     })
//     .then(function(myJson) {
//       //   do something with the json payload
//       console.log("process json payload", myJson);
//       processUsers(myJson.results);
//     });
// }

function processUsers(listOfUsers) {
  listOfUsers.forEach(function(user) {
    console.log("Process a single user", user);
    // let myUl = document.getElementById("contacts");
    // let anLi = document.createElement("li");
  });
}

// let arrayOfUsers;

// const newUser = () => {
//   fetch("https://randomuser.me/api/")
//   .then(function(result) {
//       return result.json()
//   } .then(function(randomUser) {
//       arrayOfUsers =
//       console.log(randomUser);
//       display(randomUser)
//   }
//     // .then(res => res.json())
//     // .then(user => (arrayOfUsers = user));
// };

// const consoleUsers = () => {
//   console.log(arrayOfUsers);
// };
