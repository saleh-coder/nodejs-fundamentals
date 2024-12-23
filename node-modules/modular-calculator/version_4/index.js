// Final version using all calculations
const basic = require('./basicCalculations');
const complementary = require('./complementaryCalculations');
const division = require('./divisionCalculations');

// Numbers to be used in the calculations
let x = 20;
let y = 2;

// Performing all operations and logging the results
console.log(basic.sum(x, y)); // Logs the sum
console.log(basic.sub(x, y)); // Logs the subtraction
console.log(basic.text); // Logs the text from basicCalculations
console.log(complementary.pow(x, y)); // Logs power operation from complementaryCalculations
console.log(complementary.rest(x, y)); // Logs modulus operation from complementaryCalculations
console.log(complementary.text); // Logs the text from complementaryCalculations
console.log(division.divisionText(x, y)); // Logs division with additional info from divisionCalculations
