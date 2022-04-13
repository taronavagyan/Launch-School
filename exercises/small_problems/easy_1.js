// 1.

/*
function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/

// 2.

/*
for (let count = 1; count <= 99; count += 2) {
  console.log(count);
}
*/

// 3.

/*
for (let count = 2; count <= 99; count += 2) {
  console.log(count);
}
*/

// 4.

const readline = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;

let desiredInput = readline.question(
  "Would you like the area in feet or meters?\n"
);

while (
  desiredInput.toLowerCase() !== "feet" &&
  desiredInput.toLowerCase() !== "meters"
) {
  console.log("Please enter feet or meters.");
  desiredInput = readline.prompt();
}

if (desiredInput === "meters") {
  console.log("Enter the length of the room in meters:");
  let lengthInMeters = readline.prompt();

  console.log("Enter the width of the room in meters:");
  let widthInMeters = readline.prompt();

  let areaInMeters = (widthInMeters * lengthInMeters).toFixed(2);
  let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);
  console.log(
    `The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`
  );
} else {
  console.log("Enter the length of the room in feet:");
  let lengthInFeet = readline.prompt();

  console.log("Enter the width of the room in feet:");
  let widthInFeet = readline.prompt();

  let areaInFeet = (lengthInFeet * widthInFeet).toFixed(2);
  let areaInMeters = (areaInFeet / SQMETERS_TO_SQFEET).toFixed(2);
  console.log(
    `The area of the room is ${areaInFeet} square feet (${areaInMeters} square meters.)`
  );
}
