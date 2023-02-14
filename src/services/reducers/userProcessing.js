import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGOUT_USER,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED
} from '../actions/userProcessing';

const initialState = {
  isLoginSuccess: false,
  isLoginRequest: false,
  isLoginFailed: false,

  isRegisteredRequest: false,
  isRegisteredFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordSuccess: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false
};

export const userProcessing = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return ({
        ...state,
        isLoginRequest: true,
        isLoginFailed: false
      });
    case LOGIN_USER_SUCCESS:
      return ({
        ...state,
        isLoginRequest: false,
        isLoginSuccess: true
      });
    case LOGIN_USER_FAILED:
      return ({
        ...state,
        isLoginRequest: false,
        isLoginFailed: true
      });
    case REGISTER_USER_REQUEST:
      return ({
        ...state,
        isRegisteredRequest: true,
        isRegisteredFailed: false
      });
    case REGISTER_USER_SUCCESS:
      return ({
        ...state,
        isRegisteredRequest: false,
        isLoginSuccess: true
      });
    case REGISTER_USER_FAILED:
      return ({
        ...state,
        isRegisteredRequest: false,
        isRegisteredFailed: true
      });
    case LOGOUT_USER:
      return ({
        ...state,
        isLoginSuccess: false
      });
    case UPDATE_TOKEN_REQUEST:
      return ({
        ...state,
        updateTokenRequest: true,
        updateTokenFailed: false
      });
    case UPDATE_TOKEN_SUCCESS:
      return ({
        ...state,
        updateTokenRequest: false,
        isLoginSuccess: true,
      });
    case UPDATE_TOKEN_FAILED:
      return ({
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: true
      });
    case FORGOT_PASSWORD_REQUEST:
      return ({
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false
      });
    case FORGOT_PASSWORD_SUCCESS:
      return ({
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: true
      });
    case FORGOT_PASSWORD_FAILED:
      return ({
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true
      });
    case RESET_PASSWORD_REQUEST:
      return ({
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false
      });
    case RESET_PASSWORD_SUCCESS:
      return ({
        ...state,
        resetPasswordRequest: false,
        resetPasswordSuccess: false
      });
    case RESET_PASSWORD_FAILED:
      return ({
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true
      });
    default:
      return state;
  }
};
