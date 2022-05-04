// 1.

/*
[ 1, 2, 3 ] because 'hi' is truthy
*/

// 2.

/*
[ undefined, undefined, undefined ]
Because there are brackets, but no return statement.
*/

// 3.

/*
[ 1, 4, 9 ]
Because there are no brackets surrounding the arrow function
*/

// 4.

/*
11, because that's the length of 'caterpillar'
*/

// 5.

/*
2, 4, 6, true
*/

// 6.

/*
[ 1, 1, 1, 1, 1 ]
It is destructive (MDN).
*/

// 7.

/*
[ undefined, 'bear' ]
*/

// 8.

/*
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};

for (let member of flintstones) {
  flintstonesObj[member] = flintstones.indexOf(member);
}

// OR

flintstones.forEach((name, idx) => {
  flintstonesObj[name] = idx;
});

console.log(flintstonesObj);
*/

// 9.

/*
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let totalAge = 0;
let agesArray = Object.values(ages);

agesArray.forEach((age) => (totalAge += age));
console.log(totalAge);
*/

// 10.

/*
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let agesArray = Object.values(ages);
let youngest = agesArray[0];

for (let currAge of agesArray) {
  youngest = currAge < youngest ? currAge : youngest;
}

console.log(youngest);

// OR
console.log(Math.min(...agesArray));

*/

// 11.

/*
let charsOfStatement = "The Flintstones Rock"
  .split("")
  .filter((char) => char !== " ");

let charOccurences = {};

charsOfStatement.forEach((char) => {
  charOccurences[char] = charOccurences[char] || 0;
  charOccurences[char] += 1;
});

console.log(charOccurences);
*/
