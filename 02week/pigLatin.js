"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// if word starts with a vowel add 'yay' to the end.
// if it has a vowel in the middle.
//  - split the word in 2 at the vowel
//  - swap the parts
//  - add 'ay' to the end

// FIND THE FIRST VOWEL ++++++++

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

// PIGLATIN FUNCTION +++++++++++

function pigLatin(word) {
  word = word.toLowerCase();
  let firstVowel = findFirstVowel(word);

  console.log("==========================");

  if (firstVowel > 0) {
    return word.substring(firstVowel) + word.substring(0, firstVowel) + "ay";
  } else {
    return word + "yay";
  }
}

function getPrompt() {
  console.log("==========================");
  rl.question("Original Word : ", answer => {
    console.log("Translate Word :", pigLatin(answer));
    getPrompt();
  });
}

// Tests +++++++++++++++++++++++

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
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
    it("should seperate two words and return them together", () => {
      assert.equal(pigLatin("Hop Fest"), "Ophay", "Estfay");
      assert.equal(pigLatin("Dog Park"), "Ogday", "Arkpay");
    });
    it('should seperate two words and return them together should attach "yay" if word begins with vowel', () => {
      assert.equal(
        pigLatin("Immediate Advantage "),
        "Immediateyay",
        "Advantageyay"
      );
      assert.equal(pigLatin("Eating Out"), "Eatingyay", "Outyay");
    });
  });
} else {
  getPrompt();
}
