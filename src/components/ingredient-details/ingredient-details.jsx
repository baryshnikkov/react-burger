import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './ingredient-details.module.css';

function IngredientDetails(props) {
  return (
    <>
      <div className={styles.container}>
        <p className={['text', 'text_type_main-large', styles.title].join(' ')}>
          Детали ингредиента
        </p>

        <img className={styles.image} src={props.details?.image} alt={props.details?.name} />

        <p className={['text', 'text_type_main-medium', styles.description].join(' ')}>
          {props.details?.name}
        </p>

        <div className={styles.compound}>

          <div className={styles.bju}>
            <p className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {props.details?.calories}
            </p>
          </div>

          <div className={styles.bju}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {props.details?.proteins}
            </p>
          </div>

          <div className={styles.bju}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {props.details?.fat}
            </p>
          </div>

          <div className={styles.bju}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {props.details?.carbohydrates}
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

IngredientDetails.propTypes = {
  details: PropTypes.object.isRequired,
}

export default IngredientDetails;
