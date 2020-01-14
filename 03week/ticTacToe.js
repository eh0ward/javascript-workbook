"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

let playerTurn = "X";

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}
// return true if you have won, other use return

// accept the row and column, the user wants to put a mark on ....
// place the approptiate mark on the borad
// check if they have won ?s
// if they have not won, and still open slots, do nothing
// else if they have not won, and thereare no open slots
// else it they have won, print out the winning players name and message
// make sure to switch the playerturn varialble before you return from the function (but after you print any message )

// const horizontalWin = [
//   [0, 0],
//   [0, 1],
//   [0, 2],
//   [1, 0],
//   [1, 1],
//   [1, 2],
//   [2, 0],
//   [2, 1],
//   [2, 2]
// ];
function horizontalWin() {
  //loop through to check each row
  for (let i = 0; i <= 2; i++) {
    if (
      board[i][0] == playerTurn &&
      board[i][1] == playerTurn &&
      board[i][2] == playerTurn
    ) {
      return true;
    }
    return false;
  }
}

function verticalWin() {
  // Your code here
  for (let i = 0; i <= 2; i++) {
    if (
      board[0][i] == playerTurn &&
      board[1][i] == playerTurn &&
      board[2][i] == playerTurn
    ) {
      return true;
    }
    return false;
  }
}

function diagonalWin() {
  // Your code here
  if (
    (board[0][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[2][2] == playerTurn) ||
    (board[2][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[0][2] == playerTurn)
  ) {
    return true;
  }
  return false;
}

function checkForWin() {
  // Your code here
  if (horizontalWin || verticalWin || diagonalWin) {
    console.log("Player X Wins!");
  }
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column);
      checkForWin();
      playerTurn = "X" ? "O" : "X";
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should check for vertical wins", () => {
      board = [
        [" ", "X", " "],
        [" ", "X", " "],
        [" ", "X", " "]
      ];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [
        ["X", "X", "X"],
        [" ", " ", " "],
        [" ", " ", " "]
      ];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [
        ["X", " ", " "],
        [" ", "X", " "],
        [" ", " ", "X"]
      ];
      assert.equal(diagonalWin(), true);
    });
    it("should detect a win", () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
