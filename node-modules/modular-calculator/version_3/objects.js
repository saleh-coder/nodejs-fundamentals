const obj = {
  text: 'Bom dia', // Initial greeting message
  Number: 5, // Numeric value
  person: {
    name: 'Maria', // Person's name
    age: 45, // Person's age
  },
};

// Modifying existing nested object
obj.person = { name: 'Osvald', age: 56 }; // Changing person's name and age
console.log(obj.person.name); // Logging the updated name

// Adding a new property to the nested object
obj.person.favoriteColor = 'red'; // Adding favorite color for the person
console.log(obj.person); // Logging the updated object with the new property

module.exports = obj; // Exporting the modified object
