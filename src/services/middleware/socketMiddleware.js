import {WsAddresses} from "../../utils/webSocket";
import {getCookie} from "../../utils/utils";

export const socketMiddleware = wsUrl => {
  return store => {
    let socket = null;
    let socketAuth = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === 'WS_CONNECTION_START_USER') {
        socket = new WebSocket(`${WsAddresses.WS_ALL_ORDERS}`);
      }

      if (type === 'WS_CONNECTION_START_AUTH_USER') {
        const accessToken = getCookie('accessToken').split(' ')[getCookie('accessToken').split(' ').length - 1];
        socketAuth = new WebSocket(`${WsAddresses.WS_OWN_ORDERS}?token=${accessToken}`);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
        };

        socket.onmessage = event => {
          const data = JSON.parse(event.data)
          dispatch({ type: 'WS_GET_MESSAGE', payload: data });
        };

        socket.onclose = event => {
          dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
        };

        if (type === 'WS_SEND_MESSAGE') {
          const message = payload;
          socket.send(JSON.stringify(message));
        }

        if(type === 'WS_CLOSE_CONNECTION_BY_USER_SIDE') {
          socket.close();
        }
      }

      if (socketAuth) {
        socketAuth.onopen = event => {
          dispatch({ type: 'WS_AUTH_CONNECTION_SUCCESS', payload: event });
        };

        socketAuth.onerror = event => {
          dispatch({ type: 'WS_AUTH_CONNECTION_ERROR', payload: event });
        };

        socketAuth.onmessage = event => {
          const data = JSON.parse(event.data)
          dispatch({ type: 'WS_AUTH_GET_MESSAGE', payload: data });
        };

        socketAuth.onclose = event => {
          dispatch({ type: 'WS_AUTH_CONNECTION_CLOSED', payload: event });
        };

        if (type === 'WS_AUTH_SEND_MESSAGE') {
          const message = payload;
          socketAuth.send(JSON.stringify(message));
        }

        if(type === 'WS_AUTH_CLOSE_CONNECTION_BY_USER_SIDE') {
          socketAuth.close();
        }
      }

      next(action);
    };
  };
};
