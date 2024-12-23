// Importing and using the calculator module
const calculations = require('./calculations');

// Declaring two numbers for the calculations
let x = 5;
let y = 10;

console.log(calculations.sum(x, y)); // Logs the result of sum(5, 10)
console.log(calculations.sub(x, y)); // Logs the result of sub(5, 10)
console.log(calculations.text); // Logs the text message from the module
