// Exporting the meal preparation process
module.exports = function (ingredients, action1, action2) {
  let render = ''; // String variable to accumulate the steps
  for (let ingredient of ingredients) {
    render += action1(ingredient) + '\n'; // Apply the first action (e.g., cook)
    render += action2(ingredient) + '\n'; // Apply the second action (e.g., serve)
  }
  render += 'finished'; // Mark the meal as finished
  return render; // Return the final process steps
};
