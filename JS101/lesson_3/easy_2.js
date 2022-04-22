// 1.

/*
let advice =
  "Few things in life are as important as house training important your pet dinosaur.";

console.log(advice.replaceAll("important", "urgent"));
*/

// 2.

/*
let numbers = [1, 2, 3, 4, 5];
let numbersReversed1 = numbers.slice().reverse();

let numbersReversed2 = [...numbers].sort(
  (firstNum, secondNum) => secondNum - firstNum
);

let numbersReversed3 = [];

numbers.forEach((num) => {
  numbersReversed3.unshift(num);
});

console.log(numbersReversed1);
console.log(numbersReversed2);
console.log(numbersReversed3);
console.log(numbers);
*/

// 3.

/*
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));
*/

// 4.

/*
let famousWords = "seven years ago...";

console.log(`Four score and ${famousWords}`);
console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));
*/

// 5.

/*
let arrayOfNums = [1, 2, 3, 4, 5];

// arrayOfNums.splice(2,1)) OR
arrayOfNums = arrayOfNums.slice(0, 2).concat(arrayOfNums.slice(3));

console.log(arrayOfNums);
*/

// 6.

/*
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flintstonesFlattened = flintstones.flat();

console.log(flintstonesFlattened);
*/
