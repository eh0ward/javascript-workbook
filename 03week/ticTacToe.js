"use strict";

console.log("The DOM");

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let turn, sqrId, user, computer, row, col;

$(document).ready(function () {
  $(".input-box").click(function () {
    if ($(this).is(":checked")) {
      user = $(this).val();
      turn = user;
      computer = user == "X" ? "O" : "X";
    }
  });

  // let square = document.getElementsByClassName(".square").attr("id");
  // square.addEventListener("click", function () {
  //   square.innertext = ticTacToe();
  // });
  $(".square").click(function () {
    sqrId = $(this).attr("id");
    $("#" + sqrId).text(turn);
    turn = turn == user ? computer : user;
  });

  $(".reset").click(function () {
    resetBoard();
  });
});

function resetBoard() {
  $(".square").text("");
  $(".input-box").prop("checked", false);
}

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
