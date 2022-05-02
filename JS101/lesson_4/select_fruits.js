let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

function selectFruit(produceList) {
  let fruits = {};

  for (let item in produceList) {
    if (produceList[item].toLowerCase() === "fruit") {
      fruits[item] = "Fruit";
    }
  }

  return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);
