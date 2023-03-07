type TBaseUrl = 'https://norma.nomoreparties.space/api/';

export enum ENDPOINT {
  LOGIN = 'auth/login',
  REGISTER = 'auth/register',
  LOGOUT = 'auth/logout',
  TOKEN = 'auth/token',
  INGREDIENTS = 'ingredients',
  ORDERS = 'orders',
  PASSWORD_FORGOT = 'password-reset',
  PASSWORD_RESET = 'password-reset/reset',
  DATA_USER = 'auth/user'
};

export const BASE_URL: TBaseUrl = 'https://norma.nomoreparties.space/api/';

export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};
