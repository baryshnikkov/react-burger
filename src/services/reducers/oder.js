import {
  GET_ODER_REQUEST,
  GET_ODER_SUCCESS,
  GET_ODER_FAILED,
  GET_ODER_INGREDIENTS,
  CLOSE_MODAL_ODER
} from '../actions/oder';

const initialState = {
  ingredientsOder: [],
  ingredientsOderRequest: false,
  ingredientsOderFailed: false,
  ingredientsOderIsOpened: false,
  oderNumber: null
};

export const oder = (state = initialState, action) => {
  switch (action.type) {
    case GET_ODER_REQUEST:
      return {
        ...state,
        ingredientsOderRequest: true
      };
    case GET_ODER_SUCCESS:
      return {
        ...state,
        ingredientsOderRequest: false,
        ingredientsOderFailed: false,
        ingredientsOderIsOpened: true,
        oderNumber: action.oderNumber,
      };
    case GET_ODER_FAILED:
      return {
        ...state,
        ingredientsOderRequest: false,
        ingredientsOderFailed: true,
        oderNumber: null
      };
    case GET_ODER_INGREDIENTS:
      return {
        ...state,
        ingredientsOder: action.ingredients
      };
    case CLOSE_MODAL_ODER:
      return {
        ...state,
        ingredientsOderIsOpened: false
      };
    default:
      return state;
  };
};
