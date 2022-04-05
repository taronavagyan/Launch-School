// 1.

/*
function first(array) {
  return array[0];
}
console.log(first(["Earth", "Moon", "Sun"]));
*/

// 2.

/*
function last(array) {
  return array[array.length - 1];
}
console.log(last(["Earth", "Moon", "Mars"])); // 'Mars'
*/

// 3.

/*
let energy = ["fossil", "solar", "wind", "tidal", "fusion"];
energy.shift();
energy.push("geothermal");
console.log(energy);
*/

// 4.

/*
let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(Array.from(alphabet));
*/

// 5.

/*
let scores = [96, 47, 113, 89, 100, 102];
let overHundred = 0;

for (let score of scores) {
  if (score >= 100) {
    overHundred += 1;
  }
}
console.log(overHundred);
*/

// 6.

/*
let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

for (let array of vocabulary) {
  for (let word of array) {
    console.log(word);
  }
}
*/

// 7.

/* False because they are not the same object. */

// 8.

/* Use the Array.isArray() method. */

// 9.

/*
let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

function contains(string, array) {
  for (let item of array) {
    if (string === item) {
      return true;
    }
  }
  return false;
}

console.log(contains("Barcelona", destinations)); // true
console.log(contains("Nashville", destinations)); // false

BETTER SOLUTION: 

function contains(element, list) {
  return list.indexOf(element) >= 0;
}
*/

// 10.

/*
let passcode = ["11", "jZ5", "hQ3f*", "8!7g3", "p3Fs"];

function concatToString(array) {
  let result = "";
  for (let string of array) {
    result = result.concat(string) + "-";
  }
  return result;
}

console.log(concatToString(passcode));
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

BETTER SOLUTION:

passcode.join('-');
*/

// 11.

/*
let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

function logAndDelete(list) {
  for (let element of list) {
    console.log(element);
  }
  for (let i = list.length - 1; i >= 0; i -= 1) {
    list.pop();
  }
}

logAndDelete(groceryList);
console.log(groceryList);

BETTER SOLUTION:

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();
  console.log(checkedItem);
}
*/
