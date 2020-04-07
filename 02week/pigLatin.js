"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// FIND THE FIRST VOWEL ++++++++

function findFirstVowel(word) {
  const vowel = ["a", "e", "i", "o", "u"];
  for (let j = 0; j < word.length; j++) {
    if (vowel.indexOf(word[j]) !== -1) {
      return j;
    }
  }
}

// PIGLATIN FUNCTION +++++++++++
console.log("---- PIG LATIN ----");

function pigLatin(word) {
  word = word.toLowerCase().trim();
  let firstVowel = findFirstVowel(word);

  if (firstVowel > 0) {
    return word.substring(firstVowel) + word.substring(0, firstVowel) + "ay";
  } else {
    return word + "yay";
  }
}
// console.log(pigLatin(""));

function getPrompt() {
  rl.question("Original Word : ", answer => {
    console.log("Translate Word :", pigLatin(answer.toLowerCase().trim()));
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
    it("should separate two words and return them together", () => {
      assert.equal(pigLatin("Hop Fest"), "Ophay" + " " + "Estfay");
      assert.equal(pigLatin("Dog Park"), "Ogday" + " " + "Arkpay");
    });
    it('should separate two words and return them together should attach "yay" if word begins with vowel', () => {
      assert.equal(
        pigLatin("Immediate Advantage "),
        "Immediateyay" + " " + "Advantageyay"
      );
      assert.equal(pigLatin("Eating Out"), "Eatingyay" + " " + "Outyay");
    });
  });
} else {
  getPrompt();
}
