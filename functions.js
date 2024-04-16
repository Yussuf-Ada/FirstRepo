const readline = require("readline-sync");

const number1 = Number(readline.question("Please enter your first number: \n"));
const number2 = Number(
  readline.question("Please enter your second number: \n")
);
const number3 = Number(readline.question("Please enter your third number: \n"));
const number4 = Number(
  readline.question("Please enter your fourth number: \n")
);

function averageValue(number1, number2, number3, number4) {
  let addedNumbers = number1 + number2 + number3 + number4;
  let total = 4;
  return addedNumbers / total;
}

console.log(averageValue(number1, number2, number3, number4));
