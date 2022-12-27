import { checkResponse } from '../../utils/utils';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS__SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENT_FAILED';
export const INCREMENT_INGREDIENT = 'INCREMENT_INGREDIENT';
export const DECREMENT_INGREDIENT = 'DECREMENT_INGREDIENT';

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });

    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(res => checkResponse(res))
      .then(data => {
        if (data && data.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: data.data
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        });
        console.log(`Ошибка ${err}`);
      });
  };
};
