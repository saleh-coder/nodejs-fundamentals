import pt from './pt.js';
import en from './en.js';
const language = 'en';
let module;

if (language === 'pt') {
  module = pt;
} else if (language === 'en') {
  module = en;
}

console.log(module.dia);
console.log(module.tarde);
console.log(module.noite);
