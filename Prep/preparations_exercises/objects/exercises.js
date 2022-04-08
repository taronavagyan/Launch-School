// 1.

/* person['name'] or person.name */

// 2.

/* All of the values are valid object property keys because non-strings get coerced into strings. */

// 3.

/*
let myArray = { 
  0 : 'horse',
  1 : 'dog',
  2 : 'fish',
  length : '3'
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
*/

// 4.

/*
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj).map(key => key.toUpperCase());

console.log(objKeys);
*/

// 5.

/*
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = '3';
*/

// 6.

/* primitive, primitive, object, primitive, neither, object, primitive, object */

// 7.

/* the forEach snippet iterates only over the myObj's own properties, while the (let for... in) snippet iterates 
over the prototype object's keys as well. */

// 8.

/*
function copyObj(obj, keys) {
  let newObj = [];
  if (!keys) {
    return Object.assign(newObj, obj);
  } else {
    keys.forEach(function(key) {
      newObj[key] = obj[key];
    });
    return newObj;
  } 
}
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
*/

// 9.

/* 'hi' and 'hello' because objects are mutable but primitives are not, and the function only reassigns argument2. */

// 10.

/* 6 primitives and 4 objects */

// 11.

/*
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;
console.log(obj);
*/
