import React from 'react';

import styles from './cards.module.css';

function Cards(props) {
  return (
    <div className={styles.cards}>
      {props.children}
    </div>
  );
}

export default Cards;
