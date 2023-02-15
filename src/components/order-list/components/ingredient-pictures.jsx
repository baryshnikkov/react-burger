import React from 'react';
import styles from './ingredient-pictures.module.css';

const IngredientPictures = (props) => {

  return (
    <div className={styles.orderIngredients}>

      {props.images.slice(0, 6).map(el =>
        <div className={styles.ingredient} key={el}>
          <img className={styles.img} src={el} alt='Иконка ингредиента'/>
        </div>
      )}
      {props.images.length > 6 &&
        <p className={`${styles.overlay} text text_type_main-default text_color_inactive`}>
          {`+${props.images.length - 5}`}
        </p>
      }
    </div>
  );
};

export default IngredientPictures;
