import { productsForConstructor } from '../../utils/utils'; //TODO delete

import {
  SET_INGREDIENT_FOR_CONSTRUCTOR,
  DELETE_INGREDIENT_FOR_CONSTRUCTOR,
  SET_TOTAL_PRICE
} from '../actions/constructorIngredients';

// const initialState = {
//   constructorIngredients: {
//     bun: {},
//     other: []
//   },
//   totalPrice: 0
// };

const initialState = {
  constructorIngredients: productsForConstructor,
  totalPrice: 0
};

export const a = 1;

export const inredientsInConstructor = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_FOR_CONSTRUCTOR: { //TODO: проверить пути
      if (action.data.type === 'bun') {
        return {
          ...state,
          constructorIngredients: {
            ...state.constructorIngredients,
            bun: action.data
          }
        };
      } else {
        return {
          ...state,
          constructorIngredients: {
            ...state.constructorIngredients,
            other: [...state.constructorIngredients.other, action.data]
          }
        };
      }
    };
    case DELETE_INGREDIENT_FOR_CONSTRUCTOR:
      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients,
          other: [state.constructorIngredients.other.filter(el => el['_id'] === action.id)] //TODO: разобраться с фильтром
        }
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + action.price
      }
    default:
      return state;
  };
};
