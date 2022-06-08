// 1.

// PROBLEM:

// 1 to [count] switches in front of you
// All switches are initally off
// For [count loops]
// Switch every 1 in n switches
//   n starting from 1 and incrementing by 1 until [count]
// Return an array of the lights that are on

// EXAMPLES/ TEST CASES:

/*
function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
*/

// DATA STRUCTURE:

// Input: One number
// Output: One array
// Intermediary (?): Object

// ALGORITHM:

// Given an integer, count
// Declare an array called lights
//   and make each number from 1 to count a property
//   with the value being false
// For (idx = 1; idx <= count; idx += 1)
// switch the value of lights[idx] to the opposite boolean
// Filter lights for true values and return keys

// CODE:

/*
function lightsOn(count) {
  let lights = {};
  for (let light = 1; light <= count; light += 1) {
    lights[light] = false;
  }
  for (let idx = 1; idx <= count; idx += 1) {
    for (let lightOf = idx; lightOf <= count; lightOf += idx) {
      lights[lightOf] = !lights[lightOf];
    }
  }
  let activeLights = Object.entries(lights)
    .filter((light) => light[1] === true)
    .map((pair) => pair[0]);
  return activeLights;
}

console.log(lightsOn(5));
console.log(lightsOn(100));
*/
