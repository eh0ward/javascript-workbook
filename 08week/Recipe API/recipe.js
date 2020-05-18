"use strict";

// Fetch multiple users on window load.
window.onload = function () {
  console.log("Window Loaded");

  fetchRecipes();
};

// Fetch a new user multiple times and store them in an array.
function fetchRecipes() {
  console.log("Inside fetch recipes");
  console.log("About to use fetch to get recipes");

  // Figure out how to fetch multiple users in one fetch requests
  fetch(
    "https://api.spoonacular.com/recipes/search?query&apiKey=104b048b91d144b0b0b60fbdcf9ee9c9"
  )
    .then(function (response) {
      console.log("Processing response");
      return response.json();
    })

    .then(function (json) {
      console.log("Processing json payload = ", json);

      displayRecipes(json.results);
    });
}
// Then list out all the users in your address book array by name and picture.
function displayRecipes(recipeList) {
  //   contactList.map(function (user) {
  recipeList.forEach(function (results) {
    console.log("Processing contacts");

    let ul = document.getElementById("recipes");
    let li = document.createElement("li");

    // User
    li.innerText = results.sourceURL;
    ul.appendChild(li);

    // // Thumbnail
    // let thumbnailPic = document.createElement("img");
    // thumbnailPic.classList.add("thumbnail");
    // thumbnailPic.setAttribute("src", user.picture.thumbnail);
    // ul.appendChild(thumbnailPic);

    // Add a button to each user that when clicked
    // displays the rest of their information like DOB, address, profile image, and so forth.
    let button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "Contact Info";

    // Add an event listener to display contact's info under "Contact Info"
    button.addEventListener("click", function showInfo() {
      let ulInfo = document.getElementById("info");

      // Create list elements to append under "Contact Info":

      //     // Name
      //     let liName = document.createElement("li");
      //     liName.innerText = user.name.first + " " + user.name.last + " ";
      //     ulInfo.appendChild(liName);

      //     // Home phone number
      //     let liHomePhone = document.createElement("li");
      //     liHomePhone.innerText = "Home: " + user.phone;
      //     ulInfo.appendChild(liHomePhone);

      //     // Cell number
      //     let liCellPhone = document.createElement("li");
      //     liCellPhone.innerText = "Cell: " + user.cell;
      //     ulInfo.appendChild(liCellPhone);

      //     // Email
      //     let liEmail = document.createElement("li");
      //     liEmail.innerText = "Email: " + user.email;
      //     ulInfo.appendChild(liEmail);

      //     // Birthday
      //     //   let birthday = user.dob.date;
      //     let liDOB = document.createElement("li");
      //     liDOB.innerText = "Birthday: " + user.dob.date;
      //     ulInfo.appendChild(liDOB);

      //     //   Profile picture
      //     let profilePic = document.createElement("img");
      //     profilePic.classList.add("profilePic");
      //     profilePic.setAttribute("src", user.picture.large);
      //     ulInfo.append(profilePic);
    });
  });
}
