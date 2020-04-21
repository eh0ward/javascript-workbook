"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// actually move pieces
// pop and push
function movePiece(startStack, endStack) {
  let playedPiece = stacks[startStack].pop(stacks[startStack].length - 1);
  stacks[endStack].push(playedPiece);
}

// should return or false depending on if the move is legal
function isLegal(startStack, endStack) {
  let s = stacks[startStack];
  let e = stacks[endStack];
  let topStartPiece = s[s.length - 1];
  let topEndPiece = e[e.length - 1];

  if (
    s.length > 0 &&
    (topStartPiece < topEndPiece || topEndPiece == undefined)
  ) {
    movePiece(startStack, endStack);
    console.log("Legal Move!");
    return true;
  } else {
    console.log("Illegal Move!");
    return false;
  }
}

// return true if the player won
// ie moved all the disks to either tower b or tower c
function checkForWin() {
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    console.log("You Win!");
    return true;
  } else {
    return false;
  }
}

// Entry part of game
function towersOfHanoi(startStack, endStack) {
  isLegal(startStack, endStack);
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

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
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
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
