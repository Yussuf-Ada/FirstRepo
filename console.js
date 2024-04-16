const readline = require("readline-sync");

// let userAge = readline.question("Enter your age \n");

// let currentYear = readline.question("Enter the current year \n");

// let futureYear = readline.question(
//   "Enter the year in which you'd like to know your age "
// );

// function futureAge(userAge) {
//   let ageInFuture = Number(futureYear) - Number(currentYear) + Number(userAge);

//   console.log(
//     `You are ${userAge} and will be ${ageInFuture} years old in the year ${futureYear}`
//   );
// }

// futureAge(userAge);

// function retirementAge(age) {
//   let retirementAge = 67 - age;

//   if (age >= 67) {
//     return `You are ${age} years old and can retire :)`;
//   } else {
//     return `You are ${age} years old and can retire in ${retirementAge} years `;
//   }
// }

function integerChecker(number) {
  if (number === 0) {
    console.log("Thats zero! ");
  } else if (number < 0) {
    console.log("Thats negative! ");
  } else if (number > 0) {
    console.log("Thats positive! ");
  } else {
    console.log("That is not a REAL number");
  }
}

let yourNumber = Number(
  readline.question("What is the number you would like to check?\n")
);
integerChecker(yourNumber);
