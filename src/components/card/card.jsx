import React from 'react';
import PropTypes from 'prop-types';

import styles from './card.module.css';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Card(props) {
  const getDetails = () => {
    props.getDetails(props);
  };

  return (
    <div className={styles.card} onClickCapture={getDetails}>
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
  getDetails: PropTypes.func.isRequired,
}

export default Card;
