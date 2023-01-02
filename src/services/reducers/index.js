import { combineReducers } from 'redux';

import { ingredientList } from './ingredients';
import { inredientsInConstructor } from './constructorIngredients';
import { dataAboutIngredient } from './dataAboutIngredient';
import { oder } from './oder';

export const rootReducer = combineReducers({
  ingredients: ingredientList,
  constructorIngredients: inredientsInConstructor,
  dataAboutIngredient,
  oder
});
