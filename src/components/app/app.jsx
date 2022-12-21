import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <>
      <AppHeader />
      <MainContainer>
        <BurgerIngredients />
        <BurgerConstructor />
      </MainContainer>
    </>
  );
}

export default App;
