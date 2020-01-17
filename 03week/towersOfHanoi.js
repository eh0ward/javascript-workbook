"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// ======================================
// move a single piece from the startStack to the endStack
function movePiece(startStack, endStack) {
  let playedPiece = stacks[startStack].pop(stacks[startStack].length - 1);
  stacks[endStack].push(playedPiece);
}

// console.log(movePiece);

// ======================================
// if the move is legal return true
// if the move is not legal return false
// a legal move is when there is at least 1 piece in the startStack AND:
//    1. when the end stack is empty OR
//    2. when the top piece in the start stack is smaller than the top piece in the end stack
function isLegal(startStack, endStack) {
  var f = stacks[startStack];
  var e = stacks[endStack];
  let topStartPiece = f[f.length - 1];
  let topEndPiece = e[e.length - 1];

  if (
    f.length > 0 &&
    (topStartPiece < topEndPiece || topEndPiece === undefined)
  ) {
    console.log("the move is legal");
    movePiece(startStack, endStack);
    return true;
  } else {
    console.log("the move is not legal");
    return false;
  }
}

// ======================================
// if the player won, return true
// if the player did not win, return false
// a win is when all 4 blocks are in stack b or stack c
function checkForWin(startStack, endStack) {
  // Your code here
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    console.log("You Win!");
    return true;
  } else {
    return false;
  }
}

// ======================================
// takes in the user input for startStack and endStack,
// and digitally plays round
function towersOfHanoi(startStack, endStack) {
  isLegal(startStack, endStack);
  checkForWin();
}

// Your code here
// check to see if the move is legal.
// if the move is legal
//     - move the piece
// else if the move is not legal
//     - tell them the move is not legal
// check to see if they won
//    - tell them they won!!

// ======================================
function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// ======================================
// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
