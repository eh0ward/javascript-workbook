"use strict";

console.log("DOM TEST");

// // brings in the assert module for unit testing
// const assert = require("assert");
// // brings in the readline module to access the command line
// const readline = require("readline");
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//if player1 is equal to player2, return "It's A Tie!"
//if player1 is the winning hand, return "hand one wins!"
//if player2 is the winning hand, return "hand two wins!"

// the function that will be called by the unit test below

const rockPaperScissors = (player1, player2) => {
  let scrubPlayer1 = player1.toLowerCase().trim();
  let scrubPlayer2 = player2.toLowerCase().trim();
  let answer = "";

  // ++++++++++ Tie +++++++++++++++++++
  if (scrubPlayer1 === scrubPlayer2) {
    answer = "It's A Tie!";
  }

  // ++++++++++ ROCK ++++++++++++++++++
  else if (scrubPlayer1 === "rock" && scrubPlayer2 === "scissors") {
    answer = "Player 1 Wins!";
  } else if (scrubPlayer1 === "rock" && scrubPlayer2 === "paper") {
    answer = "Player 2 Wins!";
  }

  // ++++++++++ PAPER +++++++++++++++++
  else if (scrubPlayer1 === "paper" && scrubPlayer2 === "rock") {
    answer = "Player 1 Wins!";
  } else if (scrubPlayer1 === "paper" && scrubPlayer2 === "scissors") {
    answer = "Player 2 Wins!";
  }

  // ++++++++++ SCISSORS ++++++++++++++
  else if (scrubPlayer1 === "scissors" && scrubPlayer2 === "paper") {
    answer = "Player 1 Wins!";
  } else if (scrubPlayer1 === "scissors" && scrubPlayer2 === "rock") {
    answer = "Player 2 Wins!";
  }

  // ++++++++++ Invalid Input +++++++++
  else {
    answer = "Input Not Valid. Try Again Bruh!";
  }

  return answer;
};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question("Player 1: ", player1 => {
    rl.question("Player 2: ", player2 => {
      console.log(
        rockPaperScissors(
          player1.toLowerCase().trim(),
          player2.toLowerCase().trim()
        )
      );
      getPrompt();
    });
  });
}

// ++++++++++ THE DOM +++++++++++++++++

let answer = document.getElementById("answer");
answer.addEventListener("click", function() {
  answer.innerText = rockPaperScissors("rock", "scissors");
});

// Tests

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === "function") {
  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's A Tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's A Tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's A Tie!");
    });
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Player 2 Wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Player 2 Wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Player 1 Wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Player 2 Wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Player 2 Wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Player 1 Wins!");
    });
  });
} else {
  // always returns ask the user for another input
  // getPrompt();
}
