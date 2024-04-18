const readline = require("readline-sync");
function ZombieGame() {
  let possibleWeapons = [
    "Sword",
    "Axe",
    "Gun",
    "Knife",
    "Cone",
    "Banana Peel",
    "Blue Shell",
    "Rocket Launcher",
  ];
  let randomNumber = Math.floor(Math.random() * possibleWeapons.length);
  let zombieWeakness = possibleWeapons[randomNumber];

  console.log(zombieWeakness);
  console.log("You have encountered a zombie and should  prepare to fight!\n");
  console.log("Here's a list of weapons to choose from!\n ");
  console.log(possibleWeapons);

  let selectedWeapon = readline.question("Pick a weapon now! \n");

  if (selectedWeapon === zombieWeakness) {
    console.log("Congrats you have found my Weakness ARGHHH");
  } else {
    console.log(
      `Zombie has eaten your brains! My weakness was actually a ${zombieWeakness}!`
    );
  }
}
ZombieGame();
