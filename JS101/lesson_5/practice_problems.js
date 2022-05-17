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
