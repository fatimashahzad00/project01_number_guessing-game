import inquirer from "inquirer";

type ansType = {
    userGuess : number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);
// console.log(systemGeneratedNo);

const answers: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter your guess b/w 1 to 10: "
    }
])

// console.log(answers.userGuess);

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, "System");

if(userGuess === systemGeneratedNo) {
    console.log("yeah Your number is correct \n You won ");
} else {
    console.log("Please try again for better luck next time");
    
}
