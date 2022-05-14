/*
let arr = [[1, 3], [2]];
arr[1] = 'hi there';
console.log(arr); // => [ [1, 3 ], 'hi there' ]
*/

/*
let arr = [{ a: "ant" }, { b: "bear" }];

arr[0]["c"] = "cat";
arr[0].d = "dog";
console.log(arr); // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]
*/

/*

let obj = { a: { b: 'foo' }, c: ['bar'] };
let copyOfObj = Object.assign({}, obj);

obj['a']['d'] = 'baz';
console.log(copyOfObj); // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
console.log(obj);       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
*/

// MAKING A DEEP COPY

/*
let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
*/

// FREEZING OBJECTS

/*
let obj = Object.freeze({ a: 'foo' });
let arr = Object.freeze(['a', 'b', 'c']);

obj['b'] = 'bar';
obj; // => { a: 'foo' }

obj.c = 'ccc';
obj; // => { a: 'foo' }

arr[3] = 'x';
arr; // => [ 'a', 'b', 'c' ]

arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible
*/

/*
let obj = Object.freeze({ a: "foo" });
let arr = Object.freeze(["a", "b", "c"]);

obj["b"] = "bar";
obj; // => { a: 'foo' }

obj.c = "ccc";
obj; // => { a: 'foo' }

arr[3] = "x";
arr; // => [ 'a', 'b', 'c' ]

arr.push("d"); // => TypeError: Cannot add property 3, object is not extensible
*/

/*
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]

// map transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
*/
