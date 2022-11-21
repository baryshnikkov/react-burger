import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
    <>
      <AppHeader />
      <MainContainer>
        <BurgerIngredients />
      </MainContainer>
    </>
  );
}

export default App;
