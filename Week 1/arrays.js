const readline = require("readline-sync");
const Foods = ["Cookie", "Cake"];
function addFoodToArray(favFood) {
  Foods.push(favFood);
  return Foods;
}
function addFood() {
  let decision = "";
  while (decision !== "no") {
    const favFood = readline.question("What is your favourite food?\n");
    decision = readline.question("add another?\n yes or no\n").toLowerCase();
    console.log(addFoodToArray(favFood[0].toUpperCase() + favFood.slice(1)));
  }
}
addFood();

const arrayOfnumbers = [2, 4, 6, 8];

function arrayTimes2() {
  let newArray = [];
  for (let i = 0; i < arrayOfnumbers.length; i++) {
    newArray.push(arrayOfnumbers[i] * 2);
  }
  return newArray;
}

console.log(arrayTimes2());
