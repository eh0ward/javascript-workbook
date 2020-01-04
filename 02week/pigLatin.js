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

// function pigLatin(word) {
//   // Your code here
//   return (
//     word.slice(findFirstVowel(word), word.length) +
//     word.slice(-word.length, findFirstVowel(word)) +
//     "ay"
// word.slice(word.length, findFirstVowel(word)) + "way"
//   );
// }

// function pigLatin(word) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let vowelIndex = 0;

//   if (vowels.indexOf(word[0])) {
//     return word + "way";
//   } else {
//     for (let char of str) {
//       // Loop through until the first vowel is found
//       if (vowels.includes(char)) {
//         // Store the index at which the first vowel exists
//         vowelIndex = str.indexOf(char);
//         break;
//       }
//     }
//     return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
//   }
// }

// function pigLatin(word) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let vowelIndex = 0;

//   if (vowels.indexOf(word[0])) {
//     return word + "way";
//   } else {
//     for (let char of word) {
//       if (vowels.indexOf(word[j]) !== -1) {
//         vowelIndex = word.indexOf(j);
//       }
//     }
//     return (
//       word.slice(vowelIndex(word), word.length) +
//       word.slice(0, vowelIndex(word)) +
//       "ay"
//     );
//   }
// }

// function pigLatin(word) {
//   var vowels = ["a", "e", "i", "o", "u"];

//   for (var j = 0; j <= word.length - 1; j++) {
//     if (vowels.indexOf(word[j]) !== -1) {
//       return j;
//     }
//   }
//   return word.length + "ay";
// }

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
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
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
