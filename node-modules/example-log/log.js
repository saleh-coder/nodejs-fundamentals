// Exporting a log function that appends a symbol to the log messages
module.exports = {
  log: (info) => console.log(info + '!'), // Adds a symbol to the message before logging it
};
