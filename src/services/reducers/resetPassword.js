import {
  SET_EMAIL,
  SET_TOKEN,
  SET_PASSWORD,
  FETCH_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  FETCH_PASSWORD_ERROR
} from '../actions/resetPassword';

const initialState = {
  email: '',
  password: '',
  token: '',
  request: false,
  error: false
};

export const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return ({
        ...state,
        email: action.payload
      });
    case SET_TOKEN:
      return ({
        ...state,
        token: action.payload
      });
    case SET_PASSWORD:
      return ({
        ...state,
        password: action.payload
      });
    case FETCH_PASSWORD_REQUEST:
      return ({
        ...state,
        request: true,
        error: false
      });
    case FORGOT_PASSWORD_SUCCESS:
      return ({
        ...state,
        request: false
      });
    case RESET_PASSWORD_SUCCESS:
      return ({
        ...state,
        request: false,
        email: '',
        password: '',
        token: ''
      });
    case FETCH_PASSWORD_ERROR:
      return ({
        ...state,
        request: false,
        error: true
      });
    default:
      return state;
  };
};
