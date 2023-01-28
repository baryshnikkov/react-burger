import { BASE_URL, checkResponse, ENDPOINT } from '../../utils/api';

export const GET_ODER_REQUEST = 'GER_ODER_REQUEST';
export const GET_ODER_SUCCESS = 'GET_ODER_SUCCESS';
export const GET_ODER_FAILED = 'GET_ODER_FAILED';
export const GET_ODER_INGREDIENTS = 'GET_ODER_INGREDIENTS';
export const CLOSE_MODAL_ODER = 'CLOSE_MODAL_ODER';

export const setOder = (constructorIngredients) => {
  return function (dispatch) {
    dispatch({
      type: GET_ODER_REQUEST
    });

    const arrOder = [];
    arrOder.push(constructorIngredients.bun['_id']?.split('?')[0]);
    constructorIngredients.other.forEach(el => {
      arrOder.push(el['_id'].split('?')[0]);
    });

    dispatch({
      type: GET_ODER_INGREDIENTS,
      ingredients: arrOder
    });

    fetch(BASE_URL + ENDPOINT.ORDERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: arrOder
      })
    })
      .then(res => checkResponse(res))
      .then(data => {
        if (data && data.success) {
          dispatch({
            type: GET_ODER_SUCCESS,
            oderNumber: data.order.number,
          });
        } else {
          dispatch({
            type: GET_ODER_FAILED
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ODER_FAILED
        });
        console.log(`Ошибка ${err}`);
      });
  };
};
