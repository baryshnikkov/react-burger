import React, {useEffect} from 'react';
import styles from './order-list.module.css';
import OrderCard from "./components/order-card";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import {WS_CONNECTION_START_AUTH_USER} from "../../services/actions/webSocket";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";

const getOrders = store => store.wsReducer;
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

  const data = props.orders || ownMessages[ownMessages.length - 1]?.orders;

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
