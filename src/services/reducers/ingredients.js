import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  INCREMENT_INGREDIENT,
  DECREMENT_INGREDIENT
} from '../actions/ingredients';

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientList = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsRequest: true
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.ingredients
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      };
    case INCREMENT_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map(el => {
          if (action.sort === 'bun' && action.id === el._id) {
            const newElement = {
              ...el,
              __v: 1
            };
            return newElement;
          }
          if (action.sort === 'bun' && el.type === 'bun' && action.id !== el._id) {
            const newElement = {
              ...el,
              __v: 0
            };
            return newElement;
          }
          if (action.id === el._id) {
            const newElement = {
              ...el,
              __v: el.__v + 1
            };
            return newElement;
          }
          return el;
        })
      }
    case DECREMENT_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map(el => {
          if (action.id.split('?')[0] === el._id) {
            const newElement = {
              ...el,
              __v: el.__v - 1
            };
            return newElement;
          }
          return el;
        })
      };
    default:
      return state;
  };
};
