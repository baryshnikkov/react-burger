import { BASE_URL, checkResponse, ENDPOINT } from "../../utils/api";
import { setCookie } from "../../utils/utils";

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const loginUser = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  fetch(BASE_URL + ENDPOINT.LOGIN, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => checkResponse(res))
    .then(data => {
      setCookie('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      dispatch({ type: LOGIN_USER_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_USER_FAILED });
      console.log(`Ошибка ${error}`);
    });
};

export const registerUser = (email, password, name) => (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  fetch(BASE_URL + ENDPOINT.REGISTER, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password,
      name
    })
  })
    .then(res => checkResponse(res))
    .then(data => {
      setCookie('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      dispatch({ type: REGISTER_USER_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_USER_FAILED });
      console.log(`Ошибка ${error}`);
    });
};

export const logoutUser = (refreshToken) => (dispatch) => {
  fetch(BASE_URL + ENDPOINT.LOGOUT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: refreshToken
    })
  })
    .finally(() => {
      setCookie('accessToken', '');
      localStorage.setItem('refreshToken', '');
      dispatch({ type: LOGOUT_USER });
    })
};

export const updateToken = (refreshToken) => (dispatch) => {
  dispatch({ type: UPDATE_TOKEN_REQUEST });

  fetch(BASE_URL + ENDPOINT.TOKEN, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: refreshToken
    })
  })
    .then(res => checkResponse(res))
    .then(data => {
      setCookie('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      dispatch({ type: UPDATE_TOKEN_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_TOKEN_FAILED });
      console.log(`Ошибка ${error}`);
    });
};

export const forgotPassword = (email) => (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });

  fetch(BASE_URL + ENDPOINT.PASSWORD_FORGOT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email
    })
  })
    .then(res => checkResponse(res))
    .then(() => {
      dispatch({ type: FORGOT_PASSWORD_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });
      console.log(`Ошибка ${error}`);
    });
};

export const resetPassword = (password, token) => (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });

  fetch(BASE_URL + ENDPOINT.PASSWORD_RESET, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password,
      token
    })
  })
    .then(res => checkResponse(res))
    .then(() => {
      dispatch({ type: REGISTER_USER_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_USER_SUCCESS });
      console.log(`Ошибка ${error}`);
    });
};
