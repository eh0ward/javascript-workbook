// 03week Thursday warmUp - longestWord.js
// Write a function that finds the longest word in a sentence.

// 1. Let the first be your choice.
// 2. Compare your choice to the next available word.
// 3. Update your choice to be whichever is longer.
// 4. Repeat #2 and #3 until you run out of words.
// 5. Your choice is the longest word.

function findLongest(sentence) {
  let words = sentence.split(" ");
  console.log("Sentence: ", sentence);
  console.log("words: ", words);

  let longest = words[0];

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length > longest.length) {
      longest = currentWord;
    }
  }

  return longest;
}

function handleClick() {
  // 1. get the sentence from the page
  // you want to get the entire element
  let textAreaElement = document.getElementById("userInput");
  // now you find a part within the element
  let mySentence = textAreaElement.value;
  console.log("got the sentence from the page:", mySentence);

  // 2. find the longest word in the sentence
  let theWord = findLongest(mySentence);

  //  3. display the longest word on the page
  // get the entire element
  let resultElement = document.getElementById("result");
  // now you want to update a part of that element
  resultElement.innerText = theWord;
}

// let sentence = "The brown fox jumped over the lazy dog";
// let longest = findLongest(sentence);
// console.log("The longest word is", longest);
