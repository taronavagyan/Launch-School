// 1.

/*
let numbers = [1, 2, 3, 4];

numbers = []; /


while (numbers.length) {
  numbers.pop();
}


numbers.splice(0);

*/

// 2.

/*
First the arrays are converted to strings, then
concatenated.
 */

// 3.

/* "hello there" because strings are primitives */

// 4.

/*

[ { first: 42 }, { second: "value2" }, 3, 4, 5 ]

Because splice() returns a shallow copy.
*/

// 5.

/*
function isColorValid1(color) {
  return color === "blue" || color === "green";
}

function isColorValid2(color) {
  return color === "blue" || color === "green" ? 1 : 0;
}

const isColorValid3 = (color) => ["blue", "green"].includes(color);
*/
