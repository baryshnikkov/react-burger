import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './cards.module.css';

import Card from '../card/card';

function Cards(props) {
  const [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    setIngredients(props.content);
  }, [props.content]);

  return (
    <div className={styles.cards}>
      {ingredients.map(el => (
        <Card {...el} key={el['_id']} getDetails={props.getDetails} />
      ))}
    </div>
  );
}

Cards.propTypes = {
  content: PropTypes.array.isRequired,
  getDetails: PropTypes.func.isRequired,
}

export default Cards;
