import { combineReducers } from 'redux';

import { ingredientList } from './ingredientList';
import { constructorIngredients } from './constructorIngredients';
import { dataAboutIngredient } from './dataAboutIngredient';
import { oder } from './oder';
import { userProcessing } from './userProcessing';
import { orderDetails } from "./orderDetails";
import {wsReducer} from "./webSocket";
import {wsReducerAuth} from "./webSocketAuth";

export const rootReducer = combineReducers({
  ingredientList,
  constructorIngredients,
  dataAboutIngredient,
  oder,
  userProcessing,
  orderDetails,
  wsReducer,
  wsReducerAuth
});
