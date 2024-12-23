export default function (meal) {
  const eat = function (...food) {
    console.log(`At ${meal} I'll have ${food}`);
  };

  return eat;
}
