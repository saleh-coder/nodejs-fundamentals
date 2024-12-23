// Importing and using the extended calculator module
const calculations = require('./calculations');

// Declaring two numbers for the calculations
let x = 5;
let y = 10;

console.log(calculations.sum(x, y)); // Logs the result of sum(5, 10)
console.log(calculations.sub(x, y)); // Logs the result of sub(5, 10)
console.log(calculations.mul(x, y)); // Logs the result of mul(5, 10)
console.log(calculations.div(x, y)); // Logs the result of div(5, 10)
console.log(calculations.text); // Logs the text message from the module
