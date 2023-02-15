import {
  GET_DATA_ABOUT_ORDER_DETAILS,
  DELETE_DATA_ABOUT_ORDER_DETAILS
} from '../actions/orderDetails';

const initialState = {
  orderDetails: {},
  orderDetailsIsOpened: false
};

export const orderDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_ABOUT_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.data,
        orderDetailsIsOpened: true
      };
    case DELETE_DATA_ABOUT_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: {},
        orderDetailsIsOpened: false
      };
    default:
      return state;
  }
  ;
};
