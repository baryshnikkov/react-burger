import { BASE_URL, checkResponse, ENDPOINT } from '../../utils/api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS__SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENT_FAILED';
export const INCREMENT_INGREDIENT = 'INCREMENT_INGREDIENT';
export const DECREMENT_INGREDIENT = 'DECREMENT_INGREDIENT';

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST
  });

  fetch(BASE_URL + ENDPOINT.INGREDIENTS)
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
    .catch((error) => {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      });
      console.log(`Ошибка ${error}`);
    });
};
