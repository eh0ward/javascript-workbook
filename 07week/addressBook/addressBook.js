"use strict";

// Fetch multiple users on window load.
window.onload = function () {
  console.log("Window Loaded");

  fetchContacts();
};

// Use the api: https://randomuser.me/api/ to fetch a user.
// Fetch a new user multiple times and store them in an array.
function fetchContacts() {
  console.log("Inside fetch contacts");
  console.log("About to use fetch to get contatcs");

  // Figure out how to fetch multiple users in one fetch requests
  fetch("https://randomuser.me/api/?results=10")
    .then(function (response) {
      console.log("Processing response");
      return response.json();
    })

    .then(function (json) {
      console.log("Processing json payload = ", json);

      displayContacts(json.results);
    });
}

// Then list out all the users in your address book array by name and picture.
function displayContacts(contactList) {
  //   contactList.map(function (user) {
  contactList.forEach(function (user) {
    console.log("Processing contacts");

    let ul = document.getElementById("contacts");
    let li = document.createElement("li");

    li.innerText = user.name.first + " " + user.name.last + " ";
    ul.appendChild(li);

    let pic = document.createElement("img");
    pic.classList.add("thumbnail");
    pic.setAttribute("src", user.picture.large);
    ul.appendChild(pic);

    // Create button
    let button = document.createElement("button");
    button.innerText = "Contact Info";

    // Add an event listener to display contact's info under "Contact Info"
    button.addEventListener("click", function showInfo() {
      let ulInfo = document.getElementById("info");

      // Create list elements to append under "Contact Info":

      // Name
      let liName = document.createElement("li");
      liName.innerText = user.name.first + " " + user.name.last + " ";
      ulInfo.appendChild(liName);

      // Home phone number
      let liHomePhone = document.createElement("li");
      liHomePhone.innerText = "Home: " + user.phone;
      ulInfo.appendChild(liHomePhone);

      // Cell number
      let liCellPhone = document.createElement("li");
      liCellPhone.innerText = "Cell: " + user.cell;
      ulInfo.appendChild(liCellPhone);

      // Email
      let liEmail = document.createElement("li");
      liEmail.innerText = "Email: " + user.email;
      ulInfo.appendChild(liEmail);

      // Birthday
      //   let birthday = user.dob.date;
      let liDOB = document.createElement("li");
      liDOB.innerText = "Birthday: " + user.dob.date;
      ulInfo.appendChild(liDOB);

      //   Profile picture
      pic = document.createElement("img");
      pic.classList.add("profilePic");
      pic.setAttribute("src", user.picture.large);
      ulInfo.append(pic);
    });

    // Add a button to each user that when clicked
    // displays the rest of their information like DOB, address, profile image, and so forth.
    li.appendChild(button);
  });
}
