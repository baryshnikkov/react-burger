import React, {useMemo} from 'react';
import styles from "./order-card.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import IngredientPictures from "./ingredient-pictures";

const getIngredients = store => store.ingredientList;

const OrderCard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {ingredients} = useSelector(getIngredients);

  const handleClickOnCard = () => {
    if (location.pathname === '/feed') {
      navigate('/feed/123', {state: {ingredient: 'moc-data', background: 'feed'}});
    } else {
      navigate('/profile/orders/123', {state: {ingredient: 'moc-data', background: 'orders'}});
    }
  };

  const date = useMemo(() => {
    const currentDateObj = new Date;
    const currentGMT = currentDateObj.getTimezoneOffset() / 60;
    const currentTime = currentDateObj.getTime();

    const orderDate = new Date(
      props.createdAt.slice(0, 4),
      props.createdAt.slice(5, 7) - 1,
      props.createdAt.slice(8, 10)
    );
    const orderTime = props.createdAt.slice(11, 16);

    const differenceOfDays = Math.ceil(Math.abs(currentTime - orderDate.getTime()) / (1000 * 3600 * 24));

    let interval;

    if (differenceOfDays <= 1) {
      interval = 'Сегодня';
    } else if (differenceOfDays <= 2) {
      interval = 'Вчера';
    } else {
      interval = `${differenceOfDays - 1} суток назад`
    }

    return {interval, time: orderTime, gmt: currentGMT};
  }, [props]);

  const dataOrder = useMemo(() => {
    const arrImages = [];
    const arrPrice = [];

    ingredients.forEach(item => {
      if (props.ingredients.includes(item['_id'])) {
        arrImages.push(item.image);
        arrPrice.push(item.price);
      }
    });

    let price = 0;
    if (arrPrice.length) {
      price = arrPrice.reduce((a, b) => a + b);
    }

    return {images: arrImages, price};
  }, [props]);


  return (
    <div className={styles.orderCard} onClick={handleClickOnCard}>
      <div className={styles.orderDetails}>
        <p className='text text_type_digits-default'>
          #{props.number}
        </p>
        <p className='text text_type_main-default text_color_inactive'>
          {`${date.interval}, ${date.time} i-GMT${date.gmt}`}
        </p>
      </div>
      <p className='text text_type_main-medium'>
        {props.name}
      </p>
      {
        location.pathname === '/profile/orders' &&
        (
          <div className='text text_type_main-default'>
            {props.status === 'done' && <div style={{color: '#0CC'}}>Выполнен</div>}
            {props.status === 'created' && <div>Создан</div>}
            {props.status === 'pending' && <div>Готовится</div>}
          </div>
        )
      }
      <div className={styles.orderDescription}>
        <IngredientPictures images={dataOrder.images}/>
        <div className={styles.orderCost}>
          <p className='text text_type_digits-default'>
            {dataOrder.price}
          </p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </div>
  );
};

OrderCard.tpropTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  createdAt: PropTypes.string,
  ingredients: PropTypes.array
}

export default OrderCard;
