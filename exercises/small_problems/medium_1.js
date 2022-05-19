// 1.

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  return [...arr];
}

let array = [1, 2, 3, 4, 5];
console.log(rotateArray(array));
