import React, { useEffect } from 'react';

import styles from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Cards from '../cards/cards';
import { ProductsContext } from '../../services/app-context';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('rolls');
  const [ingredients, setIngredients] = React.useState([]);
  const {products} = React.useContext(ProductsContext);

  const rolls = [];
  const fillings = [];
  const sauces = [];

  useEffect(() => {
    setIngredients(products);
  }, [products]);

  useEffect(() => {
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
  }, [ingredients, current]);

  return (
    <div className={styles.container}>

      <h1 className={['text', 'text_type_main-large', 'mt-10', 'mb-5'].join(' ')}>
        Соберите бургер
      </h1>

      <div className={styles.tab}>
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

      <div className={styles.ingredients}>
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

    </div>
  );
}

export default BurgerIngredients;
