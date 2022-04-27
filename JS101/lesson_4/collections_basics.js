/*
let str = "The grass is green";
console.log(str.slice(4, 9));


let arr = ["a", "b", "c", "d", "e", "f", "g"];
console.log(arr.slice(2, 5)[0]);

arr.join("");
*/

let numbers = [1, 2, 3, 4];
numbers[0] += 1; // => 2
console.log(numbers); // => [ 2, 2, 3, 4 ]
numbers[1] += 1;
numbers[2] += 1;
numbers[3] += 1;
numbers[4] += 1;
console.log(numbers); // => [ 2, 3, 4, 5, NaN]

let obj = {
  apple: "Produce",
  carrot: "Produce",
  pear: "Produce",
  broccoli: "Produce",
};
obj["apple"] = "Fruit";
obj.carrot = "Vegetable";
obj.pear = "Fruit";
obj["broccoli"] = "Vegetable";
console.log(obj);
