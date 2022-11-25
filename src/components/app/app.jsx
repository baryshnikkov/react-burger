import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import products from '../../utils/data';

function App() {

  // Предполагаю, что ингредиенты в конструктор будут попадать с помощью
  // метода addProductToConstructor в сосотояние productsForConstructor
  // Изначально он будет пустым, сейчас для примера
  const [productsForConstructor, setProductsForConstructor] = React.useState({
    bun: {
      "_id": "60666c42cc7b410027a1a9b1",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 1
    },
    other: [{
    "_id": "60666c42cc7b410027a1a9b5",
    "name": "Говяжий метеорит (отбивная)",
    "type": "main",
    "proteins": 800,
    "fat": 800,
    "carbohydrates": 300,
    "calories": 2674,
    "price": 3000,
    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
    "__v": 0
  }, {
    "_id": "60666c42cc7b410027a1a9b6",
    "name": "Биокотлета из марсианской Магнолии",
    "type": "main",
    "proteins": 420,
    "fat": 142,
    "carbohydrates": 242,
    "calories": 4242,
    "price": 424,
    "image": "https://code.s3.yandex.net/react/code/meat-01.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
    "__v": 0
  }, {
    "_id": "60666c42cc7b410027a1a9b7",
    "name": "Соус Spicy-X",
    "type": "sauce",
    "proteins": 30,
    "fat": 20,
    "carbohydrates": 40,
    "calories": 30,
    "price": 90,
    "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    "__v": 0
  }, , {
    "_id": "60666c42cc7b410027a1a9bf",
    "name": "Сыр с астероидной плесенью",
    "type": "main",
    "proteins": 84,
    "fat": 48,
    "carbohydrates": 420,
    "calories": 3377,
    "price": 4142,
    "image": "https://code.s3.yandex.net/react/code/cheese.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/cheese-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/cheese-large.png",
    "__v": 0
  }]});

  const addProductToConstructor = (el) => {
    if (el['type'] === 'bun') {
      setProductsForConstructor({...productsForConstructor, bun: el});
    } else {
      setProductsForConstructor({...productsForConstructor, other: [...productsForConstructor.other, el]});
    }
  };

  return (
    <>
      <AppHeader />
      <MainContainer>
        <BurgerIngredients products={products} />
        <BurgerConstructor products={productsForConstructor} />
      </MainContainer>
    </>
  );
}

export default App;
