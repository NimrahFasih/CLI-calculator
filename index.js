#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        Message: "choose any one of the operators",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log("Addition = " + (answer.FirstNumber + answer.SecondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log("Subtraction = " + (answer.FirstNumber - answer.SecondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log("Multiplication = " + answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log("Division = " + answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please Select Valid Operator");
}
