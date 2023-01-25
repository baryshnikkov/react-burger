import { combineReducers } from 'redux';

import { ingredientList } from './ingredientList';
import { constructorIngredients } from './constructorIngredients';
import { dataAboutIngredient } from './dataAboutIngredient';
import { oder } from './oder';
import { resetPassword } from './resetPassword';

export const rootReducer = combineReducers({
  ingredientList,
  constructorIngredients,
  dataAboutIngredient,
  oder,
  resetPassword
});
