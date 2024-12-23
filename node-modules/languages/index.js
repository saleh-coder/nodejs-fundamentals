// Dynamically selecting language based on 'language' variable
const language = 'en'; // Assuming English is selected
let greetings; // Variable to hold the greetings in the selected language

// Loading the appropriate language module based on the selected language
if (language === 'pt') {
  greetings = require('./pt'); // Load Portuguese greetings if 'pt' is selected
} else if (language === 'en') {
  greetings = require('./en'); // Load English greetings if 'en' is selected
}

// Logging the greetings in the selected language
console.log(greetings.dia); // Logging the 'Good morning' greeting
console.log(greetings.tarde); // Logging the 'Good afternoon' greeting
console.log(greetings.noite); // Logging the 'Good evening' greeting
