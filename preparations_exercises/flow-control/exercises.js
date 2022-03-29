// 1.

/* 

false
true
3
3
false
true
false
false
false
true
false
true

*/

// 2.

/*
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  };
}

evenOrOdd(6);
*/

// 3. 

/*
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Error: Not an integer');
    return;
  }
  else if (number % 2 === 0) 
    console.log('even');
  else 
    console.log('odd'); 
}

evenOrOdd(20.5);
*/

// 4.

/* Product 2 \n Product 3 \n Product not found! because the switch cases are missing break statements */

// 5.

/*
if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/

// 6.

/* Not Empty, because even empty arrays are not falsy. */

// 7.

/*
function capitalizeMoreThanTen(word) {
  if (word.length > 10) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

console.log(capitalizeMoreThanTen('Asassination'));
*/

// 8.

function numberRange(number) {
  if (number >= 0 && number <= 50) 
    console.log(`${number} is between 0 and 50`);
  else if (number >= 51 && number <= 100) 
    console.log(`${number} is between 51 and 100`);
  else if (number > 100)
    console.log(`${number} is greater than 100`);
  else 
    console.log(`${number} is less than 0`);
}

numberRange(2);

