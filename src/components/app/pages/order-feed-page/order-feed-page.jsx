import React, {useEffect, useMemo} from 'react';
import styles from './order-feed-page.module.css';
import OrderList from "../../../order-list/order-list";
import OrderStatistics from "../../../order-statistics/order-statistics";
import ModalContainer from "../../../modal-container/modal-container";
import {useDispatch, useSelector} from "react-redux";
import OrderModal from "../../../order-modal/order-modal";
import {useNavigate} from "react-router-dom";
import {DELETE_DATA_ABOUT_ORDER_DETAILS} from "../../../../services/actions/orderDetails";
import {WS_CONNECTION_START_UNAUTH_USER} from "../../../../services/actions/webSocket";

const getOrderDetails = store => store.orderDetails;
const getOrders = store => store.wsReducer;

const OrderFeedPage = () => {
  const {orderDetailsIsOpened} = useSelector(getOrderDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {wsConnected, messages} = useSelector(getOrders);

  useEffect(() => {
      dispatch({type: WS_CONNECTION_START_UNAUTH_USER});
  }, []);

  const closeIngredientDetails = () => {
    dispatch({
      type: DELETE_DATA_ABOUT_ORDER_DETAILS
    });
    navigate('/feed', {replace: true});
  };

  const orderStatuses = useMemo(() => {
    const ready = [];
    const inProcess = [];

    messages[messages.length - 1]?.orders.forEach(el => {
      if (el.status === 'done') {
        ready.push(el.number);
      } else {
        inProcess.push(el.number);
      }
    });

    return {ready, inProcess};
  }, [messages]);

  return (
    <>
      <div className={styles.container}>
        <h1 className="text text_type_main-large">
          Лента заказов
        </h1>
        <div className={styles.content}>
          <OrderList orders={messages[messages.length - 1]?.orders}/>
          <OrderStatistics
            total={messages[messages.length - 1]?.total}
            totalToday={messages[messages.length - 1]?.totalToday}
            status={orderStatuses}
          />
        </div>
      </div>

      {
        orderDetailsIsOpened
        &&
        <ModalContainer closeModal={closeIngredientDetails}>
          <OrderModal/>
        </ModalContainer>
      }
    </>
  );
};

export default OrderFeedPage;
