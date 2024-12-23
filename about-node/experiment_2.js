// Function f1 sets a timeout and calls f2 after 2 seconds
function f1() {
  setTimeout(() => f2(), 2000); // 4. Sets a timeout to call f2 after 2 seconds
}

// Function f2 sets a timeout and calls f3 after 2 seconds, then logs 'I called f2'
function f2() {
  setTimeout(() => f3(), 2000); // 5. Sets a timeout to call f3 after 2 seconds
  console.log('I called f2'); // 7. Prints 'I called f2' immediately (before f3 is called)
}

// Function f3 logs a message after being called by f2
function f3() {
  console.log('I called f3'); // 6. Prints 'I called f3' after the timeout in f2 finishes
}

// Main function, serves as the entry point for execution
function principal() {
  console.log('principal function'); // 2. Prints 'principal function'
  f1(); // 3. Calls function f1
}

// Starts the execution by calling principal
principal(); // 1. Starts execution by calling the principal function
