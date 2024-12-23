import { rest } from './complementaryCalculations.js';

function div(x, y) {
  return x / y;
}

export default function divText(x, y) {
  return `The division of ${x} by ${y} is ${div(x, y)} and the rest is ${rest(x, y)}`;
}
