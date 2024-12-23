// Combines cooking actions and food items into a single module for export.
import cookingActions from './cookingActions.js';
import { food } from './food.js';

export default {
  // All the spread properties from cookingActions and the food property are combined into the same exported object.
  ...cookingActions,
  food,
};
