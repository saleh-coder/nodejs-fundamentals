// Example of meal creation and usage
export default function (meal) {
  const eat = function (...food) {
    console.log(`At ${meal} I'll have ${food}`); // Logging what food will be served during the meal
  };

  return eat; // Returning the eat function
}
