import React, {useEffect} from 'react';
import styles from './order-list.module.css';
import OrderCard from "./components/order-card";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import {WS_CONNECTION_START_AUTH_USER} from "../../services/actions/webSocketAuth";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";

const getOrders = store => store.wsReducerAuth;
const getIngredientsList = store => store.ingredientList;

const OrderList = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {ownMessages, isAuth} = useSelector(getOrders);
  const {ingredients} = useSelector(getIngredientsList);

  useEffect(() => {
    if (ingredients.length === 0) {
      dispatch(getIngredients());
    }
  }, [ingredients]);

  useEffect(() => {
    if (location.pathname.includes('/profile/orders')) {
      dispatch({type: WS_CONNECTION_START_AUTH_USER});
    }
  }, [isAuth]);

  if (location.pathname.includes('feed')) {
    return (
      <div className={styles.orderList}>
        {props.orders?.map(data =>
          <OrderCard {...data} key={data['_id']} />
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.orderList}>
        {ownMessages[ownMessages.length - 1]?.orders?.reverse().map(data =>
          <OrderCard {...data} key={data['_id']} />
        )}
      </div>
    );
  }
};

OrderList.tpropTypes = {
  orders: PropTypes.array,
}

export default OrderList;
