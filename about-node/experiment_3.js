// Set a timeout to log '1' after 5 seconds
setTimeout(() => console.log('1'), 5000); // 4. Logs '1' after 5 seconds

// Set a timeout to log '2' after 3 seconds
setTimeout(() => console.log('2'), 3000); // 3. Logs '2' after 3 seconds

// Set a timeout to log '3' after 1 second
setTimeout(() => console.log('3'), 1000); // 2. Logs '3' after 1 second

// Immediately logs 'end'
console.log('end'); // 1. Logs 'end' immediately
