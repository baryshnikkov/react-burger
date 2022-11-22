import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import products from '../utils/data';

function App() {
  const products = ['60666c42cc7b410027a1a9b1', '60666c42cc7b410027a1a9bf', '60666c42cc7b410027a1a9bf',
    '60666c42cc7b410027a1a9bf', '60666c42cc7b410027a1a9bf', '60666c42cc7b410027a1a9bf', '60666c42cc7b410027a1a9bf',
    '60666c42cc7b410027a1a9bf', '60666c42cc7b410027a1a9b1'];

  return (
    <>
      <AppHeader />
      <MainContainer>
        <BurgerIngredients />
        <BurgerConstructor products={products} />
      </MainContainer>
    </>
  );
}

export default App;
