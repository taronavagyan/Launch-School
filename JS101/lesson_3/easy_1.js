/* eslint-disable max-len */
// 1.

/*
let numbers = [1, 2, 3];
numbers[6] = 5;

// This code will not raise an error. numbers[3-5] are empty slots

numbers[4]; // what will this line return?

// undefined. BUT, it is an empty slot.
*/

// 2.

/*
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));
*/

// 3.

/*
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty("Spot"));
*/

// 4.

/*
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function firstCharCapitalOnly(string) {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

console.log(firstCharCapitalOnly(munstersDescription));
*/

// 5.

/*
console.log(false == "0"); //true
console.log(false === "0"); //false
*/

// 6.

/*
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let munsterfamily = Object.assign(additionalAges, ages);
console.log(munsterfamily);
*/

// 7.

/*
function includesDino(string) {
  return string.includes("Dino");
}

let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(includesDino(str1));
console.log(includesDino(str2));
*/

// 8.

/*
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);
*/

// 9.

/*
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");
console.log(flintstones);
*/

// 10

/*
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let splitByHouse = advice.split("house")[0];
console.log(splitByHouse);
*/
