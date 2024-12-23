// Functions to describe cooking actions for various types of food.

function cook(food) {
  return `cooking ${food}`; // Returns a message that the food is being cooked
}

function bake(food) {
  return `baking ${food}`; // Returns a message that the food is being baked
}

function boil(food) {
  return `boiling ${food}`; // Returns a message that the food is being boiled
}

function cut(food) {
  return `cutting ${food}`; // Returns a message that the food is being cut
}

function serve(food) {
  return `serving ${food}`; // Returns a message that the food is being served
}

// Exporting the cooking functions as a module to be used in other files
module.exports = { cook, bake, boil, cut, serve };
