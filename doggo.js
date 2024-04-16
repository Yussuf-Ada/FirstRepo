// const readline = require("readline-sync");

// let humanYears = Number(readline.question("How old is your dog?\n"));

// if (humanYears < 2) {
//   console.log(humanYears * 10.5);
// }

// if (humanYears >= 2) {
//   let remainderYears = (humanYears - 2) * 4;
//   console.log(remainderYears + 21);
// }

function largerOFtwo(num1, num2) {
  console.log(typeof num1);

  return Math.max(num1, num2);
}

console.log(largerOFtwo(723, 92133));
