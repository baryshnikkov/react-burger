import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from "./order-card.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import IngredientPictures from "./ingredient-pictures";
import {calculateDate} from "../../../utils/utils";

const getIngredientsList = store => store.ingredientList;

const OrderCard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {ingredients} = useSelector(getIngredientsList);
  const [dataOrder, setDataOrder] = useState({images: [], price: 0})

  const handleClickOnCard = () => {
    if (location.pathname === '/feed') {
      navigate(`/feed/${props['_id']}`, {state: {ingredient: 'moc-data', background: 'feed'}});
    } else {
      navigate(`/profile/orders/${props['_id']}`, {state: {ingredient: 'moc-data', background: 'orders'}});
    }
  };

  const date = useMemo(() => {
    return calculateDate(props);
  }, [props]);

  const getDataOrder = useCallback(() => {
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

    setDataOrder({images: arrImages, price});

  }, [props.ingredients]);

  useEffect(() => {
    getDataOrder();
  }, [ingredients]);

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
