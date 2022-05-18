// 1.

/*
let arr = ["10", "11", "9", "7", "8"];

console.log([...arr].sort((a, b) => b - a));
*/

// 2.

/*
let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

console.log(books.sort((a, b) => a.published - b.published));
*/

// 3.

/*
let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];

console.log(arr1[2][1][3]);

let arr2 = [
  { first: ["a", "b", "c"], second: ["d", "e", "f"] },
  { third: ["g", "h", "i"] },
];

console.log(arr2[1]["third"][0]);

let arr3 = [["abc"], ["def"], { third: ["ghi"] }];

console.log(arr3[2]["third"][0][0]);

let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };

console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };

console.log(Object.keys(obj2.third)[0]);
*/

// 4.

/*
let arr1 = [1, [2, 3], 4];

arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };

obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };

obj2.a.a[2] = 4;
console.log(obj2);
*/

// 5.

/*
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let munstersValues = Object.values(munsters);
let totalMaleAge = munstersValues.reduce((totalAge, person) => {
  if (person.gender === "male") {
    totalAge += person.age;
  }
  return totalAge;
}, 0);

console.log(totalMaleAge);
*/

// 6.

/*
let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

let munstersEntries = Object.entries(munsters);
console.log(munstersEntries);

for (let member of munstersEntries) {
  let name = member[0];
  let age = member[1].age;
  let gender = member[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
}
*/

// 7.

/*
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;
// a === 2
// b === [ 3, 8 ]
*/

// 8.

/*
let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

Object.values(obj)
  .flat()
  .forEach((string) => {
    string.split("").forEach((char) => {
      if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
        console.log(char);
      }
    });
  });
*/

// 9.

/*
let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let sortedArr = arr.map((subArray) => {
  if (typeof subArray[0] === "number") {
    return [...subArray].sort((a, b) => a - b);
  } else {
    return [...subArray].sort();
  }
});

console.log(sortedArr);
*/

// 10.

/*
let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let sortedArr = arr.map((subArray) => {
  if (typeof subArray[0] === "number") {
    return subArray.sort((a, b) => b - a);
  } else {
    return [...subArray].sort().reverse();
  }
});

console.log(sortedArr);
*/

// 11.

/*
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map((obj) => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
});

console.log(newArr);
*/
