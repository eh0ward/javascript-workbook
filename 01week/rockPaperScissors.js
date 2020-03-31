"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//@param {*} player1 the first hand
//@param {*} player2 the sceond hand

//if player1 is equal to player2, return "It's A Tie!"
//if player1 is the winning hand, return "hand one wins!"
//if player2 is the winning hand, return "hand two wins!"

const rockPaperScissors = (player1, player2) => {
  let answer = "";
  // ++++++++++ ROCK ++++++++++++++++++
  if (player1 === "rock" && player2 === "scissors" || ) {
    answer = "Player 1 Wins!";
  } else if (player1 === "rock" && player2 === "paper") {
    answer = "Player 2 Wins!";
  }

  // ++++++++++ PAPER +++++++++++++++++
  else if (player1 === "paper" && player2 === "rock") {
    answer = "Player 1 Wins!";
  } else if (player1 === "paper" && player2 === "scissors") {
    answer = "Player 2 Wins!";
  }

  // ++++++++++ SCISSORS ++++++++++++++
  else if (player1 === "scissors" && player2 === "paper") {
    answer = "Player 1 Wins!";
  } else if (player1 === "scissors" && player2 === "rock") {
    answer = "Player 2 Wins!";
  } else {
    answer = "It's A Tie!";
  }

  return answer;
};

function getPrompt() {
  rl.question("Player 1: ", answer1 => {
    rl.question("Player 2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
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
  getPrompt();
}
