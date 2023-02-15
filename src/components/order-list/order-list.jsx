import React, {useEffect} from 'react';
import styles from './order-list.module.css';
import OrderCard from "./components/order-card";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import {WS_CONNECTION_START} from "../../services/actions/webSocket";
import {WS_OWN_ORDERS} from "../../utils/webSocket";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "../../utils/utils";

const getOrders = store => store.wsReducer;

const OrderList = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {messages} = useSelector(getOrders);

  useEffect(() => {
    if (location.pathname === '/profile/orders') {
      const accessToken = getCookie('accessToken').split(' ')[1];
      dispatch({type: WS_CONNECTION_START, payload: `${WS_OWN_ORDERS}?token=${accessToken}`});
    }
  }, []);

  const data = props.orders || messages[messages.length - 1]?.orders;

  return (
    <div className={styles.orderList}>
      {data?.map(data =>
        <OrderCard {...data} key={data['_id']} />
      )}
    </div>
  );
};

OrderList.tpropTypes = {
  orders: PropTypes.array,
}

export default OrderList;
