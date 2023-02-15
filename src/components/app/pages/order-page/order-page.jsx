import React, {useEffect} from 'react';
import styles from './order-page.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {GET_DATA_ABOUT_ORDER_DETAILS} from "../../../../services/actions/orderDetails";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import OrderFeedPage from "../order-feed-page/order-feed-page";
import OrderList from "../../../order-list/order-list";
import ProfilePage from "../profile-page/profile-page";

const OrderPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const openModal = () => {
    dispatch({
      type: GET_DATA_ABOUT_ORDER_DETAILS,
      data: [1,2]
    });
  };

  useEffect(() => {
    if (location.state?.background === 'feed' || location.state?.background === 'orders') {
      openModal();
    }
  }, []);

  const ingredient = (
    <div className={styles.ingredient}>
      <div className={styles.imgBorder}>
        <img className={styles.img} src="https://i.ytimg.com/vi/s7fZ-P2doIw/maxresdefault.jpg" alt="lis"/>
      </div>
      <p className={`${styles.name} text text_type_main-default`}>
        Флюоресцентная булка R2-D3
      </p>
      <div className={styles.price}>
        <p className="text text_type_digits-default">
          2
        </p>
        <p className="text text_type_main-default">
          x
        </p>
        <p className="text text_type_digits-default">
          20
        </p>
        <CurrencyIcon type="primary"/>
      </div>
    </div>
  );

  const page = (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={`${styles.number} text text_type_digits-default`}>
          #034533
        </p>
        <p className={`${styles.title} text text_type_main-medium`}>
          Black Hole Singularity острый бургер
        </p>
        <p className={`${styles.status} text text_type_main-default`}>
          Выполнен
        </p>
        <p className="text text_type_main-medium">
          Состав:
        </p>
        <div className={styles.ingredients}>
          {ingredient}
          {ingredient}
          {ingredient}
          {ingredient}
          {ingredient}
          {ingredient}
        </div>
        <div className={styles.description}>
          <p className='text text_type_main-default text_color_inactive'>
            Сегодня, 16:20 i-GMT+3
          </p>
          <div className={styles.price}>
            <p className="text text_type_digits-default">
              40
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
