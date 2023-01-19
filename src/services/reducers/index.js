import { combineReducers } from 'redux';

import { ingredientList } from './ingredientList';
import { constructorIngredients } from './constructorIngredients';
import { dataAboutIngredient } from './dataAboutIngredient';
import { oder } from './oder';

export const rootReducer = combineReducers({
  ingredientList,
  constructorIngredients,
  dataAboutIngredient,
  oder
});
