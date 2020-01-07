"use strict";

console.log("loading js script");

// +++++++++++ handleClick function ++++++++++++++

// pigAudio.addEventListener("click", pigAudio);

// function pigAudio() {
//   var pigAudio = document.getElementById("pigAudio");
//   pigAudio.play();
// }

function handleClick() {
  console.log("I am inside the handleClick");
  var myInput = document.getElementById("word");
  let word = myInput.value;
  console.log("word :", word);

  let translation = pigLatin(word);
  console.log("translation", translation);

  let translateWord = document.getElementById("translateWord");
  translateWord.innerText = translation;
  console.log(" I am at the end of handleClick");
}

// +++++++++++ pigLatin function ++++++++++++++

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function pigLatin(word) {
  word = word.toLowerCase();
  let firstVowel = findFirstVowel(word);

  console.log("==========================");

  if (firstVowel > 0) {
    return word.substring(firstVowel) + word.substring(0, firstVowel) + "ay";
  } else {
    return word + "way";
  }
}

function getPrompt() {
  console.log("==========================");
  rl.question("Original Word : ", answer => {
    console.log("Translate Word :", pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "way" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggway");
      assert.equal(pigLatin("emission"), "emissionway");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
