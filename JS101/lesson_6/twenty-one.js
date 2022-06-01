const readline = require("readline-sync");

const SUITS = ["H", "D", "S", "C"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function prompt(msg) {
  console.log(`=> {msg}`);
}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first -= 1) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push([suit, value]);
    }
  }
  return shuffle(deck);
}
