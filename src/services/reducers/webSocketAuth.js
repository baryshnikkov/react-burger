import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_MESSAGE,
  WS_CONNECTION_START_AUTH_USER
} from '../actions/webSocketAuth';

const initialState = {
  wsAuthConnected: false,
  ownMessages: [],
  error: undefined
};

export const wsReducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_START_AUTH_USER:
      return {
        ...state,
        isAuth: true
      };

    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsAuthConnected: true
      };

    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsAuthConnected: false
      };

    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsAuthConnected: false
      };

    case WS_AUTH_GET_MESSAGE:
        return {
          ...state,
          error: undefined,
          ownMessages: [...state.ownMessages, action.payload]
        };

    default:
      return state;
  }
};
