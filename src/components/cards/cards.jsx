import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './cards.module.css';

import Card from '../card/card';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function Cards(props) {
  const [ingredients, setIngredients] = React.useState([]);
  const [details, setDetails] = React.useState({});
  const [isOpened, setIsOpened] = React.useState(false);

  const closeIngredientDetails = () => {
    setIsOpened(false);
  };

  const getDetails = (value) => {
    setDetails(value);
    setIsOpened(true);
  };

  useEffect(() => {
    setIngredients(props.content);
  }, [props.content]);

  return (
    <>
      <div className={styles.cards}>
        {ingredients.map(el => (
          <Card {...el} key={el['_id']} getDetails={getDetails} />
        ))}
      </div>
      {isOpened &&
        <Modal closeModal={closeIngredientDetails}>
          <IngredientDetails details={details} />
        </Modal>}
    </>
  );
}

Cards.propTypes = {
  content: PropTypes.array.isRequired,
}

export default Cards;
