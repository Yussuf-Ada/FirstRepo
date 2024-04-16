for (let i = 7; i <= 12 * 7; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

let choice = 7;
for (let i = 1; i <= 12; i++) {
  console.log(`${i} times ${choice} = ${i * choice}`);
}

let counter = 1;
while (counter <= 12) {
  console.log(`${counter} times ${choice} = ${counter * choice}`);
  counter++;
}

let square = 1;

while (square <= 100) {
  console.log(square * square);
  square++;
}

for (let i = 1; i <= 100; i++) {
  console.log(i * i);
}

let number = 10;

while (number > 0) {
  console.log(number);
  number--;
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let number1 = 1;

while (number < 1000) {
  number++;

  if (number % 3 === 0 && number % 4 === 0) {
    console.log(number);
  }
}
