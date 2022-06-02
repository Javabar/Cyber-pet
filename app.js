const inquirer = require("inquirer");

const { Cat } = require("./Cat.js");
const { Parrot } = require("./parrot.js");
let myPet = "";

const start = async () => {
  const { typeOfPet } = await inquirer.prompt({
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
  const { petName } = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "What is your pet called?",
  });
  if (typeOfPet === "cat") myPet = new Cat(petName);
  else if (typeOfPet === "Parrot") myPet = new Parrot(petName);
  userChoice();
};

async function userChoice() {
  myPet.stats();

  if ((isAlive = false)) {
    gameOver();
    return;
  }

  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      {
        key: "a",
        name: "Play with your pet",
        value: "play",
      },
      {
        key: "b",
        name: "Feed your pet",
        value: "feed",
      },
      {
        key: "c",
        name: "Give your pet a drink",
        value: "drink",
      },
      {
        key: "d",
        name: "View your pet's status",
        value: "status",
      },
      {
        key: "e",
        name: "Quit the game",
        value: "quit",
      },
    ],
  });

  if (choice === "status") console.log(myPet.stats());
  if (choice === "play") await myPet.playOut();
  if (choice === "feed") await myPet.eats();
  if (choice === "drink") await myPet.drinks();
  if (choice === "quit") {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }
  // myPet.stats();
  userChoice();
}
async function gameOver() {
  console.log(myPet.status);
  const { playAgain } = await inquirer.prompt(questions.playAgain);

  if (playAgain === "yes") start();
  else return;
}
start();

try {
} catch (error) {
  console.log("error fetching data", error);
}
