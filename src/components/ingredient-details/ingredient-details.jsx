import { useSelector } from 'react-redux';

import styles from './ingredient-details.module.css';

const getAboutIngredient = store => store.dataAboutIngredient;

function IngredientDetails() {
  const { aboutIngredients } = useSelector(getAboutIngredient);

  const displayEnergyValue = (type, value) => {
    return (
      <div className={styles.bju}>
        <p className="text text_type_main-default text_color_inactive">
          {type}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          {value}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <p className={`${styles.title} text text_type_main-large`}>
        Детали ингредиента
      </p>

      <img className={styles.image} src={aboutIngredients.image} alt={aboutIngredients.name} />

      <p className={`${styles.name} text text_type_main-medium`}>
        {aboutIngredients.name}
      </p>

      <div className={styles.compound}>
        {displayEnergyValue('Калории,ккал', aboutIngredients.calories)}
        {displayEnergyValue('Белки, г', aboutIngredients.proteins)}
        {displayEnergyValue('Жиры, г', aboutIngredients.fat)}
        {displayEnergyValue('Углеводы, г', aboutIngredients.carbohydrates)}
      </div>
    </div>
  );
}

export default IngredientDetails;
