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
  console.log(`=> ${msg}`);
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

function total(hand) {
  let values = hand.map((card) => card[1]);

  let sum = 0;
  values.forEach((value) => {
    if (value === "A") {
      sum += 11;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values
    .filter((value) => value === "A")
    .forEach((_) => {
      if (sum > 21) sum -= 10;
    });

  return sum;
}

function busted(hand) {
  return total(hand) > 21;
}

function detectResult(dealerHand, playerHand) {
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  if (busted(playerHand)) {
    return "PLAYER_BUSTED";
  } else if (busted(dealerHand)) {
    return "DEALER_BUSTED";
  } else if (dealerTotal < playerTotal) {
    return "PLAYER";
  } else if (dealerTotal > playerTotal) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

// eslint-disable-next-line max-lines-per-function
function displayResults(dealerHand, playerHand) {
  let result = detectResult(dealerHand, playerHand);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("You busted. Dealer wins.");
      break;
    case "DEALER_BUSTED":
      prompt("Dealer busted! You win!");
      break;
    case "PLAYER":
      prompt(
        `Dealer has ${total(dealerHand)}! You have ${total(
          playerHand
        )}! You win!`
      );
      break;
    case "DEALER":
      prompt(
        `Dealer has ${total(dealerHand)}. You have ${total(
          playerHand
        )}. Dealer wins.`
      );
      break;
    case "TIE":
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log("-------------");
  prompt("Would you like to play again? (y/n)");
  let answer = readline.question();
  console.clear();
  return answer.toLowerCase()[0] === "y";
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map((card) => `${card[1]}${card[0]}`).join(" ");
}

prompt("Welcome to Twenty-One!");
prompt("Remember to always play responsibly.");
console.log("--------------");
while (true) {
  let deck = initializeDeck();
  let playerHand = [];
  let dealerHand = [];

  playerHand.push(...popTwoFromDeck(deck));
  dealerHand.push(...popTwoFromDeck(deck));

  prompt(`Dealer has: ${hand(dealerHand).split(" ")[0]} and an unknown card`);
  prompt(
    `You have: ${hand(playerHand)
      .split(" ")
      .join(" and ")}, for a total of ${total(playerHand)}.`
  );

  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt("Would to like to (h)it or (s)tand?");
      playerTurn = readline.question().toLowerCase();

      if (["h", "s"].includes(playerTurn)) break;
      prompt("Sorry, you must enter 'h' or 's'.");
    }
    if (playerTurn === "h") {
      playerHand.push(deck.pop());
      prompt("You chose to hit!");
      prompt(`Your cards are now: ${hand(playerHand)}`);
      prompt(`Your total is now ${total(playerHand)}`);
    }

    if (playerTurn === "s" || busted(playerHand)) {
      break;
    }
  }

  if (busted(playerHand)) {
    displayResults(dealerHand, playerHand);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }
  prompt(`You stayed at ${total(playerHand)}`);

  // dealer turn
  console.log("");
  prompt("Dealer's turn...");

  while (total(dealerHand) < 17) {
    prompt("Dealer hits!");
    dealerHand.push(deck.pop());
    prompt(`Dealer's cards are now ${hand(dealerHand)}`);
  }

  if (busted(dealerHand)) {
    prompt(`Dealer's total is now: ${total(dealerHand)}`);
    displayResults(dealerHand, playerHand);

    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stayed at ${total(dealerHand)}`);
  }

  // both player and dealer stayed - compare cards!
  console.log("==============");
  prompt(
    `Dealer has ${hand(dealerHand)}, for a total of: ${total(dealerHand)}`
  );
  prompt(`You have ${hand(playerHand)}, for a total of ${total(playerHand)}`);
  console.log("==============");

  displayResults(dealerHand, playerHand);

  if (!playAgain()) break;
}
