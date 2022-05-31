const inquirer = require("inquirer");

const {Animal} = require("./CyberPet/Animal");
const {Cat} = require("./CyberPet/Cat");
const {Parrot} = require("./CyberPet/Parrot");
let myPet = "";


const start = async() => {
    const typeOfPet
= await inquirer.prompt({
    type:'list',
    name:'typeOfPet',
    message: "What type of pet would you like? Please choose from the following options?",
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

        }
    ]});
    const petName = await inquirer.prompt({
        type: 'input',
        name: "petName",
        message: "What is your pet called?"
    
});
if (typeOfPet === "cat"){
    myPet = new Cat(petName);
}

if (typeOfPet === "Parrot"){
	myPet = new Parrot(petName);
}
};

start();

try {
    
} catch (error) {
    console.log("error fetching data", error);
    
}
