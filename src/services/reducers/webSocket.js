import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_START_UNAUTH_USER,
  WS_CONNECTION_START_AUTH_USER
} from '../actions/webSocket';

const initialState = {
  isAuth: false,
  wsConnected: false,
  messages: [],
  ownMessages: [],
  error: undefined
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_START_UNAUTH_USER:
      return {
        ...state,
        isAuth: false
      };

    case WS_CONNECTION_START_AUTH_USER:
      return {
        ...state,
        isAuth: true
      };

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_GET_MESSAGE:
      if (state.isAuth) {
        return {
          ...state,
          error: undefined,
          ownMessages: [...state.messages, action.payload]
        };
      } else {
        return {
          ...state,
          error: undefined,
          messages: [...state.messages, action.payload]
        };
      }

    default:
      return state;
  }
};
