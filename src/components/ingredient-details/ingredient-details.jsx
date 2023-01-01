import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ingredient-details.module.css';

const getAboutIngredient = store => store.dataAboutIngredient;

function IngredientDetails() {
  const { aboutIngredients } = useSelector(getAboutIngredient);

  return (
    <div className={styles.container}>
      <p className={['text', 'text_type_main-large', styles.title].join(' ')}>
        Детали ингредиента
      </p>

      <img className={styles.image} src={aboutIngredients.image} alt={aboutIngredients.name} />

      <p className={['text', 'text_type_main-medium', styles.description].join(' ')}>
        {aboutIngredients.name}
      </p>

      <div className={styles.compound}>

        <div className={styles.bju}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {aboutIngredients.calories}
          </p>
        </div>

        <div className={styles.bju}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {aboutIngredients.proteins}
          </p>
        </div>

        <div className={styles.bju}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {aboutIngredients.fat}
          </p>
        </div>

        <div className={styles.bju}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {aboutIngredients.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
