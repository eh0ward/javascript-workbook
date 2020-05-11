"use strict";

console.log("Loading script.js file");

window.onload = function () {
  console.log("window loaded");
  getPosts();
};

let getPosts = function () {
  console.log("Inside the posts method, about to make a fetch request");
  let fetchPromise = fetch("http://jsonplaceholder.typicode.com/posts");

  let dataPromise = fetchPromise.then(function (response) {
    console.log("Fetch is done! response = ", response);
    return response.json();
  });

  dataPromise.then(function (data) {
    console.log("Got my data! data.length = ", data.length);
    data.forEach(updateHtml);
  });

  console.log("Request sent off...");
};

let updateHtml = function (post) {
  console.log("Updating the html for post = ", post);
  let postsUl = document.getElementById("posts");

  let postLi = document.createElement("li");
  postLi.innerText = post.title;
  postsUl.appendChild(postLi);

  let userId = post.userId;
  let userSpan = document.createElement("span");
  userSpan.innerText = "   - by" + userId;
  postLi.append(userSpan);

  fetch("http://jsonplaceholder.typicode.com/users/" + userId)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fetchedUsers[userId] = data;
      userSpan.innerText = "   - by " + data.name;
    });
};
