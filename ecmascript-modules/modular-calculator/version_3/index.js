import { text, sum, sub } from './basicCalculations.js';
// import basicCalculations from './basicCalculations.js';
import { text as textC, pow, rest } from './complementaryCalculations.js';
// import complementaryCalculations from './complementaryCalculations.js';
import divT from './divisionCalculations.js';

let x, y;
x = 10;
y = 15;

console.log(text);
console.log(sum(x, y));
console.log(sub(x, y));
console.log(textC);
console.log(pow(x, y));
console.log(rest(x, y));
console.log(divT(x, y));
