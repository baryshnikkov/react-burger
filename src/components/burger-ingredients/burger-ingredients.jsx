import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Cards from '../cards/cards';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('rolls');
  const [ingredients, setIngredients] = React.useState(props.products);

  const rolls = [];
  const fillings = [];
  const sauces = [];

  const filterIngredients = () => {
    ingredients.forEach(el => {
      switch (el['type']) {
        case 'bun':
          rolls.push(el);
          break;
        case 'main':
          fillings.push(el);
          break;
        case 'sauce':
          sauces.push(el);
          break;
        default:
          break;
      }
    });
  };
  filterIngredients();

  return (
    <div className={styles.container}>

      <h1 className={['text', 'text_type_main-large', 'mt-10', 'mb-5'].join(' ')}>
        Соберите бургер
      </h1>

      <div style={{ display: 'flex' }}>
        <Tab value="rolls" active={current === 'rolls'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
        Булки
      </h2>

      <Cards content={rolls} />

      <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
        Соусы
      </h2>

      <Cards content={sauces} />

      <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
        Начинки
      </h2>

      <Cards content={fillings} />

    </div>
  );
}

BurgerIngredients.propTypes = {
  products: PropTypes.array,
}

export default BurgerIngredients;
