// 1.

/*
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
*/

// 2.

/*
for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}

console.log('Launch!');
*/

// 3.

/*
function repeatThreeTimes(string) {
  for (let i = 0; i < 3; i+=1) {
    console.log(string);
  }
}

let greeting = 'Aloha';

repeatThreeTimes(greeting);
*/

// 4.

/*
for (let i = 1; i <= 100; i+=1) {
  console.log(i*2);
}
*/

// 5.

/*
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}
*/

// 6.

/*
let cities = ['New York', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  if (cities[index] === null) {
    continue;
  }
  console.log(cities[index]);
}
*/

// 7.

/*
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}
*/

// 8.

/*
let i = 1;

while (i < 40) {
  console.log(i);
  i += 2;
}
*/

// 9.

/*
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let name of fish) {
  console.log(name);
  if (name === 'Nemo') {
    break;
  }
}
*/

// 10.

/* The while loop never runs because 0 is not greater than 0. The do...while loop always runs at least once, so it runs the
once loop and then evaluates (counter > 0) as false and stops. */