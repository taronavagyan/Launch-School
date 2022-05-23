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

let board = initalizeBoard();
displayBoard(board);
