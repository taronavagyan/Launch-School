/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

const CARD_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: 11,
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initalizeHand() {
  let hand = [];
  for (let cards = 0; cards < 2; cards += 1) {
    let random = Math.floor(Math.random() * Object.keys(CARD_VALUES).length);

    hand.push(Object.entries(CARD_VALUES)[random]);
  }
  return hand;
}

console.log(initalizeHand());
/*
while (true) {
  let random = Math.floor(Math.random() * Object.keys(CARD_VALUES).length);
  let cardDrawn = Object.entries(CARD_VALUES)[random][0];
  let valueDrawn = Object.entries(CARD_VALUES)[random][1];
  console.log(cardDrawn);
  console.log(valueDrawn);
  prompt(`You have a score of ${valueDrawn}.`);
  break;
}
*/
