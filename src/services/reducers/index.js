import { combineReducers } from 'redux';

import { ingredientList } from './ingredientList';
import { constructorIngredients } from './constructorIngredients';
import { dataAboutIngredient } from './dataAboutIngredient';
import { oder } from './oder';
import { userProcessing } from './userProcessing';

export const rootReducer = combineReducers({
  ingredientList,
  constructorIngredients,
  dataAboutIngredient,
  oder,
  userProcessing
});
