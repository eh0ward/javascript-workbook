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
// else if they have won, print out the winning players name and message
// make sure to switch the playerturn varialble before you return from the function (but after you print any message )

// =============== Tic Tac Toe Start =================

// should return true, if the player won on any row
function horizontalWin() {
  let hWin = board[0][0];
  if (
    (board[0][0] == playerTurn &&
      board[0][1] == playerTurn &&
      board[0][2] == playerTurn) ||
    (board[1][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[1][2] == playerTurn) ||
    (board[2][0] == playerTurn &&
      board[2][1] == playerTurn &&
      board[2][2] == playerTurn)
  ) {
    return true;
  }
}

horizontalWin();

// function horizontalWin() {
//   for (let i = 0; i <= 2; i++) {
//     if (
//       board[i][0] == playerTurn &&
//       board[i][1] == playerTurn &&
//       board[i][2] == playerTurn
//     ) {
//       return true;
//     }
//     // else {
//     //   return false;
//     // }
//   }
// }

// should return true, if the player won on any column
function verticalWin() {
  let vWin = board[0][0];
  if (
    (board[0][0] == playerTurn &&
      board[1][0] == playerTurn &&
      board[2][0] == playerTurn) ||
    (board[0][1] == playerTurn &&
      board[1][1] == playerTurn &&
      board[2][1] == playerTurn) ||
    (board[0][2] == playerTurn &&
      board[1][2] == playerTurn &&
      board[2][2] == playerTurn)
  ) {
    return true;
  }
}

// should return true, if the player won on any diagonal
function diagonalWin() {
  let dWin = [0][0];
  if (
    (board[0][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[2][2] == playerTurn) ||
    (board[0][0] == playerTurn &&
      board[1][1] == playerTurn &&
      board[2][2] == playerTurn)
  ) {
    return true;
  }
  // else {
  // return false;
  // }
}

// should return true if the player won
// (if any of the top 3 functions return true, this method should return true)
function checkForWin() {
  if (horizontalWin()) {
    return true;
  } else if (verticalWin()) {
    return true;
  } else if (diagonalWin()) {
    return true;
  }
}
// checkForWin(playerTurn);
// console.log(playerTurn);
//   } else {
// console.log(checkForWin(playerTurn, "Congrats!"));

// console.log(checkForWin);
//   }
// }

// set the value on that box
// check if the player won
// if they won (say congrats!)
// switch to player 2
function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  if (playerTurn === "X") {
    return (playerTurn = "O");
  } else {
    return (playerTurn = "X");
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column);
      // checkForWin();
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
