// 1.

/*
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student.courses;
student['courses'];
*/

// 2.

/*
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

jane.location.country;
*/

// 3.

/*
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 1;
fido["favorite food"] = "chicken";
console.log(fido);
*/

// 4.

/*
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!
*/

// 5.

/* The first bit of code will log { prefix: 'Pacific } because only bracket notation can take expressions. */

// 6.

/*
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

"It's true" never runs because the "true" property is a String, not a Boolean.
*/

// 7.

/*
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let carKeys = Object.keys(vehicle);
*/

// 8.

/*
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
*/

// 9.

/*
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};

for (let personInfo of nestedArray) {
  person[personInfo[0]] = personInfo[1];
}

BETTER SOLUTION:
let person = Object.fromEntries(nestedArray);
*/

// 10.

/*
function clone(obj) {
  let objCopy = {};
  for (let prop in obj) {
    objCopy[prop] = obj[prop];
  }
  return objCopy;
}

BETTER SOLUTION:

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false
*/