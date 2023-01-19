import {
  SET_INGREDIENT_FOR_CONSTRUCTOR,
  DELETE_INGREDIENT_FOR_CONSTRUCTOR,
  SET_TOTAL_PRICE,
  MOVE_INGREDIENT
} from '../actions/constructorIngredients';

const initialState = {
  constructorIngredients: {
    bun: {},
    other: []
  },
  totalPrice: 0
};

export const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_FOR_CONSTRUCTOR:
      if (action.data.type === 'bun') {
        return {
          ...state,
          constructorIngredients: {
            ...state.constructorIngredients,
            bun: { ...action.data, _id: action.data._id + '?' + Math.random() }
          }
        };
      } else {
        return {
          ...state,
          constructorIngredients: {
            ...state.constructorIngredients,
            other: [...state.constructorIngredients.other, { ...action.data, _id: action.data._id + '?' + Math.random() }]
          }
        };
      }
    case DELETE_INGREDIENT_FOR_CONSTRUCTOR:
      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients,
          other: [...state.constructorIngredients.other.filter(el => el['_id'] !== action.id)]
        }
      };
    case SET_TOTAL_PRICE:
      let price = state.constructorIngredients.bun.price * 2 || 0;
      state.constructorIngredients.other.forEach(el => {
        price += el.price;
      });
      return {
        ...state,
        totalPrice: price
      };
    case MOVE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients,
          other: action.updatedIngredients
        }
      };
    default:
      return state;
  };
};
