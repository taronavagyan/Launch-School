// 1.

/*
function greet(greeting = "Hello") {
  console.log(greeting + ", world!");
}

greet("Salutations"); // logs: Salutations, world!

greet(); // logs: undefined, world!
// should log: Hello, world!
*/

// 2.

/*
function greet(greeting = "Hello", recipient = "world") {
  console.log(greeting + ", " + recipient + "!");
}

greet(); // logs: Hello, world!
greet("Salutations"); // logs: Salutations, world!
greet("Good morning", "Launch School"); // logs: Good morning, Launch School!
*/

// 3.

/*
function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

function greeting() {
  return "Good morning";
}

function recipient() {
  return "Launch School";
}
greet();
*/

// 4.

/*
function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  return (weightInKilograms / heightInMeters ** 2).toFixed(2).toString();
}

console.log(calculateBMI(180, 80));
*/

// 5.

/*
function catAge(humanAge) {
  switch (humanAge) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanAge - 2) * 4;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
*/
