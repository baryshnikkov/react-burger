import React from 'react';

import styles from './burger-constructor.module.css';

import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import products from '../utils/data';

function BurgerConstructor(props) {

  const [rolls, setRolls] = React.useState({ name: 'James', surname: 'Wilson' });
  const [ingredients, setIngredients] = React.useState([]);

  return (
    <div className={[styles.container, 'pt-25'].join(' ')}>

    </div>
  );
}

export default BurgerConstructor;
