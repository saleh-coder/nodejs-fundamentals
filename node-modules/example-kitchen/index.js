// const actions = require('./kitchen/cookingActions');
// const { food } = require('./kitchen/food');
// console.log(actions.cut(food[2]));

//const kitchen = require('./kitchen');
// console.log(kitchen.boil(kitchen.food[1]));

//const recipe = require('./recipe');
// console.log(recipe(['meat', 'lettuce'], kitchen.cook, kitchen.serve));

const meal = require('./meal')('lunch');
meal('rice', 'bean', 'meat');
const meal2 = require('./meal')('dinner');
meal2('fish', 'potato', 'salad');
