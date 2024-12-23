// Combines cooking actions and food items into a single module for export.

const cookingActions = require('./cookingActions'); // Importing cooking actions
const { food } = require('./food'); // Importing food items from the food module

// The code above is equivalent to:
// const module = require('./food');
// const food = module.food;
// console.log(food);

// Exporting both the cooking actions and food items together
module.exports = {
  ...cookingActions,  // Spread operator to include all cooking actions
  food,  // Export the food array
};
