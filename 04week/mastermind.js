"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  let solutionArray = solution.split("");
  // console.log(solutionArray);
  let guessArray = guess.split("");
  // console.log(guessArray);
  // +++++++ Counter for Red Hint ++++++++
  var correctLetterLocations = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  // +++++++ Counter for White Hint ++++++++
  var correctLetters = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    var targetIndex = solutionArray.indexOf(guessArray[i]);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[i] = null;
    }
  }
  return `Red: ${correctLetterLocations} - White: ${correctLetters}`;
}

function mastermind(guess) {
  // solution = "abcd"; // Comment this out to generate a random solution
  if (guess == solution) {
    board = [];
    return "You guessed it!";
  } else {
    var hint = generateHint(guess);
    board.push(`Guess: ${guess} + Hint: ${hint}`);
    if (board.length >= 10) {
      board = [];
      return "You ran out of turns! The soultion was: " + solution;
    } else {
      return "Guess again.";
    }
  }
}

function getPrompt() {
  rl.question("guess: ", guess => {
    // mastermind(guess);
    console.log(mastermind(guess));
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  generateSolution();
  getPrompt();
}
