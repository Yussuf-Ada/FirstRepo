// const library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     isLoaned: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     isLoaned: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     isLoaned: false,
//   },
// ];

// function loanBookCount() {
//   let isLoaned = 0;
//   let isNotLoaned = 0;
//   for (let i = 0; i < library.length; i++) {
//     if (library[i].isLoaned) {
//       isLoaned++;
//     } else {
//       isNotLoaned++;
//     }
//   }
//   return [`We have ${isLoaned} books on loan & ${isNotLoaned} not on loan`];
// }

// // console.log(loanBookCount());

// let word = "A few random words";

// let split = word.split(" ");

// const month = "September";
// console.log(month.substring(0, 4));
// console.log(month.substring(4, 9));
// console.log(month.substring(4, 9).length);

// let days = "Monday, Tuesday, Wednesday";

// days = days.split(",");

// console.log(days.reverse().join(","));

// let complete = "Bob's your uncle";

// complete = complete.split("'");
// let firstPart = complete[1].split(" ");
// console.log(
//   firstPart[2] + "'" + firstPart[0] + " " + firstPart[1] + " " + complete[0]
// );

// const isPalindrome = (word) => {
//   let reverseWord = word.split("").reverse().join("");
//   if (reverseWord === word) {
//     return true;
//   }
//   return false;
// };

// console.log(isPalindrome("kebab"));

function convertWord(str) {
  let newArray = [];
  let wordArray = str.trim().split(" ");
  wordArray.forEach((word) => {
    newArray.push(word[0].toUpperCase() + word.slice(1));
  });
  return newArray.join(" ");
}

console.log(convertWord("       my name is yussuf       "));
