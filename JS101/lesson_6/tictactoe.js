const readline = require("readline-sync");

function displayBoard(board) {
  if (typeof board !== "object") board = initalizeBoard();
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initalizeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[square] = " ";
  }
  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function playerChoosesSquare(board) {
  let square;

  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");

  while (true) {
    prompt("Choose a square: 1-9");
    square = readline.question().trim();

    if (emptySquares.includes(square)) {
      break;
    } else {
      prompt("That's not a valid choice.");
    }
  }
  board[square] = "X";
}

let board = initalizeBoard();
displayBoard(board);
playerChoosesSquare(board);
displayBoard(board);
