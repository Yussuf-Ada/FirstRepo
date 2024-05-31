const readline = require("readline-sync");
let board = [
  ["4", "3", "8"],
  ["9", "5", "1"],
  ["2", "7", "6"],
];
let fullBoard = 0;
let userXScore = 0;
let userOScore = 0;
let countOfmove = 0;
while (fullBoard < 9) {
  fullBoard++;
  console.table(board);
  let userChoice = readline.question(`Pick a number to replace: \n`);
  let userMark = readline.question(`Pick X or O: \n`);
  if (userMark === "X" || userMark === "x") {
    for (turn of board) {
      if (turn.includes(userChoice)) {
        let numToReplace = turn.indexOf(userChoice);
        turn[numToReplace] = userMark;
        countOfmove++;
        console.log(countOfmove + " count of moves  ");
        userXScore += Number(userChoice);
        console.log(`X's score: ${userXScore}`);
        if (userXScore >= 15) {
          console.log(`X's win!`);
          return;
        }
      }
    }
  } else if (userMark === "O" || userMark === "o") {
    for (turn of board) {
      if (turn.includes(userChoice)) {
        let numToReplace = turn.indexOf(userChoice);
        turn[numToReplace] = userMark;
        userOScore += Number(userChoice);
        console.log(`O's score: ${userOScore}`);
        if (userOScore >= 15) {
          console.log(`O's win!`);
          return;
        }
      }
    }
  }
}
console.log(`you have ran out of space on the board.`);
console.table(board);
