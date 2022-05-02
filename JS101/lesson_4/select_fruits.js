let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produceList) {
  let fruits = {};

  for (let item in produceList) {
    if (produceList[item].toLowerCase() === "fruit") {
      fruits[item] = "Fruit";
    }
  }

  return fruits;
}

console.log(selectFruit(produce));
