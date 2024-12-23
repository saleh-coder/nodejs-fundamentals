export default function (ingredients, action1, action2) {
  let render = '';
  for (let ingredient of ingredients) {
    render += action1(ingredient) + '\n';
    render += action2(ingredient) + '\n';
  }
  render += 'finished';
  return render;
}
