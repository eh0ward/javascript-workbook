"use strict";

console.log("loading js script");

// +++++++++++ handleClick function ++++++++++++++

// will play video when "submit" is clicked
var vid = document.getElementById("myVideo");
function playVid() {
  vid.play();
}

function handleClick() {
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
