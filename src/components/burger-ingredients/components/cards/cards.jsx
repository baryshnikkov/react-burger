import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './cards.module.css';
import Card from '../card/card';

const Cards = forwardRef((props, ref) => {
  return (
    <>
      <h2 className={`${styles.title} text text_type_main-medium`} ref={ref}>
        {props.title}
      </h2>
      <div className={styles.cards}>
        {props.content.map(el => (
          <Card {...el} key={el['_id']} />
        ))}
      </div>
    </>
  );
});

Cards.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default Cards;
