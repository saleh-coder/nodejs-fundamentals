// import kitchen from './kitchen/main.js';
// import recipe from './recipe.js';
// console.log(kitchen);
// const r = recipe(['cake'], kitchen.cut, kitchen.serve);
// console.log(r);

import meal from './meal.js';
// console.log(meal);
const eatLunch = meal('lunch');
const eatDinner = meal('dinner');

eatLunch('rice', 'beans', 'fish');
eatDinner('soup');
