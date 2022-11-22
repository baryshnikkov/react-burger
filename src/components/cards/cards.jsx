import React from 'react';

import styles from './cards.module.css';

import Card from '../card/card';

function Cards(props) {
  return (
    <div className={styles.cards}>
      {props.content.map(el => (
        <Card {...el} key={el['_id']} />
      ))}
    </div>
  );
}

export default Cards;
