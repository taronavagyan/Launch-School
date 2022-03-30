let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));

for (let i = 0; i <= 4; i++) {
  if (i === 0) {
    console.log(`You are ${age} years old.`);
    continue;
  }
  console.log(`In ${i * 10} years, you will be ${age + (i * 10)} years old.`);
}