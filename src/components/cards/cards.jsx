import React from 'react';
import PropTypes from 'prop-types';

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

Cards.propTypes = {
  content: PropTypes.array.isRequired,
}

export default Cards;
