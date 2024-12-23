// Division operation with additional info for version 4
const { rest } = require('./complementaryCalculations'); // Importing rest function for modulus

function division(a, b) {
  return a / b; // Division operation
}

exports.divisionText = function (a, b) {
  return `The division of ${a} by ${b} is ${division(a, b)} and the rest is ${rest(a, b)}`; // Division result with modulus
};
