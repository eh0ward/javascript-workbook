"use strict";

console.log("loading js script");

// +++++++++++ handleClick function ++++++++++++++

// const video = document.querySelector("#myVideo");
// video.play();
// video.currentTime = 0;

// const video = document.querySelector("#myVideo");
// video.pause();
// video.currentTime = 6;

var vid = document.getElementById("myVideo");
function playVid() {
  vid.play();
}

// var vid = document.getElementById("myVideo");
// function pauseVid() {
//   vid.pause();
// }

function handleClick() {
  // let audio = new Audio("audio/snortingPig.mp3");
  // audio.play();
  // let vid = document.getElementById("playVideo");
  // vid.onplay = function () {
  //   alert("The Video Will Play");
  // };

  var myInput = document.getElementById("word");
  let word = myInput.value;
  console.log("word :", word);

  let translation = pigLatin(word);
  console.log("translation", translation);

  let translateWord = document.getElementById("translateWord");
  translateWord.innerText = translation;
}

// +++++++++++ pigLatin function ++++++++++++++

// Find First Vowel

function findFirstVowel(word) {
  const vowel = ["a", "e", "i", "o", "u"];
  console.log("=====Find First Vowel=====");

  for (let j = 0; j < word.length; j++) {
    var firstVowel = vowel.indexOf(word[j]);

    console.log(firstVowel);

    if (vowel.indexOf(word[j]) !== -1) {
      return j;
    }
  }
}

// Translate

function pigLatin(word) {
  word = word.toLowerCase();
  let firstVowel = findFirstVowel(word);

  if (firstVowel > 0) {
    return word.substring(firstVowel) + word.substring(0, firstVowel) + "ay";
  } else {
    return word + "yay";
  }
}
