import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from './order-page.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {GET_DATA_ABOUT_ORDER_DETAILS} from "../../../../services/actions/orderDetails";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import OrderFeedPage from "../order-feed-page/order-feed-page";
import OrderList from "../../../order-list/order-list";
import ProfilePage from "../profile-page/profile-page";
import {WS_CONNECTION_START_UNAUTH_USER} from "../../../../services/actions/webSocket";
import { getIngredients } from '../../../../services/actions/ingredients';
import {calculateDate} from "../../../../utils/utils";

const getOrders = store => store.wsReducer;
const getIngredientsList = store => store.ingredientList;

const OrderPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {messages, ownMessages} = useSelector(getOrders);
  const {ingredients} = useSelector(getIngredientsList);
  const [orderData, setOrderData] = useState({
    _id: '',
    ingredients: [],
    status: '',
    name: '',
    createdAt: '',
    updateAt: '',
    number: 0
  });
  let selectedOrder;
  let totalPrice = 0;

  const getSelectedOrder = useCallback(() => {
    const idOrder = location.pathname.split('/').pop();
    const listOrder = location.pathname.includes('profile')
      ? ownMessages.pop()?.orders
      : messages.pop()?.orders

    selectedOrder = listOrder?.find(el => {
      return el['_id'] === idOrder;
    });

    setOrderData(selectedOrder);
  }, [messages]);

  const openModal = useCallback(() => {
    getSelectedOrder();

    dispatch({
      type: GET_DATA_ABOUT_ORDER_DETAILS,
      data: selectedOrder
    });
  }, []);

  useEffect(() => {
    dispatch({type: WS_CONNECTION_START_UNAUTH_USER});
  }, []);


  useEffect(() => {
    if (location.state?.background === 'feed' || location.state?.background === 'orders') {
      openModal();
    }
  }, []);

  useEffect(() => {
    if (location.state?.background !== 'feed' || location.state?.background !== 'orders') {
      dispatch(getIngredients());
      getSelectedOrder();
    }
  }, [messages]);

  const date = useMemo(() => {
    return calculateDate(orderData);
  }, [orderData]);

  const ingredient = (data) => {
    const {image, name, price, _id} = ingredients.find((el) => {
      return el['_id'] === data;
    });

    totalPrice += price;

    return (
      <div className={styles.ingredient} key={`${_id}/${Math.random()}`}>
        <div className={styles.imgBorder}>
          <img className={styles.img} src={image} alt="Фото ингредиента"/>
        </div>
        <p className={`${styles.name} text text_type_main-default`}>
          {name}
        </p>
        <div className={styles.price}>
          <p className="text text_type_digits-default">
            {price}
          </p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    )
  };

  const page = (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={`${styles.number} text text_type_digits-default`}>
          #{orderData?.number}
        </p>
        <p className={`${styles.title} text text_type_main-medium`}>
          {orderData?.name}
        </p>
        <div className={`${styles.status} text text_type_main-default`}>
          {orderData?.status === 'done' && <div style={{color: '#0CC'}}>Выполнен</div>}
          {orderData?.status === 'created' && <div>Создан</div>}
          {orderData?.status === 'pending' && <div>Готовится</div>}
        </div>
        <p className="text text_type_main-medium">
          Состав:
        </p>
        <div className={styles.ingredients}>
          {orderData?.ingredients && orderData?.ingredients.map(el =>
            ingredient(el)
          )}
        </div>
        <div className={styles.description}>
          <p className='text text_type_main-default text_color_inactive'>
            {`${date.interval}, ${date.time} i-GMT${date.gmt}`}
          </p>
          <div className={styles.price}>
            <p className="text text_type_digits-default">
              {totalPrice}
            </p>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </div>
    </div>
  );

  if (location.state?.background === 'feed') {
    return (
      <>
        <OrderFeedPage />
      </>
    );
  } else if (location.state?.background === 'orders') {
    return (
      <>
        <ProfilePage element={<OrderList/>} />
      </>
    );
  } else {
    return page;
  }
};

export default OrderPage;
