"use strict";
console.log("DOM TEST");

// when the add button gets clicked
// append the text to the buttom of the list

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  console.log("clicked the add button");
  // read the value from the input box
  let inputElement = document.getElementById("inputText");
  let todoText = inputElement.value;
  inputElement.value = "";

  // create an li element
  let li = document.createElement("li");

  // creat a span element
  let span = document.createElement("span");
  // update the inner text of the span element
  span.innerText = todoText;

  // create a delet button
  let deleteButton = document.createElement("button");
  // update the inner text of the delete button
  deleteButton.innerText = "delete";
  // add a class to the delete button
  deleteButton.classList.add("delete");

  // add the li to the button of the ul element
  let ul = document.querySelector("ul");
  ul.appendChild(li);

  // add the span and the delete button as children of the newly created li
  li.appendChild(span);
  setupSpanEvent(span);
  li.appendChild(deleteButton);
  setupDeleteEvent(deleteButton);
});

// when a delete button gets clicked
// delete its parent list item

let allDeletes = document.querySelectorAll(".delete");
for (let i = 0; i < allDeletes.length; i++) {
  let deleteButton = allDeletes[i];
  setupDeleteEvent(deleteButton);
}

function setupDeleteEvent(deleteButton) {
  deleteButton.addEventListener("click", function () {
    console.log("delete got clicked, parent li is", deleteButton.parentElement);
    let parentLi = deleteButton.parentElement;
    parentLi.remove();
    // let parentUl = parentLi.parentElement;
    // console.log("the parent UL", parentUl);
    // parentUl.removeChild(parentLi);
  });
}

// when the span is clicked
// class done should be added to it

let allSpans = document.querySelectorAll("span");
//   console.log("all spans:", allSpans);
for (let i = 0; i < allSpans.length; i++) {
  let span = allSpans[i];
  setupSpanEvent(span);
}

// this function adds the click event to the span

function setupSpanEvent(span) {
  span.addEventListener("click", function () {
    console.log("this span got clicked", span);
    span.classList.toggle("done");
  });
}
