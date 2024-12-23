// Function f1 calls f2 and logs a message
function f1() {
  f2(); // 4. Calls function f2
  console.log('I called f1'); // 8. Prints 'I called f1' after f2 finishes
}

// Function f2 calls f3 and logs a message
function f2() {
  f3(); // 5. Calls function f3
  console.log('I called f2'); // 7. Prints 'I called f2' after f3 finishes
}

// Function f3 logs a message
function f3() {
  console.log('I called f3'); // 6. Prints 'I called f3'
}

// Main function, serves as the starting point for execution
function principal() {
  console.log('principal function'); // 2. Prints 'principal function'
  f1(); // 3. Calls function f1
}

// Starts the execution by calling principal
principal(); // 1. Starts execution with calling the principal function
