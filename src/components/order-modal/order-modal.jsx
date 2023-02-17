import React, {useEffect, useMemo, useState} from 'react';
import styles from './order-modal.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {calculateDate} from "../../utils/utils";
import {DELETE_DATA_ABOUT_ORDER_DETAILS} from "../../services/actions/orderDetails";
import {useLocation, useNavigate} from "react-router-dom";

const getOrderDetails = store => store.orderDetails;
const getIngredients = store => store.ingredientList;

const OrderModal = () => {
  const {orderDetails} = useSelector(getOrderDetails);
  const {ingredients} = useSelector(getIngredients);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let totalPrice = 0;

  useEffect(() => {
    if (!orderDetails) {
      dispatch({
        type: DELETE_DATA_ABOUT_ORDER_DETAILS
      });

      const path = location.pathname.includes('/feed')
        ? location.pathname.slice(0, 5)
        : location.pathname.slice(0, 15);

      navigate(`${path}`, {replace: true});
    }
  }, []);

  const date = useMemo(() => {
    return calculateDate(orderDetails);
  }, [orderDetails]);

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

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={`${styles.number} text text_type_digits-default`}>
          #{orderDetails?.number}
        </p>
        <p className={`${styles.title} text text_type_main-medium`}>
          {orderDetails?.name}
        </p>
        <div className={`${styles.status} text text_type_main-default`}>
          {orderDetails?.status === 'done' && <div style={{color: '#0CC'}}>Выполнен</div>}
          {orderDetails?.status === 'created' && <div>Создан</div>}
          {orderDetails?.status === 'pending' && <div>Готовится</div>}
        </div>
        <p className="text text_type_main-medium">
          Состав:
        </p>
        <div className={styles.ingredients}>
          {orderDetails?.ingredients.map(el =>
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
};

export default OrderModal;
