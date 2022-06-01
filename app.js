const inquirer = require("inquirer");

const { Animal } = require("./Animal");
const { Cat } = require("./Cat");
const { Parrot } = require("./parrot");
const { questions } = require("./questions");
let myPet = "";

const start = async () => {
  const typeOfPet = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
    message:
      "What type of pet would you like? Please choose from the following options?",
    choices: [
      {
        key: "a",
        name: "cat",
        value: "cat",
      },
      {
        key: "b",
        name: "Parrot",
        value: "Parrot",
      },
    ],
  });
  const petName = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "What is your pet called?",
  });
  if (typeOfPet === "cat") myPet = new Cat(petName);
  else if (typeOfPet === "Parrot") myPet = new Parrot(petName);

  userChoice();
};
async function userChoice() {
  myPet.restlessness =+ 5;
  // myPet.hunger(5);
  // myPet.thirst(5);
  myPet.stats;
  // if (!myPet._isAlive) {
  //   gameOver();
  //   return;
  // }

  const { choice } = await inquirer.prompt(questions.choice);

  if (choice === "status") console.log(myPet.status);
  if (choice === "play") await myPet.play();
  if (choice === "feed") await myPet.eats();
  if (choice === "drink") await myPet.drinks();
  if (choice === "quit") {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }
  myPet.checkStats();
  userChoice();
}
async function gameOver() {
  console.log(myPet.status);
  const { playAgain } = await inquirer.prompt(questions.playAgain);

  if (playAgain === 'yes') start();
  else return;
}
start();

try {
} catch (error) {
  console.log("error fetching data", error);
}
