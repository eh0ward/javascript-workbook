"use strict";

console.log("loading js script");

// document
//   .getElementById("translateWord")
//   .addEventListener("mouseover", function() {
//     console.log("the word is hovered over");
//   });

let inputElement = document.getElementById("word");
inputElement.addEventListener("keyup", function() {
  let value = document.getElementById("word").value;
  console.log(value.length);
  let span = document.getElementById("translateWord");
  span.innerText = value.length;
});

function handleClick() {
  console.log("I am inside the handleClick");
  // get the word
  var myInput = document.getElementById("word");
  let word = myInput.value;
  console.log("word :", word);

  // translate the word
  let translation = pigLatin(word);
  console.log("translation", translation);

  // update the span
  let translateWord = document.getElementById("translateWord");
  translateWord.innerText = translation;
  console.log(" I am at the end of handleClick");
}

function pigLatin(word) {
  // did some majic
  return word + "ay";
}
