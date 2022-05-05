// 1.

/*
function sum(number) {
  let arrayOfDigits = String(number).split("");

  return arrayOfDigits.reduce(
    (accum, currDigit) => accum + Number(currDigit),
    0
  );
}

console.log(sum(23)); // 5
console.log(sum(496)); // 1
console.log(sum(123456789)); // 45
*/

// 2.

/*
const INTEGERS_RANKED = {
  0: 19,
  1: 9,
  2: 18,
  3: 16,
  4: 5,
  5: 4,
  6: 12,
  7: 10,
  8: 0,
  9: 7,
  10: 14,
  11: 2,
  12: 17,
  13: 15,
  14: 6,
  15: 3,
  16: 13,
  17: 11,
  18: 1,
  19: 8,
};

function alphabeticNumberSort(arrayOfNums) {
  return [...arrayOfNums].sort(
    (a, b) => INTEGERS_RANKED[a] - INTEGERS_RANKED[b]
  );
}

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
*/
