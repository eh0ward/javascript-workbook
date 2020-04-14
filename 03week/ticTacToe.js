"use strict";

console.log("The DOM");

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let turn, square, user, computer, row, column;

// let checkedBox = document.getElementById("input-box")

$(document).ready(function () {
  // listen for input box
  $(".input-box").click(function () {
    if ($(this).is(":checked")) {
      user = $(this).val();
      turn = user;
      computer = user == "X" ? "O" : "X";
    }
  });

  // listen for square
  // targets square class
  $(".square").click(function () {
    // assigns square variable
    square = $(this).attr("id");
    $("#" + square).text(turn);
    // switch turns
    turn = turn == user ? computer : user;
  });
});

let playerTurn = "X";

// =============== Game Logic =================
function horizontalWin() {
  //   let hWin = board[0][0];
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

function verticalWin() {
  //   let vWin = board[0][0];
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

verticalWin();

function diagonalWin() {
  //   let dWin = [0][0];
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
}

diagonalWin();

function checkForWin() {
  if (horizontalWin()) {
    return true;
  } else if (verticalWin()) {
    return true;
  } else if (diagonalWin()) {
    return true;
  }
}

function ticTacToe(row, column) {
  if (playerTurn == "X") {
    board[row][column] = playerTurn;
    playerTurn = "O";
  } else if (playerTurn == "O") {
    board[row][column] = playerTurn;
    playerTurn = "X";
  }
}
