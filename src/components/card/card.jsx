import React from 'react';

import styles from './card.module.css';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Card({ img, text, price, alt, count }) {
  return (
    <div className={styles.card}>
      {Boolean(count) && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={styles.img} src={img} alt={alt} />
      <div className={[styles.price, 'mt-2', 'mb-2'].join(' ')}>
        <p className={['text', 'text_type_digits-default'].join(' ')}>{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={[styles.description, 'text', 'text_type_main-default'].join(' ')}>{text}</p>
    </div>
  );
}

export default Card;
