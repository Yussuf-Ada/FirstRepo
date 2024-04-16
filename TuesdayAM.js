const readline = require("readline-sync");

function numberChecker() {
  let counter = 0;
  let randNum = Math.floor(Math.random() * 100 + 1);
  console.log(randNum);
  let userNumber;
  while (true) {
    userNumber = Number(readline.question("Pick a Number\n"));
    counter++;
    if (userNumber > randNum) {
      console.log(`${userNumber} is too high, try again`);
    } else if (userNumber < randNum) {
      console.log(`${userNumber} is too low, try again`);
    } else {
      return "Well done!";
    }
    if (counter === 3) {
      return "You've used your 3 choices! ";
    }
  }
}

console.log(numberChecker());
