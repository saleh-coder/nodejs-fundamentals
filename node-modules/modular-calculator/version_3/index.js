// Importing necessary functions and data from other modules
const calculations = require('./calculations'); // Import the calculations module
const obj = require('./objects'); // Import the object from the objects module

let x, y;
x = 5;
y = 10;

// Performing and logging calculator operations
console.log(calculations.sum(x, y)); // Logs the result of sum(5, 10)
console.log(calculations.sub(x, y)); // Logs the result of sub(5, 10)
console.log(calculations.text); // Logs the text message from the calculations module

console.log(obj); // Logs the imported object from the objects module
