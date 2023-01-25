import { checkResponse } from "../../utils/utils";

export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_TOKEN = 'SET_TOKEN';
export const FETCH_PASSWORD_REQUEST = 'FETCH_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const FETCH_PASSWORD_ERROR = 'FETCH_PASSWORD_ERROR';

export const setEmail = (value) => (dispatch) => {
  dispatch({
    type: SET_EMAIL,
    payload: value
  });
};

export const setPassword = (value) => (dispatch) => {
  dispatch({
    type: SET_PASSWORD,
    payload: value
  });
};

export const setToken = (value) => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: value
  });
};

export const fetchForgotPassword = (email) => (dispatch) => {
  dispatch({
    type: FETCH_PASSWORD_REQUEST
  });

  fetch('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    body: JSON.stringify({
      email
    })
  })
    .then(res => checkResponse(res))
    .then(() => {
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_PASSWORD_ERROR
      });
      console.log(`Ошибка ${error}`);
    });
};

export const fetchResetPassword = (password, token) => (dispatch) => {
  dispatch({
    type: FETCH_PASSWORD_REQUEST
  });

  fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    body: JSON.stringify({
      password,
      token
    })
  })
    .then(res => checkResponse(res))
    .then(() => {
      dispatch({
        type: RESET_PASSWORD_SUCCESS
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_PASSWORD_ERROR
      });
      console.log(`Ошибка ${error}`);
    });
};

