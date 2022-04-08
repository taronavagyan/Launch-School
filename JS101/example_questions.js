let number = 5;

function test() {
  number = 3;
}

test();
console.log(number);

// a new value is being assigned to number

let secondNumber = 5;

function test(secondNumber) {
  secondNumber = 3;
}

test(secondNumber);
console.log(secondNumber);

// secondNumber's value does not change because although test() has the same parameter name, this secondNumber is a separate variable
