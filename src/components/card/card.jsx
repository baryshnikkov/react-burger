import React from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import styles from './card.module.css';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { GET_DATA_ABOUT_INGREDIENT } from '../../services/actions/dataAboutIngredient';

function Card(props) {
  const dispatch = useDispatch();

  const openIngredientDetails = () => {
    dispatch({
      type: GET_DATA_ABOUT_INGREDIENT,
      data: props
    });
  };

  const [{ opacity }, refDrag] = useDrag({
    type: 'ingredient',
    item: { ...props },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  return (
    <div className={styles.card} onClickCapture={openIngredientDetails} ref={refDrag} style={{ opacity }}>
      {Boolean(props.__v) && <Counter count={props.__v} size="default" extraClass="m-1" />}
      <img className={styles.img} src={props.image} alt={props.name} />
      <div className={[styles.price, 'mt-2', 'mb-2'].join(' ')}>
        <p className={['text', 'text_type_digits-default'].join(' ')}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={[styles.description, 'text', 'text_type_main-default'].join(' ')}>{props.name}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  __v: PropTypes.number.isRequired,
}

export default Card;
