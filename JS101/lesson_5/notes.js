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
