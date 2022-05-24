const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

function prompt(msg) {
  console.log(`=> ${msg}`);
}

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
    board[square] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${emptySquares(board).join(", ")}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function someoneWon() {
  return false;
}

let board = initalizeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (boardFull(board) || someoneWon(board)) break;
}
