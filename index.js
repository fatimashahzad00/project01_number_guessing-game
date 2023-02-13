import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
// console.log(systemGeneratedNo);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter your guess b/w 1 to 10: "
    }
]);
// console.log(answers.userGuess);
const { userGuess } = answers;
const mixnumber = userGuess === systemGeneratedNo;
console.log(userGuess, "userGuess", systemGeneratedNo, "System");
if (mixnumber) {
    console.log("yeah Your number is correct \n You won ", mixnumber);
}
else {
    console.log("Please try again for better luck next time");
}
