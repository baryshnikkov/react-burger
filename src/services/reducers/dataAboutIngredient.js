import {
  GET_DATA_ABOUT_INGREDIENT,
  DELETE_DATA_ABOUT_INGREDIENT
} from '../actions/dataAboutIngredient';

const initialState = {
  aboutIngredients: {},
  ingredientDataModalIsOpened: false
};

export const dataAboutIngredient = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_ABOUT_INGREDIENT:
      return {
        ...state,
        aboutIngredients: action.data, //TODO: возсожно другой путь
        ingredientDataModalIsOpened: true
      };
    case DELETE_DATA_ABOUT_INGREDIENT:
      return {
        ...state,
        aboutIngredients: {},
        ingredientDataModalIsOpened: false
      };
    default:
      return state;
  };
};
