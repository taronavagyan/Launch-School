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